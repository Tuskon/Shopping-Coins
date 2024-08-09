import { StyleSheet } from 'react-native';

const Styles = (height: number, width: number) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
      },
      shoppingCoins_view: {
        backgroundColor: '#7B22D3',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: height,
        width: '100%'
      },
      top_view: {
        width: '100%',
        height: height * 0.33,
        alignItems: 'center',
        marginTop: height * 0.01,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      },
      settings_view: {
        position: 'absolute',
        backgroundColor: '#F9F9F9',
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'flex-start',
        marginTop: height * 0.35,
        height: height,
        width: '100%',
  
      },
      options_view: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        flexDirection: 'column',
        height: height * 0.45,
      },
      button_view: {
        backgroundColor: '#F9F9F9',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: height * 0.11,
        width: width * 0.9,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 6 },
        shadowOpacity: 0.6,
        shadowRadius: 1,
        elevation: 5,
  
      },
      button_info_view: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.66
      },
      bottom_view:{
        marginTop:width*0.01
      },
      name_text: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold'
      },
      button_info_text: {
        fontSize: 18,
        color: 'black',
        fontWeight: '600'
      }
});

export default Styles;
