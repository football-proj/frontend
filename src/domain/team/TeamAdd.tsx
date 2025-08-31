import {Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Label} from "@/components/ui/label.tsx";

const TeamAdd = () => {
    return (
        <Card className="w-1/3 min-w-350">
            <CardHeader>
                <CardTitle>팀 등록</CardTitle>
                <CardDescription>프로 축구 팀을 등록해주세요. 등록전에 꼭 중복확인을 해주세요.</CardDescription>
                <CardAction>
                    <Button variant="link">
                        Exit
                    </Button>
                </CardAction>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">
                        <div className="grid gap-2">
                            <Label htmlFor="string">test</Label>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}

export default TeamAdd