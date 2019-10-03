import React, { PureComponent } from 'react'
import { StyleSheet, View, Alert, TouchableOpacity, Image, TouchableHighlight } from 'react-native'
import { Button, ListItem, Left, Right, Body, Thumbnail, Text, Icon } from 'native-base'
import styles from '../styles'

const logo = require('../../assets/img/ic_heart.png')
const logoDollor = require('../../assets/img/logoDollar.png')

export default class Example extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const rowID = this.props.index
    const rowData = this.props.item
    return (
      <View style={{borderWidth:1,borderColor:'#CCCCCC',marginLeft:5,marginRight:5,marginBottom:5}}>
      <ListItem thumbnail>
        <View style={{width:'100%',height:80,flexDirection:'row',justifyContent:"center",alignItems:"center",marginLeft:10}}>
        
        
          <Thumbnail  square source={{uri: rowData.image}} style={styles.gridThumbList}></Thumbnail>
       
        <View style={{ borderBottomWidth: 0,width:100,marginTop:-10 }}>
        <Text style={styles.gridTextList}>{rowData.per_weight}</Text>
          <Text style={styles.gridTextListBold}>{rowData.weight}</Text>
        </View>
        <Right style={{ borderBottomWidth: 0,flexDirection:"row-reverse",justifyContent:'flex-start',alignItems:'flex-start' }}>
       
          <View style={styles.rightBtnGroup}>
            <Button
              small
              transparent
              title="view"
              onPress={() => this.props.onPress('chat', '', '')}
              style={styles.rightBtn}
            >
          <Thumbnail square source={logo}  style={{width:20,height:20,resizeMode:"contain",justifyContent:'flex-start'}} />
          
            </Button>
           
            
            <Button
              small
              transparent
              title="view"
              onPress={() => this.props.onPress('chat', '', '')}
              style={styles.rightBtn2}
            >
          <Thumbnail square source={logoDollor} style={{width:20,height:20,marginLeft:0,marginTop:10,resizeMode:"contain"}} />
        
            </Button>
         
            
            
          </View>
         
        </Right>
        </View>
      </ListItem>
      
      </View>
    )
  }
}
