import { NavigationContainer } from '@react-navigation/native';
import Auth from './components/Auth';
import Home from './components/Home';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Sidebar from './components/sidebar';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders'; 
import Chat from './components/Chat';
import MechanicProf from './components/Mechanic';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => <Sidebar {...props} />}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Orders" component={Orders} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Chat" component={Chat} />
        <Drawer.Screen name="Mechanic" component={MechanicProf} />
        <Drawer.Screen name="Authenticate" component={Auth} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;