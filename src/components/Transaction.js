import React, { Component} from 'react';

export default class Transaction extends Component {
  render () {
    const rows = this.props.transaction.map((lineItem, lineItemNum) => {
      const postShares = lineItem.owner_sharesownedfollowingtransaction;
      return (
        <p key={lineItemNum}>
          <br/>
          Transaction Date: {lineItem.datetime} <br/>
          Security: {lineItem.security} <br/>
          Shares: {lineItem.shares.toLocaleString()} <br/>
          Shares Post Transaction: {postShares.toLocaleString()} <br/>
          Price/Share: ${lineItem.pricepershare} <br/>
          IsAcquisition: {lineItem.is_acquisition} <br/>
          Nature of Ownership: {lineItem.ownershipnature} <br/>
          <br/>
        </p>
      )
    });
    return (<div>{rows}</div>);
  }
};