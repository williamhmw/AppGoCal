import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import  { Picker }  from  '@react-native-picker/picker' ;

export function Data() {
    const route = useRoute();
    const { nameUser } = route.params;

    const navigation = useNavigation();

    const [age, setAge] = useState();
    const [weight, setWeight] = useState();
    const [height, setHeight] = useState();
    const [selectedGender, setSelectedGender] = useState();
    const [selectePhysicalActivity, setSelectedPhysicalActivity] = useState();
    const [calculateTbm, setCalculateTbm] = useState();
    const [calculateNdc, setCalculateNdc] = useState();


    const calcMasculine = 655 + (9.6  * weight) + (1.7 * height) - (4.7 *age);
    const calcFeminine = 66 + (13.7 * weight) + (5 * height) - (6.8 * age);

    function calculateBasalCalories(){
      if(selectedGender === 'feminine'){
        setCalculateTbm(calcFeminine);
          switch(selectePhysicalActivity){
            case 'noPhysicalActivity':
              const resultNoActivity = calcFeminine + (calcFeminine*0.20);
              console.log('Feminino');
              setCalculateNdc(resultNoActivity);
              break;
            case 'moderatePhysicalActivity':
              const resultModerateActivity = calcFeminine + (calcFeminine*0.30);
              console.log('Feminino');
              setCalculateNdc(resultModerateActivity);
              break;
            case 'intensePhysicalActivity':
              const resultIntenseActivity = calcFeminine + (calcFeminine*0.40);
              console.log('Feminino');
              setCalculateNdc(resultIntenseActivity);
              break;
          }
      }else{
        setCalculateTbm(calcMasculine);
        switch(selectePhysicalActivity){
          case 'noPhysicalActivity':
            const resultNoActivity = calcMasculine + (calcMasculine*0.25);
            console.log('Feminino');
            setCalculateNdc(resultNoActivity);
            break;
          case 'moderatePhysicalActivity':
            const resultModerateActivity = calcMasculine + (calcMasculine*0.35);
            console.log('Feminino');
            setCalculateNdc(resultModerateActivity);
            break;
          case 'intensePhysicalActivity':
            const resultIntenseActivity = calcMasculine + (calcMasculine*0.45);
            console.log('Feminino');
            setCalculateNdc(resultIntenseActivity);
            break;
        }
      }  
    }

    function openResult(){
        calculateBasalCalories()
        navigation.navigate('Result', {calculateNdc}, {calculateTbm} );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleSecondScreen}>
                Ol??,
            </Text>
            <Text style={styles.titleSecondScreenColor}>
                {nameUser}
            </Text>
            <Text style={styles.title}>
                Vamos calcular o seu gasto energ??tico basal!
            </Text>
            <Picker
            style={styles.picker}
            selectedValue={selectedGender}
            mode='dropdown'
            onValueChange={(itemValue, itemIndex) =>
                setSelectedGender(itemValue)
            }>
                <Picker.Item label="Feminino" value="feminine"/>
                <Picker.Item label="Masculino" value="masculine"/>
            </Picker>
            <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder="Sua idade"
            onChangeText={setAge}
            />
            <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder="Seu peso (em gramas)"
            onChangeText={setWeight}
            />
            <TextInput
            style={styles.input}
            keyboardType='numeric'
            placeholder="Sua altura (em cent??metros"
            onChangeText={setHeight}
            />
            <Picker
            style={styles.picker}
            selectedValue={selectePhysicalActivity}
            mode='dropdown'
            onValueChange={(itemValue, itemIndex) =>
                setSelectedPhysicalActivity(itemValue)
            }>
                <Picker.Item label="Nenhuma atividade f??sica" value="noPhysicalActivity" />
                <Picker.Item label="Atividade f??sica moderada" value="moderatePhysicalActivity" />
                <Picker.Item label="Atividade f??sica intensa" value="intensePhysicalActivity" />
            </Picker>
            <TouchableOpacity 
            style={styles.buttonAvancar}
            onPress={openResult}
            >
                <Text style={styles.buttonsText}>Calcular</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.buttonVoltar}
            onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonsTextGreen}>Voltar</Text>
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
      titleSecondScreen:{
        fontFamily: 'Poppins',
        fontSize: 34,
        color: '#2C2C2C',
        fontWeight: 'bold'
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
        textAlign: 'left',
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
        paddingVertical: 18,
        marginTop: 10
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
  