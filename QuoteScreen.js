import React from 'react';
import { StyleSheet, View, Image, LayoutAnimation, NativeModules } from 'react-native';

import Quote from './components/Quote'
import NextQuoteButton from './components/NextQuoteButton'

const bgImage = require('./assets/bg.png')

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const tranquil = {
	duration: 500,
	create: {
		duration: 1000,
		delay: 300,
		type: LayoutAnimation.Types.easeIn,
		property: LayoutAnimation.Properties.opacity,
	},
	update: {
		type: LayoutAnimation.Types.easeInEaseOut,
		property: LayoutAnimation.Properties.opacity,
	},
	delete: {
		duration: 200,
		type: LayoutAnimation.Types.easeOut,
		property: LayoutAnimation.Properties.opacity,
	},
}

export default class QuoteScreen extends React.Component {
  static navigationOptions = {
    title: 'Quote'
  };

  componentWillUpdate() {
    LayoutAnimation.configureNext(tranquil);
  }

  render() {
    const { quote, onNextQuotePress } = this.props.screenProps;

    return (
      <Image source={bgImage} style={styles.backgroundContainer}>
        <View style={styles.container}>
          <Quote quoteId={quote.qId} quoteText={quote.text} quoteSource={quote.source} />
          <NextQuoteButton onPress={onNextQuotePress} />
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  backgroundContainer: {
		flex: 1,
		resizeMode: 'cover',
		width: undefined,
		height: undefined,
	},
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
