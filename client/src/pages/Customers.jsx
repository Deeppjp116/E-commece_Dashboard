import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Search,
  Selection,
  Page,
  Edit,
  Inject,
  Sort,
  Filter,
  Toolbar,
} from '@syncfusion/ej2-react-grids';

import { customersGrid } from '../data/dummy';
import { Button, Header } from '../components';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { setcustomerdata } from '../features/customerdatamodle';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:9999/customers')
      .then((response) => {
        setCustomers(response.data);
        dispatch(setcustomerdata(response.data));
        console.log(response.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <div className='flex justify-between'>
        <Header category='page' title='Customers' />
        <Button
          data={customers}
          bgColor={{ r: 50, g: 205, b: 50 }}
          text='Download Report'
          exclassName='mt-3 mb-3'
          color='white'
          borderRadius='10px'
        />
      </div>

      <GridComponent
        id='gridcomp'
        dataSource={customers}
        allowPaging
        allowSorting
        allowFiltering
        toolbar={['Search', 'Delete', 'add', 'Edit']}
        editSettings={{
          allowEditing: true,
          allowDeleting: true,
          allowAdding: true,
        }}
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject
          services={[Page, Search, Sort, Filter, Toolbar, Selection, Edit]}
        />
      </GridComponent>
    </div>
  );
};

export default Customers;
