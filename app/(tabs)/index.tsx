import Showlist from '@/components/Showlist';
import { StyleSheet, Text,  View } from 'react-native';

export default function Index() {
  return(
    <>
    <Showlist/>
    <View style={styles.container}>
      <Text className="text-2xl font-bold">Home</Text>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
 
}});



