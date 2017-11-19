import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { StackNavigator } from 'react-navigation';

import StartScreen from './StartScreen'
import QuoteScreen from './QuoteScreen'

const { quotes } = require('./quotes.json');

const AppNavigator = StackNavigator({
  Start: { screen: StartScreen },
  Quote: { screen: QuoteScreen },
},
{
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quoteIndex: 2,
    }

    this._incrementQuoteIndex = this._incrementQuoteIndex.bind(this);
  }

  _incrementQuoteIndex() {
    let newIndex = this.state.quoteIndex + 1;

    if (newIndex == quotes.length) {
      newIndex = 0;
    }

    this.setState({
      quoteIndex: newIndex,
    });
  }

  render() {
    return <AppNavigator screenProps={{
      qId: this.state.quoteIndex,
      quote: quotes[this.state.quoteIndex],
      onNextQuotePress: this._incrementQuoteIndex,
    }}/>;
  }
}
