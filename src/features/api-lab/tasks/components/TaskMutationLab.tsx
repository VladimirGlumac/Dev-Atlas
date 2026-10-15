import { Check, Plus, RotateCcw, Trash2 } from "lucide-react";

import { useState, type FormEvent } from "react";

import { useTasks } from "../hooks/useTasks";
import { useCreateTask } from "../hooks/useCreateTask";
import { useToggleTask } from "../hooks/useToggleTask";
import { useDeleteTask } from "../hooks/useDeleteTask";

export default function TaskMutationLab() {
  const [title, setTitle] = useState("");

  const tasksQuery = useTasks();

  const createTaskMutation = useCreateTask();

  const toggleTaskMutation = useToggleTask();

  const deleteTaskMutation = useDeleteTask();

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      return;
    }

    createTaskMutation.mutate(
      {
        title: trimmedTitle,
      },
      {
        onSuccess: () => {
          setTitle("");
        },
      },
    );
  }

  return (
    <div
      className="
        rounded-3xl
        border border-slate-200
        bg-white
        p-6
        dark:border-slate-800
        dark:bg-slate-900
      "
    >
      <div>
        <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
          Mutation Lab
        </p>

        <h2 className="mt-1 text-2xl font-bold">Task mutations</h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Practice create, update and delete mutations with useMutation and
          invalidateQueries.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="
          mt-6
          flex
          flex-col
          gap-3
          sm:flex-row
        "
      >
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="New task..."
          className="
            flex-1
            rounded-xl
            border border-slate-200
            bg-transparent
            px-4
            py-3
            outline-none
            focus:border-cyan-500
            dark:border-slate-700
          "
        />

        <button
          type="submit"
          disabled={createTaskMutation.isPending}
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-cyan-500
            px-5
            py-3
            font-semibold
            text-slate-950
            transition
            hover:bg-cyan-400
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          <Plus size={17} />

          {createTaskMutation.isPending ? "Creating..." : "Create"}
        </button>
      </form>

      {createTaskMutation.isError && (
        <p className="mt-4 text-sm text-red-500">Failed to create task.</p>
      )}

      <div className="mt-6">
        {tasksQuery.isPending ? (
          <p className="text-sm text-slate-500">Loading tasks...</p>
        ) : tasksQuery.isError ? (
          <p className="text-sm text-red-500">Failed to load tasks.</p>
        ) : (
          <ul className="space-y-2">
            {tasksQuery.data.map((task) => {
              const isToggling =
                toggleTaskMutation.isPending &&
                toggleTaskMutation.variables === task.id;

              const isDeleting =
                deleteTaskMutation.isPending &&
                deleteTaskMutation.variables === task.id;

              return (
                <li
                  key={task.id}
                  className="
                      flex
                      items-center
                      justify-between
                      gap-4
                      rounded-xl
                      border border-slate-200
                      px-4
                      py-3
                      dark:border-slate-800
                    "
                >
                  <div className="min-w-0">
                    <p
                      className={
                        task.completed
                          ? "text-sm text-slate-400 line-through"
                          : "text-sm"
                      }
                    >
                      {task.title}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {task.completed ? "Completed" : "Open"}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => toggleTaskMutation.mutate(task.id)}
                      disabled={isToggling || isDeleting}
                      className="
                          inline-flex
                          size-9
                          items-center
                          justify-center
                          rounded-lg
                          border border-slate-200
                          transition
                          hover:border-cyan-400
                          hover:text-cyan-600
                          disabled:cursor-not-allowed
                          disabled:opacity-50
                          dark:border-slate-700
                          dark:hover:text-cyan-400
                        "
                      aria-label={
                        task.completed
                          ? "Mark task as open"
                          : "Mark task as completed"
                      }
                    >
                      {isToggling ? (
                        <span className="text-xs">...</span>
                      ) : task.completed ? (
                        <RotateCcw size={16} />
                      ) : (
                        <Check size={16} />
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => deleteTaskMutation.mutate(task.id)}
                      disabled={isDeleting || isToggling}
                      className="
                          inline-flex
                          size-9
                          items-center
                          justify-center
                          rounded-lg
                          border border-slate-200
                          transition
                          hover:border-red-400
                          hover:text-red-500
                          disabled:cursor-not-allowed
                          disabled:opacity-50
                          dark:border-slate-700
                        "
                      aria-label="Delete task"
                    >
                      {isDeleting ? (
                        <span className="text-xs">...</span>
                      ) : (
                        <Trash2 size={16} />
                      )}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {toggleTaskMutation.isError && (
        <p className="mt-4 text-sm text-red-500">Failed to update task.</p>
      )}

      {deleteTaskMutation.isError && (
        <p className="mt-4 text-sm text-red-500">Failed to delete task.</p>
      )}

      <div
        className="
          mt-6
          rounded-2xl
          border border-slate-200
          bg-slate-50
          p-5
          dark:border-slate-800
          dark:bg-slate-950/40
        "
      >
        <p className="text-sm font-semibold">Under the hood</p>

        <div
          className="
            mt-4
            grid
            gap-4
            md:grid-cols-3
          "
        >
          <div>
            <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
              CREATE
            </p>

            <pre className="mt-2 whitespace-pre-wrap text-xs leading-6 text-slate-500">
              {`mutate(input)
                ↓
                mutationFn(input)
                ↓
                createTask()
                ↓
                server state changes
                ↓
                onSuccess
                ↓
                invalidateQueries()
                ↓
                query refetch
                ↓
                cache updates
                ↓
                UI rerenders`}
            </pre>
          </div>

          <div>
            <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
              UPDATE
            </p>

            <pre className="mt-2 whitespace-pre-wrap text-xs leading-6 text-slate-500">
              {`mutate(id)
                ↓
                onMutate(id)
                ↓
                cancelQueries()
                ↓
                snapshot old cache
                ↓
                optimistic setQueryData()
                ↓
                UI updates immediately
                ↓
                mutationFn(id)
                ↓
                server request

                SUCCESS
                → replace with server result

                ERROR
                → rollback snapshot

                onSettled
                → invalidate + sync`}
            </pre>
          </div>

          <div>
            <p className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">
              DELETE
            </p>

            <pre className="mt-2 whitespace-pre-wrap text-xs leading-6 text-slate-500">
              {`mutate(id)
                ↓
                mutationFn(id)
                ↓
                deleteTask(id)
                ↓
                server state changes
                ↓
                onSuccess
                ↓
                invalidateQueries()
                ↓
                query refetch
                ↓
                cache updates
                ↓
                UI rerenders`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
