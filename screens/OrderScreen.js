
// screens/OrderScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const orders = [
  { id: '1', type: 'UCar', from: 'Jl. Sudirman', to: 'Bandara Soetta', status: 'Selesai', price: 'Rp 85.000', date: '14 Nov 2025', icon: 'car' },
  { id: '2', type: 'UFood', restaurant: 'Warung Makan Bu Siti', items: 'Nasi Goreng + Es Teh', status: 'Dalam Perjalanan', price: 'Rp 35.000', date: '15 Nov 2025', icon: 'fast-food' },
  { id: '3', type: 'USend', from: 'Rumah', to: 'Kantor Pacar', status: 'Menunggu Driver', price: 'Rp 25.000', date: '15 Nov 2025', icon: 'send' },
];

export default function OrderScreen() {
  const renderOrder = ({ item }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.header}>
        <View style={[styles.tag, { backgroundColor: getTagColor(item.type) }]}>
          <Ionicons name={item.icon} size={18} color="#FFF" />
          <Text style={styles.tagText}>{item.type}</Text>
        </View>
        <Text style={styles.status}>{item.status}</Text>
      </View>

      <View style={styles.details}>
        {item.type === 'UCar' && (
          <>
            <Text style={styles.route}>From: {item.from}</Text>
            <Text style={styles.route}>To: {item.to}</Text>
          </>
        )}
        {item.type === 'UFood' && (
          <>
            <Text style={styles.bold}>Restaurant: {item.restaurant}</Text>
            <Text style={styles.item}>{item.items}</Text>
          </>
        )}
        {item.type === 'USend' && (
          <Text style={styles.route}>Package: {item.from} to {item.to}</Text>
        )}
      </View>

      <View style={styles.footer}>
        <Text style={styles.price}>{item.price}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Riwayat Pesanan</Text>
      <FlatList
        data={orders}
        renderItem={renderOrder}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const getTagColor = (type) => {
  switch (type) {
    case 'UCar': return '#FF6B6B';
    case 'UFood': return '#4ECDC4';
    case 'USend': return '#45B7D1';
    default: return '#999';
  }
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA', paddingTop: 50, paddingHorizontal: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#2D3436', marginBottom: 20 },
  list: { paddingBottom: 20 },
  card: { backgroundColor: '#FFF', borderRadius: 16, padding: 16, marginBottom: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 8, elevation: 5 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  tag: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 20, gap: 6 },
  tagText: { color: '#FFF', fontWeight: 'bold', fontSize: 12 },
  status: { fontSize: 14, fontWeight: '600', color: '#2D3436' },
  details: { marginVertical: 8 },
  route: { fontSize: 15, color: '#2D3436' },
  bold: { fontSize: 15, fontWeight: 'bold', color: '#2D3436' },
  item: { fontSize: 14, color: '#636E72' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 8 },
  price: { fontSize: 16, fontWeight: 'bold', color: '#00A878' },
  date: { fontSize: 14, color: '#95A5A6' },
});