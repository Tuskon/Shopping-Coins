import { StyleSheet } from 'react-native';

const Styles = (height: number, width: number) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9'
      },
      shoppingCoins_view: {
        backgroundColor: '#7B22D3',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%'
      },
      image_view: {
        width: '100%',
        height: height * 0.24,
        alignItems: 'center',
        marginTop: height * 0.04
      },
      login_view: {
        position: 'relative',
        backgroundColor: '#F9F9F9',
        borderRadius: 20,
        bottom: height * 0.075,
        width: '100%',
        height: '100%',
      },
      forms_view: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        width: width,
        alignItems: 'center',
        height:height*0.8,
        backgroundColor: '#F9F9F9'
      },
      Login_text: {
        marginTop: height * 0.02,
        marginBottom: height * 0.02,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#313131',
        textAlign: 'center'
      },
      form_input: {
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 9,
        width: width * 0.9,
        height: height * 0.08,
        backgroundColor: 'white',
        marginBottom: 15
      },
      links_view: {
        marginTop: height * 0.02,
        marginBottom: height * 0.02,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
      },
      links_text: {
        color: '#9B9B9B',
        fontSize: 15
      },
      shopping_img: {
        width: width * 0.8,
        height: height * 0.25,
        position:'absolute',
        bottom:height*0.02
      }
});

export default Styles;
