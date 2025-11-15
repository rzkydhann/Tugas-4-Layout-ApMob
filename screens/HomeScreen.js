// screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const itemWidth = (width - 60) / 3; // 3 kolom, margin 8 di kiri-kanan

const services = [
  { id: '1', name: 'URide', icon: 'bicycle' },
  { id: '2', name: 'UCar', icon: 'car' },
  { id: '3', name: 'UFood', icon: 'fast-food' },
  { id: '4', name: 'USend', icon: 'send' },
  { id: '5', name: 'UMart', icon: 'cart' },
  { id: '6', name: 'UPulsa', icon: 'phone-portrait' },
];

export default function HomeScreen() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <Ionicons name={item.icon} size={32} color="#FFF" />
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Selamat Datang di Ujek</Text>
      <FlatList
        data={services}
        numColumns={3}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.row} // Tambahkan ini!
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3436',
    marginBottom: 20,
    textAlign: 'center',
  },
  list: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between', // Penting untuk 3 kolom rata
  },
  card: {
    width: itemWidth,
    backgroundColor: '#00A878',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
    marginTop: 8,
    textAlign: 'center',
  },
});