import { Suspense } from "react";
import { PendingFallback } from "@/components/shared/fallbacks/pending-fallback.tsx";
import { JobStoriesList } from "@/components/features/job-stories/job-stories-list.tsx";
import { SectionHeading } from "@/components/shared/section-heading.tsx";

export function JobStories() {
	return (
		<section id="new-stories">
			<div className="flex flex-col gap-y-6">
				<SectionHeading
					title="Job opportunities"
					description="Discover the latest tech job postings"
				/>
				<Suspense fallback={<PendingFallback />}>
					<JobStoriesList />
				</Suspense>
			</div>
		</section>
	);
}
