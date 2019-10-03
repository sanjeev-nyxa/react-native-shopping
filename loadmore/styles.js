import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default {
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  header: {
    width,
    height: 0,
    padding: 20,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
    backgroundColor: 'whitesmoke'
  },
  headerSegment: {
    width,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  row: {
    flex: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    shadowOffset: { width: 0, height: 0 },
    marginLeft: -1,
    marginRight: -1,
    marginTop: 0,
    marginBottom: 0,
    padding: 0
  },
  rowAndroid: {
    flex: 0,
    borderColor: 'gray',
    borderTopWidth: 0,
    borderBottomWidth: 1,
    shadowOffset: { width: 0, height: 0 },
    marginLeft: -1,
    marginRight: -1,
    marginTop: 0,
    marginBottom: 0,
    padding: 0
  },
  rowHeader: {

  },
  rowBody: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    height: height * 0.25,
    marginBottom: 0,
    backgroundColor: 'whitesmoke'
  },
  image: {
    flex: 1,
    height: height * 0.25,
    marginBottom: 0,
    resizeMode: 'cover',
    backgroundColor: 'whitesmoke'
  },
  rowFooter: {
    padding: 0
  },
  thumb: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  gridThumb: {
    alignSelf: 'center',
    width: 120,
    height: 80,
    borderRadius: 25,
    marginBottom: 10,
    resizeMode:"contain",
  },
  gridThumbThree: {
    alignSelf: 'center',
    width: 90,
    height: 90,
    borderRadius: 25,
    marginBottom: 10,
    resizeMode:"contain",
  },
  gridThumbList: {
    alignSelf: 'center',
    width: 120,
    height: 80,
    borderRadius: 25,
    marginBottom: 10,
    resizeMode:"contain",
  },
  cardTitle: {
    fontSize: 14
  },
  cardSubTitle: {
    marginTop: 3,
    fontSize: 11
  },
  rightBtnGroup: {
    flexDirection:"column",
    width: width * 0.3,
    marginRight: 20,
    
    justifyContent:'flex-start'
  },
  rightBtn: {
    marginRight: 20,
    marginBottom:20,
   
    padding: 0,flexDirection:"row-reverse",justifyContent:'flex-start',justifyContent:'flex-start' ,
  },
  rightBtn2: {
    marginRight: 20,
    marginBoTop:10,
   
    padding: 0,flexDirection:"row-reverse",justifyContent:'flex-start',justifyContent:'flex-start' ,
  },
  rightBtnIcon: {
    color: 'dimgray'
  },
  gridText: {
    textAlign: 'center',
    fontSize:17,
    fontFamily:'OpenSans-Regular',
   
  },
  gridTextFont: {
    textAlign: 'center',
    fontSize:21,
    fontFamily:'OpenSans-SemiBold',
    marginTop:10,
    color:'#21A24B'
  },
  gridTextList: {
    textAlign: 'center',
    fontSize:15,
    fontFamily:'OpenSans-Regular',
   
  },
  gridTextListBold: {
    textAlign: 'center',
    fontSize:19,
    fontFamily:'OpenSans-SemiBold',
    marginTop:0,
    color:'#21A24B'
  },
  gridBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 3 - 10,
    height: width / 3 - 10,
    borderWidth: 0.5,
    borderColor: 'gray'
  }
}
