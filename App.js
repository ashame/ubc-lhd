import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import CardScreen from './screens/CardScreen';

const RootDrawer = createDrawerNavigator({
  Settings: {
    screen: Settings
  },
  Home: {
    screen: Home
  },
  Cards: {
    screen: CardScreen
  },
  Profile: {
    screen: Profile
  },
});

const App = createAppContainer(RootDrawer);

export default App;