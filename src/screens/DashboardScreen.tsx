import {Button, Center, Text} from 'native-base';
import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {selectCategories, TDispatch} from '../store';
import ModalsScreen from './ModalsScreen';

export default function DashboardScreen({navigation}: any) {
  const data = useSelector(selectCategories);

  const dispatch = useDispatch<TDispatch>();

  useEffect(() => {}, []);

  const renderEmptyContent = () => {
    return (
      <Center>
        <Text style={styles.emptyText}>No categories found</Text>
        <Button onPress={() => navigation.navigate('Categories')}>
          Add a Category
        </Button>
      </Center>
    );
  };

  const renderCategory = ({item}: any) => {
    return <ModalsScreen item={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id.toString}
        data={data}
        renderItem={renderCategory}
        extraData={data}
        ListEmptyComponent={renderEmptyContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  emptyText: {
    alignSelf: 'center',
  },
});
