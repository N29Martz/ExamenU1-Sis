import {Button, StyleSheet} from 'react-native';

export const colors = {
  background: '#FFF7FC',
  title: '#FFD93D',
  primary: '#5755FE',
  secundary: '#8B93FF',
  red: '#FF6B6B',
  green: '#6BCB77',
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.title,
    fontSize: 45,
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 80,
    fontWeight: '900',
    fontStyle: 'italic',
  },
  text:{
    color: colors.title,
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 90,
  },
  textA:{
    color: colors.primary,
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 90,
  },
  textB:{
    color: colors.green,
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 90,
  },
  textC:{
    color: colors.red,
    fontSize: 60,
    textAlign: 'center',
    marginBottom: 90,
  },
  button:{
    backgroundColor: colors.secundary,
    borderRadius: 10,
    padding: 10,
    width: 150,
    marginLeft: 50,
    marginRight: 50,
  },
  buttonTitle: {
    color: colors.background,
    fontSize: 40,
    textAlign: 'center',
  },
  containerBotton: { 
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  botton2:{ 
    borderColor: '#000000',
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    width: 300,
  },
});
