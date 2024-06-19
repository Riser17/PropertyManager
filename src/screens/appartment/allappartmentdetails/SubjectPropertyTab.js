import React, {useRef, useState} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CustomInputField from '../../../components/CustomInputField';
import SaveButton from '../../../components/SaveButton';
import {showAlert} from '../../../utils/Utils';
import appointmentStyle from './AppointmentStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SubjectPropertyTab = () => {
  const propertyTypeRef = useRef(null);
  const propertyOccupiedRef = useRef(null);

  const streetAddressRef = useRef(null);
  const cityRef = useRef(null);
  const countryRef = useRef(null);
  const stateRef = useRef(null);
  const postalCodeRef = useRef(null);
  const unitNumberRef = useRef(null);

  const latitudeRef = useRef(null);
  const longitudeRef = useRef(null);

  const [isSaveButtonEnable, setIsSaveButtonEnable] = useState(false);

  const [isPropertyCollapsed, setPropertyCollapsed] = useState(true);
  const [isAddressCollapsed, setAddressCollapsed] = useState(true);
  const [isIdentificationCollapsed, setIdentificationCollapsed] =
    useState(true);
  const [isGPSCoordinatesCollapsed, setGPSCoordinatesCollapsed] =
    useState(true);

  const checkFieldAreEmpty = () => {
    if (
      propertyTypeRef?.current?.value?.length &&
      propertyOccupiedRef?.current?.value?.length &&
      streetAddressRef?.current?.value?.length &&
      cityRef?.current?.value?.length &&
      countryRef?.current?.value?.length &&
      stateRef?.current?.value?.length &&
      postalCodeRef?.current?.value?.length &&
      unitNumberRef?.current?.value?.length
    ) {
      if (!isSaveButtonEnable) {
        setIsSaveButtonEnable(true);
      }
    } else {
      if (isSaveButtonEnable) {
        setIsSaveButtonEnable(false);
      }
    }
  };

  const saveData = async () => {
    try {
      const payload = {
        propertyType: propertyTypeRef?.current?.value,
        propertyOccupied: propertyOccupiedRef?.current?.value,
        streetAddress: streetAddressRef?.current?.value,
        city: cityRef?.current?.value,
        country: countryRef?.current?.value,
        state: stateRef?.current?.value,
        postalCode: postalCodeRef?.current?.value,
        unitNumber: unitNumberRef?.current?.value,
        latitude: latitudeRef?.current?.value,
        longitude: longitudeRef?.current?.value,
      };
      console.log('subject property', payload);
      await AsyncStorage.setItem('subjectData', JSON.stringify(payload));

      showAlert('Data saved successfully');
    } catch (error) {
      console.log('error', error);
      showAlert('Failed to save data');
    }
  };

  return (
    <View style={appointmentStyle.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => setPropertyCollapsed(!isPropertyCollapsed)}>
          <View style={appointmentStyle.header}>
            <Icon
              name={isPropertyCollapsed ? 'expand-more' : 'expand-less'}
              size={24}
              color="#fff"
            />
            <Text style={appointmentStyle.headerText}>Property</Text>
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={isPropertyCollapsed}>
          <CustomInputField
            inputRef={propertyTypeRef}
            placeholderText={'Property Type'}
            onChangeText={value => {
              propertyTypeRef.current.value = value;
              checkFieldAreEmpty();
            }}
          />
          <CustomInputField
            inputRef={propertyOccupiedRef}
            placeholderText={'Property Occupied'}
            onChangeText={value => {
              propertyOccupiedRef.current.value = value;
              checkFieldAreEmpty();
            }}
          />
        </Collapsible>

        <TouchableOpacity
          onPress={() => setAddressCollapsed(!isAddressCollapsed)}>
          <View style={appointmentStyle.header}>
            <Icon
              name={isAddressCollapsed ? 'expand-more' : 'expand-less'}
              size={24}
              color="#fff"
            />
            <Text style={appointmentStyle.headerText}>Address</Text>
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={isAddressCollapsed}>
          <CustomInputField
            inputRef={streetAddressRef}
            placeholderText={'Street Address'}
            onChangeText={value => {
              streetAddressRef.current.value = value;
              checkFieldAreEmpty();
            }}
          />
          <CustomInputField
            inputRef={cityRef}
            placeholderText={'City'}
            onChangeText={value => {
              cityRef.current.value = value;
              checkFieldAreEmpty();
            }}
          />
          <CustomInputField
            inputRef={countryRef}
            placeholderText={'Country'}
            onChangeText={value => {
              countryRef.current.value = value;
              checkFieldAreEmpty();
            }}
          />
          <CustomInputField
            inputRef={stateRef}
            placeholderText={'State'}
            onChangeText={value => {
              stateRef.current.value = value;
              checkFieldAreEmpty();
            }}
          />
          <CustomInputField
            inputRef={postalCodeRef}
            placeholderText={'Postal Code'}
            keyboardType={'numeric'}
            onChangeText={value => {
              postalCodeRef.current.value = value;
              checkFieldAreEmpty();
            }}
          />
          <CustomInputField
            inputRef={unitNumberRef}
            placeholderText={'Unit Number'}
            keyboardType={'numeric'}
            onChangeText={value => {
              unitNumberRef.current.value = value;
              checkFieldAreEmpty();
            }}
          />
        </Collapsible>

        <View style={appointmentStyle.inputContainer}>
          <TouchableOpacity
            onPress={() =>
              setIdentificationCollapsed(!isIdentificationCollapsed)
            }>
            <View style={[appointmentStyle.header, {marginBottom: 0}]}>
              <Icon
                name={isIdentificationCollapsed ? 'expand-more' : 'expand-less'}
                size={24}
                color="#fff"
              />
              <Text style={appointmentStyle.headerText}>Identification</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={isIdentificationCollapsed}>
            <TouchableOpacity
              onPress={() =>
                setGPSCoordinatesCollapsed(!isGPSCoordinatesCollapsed)
              }>
              <View
                style={[
                  appointmentStyle.header,
                  {
                    backgroundColor: '#FFFFFF',
                    borderWidth: 1,
                    borderColor: '#CCCCCC',
                    padding: 6,
                    marginBottom: 0,
                  },
                ]}>
                <Icon
                  name={
                    isGPSCoordinatesCollapsed ? 'expand-more' : 'expand-less'
                  }
                  size={24}
                  color="#000"
                />
                <Text style={[appointmentStyle.headerText, {color: '#000'}]}>
                  GPS Coordinates
                </Text>
              </View>
            </TouchableOpacity>
            <Collapsible collapsed={isGPSCoordinatesCollapsed}>
              <View style={appointmentStyle.readOnlyContainer}>
                <Text style={appointmentStyle.readOnlyText}>Latitude</Text>
                <CustomInputField
                  inputRef={latitudeRef}
                  placeholderText={'PDA Collection Entity'}
                  // keyboardType={'numeric'}
                  // onChangeText={value => {
                  //   pdaCollectionEntityRef.current.value = value;
                  //   checkFieldAreEmpty();
                  // }}
                  inputFieldStyle={{
                    marginBottom: 0,
                    width: '50%',
                  }}
                  value={"34° 17' 36.708'' N'"}
                  readyOnly={true}
                />
              </View>
              <View style={appointmentStyle.readOnlyContainer}>
                <Text style={appointmentStyle.readOnlyText}>Longitude</Text>
                <CustomInputField
                  inputRef={longitudeRef}
                  placeholderText={'PDA Collection Entity'}
                  // keyboardType={'numeric'}
                  // onChangeText={value => {
                  //   pdaCollectionEntityRef.current.value = value;
                  //   checkFieldAreEmpty();
                  // }}
                  inputFieldStyle={{
                    marginBottom: 0,
                    width: '50%',
                  }}
                  value={"97° 32' 56.598'' W"}
                  readyOnly={true}
                />
              </View>
            </Collapsible>
          </Collapsible>
        </View>
        <SaveButton
          text={'Save Data'}
          enable={isSaveButtonEnable}
          buttonPressed={saveData}
          //isLoading={resetPasswordApiStatus === 'loading'}
        />
      </ScrollView>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: ResourceManager.colors.background,
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#00324E',
//     padding: 10,
//     marginBottom: 10,
//   },
//   headerText: {
//     flex: 1,
//     color: '#fff',
//     marginLeft: 10,
//     fontSize: 14,
//     fontWeight: '600',
//   },
//   inputContainer: {
//     marginVertical: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 8,
//     marginBottom: 8,
//     borderRadius: 4,
//   },
// });

export default SubjectPropertyTab;
