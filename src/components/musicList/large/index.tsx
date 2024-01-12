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
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            marginRight: 10,
            padding: 2,
            borderWidth: 1,
            borderColor: '#fefefe',
            borderRadius: 20,
          }}>
          <MaterialCommunityIcons name="rewind" size={24} color={'#fefefe'} />
        </View>
        <Text style={{fontSize: 28, fontWeight: 'bold', color: 'white'}}>
          돌아보기
        </Text>
      </View>
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
        style={{width: width / 2.5, height: width / 2.5, borderRadius: 4}}
        source={{
          uri: `https://picsum.photos/25${Math.floor(Math.random() * 10)}`,
        }}
      />
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

const MusicListLarge = (): JSX.Element => {
  const {width} = useWindowDimensions();

  return (
    <View>
      <Title />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: 10}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {[...Array(8)].map((value, index) => {
          return (
            <View key={String(index)} style={{marginRight: 20}}>
              <MusicListItem width={width} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default MusicListLarge;
