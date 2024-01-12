import {Animated, Image, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const IconItem = ({name}: {name: string}): JSX.Element => {
  return (
    <TouchableOpacity>
      <View
        style={{
          height: 40,
          width: 40,
          marginHorizontal: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialIcons name={name} size={22} color={'white'} />
      </View>
    </TouchableOpacity>
  );
};

const LogoHeader = ({
  headerAnim,
}: {
  headerAnim: Animated.Value;
}): JSX.Element => {
  return (
    <SafeAreaView edges={['top']}>
      <Animated.View
        style={{
          marginTop: headerAnim.interpolate({
            inputRange: [-40, 0, 100],
            outputRange: [0, 0, -45],
          }),
          opacity: headerAnim.interpolate({
            inputRange: [-40, 0, 20],
            outputRange: [1, 1, 0],
          }),
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 14,
            marginRight: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../../assets/logo.png')}
            resizeMode="contain"
            style={{width: 90, height: 30}}
          />
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <IconItem name={'cast'} />
            <IconItem name={'search'} />
            <TouchableOpacity>
              <View
                style={{
                  height: 40,
                  width: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    height: 30,
                    width: 30,
                    backgroundColor: '#555',
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <IconItem name={'perm-identity'} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default LogoHeader;
