import { Icons } from "@/components/shared/icons.tsx";

export function PendingFallback() {
	return (
		<div className="flex w-full justify-center py-10">
			<Icons.loader className="size-6" />
		</div>
	);
}
