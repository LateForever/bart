import { StyleSheet, Text, View, Image, Button, TouchableHighlight } from 'react-native';

export default function Home({ navigation }) {

    function pressHandler() {
        navigation.navigate('Login')
    }

    function homePressHandler() {
        navigation.navigate('Home')
    }

  return (
    <View style={styles.container}>
        <TouchableHighlight onPress={homePressHandler}>
        <Image style={styles.image} source={{uri: "https://www.mbank.pl/mbank-news/materialy/nowe-logo-mbank.jpg"}}/>
        </TouchableHighlight>
        <View style={styles.buttonContainer}>
        <Image style={styles.buttonImage} source={{uri: "https://cdn-icons-png.flaticon.com/512/197/197572.png"}}/>
        <Button onPress={pressHandler} title='Zaloguj' color={'#ae0000'}></Button>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        width: "100%",
        borderBottomColor: "gray",
        borderBottomWidth: 1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    image: {
        marginLeft: 20,
        width: 150,
        height: 50,
        resizeMode : "cover"
    },
    buttonImage:  {
        marginTop: 2,
        width: 30,
        height: 30,
        marginRight: 10,
    },
    buttonContainer: {
        marginLeft: 85,
        flexDirection: 'row',
    }
})
