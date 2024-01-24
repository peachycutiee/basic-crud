import React from 'react';
import { ScrollView, StyleSheet, View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from react-native-vector-icons

// Assuming you have an image file for your logo (replace 'path_to_your_logo.png' with the actual path)
const Logo = require('./assets/logo.png');

export default function App() {
  const [searchText, setSearchText] = React.useState('');
  const [newShop, setNewShop] = React.useState({
    name: '',
    location: '',
  });

  const handleAddShop = () => {
    // Handle the logic for adding a new shop
    console.log('Adding shop:', newShop);
    // You can implement your logic to add the shop to the data or perform any other actions
  };

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

      <Text style={styles.directoryText}> Add Coffee Shop </Text>

      <View style={styles.singleBox}>
        {/* Upload Image Box */}
        <View style={styles.uploadImageBox}>
          <TouchableOpacity style={styles.uploadImageButton} onPress={() => console.log('Upload Image')}>
            <Text style={styles.uploadImageText}>Upload Image</Text>
          </TouchableOpacity>
        </View>

        {/* Coffee Shop Name Input */}
        <TextInput
          style={styles.inputField}
          placeholder="Enter coffee shop name"
          value={newShop.name}
          onChangeText={(text) => setNewShop({ ...newShop, name: text })}
        />
        
        {/* Location Input */}
        <TextInput
          style={styles.inputField}
          placeholder="Enter location"
          value={newShop.location}
          onChangeText={(text) => setNewShop({ ...newShop, location: text })}
        />

        {/* Add Shop Button */}
        <TouchableOpacity style={styles.addShopButton} onPress={handleAddShop}>
          <Text style={styles.addShopButtonText}>Add Shop</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.deleteButtonContainer}>
        <MaterialIcons name="close" size={40} color="#FFF" style={styles.deleteButton} />
      </TouchableOpacity>
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
  singleBox: {
    width: 311,
    height: 327,
    flexShrink: 0,
    borderRadius: 13,
    border: '2px solid rgba(160, 41, 67, 0.11)',
    background: '#FFF9E8',
    marginBottom: 16,
    padding: 12,
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  uploadImageBox: {
    width: 266,
    height: 140,
    flexShrink: 0,
    marginBottom: 16,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  uploadImageButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#791D31',
    borderRadius: 8,
  },
  uploadImageText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Josefin Sans',
    fontWeight: '700',
  },
  inputField: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: '#FFF',
    width: '100%',
    color: '#791D31',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    fontFamily: 'Josefin Sans',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  enterText: {
    color: '#791D31',
    fontFamily: 'Josefin Sans',
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
    marginBottom: 8,
  },
  addShopButton: {
    backgroundColor: '#791D31',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  addShopButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Josefin Sans',
    fontWeight: '700',
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
  deleteButtonContainer: {
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
  deleteButton: {
    alignSelf: 'center',
  },
});