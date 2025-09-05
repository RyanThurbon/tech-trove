import { createFileRoute } from "@tanstack/react-router";
import { TopStories } from "@/components/features/top-stories";

export const Route = createFileRoute("/")({
	component: App,
});

function App() {
	return <TopStories />;
}
