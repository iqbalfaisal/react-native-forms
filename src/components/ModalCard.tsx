import React from 'react';
import {Box, Button, Checkbox, Input, Text, VStack} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import {ICategory, removeModal, TDispatch, updateModal} from '../store';
import {useDispatch} from 'react-redux';
import GenericDatePicker from './GenericDatePicker';

type IModalCard = {
  category: ICategory;
  item: any;
  index: number;
};

const ModalCard = ({item, category}: IModalCard) => {
  const {fields, property} = category;
  const {values} = item;

  const dispatch = useDispatch<TDispatch>();

  const onRemove = () => {
    dispatch(removeModal(category.id, item.id));
  };

  const onFieldChange = (
    id: number,
    name: string | Date | number | boolean,
  ) => {
    let temp = values;
    temp[id] = name;

    dispatch(
      updateModal({
        ...item,
        values: temp,
      }),
    );
  };

  const renderFields = () => {
    return fields.map(({fieldType, name, id}, i) => {
      switch (fieldType) {
        case 'text':
          return (
            <Input
              onChangeText={text => onFieldChange(id, text)}
              size="sm"
              placeholder={name}
              value={values[id]}
            />
          );

        case 'number':
          return (
            <Input
              onChangeText={text => onFieldChange(id, text)}
              size="sm"
              placeholder={name}
              value={values[id]}
              keyboardType="numeric"
            />
          );
        case 'checkbox':
          return (
            <Checkbox
              onChange={value => onFieldChange(id, value)}
              value={values[id]}
              my={2}>
              {name}
            </Checkbox>
          );
        case 'date':
          return (
            <GenericDatePicker
              name={name}
              date={values[id]}
              setDate={(date: Date) => onFieldChange(id, date)}
            />
          );
      }
    });
  };

  return (
    <VStack flex={1 / 2} space={2} m={0.5} bg="white" p={2} borderRadius={2}>
      <Text>
        {property?.hasOwnProperty('id') && !!values[property?.id]
          ? values[property?.id]
          : 'Untitled Field'}
      </Text>
      {renderFields()}

      <Button
        onPress={onRemove}
        leftIcon={<Icon name="trash-bin" />}
        size={'xs'}>
        Remove
      </Button>
    </VStack>
  );
};

export default React.memo(ModalCard);
