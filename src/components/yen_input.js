let React = require('react-native')
let {
  StyleSheet,
  TextInput,
  View,
} = React

let styles = StyleSheet.create({
  input: {
    backgroundColor: '#0b3330',
    color: '#f0f0f0',
    fontSize: 36,
    paddingTop: 6,
    paddingBottom: 2,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
})

let YenInput = React.createClass({

  render() {
    return (
      <TextInput
        keyboardType = 'numeric'
        onChangeText = { this.onChange }
        ref          = { (component) => { this._textInput = component }}
        style        = {styles.input}
        textAlign    = 'end'
        value        = { this.props.yenValue }
      />
    )
  },

  onChange(text) {
    this.props.onChangeText(text)
  },

  clear() {
    this._textInput.setNativeProps({text: ''})
  }
})

module.exports = YenInput
