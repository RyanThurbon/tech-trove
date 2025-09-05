import * as z from "zod";

const itemSchema = z.object({
	id: z.number(),
	type: z.enum(["job", "story", "poll", "comment", "pollopt"]),
	by: z.string(),
	time: z.number(),
	text: z.string(),
	url: z.url(),
	score: z.number(),
	title: z.string(),
});

const storySchema = z.object({
	id: z.number(),
	type: z.enum(["job", "story", "poll", "comment", "pollopt"]),
	by: z.string(),
	time: z.number(),
	url: z.url(),
	score: z.number(),
	title: z.string(),
});

export type Item = z.infer<typeof itemSchema>;
export type Story = z.infer<typeof storySchema>;
