import { createServerFn } from "@tanstack/react-start";
import { env } from "@/env.ts";
import { betterFetch } from "@/lib/better-fetch.ts";
import { z } from "zod";

const ENDPOINT = env.HACKER_NEWS_BASE_ENDPOINT;

export const storiesSchema = z.object({
	type: z
		.enum(["top", "new", "best", "show", "job", "ask"])
		.optional()
		.default("top"),
	page: z.number().min(1).optional().default(1),
	perPage: z.number().min(1).optional().default(3),
});

export const $getStoryIdsFn = createServerFn({ method: "GET" })
	.validator(storiesSchema)
	.handler(async ({ data }) => {
		const { data: storyIds, error } = await betterFetch<number[]>(
			`${ENDPOINT}/${data.type}stories.json?print=pretty`,
		);

		if (error) {
			console.error(error);
			throw new Error(error.message);
		}

		const startIndex = (data.page - 1) * data.perPage;
		const endIndex = startIndex + data.perPage;
		const pageStoryIds = storyIds.slice(startIndex, endIndex);

		return {
			ids: pageStoryIds,
			totalCount: storyIds.length,
		};
	});
