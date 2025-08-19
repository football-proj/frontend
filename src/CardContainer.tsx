import type React from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";

type CardContainerProps = {
    teamname: string;
    teamDescription: string;
    content: string;
    buttonText: string
}

const TeamCard: React.FC<CardContainerProps> = ({ teamname, teamDescription, content, buttonText }) => {
    return (
        <div>
            <Card className="w-full max-w-sm w-[30vw] bg-black border-gray-800">
                <CardHeader>
                    <CardTitle className="text-white">{teamname}</CardTitle>
                    <CardDescription className="text-gray-400">
                        {teamDescription}
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-gray-100">
                    {content}
                </CardContent>
                <CardFooter>
                    <Button>{buttonText}</Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default TeamCard