import {Box, Button, Center, Text} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RenderCategories} from '../components';

import {selectCategories, setNewCategory, TDispatch} from '../store';

export default function CategoriesScreen({}: any) {
  const data = useSelector(selectCategories);

  const dispatch = useDispatch<TDispatch>();

  const renderEmptyContent = () => {
    return (
      <Center>
        <Text>No categories to display found</Text>
      </Center>
    );
  };

  const renderFooterContent = () => {
    return (
      <Center marginY={2}>
        <Button
          onPress={() => {
            dispatch(setNewCategory());
          }}>
          Add a Category
        </Button>
      </Center>
    );
  };

  return (
    <Box flex={1}>
      <RenderCategories
        data={data}
        ListEmptyComponent={renderEmptyContent}
        ListFooterComponent={renderFooterContent}
      />
    </Box>
  );
}
