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
import mockTeams from "@/mock_data.ts";
import usePagination from "@/hooks/UsePagination.ts";
import {Button} from "@/components/ui/button.tsx";

const TeamContainer = () => {
    const {
        currentPage,
        totalPages,
        currentItems: currentTeams,
        pageNumbers,
        handlePageChange
    } = usePagination(mockTeams, 9);

    return (
        <div className="flex flex-col flex-1 overflow-auto p-4">
            <div className="text-right text-sm text-gray-600 mb-4">
                Total : {mockTeams.length} 팀
                <Button>팀 추가</Button>
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
                    {pageNumbers.map((pageNumber, index) => (
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
