import { ContentLayout } from "@/components/layouts/content-layout.tsx";
import { LinkOptions } from "@tanstack/react-router";
import { DesktopNavbar } from "@/components/shared/navbar/desktop.tsx";
import { MobileNavbar } from "@/components/shared/navbar/mobile.tsx";
import { Logo } from "@/components/shared/logo.tsx";

export type Nav = {
	label: string;
	to: LinkOptions["to"];
};

export const nav: Nav[] = [
	{
		label: "Trending",
		to: "/",
	},
	{
		label: "Recent",
		to: "/new-stories",
	},
	{
		label: "Best",
		to: "/best-stories",
	},
	{
		label: "Showcases",
		to: "/show-stories",
	},
	{
		label: "Jobs",
		to: "/job-stories",
	},
];

export function Navbar() {
	return (
		<section id="navbar">
			<header className="flex justify-center bg-card border-b border-primary py-4">
				<ContentLayout>
					<nav className="flex items-center justify-between">
						<Logo />
						<DesktopNavbar nav={nav} />
						<MobileNavbar nav={nav} />
					</nav>
				</ContentLayout>
			</header>
		</section>
	);
}
