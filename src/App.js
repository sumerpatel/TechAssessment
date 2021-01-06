import React, { Component } from 'react';
import { View, StatusBar, StyleSheet, Platform } from 'react-native';
import { getOnNavigationStateChange } from './navigation/helper/getOnNavigationStateChange';
import { createAppContainer } from 'react-navigation';
import { createRootNavigator } from './navigation/appNavigator';
import * as NavigationService from './navigation/NavigationService';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  componentDidMount() {
    NavigationService.setNavigator(this.navigator);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    NavigationService.setNavigator(this.navigator);
  }

  render() {
    const AppNavigator = createAppContainer(createRootNavigator());

    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' ? (
          <StatusBar
            barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'}
            backgroundColor="black"
            hidden={false}
            translucent={false}
            networkActivityIndicatorVisible={true}
          />
        ) : (
          <StatusBar barStyle="dark-content" />
        )}

        <AppNavigator
          ref={(nav) => {
            this.navigator = nav;
          }}
          {...getOnNavigationStateChange({
            store: this.store,
          })}
          screenProps={{}}
        />
      </View>
    );
  }
}

export default App;
