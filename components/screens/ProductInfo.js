import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
  Animated,
  ToastAndroid,
  SafeAreaView,
} from 'react-native';
import { COLOURS, Items } from '../database/Database';

import AsyncStorage from '@react-native-async-storage/async-storage';


const ProductInfo = ({ route, navigation }) => {
  const { productID } = route.params;

  const [product, setProduct] = useState({});

  const width = Dimensions.get('window').width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get product data by productID

  const getDataFromDB = async () => {
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].id == productID) {
        await setProduct(Items[index]);
        return;
      }
    }
  };

  //add to cart

  const addToCart = () => {
    ToastAndroid.show(
      'Đã thêm vào giỏ hàng',
      ToastAndroid.SHORT,
    );
    navigation.navigate('Home');
  };

  //product horizontal scroll product card
  const renderProduct = ({ item, index }) => {
    return (
      <View
        style={{
          width: width,
          height: 240,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={item}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}
        />
      </View>
    );
  };

  return (
    <SafeAreaView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        position: 'relative',
      }}>
      <StatusBar
        backgroundColor={'#F0F0F3'}
        barStyle="dark-content"
      />
      <ScrollView>
        <View
          style={{
            width: '100%',
            backgroundColor: '#F0F0F3',
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 4,
          }}>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 16,
              paddingLeft: 16,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack('Home')}>
              <Image
                source={{
                  uri: 'https://cdn2.iconfinder.com/data/icons/simple-circular-icons-line/84/Left_Carrot-512.png',
                }}
                style={{


                  padding: 12,

                  borderRadius: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <FlatList
            data={product.productImageList ? product.productImageList : null}
            horizontal
            renderItem={renderProduct}
            showsHorizontalScrollIndicator={false}
            decelerationRate={0.8}
            snapToInterval={width}
            bounces={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false },
            )}
          />
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 16,
              marginTop: 32,
            }}>
            {product.productImageList
              ? product.productImageList.map((data, index) => {
                let opacity = position.interpolate({
                  inputRange: [index - 1, index, index + 1],
                  outputRange: [0.2, 1, 0.2],
                  extrapolate: 'clamp',
                });
                return (
                  <Animated.View
                    key={index}
                    style={{
                      width: '16%',
                      height: 2.4,
                      backgroundColor: 'black',
                      opacity,
                      marginHorizontal: 4,
                      borderRadius: 100,
                    }}></Animated.View>
                );
              })
              : null}
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 16,
            marginTop: 6,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 14,
            }}>
            <Image
              source={{
                uri: 'https://cdn5.vectorstock.com/i/1000x1000/34/49/shopping-cart-icon-digital-blue-vector-22943449.jpg',
              }}
              style={{

                alignItems: 'center',
                justifyContent: 'center',
                padding: 20,
                borderRadius: 10,
                marginRight: 6,
              }}
            />
            <Text
              style={{
                fontSize: 12,
                color: 'black',
              }}>
              Shopping
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginVertical: 4,
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
                letterSpacing: 0.5,
                marginVertical: 4,
                color: 'black',
                maxWidth: '84%',
              }}>
              {product.productName}
            </Text>
            <Image
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6djKQm1xGNJuHn48cw2GmgANqNq1KaPeIiA&usqp=CAU',
              }}
              style={{
                height: 24,

                padding: 8,
                borderRadius: 100,
              }}
            />
          </View>
          <Text
            style={{
              fontSize: 12,
              color: 'black',
              fontWeight: '400',
              letterSpacing: 1,
              opacity: 0.5,
              lineHeight: 20,
              maxWidth: '85%',
              maxHeight: 44,
              marginBottom: 18,
            }}>
            {product.description}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginVertical: 14,
              borderBottomColor: '#F0F0F3',
              borderBottomWidth: 1,
              paddingBottom: 20,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                alignItems: 'center',
              }}>
              <View
              >
                <Image
                  style={{

                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 20,
                    borderRadius: 100,
                    marginRight: 10,

                  }}
                  source={{
                    uri: 'https://c8.alamy.com/comp/2DB21F5/shopping-cart-and-location-pin-2DB21F5.jpg',
                  }}

                />
              </View>
              <Text style={{ color: 'black' }}> 324 Hòa Hưng,{'\n'}Phường 12, Quận 10, Thành phố Hồ Chí Minh.</Text>
            </View>
            <Image
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Chevron-double-right_%28CoreUI_Icons_v1.0.0%29.svg/2048px-Chevron-double-right_%28CoreUI_Icons_v1.0.0%29.svg.png',
              }}
              style={{
                height: 22,
                width: 22,
              }}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 16,
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '500',
                maxWidth: '85%',
                color: 'red',
                marginBottom: 4,
              }}>
              {product.productPrice}.000 đ
            </Text>
            <Text style={{ color: 'grey' }}>
              Giá đã bao gồm VAT
            </Text>
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

      </View>
      <TouchableOpacity

        onPress={addToCart}

        style={{
          width: '86%',
          height: '7%',
          alignSelf: 'center',
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
          Thêm vào giỏ hàng
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductInfo;
