import { useSearch } from "@tanstack/react-router";
import { StoryList } from "@/components/shared/story-list.tsx";

export function BestStoriesList() {
	const { page, perPage } = useSearch({ from: "/best-stories/" });

	return (
		<StoryList
			route="/best-stories"
			type="best"
			perPage={perPage}
			page={page}
		/>
	);
}
