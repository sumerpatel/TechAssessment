import React from 'react';
import { View } from 'react-native';
import Button from '../../../component/Button';
import { navigate } from '../../../navigation/NavigationService';
import styles from './styles';

class Login extends React.Component {
  state = {};

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => navigate('Home')} title={'Login'} />
      </View>
    );
  }
}

export default Login;
