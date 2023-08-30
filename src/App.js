import './App.css';
import React, { Component } from 'react';
import Country from './components/Country';
import Medal from './components/Medal';
import NewCountry from './components/NewCountry';

class App extends Component{
  state = {
    countries: [
      { id: 1, name: 'United States', gold: 2, silver: 3, bronze: 2 },
      { id: 2, name: 'China', gold: 3, silver: 1, bronze: 4 },
      { id: 3, name: 'Germany', gold: 0, silver: 3, bronze: 5 },
    ]
  }
   getTotalMedalCount(medal) {
    return this.state.countries.reduce((a, b) => a + b[medal], 0);
   }
   getTotalCountryMedalCount(country){
    const countriesMutable = this.state.countries;
    const idx = countriesMutable.findIndex((c) => c.name === country);
    const total = countriesMutable[idx].gold + countriesMutable[idx].silver + countriesMutable[idx].bronze;
    return total;
   }

  incrementGold = (countryId, medalname) => {
    const countriesMutable = this.state.countries;
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    countriesMutable[idx][medalname] += 1;
    this.setState({ countries:countriesMutable });
    console.log(countriesMutable)
}
loseGold = (countryId, medalname) => {
  const countriesMutable = this.state.countries;
    const idx = countriesMutable.findIndex((c) => c.id === countryId);
    if(countriesMutable[idx][medalname] !== 0){
    countriesMutable[idx][medalname] -= 1;}
    this.setState({ countries:countriesMutable });
    console.log(countriesMutable)
}
handleDelete = (nameId) => {
  const countries = this.state.countries.filter(c => c.id !== nameId);
  this.setState({ countries:countries });
}
handleAdd = (name) => {
  const { countries } = this.state;
  const id = countries.length === 0 ? 1 : Math.max(...countries.map(name => name.id)) + 1;
  const mutableCountries = countries.concat({ id: id, name: name, gold: 0, silver: 0, bronze: 0 });
  this.setState({ countries:mutableCountries });
}
  render () {
  return (
    <div className="App">
      <header className="App-header">
        <Medal
        totalGold ={this.getTotalMedalCount("gold")}
        totalSilver ={this.getTotalMedalCount("silver")}
        totalBronze ={this.getTotalMedalCount("bronze")}
        />
        { this.state.countries.map(country => 
          <Country 
            key={ country.id } 
            id = { country.id }
            name={ country.name }
            gold={country.gold}
            silver={country.silver}
            bronze={country.bronze}
            onIncrement={ this.incrementGold } 
            onDecrease={this.loseGold}
            totalMedal={this.getTotalCountryMedalCount(country.name)}
            deleteCountry={this.handleDelete}
            // onIncrement={this.getTotalMedalCount(gold)}
            />
        )}
        <NewCountry onAdd={ this.handleAdd }/>
      </header>
      
    </div>
  );
}
}

export default App;
