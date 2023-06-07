import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import FormField from '..//components/FormField';
import {useState} from "react"

const RegisterForm = () => {


    const formData = (values) => {

        const [formValues, setFormValues] = useState({
          ...values
        });
      
        const handleFormValueChange = (key, value) => {
          setFormValues(
            {
              ...formValues,
              [key]: value
            }
          );
        };
      
        return [
          formValues,
          handleFormValueChange,
          setFormValues,
        ]
      };


    const [formValues, handleFormValueChange, setFormValues] = formData({
      username: 'username',
      email: 'email',
      newTextInput: 'newText',
      password: 'password'
    })


    return (
      <View style={styles.container}>
        <Text style={{
          fontSize: 24,
          textAlign: 'center',
          fontWeight: "300",
          paddingBottom: 30
        }}>Hellooww !!</Text>

        <FormField
          label='Username'
          formKey='username'
          placeholder='Your username'
  
          handleFormValueChange={handleFormValueChange}
        />
        <FormField
          label='Email'
          formKey='email'
          placeholder='Your email id'
          textInputProps={{
            autoCapitalize: "none"
          }}
          handleFormValueChange={handleFormValueChange}
        />

        <FormField
          label='New Text Input'
          formKey='newTextInput'
          placeholder='Your new text'
          textInputProps={{
            autoCapitalize: "none"
          }}
          handleFormValueChange={handleFormValueChange}
        />

        <FormField
          label='Password'
          formKey='password'
          placeholder='Your password'
          textInputProps={{
            autoCapitalize: "none"
          }}
          handleFormValueChange={handleFormValueChange}
        />

        <Text style={styles.header}>Values in Hook: </Text>
        <View>
          <Text style={styles.formText}>Username is : {formValues.username}</Text>
          <Text style={styles.formText}>Email is: {formValues.email}</Text>
          <Text style={styles.formText}>NewText input is: {formValues.newTextInput}</Text>         
          <Text style={styles.formText}>Password is: {formValues.password}</Text>
        </View>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      margin: 20,
    },
    header: {
      fontSize: 20,
      paddingTop: 30
    },
    formText: {
      fontSize: 20,
      padding: 10,
      paddingLeft: 0
    },
    formFieldWrapper: {
    },
    formFieldText: {
      fontSize: 20,
      borderRadius: 15,
      borderWidth: 1,
      padding: 12
    },
    labelText: {
      fontSize: 20,
      marginBottom: 12,
      paddingLeft: 10,
      paddingTop: 10
    }
  })
  
  export default RegisterForm;