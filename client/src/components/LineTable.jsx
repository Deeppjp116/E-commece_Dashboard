import React, { useState } from 'react';
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

import { inflationRatesGrid } from '../data/dummy';
import { Button, Header } from '../components';
import { useEffect } from 'react';
import axios from 'axios';

const LineTable = () => {
  const [inflationdata, setinflationdata] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:9999/line')
      .then((response) => {
        setinflationdata(response.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
    console.log(inflationdata);
  }, []);

  return (
    <div className='bg-white rounded-3xl'>
      <div className='flex justify-between'>
        <Button
          data={inflationdata}
          bgColor={{ r: 50, g: 205, b: 50 }}
          text='Download Report'
          exclassName='mt-3 mb-3'
          color='white'
          borderRadius='10px'
        />
      </div>

      <GridComponent
        id='gridcomp'
        dataSource={inflationdata}
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
          {inflationRatesGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} width='auto' />;
          })}
        </ColumnsDirective>
        <Inject services={[Search, Sort, Filter, Toolbar, Selection, Edit]} />
      </GridComponent>
    </div>
  );
};

export default LineTable;
