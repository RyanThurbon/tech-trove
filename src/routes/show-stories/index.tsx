import { createFileRoute } from "@tanstack/react-router";
import { ShowStories } from "@/components/features/show-stories";

export const Route = createFileRoute("/show-stories/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <ShowStories />;
}
