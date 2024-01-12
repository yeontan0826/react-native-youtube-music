import {faker} from '@faker-js/faker';
import {Animated, Text, View, useWindowDimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Title = ({width}: {width: number}): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: width * 0.1,
        paddingVertical: 30,
      }}>
      <MaterialCommunityIcons
        name="thumb-down-outline"
        color={'#ffffff80'}
        size={20}
      />
      <View style={{alignItems: 'center', paddingHorizontal: 20, flex: 1}}>
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
          numberOfLines={1}>
          {faker.music.songName()}
        </Text>
        <Text style={{color: 'white', fontSize: 16}}>
          {faker.music.genre()}
        </Text>
      </View>
      <MaterialCommunityIcons
        name="thumb-up-outline"
        color={'#ffffff80'}
        size={20}
      />
    </View>
  );
};

const Timeline = ({width}: {width: number}): JSX.Element => {
  return (
    <View style={{marginRight: width * 0.1}}>
      <View
        style={{
          height: 30,
          borderBottomWidth: 2,
          borderBottomColor: '#ffffff80',
        }}
      />
      <View
        style={{
          width: 10,
          height: 10,
          backgroundColor: 'white',
          marginTop: -6,
          borderRadius: 5,
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 8,
        }}>
        <Text style={{color: 'white', fontSize: 10}}>0:02</Text>
        <Text style={{color: 'white', fontSize: 10}}>3:34</Text>
      </View>
    </View>
  );
};

const Buttons = ({width}: {width: number}): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        marginRight: width * 0.1,
      }}>
      <MaterialCommunityIcons name="shuffle" size={28} color={'white'} />
      <MaterialCommunityIcons name="skip-previous" size={28} color={'white'} />
      <View
        style={{backgroundColor: '#ffffff30', padding: 10, borderRadius: 100}}>
        <MaterialCommunityIcons name="play" size={40} color={'white'} />
      </View>
      <MaterialCommunityIcons name="skip-next" size={28} color={'white'} />
      <MaterialCommunityIcons name="repeat" size={28} color={'white'} />
    </View>
  );
};

const PlaylistFullMiddle = ({
  playlistAnim,
}: {
  playlistAnim: Animated.Value;
}): JSX.Element => {
  const {height, width} = useWindowDimensions();

  return (
    <Animated.View
      style={{
        height: playlistAnim.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [0, 0, 250],
        }),
        width: playlistAnim.interpolate({
          inputRange: [0, height / 2.5, height],
          outputRange: ['0%', '0%', '100%'],
        }),
        opacity: playlistAnim.interpolate({
          inputRange: [height / 2, height],
          outputRange: [0, 1],
        }),
      }}>
      <Title width={width} />
      <Timeline width={width} />
      <Buttons width={width} />
    </Animated.View>
  );
};

export default PlaylistFullMiddle;
