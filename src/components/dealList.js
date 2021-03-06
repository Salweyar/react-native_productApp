import React, {Component} from 'react';
import {View, ScrollView, StyleSheet, FlatList} from 'react-native';
import DealItem from './dealItem';

class DealList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView style={styles.list}>
        <FlatList
          data={this.props.deals}
          renderItem={({item}) => (
            <DealItem deal={item} onPress={this.props.onItemPress} />
          )}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#eee',

    width: '100%',
  },
});

export default DealList;
