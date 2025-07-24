import { StyleSheet, Text, View } from 'react-native'

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.tabName}>Explore</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  tabName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
})
