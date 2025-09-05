import { StoryList } from "@/components/shared/story-list.tsx";
import { useSearch } from "@tanstack/react-router";

export function JobStoriesList() {
	const { page, perPage } = useSearch({ from: "/job-stories/" });

	return (
		<StoryList
			route="/job-stories"
			type="job"
			perPage={perPage}
			page={page}
		/>
	);
}
