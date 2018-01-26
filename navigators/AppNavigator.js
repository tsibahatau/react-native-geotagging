import { StackNavigator } from 'react-navigation';
import MapScreen from '../screens/MapScreen';
import ListScreen from '../screens/ListScreen'
import LocationScreen from '../screens/LocationScreen'

const AppNavigator = StackNavigator({
    Map: { screen: MapScreen },
    List: { screen: ListScreen },
    Location: { screen: LocationScreen }
}); 

export default AppNavigator;