import React, { useState } from 'react'
import {
  Text,
  StyleSheet,
  Button,
  Image,
  Modal,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const UserDetail = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [Username, setUsername] = useState('Le Thanh Luong');
  const [Phone, setPhone] = useState('0986446385');
  const [Dob, setDob] = useState('12/9/1998');
  const [Email, setEmail] = useState('luonglethanh77@gmail.com');
  const [Password, setPassword] = useState('');
  const [Confirm_Password, setConfirmPass] = useState('');

  return (

    <SafeAreaView>
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            ToastAndroid.show('Hủy thêm mới', ToastAndroid.SHORT);
            setModalVisible(!modalVisible);

          }}

        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.container} >
                <View style={{ flexDirection: "row", borderBottomWidth: 0.5, marginHorizontal: 10 }}>
                  <Text style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>Điện thoại: {Phone} </Text>

                </View>
                <View style={styles.separator}></View>
                <View style={styles.separator}></View>
                <Text>Họ Tên:</Text>
                <View style={styles.section}>
                  <TextInput style={styles.input}
                    placeholderTextColor="#0779e4"
                    placeholder="Họ Tên..."
                    value={Username}
                    onChangeText={setUsername}
                  />

                </View>
                <Text>Ngày sinh:</Text>
                <View style={styles.section}>
                  <TextInput style={styles.input}
                    placeholderTextColor="#0779e4"
                    placeholder="Ngày tháng năm sinh..."
                    value={Dob}
                    onChangeText={setDob}
                  />

                </View>
                <Text>Email:</Text>
                <View style={styles.section1}>
                  <TextInput style={styles.input}
                    placeholderTextColor="#0779e4"
                    value={Email}
                    onChangeText={setEmail}
                    placeholder=" Email..."

                  />



                </View>

              </View>

              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Pressable
                  style={[styles.button, styles.buttonOpen]}
                  onPress={null}
                >
                  <Text style={styles.textStyle}>Xác Nhận</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Hủy</Text>
                </Pressable>


                <View style={{ flexDirection: "row", }}>


                </View>
              </View>

            </View>
          </View>

        </Modal>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Image style={styles.avatar}
              source={{ uri: 'https://i.stack.imgur.com/l60Hf.png' }} />

            <Text style={styles.name}>Le Thanh Luong </Text>
            <Text style={styles.userInfo}>0986446385 </Text>

            <Text style={styles.userInfo}> Nguyen Tri Phuong P.9, Q.10, TP.HCM </Text>
          </View>
        </View>

        <View style={styles.body}>
          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/70/000000/cottage.png' }} />
            </View>
            <View style={styles.infoContent}>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text style={styles.info}>Trang chủ</Text>
              </Pressable>

            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/color/70/000000/administrator-male.png' }} />
            </View>
            <View style={styles.infoContent}>
              <Pressable

                onPress={() => setModalVisible(true)}
              >
                <Text style={styles.info}>Sửa thông tin</Text>
              </Pressable>

            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/218/218390.png' }} />
            </View>
            <View style={styles.infoContent}>
              <Text style={styles.info}>Ví điện tử</Text>
            </View>
          </View>

          <View style={styles.item}>
            <View style={styles.iconContent}>
              <Image style={styles.icon} source={{ uri: 'https://www.iconpacks.net/icons/2/free-exit-logout-icon-2857-thumb.png' }} />
            </View>
            <View style={styles.infoContent}>
              <Pressable onPress={() => navigation.navigate('StartScreen')}>
                <Text style={styles.info}>Đăng xuất</Text>
              </Pressable>

            </View>
          </View>

        </View>
      </View>
    </SafeAreaView>



  )
}

const styles = StyleSheet.create({
  centeredView: {
    alignItems: "center",
    marginTop: 5
  },
  header: {
    backgroundColor: "#DCDCDC",
  },
  headerContent: {
    padding: 30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    color: "#000000",
    fontWeight: '600',
  },
  userInfo: {
    fontSize: 16,
    color: "#778899",
    fontWeight: '600',
  },
  body: {
    backgroundColor: "#778899",
    height: 500,
    alignItems: 'center',
  },
  item: {
    flexDirection: 'row',
  },
  infoContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingLeft: 5
  },
  iconContent: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
  info: {
    fontSize: 18,
    marginTop: 20,
    color: "#FFFFFF",
  },
  modalView: {
    justifyContent: 'center',
    margin: 20,
    backgroundColor: "#f0ffff",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    color: 'grey',
    borderRadius: 5,
    borderColor: '#0779e4',
    fontSize: 16
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#ff4500",
  },
  section: {
    borderWidth: 0.5,
    borderRadius: 5
  },
  section1: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',

    borderWidth: 0.5,
    borderRadius: 5

  },
  separator: {
    marginVertical: 5,

  },
});
export default UserDetail;