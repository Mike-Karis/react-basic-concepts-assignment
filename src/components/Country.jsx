import React, { Component } from 'react';
class Country extends Component {
    // state = { 
    //     name: 'United States',
    //     goldmedals: 1,
    //  } 
    // render() { 
    //     return (<div><div><h1>{this.state.countries.name}</h1></div><div><h1>Gold Medals: {this.state.goldmedals} <button className='add'>+</button></h1></div></div>);
    // }
    render() { 
        const { onIncrement, onDecrease, deleteCountry, name, gold, silver, bronze, totalMedal, id } = this.props;
        return (<div className='Country'><div><h1>{name}</h1></div><div>
        <h2>Total Medals: {totalMedal}</h2>
        <h3>Gold Medals: {gold} <button onClick={ () => onIncrement(id, "gold") }>+</button><button onClick={ () => onDecrease(id, "gold") }>-</button></h3>
        <h3>Silver Medals: {silver} <button onClick={ () => onIncrement(id, "silver") }>+</button><button onClick={ () => onDecrease(id, "silver") }>-</button></h3>
        <h3>Bronze Medals: {bronze} <button onClick={ () => onIncrement(id, "bronze") }>+</button><button onClick={ () => onDecrease(id, "bronze") }>-</button></h3>
        <h4><button onClick={ () => deleteCountry(id) }>Delete</button></h4>
        </div></div>);
    }
}
 
export default Country;
//test 