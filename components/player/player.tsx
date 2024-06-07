"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSong from "@/hooks/useLoadSong";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./player-content";

const Player = () => {
 const player = usePlayer();
 const { song } = useGetSongById(player.activeId);

 const songUrl = useLoadSong(song!);

 if (!song || !songUrl || !player.activeId) {
  return null;
 }

 return (
  <div className="h-[80px] bg-black w-full ">
   <PlayerContent
    key={songUrl}
    song={song}
    songUrl={songUrl}
   />
  </div>
 );
};

export default Player;
