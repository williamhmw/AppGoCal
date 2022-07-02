import React, {useState} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function Home() {
  const navigation = useNavigation()
  const [nameUser, setNameUser] = useState()

  function openData(){
    if(nameUser === ""){
      Alert.alert("Nome não foi preenchido", "Por favor, inserir o seu nome no campo indicado.")
    }else{
      navigation.navigate('Data', {nameUser});
    }
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
                Para começar como podemos te chamar?
        </Text>
        <TextInput
            style={styles.input}
            placeholder="Digite o seu nome"
            onChangeText={setNameUser}
            value={nameUser}
        />
        <TouchableOpacity 
            style={styles.buttonAvancar}
            onPress={openData}
        >
            <Text style={styles.buttonsText}>Avançar</Text>
        </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#DCDCE5',
        paddingVertical:70,
        paddingHorizontal:20,
    },
    title:{
        fontFamily: 'Poppins',
        fontSize: 18,
        color: '#2C2C2C',
        fontWeight: 'bold',
    },
    input:{
        fontFamily: 'Poppins',
        fontSize: 14,
        color: '#969CB3',
        backgroundColor: 'white',
        textAlign: 'left',
        paddingHorizontal:20,
        paddingVertical:18,
        height: 56,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 10
    },
    buttonAvancar:{
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#37B874',
        paddingVertical: 18
    },
    buttonsText:{
        fontFamily: 'Poppins',
        fontSize: 14,
        color: 'white',
        fontWeight: 'bold'
    }
})
