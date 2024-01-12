import {Animated, Text, View, useWindowDimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IconItem = ({name}: {name?: string}): JSX.Element => {
  return (
    <View
      style={{
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {name && <MaterialCommunityIcons name={name} size={24} color={'white'} />}
    </View>
  );
};

const PlaylistFullTop = ({
  playlistAnim,
}: {
  playlistAnim: Animated.Value;
}): JSX.Element => {
  const {height, width} = useWindowDimensions();

  return (
    <Animated.View
      style={{
        height: playlistAnim.interpolate({
          inputRange: [0, height / 2.5, height],
          outputRange: [0, 0, 100],
        }),
        opacity: playlistAnim.interpolate({
          inputRange: [height / 2, height],
          outputRange: [0, 1],
        }),
      }}>
      <Animated.View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: playlistAnim.interpolate({
            inputRange: [0, height / 2.5, height],
            outputRange: [0, 0, width],
          }),
          paddingHorizontal: 10,
          marginLeft: -width * 0.1,
        }}>
        <View style={{flexDirection: 'row'}}>
          <IconItem name={'chevron-down'} />
          <IconItem />
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 30,
            alignItems: 'center',
            backgroundColor: '#111',
            borderRadius: 20,
          }}>
          <View
            style={{
              height: 30,
              justifyContent: 'center',
              paddingHorizontal: 12,
              backgroundColor: '#444',
              borderRadius: 20,
            }}>
            <Text style={{fontSize: 12, color: '#ffffff90'}}>노래</Text>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
            }}>
            <Text style={{fontSize: 12, color: '#ffffff80'}}>동영상</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <IconItem name={'cast'} />
          <IconItem name={'dots-vertical'} />
        </View>
      </Animated.View>
    </Animated.View>
  );
};

export default PlaylistFullTop;
