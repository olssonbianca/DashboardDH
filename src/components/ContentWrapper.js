import React from "react";
import PrincipalContent from "./PrincipalContent";
import ContentRowCenter from "./ContentRowCenter";

function ContentWrapper() {
  return (
    <React.Fragment>
      
      <div>
        <div>
          <PrincipalContent/>
        </div>
        <div>
          < ContentRowCenter/>
        </div>
      </div>
    </React.Fragment>
  );
}
export default ContentWrapper;
