import { UserButton } from "@clerk/nextjs"

export const Navbar = () => {
    return (
        <div className="flex items-center gap-x-4 p-5 bg-green-500">
            <div className="hidden lg:flex flex-1 bg-yellow-500">
                {/* Add Search Here */}
                search
            </div>
            <UserButton />
        </div>
    )
}