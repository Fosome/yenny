let React = require('react-native')

let {
  StyleSheet,
  Text,
} = React

let styles = StyleSheet.create({
  logo: {
    color: '#f0f0f0',
    fontSize: 30,
    marginBottom: 20
  }
})

let Nav = React.createClass({

  render() {
    return (
      <Text style={ styles.logo }>
        ¥enny
      </Text>
    )
  }
})

module.exports = Nav
