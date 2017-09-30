import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      results: null,
      searchKey: "",
      searchTerm: DEFAULT_QUERY,
    };

    this.fetchPosts = this.fetchPosts.bind(this);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Commudit</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
