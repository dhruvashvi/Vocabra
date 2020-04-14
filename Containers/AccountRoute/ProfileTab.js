import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ProfileTab = ({data, imagePress}) => {
  return (
    <View style={styles.view}>
      <View style={styles.imageView}>
        <Image
          source={require('../../Images/user.png')}
          style={styles.profImage}
        />
        <View style={styles.editButtonView}>
          <TouchableOpacity
            onPress={() => imagePress()}
            style={styles.editButton}>
            <Icon size={20} name={'ios-camera'} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.titleText}>{data.name}</Text>
      <View style={styles.innerView}>
        <View style={styles.infoView}>
          <Text style={styles.infoText}>Email</Text>
          <Text style={styles.infoText}>Account Type</Text>
          <Text style={styles.infoText}>Mobile No</Text>
          <Text style={styles.infoText}>Prepration</Text>
        </View>
        <View style={styles.resView}>
          <Text style={styles.resText}>{data.email}</Text>
          <Text style={styles.resText}>{data.type}</Text>
          <Text style={styles.resText}>{data.mob}</Text>
          <Text style={styles.resText}>{data.prep}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: wp('95%'),
    backgroundColor: '#fff',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
    borderWidth: 3,
    borderColor: '#A80341',
    margin: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  innerView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  imageView: {
    width: 150,
    height: 150,
    borderWidth: 3,
    borderColor: '#707070',
    borderRadius: 75,
    margin: 10,
  },
  profImage: {
    height: '100%',
    width: '100%',
  },
  resView: {
    alignItems: 'flex-end',
  },
  infoText: {
    color: '#707070',
    fontSize: wp('3%'),
    padding: 2,
  },
  resText: {
    color: '#000',
    fontSize: wp('3%'),
    padding: 2,
    fontWeight: 'bold',
  },
  titleText: {
    color: '#000',
    fontSize: wp('5%'),
    padding: 2,
    fontWeight: 'bold',
  },
  editButtonView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingRight: 10,
  },
  editButton: {
    borderWidth: 1,
    padding: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height: 25,
    width: 25,
    borderRadius: 13,
  },
});

export default ProfileTab;
