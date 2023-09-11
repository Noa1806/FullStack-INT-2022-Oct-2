import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
        <Image
        style={styles.image}
        source={require('./assets/Noa-img.png')}
      />
      <Text style={styles.text}>Hi, welcome to my app ❤️ {"\n"}
       My name is Noa🌻 {"\n"}
       I'm a Junior FullStack developper💻
       </Text>
      <StatusBar style="auto" />
      </View> 
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F0E5',
    alignItems: 'center',
    justifyContent: 'center',
    display:'flex',
    flexDirection:'row',
  },
  text:{
    color:"#0F2C59",
    fontWeight:"bold",
    fontSize:18,
  },
  image: {
    marginRight:10,
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
