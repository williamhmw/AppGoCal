import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

export function Data() {
    return (
      <View style={styles.container}>
          <Text style={styles.title}>
                  Para começar como podemos te chamar?
          </Text>
          <TextInput
              style={styles.input}
              placeholder="Digite o seu nome"
          />
          <TouchableOpacity style={styles.buttonAvancar}>
              <Text style={styles.buttonsText}>Outra tela</Text>
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
  