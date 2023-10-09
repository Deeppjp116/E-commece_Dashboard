import React from 'react';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  Edit,
  Inject,
  Toolbar,
} from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Button, Header } from '../components';

const Orders = () => {
  console.log(ordersData);

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <div className='flex justify-between'>
        <Header category='page' title='Orders' />
        <Button
          data={ordersData}
          bgColor={{ r: 50, g: 205, b: 50 }}
          text='Download Report'
          exclassName='mt-3 mb-3'
          color='white'
          borderRadius='10px'
        />
      </div>

      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowFiltering
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject
          services={[Resize, Sort, ContextMenu, Filter, Page, Edit, Toolbar]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;
