import { StyleSheet } from 'react-native';

const Styles = (height: number, width: number) => StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  shoppingCoins_view: {
    backgroundColor: '#7B22D3',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: height,
    width: '100%',
  },
  image_view: {
    width: '100%',
    height: height * 0.4,
    alignItems: 'center',
    marginTop: height * 0.04,
  },
  login_view: {
    position: 'absolute',
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'flex-start',
    marginTop: height * 0.31,
    height: height,
    width: '100%',
  },
  forms_view: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    flexDirection: 'column',
    height: height * 0.5,
    marginTop: height * 0.02,
  },
  input_view: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    height: height * 0.15,
    width: width * 0.9,
  },
  links_view: {
    marginTop: height * 0.04,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Login_text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#313131',
  },
  input_text: {
    backgroundColor: '#E8E8E8',
    width: width * 0.9,
    height: 45,
    borderRadius: 5,
    borderWidth: 0.5,
  },
  links_text: {
    color: '#9B9B9B',
    fontSize: 15,
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
    marginBottom: 15,
  },
  shopping_img: {
    width: width * 0.8,
    height: height * 0.25,
  },
});

export default Styles;
