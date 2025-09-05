import { Suspense } from "react";
import { PendingFallback } from "@/components/shared/fallbacks/pending-fallback.tsx";
import { BestStoriesList } from "@/components/features/best-stories/best-stories-list.tsx";
import { SectionHeading } from "@/components/shared/section-heading.tsx";

export function BestStories() {
	return (
		<section id="new-stories">
			<div className="flex flex-col gap-y-6">
				<SectionHeading
					title="Highly rated stories"
					description="The most upvoted and highly regarded posts"
				/>
				<Suspense fallback={<PendingFallback />}>
					<BestStoriesList />
				</Suspense>
			</div>
		</section>
	);
}
