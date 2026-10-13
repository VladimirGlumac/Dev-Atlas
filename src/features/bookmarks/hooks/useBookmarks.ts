import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  addLessonBookmark,
  getBookmarks,
  removeLessonBookmark,
} from "../services/bookmarkService";

import { bookmarkQueryKeys } from "../api/bookmarkQueryKeys";

export function useBookmarks() {
  const queryClient = useQueryClient();

  const bookmarksQuery = useQuery({
    queryKey: bookmarkQueryKeys.all,

    queryFn: getBookmarks,
  });

  const addBookmarkMutation = useMutation({
    mutationFn: addLessonBookmark,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: bookmarkQueryKeys.all,
      });
    },
  });

  const removeBookmarkMutation = useMutation({
    mutationFn: removeLessonBookmark,

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: bookmarkQueryKeys.all,
      });
    },
  });

  return {
    bookmarks: bookmarksQuery.data ?? [],

    isLoading: bookmarksQuery.isPending,

    isError: bookmarksQuery.isError,

    addBookmark: addBookmarkMutation.mutate,

    removeBookmark: removeBookmarkMutation.mutate,

    isAdding: addBookmarkMutation.isPending,

    isRemoving: removeBookmarkMutation.isPending,
  };
}
