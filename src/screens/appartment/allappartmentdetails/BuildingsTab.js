import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const TabContent = ({route}) => {
  return (
    <View style={styles.container}>
      <Text>{route.name} Details</Text>
      {/* Add your detailed fields here */}
    </View>
  );
};
const BuildingsTab = () => {
  const [tabs, setTabs] = useState([
    {name: '#Building 1'},
    {name: '#Building 2'},
  ]);

  const addTab = () => {
    const newIndex = tabs.length + 1;
    setTabs([...tabs, {name: `#Building ${newIndex}`}]);
  };
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#00324E',
        }}>
        {tabs.map((tab, index) => (
          <Tab.Screen key={index} name={tab.name} component={TabContent} />
        ))}
      </Tab.Navigator>
      <Button title="Add Building" onPress={addTab} />
    </View>
  );
};

export default BuildingsTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
