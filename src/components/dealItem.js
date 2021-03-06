import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {priceDisplay} from '../until';

class DealItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handlePress = () => {
    this.props.onPress(this.props.deal.key);
  };

  render() {
    const {deal} = this.props;
    return (
      <ScrollView>
        <TouchableOpacity onPress={this.handlePress} style={styles.deal}>
          <Image source={{uri: deal.media[0]}} style={styles.image} />
          <View style={styles.info}>
            <Text>{deal.title}</Text>
            <View style={styles.footer}>
              <Text style={styles.cause}>{deal.cause.name}</Text>
              <Text style={styles.price}>{priceDisplay(deal.price)}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  deal: {
    marginHorizontal: 12,
    marginTop: 15,
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
});

export default DealItem;
