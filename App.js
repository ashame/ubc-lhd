import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home';
import Settings from './screens/Settings';
import CardScreen from './screens/CardScreen';
import RomanticOrientation from './screens/RomanticOrientation';
import Profile from './screens/Profile';

const RootDrawer = createDrawerNavigator({
  Settings: {
    screen: Settings
  },
  Home: {
    screen: Home
  },
  Profile:{
    screen: Profile
  },
  Cards: {
    screen: CardScreen
  },
  RomanticOrientation: {
    screen: RomanticOrientation
  },
});

const App = createAppContainer(RootDrawer);

export default App;