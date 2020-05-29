import * as React from "react";
import { hot } from "react-hot-loader";
import {
  Content,
  Header,
  HeaderName,
  SkipToContent,
} from "carbon-components-react/lib/components/UIShell";

import "./../assets/scss/App.scss";

class App extends React.Component<{}, undefined> {
  public render() {
    return (
      <div className="app--container">
        <Header>
          <SkipToContent />
          <HeaderName prefix="TEST">TITLE</HeaderName>
        </Header>
        <Content className="app--content">
          <p>It really works.</p>
        </Content>
      </div>
    );
  }
}

declare let module: object;

export default hot(module)(App);
