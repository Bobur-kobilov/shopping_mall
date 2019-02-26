import  React,{Component} from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet,Dimensions } from 'react-native';
import { TabView, SceneMap, NavigationState } from 'react-native-tab-view';
import ProductList from './ProductList';
import { human } from 'react-native-typography'
import Swiper from '../Component/Swiper';
import Animated from 'react-native-reanimated';
const Clothes = () => (
  // <View style={[styles.scene, { backgroundColor: '#673ab7' }]} />
  <ProductList/>
);
const Electronics = () => (
  <ProductList/>
  // <View style={[styles.scene, { backgroundColor: 'red' }]} />
);
export default class TabViewExample extends Component {
  componentDidMount() {
    
  }
  Popular = () => (
    <View>
      <Swiper/>
      <ProductList navigation={this.props.navigation}/>
    </View>
   
    // <View style={[styles.scene, { backgroundColor: '#ff4081' }]} />
  );
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'Popular' },
      { key: 'second', title: 'Clothes' },
      { key: 'third', title: 'Electronics' },
    ],
  };
  _renderItem = ({ navigationState, position }) => ({ route, index }) => {
    const inputRange = navigationState.routes.map((x, i) => i);

    const activeOpacity = Animated.interpolate(position, {
      inputRange,
      outputRange: inputRange.map(i => (i === index ? 1 : 0)),
    });
    const inactiveOpacity = Animated.interpolate(position, {
      inputRange,
      outputRange: inputRange.map(i => (i === index ? 0 : 1)),
    });

    return (
      <View style={styles.tab}>
        <Animated.View style={[styles.item, { opacity: inactiveOpacity }]}>
          <Text style={[styles.label, styles.inactive,human.headline]}>{route.title}</Text>
        </Animated.View>
        <Animated.View
          style={[styles.item, styles.activeItem, { opacity: activeOpacity }]}
        >
          <Text style={[styles.label, styles.active]}>{route.title}</Text>
        </Animated.View>
      </View>
    );
  };
  _renderTabBar = props => (
    <View style={styles.tabbar}>
      {props.navigationState.routes.map((route, index) => {
        return (
          <TouchableWithoutFeedback
            key={route.key}
            onPress={() => props.jumpTo(route.key)}
          >
            {this._renderItem(props)({ route, index })}
          </TouchableWithoutFeedback>
        );
      })}
    </View>
  );
  render() {
    return (
      <View>
      <TabView
        navigationState={this.state}
        renderScene={SceneMap({
          first: this.Popular,
          second: Clothes,
          third:Electronics
        })}
        renderTabBar={this._renderTabBar}
        onIndexChange={index => this.setState({ index })}
        initialLayout={{ width: Dimensions.get('window').width }}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0, 0, 0, .2)',
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4.5,
  },
  activeItem: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  active: {
    color: '#409ed2',
  },
  inactive: {
    color: '#939393',
  },
  label: {
    fontSize: 18,
    marginTop: 3,
    marginBottom: 1.5,
    backgroundColor: 'transparent',
  },
});
