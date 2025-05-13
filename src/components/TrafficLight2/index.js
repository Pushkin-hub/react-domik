import React, { Component } from 'react';

class TrafficLight2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
    };
  }

  changeColor = () => {
    this.setState(prevState => {
      if (prevState.color === 'red') return { color: 'green' };
      if (prevState.color === 'green') return { color: 'yellow' };
      return { color: 'red' };
    });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <div style={{
          width: '100px',
          height: '300px',
          backgroundColor: '#333',
          borderRadius: '10px',
          position: 'relative',
          margin: 'auto'
        }}>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: this.state.color === 'red' ? 'red' : '#555',
            borderRadius: '50%',
            margin: '10px auto',
          }}></div>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: this.state.color === 'yellow' ? 'yellow' : '#555',
            borderRadius: '50%',
            margin: '10px auto',
          }}></div>
          <div style={{
            width: '80px',
            height: '80px',
            backgroundColor: this.state.color === 'green' ? 'green' : '#555',
            borderRadius: '50%',
            margin: '10px auto',
          }}></div>
        </div>
        <button onClick={this.changeColor}>Сменить цвет</button>
      </div>
    );
  }
}

export default TrafficLight2;
