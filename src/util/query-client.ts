import { QueryClient, QueryFunction, QueryKey, UseQueryOptions, UseQueryResult } from "react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // サスペンスの対応設定
			suspense: true,

			// APIでエラーが起きても再トライしない
			retry: false,

			// APIの結果をキャッシュしない
			cacheTime: 0,

			// マウント時必ず再フェッチ
			refetchOnMount: "always",
    },
  },
});

// suspense: trueの時の型を公式が対応していないので、無理やり対応する。

declare module 'react-query'{
	function useQuery<TQueryFnData = unknown, TError = unknown, TData = TQueryFnData, TQueryKey extends QueryKey = QueryKey>(
		queryKey: TQueryKey,
		queryFn: QueryFunction<TQueryFnData, TQueryKey>,
		options?: Omit<UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>, 'queryKey' | 'queryFn' > & {
			suspense: true;
		}
	): UseQueryResult<TData, TError> & {
		data: TData;
	};
}