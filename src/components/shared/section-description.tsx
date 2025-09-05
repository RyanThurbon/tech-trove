import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils.ts";

type SectionDescriptionProps = PropsWithChildren & {
	className?: string;
};

export function SectionDescription(props: SectionDescriptionProps) {
	return (
		<h2 className={cn("text-muted-foreground", props.className)}>
			{props.children}
		</h2>
	);
}
