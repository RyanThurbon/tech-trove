import { Card, CardContent } from "@/components/ui/card.tsx";

export function NoPostsFallback() {
	return (
		<Card>
			<CardContent>No posts found</CardContent>
		</Card>
	);
}
