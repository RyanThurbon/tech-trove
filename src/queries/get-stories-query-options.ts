import { keepPreviousData, queryOptions } from "@tanstack/react-query";
import { z } from "zod";
import {
	$getStoryIdsFn,
	storiesSchema,
} from "@/server/functions/get-story-ids-fn.ts";

export type QueryParams = z.infer<typeof storiesSchema>;

export const getStoryIdsQueryOptions = (data: QueryParams) => {
	return queryOptions({
		queryKey: ["stories", data],
		queryFn: () => $getStoryIdsFn({ data }),
		placeholderData: keepPreviousData,
	});
};
