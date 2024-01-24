import React from 'react';
import { ScrollView, StyleSheet, View, TextInput, Image, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from react-native-vector-icons

// Assuming you have an image file for your logo (replace 'path_to_your_logo.png' with the actual path)
const Logo = require('./assets/logo.png');

export default function App() {
  const [searchText, setSearchText] = React.useState('');
  const [editedShop, setEditedShop] = React.useState(null);
  const [shops, setShops] = React.useState([
    { id: 1, name: 'Coffee Shop 1', location: 'Location 1', image: null },
    { id: 2, name: 'Coffee Shop 2', location: 'Location 2', image: null },
    // Add more shops as needed
  ]);

  const handleEditShop = () => {
    if (editedShop) {
      // Handle the logic for editing the edited shop
      console.log('Editing shop:', editedShop);
      // You can implement your logic to edit the shop data or perform any other actions
    }
  };

  const handleDeleteShop = () => {
    if (editedShop) {
      // Handle the logic for deleting the edited shop
      console.log('Deleting shop:', editedShop);
      // You can implement your logic to delete the shop data or perform any other actions
    }
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

      <Text style={styles.directoryText}> Edit Coffee Shop </Text>

      {shops.slice(0, 1).map((shop) => (
        <View style={styles.singleBox} key={shop.id}>
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
            value={shop.name}
            onChangeText={(text) => setEditedShop({ ...shop, name: text })}
          />

          {/* Location Input */}
          <TextInput
            style={styles.inputField}
            placeholder="Enter location"
            value={shop.location}
            onChangeText={(text) => setEditedShop({ ...shop, location: text })}
          />

          {/* Edit Shop and Delete Shop Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.editShopButton} onPress={handleEditShop}>
              <Text style={styles.editShopButtonText}>Edit Shop</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteShopButton} onPress={handleDeleteShop}>
              <Text style={styles.deleteShopButtonText}>Delete Shop</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}

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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
  },
  editShopButton: {
    backgroundColor: '#791D31',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '48%', // Adjust the width as needed
  },
  editShopButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Josefin Sans',
    fontWeight: '700',
    textAlign: 'center',
  },
  deleteShopButton: {
    backgroundColor: '#791D31',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '48%',
  },
  deleteShopButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontFamily: 'Josefin Sans',
    fontWeight: '700',
    textAlign: 'center',
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

