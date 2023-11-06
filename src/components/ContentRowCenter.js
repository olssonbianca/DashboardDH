import React from "react";
import LastMovieInDb from "./LastMovieInDb";
import LastUserInDb from "./LastUserInDb";

function ContentRowCenter() {
  return (
    <div >
       {/*ESTE ES EL DE LA DERECHAA :P*/}
      <LastMovieInDb />
      <LastUserInDb />
      <Total/>
     
    </div>
  );
}

export default ContentRowCenter;
