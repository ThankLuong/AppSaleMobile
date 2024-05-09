import React from 'react';
import {
  Text,
  StyleSheet,
  Button,
  Image,
  ImageBackground,
  SafeAreaView,
  View
} from 'react-native';

const StartScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{

      }}
      resizeMode="repeat"
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Image
          source={{ uri: 'https://i.ibb.co/ScwLzGB/lkdt.png', }}
          style={styles.logo}
        />
        <Text style={styles.textTitle}>THIẾT BỊ ĐIỆN TỬ</Text>
        <Text style={styles.textDescription}>
          Dịch vụ tốt nhất, Đúng lúc, Đúng người.
        </Text>
        <View style={styles.button}>
          <Button
            color="#4169e1"
            onPress={() => navigation.navigate('Login')}
            title="Đăng Nhập"
          />
          <View style={styles.separator} />

          <Button
            color="#98fb98"
            onPress={() => navigation.navigate('RegisterScreen')}
            title=" Đăng ký"

          />
        </View>
      </SafeAreaView>
    </ImageBackground>
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
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,

  },
  textTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    paddingVertical: 12,
    color: '#00bfff'
  },
  textDescription: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 20,
    color: '#87cefa'
  },
  button: {
    width: '100%',

  },
  separator: {
    marginVertical: 10,

  },
})
export default StartScreen;