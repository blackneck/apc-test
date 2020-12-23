import {Navigation} from 'react-native-navigation';

import rootNavigation from './src/navigation';

Navigation.events().registerAppLaunchedListener(rootNavigation);
