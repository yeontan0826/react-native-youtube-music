import {useRef} from 'react';
import {Image, ScrollView, Text, View, useWindowDimensions} from 'react-native';
import {faker} from '@faker-js/faker';
import Entypo from 'react-native-vector-icons/Entypo';

const Title = (): JSX.Element => {
  return (
    <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
      <Text style={{fontWeight: '200', color: 'white'}}>
        이 노래로 뮤직 스테이션 시작하기
      </Text>
      <Text style={{fontSize: 28, fontWeight: 'bold', color: 'white'}}>
        빠른 선곡
      </Text>
    </View>
  );
};

const MusicListItem = (): JSX.Element => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 14,
      }}>
      <View style={{flexDirection: 'row', flex: 1, flexShrink: 0}}>
        <Image
          style={{width: 50, height: 50, borderRadius: 4}}
          source={{
            uri: `https://picsum.photos/8${Math.floor(Math.random() * 10)}`,
          }}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            marginLeft: 14,
          }}>
          <Text style={{color: 'white', fontSize: 12, marginBottom: 6}}>
            {faker.music.genre()}
          </Text>
          <Text style={{color: 'white'}} numberOfLines={1} ellipsizeMode="tail">
            {faker.music.songName()}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexShrink: 1,
          marginRight: 8,
          padding: 10,
        }}>
        <Entypo name="dots-three-vertical" color={'white'} size={16} />
      </View>
    </View>
  );
};

const MusicListSmall = (): JSX.Element => {
  const {width} = useWindowDimensions();
  const scrollRef = useRef<ScrollView>(null);
  const scrollStartRef = useRef<number>(0);
  const pageRef = useRef<number>(1);

  return (
    <View>
      <Title />
      <ScrollView
        ref={scrollRef}
        contentContainerStyle={{paddingHorizontal: 20}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        onScrollBeginDrag={e => {
          const x = e.nativeEvent.contentOffset.x;
          scrollStartRef.current = x;
        }}
        onScrollEndDrag={e => {
          const x = e.nativeEvent.contentOffset.x;
          const dx = x - scrollStartRef.current;

          // 오른쪽 페이지로 붙는 애니메이션
          if (width / 4 < dx && pageRef.current !== 3) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * pageRef.current,
              animated: true,
            });

            pageRef.current += 1;
          }

          if (dx > 0 && dx < width / 4) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * (pageRef.current - 1),
              animated: true,
            });
          }

          // 왼쪽 페이지로 붙는 애니메이션
          if (dx < -width / 4 && pageRef.current !== 1) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * (pageRef.current - 2),
              animated: true,
            });

            pageRef.current -= 1;
          }

          if (dx > -width / 4 && dx < 0) {
            scrollRef.current?.scrollTo({
              x: width * 0.92 * (pageRef.current - 1),
              animated: true,
            });
          }
        }}>
        {[...Array(3)].map((value, index) => {
          return (
            <View key={`small-section-${index}`} style={{width: width * 0.92}}>
              {[...Array(4)].map((value, index) => (
                <MusicListItem key={String(index)} />
              ))}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
export default MusicListSmall;
