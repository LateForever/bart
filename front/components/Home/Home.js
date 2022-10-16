import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Header from "../Header/Header";

export default function Home({ navigation }) {

    function pressHandler() {
        navigation.navigate('SignIn')
    }

  return (
    <View>
        <View style={styles.container}>
            <View style={styles.upcontainer}>
                <Text style={styles.title}>Otwórz konto zgarnij do 450zł</Text>
                <Text style={styles.text}>i oszczędzaj nawet na 8%!</Text>
                <Text style={styles.smallText}>Do konta mamy dla Ciebie jeszcze:</Text>
                <Text style={styles.smallText}>dodatkową eKartę do zakupów w internecie</Text>
                <Text style={styles.smallText}>premię za polecenie konta znajomym</Text>
            </View>
            <Image style={styles.image} source={{uri: "https://www.mbank.pl/grafiki/ilustracje/indywidualny/retail_card_zero_cost-1.svg??__scale=h:74,w:200"}}/>
            <Text style={styles.dontHaveAccount}>Nie masz konta ?</Text>
        </View>
        <View style={styles.buttonContainer}>
            <Button title='Załóż konto' color='#ae0000' onPress={pressHandler}></Button>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:  {
        margin: 30,
        padding: 20,
        height: 500,
        width: "85%",
        backgroundColor: "#f5f5f5"
    },
    upcontainer: {
        width: "100%",
        height: 100,
    },
    image: {

        margin: 35,
        marginTop: 100,
        width: 200,
        height: 200,
        resizeMode : "cover"
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
    },
    text: {
        fontSize: 20,
    },
    smallText: {
        marginTop: 10,
        fontSize: 15,
    },
    buttonContainer: {
        height: 80,
        width: "85%",
        marginLeft: 30,
    },
    dontHaveAccount: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 60,
    }
});
