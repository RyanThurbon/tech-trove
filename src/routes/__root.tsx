import {
	createRootRouteWithContext,
	HeadContent,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import type { QueryClient } from "@tanstack/react-query";
import { Navbar } from "@/components/shared/navbar";
import { Hero } from "@/components/hero.tsx";
import { ContentLayout } from "@/components/layouts/content-layout.tsx";
import { ReactNode } from "react";
import { z } from "zod";
import { Footer } from "@/components/shared/footer.tsx";
import { Analytics } from "@vercel/analytics/react";
import { Scripts } from "@tanstack/react-start";

interface IRootRouteContext {
	queryClient: QueryClient;
}

const rootSearchParamSchema = z
	.object({
		page: z.number().min(1).optional(),
		perPage: z.number().min(1).optional(),
	})
	.optional();

export const Route = createRootRouteWithContext<IRootRouteContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com",
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap",
			},
		],
	}),
	validateSearch: (params) => {
		const parsed = rootSearchParamSchema.safeParse(params);

		if (!parsed.success) {
			return rootSearchParamSchema.parse({});
		}

		return parsed.data;
	},
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<title>TechTrove</title>
				<HeadContent />
			</head>
			<body>
				<ContentLayout>
					<main className="flex flex-col min-h-screen">
						<Navbar />
						<div className="flex flex-col gap-y-10 flex-1 mt-16">
							<Hero />
							{children}
						</div>
						<Footer />
					</main>
				</ContentLayout>
				<Analytics />
				<Scripts />
			</body>
		</html>
	);
}
