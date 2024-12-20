import React from "react";
import { BrowserRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import Decorator from "../pages/decorator/index.jsx";
import Mobx from "../pages/mobx/mobx.jsx";
import Test from "../pages/test/test.jsx";
import TestChildren from "../pages/TestChildren.jsx";
// import FormTableDemo from "../pages/FormTableDemo.jsx";
export default class App extends React.Component {
  render() {
    return (
      <div>
        我是分割线 我是分割线
        <hr />
        <div style={{ display: "flex" }}>
          <aside
            style={{
              flex: "0 0 200px",
              borderRight: "1px solid #999",
              marginRight: 10,
            }}
          >
            <h4>目录</h4>
            <div>
              <Link to="/decorator">Decorator</Link>
            </div>
            <div>
              <Link to="/mobx">mobx</Link>
            </div>
            <div>
              <Link to="/test">Test</Link>
            </div>
            <div>
              <Link to="/TestChildren">Test</Link>
            </div>
          </aside>
          <section style={{flex: 1}}>
            <Switch>
              <Route path="/decorator" component={Decorator} />
              <Route path="/mobx" component={Mobx} />
              <Route path="/test" component={Test} />
              <Route path="/TestChildren" component={TestChildren} />
              {/* <Route path="/FormTableDemo" component={FormTableDemo} /> */}
              <Redirect to="/decorator" />
            </Switch>
          </section>
        </div>
      </div>
    );
  }
}
