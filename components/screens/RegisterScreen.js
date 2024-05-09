import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  Button,
  Image,
  Alert,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [isScureEntry, setIsSecureEntry] = useState(false);
  const Message = () =>
    Alert.alert(
      "Đăng ký thành công",
      "Click để quay lại đăng nhập",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => navigation.navigate('Login') }
      ]
    );

  return (



    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: 'https://i.ibb.co/ScwLzGB/lkdt.png', }}
        style={styles.logo}
      />

      <Text style={styles.textTitle}>Tạo tài khoản</Text>

      <View style={styles.section}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Họ Tên..."
          keyboardType="default"
          placeholderTextColor='grey'
          color='black'
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.section}>
        <TextInput
          style={styles.input}
          onChangeText={setPhone}
          value={phone}
          placeholder="Số Điện Thoại..."
          keyboardType="numeric"
          placeholderTextColor='grey'
          color='black'
        />
      </View>
      <View style={styles.separator} />
      <View style={styles.section1}>
        <TextInput
          style={styles.inputpass}
          onChangeText={setPassword}
          value={password}
          keyboardType="default"
          secureTextEntry={isScureEntry}
          placeholder={isScureEntry ? '' : 'Mật khẩu...'}
          placeholderTextColor='grey'
          color='black'
        />
        <TouchableOpacity style={{ marginRight: 5 }}
          onPress={() => {
            setIsSecureEntry((prev) => !prev);
          }}>
          <Text style={{ color: 'black', fontWeight: 'bold' }}>{isScureEntry ? 'HIỆN' : 'ẨN'}</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.forgotPassword}>
      </View>

      <Button
        color="#4169e1"
        onPress={Message}

        title="Đăng ký"
      />
      <View style={styles.row}>
        <Text style={{ color: 'red' }}>Bạn đã có tài khoản? </Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.link}>Đăng nhập ngay</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>


  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,

  },
  input: {

    borderRadius: 5,
    borderColor: '#0779e4',
    fontSize: 16
  },
  inputpass: {
    width: '90%',
    borderRadius: 5,
    borderColor: '#0779e4',
    fontSize: 16
  },
  textTitle: {
    fontSize: 15,
    lineHeight: 21,
    paddingVertical: 12,
    color: '#87cefa'
  },
  separator: {
    marginVertical: 5,

  },
  section: {
    height: 45,

    width: '100%',
    borderWidth: 1,
    borderRadius: 5
  },
  section1: {
    height: 45,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5
  },
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: 'blue',
  },
  link: {
    fontWeight: 'bold',
    color: 'blue',
  },
})
export default RegisterScreen;