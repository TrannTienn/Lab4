// App.js
import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsScreen from './screens/MealsScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function CategoriesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bạn muốn ăn gì?" component={CategoriesScreen} />
      <Stack.Screen
        name="Meals"
        component={MealsScreen}
        options={({ route }) => ({
          headerTitle: route.params?.categoryName ?? 'Meals'
        })}
      />
    </Stack.Navigator>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Trang chủ" component={CategoriesStack} />
      <Drawer.Screen name="Yêu thích" component={FavouritesScreen} />
      <Drawer.Screen name="Cài đặt" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            // Cập nhật biểu tượng dựa trên tên màn hình
            if (route.name === 'Danh mục') {
              iconName = 'list'; // Ví dụ: biểu tượng danh sách
            } else if (route.name === 'Yêu thích') {
              iconName = 'heart';
            } else if (route.name === 'Cài đặt') {
              iconName = 'settings';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#e91e63', // Màu của icon khi tab được chọn
          tabBarInactiveTintColor: '#CCCCCC', // Màu của icon khi tab không được chọn
          tabBarStyle: {
            backgroundColor: '#009933', // Màu nền của tab bar
          },
          headerStyle: {
            backgroundColor: '#009933', // Màu nền của header
          },
          headerTintColor: '#ffffff', // Màu chữ của header
        })}
      >
        {/* Thay đổi tên màn hình và cập nhật biểu tượng */}
        <Tab.Screen
          name="Danh mục"
          component={DrawerNavigator}
          options={{ tabBarLabel: 'Danh mục' }} // Tên hiển thị trên tab
        />
        <Tab.Screen
          name="Yêu thích"
          component={FavouritesScreen}
        />
        <Tab.Screen
          name="Cài đặt"
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
