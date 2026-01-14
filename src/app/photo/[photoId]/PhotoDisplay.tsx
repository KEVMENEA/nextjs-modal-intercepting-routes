import Image from "next/image"
import Link from "next/link"
import type { PhotoData } from "./page"

type Props = {
    photoData: PhotoData,
}

export default function PhotoDisplay({ photoData }: Props) {

    return (
        <div className="w-full">
            <h1 className="text-lg font-semibold text-white text-center">{photoData.title}</h1>
            <Link href={`/photo/${photoData.id}`}>
                <div className="relative w-72 h-72 rounded-xl overflow-hidden">
                    <Image
                        src={photoData.path}
                        alt={photoData.title}
                        sizes="200px"
                        fill
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </Link>
        </div>
    )
}