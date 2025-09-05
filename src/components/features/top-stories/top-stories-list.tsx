import { useSearch } from "@tanstack/react-router";
import { StoryList } from "@/components/shared/story-list.tsx";

export function TopStoriesList() {
	const { page, perPage } = useSearch({ from: "/" });

	return <StoryList route="/" type="top" perPage={perPage} page={page} />;
}
