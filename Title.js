import React from "react";

function Title() {
  console.log("Rendering Title");
  return <div>CallBack Component</div>;
}

export default React.memo(Title);
