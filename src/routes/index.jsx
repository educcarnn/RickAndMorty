import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from "../pages/Home/index"
import Content from "../pages/Content";

export default function Routes(){

    return(
        <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Content />
          </Route>
          <Route path="/rickandmorty">
            <Home/>
          </Route>

        </Switch>
      </BrowserRouter>
    )
}