import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TabBar} from 'rn-tvos-tab-bar/components/TabBar';

function App(): JSX.Element {
  const currentIndex = React.useRef(1);
  const [items, setItems] = React.useState(['Item 1']);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <View style={styles.container}>
      <TabBar
        items={items}
        selectedItem={selectedIndex}
        style={styles.tabBar}
        onSelectItem={({index}) => {
          setSelectedIndex(index);
        }}
      />
      <Button
        onPress={() => {
          setItems(_items => [..._items, `Item ${++currentIndex.current}`]);
        }}
        title="Add an item"
      />
      <Text style={styles.text}>Selected item: {items[selectedIndex]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 50,
  },
  tabBar: {
    width: '100%',
    height: 70,
    marginTop: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default App;
