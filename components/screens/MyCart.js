import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';



const MyCart = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            paddingTop: 16,
            paddingHorizontal: 16,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={{
                uri: 'https://cdn2.iconfinder.com/data/icons/simple-circular-icons-line/84/Left_Carrot-512.png',
              }}
              style={{
                height: 18,
                width: 18,

                padding: 12,

                borderRadius: 12,
              }}
            />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              fontWeight: '400',
            }}>
            Order Details
          </Text>
          <View></View>
        </View>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: '500',
            letterSpacing: 1,
            paddingTop: 20,
            paddingLeft: 16,
            marginBottom: 10,
          }}>
          Giỏ hàng
        </Text>
        {/* demo khi đưa sản phẩm */}
        <View style={{ paddingHorizontal: 16 }}>
          <TouchableOpacity
            onPress={null}
            style={{
              width: '100%',
              height: 100,
              marginVertical: 6,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: '30%',
                height: 100,
                padding: 14,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F0F0F3',
                borderRadius: 10,
                marginRight: 22,
              }}>
              <Image
                source={{ uri: 'https://product.hstatic.net/1000356871/product/k52_99d6f8cc56cb4df8af5f4e15c2ea4cd2_grande.jpg', }}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                height: '100%',
                justifyContent: 'space-around',
              }}>
              <View style={{}}>
                <Text
                  style={{
                    fontSize: 14,
                    maxWidth: '100%',
                    color: 'black',
                    fontWeight: '600',
                    letterSpacing: 1,
                  }}>
                  AIR POD
                </Text>
                <View
                  style={{
                    marginTop: 4,
                    flexDirection: 'row',
                    alignItems: 'center',
                    opacity: 0.6,
                  }}>

                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <View
                    style={{
                      borderRadius: 100,
                      marginRight: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: '#B9B9B9',
                      opacity: 0.5,
                    }}>
                    <Image
                      source={{
                        uri: 'https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-minus-vector-icon-png-image_1824207.jpg',
                      }}
                      style={{
                        height: 16,
                        width: 16

                      }}
                    />
                  </View>
                  <Text>1</Text>
                  <View
                    style={{
                      borderRadius: 100,
                      marginLeft: 20,
                      padding: 4,
                      borderWidth: 1,
                      borderColor: '#B9B9B9',
                      opacity: 0.5,
                    }}>
                    <Image
                      source={{
                        uri: 'https://image.shutterstock.com/image-vector/add-icon-plus-symbol-increase-260nw-1659251050.jpg',
                      }}
                      style={{
                        height: 16, width: 16

                      }}
                    />
                  </View>
                </View>
                <TouchableOpacity onPress={null}>
                  <Image
                    source={{
                      uri: 'http://cdn.onlinewebfonts.com/svg/img_135131.png',
                    }}
                    style={{
                      height: 16,
                      width: 16,

                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Địa chỉ nhận hàng
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    color: 'blue',
                    backgroundColor: 'white',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 14,
                  }}>
                  <Image
                    source={{
                      uri: 'https://static.vecteezy.com/system/resources/previews/006/692/375/non_2x/fast-time-delivery-icon-template-black-color-editable-fast-time-delivery-icon-symbol-flat-illustration-for-graphic-and-web-design-free-vector.jpg',
                    }}
                    style={{
                      height: 30,
                      width: 30

                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    468/32/11 nguyen tri phuong
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                    }}>
                    P.9, Q.10, TP.Hồ Chí Minh
                  </Text>
                </View>
              </View>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ic_chevron_right_48px.svg/1200px-Ic_chevron_right_48px.svg.png',
                }}
                style={{ height: 22, width: 22 }}
              />
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginVertical: 10,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Phương thức thanh toán
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  width: '80%',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    color: 'blue',
                    backgroundColor: '#F0F0F3',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 12,
                    borderRadius: 10,
                    marginRight: 18,
                  }}>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: '900',
                      color: 'blue',
                      letterSpacing: 1,
                    }}>
                    VISA
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: 'black',
                      fontWeight: '500',
                    }}>
                    Thanh toán bằng thẻ VISA
                  </Text>
                  <Text
                    style={{
                      fontSize: 12,
                      color: 'black',
                      fontWeight: '400',
                      lineHeight: 20,
                      opacity: 0.5,
                    }}>
                    ****-(5906)
                  </Text>
                </View>

              </View>
              <Image
                source={{
                  uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ic_chevron_right_48px.svg/1200px-Ic_chevron_right_48px.svg.png',
                }}
                style={{ height: 22, width: 22 }}
              />

            </View>

          </View>
          <View
            style={{
              paddingHorizontal: 16,
              marginTop: 40,
              marginBottom: 80,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: 'black',
                fontWeight: '500',
                letterSpacing: 1,
                marginBottom: 20,
              }}>
              Danh sách sản phẩm
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: 'black',
                  opacity: 0.5,
                }}>
                Giá sản phẩm
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '400',
                  color: 'black',
                  opacity: 0.8,
                }}>
                đ 250.000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 22,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: 'black',
                  opacity: 0.5,
                }}>
                Phí vận chuyển
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: '400',
                  color: 'black',
                  opacity: 0.8,
                }}>
                đ 15.000
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '400',
                  maxWidth: '80%',
                  color: 'black',
                  opacity: 0.5,
                }}>
                Tổng tiền
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '500',
                  color: 'red',
                }}>
                đ 265.000
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 10,
          height: '8%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={null}
          style={{
            width: '86%',
            height: '90%',
            backgroundColor: 'blue',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '500',
              letterSpacing: 1,
              color: 'white',
              textTransform: 'uppercase',
            }}>
            Thanh toán
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyCart;
