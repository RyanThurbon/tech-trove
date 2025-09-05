import { createFileRoute } from "@tanstack/react-router";
import { JobStories } from "@/components/features/job-stories";

export const Route = createFileRoute("/job-stories/")({
	component: RouteComponent,
});

function RouteComponent() {
	return <JobStories />;
}
