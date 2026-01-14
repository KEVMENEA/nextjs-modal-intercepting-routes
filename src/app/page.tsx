import PhotoDisplay from "./photo/[photoId]/PhotoDisplay"
import type { PhotoData } from "./photo/[photoId]/page"

export default async function Home() {
  const response = await fetch('http://localhost:3500/images')
  const images: PhotoData[] = await response.json()

  if (!images?.length) {
    return <h1>No Images to Display</h1>
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 place-items-center">
        {images.map(photoData => (
          <PhotoDisplay key={photoData.id} photoData={photoData} />
        ))}
      </div>
    </main>
  )
}
