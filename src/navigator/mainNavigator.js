import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen78818Navigator from '../features/BlankScreen78818/navigator';
import CalendarView28817Navigator from '../features/CalendarView28817/navigator';
import BlankScreen68816Navigator from '../features/BlankScreen68816/navigator';
import BlankScreen38740Navigator from '../features/BlankScreen38740/navigator';
import BlankScreen28739Navigator from '../features/BlankScreen28739/navigator';
import BlankScreen18738Navigator from '../features/BlankScreen18738/navigator';
import BlankScreen38729Navigator from '../features/BlankScreen38729/navigator';
import BlankScreen28728Navigator from '../features/BlankScreen28728/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen78818: { screen: BlankScreen78818Navigator },
CalendarView28817: { screen: CalendarView28817Navigator },
BlankScreen68816: { screen: BlankScreen68816Navigator },
BlankScreen38740: { screen: BlankScreen38740Navigator },
BlankScreen28739: { screen: BlankScreen28739Navigator },
BlankScreen18738: { screen: BlankScreen18738Navigator },
BlankScreen38729: { screen: BlankScreen38729Navigator },
BlankScreen28728: { screen: BlankScreen28728Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
