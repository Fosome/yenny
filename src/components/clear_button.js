let React = require('react-native')

let {
  StyleSheet,
  TouchableHighlight,
  Text,
} = React

let styles = StyleSheet.create({
  button: {
    backgroundColor: '#0b3330',
    borderColor: '#f0f0f0',
    borderRadius: 36,
    flex: 1,
    paddingTop: 12,
    paddingBottom: 12,
    paddingRight: 20,
    paddingLeft: 20,
    margin: 3,
  },
  text: {
    fontSize: 22,
    color: '#f0f0f0',
    textAlign: 'center',
  },
})

let ClearButton = React.createClass({

  render: function() {
    return (
      <TouchableHighlight
        onPress       = { this.onPress }
        style         = { styles.button }
        underlayColor = '#0a2323'
      >
        <Text style={ styles.text }>
          Clear
        </Text>
      </TouchableHighlight>
    )
  },

  onPress() {
    this.props.onPress()
  }
})

module.exports = ClearButton
