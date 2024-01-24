import React from 'react';
import { ScrollView, StyleSheet, Text, View, TextInput, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from react-native-vector-icons

const CoffeeShops = [
  { name: 'The Bike Coffee CDO', location: '2nd Floor West Concourse, Limketkai Mall, Limketkai Drive, Cagayan de Oro City', image: require('./assets/TheBikeCoffeeCDO.jpg') },
  { name: 'Kofi 99', location: 'The Uptown Strip, Cagayan de Oro, Philippines', image: require('./assets/Kofi99.jpg') },
  { name: 'Caffeine Matters', location: 'The Uptown Strip, Cagayan de Oro, Philippines', image: require('./assets/CaffeineMatters.jpg') },
  { name: 'FLTR. Pop-up Coffee', location: '10th St corner 14th St, Brgy. Macasandig , Cagayan de Oro, Philippines', image: require('./assets/FLTRPopUpCoffee.jpg') },
];

// Assuming you have an image file for your logo (replace 'path_to_your_logo.png' with the actual path)
const Logo = require('./assets/logo.png');

export default function App() {
  const [searchText, setSearchText] = React.useState('');

  return (
    <ScrollView style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.navigationBarContainer}>
        <View style={styles.navigationBar}>
          <Image source={Logo} style={styles.logo} />
        </View>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search here...."
        placeholderTextColor="#FFFAE8"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      {/* "Coffee Shops Directory" Text */}
      <Text style={styles.directoryText}> Coffee Shops Directory </Text>

      <ScrollView style={styles.coffeeShopsContainer}>
        {CoffeeShops.map((shop, index) => (
          <View key={index} style={styles.coffeeShopBox}>
            <View style={styles.coffeeShop}>
              <Image source={shop.image} style={styles.shopImage} />
              <View style={styles.textContainer}>
                <Text style={styles.coffeeShopName}>{shop.name}</Text>
                <Text style={styles.coffeeShopLocation}>{shop.location}</Text>
              </View>
              {/* Edit Icon */}
              <View style={styles.editIconContainer}>
                <MaterialIcons name="edit" size={14} color="#791D31" style={styles.editIcon} />
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Plus Button with MaterialIcons inside a circle */}
      <View style={styles.plusButtonContainer}>
        <MaterialIcons name="add" size={40} color="#FFF" style={styles.plusButton} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF9E870',
  },
  navigationBarContainer: {
    marginBottom: 20,
  },
  navigationBar: {
    width: '100%',
    height: 83,
    flexShrink: 0,
    backgroundColor: 'rgba(255, 249, 232, 0.44)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 5,
  },
  logo: {
    width: 119,
    height: 64,
    flexShrink: 0,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#A02943',
    color: '#FFF',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    fontFamily: 'Josefin Sans',
  },
  directoryText: {
    color: '#791D31',
    fontFamily: 'Josefin Sans',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '700',
    marginBottom: 16,
  },
  coffeeShopsContainer: {
    flex: 1,
  },
  coffeeShopBox: {
    marginBottom: 16,
  },
  coffeeShop: {
    borderWidth: 1,
    borderColor: '#A02943',
    borderRadius: 8,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  shopImage: {
    width: 80,
    height: 80,
    marginRight: 8,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  coffeeShopName: {
    color: '#791D31',
    fontFamily: 'Josefin Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  coffeeShopLocation: {
    color: '#791D31',
    fontFamily: 'Josefin Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  editIconContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 14,
    height: 14,
    flexShrink: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editIcon: {
    flexShrink: 0,
  },
  plusButtonContainer: {
    width: 52,
    height: 52,
    backgroundColor: '#791D31',
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    flexShrink: 0,
    alignSelf: 'center',
    marginTop: 20,
  },
  plusButton: {
    alignSelf: 'center',
  },
});
