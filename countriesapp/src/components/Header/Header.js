import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {headerStyles as styles} from './styles';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.subtitle}>Hangi ülkeyi merak ediyorsun?</Text>
        <View style={styles.line} />
        <Text style={styles.title}>COUNTRIES</Text>
      </View>
    );
  }
}
