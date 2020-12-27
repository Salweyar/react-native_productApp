import React, {Component} from 'react';
import DealList from './dealList';
import {View, Text, StyleSheet} from 'react-native';
import ajax from '../ajax';
import DealDetail from './dealDetail';

class App extends Component {
  state = {
    deals: [],
    currectDealId: null,
  };

  async componentDidMount() {
    const deals = await ajax.fetchInitalDeals();
    this.setState({deals});
  }

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
        <DealDetail
          initialDealData={this.currectDeal()}
          onBack={this.unSetCurrectDeal}
        />
      );
    }
    if (this.state.deals.length > 0) {
      return (
        <DealList deals={this.state.deals} onItemPress={this.setCurrectDeal} />
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
