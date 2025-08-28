import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card.tsx";

interface TeamCardProps {
    name: string;
    description: string;
    country: string;
    emblem: string;
}

const TeamCard = ({ name, description, country, emblem }: TeamCardProps) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle>{name}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                    <CardAction>{country}</CardAction>
                </CardHeader>
                <CardContent>
                    <img src={emblem} />
                </CardContent>
            </Card>
        </>
    )
}

export default TeamCard;