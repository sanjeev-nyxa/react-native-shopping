import React, { Component } from 'react'
import { Alert, Dimensions, Platform, View,StyleSheet } from 'react-native'
import { Button, Header, Icon, Input, Item, Left, Right, Text } from 'native-base'
import { UltimateListView } from 'react-native-ultimate-listview'
// import { UltimateListView } from '../lib/index'
import styles from './styles'
import ControlTab from './controlTab'
import FlatListItem from './itemContainer/flatListItem'
import FlatListGrid from './itemContainer/flatListGrid'
import FlatListGridTwo from './itemContainer/flatlistGridTwo'
import { Dropdown } from 'react-native-material-dropdown';
 
const { width, height } = Dimensions.get('window')

const tmpArray = [
 
      { key:1, image: 'https://www.cyclegear.com/images/sites/cycle_gear/support/schema/logo-22bfee512d70bd00cb7ac4ed2a0e4b2f.png?vsn=d', weight: '10 LBS.',per_weight:'8 lbs./ $' },
      { key:2, image: 'https://image4.owler.com/logo/allposters_owler_20160226_214057_original.png', weight: '30 LBS.',per_weight:'30 lbs. / $' },
      { key:3, image: 'http://pictures.dealer.com/a/autobarnimportgroupcountryside/0908/c64faeb4358da89d6260b401ae4ebe0dx.jpg?impolicy=downsize&w=568', weight: '80 LBS.',per_weight:'112 lbs. / $' },
      { key:4, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Booking.com_logo.svg/1280px-Booking.com_logo.svg.png', weight: '11 LBS.',per_weight:'500 lbs. / $' },
      { key:5, image: 'https://i.pinimg.com/originals/26/2a/38/262a38ee2923c6f7ff137599aaa0d41f.png', weight: '43 LBS.',per_weight:'80-10 lbs. / 2$' },
      { key:6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4tKiBPYG-Dx6sBEx_DrxfeKvykyefeJvJGNS5obcXj6vGCfdw', weight: '200 LBS.',per_weight:'80 lbs. / 10$' },
      { key:1, image: 'https://www.cyclegear.com/images/sites/cycle_gear/support/schema/logo-22bfee512d70bd00cb7ac4ed2a0e4b2f.png?vsn=d', weight: '10 LBS.',per_weight:'8 lbs./ $' },
      { key:2, image: 'https://image4.owler.com/logo/allposters_owler_20160226_214057_original.png', weight: '30 LBS.',per_weight:'30 lbs. / $' },
      { key:3, image: 'http://pictures.dealer.com/a/autobarnimportgroupcountryside/0908/c64faeb4358da89d6260b401ae4ebe0dx.jpg?impolicy=downsize&w=568', weight: '80 LBS.',per_weight:'112 lbs. / $' },
      { key:4, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Booking.com_logo.svg/1280px-Booking.com_logo.svg.png', weight: '11 LBS.',per_weight:'500 lbs. / $' },
      { key:5, image: 'https://i.pinimg.com/originals/26/2a/38/262a38ee2923c6f7ff137599aaa0d41f.png', weight: '43 LBS.',per_weight:'80-10 lbs. / 2$' },
      { key:6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4tKiBPYG-Dx6sBEx_DrxfeKvykyefeJvJGNS5obcXj6vGCfdw', weight: '200 LBS.',per_weight:'80 lbs. / 10$' },
      { key:1, image: 'https://www.cyclegear.com/images/sites/cycle_gear/support/schema/logo-22bfee512d70bd00cb7ac4ed2a0e4b2f.png?vsn=d', weight: '10 LBS.',per_weight:'8 lbs./ $' },
      { key:2, image: 'https://image4.owler.com/logo/allposters_owler_20160226_214057_original.png', weight: '30 LBS.',per_weight:'30 lbs. / $' },
      { key:3, image: 'http://pictures.dealer.com/a/autobarnimportgroupcountryside/0908/c64faeb4358da89d6260b401ae4ebe0dx.jpg?impolicy=downsize&w=568', weight: '80 LBS.',per_weight:'112 lbs. / $' },
      { key:4, image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Booking.com_logo.svg/1280px-Booking.com_logo.svg.png', weight: '11 LBS.',per_weight:'500 lbs. / $' },
      { key:5, image: 'https://i.pinimg.com/originals/26/2a/38/262a38ee2923c6f7ff137599aaa0d41f.png', weight: '43 LBS.',per_weight:'80-10 lbs. / 2$' },
      { key:6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4tKiBPYG-Dx6sBEx_DrxfeKvykyefeJvJGNS5obcXj6vGCfdw', weight: '200 LBS.',per_weight:'80 lbs. / 10$' },
     
    ];

    let data = [{
      value: '100 lbs',
    }, {
      value: '200 lbs',
    }, {
      value: '300 lbs',
    }];
export default class Example extends Component {
  constructor(props) {
    super(props)
    this.state = {
      layout: 'gridTwo',
      text: '',data: "" ,
    }
  }

  onFetch = async (page = 1, startFetch, abortFetch) => {
    try {
      // This is required to determinate whether the first loading list is all loaded.
      let pageLimit = 10
     
      // Generate dummy data
     
      // Simulate the end of the list if there is no more data returned from the server
      

      // Simulate the network loading in ES7 syntax (async/await)
     
     
   
      await this.sleep(2000)
      
      startFetch(tmpArray, pageLimit)
    
    } catch (err) {
      abortFetch() // manually stop the refresh or pagination if it encounters network error
      console.log(err)
    }
  }

  onChangeLayout = (event) => {
    this.setState({ text: '' })
    switch (event.nativeEvent.selectedSegmentIndex) {
      case 0:
        this.setState({ layout: 'list' })
        break
      case 1:
        this.setState({ layout: 'grid' })
        break
        case 2:
          this.setState({ layout: 'gridTwo' })
          break
      default:
        break
    }
  }

  onChangeScrollToIndex = (num) => {
   
  }

  onPressItem = (type, index, item) => {
    
  }

  sleep = time => new Promise(resolve => setTimeout(() => resolve(), time))

  renderItem = (item, index, separator) => {
    if (this.state.layout === 'list') {
      return (
        <FlatListItem item={item} index={index} onPress={this.onPressItem} />
      )
    } else if (this.state.layout === 'grid') {
      return (
        <FlatListGrid item={item} index={index} onPress={this.onPressItem} />
      )
    } else if (this.state.layout === 'gridTwo') {
      return (
        <FlatListGridTwo item={item} index={index} onPress={this.onPressItem} />
      )
    }
    
    return null
  }
  
  renderControlTab = () => (
    
    <View></View>
  )

  renderHeader = () => (
    <View>
     
     <View style={styles.headerSegment}>
        <Left style={{ flex: 0.15 }} />
       
        <Right style={{ flex: 0.15 }} />
      </View>
    </View>
  )

  renderPaginationFetchingView = () => (
 <View></View>
  )

  render() {
    return (
      <View style={styles.container}>
       <View style={{width:'100%',flexDirection:"row",margin:10}}>
      <View style={{ width: '55%', }}>
      <Dropdown
        dropdownOffset={{top:10,left:20}}
        baseColor="#000"
        containerStyle={{borderWidth:1, borderColor:'#CCCCCC', borderRadius:5, width:'100%',height:45,paddingBottom:5}}
        rippleCentered={true}
        value="Pounds Captured"
        inputContainerStyle={{ borderBottomColor: 'transparent',paddingLeft:10,marginLeft:0,height:45 }}
        data={data}
       
        // set value from state if its set
        // or use default as first value from the data
       
      />
      </View>
      
    <ControlTab
      layout={this.state.layout}
      onChangeLayout={this.onChangeLayout}
      style={{width:'35%'}}

    />
    </View>
        <UltimateListView
          ref={ref => this.listView = ref}
          key={this.state.layout} // this is important to distinguish different FlatList, default is numColumns
          onFetch={this.onFetch}
          keyExtractor={(item, index) => `${index} - ${item}`} // this is required when you are using FlatList
       // basic or advanced

          item={this.renderItem} // this takes three params (item, index, separator)
          numColumns={this.state.layout === 'list' ? 1 : this.state.layout === 'gridTwo'?2:3} // to use grid layout, simply set gridColumn > 1

          // ----Extra Config----
        
         
         
          // sectionHeaderView={this.renderSectionHeaderView}   //not supported on FlatList
          // paginationFetchingView={this.renderPaginationFetchingView}
          // paginationAllLoadedView={this.renderPaginationAllLoadedView}
          // paginationWaitingView={this.renderPaginationWaitingView}
          // emptyView={this.renderEmptyView}
          // separator={this.renderSeparatorView}

          // new props on v3.2.0
          arrowImageStyle={{ width: 20, height: 20, resizeMode: 'contain' }}
          dateStyle={{ color: 'lightgray' }}
          refreshViewStyle={Platform.OS === 'ios' ? { height: 0, top: 0 } : { height: 0 }}
          refreshViewHeight={0}
        />
     
      </View>
    )
  }
}
const styles1 = StyleSheet.create({
  bottomNavigation: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 56
  }})
