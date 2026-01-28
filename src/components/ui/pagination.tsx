import { Link } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    baseUrl: string;
    searchParams?: Record<string, string | undefined>;
}

export function Pagination({ currentPage, totalPages, baseUrl, searchParams }: PaginationProps) {
    if (totalPages <= 1) return null;

    const createPageUrl = (page: number) => {
        const params = new URLSearchParams();
        if (searchParams) {
            Object.entries(searchParams).forEach(([key, value]) => {
                if (value && key !== 'page') {
                    params.set(key, value);
                }
            });
        }
        params.set('page', page.toString());
        return `${baseUrl}?${params.toString()}`;
    };

    const renderPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;
        let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
        let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

        if (endPage - startPage + 1 < maxVisiblePages) {
            startPage = Math.max(1, endPage - maxVisiblePages + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <Link key={i} href={createPageUrl(i)}>
                    <Button
                        variant={currentPage === i ? "default" : "outline"}
                        size="icon"
                        className={cn(
                            "w-10 h-10 transition-all",
                            currentPage === i
                                ? "bg-purple-600 hover:bg-purple-700 text-white border-purple-500 shadow-md shadow-purple-500/20"
                                : "text-slate-400 border-slate-700 hover:bg-slate-800 hover:text-white"
                        )}
                    >
                        {i}
                    </Button>
                </Link>
            );
        }
        return pages;
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-12 mb-8">
            {/* First Page */}
            <Link href={createPageUrl(1)} className={cn("transition-opacity", currentPage <= 1 ? "pointer-events-none opacity-50" : "opacity-100")}>
                <Button variant="outline" size="icon" className="w-10 h-10 border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white">
                    <ChevronsLeft className="h-4 w-4" />
                </Button>
            </Link>

            {/* Previous Page */}
            <Link href={createPageUrl(Math.max(1, currentPage - 1))} className={cn("transition-opacity", currentPage <= 1 ? "pointer-events-none opacity-50" : "opacity-100")}>
                <Button variant="outline" size="icon" className="w-10 h-10 border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white">
                    <ChevronLeft className="h-4 w-4" />
                </Button>
            </Link>

            {/* Page Numbers */}
            <div className="flex items-center gap-2 mx-2">
                {renderPageNumbers()}
            </div>

            {/* Next Page */}
            <Link href={createPageUrl(Math.min(totalPages, currentPage + 1))} className={cn("transition-opacity", currentPage >= totalPages ? "pointer-events-none opacity-50" : "opacity-100")}>
                <Button variant="outline" size="icon" className="w-10 h-10 border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white">
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </Link>

            {/* Last Page */}
            <Link href={createPageUrl(totalPages)} className={cn("transition-opacity", currentPage >= totalPages ? "pointer-events-none opacity-50" : "opacity-100")}>
                <Button variant="outline" size="icon" className="w-10 h-10 border-slate-700 text-slate-400 hover:bg-slate-800 hover:text-white">
                    <ChevronsRight className="h-4 w-4" />
                </Button>
            </Link>
        </div>
    );
}
