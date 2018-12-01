import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Messages from './screens/Messages';
import Settings from './screens/Settings';

const RootDrawer = createDrawerNavigator({
  Home: {
    screen: Home
  },
  Profile: {
    screen: Profile
  },
  Messages: {
    screen: Messages
  },
  Settings: {
    screen: Settings
  },
});

const App = createAppContainer(RootDrawer);

export default App;