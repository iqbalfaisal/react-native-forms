import React from 'react';
import {Select} from 'native-base';

type IItem = {
  value: string;
  label: string;
};

type IPicker = {
  items: IItem[];
  value: string;
  onChange: any;
  placeholder: string;
};

const Picker = ({value, items, placeholder, onChange}: IPicker) => {
  return (
    <Select
      selectedValue={value}
      placeholder={placeholder}
      _selectedItem={{
        bg: 'teal.600',
        // endIcon: <CheckIcon size="5" />,
      }}
      onValueChange={onChange}>
      {items.map(item => {
        return <Select.Item label={item.label} value={item.value} />;
      })}
    </Select>
  );
};

export default React.memo(Picker);
