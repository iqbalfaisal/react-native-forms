import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {v4 as uuidv4} from 'uuid';

import {DashboardScreen, CategoriesScreen, ModalsScreen} from '../screens';
import {useSelector} from 'react-redux';
import {IRootState} from '../store';

const Drawer = createDrawerNavigator();

function SideMenu() {
  const categories = useSelector((state: IRootState) => state.Categories.data);

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      {categories.length > 0 &&
        categories?.map(category => (
          <Drawer.Screen
            options={{title: category?.name}}
            name={`Category+${uuidv4()}`}
            component={ModalsScreen}
            initialParams={category}
          />
        ))}
      <Drawer.Screen
        options={{title: 'Manage Categories'}}
        name="Categories"
        component={CategoriesScreen}
      />
    </Drawer.Navigator>
  );
}

export default SideMenu;
