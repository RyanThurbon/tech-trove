import { useSearch } from "@tanstack/react-router";
import { StoryList } from "@/components/shared/story-list.tsx";

export function NewStoriesList() {
	const { page, perPage } = useSearch({ from: "/new-stories/" });

	return (
		<StoryList
			route="/new-stories"
			type="new"
			perPage={perPage}
			page={page}
		/>
	);
}
