import {Image, ScrollView, Text, View, useWindowDimensions} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {faker} from '@faker-js/faker';

const Title = (): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 20,
      }}>
      <Text style={{fontSize: 28, fontWeight: 'bold', color: 'white'}}>
        다시듣기
      </Text>
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 4,
          borderRadius: 20,
          borderWidth: 1,
          borderColor: '#ddd',
        }}>
        <Text style={{fontSize: 12, color: 'white'}}>더보기</Text>
      </View>
    </View>
  );
};

const MusicListItem = ({width}: {width: number}): JSX.Element => {
  return (
    <View>
      <Image
        style={{width: width / 4, height: width / 4, borderRadius: 4}}
        source={{
          uri: `https://picsum.photos/22${Math.floor(Math.random() * 10)}`,
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: width / 4,
          height: width / 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <MaterialCommunityIcons name="play" size={28} color={'white'} />
      </View>
      <Text
        style={{
          height: 60,
          width: width / 4,
          marginTop: 5,
          fontSize: 12,
          color: 'white',
        }}
        numberOfLines={2}
        ellipsizeMode="tail">
        {faker.music.songName()}
      </Text>
    </View>
  );
};

const MusicListMedium = (): JSX.Element => {
  const {width} = useWindowDimensions();

  return (
    <View>
      <Title />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 10}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {[...Array(6)].map((value, index) => {
          return (
            <View key={String(index)} style={{marginRight: 20}}>
              <MusicListItem width={width} />
              <MusicListItem width={width} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default MusicListMedium;
