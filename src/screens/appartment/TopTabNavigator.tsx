import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropertyDataTab from './allappartmentdetails/PropertyDataTab';
import SubjectPropertyTab from './allappartmentdetails/SubjectPropertyTab';
import SiteInfoTab from './allappartmentdetails/SiteInfoTab';
import BuildingsTab from './allappartmentdetails/BuildingsTab';
import UnitsTab from './allappartmentdetails/UnitsTab';
import LevelsTab from './allappartmentdetails/LevelsTab';
import AncillaryTab from './allappartmentdetails/AncillaryTab';
import RoomsTab from './allappartmentdetails/RoomsTab';

type TabParamList = {
  PropertyData: undefined;
  SubjectProperty: undefined;
  SiteInfo: undefined;
  Buildings: undefined;
  Units: undefined;
  Levels: undefined;
  Ancillary: undefined;
  Rooms: undefined;
};

interface Props {
  route: {
    params?: {
      intialTabIndex?: number;
    };
  };
}

const Tab = createMaterialTopTabNavigator<TabParamList>();

const TopTabNavigator: React.FC<Props> = ({route}: Props) => {
  const intialTabIndex = route.params?.intialTabIndex || 0;
  console.log('intialTabIndex', intialTabIndex);
  return (
    <Tab.Navigator
      initialRouteName={
        intialTabIndex === 0
          ? 'PropertyData'
          : intialTabIndex === 1
          ? 'SubjectProperty'
          : intialTabIndex === 2
          ? 'SiteInfo'
          : intialTabIndex === 3
          ? 'Buildings'
          : intialTabIndex === 4
          ? 'Units'
          : intialTabIndex === 5
          ? 'Levels'
          : intialTabIndex === 6
          ? 'Ancillary'
          : intialTabIndex === 7
          ? 'Rooms'
          : 'PropertyData'
      }
      screenOptions={({route}) => {
        return {
          tabBarScrollEnabled: true,
          lazy: true,
          tabBarItemStyle: {
            width: 100,
          },
          tabBarIndicatorStyle: {backgroundColor: '#000000'},
          tabBarIcon: ({color}) => {
            let iconName: string = '';

            if (route.name === 'PropertyData') {
              iconName = 'description';
            } else if (route.name === 'SubjectProperty') {
              iconName = 'home';
            } else if (route.name === 'SiteInfo') {
              iconName = 'location-on';
            } else if (route.name === 'Buildings') {
              iconName = 'business';
            } else if (route.name === 'Units') {
              iconName = 'apartment';
            } else if (route.name === 'Levels') {
              iconName = 'layers';
            } else if (route.name === 'Ancillary') {
              iconName = 'build';
            } else if (route.name === 'Rooms') {
              iconName = 'meeting-room';
            }

            return <Icon name={iconName} size={24} color={color} />;
          },
          tabBarLabelStyle: {fontSize: 10, fontWeight: '400'},
          // tabBarActiveTintColor:'red',
          // tabBarInactiveTintColor: 'gray',
          tabBarShowIcon: true,
        };
      }}>
      <Tab.Screen
        name="PropertyData"
        component={PropertyDataTab}
        options={{tabBarLabel: 'Property Data'}}
      />
      <Tab.Screen
        name="SubjectProperty"
        component={SubjectPropertyTab}
        options={{tabBarLabel: 'Subject Property'}}
      />
      <Tab.Screen
        name="SiteInfo"
        component={SiteInfoTab}
        options={{tabBarLabel: 'Site Info'}}
      />
      <Tab.Screen
        name="Buildings"
        component={BuildingsTab}
        options={{tabBarLabel: 'Buildings'}}
      />
      <Tab.Screen
        name="Units"
        component={UnitsTab}
        options={{tabBarLabel: 'Units'}}
      />
      <Tab.Screen
        name="Levels"
        component={LevelsTab}
        options={{tabBarLabel: 'Levels'}}
      />
      <Tab.Screen
        name="Ancillary"
        component={AncillaryTab}
        options={{tabBarLabel: 'Ancillary'}}
      />
      <Tab.Screen
        name="Rooms"
        component={RoomsTab}
        options={{tabBarLabel: 'Rooms'}}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TopTabNavigator;
