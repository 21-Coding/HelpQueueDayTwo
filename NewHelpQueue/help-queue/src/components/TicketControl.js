import React from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import Steps from './Steps';
import Help from './Help';
import FifteenMins from './FifteenMins';

class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // formVisibleOnPage: false,
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.counter == 0) {
      currentlyVisibleState = <TicketList />;
      buttonText = "Add Ticket";
    } else if (this.state.counter == 1) {
      currentlyVisibleState = <Steps />;
      buttonText = "Yes";
    } else if (this.state.counter == 2) {
      currentlyVisibleState = <Help />;
      buttonText = "Yes";
    } else if (this.state.counter == 3) {
      currentlyVisibleState = <FifteenMins />;
      buttonText = "Yes";
    } else if (this.state.counter == 4) {
      currentlyVisibleState = <NewTicketForm />;
      this.state.counter = -1;
      buttonText = "Return to Ticket List";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TicketControl;
