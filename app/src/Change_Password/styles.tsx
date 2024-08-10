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
    password_view: {
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
    elements_view: {
        width: width * 0.85,
        height: height * 0.5,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
    },
    form_view: {
        marginTop: 20,
        alignItems: 'center',
        width: '100%'
    },
    scrollview_container: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        flex: 1,
        paddingVertical: 20,
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
    form_input: {
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 9,
        width: width * 0.8,
        height: height * 0.07,
        backgroundColor: 'white',
        marginBottom: 15,
    },
});

export default Styles;
