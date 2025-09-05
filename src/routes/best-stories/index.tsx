import { createFileRoute } from "@tanstack/react-router";
import { BestStories } from "@/components/features/best-stories";

export const Route = createFileRoute("/best-stories/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <BestStories />;
}
