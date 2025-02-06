import { Text, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        <Text style={styles.fname}>Miguel</Text>
        <Text style={styles.lname}> Isidro V </Text>
     
      </Text>
      

     
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: 
  {
    flex: 10,
    justifyContent: 'center',
    backgroundColor: '#CAF0F8',
    borderColor: 'red'
    
    
  },
  paragraph: 
  {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    
  },

  fname:
  {
    fontWeight: 'bold',
  },

  lname:
  {
    fontstyle: 'italic',
  },
  


});
