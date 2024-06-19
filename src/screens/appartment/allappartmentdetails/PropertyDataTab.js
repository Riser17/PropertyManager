import React, {useRef, useState, useEffect} from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import Collapsible from 'react-native-collapsible';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CustomInputField from '../../../components/CustomInputField';
import SaveButton from '../../../components/SaveButton';

import {showAlert} from '../../../utils/Utils';
import appointmentStyle from './AppointmentStyle';

const PropertyDataTab = () => {
  const collectionTypeRef = useRef(null);
  const caseFileIDRef = useRef(null);
  const lpaIDRef = useRef(null);
  const pdaSubmitterEntityRef = useRef(null);
  const propertyDataCollectorNameRef = useRef(null);
  const pdaHyperlinkRef = useRef(null);

  const phoneNumberRef = useRef(null);
  const emailRef = useRef(null);

  const pdaCollectionEntityRef = useRef(null);
  const propertyDataCollectorTypeRef = useRef(null);
  const propertyDataCollectorTypeDescriptionRef = useRef(null);
  const dataCollectorAcknowledgementRef = useRef(null);
  const dataCollectionDaterRef = useRef(null);

  const [isSaveButtonEnable, setIsSaveButtonEnable] = useState(false);

  const [isInspectionReportCollapsed, setInspectionReportCollapsed] =
    useState(true);
  const [isContactsCollapsed, setContactsCollapsed] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        syncData();
      }
    });

    return () => unsubscribe();
  }, []);

  const checkFieldAreEmpty = () => {
    if (
      collectionTypeRef?.current?.value?.length &&
      caseFileIDRef?.current?.value?.length &&
      lpaIDRef?.current?.value?.length &&
      pdaSubmitterEntityRef?.current?.value?.length &&
      propertyDataCollectorNameRef?.current?.value?.length &&
      pdaHyperlinkRef?.current?.value?.length &&
      phoneNumberRef?.current?.value?.length &&
      emailRef?.current?.value?.length
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
        collectionType: collectionTypeRef?.current?.value,
        caseFileID: caseFileIDRef?.current?.value,
        lpaID: lpaIDRef?.current?.value,
        pdaSubmitterEntity: pdaSubmitterEntityRef?.current?.value,
        propertyDataCollectorName: propertyDataCollectorNameRef?.current?.value,
        pdaHyperlink: pdaHyperlinkRef?.current?.value,
        phoneNumber: phoneNumberRef?.current?.value,
        email: emailRef?.current?.value,
      };
      console.log('property data', payload);
      await AsyncStorage.setItem('propertyData', JSON.stringify(payload));

      showAlert('Data saved successfully');
    } catch (error) {
      showAlert('Failed to save data');
    }
  };

  const syncData = async () => {
    try {
      const savedData = await AsyncStorage.getItem('propertyData');
      if (savedData) {
        // Assuming you have a function sendToBackend to handle API calls
        await sendToBackend(JSON.parse(savedData));
        await AsyncStorage.removeItem('propertyData');
      }
    } catch (error) {
      console.log('Failed to sync data', error);
    }
  };

  const sendToBackend = async data => {
    try {
      // Replace with your actual backend API call
      const response = await fetch('https://your-backend-api.com/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        showAlert('Data synced successfully');
      } else {
        showAlert('Failed to sync data');
      }
    } catch (error) {
      console.log('Error sending data to backend', error);
    }
  };

  return (
    <View style={appointmentStyle.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() =>
            setInspectionReportCollapsed(!isInspectionReportCollapsed)
          }>
          <View style={appointmentStyle.header}>
            <Icon name="description" size={24} color="#fff" />
            <Text style={appointmentStyle.headerText}>Inspection Report</Text>
            <Icon
              name={isInspectionReportCollapsed ? 'expand-more' : 'expand-less'}
              size={24}
              color="#fff"
            />
          </View>
        </TouchableOpacity>
        <Collapsible collapsed={isInspectionReportCollapsed}>
          <CustomInputField
            inputRef={collectionTypeRef}
            placeholderText={'Collection Type'}
            onChangeText={value => {
              collectionTypeRef.current.value = value;
              checkFieldAreEmpty();
            }}
          />
          <CustomInputField
            inputRef={caseFileIDRef}
            placeholderText={'Case File ID'}
            keyboardType={'numeric'}
            onChangeText={value => {
              caseFileIDRef.current.value = value;
              checkFieldAreEmpty();
            }}
          />

          <CustomInputField
            inputRef={lpaIDRef}
            placeholderText={'LPA ID'}
            keyboardType={'numeric'}
            onChangeText={value => {
              lpaIDRef.current.value = value;
              checkFieldAreEmpty();
            }}
          />
          <CustomInputField
            inputRef={pdaSubmitterEntityRef}
            placeholderText={'PDA Submitter Entity'}
            onChangeText={value => {
              pdaSubmitterEntityRef.current.value = value;
              checkFieldAreEmpty();
            }}
          />
          <CustomInputField
            inputRef={propertyDataCollectorNameRef}
            placeholderText={'Property Data Collector Name'}
            onChangeText={value => {
              propertyDataCollectorNameRef.current.value = value;
              checkFieldAreEmpty();
            }}
          />
          <CustomInputField
            inputRef={pdaHyperlinkRef}
            placeholderText={'PDA Hyperlink'}
            onChangeText={value => {
              pdaHyperlinkRef.current.value = value;
              checkFieldAreEmpty();
            }}
          />

          <TouchableOpacity
            onPress={() => setContactsCollapsed(!isContactsCollapsed)}>
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
                name={isContactsCollapsed ? 'expand-more' : 'expand-less'}
                size={24}
                color="#000"
              />
              <Text style={[appointmentStyle.headerText, {color: '#000'}]}>
                Property Data Collector Contacts
              </Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={isContactsCollapsed}>
            <CustomInputField
              inputRef={phoneNumberRef}
              placeholderText={'Phone Number'}
              inputFieldStyle={{marginBottom: '0'}}
              keyboardType={'numeric'}
              onChangeText={value => {
                phoneNumberRef.current.value = value;
                checkFieldAreEmpty();
              }}
            />
            <CustomInputField
              inputRef={emailRef}
              placeholderText={'Email'}
              inputFieldStyle={{marginBottom: '0'}}
              keyboardType={'email-address'}
              onChangeText={value => {
                emailRef.current.value = value;
                checkFieldAreEmpty();
              }}
            />
          </Collapsible>
          <View style={appointmentStyle.inputContainer}>
            <CustomInputField
              inputRef={pdaCollectionEntityRef}
              placeholderText={'PDA Collection Entity'}
              onChangeText={value => {
                pdaCollectionEntityRef.current.value = value;
                checkFieldAreEmpty();
              }}
            />
            <CustomInputField
              inputRef={propertyDataCollectorTypeRef}
              placeholderText={'Property Data Collector Type'}
              onChangeText={value => {
                propertyDataCollectorTypeRef.current.value = value;
                checkFieldAreEmpty();
              }}
            />

            <CustomInputField
              inputRef={propertyDataCollectorTypeDescriptionRef}
              placeholderText={'Property Data Collector Type Description'}
              onChangeText={value => {
                propertyDataCollectorTypeDescriptionRef.current.value = value;
                checkFieldAreEmpty();
              }}
            />
            <CustomInputField
              inputRef={dataCollectorAcknowledgementRef}
              placeholderText={'Data Collector Acknowledgement'}
              onChangeText={value => {
                dataCollectorAcknowledgementRef.current.value = value;
                checkFieldAreEmpty();
              }}
            />
            <CustomInputField
              inputRef={dataCollectionDaterRef}
              placeholderText={'Data Collection Date'}
              inputFieldStyle={{marginBottom: '0'}}
              onChangeText={value => {
                dataCollectionDaterRef.current.value = value;
                checkFieldAreEmpty();
              }}
            />
          </View>

          <SaveButton
            text={'Save Data'}
            enable={isSaveButtonEnable}
            buttonPressed={saveData}
          />
        </Collapsible>
      </ScrollView>
    </View>
  );
};

export default PropertyDataTab;
