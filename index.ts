import {Navigation} from 'react-native-navigation';
import {Platform, UIManager} from 'react-native';

import rootNavigation from './src/navigation';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

Navigation.events().registerAppLaunchedListener(rootNavigation);
