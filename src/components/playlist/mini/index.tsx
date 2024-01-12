import {faker} from '@faker-js/faker';
import {Text, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PlaylistMini = (): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{marginLeft: 14, flex: 1}}>
        <Text style={{color: '#999'}}>{faker.music.genre()}</Text>
        <Text style={{color: 'white'}} numberOfLines={2} ellipsizeMode="tail">
          {faker.music.songName()}
        </Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => console.log('play')}>
          <View
            style={{
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons name="play" size={24} color={'white'} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('skip-next')}>
          <View
            style={{
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <MaterialCommunityIcons
              name="skip-next"
              size={24}
              color={'white'}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PlaylistMini;
