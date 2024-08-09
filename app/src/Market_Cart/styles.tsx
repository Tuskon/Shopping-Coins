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
        width: width * 0.95,
        height: height * 0.07,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginTop: height * 0.04,
    },
    market_view: {
        position: 'absolute',
        backgroundColor: '#F9F9F9',
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'flex-start',
        marginTop: height * 0.13,
        height: height,
        width: '100%',
    },
    leave_view: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: width * 0.26
    },
    title_view: {
        width: width * 0.85,
        height: height * 0.08,
        alignItems: 'flex-start',
        justifyContent: 'center'
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
        margin: 10,
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
    products_view: {
        justifyContent: 'center',
        alignItems: 'center',
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
    leave_text: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold'
    },
    title_text: {
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold'
    },
    product_name_text: {
        fontSize: 14,
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
});

export default Styles;
