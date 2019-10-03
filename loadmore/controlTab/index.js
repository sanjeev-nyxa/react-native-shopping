import React from 'react'
import { Platform, SegmentedControlIOS,TouchableOpacity,Image } from 'react-native'
import { Button, Text, View } from 'native-base'

const ic_column_three=require('../../assets/img/ic_column_three.png');
const ic_column_three_blue=require('../../assets/img/ic_column_three_blue.png');
const ic_column_two=require('../../assets/img/ic_column_two.png');
const ic_column_two_blue=require('../../assets/img/ic_column_two_blue.png');
const ic_list=require('../../assets/img/ic_list.png');
const ic_list_blue=require('../../assets/img/ic_list_blue.png');
export default (props) => {
  this.props = props

  
  return (
    <View style={{
      flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
    }}
    >
   
      <View
        title="grid"
        small
        light={this.props.layout !== 'grid'}
        onPress={() => this.props.onChangeLayout({ nativeEvent: { selectedSegmentIndex: 1 } })}
        style={{
          width: 50,
          justifyContent: 'center',
         
        }}
      >
             <TouchableOpacity   onPress={() => this.props.onChangeLayout({ nativeEvent: { selectedSegmentIndex: 1 } })}>
    <Image style={{height:40,width:40,resizeMode:"contain"}} source={this.props.layout === 'grid' ? ic_column_three_blue : ic_column_three} />
</TouchableOpacity>
      </View>
      <View
        title="gridTwo"
        small
        light={this.props.layout !== 'grid'}
        onPress={() => this.props.onChangeLayout({ nativeEvent: { selectedSegmentIndex: 1 } })}
        style={{
          width: 50,
          justifyContent: 'center',
         
        }}
      >
             <TouchableOpacity   onPress={() => this.props.onChangeLayout({ nativeEvent: { selectedSegmentIndex: 2 } })}>
    <Image style={{height:40,width:40,resizeMode:"contain"}} source={this.props.layout === 'gridTwo' ? ic_column_two_blue : ic_column_two} />
</TouchableOpacity>
      </View>
      <View
        title="list"
        small
        light={this.props.layout !== 'list'}
        onPress={() => this.props.onChangeLayout({ nativeEvent: { selectedSegmentIndex: 2 } })}
        style={{
          width: 50,
          justifyContent: 'center',
        
        }}
      >
        <TouchableOpacity   onPress={() => this.props.onChangeLayout({ nativeEvent: { selectedSegmentIndex: 0 } })}>
    <Image style={{height:35,width:35,resizeMode:"contain"}} source={this.props.layout === 'list' ? ic_list : ic_list_blue} />
</TouchableOpacity>
     
      </View>
    </View>
  )
}
