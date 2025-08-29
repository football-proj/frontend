import TeamCard from "@/domain/team/TeamCard.tsx";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";
import {useMemo, useState} from "react";
import mockTeams from "@/mock_data.ts";

const TeamContainer = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 9;
    const totalPages = Math.ceil(mockTeams.length / itemsPerPage);

    const currentTeams = useMemo(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return mockTeams.slice(startIndex, endIndex);
    }, [currentPage]);

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const getPageNumbers = () => {
        const pageNumbers = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            if (currentPage <= 3) {
                pageNumbers.push(1, 2, 3, '...', totalPages);
            } else if (currentPage >= totalPages - 2) {
                pageNumbers.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
            } else {
                pageNumbers.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
            }
        }

        return pageNumbers;
    }

    return (
        <div className="flex flex-col flex-1 overflow-auto p-4">
            <div className="text-right text-sm text-gray-600 mb-4">
                Total : {mockTeams.length} 팀
            </div>

            {/* 카드 리스트 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {currentTeams.map((team) => (
                    <TeamCard
                        key={team.id}
                        name={team.name}
                        emblem={team.emblem}
                        description={team.description}
                        country={team.country} />
                ))}
            </div>

            {/* 페이지네이션 */}
            <Pagination>
                <PaginationContent className="justify-center">
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(currentPage - 1);
                            }}
                            className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                        />
                    </PaginationItem>
                    {getPageNumbers().map((pageNumber, index) => (
                        <PaginationItem key={index}>
                            {pageNumber === '...' ? (<PaginationEllipsis />) : (
                                <PaginationLink
                                    href='#'
                                    isActive={pageNumber === currentPage}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handlePageChange(pageNumber as number)
                                    }}
                                >
                                    {pageNumber}
                                </PaginationLink>
                            )}
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                handlePageChange(currentPage + 1);
                            }}
                            className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default TeamContainer;
