import React, {Component} from 'react';
import DealList from './dealList';
import {View, Text, StyleSheet} from 'react-native';
import ajax from '../ajax';
import DealDetail from './dealDetail';
import SearchBar from './SearchBar';

class App extends Component {
  state = {
    deals: [],
    dealsFromSearch: [],
    currectDealId: null,
  };

  async componentDidMount() {
    const deals = await ajax.fetchInitalDeals();
    this.setState({deals});
  }

  searchDeals = async (search) => {
    let dealsFromSearch = [];
    if (search) {
      dealsFromSearch = await ajax.fetchDealsSearchresults(search);
    }

    this.setState({dealsFromSearch});
  };

  setCurrectDeal = (dealId) => {
    this.setState({currectDealId: dealId});
  };

  unSetCurrectDeal = () => {
    this.setState({currectDealId: null});
  };

  currectDeal = () => {
    return this.state.deals.find(
      (deal) => deal.key === this.state.currectDealId,
    );
  };

  render() {
    if (this.state.currectDealId) {
      return (
        <View style={styles.main}>
          <DealDetail
            initialDealData={this.currectDeal()}
            onBack={this.unSetCurrectDeal}
          />
        </View>
      );
    }
    let dealsToDisplay =
      this.state.dealsFromSearch.length > 0
        ? this.state.dealsFromSearch
        : this.state.deals;
    if (dealsToDisplay.length > 0) {
      return (
        <View style={styles.main}>
          <SearchBar searchDeals={this.searchDeals} />
          <DealList deals={dealsToDisplay} onItemPress={this.setCurrectDeal} />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Products App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
  },
});

export default App;
