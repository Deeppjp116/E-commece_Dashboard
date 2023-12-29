import React, { useEffect, useState } from 'react';
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
  Toolbar,
  Inject,
} from '@syncfusion/ej2-react-grids';

import { ordersData, ordersGrid } from '../data/dummy';
import { Button, Header } from '../components';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { setsalesdata } from '../features/salesdatamodle.js';

const Orders = () => {
  const dispatch = useDispatch();

  const [orders, setOrders] = useState([]);
  const { data, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    axios
      .get('http://localhost:9999/orders')
      .then((response) => {
        setOrders(response.data);
        dispatch(setsalesdata(response.data));
        console.log(response.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const editOptions = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
  };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];

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
        dataSource={orders}
        editSettings={editOptions}
        toolbar={toolbarOptions}
        allowGrouping
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
