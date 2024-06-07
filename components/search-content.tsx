"use client";

import { Song } from "@/types/types";
import MediaItem from "./media-item";

interface SearchContentProps {
 songs: Song[];
}

const SearchContent = ({ songs }: SearchContentProps) => {
 if (songs.length === 0) {
  return (
   <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
    No songs found
   </div>
  );
 }

 return (
  <div className="flex flex-col gap-y-2 w-full px-6">
   {songs.map((item) => (
    <div
     key={item.id}
     className="flex items-center gap-x-4 w-full"
    >
     <div className="flex-1">
      <MediaItem data={item} />
     </div>
    </div>
   ))}
  </div>
 );
};

export default SearchContent;
