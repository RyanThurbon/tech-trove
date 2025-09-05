import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
	server: {
		HACKER_NEWS_BASE_ENDPOINT: z.url(),
		HACKER_NEWS_ITEMS_ENDPOINT: z.url(),
	},
	clientPrefix: "VITE_",

	client: {},
	//@ts-ignore
	runtimeEnv: process.env,
	emptyStringAsUndefined: true,
});
