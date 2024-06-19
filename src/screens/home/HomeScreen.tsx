import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {MasonryFlashList} from '@shopify/flash-list';
import ResourceManager from '../../ResourceManager';

type Category = {
  title: string;
  items: string[];
  color: string;
  icon: string;
};

const categories: Category[] = [
  {
    title: 'Property Data',
    items: ['Inspection Report'],
    color: '#cce4f7',
    icon: 'description',
  },
  {
    title: 'Subject Property',
    items: ['Property', 'Address', 'Identification'],
    color: '#f7d4e8',
    icon: 'home',
  },
  {
    title: 'Site Info',
    items: ['Lot', 'Site Features', 'Offsite Features', 'Site Utilities'],
    color: '#f7e9cc',
    icon: 'location-on',
  },
  {
    title: 'Buildings',
    items: ['Building Details', 'Exterior Deficiencies', 'Exterior Updates'],
    color: '#d4f7e2',
    icon: 'business',
  },
  {
    title: 'Units',
    items: [
      'Unit Details',
      'Unit Features',
      'Heating Systems',
      'Cooling Systems',
      'Mechanical Deficiencies',
      'Garages',
    ],
    color: '#f7e1cc',
    icon: 'apartment',
  },
  {
    title: 'Levels',
    items: ['Level 1'],
    color: '#f7f4cc',
    icon: 'layers',
  },
  {
    title: 'Ancillary',
    items: ['Ancillary Details', 'Alley', 'Appliances', 'Exterior', 'Gas'],
    color: '#ccf0f7',
    icon: 'build',
  },
  {
    title: 'Rooms',
    items: ['Room 1'],
    color: '#f7d4d4',
    icon: 'meeting-room',
  },
];

const HomeScreen: React.FC = ({navigation}: any) => {
  const {width} = Dimensions.get('window');
  const numColumns = 2;
  const itemSize = width / numColumns;
  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={categories}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => (
          <Pressable
            style={[
              styles.category,
              {
                backgroundColor: item.color,
              },
            ]}
            onPress={() =>
              navigation.navigate('TopTabNavigator', {
                intialTabIndex: index,
              })
            }>
            <Icon name={item.icon} size={24} />
            <Text style={styles.categoryTitle}>{item.title}</Text>
            {item.items.map((categoryItem, idx) => (
              <Text key={idx} style={styles.categoryItem}>
                {categoryItem}
              </Text>
            ))}
          </Pressable>
        )}
        keyExtractor={item => item.title}
        numColumns={numColumns}
        estimatedItemSize={itemSize} // You can adjust this based on your average item size
        contentContainerStyle={{padding: 14}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ResourceManager.colors.background,
  },
  category: {
    flex: 1,
    margin: 9,
    padding: 16,
    gap: 9,
  },
  categoryTitle: {
    fontSize: 14,
    fontWeight: '600',
    opacity: 0.6,
  },
  categoryItem: {
    fontSize: 12,
    fontWeight: '400',
    opacity: 0.6,
  },
});

export default HomeScreen;
