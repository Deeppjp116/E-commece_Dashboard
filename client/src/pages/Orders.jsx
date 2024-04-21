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

  const handleEdit = async (data) => {
    const updatedOrder = { ...data.newData[0] }; // Get edited order data
    const orderId = updatedOrder._id; // Assuming backend uses _id for identification
    console.log(updatedOrder);
    try {
      const response = await axios.put(
        `http://localhost:9999/orders/${orderId}`,
        updatedOrder
      );
      setOrders(
        orders.map((order) =>
          order.id === updatedOrder.id ? response.data : order
        )
      );
      dispatch(updatedOrder(response.data)); // Update Redux state for updated order
    } catch (error) {
      console.error('Error updating order:', error);
      // Handle edit failure (e.g., display error message)
    }
  };

  const handleDelete = async (data) => {
    const orderId = data.actionData[0]._id; // Get order ID for deletion
    try {
      await axios.delete(`http://localhost:9999/orders/${orderId}`);
      setOrders(orders.filter((order) => order.id !== orderId));
      dispatch(deleteOrder(orderId)); // Update Redux state for deleted order
    } catch (error) {
      console.error('Error deleting order:', error);
      // Handle delete failure (e.g., display error message)
    }
  };

  const editOptions = {
    allowEditing: true,
    allowAdding: true, // Adjust based on backend support
    allowDeleting: true,
    mode: 'Batch', // Enable batch editing for efficiency
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
      {orders.length > 0 && (
        <GridComponent
          id='gridcomp'
          dataSource={orders}
          editSettings={editOptions}
          toolbar={toolbarOptions}
          allowGrouping
          allowPaging
          allowSorting
          allowFiltering
          onEditComplete={handleEdit} // Call handleEdit on edit completion
          onDeleteComplete={handleDelete} // Call handleDelete on delete completion
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
      )}
    </div>
  );
};

export default Orders;
