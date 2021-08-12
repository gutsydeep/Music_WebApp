import React, { Component } from "react";

export default class footer extends Component {
  render() {
    return (
      <div className="container-fluid p-0 m-0">
        <footer>
          <div className="p-3 text-light" style={{ textAlign: "center", backgroundColor: "#222121"}}>
            <h5>This site is developed by Kartikey and Subhadeep</h5>
            <h6> Some songs can not be played due to broken link</h6>
          </div>
        </footer>
      </div>
    );
  }
}
