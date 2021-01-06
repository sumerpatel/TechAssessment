import React from 'react';
import {
  FlatList,
  Text,
  View,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import { AppColors } from '../../../../common/Colors';
import { navigate } from '../../../../navigation/NavigationService';
import styles from './styles';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: [],
    };
  }

  componentDidMount() {
    this.props.getUserData();
  }

  componentDidUpdate(prevProps) {
    const { userData } = this.props;
    if (userData && prevProps.userData !== userData) {
      this.setState({ userData: userData.results });
    }
  }

  renderLoader = () => {
    return <ActivityIndicator size="large" color={AppColors.PRIMARY} />;
  };

  renderItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => navigate('TrackDetails', { data: item })}
        style={styles.itemContainer}>
        <Image
          style={{ height: 100, width: 100 }}
          source={{ uri: item.artworkUrl100 }}
        />
        <Text style={[styles.textStyle, { fontWeight: 'bold' }]}>
          {item.trackName}
        </Text>
      </TouchableOpacity>
    );
  };

  render() {
    const { userData } = this.state;
    return (
      <View style={styles.container}>
        {userData && userData.length > 0 ? (
          <FlatList
            data={userData}
            renderItem={({ item, index }) => this.renderItem(item, index)}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />
        ) : (
          this.renderLoader()
        )}
      </View>
    );
  }
}
export default Dashboard;
