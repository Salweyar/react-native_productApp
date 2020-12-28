import React, {Component} from 'react';
import {debounce} from 'lodash';
import {TextInput, StyleSheet} from 'react-native';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };

    this.debouncedSearchDeals = debounce(this.props.searchDeals, 300);
  }

  handleChange = (search) => {
    this.setState({search}, () => {
      this.debouncedSearchDeals(this.state.search);
    });
  };

  render() {
    return (
      <TextInput
        placeholder="Search"
        style={styles.input}
        onChangeText={this.handleChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginHorizontal: 12,
  },
});

export default SearchBar;
