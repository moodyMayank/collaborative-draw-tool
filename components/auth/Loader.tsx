import Image from "next/image"

export const Loader = () => {
    return (
        <div className="h-full w-full flex flex-col gap-y-4 justify-center items-center">
            <Image
                src="/loading-ripples.svg"
                alt="logo"
                width={120}
                height={120}
                className="animate-pulse duration-700"
            />
        </div>
    )
}