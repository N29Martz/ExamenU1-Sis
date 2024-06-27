import {StyleSheet} from 'react-native';

export const colors = {
  background: '#FFF7FC',
  title: '#FF71CD',
  primary: '#5755FE',
  secundary: '#8B93FF',
};

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    color: colors.title,
    fontSize: 24,
    textAlign: 'center',
    marginTop: 25,
    marginBottom: 25,
    fontWeight: '900',
    fontStyle: 'italic',
  },
});
