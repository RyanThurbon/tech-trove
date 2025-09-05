import { createServerFn } from "@tanstack/react-start";
import { env } from "@/env.ts";
import { betterFetch } from "@/lib/better-fetch.ts";
import { z } from "zod";
import { Item } from "@/server/types.ts";

const ENDPOINT = env.HACKER_NEWS_ITEMS_ENDPOINT;

const payload = z.object({
	id: z.number(),
});

export const $getItemByIdFn = createServerFn({ method: "GET" })
	.validator(payload)
	.handler(async ({ data }) => {
		const { data: itemData, error } = await betterFetch<Item>(
			`${ENDPOINT}/${data.id}.json?print=pretty`,
		);

		if (error) {
			console.error(error);
			throw new Error(error.message);
		}

		return itemData;
	});
