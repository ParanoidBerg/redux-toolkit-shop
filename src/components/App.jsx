import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Products from "./Products";
import Delivery from "./Delivery";
import Header from "./Header";

function App() {
  return (
      <div className="container">
        {/*Хидер отдельно вне роутов потому что он всегда виден*/}
        <Header />
        <div className="row">
          <div className="col-3">
            {/*Сайдбар отдельно вне роутов потому что он всегда виден*/}
            <Sidebar />
          </div>
          <div className="col">
            <Switch>
              <Route path="/" exact>
                <Products />
              </Route>
              <Route path="/category/:categoryId">
                <Products />
              </Route>
              <Route path="/delivery">
                <Delivery />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
  );
}

export default App;
