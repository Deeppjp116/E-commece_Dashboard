import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Search,
  Page,
  Edit,
  Inject,
  Sort,
  Filter,
  Toolbar,
} from '@syncfusion/ej2-react-grids';

import { employeesGrid } from '../data/dummy';
import { Button, Header } from '../components';

const Employees = () => {
  const [employeesData, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get('http://localhost:9999/employees')
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => console.error('Error fetching data:', error));
    console.log(employeesData);
  }, []);
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <div className='flex justify-between'>
        <Header category='page' title='Employees' />
        <Button
          data={employeesData}
          bgColor={{ r: 50, g: 205, b: 50 }}
          text='Download Report'
          exclassName='mt-3 mb-3'
          color='white'
          borderRadius='10px'
        />
      </div>

      <GridComponent
        id='gridcomp'
        dataSource={employeesData}
        allowPaging
        allowSorting
        allowFiltering
        toolbar={['Search']}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => {
            return <ColumnDirective key={index} {...item} />;
          })}
        </ColumnsDirective>
        <Inject services={[Page, Search, Edit, Sort, Filter, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;
