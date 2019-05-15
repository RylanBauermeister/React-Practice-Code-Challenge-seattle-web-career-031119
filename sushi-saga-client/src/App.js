import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super();
    this.state = {
      eaten: [],
      index: 0,
      money: 100,
      sushis: []
    }

    this.fetchSushis();
    this.eatSushi = this.eatSushi.bind(this)
    this.showMoreSushi = this.showMoreSushi.bind(this)
  }

  eatSushi(sushi){
    if(this.state.money >= sushi.price){
      this.setState({
        eaten: this.state.eaten.concat(sushi.id),
        money: this.state.money - sushi.price
      })
    }
  }

  showMoreSushi(){
    this.setState({
      index: this.state.index + 4 >= 100 ? 0 : this.state.index + 4
    }, this.fetchSushis)
  }

  fetchSushis(){
    fetch(API)
    .then(res => res.json())
    .then(json => {
      this.setState({
        sushis: json.slice(this.state.index, this.state.index+4)
      })
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          eatSushi={this.eatSushi}
          sushis={this.state.sushis}
          eaten={this.state.eaten}
          showMoreSushi={this.showMoreSushi}
        />
        <Table money={this.state.money} eaten={this.state.eaten}/>
      </div>
    );
  }
}

export default App;
