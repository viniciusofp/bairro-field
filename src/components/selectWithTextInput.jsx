import React, { Component } from "react";
import { bairrosArray } from "../data/bairros";
import _ from "lodash";

class SelectWithTextInput extends Component {
  state = {
    selected: false,
    bairros: [],
    textInput: "",
    cursor: 0
  };
  componentDidMount() {
    const bairros = _.orderBy(bairrosArray, ["count"], ["desc"]);
    this.setState({ bairros });
  }
  handleChange = event => {
    let bairros = bairrosArray.filter(bairro => {
      return bairro.name
        .toLowerCase()
        .includes(event.target.value.toLowerCase());
    });
    bairros = _.orderBy(bairros, ["count"], ["desc"]);

    this.setState({ textInput: event.target.value, bairros, cursor: 0 });
  };
  _onFocus = () => {
    this.setState({ selected: true });
  };
  _onBlur = () => {
    const setToFalse = () => {
      this.setState({ selected: false });
    };
    setTimeout(function() {
      setToFalse();
    }, 200);
  };
  _pressEnter = e => {
    if (e.key === "Enter") {
      const bairros = [...this.state.bairros];
      const bairro = bairros[this.state.cursor].name;
      this.setState({ textInput: bairro, selected: false });
      e.preventDefault();
    }
  };
  _keyPress = e => {
    const { cursor, bairros } = this.state;
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor > 0) {
      this.setState(prevState => ({
        cursor: prevState.cursor - 1
      }));
      document
        .getElementById("sugestionsBox")
        .scrollBy({ top: -36, behavior: "smooth" });
    } else if (e.keyCode === 40 && cursor < bairros.length - 1) {
      this.setState(prevState => ({
        cursor: prevState.cursor + 1
      }));
      if (cursor > 2) {
        document
          .getElementById("sugestionsBox")
          .scrollBy({ top: 36, behavior: "smooth" });
      }
    }
    console.log(this.state);
  };
  handleSelect = bairro => {
    console.log(bairro);
    this.setState({ textInput: bairro });
  };
  render = () => {
    const bairros = _.orderBy(bairrosArray, ["count"], ["desc"]);

    return (
      <div className="selectWithTextInput">
        <input
          type="text"
          autoComplete="off"
          value={this.state.textInput}
          placeholder="Digite o bairro"
          onChange={this.handleChange}
          onBlur={this._onBlur}
          onFocus={this._onFocus}
          onKeyDown={this._keyPress}
          onKeyPress={this._pressEnter}
        />
        <div
          id="sugestionsBox"
          className={
            this.state.selected
              ? "selectWithTextInput__sugestions active"
              : "selectWithTextInput__sugestions"
          }
        >
          <h6>BAIRROS</h6>
          {this.state.bairros.map((bairro, i) => {
            return (
              <div
                className={
                  this.state.cursor === i
                    ? "selectWithTextInput__sugestions__option active"
                    : "selectWithTextInput__sugestions__option"
                }
                onClick={() => this.handleSelect(bairro.name)}
              >
                {bairro.name}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
}

export default SelectWithTextInput;
