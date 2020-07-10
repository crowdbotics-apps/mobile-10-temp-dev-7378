import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen28739Navigator from '../features/BlankScreen28739/navigator';
import BlankScreen18738Navigator from '../features/BlankScreen18738/navigator';
import BlankScreen38729Navigator from '../features/BlankScreen38729/navigator';
import BlankScreen28728Navigator from '../features/BlankScreen28728/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
