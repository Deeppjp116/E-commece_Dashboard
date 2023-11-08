import React from 'react';
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

import { employeesData, employeesGrid } from '../data/dummy';
import { Button, Header } from '../components';

const Employees = () => {
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
