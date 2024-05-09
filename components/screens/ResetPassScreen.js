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


const ResetPassScreen = ({ navigation }) => {
  const [phone, setPhone] = useState('')
  const AlertMessage = () =>
    Alert.alert(
      "Gửi thành công",
      "Vui lòng đợi ít phút chúng tôi sẽ gửi mã xác nhận đến tin nhắn của bạn",
      [
        { text: "OK", }
      ]
    );


  return (



    <SafeAreaView style={styles.container}>


      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          paddingTop: 16,
          paddingHorizontal: 16,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>


        <View></View>
      </View>

      <Image
        source={{ uri: 'https://i.ibb.co/ScwLzGB/lkdt.png', }}
        style={styles.logo}
      />

      <Text style={styles.textTitle}>Gửi mã xác nhận đến: </Text>
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

      <View style={styles.separator}>

      </View>



      <Button
        color="#4169e1"
        onPress={AlertMessage}
        title="Lấy lại mật khẩu"
      />
      <View style={styles.row}>
        <Text style={{ color: 'red' }}>Chúng tôi sẽ tiến hành gửi mã xác nhận đến sms ! </Text>

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
export default ResetPassScreen;