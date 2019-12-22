import React, { useState } from "react";

//Components
import WallPost from "./WallPosts";

const WallContainer = () => {
  //data to be displayed in WallPost Component
  const [data, setData] = useState([]);

  return (
    <div>
      <WallPost data={data} />
    </div>
  );
};

export default WallContainer;
