import { Text,ScrollView, SafeAreaView, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView>
      <Text style={styles.paragraph}>
      Naalala ko pa
          No'ng nililigawan pa lamang kita
          Dadalaw tuwing gabi
          Masilayan lamang ang 'yong mga ngiti
          At Ika'y sasabihan
          Bukas ng alas-siyete sa dating tagpuan
          Buo ang araw ko
          Marinig ko lang ang mga himig mo
          Hindi ko man alam kung nasa'n ka
          Wala man tayong komunikasyon
          Maghihintay sa 'yo buong magdamag
          Dahil ikaw ang buhay ko
          Kung inaakala mo
          Na'ng pag-ibig ko'y magbabago
          Itaga mo sa bato
          Dumaan man ang maraming Pasko
          Kahit na 'di mo na abot ang sahig
          Kahit na 'di mo na 'ko marinig
          Ikaw pa rin ang buhay ko
          Ooh, whoa
          Naalala ko pa
          No'ng pinapangarap pa lamang kita
          'Hahatid, susunduin
          Kahit mga bituin, aking susungkitin
          Kung inaakala mo
          Na'ng pag-ibig ko'y magbabago
          Itaga mo sa bato
          dumaan man ang maraming Pasko
          Kahit na 'di mo na abot ang sahig
          Kahit na 'di mo na 'ko marinig
          Ikaw pa rin
          Araw-araw kitang liligawan
          Haharanahin ka
          Lagi kItang liligawan
          Haharanahin ka lagi
          Kung inaakala mo
          Na'ng pag-ibig ko'y magbabago
          Itaga mo sa bato
          Pumuti man ang mga buhok ko
          Kung inaakala mo
          Na'ng pag-ibig ko'y magbabago
          Itaga mo sa bato
          Dumaan man ang maraming Pasko
          Kung inaakala mo
          Na'ng pag-ibig ko'y magbabago
          Itaga mo sa bato
          Dumaan man ang maraming Pasko
          Kahit na kumulubot ang balat
          Kahit na hirap ka nang dumilat
          Kahit na 'di mo na abot ang sahig
          Kahit na 'di mo na 'ko marinig
          Ikaw pa rin (ikaw pa rin)
          Ang buhay ko
      </Text>
     </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
