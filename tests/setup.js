import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configure from '@commercetools/enzyme-extensions';
import ShallowWrapper from 'enzyme/ShallowWrapper';
import MockStorage from './__mocks__/MockStorage';
Enzyme.configure({
  adapter: new Adapter(),
});
global.self = {};

jest.autoMockOff();

jest.mock('react-navigation', () => {
  return {
    NavigationActions: jest.fn(),
    StackActions: jest.fn(),
  };
});

jest.mock('react-native-gesture-handler', () => {
  const View = require('react-native/Libraries/Components/View/View');
  return {
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    ScrollView: View,
    Slider: View,
    Switch: View,
    TextInput: View,
    ToolbarAndroid: View,
    ViewPagerAndroid: View,
    DrawerLayoutAndroid: View,
    WebView: View,
    NativeViewGestureHandler: View,
    TapGestureHandler: View,
    FlingGestureHandler: View,
    ForceTouchGestureHandler: View,
    LongPressGestureHandler: View,
    PanGestureHandler: View,
    PinchGestureHandler: View,
    RotationGestureHandler: View,
    /* Buttons */
    RawButton: View,
    BaseButton: View,
    RectButton: View,
    BorderlessButton: View,
    /* Other */
    FlatList: View,
    gestureHandlerRootHOC: jest.fn(),
    Directions: {},
  };
});

const storageCache = {};
const AsyncStorage = new MockStorage(storageCache);

// Mock Asyncstorage
jest.setMock('@react-native-community/async-storage', AsyncStorage);

jest.mock('react-native-reanimated', () => {
  return {
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    openURL: jest.fn(),
    canOpenURL: jest.fn(),
    getInitialURL: jest.fn(),
  };
});

jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

jest.mock(
  '../node_modules/react-native/Libraries/LayoutAnimation/LayoutAnimation.js',
);

configure(ShallowWrapper);
