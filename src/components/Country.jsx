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
        const { onIncrement, onDecrease, name, gold, id } = this.props;
        return (<div className='Country'><div><h1>{name}</h1></div><div><h1>Gold Medals: {gold} <button onClick={ () => onIncrement(id) }>+</button><button onClick={ () => onDecrease(id) }>-</button></h1></div></div>);
    }
}
 
export default Country;
//test 