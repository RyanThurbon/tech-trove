import { Nav } from "@/components/shared/navbar/index.tsx";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet.tsx";
import { BugIcon, MenuIcon } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils.ts";
import { Button, buttonVariants } from "@/components/ui/button.tsx";

export function MobileNavbar({ nav }: { nav: Nav[] }) {
	return (
		<Sheet>
			<SheetTrigger
				asChild
				className="block md:hidden"
				aria-label="Open menu"
			>
				<Button size="icon" variant="ghost">
					<MenuIcon className="size-5" />
				</Button>
			</SheetTrigger>
			<SheetContent side="bottom" className="py-2">
				<SheetHeader>
					<SheetTitle className="sr-only">Menu</SheetTitle>
					<SheetDescription className="flex items-center gap-x-2 uppercase">
						<BugIcon className="size-4 text-primary" />
						TechTrove
					</SheetDescription>
				</SheetHeader>
				{nav.map((item, index) => (
					<Link
						key={index}
						to={item.to}
						className={cn(
							buttonVariants({ variant: "ghost" }),
							"inline-block",
						)}
						aria-label={item.label}
						activeProps={{
							className: "text-primary",
						}}
					>
						{item.label}
					</Link>
				))}
			</SheetContent>
		</Sheet>
	);
}
