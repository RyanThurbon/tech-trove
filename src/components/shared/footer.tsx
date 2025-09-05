import { Link } from "@tanstack/react-router";
import dayjs from "dayjs";
import { nav } from "@/components/shared/navbar";

export function Footer() {
	return (
		<section id="footer">
			<footer className="flex flex-col gap-y-4 sm:flex-row items-center lg:justify-between mt-20 py-10 border-t text-sm ">
				<nav className="flex items-center justify-center gap-x-6 flex-wrap">
					{nav.map((item, index) => (
						<Link
							to={item.to}
							key={index}
							className="hover:text-primary hover:cursor-pointer"
							activeProps={{
								className: "text-primary",
							}}
						>
							{item.label}
						</Link>
					))}
				</nav>
				<p className="text-muted-foreground">
					&copy; <span>{dayjs().year()}</span> Ryan Thurbon. All
					rights reserved.
				</p>
			</footer>
		</section>
	);
}
