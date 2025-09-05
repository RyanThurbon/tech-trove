import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card.tsx";

type SectionHeadingProps = {
	title: string;
	description: string;
};

export function SectionHeading(props: SectionHeadingProps) {
	return (
		<div className="flex flex-col gap-y-2">
			<Card>
				<CardHeader>
					<CardTitle className="capitalize text-xl lexend-bold">
						{props.title}
					</CardTitle>
					<CardDescription>{props.description}</CardDescription>
				</CardHeader>
			</Card>
		</div>
	);
}
