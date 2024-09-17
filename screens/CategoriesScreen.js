//CategoriesScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';

// Import hình ảnh từ tệp asset
const italianImage = require('../assets/com.jpg');
const bun = require('../assets/bunbo.jpg');
const ct = require('../assets/comtam.jpg');
const ts = require('../assets/ts.jpg');
const cf = require('../assets/cf.jpg');
const av = require('../assets/av.jpg');
const bm = require('../assets/bm.jpg');
const lau = require('../assets/lau.jpg');
const tm = require('../assets/tm.jpg');

const CATEGORIES = [
  { 
    id: '1', 
    title: 'Cơm', 
    imageUrl: italianImage,
    items: [
      { id: '1-1', name: 'Cơm gà', image: italianImage, price: '30.000 VND' },
      { id: '1-2', name: 'Cơm tấm', image: ct, price: '25.000 VND' },
      { id: '1-3', name: 'Cơm chiên', image: italianImage, price: '35.000 VND' },
      { id: '1-4', name: 'Cơm cháy', image: italianImage, price: '27.000 VND' },
      { id: '1-5', name: 'Cơm cuộn', image: italianImage, price: '29.000 VND' },
      { id: '1-6', name: 'Cơm lam', image: italianImage, price: '23.000 VND' },
      // Thêm món ăn khác ở đây
    ]
  },
  { 
    id: '2', 
    title: 'Bún-Phở-Hủ tiếu', 
    imageUrl: bun,
    items: [
      { id: '2-1', name: 'Bún bò Huế', image: bun, price: '35.000 VND' },
      { id: '2-2', name: 'Bún chả', image: bun, price: '25.000 VND' },
      { id: '2-3', name: 'Bánh canh', image: bun, price: '27.000 VND' },
      { id: '2-4', name: 'Bún mắm', image: bun, price: '22.000 VND' },
      { id: '2-5', name: 'Bún thịt nướng', image: bun, price: '30.000 VND' },
      { id: '2-6', name: 'Bún thang', image: bun, price: '25.000 VND' },
      // Thêm món ăn khác ở đây
    ]
  },
  { 
    id: '3', 
    title: 'Trà sữa', 
    imageUrl: ts,
    items: [
      { id: '3-1', name: 'Trà sữa truyền thống', image: ts, price: '30.000 VND' },
      { id: '3-2', name: 'Sữa tươi Trân châu', image: ts, price: '25.000 VND' },
      { id: '3-3', name: 'Trà sữa kem trứng', image: ts, price: '35.000 VND' },
      { id: '3-4', name: 'Trà sữa bạc hà', image: ts, price: '27.000 VND' },
      { id: '3-5', name: 'Trà sen', image: ts, price: '29.000 VND' },
      { id: '3-6', name: 'Trà đào', image: ts, price: '23.000 VND' },
      // Thêm món ăn khác ở đây
    ]
  },
  { 
    id: '4', 
    title: 'Cà phê', 
    imageUrl: cf,
    items: [
      { id: '4-1', name: 'Cà phê đen đá', image: cf, price: '30.000 VND' },
      { id: '4-2', name: 'Cà phê sữa đá', image: cf, price: '25.000 VND' },
      { id: '4-3', name: 'Bạc sỉu', image: cf, price: '35.000 VND' },
      { id: '4-4', name: 'Capuchino', image: cf, price: '27.000 VND' },
      { id: '4-5', name: 'Cà phê caramel', image: cf, price: '29.000 VND' },
      { id: '4-6', name: 'Cà phê pha phin', image: cf, price: '23.000 VND' },
      // Thêm món ăn khác ở đây
    ]
  },

  {
  id: '5', 
title: 'Ăn vặt', 
imageUrl: av, // Thay thế bằng đường dẫn đến hình ảnh của món ăn vặt
items: [
  { id: '5-1', name: 'Khoai tây chiên', image: av, price: '20.000 VND' },
  { id: '5-2', name: 'Bánh tráng cuốn', image: av, price: '15.000 VND' },
  { id: '5-3', name: 'Chả giò', image: av, price: '25.000 VND' },
  { id: '5-4', name: 'Bánh mì kẹp', image: av, price: '30.000 VND' },
  { id: '5-5', name: 'Xôi gà', image: av, price: '35.000 VND' },
  { id: '5-6', name: 'Trứng vịt lộn', image: av, price: '10.000 VND' },
],
  },
  {
    id: '6', 
    title: 'Bánh mì', 
    imageUrl: bm, // Thay thế bằng đường dẫn đến hình ảnh của món bánh mì
    items: [
      { id: '6-1', name: 'Bánh mì thịt', image: bm, price: '25.000 VND' },
      { id: '6-2', name: 'Bánh mì chả', image: bm, price: '30.000 VND' },
      { id: '6-3', name: 'Bánh mì kẹp trứng', image: bm, price: '20.000 VND' },
      { id: '6-4', name: 'Bánh mì pate', image: bm, price: '28.000 VND' },
      { id: '6-5', name: 'Bánh mì que', image: bm, price: '15.000 VND' },
      { id: '6-6', name: 'Bánh mì xíu mại', image: bm, price: '35.000 VND' },
    ],
  },
  

  {
    id: '7', 
    title: 'Lẩu', 
    imageUrl: lau, // Thay thế bằng đường dẫn đến hình ảnh của món lẩu
    items: [
      { id: '7-1', name: 'Lẩu Thái', image: lau, price: '150.000 VND' },
      { id: '7-2', name: 'Lẩu gà', image: lau, price: '120.000 VND' },
      { id: '7-3', name: 'Lẩu hải sản', image: lau, price: '200.000 VND' },
      { id: '7-4', name: 'Lẩu bò', image: lau, price: '180.000 VND' },
      { id: '7-5', name: 'Lẩu nấm', image: lau, price: '110.000 VND' },
      { id: '7-6', name: 'Lẩu kim chi', image: lau, price: '160.000 VND' },
    ],
  },

  {
    id: '8', 
    title: 'Tráng miệng', 
    imageUrl: tm, // Thay thế bằng đường dẫn đến hình ảnh của món tráng miệng
    items: [
      { id: '8-1', name: 'Bánh flan', image: tm, price: '15.000 VND' },
      { id: '8-2', name: 'Chè đậu xanh', image: tm, price: '12.000 VND' },
      { id: '8-3', name: 'Kem trái cây', image: tm, price: '20.000 VND' },
      { id: '8-4', name: 'Bánh mì ngọt', image: tm, price: '10.000 VND' },
      { id: '8-5', name: 'Tàu hủ nước đường', image: tm, price: '8.000 VND' },
      { id: '8-6', name: 'Trái cây tươi', image:tm, price: '25.000 VND' },
    ],
  }
  
  
];

const CategoriesScreen = ({ navigation }) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={item => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.gridItem}
          onPress={() => navigation.navigate('Meals', { categoryId: item.id, categoryName: item.title, items: item.items })}
        >
          <View style={styles.container}>
            <Image source={item.imageUrl} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    
  },
  container: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: '85%',
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    padding: 1,
  },
});

export default CategoriesScreen;
