import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { $getItemByIdFn } from "@/server/functions/get-item-by-id-fn.ts";

export const getStoryQueryOptions = (id: number) => {
	return queryOptions({
		queryKey: ["story", id],
		queryFn: () => $getItemByIdFn({ data: { id } }),
		placeholderData: keepPreviousData,
	});
};
