import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
// import {AiOutlineHeart} from 'react-icons'
import { FaHeart } from "react-icons/fa";

import { playPause ,setActiveSong} from "../redux/features/playerSlice";

const SongCard = ({song,i,activeSong,isPlaying,data}) => {

  const addtofav=()=>{
    console.log("adding to  fav");
  }

  // const activeSong ="test"
  const dispatch= useDispatch();
    const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
  <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
    <div className="relative w-full h-56 group">
      <div className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
        <PlayPause
         isPlaying={isPlaying}
         activeSong={activeSong}
         song={song}
         handlePause={handlePauseClick}
         handlePlay={handlePlayClick}/>

      </div>
      <img  src={song.images?.coverart} className="w-full h-full rounded-lg" alt="song_img"/>
    </div>
    <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>
        <p className="text-sm truncate flex text-gray-300 ">
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.subtitle}
          </Link>
          <span className="ml-2 relative top-[4px] left-[5px] cursor-pointer"
          onClick={addtofav}
          ><FaHeart/></span>
        </p>
       
      </div>
    

  </div>
  )
};

export default SongCard;
