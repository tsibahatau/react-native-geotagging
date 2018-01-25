import { StackNavigator } from 'react-navigation';
import MapScreen from '../screens/MapScreen';


const AppNavigator = StackNavigator({
    Map: { screen: MapScreen}
}); 

export default AppNavigator;