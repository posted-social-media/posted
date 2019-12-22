import React, { useState } from "react";

//Components
import WallPost from "./WallPosts";
import WallForm from "./WallForm";

//Styled components
import { Wall } from "./WallStyles";

const WallContainer = () => {
  //data to be displayed in WallPost Component
  const [data, setData] = useState([]);

  //function (which takes an object) to be passed on to WallForm to grab data to be set
  const addPost = object => {
    setData([...data, object]);
  };

  return (
    <Wall>
      <WallForm addPost={addPost} />
      <WallPost data={data} />
    </Wall>
  );
};

export default WallContainer;
