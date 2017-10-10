import React from 'react';
import Transaction from './Transaction.js'

export default function Card(props) {
  //Creates a card provided filing information.

  return (
    <div key={props.cardNum}>
      <div className="row">
        <div className="col s12 m4">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
            <span className="card-title"> {props.company} </span>
            <Transaction transaction={props.transaction} />
            </div>
            <div className="card-action">

              {/* TODO: Need a way to retreive information on the owner. */}
              <a href="http://www.google.com"> Owner: {props.owner} </a>
              <a href="http://www.google.com">  </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
