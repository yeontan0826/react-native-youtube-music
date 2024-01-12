import {
  Animated,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {BOTTOM_HEIGHT} from '../../utils';

const BottomItem = ({name, title}): JSX.Element => {
  return (
    <TouchableOpacity style={{flex: 1, alignItems: 'center'}}>
      <View style={{marginVertical: 4}}>
        <MaterialIcons name={name} color={'white'} size={30} />
      </View>
      <Text style={{fontSize: 12, color: 'white'}}>{title}</Text>
    </TouchableOpacity>
  );
};

const Bottom = ({
  playlistAnim,
}: {
  playlistAnim: Animated.Value;
}): JSX.Element => {
  const {height} = useWindowDimensions();
  const {bottom} = useSafeAreaInsets();

  return (
    <Animated.View
      style={{
        marginBottom: playlistAnim.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [0, -BOTTOM_HEIGHT - bottom, -BOTTOM_HEIGHT - bottom],
        }),
      }}>
      <View style={{paddingBottom: bottom, backgroundColor: '#222'}}>
        <View style={{height: BOTTOM_HEIGHT}}>
          <View style={{flexDirection: 'row'}}>
            <BottomItem name={'home-filled'} title={'홈'} />
            <BottomItem name={'explore'} title={'둘러보기'} />
            <BottomItem name={'library-music'} title={'보관함'} />
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default Bottom;
