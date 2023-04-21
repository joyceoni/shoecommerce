import { StyleSheet, View,FlatList,Image,Text, useWindowDimensions, ScrollView } from "react-native";
import products from "../data/products";

const ProductDetailScreen = () => {
  const product = products[0];
  const { width } = useWindowDimensions(); 
  return (
    <View>
      <ScrollView>
   <FlatList
   data={product.images}
   renderItem={({item})=>(
  <Image style={{width:width, aspectRatio:1,}}

  source={{uri:item}}
  />

   )}
   horizontal
   showsHorizontalScrollIndicator={true}
   pagingEnabled
   
   />
  <View>
  <View style={{ padding: 20 }}>
 
  <Text style={styles.title}>{product.name}</Text>

 
  <Text style={styles.price}>${product.price}</Text>

  <Text style={styles.description}>{product.description}</Text>
</View>
  </View>
  </ScrollView>

      {/* Add to cart button */}

      {/* Navigation icon */}
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 34,
      fontWeight: "500",
      marginVertical: 10,
    },
    price: {
      fontWeight: "500",
      fontSize: 16,
    },
    description: {
      marginVertical: 10,
      fontSize: 18,
      lineHeight: 30,
      fontWeight: "300",
    },
  });
  

export default ProductDetailScreen;