import {
  Animated,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const PlaylistFullBottom = ({
  playlistAnim,
}: {
  playlistAnim: Animated.Value;
}): JSX.Element => {
  const {bottom} = useSafeAreaInsets();
  const {height, width} = useWindowDimensions();
  return (
    <Animated.View
      style={{
        position: 'absolute',
        bottom: 0,
        width,
        height: playlistAnim.interpolate({
          inputRange: [height / 2, height],
          outputRange: [0, 70 + bottom],
        }),
        opacity: playlistAnim.interpolate({
          inputRange: [height / 2, height],
          outputRange: [0, 1],
        }),
        backgroundColor: '#555',
        borderTopRightRadius: 8,
        borderTopLeftRadius: 8,
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 70,
        }}>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>다음 트랙</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white'}}>가사</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: 'white'}}>관련 항목</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

export default PlaylistFullBottom;
