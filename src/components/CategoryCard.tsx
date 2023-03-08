import React from 'react';
import {Button, Center, HStack, Input, VStack} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  ICategory,
  updateCategory,
  TDispatch,
  FieldTypes,
  removeCategory,
  removeModals,
} from '../store';
import {useDispatch} from 'react-redux';
import Picker from './Picker';
import {find} from 'lodash';

type ICategoryCard = {
  item: ICategory;
  index: number;
};

const TypesList = [
  {label: 'Date', value: 'date'},
  {label: 'Text', value: 'text'},
  {label: 'Checkbox', value: 'checkbox'},
  {label: 'Number', value: 'number'},
];

const CategoryCard = ({item}: ICategoryCard) => {
  const {fields, property, name} = item;

  const dispatch = useDispatch<TDispatch>();

  const onRemove = () => {
    dispatch(removeCategory(item.id));
    dispatch(removeModals(item.id));
  };

  const onNewField = () => {
    dispatch(
      updateCategory({
        ...item,
        fields: fields.concat({
          id: fields.length,
          name: '',
          fieldType: 'text',
        }),
      }),
    );
  };

  const onTypeChange = (id: number, type: FieldTypes) => {
    dispatch(
      updateCategory({
        ...item,
        fields: fields.map(field => {
          if (field.id === id) {
            return {...field, fieldType: type};
          }
          return field;
        }),
      }),
    );
  };

  const onTitleChange = (type: string) => {
    dispatch(
      updateCategory({
        ...item,
        property: find(fields, {name: type}) ?? null,
      }),
    );
  };

  const onFieldName = (id: number, name: string) => {
    dispatch(
      updateCategory({
        ...item,
        property:
          item.property?.id === id
            ? {
                ...item.property,
                name,
              }
            : item.property,
        fields: fields.map(field => {
          if (field.id === id) {
            return {...field, name};
          }
          return field;
        }),
      }),
    );
  };

  const onFieldRemove = (id: number) => {
    dispatch(
      updateCategory({
        ...item,
        property: item.property?.id === id ? null : item.property,
        fields: fields.filter(field => field.id !== id),
      }),
    );
  };

  const onNameChange = (name: string) => {
    dispatch(
      updateCategory({
        ...item,
        name,
      }),
    );
  };

  return (
    <VStack flex={1 / 2} space={2} m={0.5} bg="white" p={2} borderRadius={2}>
      <Input onChangeText={onNameChange} value={name} placeholder="Input" />
      {fields.length > 0 &&
        fields?.map((field, index) => (
          <HStack mx="auto" space={3}>
            <Input
              value={field.name}
              onChangeText={text => onFieldName(index, text)}
              size="sm"
              placeholder="Input"
              w="40%"
            />
            <Picker
              items={TypesList}
              value={field.name}
              placeholder={'type'}
              onChange={(value: any) => onTypeChange(index, value)}
            />
            <Center>
              <Icon onPress={() => onFieldRemove(index)} name="trash-bin" />
            </Center>
          </HStack>
        ))}
      <Picker
        items={fields.map(field => {
          return {value: field.name, label: field.name};
        })}
        value={property?.name}
        placeholder={'Title Field Picker'}
        onChange={(value: any) => onTitleChange(value)}
      />

      <HStack space={1} mx="auto">
        <Button onPress={onNewField} variant="outline" size={'xs'}>
          Add New Field
        </Button>
        <Button onPress={onRemove} size={'xs'}>
          Remove
        </Button>
      </HStack>
    </VStack>
  );
};

export default React.memo(CategoryCard);
