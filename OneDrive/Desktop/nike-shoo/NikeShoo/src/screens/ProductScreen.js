
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,FlatList, ScrollView } from 'react-native';
import products from '../data/products';

const ProductScreen=()=>{

return(

<FlatList
   data={products}
   renderItem={({item})=>
   (
    <View style={styles.itemContainer}>
    <Image style={styles.image}
    source={{uri: item.image}} />
    </View>
   )}   numColumns={2} />

) 



}
 



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      width:"100%",
      aspectRatio:1,
    },
    itemContainer:{
      width:"50%",
      padding:1,
    }
  });
  

export default ProductScreen;