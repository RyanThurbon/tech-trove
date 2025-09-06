import { useStoryDetails } from "@/hooks/use-story-details.ts";
import { StoryCard } from "@/components/shared/story-card.tsx";
import PaginationNavigation from "@/components/shared/pagination.tsx";
import { QueryParams } from "@/queries/get-stories-query-options.ts";
import { useRouterState } from "@tanstack/react-router";

type StoryListProps = {
	type: QueryParams["type"];
};

export function StoryList(props: StoryListProps) {
	const { type } = props;

	const location = useRouterState({
		select: (state) => state.location,
	});

	const currentSearch = location.search;

	const stories = useStoryDetails({
		type,
		page: currentSearch?.page ?? 1,
		perPage: currentSearch?.perPage ?? 3,
	});

	const maxPages = Math.ceil(stories.count / (currentSearch?.perPage ?? 3));

	return (
		<div className="flex flex-col gap-y-4">
			{stories.storyDetails.map((story) => (
				<StoryCard
					key={story.data.id}
					story={story.data}
					isJob={type === "job"}
				/>
			))}
			<PaginationNavigation
				currentPage={currentSearch?.page ?? 1}
				totalPages={maxPages}
				route={location.pathname}
			/>
		</div>
	);
}
