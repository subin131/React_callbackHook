import React from "react";

function Counte({ text, count }) {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text}- {count}
    </div>
  );
}

export default React.memo(Counte);
