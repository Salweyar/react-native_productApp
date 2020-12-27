import React, {Component} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import DealItem from './dealItem';

class DealList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.list}>
        <FlatList
          data={this.props.deals}
          renderItem={({item}) => (
            <DealItem deal={item} onPress={this.props.onItemPress} />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',
    flex: 1,
    width: '100%',
    paddingTop: 50,
  },
});

export default DealList;
