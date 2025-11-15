// screens/ProfileScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ProfileScreen() {
  const user = {
    name: 'Rizky Ananda Ramadhan',
    email: '23081010088@student.upnjatim.ac.id',
    phone: '+62 815-1526-0360',
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatarPlaceholder}>
          <Ionicons name="person" size={50} color="#FFF" />
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      <View style={styles.menuSection}>
        <MenuItem icon="person-outline" title="Edit Profil" />
        <MenuItem icon="shield-checkmark" title="Keamanan Akun" />
        <MenuItem icon="card" title="Metode Pembayaran" />
        <MenuItem icon="pricetag" title="Kupon & Promo" />
        <MenuItem icon="star" title="Beri Rating Aplikasi" />
        <MenuItem icon="help-circle" title="Pusat Bantuan" />
        <MenuItem icon="log-out" title="Keluar" color="#FF6B6B" />
      </View>
    </ScrollView>
  );
}

const MenuItem = ({ icon, title, color }) => (
  <TouchableOpacity style={styles.menuItem}>
    <Ionicons name={icon} size={24} color={color || '#2D3436'} style={styles.menuIcon} />
    <Text style={[styles.menuText, { color: color || '#2D3436' }]}>{title}</Text>
    <Ionicons name="chevron-forward" size={20} color="#B2BEC3" />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  header: { alignItems: 'center', paddingVertical: 30, backgroundColor: '#FFF', borderBottomLeftRadius: 30, borderBottomRightRadius: 30, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 10, elevation: 8 },
  avatarPlaceholder: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#00A878', justifyContent: 'center', alignItems: 'center', marginBottom: 12 },
  name: { fontSize: 24, fontWeight: 'bold', color: '#2D3436' },
  email: { fontSize: 16, color: '#636E72', marginTop: 4 },
  menuSection: { marginTop: 20, paddingHorizontal: 20 },
  menuItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', padding: 16, borderRadius: 12, marginBottom: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 5, elevation: 3 },
  menuIcon: { marginRight: 16 },
  menuText: { flex: 1, fontSize: 16, fontWeight: '600' },
});