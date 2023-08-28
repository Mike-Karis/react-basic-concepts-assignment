import React, { Component } from 'react';
class Medal extends Component {

    render() { 
        const { totalGold, totalSilver, totalBronze } = this.props;
        return (<div className='Medal'><div><h2>Total Gold Medals: {totalGold}</h2><h2>Total Silver Medals: {totalSilver}</h2><h2>Total Bronze Medals: {totalBronze}</h2></div></div>);
    }
}
 
export default Medal;