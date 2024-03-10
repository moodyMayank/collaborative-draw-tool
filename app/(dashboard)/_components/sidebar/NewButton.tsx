"use client";

import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const NewButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="aspect-square">
                    <button className="bg-white/25 h-full w-full flex items-center justify-center rounded-md opacity-60 hover:opacity-100 transition-opacity">
                        <Plus className="text-white" />
                    </button>
                </div>
            </DialogTrigger>
            <DialogContent className="border-none p-0 bg-transparent max-w-[495px]">
                <CreateOrganization />
            </DialogContent>
        </Dialog>
    )
}