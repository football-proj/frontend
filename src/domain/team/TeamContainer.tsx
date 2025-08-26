import TeamCard from "@/domain/team/TeamCard.tsx";

const TeamContainer = () => {
    const teams = Array.from({ length: 9 }, (_, i) => ({ id: i + 1 }));

    return (
        <div className="flex-1 overflow-auto p-4">
            <div className="grid grid-cols-3 gap-4">
                {teams.map((team) => (
                    <TeamCard key={team.id} />
                ))}
            </div>
        </div>
    );
};

export default TeamContainer;