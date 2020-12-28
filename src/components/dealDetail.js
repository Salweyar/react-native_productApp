import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
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
      <>
        <Image source={{uri: deal.media[0]}} style={styles.image} />
        <Text style={styles.title}>{deal.title}</Text>
        <View style={styles.container}>
          <View style={styles.author}>
            <View style={styles.content}>
              <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
              <Text style={styles.cause}>{deal.cause.name}</Text>
            </View>
            {deal.user && (
              <View style={styles.content2}>
                <Image source={{uri: deal.user.avatar}} style={styles.avatar} />
                <Text style={styles.name}>{deal.user.name}</Text>
              </View>
            )}
          </View>
          <View style={styles.content3}>
            <Text style={styles.description}>{deal.description}</Text>
          </View>
        </View>

        <View style={styles.backLink}>
          <Button onPress={this.props.onBack} color="#0bc2de" title="Back" />
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    backgroundColor: '#ccc',
  },

  title: {
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold',
    marginHorizontal: 12,
    marginVertical: 12,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#fcf0ac',
    borderColor: '#fcf0ac',
  },
  container: {
    marginHorizontal: 12,
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: 'white',
  },
  author: {
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 15,
  },
  content: {
    flex: 2,
    marginLeft: 70,
    alignSelf: 'center',
  },
  content2: {
    flex: 1,
    marginRight: 50,
    alignItems: 'center',
    alignSelf: 'center',
  },
  cause: {},
  price: {
    fontWeight: 'bold',
    marginBottom: 5,
  },

  avatar: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginLeft: 10,
  },
  content3: {
    marginHorizontal: 15,
    borderWidth: 0.5,
  },
  description: {
    marginHorizontal: 15,
    marginVertical: 15,
  },

  backLink: {
    marginTop: 20,
    marginHorizontal: 15,
    width: '20%',
  },
});

export default DealDetail;
