import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet'

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
    this.addMoney = this.addMoney.bind(this)
  }

  eatSushi(sushi){
    if(this.state.money >= sushi.price && !this.state.eaten.includes(sushi.id)){
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

  addMoney(money){
    this.setState({
      money: this.state.money + money
    })
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
        <h1 className="App">Sushi Saga!!!</h1>

        <SushiContainer
          eatSushi={this.eatSushi}
          sushis={this.state.sushis}
          eaten={this.state.eaten}
          showMoreSushi={this.showMoreSushi}
        />
        <Table money={this.state.money} eaten={this.state.eaten}/>
        <SushiWallet addMoney={this.addMoney}/>
      </div>
    );
  }
}

export default App;
