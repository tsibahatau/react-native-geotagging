import { StackNavigator } from 'react-navigation';
import MapScreen from '../screens/MapScreen';
import ListScreen from '../screens/ListScreen'
import LocationScreen from '../screens/LocationScreen'
import AddLocationScreen from '../screens/AddLocationScreen'


const AppNavigator = StackNavigator({
    Map: { screen: MapScreen },
    List: { screen: ListScreen },
    Location: { screen: LocationScreen },
    AddLocation: { screen: AddLocationScreen }
}); 

export default AppNavigator;