import {Animated, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BackgroundHeader = ({
  headerBgAnim,
  selectedCategory,
}: {
  headerBgAnim: Animated.Value;
  selectedCategory?: number;
}): JSX.Element => {
  return (
    <Animated.View
      style={{
        position: 'absolute',
        height: 350,
        width: '100%',
        top: headerBgAnim.interpolate({
          inputRange: [-1, 0, 100],
          outputRange: [0, 0, -100],
        }),
        opacity: headerBgAnim.interpolate({
          inputRange: [0, 100],
          outputRange: [1, 0],
        }),
      }}>
      {selectedCategory === undefined ? (
        <LinearGradient
          style={{height: 350, opacity: 0.4}}
          start={{x: 0.7, y: 0.25}}
          end={{x: 0.5, y: 1.0}}
          locations={[0, 0.12, 0.45, 0.8, 1]}
          colors={[
            '#ff260080',
            '#dbe52740',
            '#07412e50',
            '#11111190',
            '#111111',
          ]}
        />
      ) : (
        <>
          <Image
            style={{width: '100%', height: 350}}
            source={{uri: `https://picsum.photos/30${selectedCategory}`}}
          />
          <LinearGradient
            style={{
              position: 'absolute',
              height: 350,
              width: '100%',
            }}
            start={{x: 0.5, y: 0.1}}
            end={{x: 0.5, y: 1}}
            locations={[0, 1]}
            colors={['#11111100', '#111111']}
          />
        </>
      )}
    </Animated.View>
  );
};

export default BackgroundHeader;
