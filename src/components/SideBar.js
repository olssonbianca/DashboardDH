import React from "react";
import ContentWrapper from "./ContentWrapper";
import NotFound from "./NotFound";
import Peliculas from "./Peliculas";
import { Route, Switch } from "react-router-dom";
import Usuarios from "./Usuarios";
import Configuraciones from "./Configuraciones";

function SideBar() {
  return (
    <React.Fragment>


     {/*Pega aca el nav*/}


      <Switch>
        <Route exact path="/">
          <ContentWrapper />
        </Route>
        <Route exact path="/Peliculas">
          <Peliculas />
        </Route>
        <Route path="/Usuarios">
          <Usuarios />
        </Route>
        <Route path="/Participantes">
          <Participantes/>
        </Route>
        <Route path="/Configuraciones">
          <Configuraciones/>
        </Route>
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}
export default SideBar;
