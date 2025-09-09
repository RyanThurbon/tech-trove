// COMPONENT FROM ORIGIN UI :)
// SMALL ADJUSTMENTS TO MATCH WHAT I NEED.

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { usePagination } from "@/hooks/use-pagination";
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
} from "@/components/ui/pagination";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useNavigate, useRouterState } from "@tanstack/react-router";

type PaginationProps = {
	currentPage: number;
	totalPages: number;
	route: string;
	paginationItemsToDisplay?: number;
};

export default function PaginationNavigation({
	currentPage,
	totalPages,
	route,
	paginationItemsToDisplay = 5,
}: PaginationProps) {
	const { pages, showLeftEllipsis, showRightEllipsis } = usePagination({
		currentPage,
		totalPages,
		paginationItemsToDisplay,
	});

	const navigate = useNavigate();

	const location = useRouterState({
		select: (state) => state.location,
	});

	const currentSearch = location.search;

	return (
		<div className="flex items-center flex-col md:flex-row md:justify-between gap-3 mt-4">
			{/* Page number information */}
			<p
				className="text-muted-foreground flex-1 text-sm whitespace-nowrap hidden lg:block"
				aria-live="polite"
			>
				Page <span className="text-foreground">{currentPage}</span> of{" "}
				<span className="text-foreground">{totalPages}</span>
			</p>

			{/* Pagination */}
			<div className="grow">
				<Pagination>
					<PaginationContent>
						{/* Previous page button */}
						<PaginationItem>
							<PaginationLink
								className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
								onClick={async (e) => {
									e.preventDefault();
									await navigate({
										to: route,
										search: {
											...currentSearch,
											page: currentPage - 1,
										},
									});
								}}
								aria-label="Go to previous page"
								aria-disabled={
									currentPage === 1 ? true : undefined
								}
								role={currentPage === 1 ? "link" : undefined}
							>
								<ChevronLeftIcon size={16} aria-hidden="true" />
							</PaginationLink>
						</PaginationItem>

						{/* Left ellipsis (...) */}
						{showLeftEllipsis && (
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
						)}

						{/* Page number links */}
						{pages.map((page) => (
							<PaginationItem key={page}>
								<PaginationLink
									onClick={async (e) => {
										e.preventDefault();
										await navigate({
											to: route,
											search: {
												...currentSearch,
												page,
											},
										});
									}}
									isActive={page === currentPage}
								>
									{page}
								</PaginationLink>
							</PaginationItem>
						))}

						{/* Right ellipsis (...) */}
						{showRightEllipsis && (
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
						)}

						{/* Next page button */}
						<PaginationItem>
							<PaginationLink
								className="aria-disabled:pointer-events-none aria-disabled:opacity-50"
								onClick={async (e) => {
									e.preventDefault();
									await navigate({
										to: route,
										search: {
											...currentSearch,
											page: currentPage + 1,
										},
									});
								}}
								aria-label="Go to next page"
								aria-disabled={
									currentPage === totalPages
										? true
										: undefined
								}
								role={
									currentPage === totalPages
										? "link"
										: undefined
								}
							>
								<ChevronRightIcon
									size={16}
									aria-hidden="true"
								/>
							</PaginationLink>
						</PaginationItem>
					</PaginationContent>
				</Pagination>
			</div>

			{/* Results per page */}
			<div className="flex flex-1 justify-end">
				<Select
					defaultValue={String(currentSearch?.perPage ?? 3)}
					value={String(currentSearch?.perPage ?? 3)}
					aria-label="Results per page"
					onValueChange={async (value) => {
						await navigate({
							to: route,
							search: {
								...currentSearch,
								perPage: Number(value),
							},
						});
					}}
				>
					<SelectTrigger
						id="results-per-page"
						className="w-fit whitespace-nowrap"
					>
						<SelectValue placeholder="Select number of results" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="3">3 / page</SelectItem>
						<SelectItem value="5">5 / page</SelectItem>
						<SelectItem value="10">10 / page</SelectItem>
						<SelectItem value="20">20 / page</SelectItem>
						<SelectItem value="50">50 / page</SelectItem>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
}
