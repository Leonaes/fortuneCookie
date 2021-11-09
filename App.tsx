import React, { useState } from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";

function App() {

  const [textPhrase, setTextPhrase] = useState("Siga os bons e aprenda com eles");
  const [switchImg, setSwitchImg] = useState("./src/biscoito.png");

  const phrases = [
    "Siga os bons e aprenda com eles.",
    "O bom-senso vale mais do que muito conhecimento.",
    "O riso é a menor distancia entre duas pessoas.",
    "Deixe de lado preocupaçoes e seja feliz.",
    "Realize o obvio, pense no improvável e conquiste o impossivel.",
    "Acredite em milagres, mas não dependa deles.",
    "A maior barreira para o sucesso é o medo do fracasso."
  ];

  function cookieBreak(){
    let randomNumber = Math.floor(Math.random() * phrases.length);

    setTextPhrase(phrases[randomNumber])

    setSwitchImg

  }

  return(
    <View style={styles.container}>

      <Image
        source={require("./src/biscoito.png")}
        style={styles.img}
      />

      <Text style={styles.textPhrase}>{textPhrase}</Text>

      <TouchableOpacity style={styles.button} onPress={cookieBreak}>
        <View style={styles.buttonArea}>
          <Text style={styles.buttonText}>Abrir Biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  )
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width: 250,
    height: 250,
  },
  textPhrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center',
  },
  button:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,
  },
  buttonArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  },
});

export default App;
