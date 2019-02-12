import * as React from "react";
import { RegisterController } from "@abb/controller";
import { RouteComponentProps } from "react-router-dom";

import { RegisterView } from "./ui/RegisterView";

// container -> view
// container -> connector -> view
// controller -> connector -> view

export class RegisterConnector extends React.PureComponent<
  RouteComponentProps<{}>
> {
  onFinish = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <RegisterController>
        {({ submit }) => (
          <RegisterView onFinish={this.onFinish} submit={submit} />
        )}
      </RegisterController>
    );
  }
}
