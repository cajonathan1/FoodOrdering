import { View, Text, StyleSheet, TextInput } from 'react-native'

const CreateProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput placeholder='Name' style={styles.input} />

      <Text style={styles.label}>Price ($)</Text>
      <TextInput placeholder='9.99' style={styles.input} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 20,
    },
    label: {
        color: 'gray',
        fontSize: 16,
    },
});

export default CreateProductScreen;