import { Link } from "@tanstack/react-router";
import { BugIcon } from "lucide-react";

export function Logo() {
	return (
		<Link to="/" className="flex items-center gap-x-2">
			<BugIcon className="size-6 text-primary" />
			<h1 className="text-lg lexend-bold uppercase tracking-tight leading-snug">
				TechTrove
			</h1>
		</Link>
	);
}
