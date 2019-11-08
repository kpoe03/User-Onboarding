import React from 'react';
import {
  SafeAreaView,
  TextInput,
  Button,
  ActivityIndicator,
  Text,
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required()
    .label('Name'),
    
  email: yup
    .string()
    .required()
    .label('Email'),

  password: yup
    .string()
    .required()
    .label('Password'),

});

export default () => (
  <SafeAreaView style={{ marginTop: 90 }}>
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={(values, actions) => {
        alert(JSON.stringify(values));
        setTimeout(() => {
          actions.setSubmitting(false);
        }, 1000);
      }}
      validationSchema={validationSchema}
    >
      {formikProps => (
        <React.Fragment>
          <TextInput
            style={{
              marginLeft: 1100,
              marginRight: 1100,
              borderWidth: 1,
              borderColor: 'black',
              padding: 10,
              marginBottom: 3,
            }}
            onChangeText={formikProps.handleChange('name')}
          />
          <TextInput
            style={{
              marginLeft: 1100,
              marginRight: 1100,
              borderWidth: 1,
              borderColor: 'black',
              padding: 10,
              marginBottom: 3,
            }}
            onChangeText={formikProps.handleChange('email')}
          />
          <TextInput
            style={{
              marginLeft: 1100,
              marginRight: 1100,
              borderWidth: 1,
              borderColor: 'black',
              padding: 10,
              marginBottom: 3,
            }}
            onChangeText={formikProps.handleChange('password')}
          />
          <Text style={{ marginLeft: 1100, marginRight: 1100, color: 'red' }}>{formikProps.errors.name}</Text>
          {formikProps.isSubmitting ? (
            <ActivityIndicator />
          ) : (
            <Button style={{ marginLeft: 1100, marginRight: 1100 }} title="Submit" onPress={formikProps.handleSubmit} />
          )}
        </React.Fragment>
      )}
    </Formik>
  </SafeAreaView>
);
