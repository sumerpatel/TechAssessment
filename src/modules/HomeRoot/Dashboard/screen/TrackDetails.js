import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { AppColors } from '../../../../common/Colors';

class TrackDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  renderText = (key, value) => {
    return <Text style={styles.textStyle}>{`${key} : ${value}`}</Text>;
  };

  render() {
    const { data } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle} source={{ uri: data.artworkUrl100 }} />
        {this.renderText('Name', data.trackName)}
        {this.renderText('Genre', data.primaryGenreName)}
        {this.renderText('Artist', data.artistName)}
        {this.renderText('Track Price', data.trackPrice + data.currency)}
        {this.renderText('Collection', data.collectionName)}
        {this.renderText(
          'Collection Price',
          data.collectionPrice + data.currency,
        )}
      </View>
    );
  }
}
export default TrackDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
  },
  imageStyle: {
    height: 120,
    width: 120,
    alignSelf: 'center',
    marginVertical: 8,
  },
  textStyle: {
    color: 'black',
    fontSize: 16,
    marginVertical: 4,
    paddingHorizontal: 16,
    textAlign: 'left',
  },
});
