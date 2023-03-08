import React, {useState} from 'react';
import {Button} from 'react-native';
import DatePicker from 'react-native-date-picker';

type IPicker = {
  date?: Date;
  setDate: any;
  name: string;
};

const GenericDatePicker = ({date, name, setDate}: IPicker) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button title={name} onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date || new Date()}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default React.memo(GenericDatePicker);
