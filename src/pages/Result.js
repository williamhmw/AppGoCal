import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export function Result (){
    const route = useRoute();
    const { tmb } = route.params;

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.titleSecondScreen}>
                Aqui está o seu
                {"\n"}
                <Text style={styles.titleSecondScreenColor}>
                    resultado
                </Text>
            </Text>
            <Text style={styles.titleNoBold}>
                Seu <Text style={styles.title}>metabolismo basal</Text> é de: 
                {"\n"}
                <Text style={styles.titleColorGreen}>1606 calorias.{tmb}</Text>
            </Text>
            <Text style={styles.titleNoBold}>
                Para <Text style={styles.title}>manter o seu peso</Text> você precisa consumir em média: 
                {"\n"}
                <Text style={styles.titleColorGreen}>1928 calorias.</Text>
            </Text>
            <Text style={styles.titleNoBold}>
                Para <Text style={styles.title}>perder peso</Text> você precisa sonsumir em média: 
                {"\n"}
                <Text style={styles.titleColorGreen}>1638 calorias.</Text>
            </Text>
            <Text style={styles.titleNoBold}>
                Para <Text style={styles.title}>ganhar peso</Text> você precisa consumir em média: 
                {"\n"}
                <Text style={styles.titleColorGreen}>1638 calorias.</Text>
            </Text>
            <TouchableOpacity 
            style={styles.buttonAvancar}
            onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonsText}>Reiniciar</Text>
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
  picker:{
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#969CB3',
    backgroundColor: 'white',
    height: 56,
    borderRadius: 8,
    marginBottom: 10
  },
  title:{
    fontFamily: 'Poppins',
    fontSize: 18,
    color: '#2C2C2C',
    fontWeight: 'bold',
    paddingTop: 45,
    paddingBottom: 20
  },
  titleNoBold:{
    fontFamily: 'Poppins',
    fontSize: 18,
    color: '#2C2C2C',
    fontWeight: 'normal',
    paddingBottom: 30
  },
  titleColorGreen:{
    fontFamily: 'Poppins',
    fontSize: 18,
    color: '#37B874',
    fontWeight: 'bold',
    paddingTop: 45,
    paddingBottom: 20
  },
  titleSecondScreen:{
    fontFamily: 'Poppins',
    fontSize: 34,
    color: '#2C2C2C',
    fontWeight: 'bold',
    paddingBottom: 40
  },
  titleSecondScreenColor:{
    fontFamily: 'Poppins',
    fontSize: 34,
    fontWeight: 'bold',
    color:'#37B874'
  },
  input:{
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#969CB3',
    backgroundColor: 'white',
    paddingHorizontal:20,
    paddingVertical:18,
    height: 56,
    borderRadius: 8,
    marginBottom: 10
  },
  buttonAvancar:{
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#37B874',
    paddingVertical: 18
  },
  buttonVoltar:{
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#F3F3F3',
    paddingVertical: 18
  },
  buttonsText:{
    fontFamily: 'Poppins',
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold'
  },
  buttonsTextGreen:{
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#37B874',
    fontWeight: 'bold'
  }
})
