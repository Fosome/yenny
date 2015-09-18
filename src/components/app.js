let React = require('react-native')

let {
  StyleSheet,
  Text,
  View,
} = React

let Nav         = require('./nav.js'),
    YenInput    = require('./yen_input.js'),
    ClearButton = require('./clear_button.js')

let styles = StyleSheet.create({
  container: {
    backgroundColor: '#135e5a',
    flex: 1,
    flexDirection: 'column',
    padding: 20,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  result: {
    color: '#f0f0f0',
    fontSize: 36,
    flex: 2,
    textAlign: 'right',
  },
  blankView: {
    flex: 1
  },
})

let App = React.createClass({
  getInitialState: function() {
    return {
      conversionRate : 120.0,
      yenValue       : '0',
    }
  },

  render: function() {
    return (
      <View style={ styles.container }>
        <Nav />

        <YenInput
          onChangeText = { this.onYenInputChange }
          ref          = { (component) => { this._yenInput = component }}
          value        = { this.state.yenValue }
        />

        <View style={ styles.actions }>
          <ClearButton
            onPress = { this.onClearButtonPress }
          />

          <Text style={ styles.result } >
            ${ this.calcDollarValue() }
          </Text>
        </View>

        <View style={ styles.blankView }></View>
      </View>
    )
  },

  onYenInputChange(text) {
    let value = text || '0'
    this.setState({ yenValue: value })
  },

  onClearButtonPress() {
    this.setState({ yenValue: '0' })
    this._yenInput.clear()
  },

  calcDollarValue() {
    return (
      parseFloat(this.state.yenValue) / this.state.conversionRate
    ).toFixed(2)
  }
})

module.exports = App
