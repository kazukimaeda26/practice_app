import React from "react";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <h1>ジャンケンページ</h1>
        <Link to="/">
          <h1>ジャンケンを終了する</h1>
        </Link>

      </div>
    )
  }
}