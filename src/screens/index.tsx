import {useRef, useState} from 'react';
import {ScrollView, View, Animated} from 'react-native';

import {useYoutubeMusic} from '../hooks/useYoutubeMusic';
import CategoryHeader from '../components/header/category';
import BackgroundHeader from '../components/header/background';
import LogoHeader from '../components/header/logo';
import Bottom from '../components/bottom';
import MusicListSmall from '../components/musicList/small';
import MusicListMedium from '../components/musicList/medium';
import MusicListLarge from '../components/musicList/large';
import Playlist from '../components/playlist';

const YoutubeMusicScreen = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<number>();
  const {
    onScrollBeginDrag,
    onScroll,
    onScrollEndDrag,
    headerAnim,
    headerBgAnim,
  } = useYoutubeMusic();
  const playlistAnim = useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1, backgroundColor: '#111'}}>
      <BackgroundHeader
        headerBgAnim={headerBgAnim}
        selectedCategory={selectedCategory}
      />
      <LogoHeader headerAnim={headerAnim} />
      <CategoryHeader
        headerAnim={headerAnim}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
        onScrollBeginDrag={onScrollBeginDrag}
        onScroll={onScroll}
        onScrollEndDrag={onScrollEndDrag}>
        <View style={{marginBottom: 24}}>
          <MusicListSmall />
          <MusicListMedium />
          <MusicListLarge />
        </View>
      </ScrollView>
      <Playlist playlistAnim={playlistAnim} />
      <Bottom playlistAnim={playlistAnim} />
    </View>
  );
};

export default YoutubeMusicScreen;
