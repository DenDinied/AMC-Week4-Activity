import React from 'react';
import {View, ScrollView, FlatList, StyleSheet, Text, StatusBar} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: '1',
    title: 'Exercise',
  },
  {
    id: '2',
    title: 'Bath',
  },
  {
    id: '3',
    title: 'Breakfast',
  },
  {
    id: '4',
    title: 'Taking Meds',
  },
  {
    id: '5',
    title: 'Preparing Clothes',
  },

  {
    id: '6',
    title: 'Ironing the clothes',
  },
  {
    id: '7',
    title: 'Checking Bag',
  },
  {
    id: '8',
    title: 'Computing Finances for the day',
  },
  {
    id: '9',
    title: 'Thinking about life',
  },
  {
    id: '10',
    title: 'Ready to go out',
  },
  
];

const DATA_one = [
  {
    id: '11',
    title: 'Lunch',
  },
  {
    id: '12',
    title: 'Taking Meds',
  },
  {
    id: '13',
    title: 'Reading blogs',
  },
  {
    id: '14',
    title: 'Watching Blogs',
  },
  {
    id: '15',
    title: 'Checking Units in Computer Shop',
  },

  {
    id: '16',
    title: 'Fixing Units',
  },
  {
    id: '17',
    title: 'Checking Finance',
  },
  {
    id: '18',
    title: 'Maintenance Printer',
  },
  {
    id: '19',
    title: 'Updating Games',
  },
  {
    id: '20',
    title: 'Updating Documents',
  },
  
];

const DATA_two = [
  {
    id: '21',
    title: 'Dinner',
  },
  {
    id: '22',
    title: 'Bath',
  },
  {
    id: '23',
    title: 'Reading blogs',
  },
  {
    id: '24',
    title: 'Watching Tiktok',
  },
  {
    id: '25',
    title: 'Prayer',
  },
]

const Item = ({title}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <Text style={styles.header}>Morning Routine</Text>

      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

      <Text style={styles.header}>Afternoon Routine</Text>

      <FlatList
        data={DATA_one}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

      <Text style={styles.header}>Evening Routine</Text>

      <FlatList
        data={DATA_two}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

    </ScrollView>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: 
  {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: 
  {
    backgroundColor: '#add8e6',
    padding: 15,
    marginVertical: 9,
    marginHorizontal: 18,
  },
  title: 
    {
    fontSize: 15,
   },

  header:
  {
       
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },

});

export default App;