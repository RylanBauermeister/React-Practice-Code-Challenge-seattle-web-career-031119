import React, { Component } from 'react'

export default class SushiWallet extends Component {

  constructor(props){
    super(props)
    this.state = {
      money: ''
    }

    this.validateMoney = this.validateMoney.bind(this)
    this.clearAndLift = this.clearAndLift.bind(this)
  }

  validateMoney(ev){
    let money = ev.target.value
    if (parseInt(money) && parseInt(money) >= 0 || money === ''){
      this.setState({
        money: ev.target.value
      })
    }
  }

  clearAndLift(ev){
    ev.preventDefault()
    this.props.addMoney(parseInt(ev.target.elements['amount'].value));
    this.setState({
      money: ''
    })
  }

  render(){
    return (
      <div className="sushi-wallet">
        <h2>Add More Money With SUSHI WALLET™</h2>
        <form  onSubmit={this.clearAndLift}>
          <input type="number" name="amount" onChange={this.validateMoney} value={this.state.money}></input>
          <input type="submit"></input>
        </form>
      </div>

    );
  }
}
