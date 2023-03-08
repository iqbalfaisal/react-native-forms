import {Button, Text} from 'native-base';
import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RenderModals} from '../components';

import {
  IRootState,
  selectCategory,
  selectModals,
  setNewModal,
  TDispatch,
} from '../store';

export default function ModalsScreen({item, route}: any) {
  const id = route?.params?.id ?? item?.id;

  const data = useSelector(state => selectModals(state as IRootState, id));
  const category = useSelector(state =>
    selectCategory(state as IRootState, id),
  );

  const dispatch = useDispatch<TDispatch>();

  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.title}>{category?.name}</Text>

        <Button
          size={'sm'}
          height={10}
          onPress={() => dispatch(setNewModal(id))}>
          Add a Item
        </Button>
      </View>
      <RenderModals category={category} data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  title: {
    fontSize: 20,
  },

  heading: {
    padding: 5,
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
