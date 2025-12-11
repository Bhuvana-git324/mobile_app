import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://<EC2-PUBLIC-IP>/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mobile App Product List</Text>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 30 },
  title: { fontSize: 26, fontWeight: "bold" },
  item: { fontSize: 20, margin: 10 }
});
