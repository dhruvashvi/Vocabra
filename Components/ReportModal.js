import React from 'react';
import {
  Text,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
  Modal,
  View,
  ToastAndroid,
  Picker,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {withNavigation} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

const ReportModal = ({
  modalVisibility,
  modalVisible,
  setItemValue,
  itemValue,
  setComment,
  word,
}) => {
  return (
    <View>
      <TouchableHighlight
        style={styles.bugBtn}
        onPress={() => modalVisibility(true)}>
        <Text style={styles.bugBtnTxt}>Report Correction/Bug</Text>
      </TouchableHighlight>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          ToastAndroid.show('Your feedback is helpful :)', ToastAndroid.SHORT);
        }}>
        <View style={styles.modalView}>
          <View style={styles.modalInnerView}>
            <View style={styles.view}>
              <Text style={styles.bugTitle}>Report Correction</Text>
              <TouchableOpacity onPress={() => modalVisibility(false)}>
                <Icon name="ios-close" color="#A80341" size={40} />
              </TouchableOpacity>
            </View>
            <Text style={styles.wordTitle}>{`WORD: ${word}`}</Text>
            <View style={styles.pickerCont}>
              <Picker
                style={styles.picker}
                selectedValue={itemValue}
                onValueChange={value => setItemValue(value)}>
                <Picker.Item label="--Section--" value="" />
                <Picker.Item label="Meaning" value="Meaning" />
                <Picker.Item label="Context" value="Context" />
                <Picker.Item label="Word-Root" value="Word-Root" />
                <Picker.Item label="In-Shorts" value="In-Shorts" />
                <Picker.Item label="Quiz" value="Quiz" />
              </Picker>
            </View>
            <TextInput
              maxLength={128}
              style={styles.modalComment}
              placeholder="Correction....."
              placeholderTextColor="#707070"
              multiline={true}
              numberOfLines={3}
              onChange={data => setComment(data)}
            />
            <TouchableHighlight
              // eslint-disable-next-line react-native/no-inline-styles
              style={[styles.bugBtn, {alignSelf: 'flex-end', width: wp('20%')}]}
              onPress={() => modalVisibility(false)}>
              <Text style={styles.bugBtnTxt}>Report</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  bugBtn: {
    borderWidth: 1,
    borderRadius: 22,
    borderColor: '#707070',
    padding: 5,
    margin: 5,
    width: wp('50%'),
    alignSelf: 'center',
  },
  bugBtnTxt: {
    color: '#A80341',
    padding: 5,
    textAlign: 'center',
    fontSize: wp('3%'),
  },
  modalView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000050',
  },
  modalInnerView: {
    width: wp('90%'),
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 22,
  },
  bugTitle: {
    fontSize: wp('5%'),
    color: '#A80341',
  },
  wordTitle: {
    fontSize: wp('3%'),
    textTransform: 'capitalize',
  },
  modalComment: {
    height: hp('20%'),
    width: '100%',
    borderWidth: 1,
    borderColor: '#A80341',
    borderRadius: 22,
    textAlignVertical: 'top',
  },
  picker: {
    height: '100%',
    width: '100%',
    textAlign: 'left',
    color: '#707070',
    fontSize: wp('5%'),
  },
  pickerCont: {
    height: 40,
    borderWidth: 1,
    width: '50%',
    borderRadius: 22,
    borderColor: '#A80341',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginBottom: 5,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    width: '100%',
  },
});

export default withNavigation(ReportModal);
