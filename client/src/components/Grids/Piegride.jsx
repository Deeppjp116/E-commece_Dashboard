import React from 'react';
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

import { PieData, PieGrides } from '../../data/dummy';
import Button from '../Button';

const Bargrid = () => {
  return (
    <div className='bg-white rounded-3xl'>
      <div className='flex justify-between'>
        <Button
          data={PieData}
          bgColor={{ r: 50, g: 205, b: 50 }}
          text='Download Report'
          exclassName='mt-3 mb-3'
          color='white'
          borderRadius='10px'
        />
      </div>

      <GridComponent
        id='gridcomp'
        dataSource={PieData}
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
          {PieGrides.map((item, index) => {
            return <ColumnDirective key={index} {...item} width='auto' />;
          })}
        </ColumnsDirective>
        <Inject services={[Search, Sort, Filter, Toolbar, Selection, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Bargrid;
