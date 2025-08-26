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

const TeamContainer = () => {
    const teams = Array.from({ length: 9 }, (_, i) => ({ id: i + 1 }));

    return (
        <div className="flex flex-col flex-1 overflow-auto p-4">
            {/* 카드 리스트 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {teams.map((team) => (
                    <TeamCard key={team.id} />
                ))}
            </div>

            {/* 페이지네이션 */}
            <Pagination>
                <PaginationContent className="justify-center">
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            2
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};

export default TeamContainer;
