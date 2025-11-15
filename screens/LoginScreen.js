// screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />

      <TouchableOpacity style={styles.button} onPress={() => navigation.replace('MainMenu')}>
        <Text style={styles.buttonText}>Masuk</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Belum punya akun? Daftar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFF', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#2D3436', marginBottom: 40 },
  input: { borderWidth: 1, borderColor: '#DDD', borderRadius: 10, width: '80%', padding: 15, marginVertical: 8 },
  button: { backgroundColor: '#00A878', padding: 15, borderRadius: 10, width: '80%', alignItems: 'center', marginTop: 20 },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 },
  link: { marginTop: 15, color: '#00A878', fontWeight: '600' },
});