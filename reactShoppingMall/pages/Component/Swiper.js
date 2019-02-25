import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
const { width } = Dimensions.get('window');
const loading = require('../../assets/images/icons/Spinner.gif');

const styles = {
  wrapper: {
    width:width,
    height:250,
  },

  slide: {
    height:100,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  image: {
    width:width,
    flex: 1,
    backgroundColor: 'transparent'
  },

  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },

  loadingImage: {
    width: 60,
    height: 60
  }
}

const Slide = props => {
  return (<View style={styles.slide}>
    <Image onLoad={props.loadHandle.bind(null, props.i)} style={styles.image} source={{uri: props.uri}} />
    {
      !props.loaded && <View style={styles.loadingView}>
        <Image style={styles.loadingImage} source={loading} />
      </View>
    }
  </View>)
}

export default class extends Component {
  constructor (props) {
    super(props)
    this.state = {
      imgList: [
        'https://s3.ap-northeast-2.amazonaws.com/productinfo-milky/main_panel_02.jpg',
        'https://s3.ap-northeast-2.amazonaws.com/productinfo-milky/main_panel_05.jpg',

      ],
      loadQueue: [0, 0]
    }
    this.loadHandle = this.loadHandle.bind(this)
  }
  loadHandle (i) {
    let loadQueue = this.state.loadQueue
    loadQueue[i] = 1
    this.setState({
      loadQueue
    })
  }
  render () {
    return (
      <View style={{flex: 1}}>
        <Swiper autoplay={true} autoplayTimeout={5}  style={styles.wrapper} loop={false}>
          {
            this.state.imgList.map((item, i) => <Slide
              loadHandle={this.loadHandle}
              loaded={!!this.state.loadQueue[i]}
              uri={item}
              i={i}
              key={i} />)
          }
        </Swiper>
        {/* <View>
          <Text>Current Loaded Images: {this.state.loadQueue}</Text>
        </View> */}
      </View>
    )
  }
}