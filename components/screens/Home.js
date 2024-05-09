import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,

  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { Items } from '../database/Database';

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [accessory, setAccessory] = useState([]);

  //get called on screen loads
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getDataFromDB();
    });

    return unsubscribe;
  }, [navigation]);

  //get data from DB

  const getDataFromDB = () => {
    let productList = [];
    let accessoryList = [];
    for (let index = 0; index < Items.length; index++) {
      if (Items[index].category == 'product') {
        productList.push(Items[index]);
      } else if (Items[index].category == 'accessory') {
        accessoryList.push(Items[index]);
      }
    }

    setProducts(productList);
    setAccessory(accessoryList);
  };

  //create an product reusable card

  const ProductCard = ({ data }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductInfo', { productID: data.id })}
        style={{
          width: '48%',
          marginVertical: 14,
        }}>
        <View
          style={{
            width: '100%',
            height: 100,
            borderRadius: 10,
            backgroundColor: '#F0F0F3',
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 8,
          }}>
          {data.isOff ? (
            <View
              style={{
                position: 'absolute',
                width: '20%',
                height: '24%',
                backgroundColor: 'green',
                top: 0,
                left: 0,
                borderTopLeftRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: 'white',
                  fontWeight: 'bold',
                  letterSpacing: 1,
                }}>
                {data.offPercentage}%
              </Text>
            </View>
          ) : null}
          <Image
            source={data.productImage}
            style={{
              width: '80%',
              height: '80%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 12,
            color: 'black',
            fontWeight: '600',
            marginBottom: 2,
          }}>
          {data.productName}
        </Text>
        {data.category == 'accessory' ? (
          data.isAvailable ? (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://icon-library.com/images/icon-available/icon-available-4.jpg',
                }}
                style={{
                  width: 12,
                  height: 12,
                  marginRight: 6,

                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: 'green',
                }}>
                Còn Hàng
              </Text>
            </View>
          ) : (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://cdn.iconscout.com/icon/premium/png-256-thumb/unavailable-5-570398.png',
                }}
                style={{
                  width: 12,
                  height: 12,
                  marginRight: 6,

                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: 'red',
                }}>
                Hết hàng
              </Text>
            </View>
          )
        ) : null}
        <Text style={{ color: 'green' }}> {data.productPrice} VNđ</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
      }}>
      <StatusBar backgroundColor={'white'} barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 16,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('UserDetail')}>
            <Image
              source={{
                uri: 'https://i.stack.imgur.com/l60Hf.png',
              }}
              style={{
                padding: 12,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
            <Image
              style={{
                padding: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: '#F0F0F3',
              }}
              source={{
                uri: 'https://pantryshelfwallawalla.org/wp-content/uploads/2019/03/shopping-circle-green-512.png',
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 10,
            padding: 16,
          }}>
          <Text
            style={{
              fontSize: 22,
              color: 'black',
              fontWeight: '500',
              letterSpacing: 1,
              marginBottom: 10,
            }}>
            PC-LINH KIỆN &amp; PHỤ KIỆN
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: 'black',
              fontWeight: '400',
              letterSpacing: 1,
              lineHeight: 24,
            }}>
            Đến xem trực tiếp
            {'\n'}
            Địa chỉ: 324 Đ.Hoà Hưng, Phường 12, Quận 10, Thành phố Hồ Chí Minh.
          </Text>
        </View>
        <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Linh kiện
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                41
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: 'blue',
                fontWeight: '400',
              }}>
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {products.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
            {/* <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      /> */}
          </View>
        </View>

        <View
          style={{
            padding: 16,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontWeight: '500',
                  letterSpacing: 1,
                }}>
                Phụ kiện
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'black',
                  fontWeight: '400',
                  opacity: 0.5,
                  marginLeft: 10,
                }}>
                78
              </Text>
            </View>
            <Text
              style={{
                fontSize: 14,
                color: 'blue',
                fontWeight: '400',
              }}>
              SeeAll
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-around',
            }}>
            {accessory.map(data => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};


export default Home;
