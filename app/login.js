import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { COLORS } from '../constants/color.constant';
import { router } from 'expo-router';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });

  const handleChange = (name, value) => {
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    console.log('You submitted', formState);

    router.push('/(tabs)');
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      }}
    >
      <View style={{ width: '100%', marginBottom: 18 }}>
        <Text
          style={{ fontSize: 28, fontWeight: 'bold', color: COLORS.primary }}
        >
          Welcome Back
        </Text>
        <Text>
          Mange your finances with the #1 financial tracker on the internet
        </Text>
      </View>
      <View style={{ width: '100%' }}>
        <Text style={styles.inputLabel}> Email address</Text>
        <TextInput
          placeholder='Your Email'
          style={[styles.input, { marginBottom: 20 }]}
          value={formState.email}
          onChangeText={(text) => handleChange('email', text)}
        />
        <Text style={styles.inputLabel}> Password</Text>
        <TextInput
          placeholder='Your Password'
          style={styles.input}
          secureTextEntry
          value={formState.password}
          onChangeText={(text) => handleChange('password', text)}
        />
      </View>
      <TouchableOpacity
        style={{
          width: '60%',
          paddingVertical: 12,
          paddingHorizontal: 20,
          backgroundColor: COLORS.primary,
          marginTop: 30,
          borderRadius: 4,
        }}
        onPress={handleSubmit}
      >
        <Text
          style={{
            color: COLORS.light,
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 18,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputLabel: {
    fontSize: 12,
    fontWeight: 'medium',
    color: COLORS.danger,
    paddingBottom: 4,
  },
  input: {
    width: '100%',
    padding: 8,
    paddingVertical: 12,
    fontSize: 16,
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: COLORS.gray,
    borderRadius: 4,
  },
});
export default Login;
