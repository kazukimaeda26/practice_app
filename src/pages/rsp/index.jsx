import React from "react";
import { Link } from "react-router-dom";
import Hand from "../../components/hand";
export default class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      selectHand: 0,
    }
  }

  handleOnClick = (val) => {
    this.setState({selectHand: val});
  }

  render() {
    const handTypes = [0,1,2]
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <h1>ジャンケンページ</h1>
        <div style={{ display: "flex" }}>
          {handTypes.map((handType, index) => (
            <Hand selectHand={handType} selectedHand={this.state.selectHand} clickHand={this.handleOnClick} key = {index} />
          ))}
        </div>
        <Link to="/">
          <h1>ジャンケンを終了する</h1>
          <h4>戦績が発表されます。</h4>
        </Link>

      </div>
    )
  }
}