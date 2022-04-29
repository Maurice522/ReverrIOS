import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import AppColors from '../Constaint/AppColors';
import LinearGradient from 'react-native-linear-gradient';

const Height = Dimensions.get('window').height;
const Width = Dimensions.get('window').width;

const CustomMenuBar = ({
  Item1,
  Item2,
  active1,
  itemStyle,
  active2,
  ClickOnItem1,
  ClickOnItem2,
}) => {
  return (
    <LinearGradient
      colors={[AppColors.primarycolor, '#012437']}
      start={{x: -0.7, y: 1.3}}
      end={{x: 1, y: 0.5}}
      style={styles.Container}>
      <TouchableOpacity onPress={ClickOnItem1}>
        <Text
          style={[
            styles.text,
            {backgroundColor: active1 ? AppColors.ActiveColor : null},
          ]}>
          {Item1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={ClickOnItem2}>
        <Text
          style={[
            styles.text,
            {backgroundColor: active2 ? AppColors.ActiveColor : null},
            itemStyle,
          ]}>
          {Item2}
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  Container: {
    width: '95%',
    height: Height / 20,
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: '3%',
  },
  text: {
    color: AppColors.FontsColor,
    paddingVertical: '1.08%',
    fontFamily: 'Poppins-Regular',
    paddingHorizontal: '10%',
    borderRadius: 5,
  },
});

export default CustomMenuBar;
