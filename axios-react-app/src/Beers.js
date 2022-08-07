import React, { Component } from "react";

export class Beers extends Component {
  constructor() {
    super();
    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    fetch("https://api.punkapi.com/v2/beers%22")
      .then((resolve) => resolve.json())
      .then((data) => {
        this.setState({
          beers: data,
        });
      });
  }

  componentDidUpdate() {
    console.log("beers", this.state.beers);
  }

  render() {
    return (
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {this.state.beers.map((beer) => (
          <li>
            <h3>{beer.name}</h3>
            <img
              style={{ height: "200px" }}
              src={beer.image_url}
              alt={beer.name}
            />
          </li>
        ))}
      </ul>
    );
  }
}

export default Beers;