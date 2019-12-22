import React, { useState } from "react";

//Components
import WallPost from "./WallPosts";
import WallForm from "./WallForm";

const WallContainer = () => {
  //data to be displayed in WallPost Component
  const [data, setData] = useState([]);

  //function (which takes an object) to be passed on to WallForm to grab data to be set
  const addPost = object => {
    setData([...data, object]);
  };

  return (
    <div>
      <WallForm addPost={addPost} />
      <WallPost data={data} />
    </div>
  );
};

export default WallContainer;
