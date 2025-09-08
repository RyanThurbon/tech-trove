import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card.tsx";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button.tsx";
import {
	ArrowUpIcon,
	ExternalLinkIcon,
	MessageCircleMoreIcon,
} from "lucide-react";
import { Story } from "@/server/types.ts";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function StoryCard({ story, isJob }: { story: Story; isJob?: boolean }) {
	return (
		<Card key={story.id}>
			<CardHeader className="flex items-center justify-between">
				<CardTitle>
					<div className="max-w-[200px] md:max-w-[400px] flex flex-col gap-y-1">
						<a
							href={`https://news.ycombinator.com/user?id=${story.by}`}
							target="_blank"
							className="hover:text-primary truncate"
						>
							{story.by}
						</a>
						<span className="text-sm text-muted-foreground">
							{dayjs.unix(story.time).fromNow()}
						</span>
					</div>
				</CardTitle>
				<p className="flex items-center gap-x-2 text-sm text-muted-foreground">
					<ArrowUpIcon className="size-4" />
					{story.score}
				</p>
			</CardHeader>
			<CardContent>{story.title}</CardContent>
			<CardFooter className="flex items-center gap-x-2">
				<Button variant="secondary">
					<a
						href={`https://news.ycombinator.com/item?id=${story.id}`}
						target="_blank"
						className="flex items-center gap-x-2"
					>
						<MessageCircleMoreIcon className="size-4" />
						Discuss
					</a>
				</Button>
				<Button variant="secondary">
					<a
						href={story.url}
						className="flex items-center gap-x-2"
						target="_blank"
					>
						<ExternalLinkIcon className="size-4" />
						{isJob ? "Apply" : "View"}
					</a>
				</Button>
			</CardFooter>
		</Card>
	);
}
