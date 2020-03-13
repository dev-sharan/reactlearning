import * as React from "react";
import "./home.scss";

interface IProps {
  name: string;
}

export default class Home extends React.Component<IProps> {
  public render() {
    return (
      <div className="banner">
        <span className="banner__text">
          Hello {this.props.name}!
        </span>
      </div>
    );
  }
}