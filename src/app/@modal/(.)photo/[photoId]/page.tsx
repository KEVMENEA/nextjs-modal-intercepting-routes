import PhotoDisplay from "@/app/photo/[photoId]/PhotoDisplay";
import type { PhotoData } from "@/app/photo/[photoId]/page";
import { Modal } from "@/components/Modal";

type Props = {
  params: {
    photoId: string;
  };
};

export default async function Photo({ params: { photoId } }: Props) {
  const response = await fetch(`http://localhost:3500/images/${photoId}`, {
    cache: "no-store",
  });

  const photoData: PhotoData = await response.json();

  if (!photoData?.id) {
  
  return(
    <Modal>
        <div className="w-[90vw] max-w-md sm:max-w-lg lg:max-w-xl">
            <PhotoDisplay photoData={photoData}/>
        </div>
    </Modal>
        )
    }   
}