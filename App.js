import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Settings from './screens/Settings';
import CardScreen from './screens/CardScreen';
import RomanticOrientation from './screens/RomanticOrientation';
import Profile from './screens/Profile';

const RootDrawer = createDrawerNavigator({
  Home: {
    screen: CardScreen
  },
  Profile:{
    screen: Profile
  },
  Settings: {
    screen: Settings
  },
  RomanticOrientation: {
    screen: RomanticOrientation
  },
});

const App = createAppContainer(RootDrawer);

export default App;