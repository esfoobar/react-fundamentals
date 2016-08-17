import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
          red: 0,
          green: 0,
          blue: 0
        }
        this.update = this.update.bind(this)
    }
    update(e){
        this.setState({ txt: e.target.value })
    }
    render(){
        return (
            <div>
              {this.state.txt}
              <hr />
              <Slider ref="red" update={this.update} />
              <br />
              <Slider ref="green" update={this.update} />
              <br />
              <Slider ref="blue" update={this.update} />
              <br />
            </div>
        );
    }
}

class Slider extends React.Component {
  render() {
    return (
      <input type="range"
        min="0"
        max="255"
        onChange={this.props.update} />
      );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
