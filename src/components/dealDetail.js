import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {priceDisplay} from '../until';
import ajax from '../ajax';

class DealDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deal: this.props.initialDealData,
    };
  }

  async componentDidMount() {
    const fullDeal = await ajax.fetchDealDetail(this.state.deal.key);
    this.setState({deal: fullDeal});
  }

  render() {
    const {deal} = this.state;
    return (
      <View style={styles.deal}>
        <TouchableOpacity onPress={this.props.onBack}>
          <Text style={styles.backLink}>Back</Text>
        </TouchableOpacity>
        <Image source={{uri: deal.media[0]}} style={styles.image} />
        <View style={styles.info}>
          <Text>{deal.title}</Text>
          <View style={styles.footer}>
            <Text style={styles.cause}>{deal.cause.name}</Text>
            <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
          </View>
        </View>
        {deal.user && (
          <View>
            <Image source={{uri: deal.user.avatar}} style={styles.avatar} />
            <Text>{deal.user.name}</Text>
          </View>
        )}
        <View>
          <Text>{deal.description}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
    marginTop: 50,
  },
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },
  info: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: '#bbb',
    borderWidth: 1,
    borderTopWidth: 0,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  footer: {
    flexDirection: 'row',
  },
  cause: {
    flex: 2,
  },
  price: {
    flex: 1,
    textAlign: 'right',
  },
  avatar: {
    height: 60,
    width: 60,
  },
  backLink: {
    marginBottom: 5,
    color: '#22f',
  },
});

export default DealDetail;
