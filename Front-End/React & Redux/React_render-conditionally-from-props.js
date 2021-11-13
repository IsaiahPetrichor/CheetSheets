class Results extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    {/* Change code below this line */}
    const win = 'You Win!';
    const lose = 'You Lose!';
    return (
        <h1>{this.props.fiftyFifty() ? win : lose}</h1>
    );
    {/* Change code above this line */}
  }
}

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => {
      // Complete the return statement:
      return {
        counter: prevState.counter + 1
      }
    });
  }
  render() {
    const expression = () => {
      if (Math.random() >= .5){
        return true
      }
      return false
    };
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        {/* Change code below this line */}
        <Results fiftyFifty={expression} />
        {/* Change code above this line */}
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
}