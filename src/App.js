import './App.css';
import React, { Component } from 'react';
import Country from './components/Country';


class App extends Component{
  state = {
    countries: [
      { id: 1, name: 'United States', gold: 2 },
      { id: 2, name: 'China', gold: 3 },
      { id: 3, name: 'Germany', gold: 0 },
    ]
  }
  handleClick = (countriesId) => {
    console.log(countriesId);
    for (var i = 0, l = this.state.countries.length; i < l; i++) {
      if(i+1 === countriesId){
        console.log(this.state.countries[i]);
        // eslint-disable-next-line
        this.state.countries[i].gold = this.state.countries[i].gold+1;
        console.log(this.state.countries[i]);
      }
  }
    const countries = this.state.countries;
    this.setState({ countries:countries });
}
loseGold = (countriesId) => {
  console.log(countriesId);
  for (var i = 0, l = this.state.countries.length; i < l; i++) {
    if(i+1 === countriesId){
      // eslint-disable-next-line
      if(this.state.countries[i].gold != 0){
      console.log(this.state.countries[i]);
      // eslint-disable-next-line
      this.state.countries[i].gold = this.state.countries[i].gold-1;
      console.log(this.state.countries[i]);
      }
    }
}
  const countries = this.state.countries;
  this.setState({ countries:countries });
}
  render () {
  return (
    <div className="App">
      <header className="App-header">
        { this.state.countries.map(country => 
          <Country 
            key={ country.id } 
            id = { country.id }
            name={ country.name }
            gold={country.gold}
            onIncrement={ this.handleClick } 
            onDecrease={this.loseGold}
            />
        )}
      </header>
      
    </div>
  );
}
}

export default App;
