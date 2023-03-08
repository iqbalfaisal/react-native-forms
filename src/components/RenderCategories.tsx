import React from 'react';
import {FlatList} from 'react-native';
import {ICategory} from '../store';

import CategoryCard from './CategoryCard';

type IRenderCategories = {
  data: ICategory[];
  [x: string]: any;
};

export default function RenderCategories({data, ...rest}: IRenderCategories) {
  const renderCategory = ({item, index}: any) => {
    return <CategoryCard item={item} index={index} />;
  };

  return (
    <FlatList
      numColumns={2}
      // keyExtractor={item => item.id.toString()}
      data={data}
      renderItem={renderCategory}
      extraData={data}
      {...rest}
    />
  );
}
