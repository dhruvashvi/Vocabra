import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import YouTube from 'react-native-youtube';

const YouTubeVideo = ({play, onVideoError, navigation}) => {
  return (
    <View>
      <YouTube
        videoId="1w7OgIMMRc4"
        apiKey="AIzaSyDIz20S7aIjY5ImHc1Y6ityp6gFg9EnuwI"
        play={true}
        controls={0}
        showinfo={true}
        style={styles.ytVideo}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Exit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ytVideo: {
    alignSelf: 'stretch',
    height: 300,
    width: '100%',
  },
  newsContainer: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#A80341',
    backgroundColor: '#FFF',
    padding: 10,
    alignItems: 'center',
  },
});

export default YouTubeVideo;
