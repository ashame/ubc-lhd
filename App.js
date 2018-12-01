import { createDrawerNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './components/screens/HomeScreen';
import Profile from './components/screens/Profile';
import Messages from './components/screens/Messages';

const RootDrawer = createDrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Profile: {
    screen: Profile
  },
  Messages: {
    screen: Messages
  }
});

const App = createAppContainer(RootDrawer);

export default App;