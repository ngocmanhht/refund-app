import { QueryClient } from "@tanstack/react-query";
import { uiStore } from "../stores/ui";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
    mutations: {
      onMutate: () => {
        uiStore.showLoading();
      },

      onSettled: () => {
        uiStore.hideLoading();
      },
      onError: () => {},
    },
  },
});
