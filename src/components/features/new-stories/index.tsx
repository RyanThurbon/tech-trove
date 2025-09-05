import { Suspense } from "react";
import { PendingFallback } from "@/components/shared/fallbacks/pending-fallback.tsx";
import { NewStoriesList } from "@/components/features/new-stories/new-stories-list.tsx";
import { SectionHeading } from "@/components/shared/section-heading.tsx";

export function NewStories() {
	return (
		<section id="new-stories">
			<div className="flex flex-col gap-y-6">
				<SectionHeading
					title="Recently created stories"
					description="Stories that have been posted recently"
				/>
				<Suspense fallback={<PendingFallback />}>
					<NewStoriesList />
				</Suspense>
			</div>
		</section>
	);
}
