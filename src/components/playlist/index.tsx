import {useRef} from 'react';
import {
  Animated,
  Image,
  PanResponder,
  View,
  useWindowDimensions,
} from 'react-native';

import PlayListMini from './mini';
import PlaylistFullTop from './full/top';
import PlaylistFullBottom from './full/bottom';
import PlaylistFullMiddle from './full/middle';

const Playlist = ({
  playlistAnim,
}: {
  playlistAnim: Animated.Value;
}): JSX.Element => {
  const {height, width} = useWindowDimensions();

  const playlistRef = useRef<'mini' | 'full'>('mini');

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        const {dy} = gestureState;

        if (playlistRef.current === 'mini' && dy < 0) {
          playlistAnim.setValue(-dy);
        }

        if (playlistRef.current === 'full' && dy > 0) {
          playlistAnim.setValue(height - dy);
        }
      },
      onPanResponderEnd: (_, gestureState) => {
        const {dy} = gestureState;

        // 위로 스크롤할때
        if (dy < -100 && playlistRef.current === 'mini') {
          Animated.spring(playlistAnim, {
            toValue: height,
            useNativeDriver: false,
          }).start();

          playlistRef.current = 'full';
        }

        if (dy > -100 && playlistRef.current === 'mini') {
          Animated.spring(playlistAnim, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }

        // 아래로 스크롤할때
        if (dy > 100 && playlistRef.current === 'full') {
          Animated.spring(playlistAnim, {
            toValue: 0,
            useNativeDriver: false,
          }).start();

          playlistRef.current = 'mini';
        }

        if (dy < 100 && playlistRef.current === 'full') {
          Animated.spring(playlistAnim, {
            toValue: height,
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={{
        flexDirection: 'row',
        height: playlistAnim.interpolate({
          inputRange: [0, 100],
          outputRange: [60, 160],
        }),
        alignItems: 'center',
        marginTop: playlistAnim.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [0, -220, -220],
        }),
        paddingLeft: playlistAnim.interpolate({
          inputRange: [0, height / 2, height],
          outputRange: [10, width * 0.1, width * 0.1],
        }),
        backgroundColor: '#333',
        borderBottomColor: '#666',
      }}>
      <View>
        {/* Full Top */}
        <PlaylistFullTop playlistAnim={playlistAnim} />
        {/* Music Image */}
        <Animated.View
          style={{
            height: playlistAnim.interpolate({
              inputRange: [0, height / 2, height],
              outputRange: [50, width * 0.8, width * 0.8],
            }),
            aspectRatio: 1,
          }}>
          <Image
            source={{uri: 'https://picsum.photos/500'}}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: 4,
            }}
          />
        </Animated.View>
        {/* Full Middle */}
        <PlaylistFullMiddle playlistAnim={playlistAnim} />
      </View>
      {/* Full Bottom */}
      <PlaylistFullBottom playlistAnim={playlistAnim} />
      {/* Playlist Midi */}
      <Animated.View
        style={{
          flex: 1,
          opacity: playlistAnim.interpolate({
            inputRange: [0, height / 2],
            outputRange: [1, 0],
          }),
        }}>
        <PlayListMini />
      </Animated.View>
    </Animated.View>
  );
};

export default Playlist;
