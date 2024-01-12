import {SafeAreaProvider} from 'react-native-safe-area-context';
import YoutubeMusicScreen from './src/screens';

const App = (): JSX.Element => {
  return (
    <SafeAreaProvider>
      <YoutubeMusicScreen />
    </SafeAreaProvider>
  );
};

export default App;
