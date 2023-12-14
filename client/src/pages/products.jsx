import React, { useEffect, useState } from 'react';
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

import { BillingGrid } from '../data/dummy';
import { Button, Header } from '../components';
import axios from 'axios';

const products = () => {
  const [billingdata, setbillingdata] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get('http://localhost:9999/products')
      .then((response) => {
        const newdata = response.data;
        console.log(newdata);
        setbillingdata(newdata);
      })
      .catch((error) => console.error('Error fetching data:', error));
    console.log(billingdata);
  }, []);

  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <div className='flex justify-between'>
        {console.log(billingdata)}
        <Header category='page' title='Billing' />
        <Button
          // data={BillingData}
          bgColor={{ r: 50, g: 205, b: 50 }}
          text='Download Report'
          exclassName='mt-3 mb-3'
          color='white'
          borderRadius='10px'
        />
      </div>

      <GridComponent
        id='gridcomp'
        dataSource={billingdata}
        allowPaging
        allowSorting
        allowFiltering
        toolbar={['Search', 'Delete', 'add', 'Edit']}
        editSettings={{
          
          editOptions: true,
          allowDeleting: true,
          allowAdding: true,
        }}
      >
        <ColumnsDirective>
          {BillingGrid.map((item, index) => {
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

export default products;
