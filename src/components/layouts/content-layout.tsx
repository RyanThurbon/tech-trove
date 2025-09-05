import { cn } from "@/lib/utils.ts";
import { PropsWithChildren } from "react";

type ContentLayoutProps = PropsWithChildren & {
	className?: string;
};

export function ContentLayout(props: ContentLayoutProps) {
	return (
		<div
			className={cn(
				"container mx-auto max-w-6xl px-4 sm:px-6",
				props.className,
			)}
		>
			{props.children}
		</div>
	);
}
