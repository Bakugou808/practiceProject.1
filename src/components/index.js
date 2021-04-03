import React, { Component } from "react";
import QuotesContainer from "../components/quotes/container";
class Home extends Component {
  render() {
    return (
      <>
        <QuotesContainer drilledProp="whats happenin" />
      </>
    );
  }
}

export default Home;
