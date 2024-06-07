"use client";

import { useUser } from "@/hooks/useUser";
import { Song } from "@/types/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import MediaItem from "./media-item";
import LikeButton from "./like-button";
import useOnPlay from "@/hooks/useOnPlay";

interface LikedContentProps {
 songs: Song[];
}

const LikedContent = ({ songs }: LikedContentProps) => {
 const router = useRouter();
 const { isLoading, user } = useUser();

 const onPlay = useOnPlay(songs);

 useEffect(() => {
  if (!isLoading && !user) {
   router.replace("/");
  }
 }, [isLoading, router, user]);

 if (songs.length === 0) {
  return (
   <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
    No liked songs
   </div>
  );
 }

 return (
  <div className="flex flex-col gap-y-2 w-full p-6">
   {songs.map((item) => (
    <div
     key={item.id}
     className="flex items-center gap-x-4 w-full"
    >
     <div className="flex-1">
      <MediaItem
       onClick={(id: string) => {
        onPlay(id);
       }}
       data={item}
      />
     </div>
     <LikeButton songId={item.id} />
    </div>
   ))}
  </div>
 );
};

export default LikedContent;
