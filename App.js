import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home';
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
  RomanticOrientation: {
    screen: RomanticOrientation
  },
  Settings: {
    screen: Settings
  },
});

const App = createAppContainer(RootDrawer);

export default App;