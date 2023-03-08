import React from 'react';
import {FlatList} from 'react-native';

import {ICategory, IModalObject} from '../store';
import ModalCard from './ModalCard';

type IRenderModals = {
  category?: ICategory;
  data: IModalObject[];
  [x: string]: any;
};

export default function RenderModals({category, data, ...rest}: IRenderModals) {
  const renderCategory = ({item, index}: any) => {
    return <ModalCard category={category} item={item} index={index} />;
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
