import React, {Component} from 'react';
import {debounce} from 'lodash';
import {TextInput, StyleSheet} from 'react-native';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: this.props.initailSearchTerm,
    };

    this.debouncedSearchDeals = debounce(this.searchDeals, 300);
  }

  searchDeals = (search) => {
    this.props.searchDeals(search);
    // blur
    this.inputElement.blur();
  };

  handleChange = (search) => {
    this.setState({search}, () => {
      this.debouncedSearchDeals(this.state.search);
    });
  };

  render() {
    return (
      <TextInput
        ref={(inputElement) => {
          this.inputElement = inputElement;
        }}
        value={this.state.search}
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
