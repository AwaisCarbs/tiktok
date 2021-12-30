import "./App.css";
import "./index.css";
import Video from "./components/Video";
import { useEffect, useState } from "react";
import axios from "./axios";
function App() {
  const [vids, setVids] = useState([]);
  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVids(response.data);
      return response;
    }
    fetchPosts();
  }, []);
  console.log(vids);
  return (
    <div className="app">
      <div className="app__videos">
        {vids.map(
          ({ _id, url, channel, desc, song, likes, messages, shares }) => {
            return (
              <Video
                key={_id}
                url={url}
                channel={channel}
                desc={desc}
                song={song}
                likes={likes}
                messages={messages}
                shares={shares}
              />
            );
          }
        )}
      </div>{" "}
      {/* container */} {/*vids  */}{" "}
    </div>
  );
}

export default App;
// BTS Ki Chachi 🌚💅😌
