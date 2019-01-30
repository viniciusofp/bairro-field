import React, { Component } from "react";
import SelectWithTextInput from "./components/selectWithTextInput";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { minMaxArea } from "./data/bairros";

class App extends Component {
  state = {
    value: { min: 0, max: 1 },
    areas: { min: 0, max: 1 }
  };
  areas = async () => {
    let areas = await minMaxArea();
    areas = { min: parseInt(areas[0]), max: parseInt(areas[1]) };
    this.setState({ areas, value: areas });
  };
  componentWillMount() {
    this.areas();
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col-4">
              <div className="my-5">
                <h6>Bairros</h6>
                <SelectWithTextInput />
              </div>
            </div>
            {/* <div className="col-4">
              <div className="my-5">
                <h6 className="">Area</h6>
                <InputRange
                  maxValue={this.state.areas.max}
                  minValue={this.state.areas.min}
                  formatLabel={value => `${value}m2`}
                  value={this.state.value}
                  onChange={value => this.setState({ value })}
                />
              </div>
            </div> */}
          </div>
          {/* <div className="row">
            <div className="col-12">
              <h6>Tipo do Imóvel</h6>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}

export default App;
