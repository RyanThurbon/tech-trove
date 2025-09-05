import { SectionDescription } from "@/components/shared/section-description.tsx";

export function Hero() {
	return (
		<section id="hero">
			<div className="flex flex-col gap-y-4 md:gap-y-2">
				<h2 className="text-4xl sm:text-5x lexend-bold capitalize">
					Hacker news digest
				</h2>
				<SectionDescription>
					Stay up to date with the latest tech news, trending stories,
					job postings, and in-depth discussions from the Hacker News
					community. Explore innovative projects, uncover career
					opportunities, and connect with the vibrant developer and
					technology ecosystem — all in one place.
				</SectionDescription>
			</div>
		</section>
	);
}
