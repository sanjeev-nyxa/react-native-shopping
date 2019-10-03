import React, { PureComponent } from 'react'
import { StyleSheet, View, Alert, TouchableOpacity, Image, TouchableHighlight, Dimensions } from 'react-native'
import { Button, ListItem, Left, Right, Body, Thumbnail, Text, Icon } from 'native-base'
import styles from '../styles'

const logo = require('../../assets/img/ic_heart.png')
const logoDollor = require('../../assets/img/logoDollar.png')

const { width, height } = Dimensions.get('window')
export default class Example extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const rowID = this.props.index
    const rowData = this.props.item
    return (
      <TouchableOpacity onPress={() => this.props.onPress('GridView', rowID, rowData)}>
        <View style={{ margin: 0.5, width: width / 3, paddingBottom: 15 }}>
        <View style={{paddingBottom: 5 ,paddingTop:5,borderWidth:1,borderColor:'#CCCCCC',marginLeft:5,marginRight:5,marginBottom:5}}>
        <Thumbnail square source={logo} style={{width:20,height:15,marginLeft:10,resizeMode:"contain"}} />
        
          <Thumbnail square source={{uri: rowData.image}} style={styles.gridThumbThree} />
          <Text style={styles.gridText}>{rowData.per_weight}</Text>
          <Text style={styles.gridTextFont}>{rowData.weight}</Text>
          <View style={{alignSelf:"stretch",justifyContent:"flex-end",alignItems:"flex-end",marginTop:6}}>
                <Thumbnail square source={logoDollor} style={{width:20,height:20,marginRight:20,resizeMode:"contain",justifyContent:"flex-end",alignContent:"flex-end"}} />
          </View>
        </View>
        </View>
      </TouchableOpacity>
    )
  }
}
