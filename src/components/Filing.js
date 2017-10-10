/* -*- Mode: C++; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* vim: set ts=8 sts=2 et sw=2 tw=80: */

import React, { Component} from 'react';
import Card from './Card.js'
import FlipMove from 'react-flip-move';


export default class Filing extends Component
{

  constructor(props) {
    super(props);

    this.state = {
      jsondata: {content: {companies: []}},
      divs: [],
    };

    this.ws = new WebSocket(this.props.socket)

    this.refresh = this.refresh.bind(this);
    this.handleData = this.handleData.bind(this);

  }


  handleData(data) {
    /* Receive messages from the connected socket and update.
    */

    let result = JSON.parse(data);
    this.setState({jsondata: result});
    this.refresh();
  }


  refresh() {
    /*
    Refreshes the state. Create an array with each element representing a card
    that contains information on transactions reported to the SEC
    */

    let divs = [];
    let companiesOwners = this.state.jsondata.content.companies

    let cardNum = 0

    for (let i=0; i < companiesOwners.length; i++) {

      let company = Object.keys(companiesOwners[i]);
      let ownerfiles = companiesOwners[i][company].owners

      // Create a card for each owner-company pair.
      for (let j=0; j < ownerfiles.length; j++) {

        let owner = Object.keys(ownerfiles[j])
        let transaction = ownerfiles[j][owner]

        cardNum += 1;

        divs.push(
          <div key={cardNum}>
          <Card transaction={transaction} owner={owner} company={company} cardNum={cardNum} />
          </div>
        )
      }

    }

    // Set the state of the json data and the divs that will be rendered
    this.setState({divs: divs});

  };


  componentWillMount() {
    // When connected the django channel sends message that initates the refresh
    this.ws.onmessage = evt => (this.handleData(evt.data));
  };


  render() {
    return (
      <div>
        <FlipMove staggerDurationBy="30" duration={600}>
            {this.state.divs}
        </FlipMove>
      </div>
    );
  }

};
