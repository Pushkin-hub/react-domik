import React, { Component } from 'react';

class QuoteOfTheDay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      isVisible: false,
    };
    this.quotes = [
      { quote: "Будущее зависит от того, что Вы делаете сегодня.", author: "Махатма Ганди" },
      { quote: "Жизнь — это то, что происходит с вами, пока Вы заняты другими планами.", author: "Джон Леннон" },
      { quote: "Сложности — это то, что делает жизнь интересной. Преодоление их делает жизнь значимой.", author: "Джошуа Дж. Марин" },
    ];
  }

  showQuote = () => {
    const randomIndex = Math.floor(Math.random() * this.quotes.length);
    this.setState({
      quote: this.quotes[randomIndex].quote,
      author: this.quotes[randomIndex].author,
      isVisible: true,
    });
  };

  hideQuote = () => {
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button onClick={this.showQuote}>Показать цитату</button>
        <button onClick={this.hideQuote}>Скрыть цитату</button>
        {this.state.isVisible && (
          <div>
            <h2>{this.state.quote}</h2>
            <p>- {this.state.author}</p>
          </div>
        )}
      </div>
    );
  }
}

export default QuoteOfTheDay;