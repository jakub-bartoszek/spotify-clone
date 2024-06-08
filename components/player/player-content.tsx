import { useEffect, useState, useRef } from "react";
import { Howl } from "howler";
import { Song } from "@/types/types";
import { BsPauseFill, BsPlayFill } from "react-icons/bs";
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai";
import { HiSpeakerWave, HiSpeakerXMark } from "react-icons/hi2";
import usePlayer from "@/hooks/usePlayer";
import LikeButton from "@/components/like-button";
import VolumeSlider from "@/components/player/volume-slider";
import TimeSlider from "@/components/player/time-slider";
import PlayerItem from "./player-item";

interface PlayerContentProps {
 song: Song;
 songUrl: string;
}

const PlayerContent = ({ song, songUrl }: PlayerContentProps) => {
 const player = usePlayer();
 const [volume, setVolume] = useState(0.5);
 const [isPlaying, setIsPlaying] = useState(false);
 const [currentTime, setCurrentTime] = useState(0);
 const [duration, setDuration] = useState(0);
 const soundRef = useRef<Howl | null>(null);

 const Icon = isPlaying ? BsPauseFill : BsPlayFill;
 const VolumeIcon = volume === 0 ? HiSpeakerXMark : HiSpeakerWave;

 const formatTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${
   remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;
 };

 const onPlayNext = () => {
  if (player.ids.length === 0) {
   return;
  }

  const currentIndex = player.ids.findIndex(
   (id) => id === player.activeId
  );
  const nextSong = player.ids[currentIndex + 1];

  if (!nextSong) {
   return player.setId(player.ids[0]);
  }

  player.setId(nextSong);
 };

 const onPlayPrevious = () => {
  if (player.ids.length === 0) {
   return;
  }

  const currentIndex = player.ids.findIndex(
   (id) => id === player.activeId
  );
  const previousSong = player.ids[currentIndex - 1];

  if (!previousSong) {
   return player.setId(player.ids[player.ids.length - 1]);
  }

  player.setId(previousSong);
 };

 const handlePlay = () => {
  if (isPlaying) {
   soundRef.current?.pause();
   console.log("pausing");
  } else {
   soundRef.current?.play();
   console.log("playing");
  }
 };

 const handleVolumeChange = (newVolume: number) => {
  setVolume(newVolume);
  if (soundRef.current) {
   soundRef.current.volume(newVolume);
  }
 };

 const handleTimeChange = (newTime: number) => {
  setCurrentTime(newTime);
  if (soundRef.current) {
   soundRef.current.seek(newTime);
  }
 };

 useEffect(() => {
  if (soundRef.current) {
   soundRef.current.unload();
  }

  const sound = new Howl({
   src: [songUrl],
   html5: true,
   volume,
   onplay: () => {
    console.log("playing");
    setIsPlaying(true);
    setDuration(sound.duration());
   },
   onpause: () => {
    console.log("paused");
    setIsPlaying(false);
   },
   onend: () => {
    console.log("ended");
    setIsPlaying(false);
    onPlayNext();
   }
  });

  soundRef.current = sound;
  sound.play();

  const interval = setInterval(() => {
   setCurrentTime(sound.seek() as number);
  }, 1000);

  return () => {
   clearInterval(interval);
   sound.unload();
  };
 }, [songUrl]);

 return (
  <div className="grid grid-cols-[auto,_1fr,_auto] h-full gap-4">
   {/* Song item */}
   <div className="flex w-auto justify-start p-2">
    <div className="flex items-center gap-x-2 md:gap-x-4">
     <PlayerItem data={song} />
     <LikeButton songId={song.id} />
    </div>
   </div>
   {/* Player */}
   <div className="flex w-full flex-1 flex-col gap-y-2 justify-center items-center">
    {/* Action buttons */}
    <div className="h-auto flex justify-center items-center  w-full gap-x-6">
     <AiFillStepBackward
      onClick={onPlayPrevious}
      size={25}
      className="text-neutral-400 cursor-pointer hover:text-white transition"
     />
     <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white p-1 cursor-pointer">
      <Icon
       onClick={handlePlay}
       size={25}
       className="text-black"
      />
     </div>
     <AiFillStepForward
      onClick={onPlayNext}
      size={25}
      className="text-neutral-400 cursor-pointer hover:text-white transition"
     />
    </div>
    {/* Time line */}
    <div className="h-auto flex items-center gap-x-2 w-full max-w-[500px]">
     <span className="text-neutral-400 text-xs">
      {formatTime(currentTime)}
     </span>
     <TimeSlider
      value={currentTime}
      max={duration}
      onChange={handleTimeChange}
     />
     <span className="text-neutral-400 text-xs">
      {formatTime(duration)}
     </span>
    </div>
   </div>
   {/* Volume slider */}
   <div className="flex p-2 w-[100px] md:w-[124px]">
    <div className="flex items-center gap-x-2 w-full">
     <VolumeIcon
      className="cursor-pointer"
      size={20}
     />
     <VolumeSlider
      value={volume}
      onChange={handleVolumeChange}
     />
    </div>
   </div>
  </div>
 );
};

export default PlayerContent;
