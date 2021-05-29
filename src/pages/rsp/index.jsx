import React from "react";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  render() {
    const imgSize = 100;
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
          <button>
            <img
              src={`images/rock.jpeg`}
              alt="rock"
              style={{
                height: imgSize,
                width: imgSize
              }}
            />
          </button>
          <button>
            <img
              src={`images/paper.jpeg`}
              alt="rock"
              style={{
                height: imgSize,
                width: imgSize
              }}
            />
          </button>
          <button>
            <img
              src={`images/scissors.jpeg`}
              alt="rock"
              style={{
                height: imgSize,
                width: imgSize
              }}
            />
          </button>
        </div>
        <Link to="/">
          <h1>ジャンケンを終了する</h1>
        </Link>

      </div>
    )
  }
}