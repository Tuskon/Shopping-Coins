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
        width: width * 0.92,
        height: height * 0.14,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
      },
      top_components_right_view: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        flex: 1
      },
      top_components_left_view: {
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        flex: 1
      },
      market_view: {
        position: 'absolute',
        backgroundColor: '#F9F9F9',
        alignItems: 'center',
        borderRadius: 20,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: height * 0.21,
        height: height,
        width: '100%',
  
      },
      lc_view: {
        position: 'absolute',
        top: -height * 0.05,
        width: width * 0.9,
        height: height * 0.1,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 6 },
        shadowOpacity: 0.6,
        shadowRadius: 1,
        elevation: 5,
      },
      lc_points_view: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: '#7c7c7c',
        width: width * 0.57,
  
      },
      lc_shop_view: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
      },
      trip_view: {
        marginTop: height * 0.07,
        width: width,
        alignItems: 'center',
        height: height * 0.197,
  
      },
      trip_card_view: {
        backgroundColor: '#7B22D3',
        width: width * 0.95,
        height: height * 0.19,
        borderRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 10, 
      },
      trip_card_img_view: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
      },
      trip_card_package_view: {
        alignItems: 'flex-start',
        marginTop: 30,
        justifyContent: 'flex-start',
        flex: 1
      },
      products_view: {
        width: width,
        height: height * 0.3,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
  
      },
      product_card_view: {
        width: width * 0.4,
        height: height * 0.28,
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 3, height: 6 },
        shadowOpacity: 0.6,
        shadowRadius: 1,
        elevation: 5,
      },
      product_img_view: {
        flex: 1
      },
      product_description_view: {
        flex: 1,
        alignItems: 'flex-start'
      },
      product_description_name_view: {
        marginTop: 4,
        marginLeft: 6,
        alignItems: 'flex-start',
        width: width * 0.32,
      },
      product_description_lc_view: {
        marginTop: 2,
        alignItems: 'center',
        flexDirection: 'row',
        width: width * 0.4,
        justifyContent: 'space-evenly',
      },
      product_inner_lc_view: {
        width: width * 0.18
      },
      product_inner_button_view: {
        alignItems: 'flex-end',
        width: width * 0.15
      },
      bottom_view:{
        height:height*0.13,
        justifyContent:'center'
      },
      top_text: {
        fontSize: 20,
        color: 'white'
      },
      lc_text: {
        fontSize: 22,
      },
      lc_bold_text: {
        fontSize: 26,
        fontWeight: 'bold'
      },
      top_text_bold: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
      },
      trip_top_text: {
        fontSize: 20,
        color: 'white'
      },
      trip_top_bold_text: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
      },
      trip_middle_text: {
        fontSize: 18,
        color: 'white'
      },
      trip_bottom_text: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white'
      },
      Login_text: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#313131'
      },
      product_name_text: {
        fontSize: 15,
        fontWeight: 'bold'
      },
      product_quant_text: {
        fontSize: 14,
        color: '#9B9B9B'
      },
      product_lc_text: {
        fontSize: 14,
        color: '#7B22D3'
      },
      product_lc_bold_text: {
        fontSize: 14,
        color: '#7B22D3',
        fontWeight: 'bold'
      },
      account_img: {
        width: 50,
        height: 50
      },
      trip_img: {
        width: 161,
        height: 131
      },
      shop_button:{
        flexDirection:'row', 
        alignItems:'center'
      }
  
});

export default Styles;
