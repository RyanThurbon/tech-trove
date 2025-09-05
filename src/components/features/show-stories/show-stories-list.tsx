import { useSearch } from "@tanstack/react-router";
import { StoryList } from "@/components/shared/story-list.tsx";

export function ShowStoriesList() {
	const { page, perPage } = useSearch({ from: "/show-stories/" });

	return (
		<StoryList
			route="/show-stories"
			type="show"
			perPage={perPage}
			page={page}
		/>
	);
}
