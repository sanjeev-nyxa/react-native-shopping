import React from "react";
import { View,Dimensions,StatusBar,StyleSheet,Image,Text, TextInputComponent, TextInput,Platform } from "react-native";
import { SearchBar } from 'react-native-elements';


let deviceWidth = Dimensions.get('window').width;
let deviceHeight = Dimensions.get('window').height;
import NavigationBar from 'react-native-navbar-color';
import Example from "../loadmore";

const logo=require('../assets/img/ic_user.png');
const ic_search=require('../assets/img/search.png');
import Tab  from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/AntDesign'
import Icond from 'react-native-vector-icons/Ionicons'
import { Appbar, BottomNavigation } from 'react-native-paper';


const MusicRoute = () => <Example></Example>;
const AlbumRoute = () => <Example></Example>;
const RecentsRoute = () => <Example></Example>;
const logoDollorive_active = require('../assets/img/dolar_active.png')
const logoDollorive_inactive = require('../assets/img/dollar_inactive.png')
const more = require('../assets/img/ic_more.png')
const more_blue = require('../assets/img/ic_more_blue.png')
class HomeScreenPage extends React.Component {

   //Constructor having value 
  constructor(props) {
    super(props);

    this.state = {
    search:'',
    index: 0 ,
   routes: [
    { key: 'music', title: 'Favourites', icon: props => <Icon name="hearto" size={24} color={this.state.index===0?"#638CB6":"#E8E8E8"} />, color:'#3F51B5' },
    { key: 'music', title: 'Featured', icon: props => <Icon name="staro" size={25} color={this.state.index===1?"#638CB6":"#E8E8E8"} />, color:'#3F51B5' },
    { key: 'music', title: 'Coupons', icon: props => <Image style={{height:25,width:25}} source={this.state.index===2?logoDollorive_active:logoDollorive_inactive} />, color:'#3F51B5' },
    { key: 'music', title: 'Categories', icon: props => <Icond name="ios-options" size={20} color={this.state.index===3?"#638CB6":"#E8E8E8"} />, color:'#3F51B5' },
    { key: 'music', title: 'More', icon: props => <Image style={{height:25,width:25}} source={this.state.index===4?more_blue:more} />, color:'#3F51B5' },
  
  ],
    }
    
  }  

  _handleIndexChange = index => this.setState({ index });
  _renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumRoute,
    recents: RecentsRoute,
    music: MusicRoute,
    albums: AlbumRoute,
  
  });
   


     //Android Bottom Status Bar Color Changer 
  componentDidMount() { 
   
    }


    //Setting Toolbar Visibility Gone
  static navigationOptions = {
       header: null ,
    };
    
    
  



    //Styling Constant ;
  render() {

     const {navigate} = this.props.navigation; //Initialize navigate object for going one page to another 
     const {search} = this.state;
  return (
    <View style={styles.container}>
             
            

      
 <StatusBar translucent backgroundColor="#3A76B3"
    barStyle="light-content"  />
  
    <View style={styles.toolbar}>
    <View style={styles.toolbar_view}>
    <Text style={styles.tool_left_text}>589,497 LBS CAPTURED</Text>
    </View>
     <Text style={styles.titleLogo}>SHOP</Text>
     <View style={styles.toolbar_view_right}>
         <Image style={styles.img_style} source={logo}></Image>


     </View>
</View>

<View style={{width:'100%',height:'8%',backgroundColor:'#EDEDED',borderBottomWidth:2,borderBottomColor:'#C4C4C4',justifyContent:"center",alignItems:"center"}}>
{/* <View style={{,backgroundColor:'#fff',justifyContent:"center",alignItems:"center",borderRadius:4,flexDirection:"row"}}>


</View> */}
<View style={{ backgroundColor:'#fff',justifyContent:"center",alignItems:"center",borderRadius:4,flexDirection:"row",width:'95%',height:45}}>
<Image style={{width:18,height:18,marginBottom:Platform.OS === 'android'?2:0}} source={ic_search}></Image>
<TextInput placeholder="Search" style={{fontSize:21,color:'#8C8C8C',paddingTop:Platform.OS === 'android'?10:0,backgroundColor:'white',paddingLeft:Platform.OS === 'android'?0:5}} spellCheck={false}
 autoCorrect={false} underlineColorAndroid='white'  textAlign={'center'}></TextInput>
</View>
</View>

<BottomNavigation
          navigationState={this.state}
          onIndexChange={this._handleIndexChange}
          renderScene={this._renderScene}
          style={{backgroundColor:"#323232"}}
          activeColor="#638CB6"
          shifting={false}
          labeled={true}
          barStyle={{backgroundColor:"#323232"}}
        />


</View>
);
    


}
componentDidMount() {
  NavigationBar.setColor('#3A76B3')
  
}

}  


const styles = StyleSheet.create({
 
    container: {
      flex: 1,
      width:'100%',
      height:'100%',
   backgroundColor:"#3A76B3",
   justifyContent:"center"
    },toolbar:{
    width:'100%',
    height:'8%',
    marginTop:Platform.OS === 'android'?20:40,
    backgroundColor:'#3A76B3',
    flexDirection:"row",justifyContent: "center",alignItems: "center"
    },
    titleLogo:{
    fontSize:30,
    fontFamily:Platform.OS === 'android'?"libelsuit":'Libel Suit',
    width:'20%',
    height:'100%',
    marginBottom:Platform.OS === 'android'?10:0,
    color:'#ffffff',
     marginTop:10,
    fontWeight:"900",
    marginLeft:5,

    textAlign: "center",
    alignItems:"center",
    justifyContent:"center"
    },toolbar_view:{
     width:"40%",height:'100%',alignItems:"center",justifyContent:"center"
    },toolbar_view_right:{
    width:"40%",height:'100%',justifyContent: 'flex-end',
    alignItems: 'center',flexDirection:"row"
    },tool_left_text:{
    fontSize:20,
    fontFamily:Platform.OS === 'android'?"libelsuit":'Libel Suit',
    padding:5,

    height:'50%',
    borderColor:'#ffffff',
    borderWidth:1,
    borderRadius:2,
    marginBottom:Platform.OS === 'android'?5:0,

    backgroundColor:'#618EBC',

    color:'#ffffff',
    textAlignVertical: "center",
    textAlign: "center",
    alignItems:"center",
    justifyContent:"center"
        
    },img_style:{
    width:30,
    height:30,
    alignItems:"flex-end",
    justifyContent:"flex-end",
    marginRight:15,
    marginBottom:Platform.OS === 'android'?5:0,
    },  bottomNavigation: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 60
      }
   
  });

export default HomeScreenPage;
