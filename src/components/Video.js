import React, { useRef, useState } from "react";
import "../style/video.css";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, desc, song, likes, shares, messages }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        className="video__player"
        loop
        ref={videoRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} desc={desc} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
