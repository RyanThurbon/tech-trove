import { useStoryDetails } from "@/hooks/use-story-details.ts";
import { StoryCard } from "@/components/shared/story-card.tsx";
import PaginationNavigation from "@/components/shared/pagination.tsx";
import { QueryParams } from "@/queries/get-stories-query-options.ts";
import { LinkOptions } from "@tanstack/react-router";

type StoryListProps = QueryParams & {
	route: LinkOptions["to"];
};

export function StoryList(props: StoryListProps) {
	const { type, page, perPage, route } = props;

	const stories = useStoryDetails({
		type,
		page,
		perPage,
	});

	const maxPages = Math.ceil(stories.count / perPage);

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
				currentPage={page}
				totalPages={maxPages}
				route={route}
			/>
		</div>
	);
}
