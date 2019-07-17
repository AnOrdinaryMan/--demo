import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Input } from '@tarojs/components'
import './index.scss'

import icon_1 from './assets/icon_1.jpg'
import icon_2 from './assets/icon_2.jpg'

export default class Search extends Component {

    render () {
        return (
            <View className='search'>
                <View className='img-view' onClick={this.props.changeList}>
                    <Image className='img' src={this.props.isList ? icon_2 : icon_1} />
                </View>
                <View className='input-view'>
                    <View className='input'>
                        <Input className='card-input' type='text' placeholder='想要什么卡？' />
                    </View>
                </View>
                <View className='button-view' onClick={this.props.onClick}>
                    <Text>
                        查询
                    </Text>
                </View>
            </View>
        )
    }
}