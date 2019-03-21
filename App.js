import Main from './componenets/Main';
import Chat from './componenets/Chat';
import {createStackNavigator, createAppContainer} from 'react-navigation';
// Create the navigator

const AppNavigator = createStackNavigator({
  Main: { 
    screen: Main,
    navigationOptions: {
      //header: null,
      //navigationBar: null
    },
  },
  Chat: { 
    screen: Chat, 
    navigationOptions: {
     // header: null,
      //navigationBar: null
    },
  },
});

const App = createAppContainer(AppNavigator);

export default App;