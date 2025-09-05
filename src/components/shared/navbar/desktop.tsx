import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button.tsx";
import { Nav } from "@/components/shared/navbar/index.tsx";

export function DesktopNavbar({ nav }: { nav: Nav[] }) {
	return (
		<div className="hidden md:block">
			{nav.map((item, index) => (
				<Link
					to={item.to}
					key={index}
					className={buttonVariants({ variant: "ghost" })}
					aria-label={item.label}
					activeProps={{
						className: "text-primary",
					}}
				>
					{item.label}
				</Link>
			))}
		</div>
	);
}
