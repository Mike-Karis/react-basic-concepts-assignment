import React, { Component } from 'react';
class Country extends Component {
    state = { 
        name: 'United States',
        goldmedals: 1,
     } 
    render() { 
        return (<div><div><h1>{this.state.name}</h1></div><div><h1>Gold Medals: {this.state.goldmedals} <button className='add'>+</button></h1></div></div>);
    }
    handleClick = () => {
        // console.log(this.state.goldmedals);
        this.setState({ goldmedals: this.state.goldmedals + 1 })
    }
    render() { 
        return (<div onClick={ this.handleClick } className='add'><div><div><h1>{this.state.name}</h1></div><div><h1>Gold Medals: {this.state.goldmedals} <button className='add'>+</button></h1></div></div></div>);
    }
}
 
export default Country;