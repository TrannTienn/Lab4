//MealsScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, Button, Modal, TouchableOpacity } from 'react-native';

const MealsScreen = ({ route, navigation }) => {
  const { categoryName, items } = route.params;
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOrder = (meal) => {
    setSelectedMeal(meal);
    setQuantity(1); // Reset quantity to 1
    setModalVisible(true);
  };

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const placeOrder = () => {
    // Here you can add your order placing logic
    alert(`Đặt hàng thành công: ${selectedMeal.name}
Số lượng: ${quantity}`);
    setModalVisible(false);
  };

  const renderMealItem = ({ item }) => (
    <View style={styles.mealItem}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.mealDetails}>
        <Text style={styles.mealName}>{item.name}</Text>
        <Text style={styles.mealPrice}>{item.price}</Text>
        <Button title="Đặt hàng" onPress={() => handleOrder(item)} />
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>{categoryName}</Text>
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={renderMealItem}
      />
      {selectedMeal && (
        <Modal
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Đặt hàng {selectedMeal.name}</Text>
              <Image source={selectedMeal.image} style={styles.modalImage} />
              <Text style={styles.modalPrice}>{selectedMeal.price}</Text>
              <View style={styles.quantityContainer}>
                <Button title="-" onPress={decrementQuantity} />
                <Text style={styles.quantityText}>{quantity}</Text>
                <Button title="+" onPress={incrementQuantity} />
              </View>
              <TouchableOpacity style={styles.orderButton} onPress={placeOrder}>
                <Text style={styles.orderButtonText}>Đặt hàng</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButton}>Đóng</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  mealItem: {
    flex: 1,
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  mealDetails: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  mealName: {
    fontSize: 18,
  },
  mealPrice: {
    fontSize: 16,
    color: 'gray',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalPrice: {
    fontSize: 18,
    color: 'gray',
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 15,
  },
  orderButton: {
    backgroundColor: '#ff6f00',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  orderButtonText: {
    color: 'white',
    fontSize: 18,
  },
  closeButton: {
    fontSize: 18,
    color: '#007bff',
  },
});

export default MealsScreen;
