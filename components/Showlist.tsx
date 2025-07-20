import { Text, TouchableOpacity,StyleSheet, View } from "react-native";


export default function Showlist(){
return(
  <View style={styles.containerShowlist}>
    <TouchableOpacity style={styles.btn}>
      <Text>TV shows</Text>
    </TouchableOpacity>
   <TouchableOpacity style={styles.btn}>
      <Text>Movies</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.btn}>
      <Text>TV shows</Text>
    </TouchableOpacity>
  </View>
  
)
}
const styles = StyleSheet.create({
  containerShowlist: {
    display: 'flex',
    flexDirection: 'row',
    columnGap: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  btn:{
   boxSizing: 'border-box',
  backgroundColor: '#fff',
  padding: 10,
  borderRadius: 20,
  borderWidth: 1,
  borderColor: '#ddd',
  width: '30%',
  alignItems: 'center',
  justifyContent: 'center',
  }
});