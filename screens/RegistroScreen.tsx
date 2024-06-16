import { Button, StyleSheet, Text, TextInput, View, Image, Alert } from 'react-native'
import React, { useState } from 'react'

import { getDatabase, ref, set } from "firebase/database";
import { db } from '../config/Config';

export default function RegistroScreen() {

  const [nick, setNick] = useState('')
  const [correo, setCorreo] = useState('')
  const [pass, setPass] = useState('')
  const [edad, setEdad] = useState('')

  function guardar(nick: string, correo: string, password: string, edad: string) {
    //const db = getDatabase();
    set(ref(db, 'usuarios/' + nick), {
      nick: nick,
      edad: edad,
      correo: correo,
      pass: password
    });

    Alert.alert("Mensaje", "Registro Exitoso")
    limpiar()
  }

  function limpiar(){
    setNick('')
    setCorreo('')
    setPass('')
    setEdad('')
  }


  return (
    <View style={styles.container}>

      <Image 
      source ={{uri: "https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png"}}
      style={styles.img}
      />

      <Text style={{fontSize:30, color:'black', marginBottom:20}}>REGISTRO</Text>
      <TextInput
      placeholder='Ingrese su Nick'
      style={styles.input}
      placeholderTextColor={'ffe'}
      onChangeText={ (texto) => setNick(texto)}
      value={nick}
      />
      
      <TextInput
      placeholder='Ingrese su Correo'
      style={styles.input}
      placeholderTextColor={'ffe'}
      keyboardType='email-address'
      onChangeText={ (texto) => setCorreo(texto)}
      value={correo}
      />

      <TextInput
      placeholder='Ingrese su Password'
      style={styles.input}
      placeholderTextColor={'ffe'}
      secureTextEntry
      onChangeText={ (texto) => setPass(texto)}
      value={pass}
      />

      <TextInput
      placeholder='Ingrese su Edad'
      style={styles.input}
      placeholderTextColor={'ffe'}
      keyboardType='numeric'
      onChangeText={ (texto) => setEdad(texto)}
      value={edad}
      />

      <Button 
        title='Guardar'
        onPress={()=> guardar(nick, correo, pass, edad)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#99badd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    fontSize: 20,
    width: '70%',
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderColor: '#333333',
    backgroundColor: '#3cadd4',
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 45,
  },
  img: {
    width: 100,
    height: 100,
  }
});