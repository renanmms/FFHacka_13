import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { screen, Navigator} = createNativeStackNavigator();

import AddEvent from "../Screens/AddEvent";
import EventDetails from "../Screens/EventDetails";

export const StackNavigation = ()=>{
 return(
  <Navigator>
    <Screen name="AddEvent" component={AddEvent}/>
    <Screen name="EventDetails" component={EventDetails}/>
  </Navigator>
 )
}