import React from "react";
import Chart from "./Chart";
import UserChart from './UserChart'

function PrincipalContent() {
  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div >
        <div >
          <img src="" alt=""/>
        </div>
 {/*<!--movies y usuarios -->*/}
    <div>
      <div>
        <h3>Peliculas registradas</h3>
        <a> Ver todas </a>
      </div>
      <div>
        <Chart/> {/*Card*/}
      </div>
    </div>

 
    <div>
    <div>
        <h3>Usuario registradas</h3>
        <a> Ver todas </a>
      </div>
      <div>
        <UserChart/> {/*Card User*/}
      </div>
    </div>


      </div>
      
    </React.Fragment>
  );
}
export default PrincipalContent;
