import { StyleSheet, Text, View, TextInput, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons'; 

export default function App() {
  const [inputText, setInputText] = useState(''); 
  const [itemList, setItemList] = useState([]); 
  const handleAddItem = () => {
    if (inputText.trim() !== '') {
      setItemList([...itemList, inputText]); 
      setInputText(''); 
    }
  };

  const handleRemoveItem = (index) => {
    // Crea una nueva lista sin el elemento en el índice dado
    const updatedItemList = [...itemList];
    updatedItemList.splice(index, 1);
    setItemList(updatedItemList);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="bars" size={24} color="black" />
        <Text style={styles.headerText}>Listado de compras</Text>
      </View>
      <View style={styles.botoncontenedor} >
        <TextInput
          style={styles.input}
          placeholder='escriba aquí...'
          value={inputText}
          onChangeText={text => setInputText(text)} 
        />
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? 'yellow' : 'transparent',
              borderRadius: 5,
            },
            styles.boton
          ]}
          onPress={handleAddItem} 
        >
          <Text></Text>
          <AntDesign name="pluscircleo" size={40} color="red" />
        </Pressable>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {itemList.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? 'red' : 'transparent',
                  borderRadius: 6,
                  marginLeft: 100,
                },
                styles.deleteButton
              ]}
              onPress={() => handleRemoveItem(index)}
            >
              <AntDesign name="delete" size={24} color="white" />
            </Pressable>
          </View>
        ))}
      </ScrollView>
      <View style={styles.texto2Container}>
        <Text style={styles.texto2}>Gonzalo Miranda</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: 'center',
    flex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  headerText: {
    fontSize: 35,
    color: "black",
    marginLeft: 10,
  },

  texto2Container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    paddingVertical: 10,
    alignItems: 'center',
  },

  texto2:{
    fontSize: 15,
    color: "black",
    borderBottomColor: "blue",
  },  
  
  input: {
    color: "red",
    padding: 10,
    fontSize: 25,
    width: 250,
    borderColor: "black",
    borderWidth: 1,
    marginTop: 10,
  },

  botoncontenedor: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", 
    width: '70%', 
  },

  boton: {
    marginLeft: 5,
  },

  scrollContainer: {
    maxHeight: '70%', 
  },

  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 1,
    paddingHorizontal: 1, 
  },

  itemText: {
    fontSize: 20, 
    marginRight: 10,
  },

  deleteButton: {
    backgroundColor: 'red',
    padding: 6,
    borderRadius: 20,
  },
});