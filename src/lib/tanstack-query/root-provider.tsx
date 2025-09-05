import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
import { ONE_HOUR } from "@/lib/constants.ts";

export function getContext() {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnReconnect: false,
				refetchOnMount: false,
				refetchOnWindowFocus: false,
				staleTime: 5 * ONE_HOUR,
				gcTime: 4 * ONE_HOUR,
			},
		},
	});
	return {
		queryClient,
	};
}

export function Provider({
	children,
	queryClient,
}: {
	children: ReactNode;
	queryClient: QueryClient;
}) {
	return (
		<QueryClientProvider client={queryClient}>
			{children}
		</QueryClientProvider>
	);
}
