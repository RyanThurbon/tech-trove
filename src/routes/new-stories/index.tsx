import { createFileRoute } from "@tanstack/react-router";
import { NewStories } from "@/components/features/new-stories";

export const Route = createFileRoute("/new-stories/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <NewStories />;
}
