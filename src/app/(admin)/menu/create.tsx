import { View, Text, StyleSheet, TextInput } from 'react-native'

const CreateProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput placeholder='Name' style={styles.input} />
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

    },
    label: {

    },
});

export default CreateProductScreen;