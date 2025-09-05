import { Suspense } from "react";
import { PendingFallback } from "@/components/shared/fallbacks/pending-fallback.tsx";
import { ShowStoriesList } from "@/components/features/show-stories/show-stories-list.tsx";
import { SectionHeading } from "@/components/shared/section-heading.tsx";

export function ShowStories() {
	return (
		<section id="new-stories">
			<div className="flex flex-col gap-y-6">
				<SectionHeading
					title="Project showcases"
					description="Projects, tools, and creations shared by developers"
				/>
				<Suspense fallback={<PendingFallback />}>
					<ShowStoriesList />
				</Suspense>
			</div>
		</section>
	);
}
