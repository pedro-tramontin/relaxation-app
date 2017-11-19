import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

class Quote extends React.Component {
  render() {
    const quoteText = this.props.quoteText;
    const quoteSource = this.props.quoteSource;

    return(
      <View style={styles.quoteContainer}>
        <Text style={styles.quoteText}>"{quoteText}"</Text>
        <Text style={styles.sourceText}>- {quoteSource}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
	quoteContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	quoteText: {
		fontFamily: (Platform.OS === 'ios') ?
			'AvenirNext-Bold' :
			'Roboto',
		fontSize: 36,
		color: '#ffffff',
		marginVertical: 30,
	},
	sourceText: {
		fontFamily: (Platform.OS === 'ios') ?
			'AvenirNext-Italic' :
			'Roboto',
		fontSize: 20,
		color: '#F8F8F8',
		textAlign: 'right',
		fontStyle: 'italic',
	},
})


export default Quote;
