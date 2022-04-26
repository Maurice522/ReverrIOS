import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React from 'react';
import AppColors from '../Constaint/AppColors';
import {smallString} from '../utils/helper';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const SwipeCard = props => {
  return (
    <View>
      <FlatList
        data={props.data}
        horizontal
        pagingEnabled
        onScroll={props.onScroll}
<<<<<<< HEAD:Componants/SwipeCard.js
        renderItem={({item}) => (
          <TouchableOpacity
            activeOpacity={0.6}
            style={{...styles.container, ...props.style}}>
            <ImageBackground style={{flex: 1}} source={{uri: item.image}}>
              <View style={{...styles.title, ...props.overlay}}>
                <Text
                  style={{
                    ...{
                      color: AppColors.FontsColor,
                      fontFamily: 'Poppins-Bold',
                    },
                    ...props.title,
                  }}>
                  {item.title}
                </Text>
                <Text
                  style={{
                    ...{
                      color: AppColors.BtnClr,
                      fontFamily: 'Poppins-Regular',
                    },
                    ...props.description,
                  }}>
                  {smallString(item.description, 130)}
                </Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
=======
        renderItem={({item,index}) =>{
          if(item.image&&index<7){
            return (
              <TouchableOpacity activeOpacity={0.6} style={styles.container}>
                <ImageBackground style={{flex: 1}} source={{uri:item.image.thumbnail.contentUrl}}>
                  <View style={styles.title}>
                    <Text
                      style={{
                        color: AppColors.FontsColor,
                        fontFamily: 'Poppins-Regular',
                      }}>
                      {item.name}
                    </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )
          }else{
            console.log("no image");
          }
        } }
>>>>>>> 6466a390998e355e4e5c0a558bad83f859cedc7a:Componants/HomeScreenComponants/NewsScreenComponants/TrendingNewsCard.js
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginStart: 15,
    marginVertical: '2%',
    marginEnd: 10,
    width: Width / 1.1,
    height: Height > 684 ? Height / 4 : Height / 5,
    overflow: 'hidden',
    borderRadius: 20,
  },
  title: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    width: '100%',
    height: '40%',
    paddingVertical: 5,
    paddingHorizontal: '3%',
    top: Height > 684 ? 145 : 90,
  },
});

export default SwipeCard;
