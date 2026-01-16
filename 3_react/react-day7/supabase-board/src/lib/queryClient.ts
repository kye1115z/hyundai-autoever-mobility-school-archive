import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60,
      refetchOnWindowFocus: false, // 기본값 true
    },
  },
});

// 1분이 지나서 리프레시나 나갔다가 다시 들어오면 캐시를 업데이트 함
// 30초 정도일 때 리프레시 하면 기존 캐시 그대로 사용함.
// 그게 refetch인데 그걸 false 한 것임.
