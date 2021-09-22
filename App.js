import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { uuid } from 'uuidv4'
import AddItem from './AddItem';
import Header from './Header'
import ListItem from './ListItem';

export default function App() {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Bread' },
    { id: uuid(), text: 'Juice' },

  ])

  const deleteItem = (id) =>{
    setItems(prevItems=>{
      return prevItems.filter(item=>item.id != id)
    })
  }

  const addItem = text =>{
    setItems(prevItems=>{
      return [{id:uuid(),text}, ...prevItems]
    })
  }

  return (
    <>
      <View style={styles.container}>
        <Header />
        <AddItem addItem={addItem} />
        <FlatList
          data={items}
          renderItem={({ item }) => {
            return <ListItem item={item} deleteItem={deleteItem}/>
          }} />

      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text:{
    color:"black"
  }
});
