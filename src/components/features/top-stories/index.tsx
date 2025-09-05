import { TopStoriesList } from "@/components/features/top-stories/top-stories-list.tsx";
import { SectionHeading } from "@/components/shared/section-heading.tsx";
import { Suspense } from "react";
import { PendingFallback } from "@/components/shared/fallbacks/pending-fallback.tsx";

export function TopStories() {
	return (
		<section id="top-stories">
			<div className="flex flex-col gap-y-6">
				<SectionHeading
					title="Currently trending stories"
					description="Stories that are currently trending in popularity"
				/>
				<Suspense fallback={<PendingFallback />}>
					<TopStoriesList />
				</Suspense>
			</div>
		</section>
	);
}
