import {StyleSheet} from 'react-native';
import ResourceManager from '../../../ResourceManager';

export default appointmentStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: ResourceManager.colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00324E',
    padding: 10,
    marginBottom: 10,
  },
  headerText: {
    flex: 1,
    color: '#fff',
    marginLeft: 10,
    fontSize: 14,
    fontWeight: '600',
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 8,
    borderRadius: 4,
  },
  readOnlyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E1E1E199',
  },
  readOnlyText: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    width: '50%',
    fontSize: 14,
    fontWeight: '600',
  },
});
