import type { CreateTaskInput, Task } from "../types/task";

let tasks: Task[] = [
  {
    id: 1,
    title: "Learn useQuery",
    completed: true,
  },
  {
    id: 2,
    title: "Practice useMutation",
    completed: false,
  },
];

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

export async function fetchTasks(): Promise<Task[]> {
  await delay(400);

  return [...tasks];
}

export async function createTask(input: CreateTaskInput): Promise<Task> {
  await delay(600);

  const task: Task = {
    id: tasks.length === 0 ? 1 : Math.max(...tasks.map((item) => item.id)) + 1,

    title: input.title,
    completed: false,
  };

  tasks = [...tasks, task];

  return task;
}

export async function toggleTask(id: number): Promise<Task> {
  await delay(500);

  const task = tasks.find((item) => item.id === id);

  if (!task) {
    throw new Error("Task not found.");
  }

  const updatedTask: Task = {
    ...task,
    completed: !task.completed,
  };

  tasks = tasks.map((item) => (item.id === id ? updatedTask : item));

  return updatedTask;
}

export async function deleteTask(id: number): Promise<number> {
  await delay(500);

  const exists = tasks.some((item) => item.id === id);

  if (!exists) {
    throw new Error("Task not found.");
  }

  tasks = tasks.filter((item) => item.id !== id);

  return id;
}
