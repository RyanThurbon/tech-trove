import {
	getStoryIdsQueryOptions,
	QueryParams,
} from "@/queries/get-stories-query-options";
import { useSuspenseQueries, useSuspenseQuery } from "@tanstack/react-query";
import { getStoryQueryOptions } from "@/queries/get-story-query-options.ts";

type UseStoryDetailsOpts = {
	type: QueryParams["type"];
	page: number;
	perPage: number;
};

export function useStoryDetails(opts: UseStoryDetailsOpts) {
	const { type, page, perPage } = opts;

	const stories = useSuspenseQuery(
		getStoryIdsQueryOptions({
			type,
			page,
			perPage,
		}),
	);

	const storyDetails = useSuspenseQueries({
		queries: stories.data.ids.map((id) => getStoryQueryOptions(id)),
	});

	return {
		storyDetails,
		count: stories.data.totalCount,
	};
}
