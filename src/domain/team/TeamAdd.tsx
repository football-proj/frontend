import {
    DialogTrigger,
    Dialog,
    DialogContent,
    DialogHeader,
    DialogDescription,
    DialogTitle,
    DialogFooter, DialogClose
} from "@/components/ui/dialog.tsx";
import {Input} from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button";
import {Label} from "@/components/ui/label.tsx";

const TeamAdd = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>팀 추가</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>Share link</DialogTitle>
                    <DialogDescription>
                        Anyone who has this link will be able to view this.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center gap-2">
                    <div className="grid flex-1 gap-2">
                        <Label htmlFor="link" className="sr-only">
                            Link
                        </Label>
                        {/* 입력창을 하이라이트로 강조 */}
                        <div className="relative">
                            <Input
                                id="link"
                                defaultValue="https://ui.shadcn.com/docs/installation"
                                readOnly
                                className="bg-white dark:bg-gray-900 border-2 border-blue-500 shadow-xl ring-4 ring-blue-500/25 font-medium"
                            />
                            {/* 추가 하이라이트 효과 */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg blur opacity-75 -z-10"></div>
                        </div>
                    </div>
                </div>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default TeamAdd