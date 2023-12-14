import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  StackingBarSeries,
} from '@syncfusion/ej2-react-charts';
// Import your required dependencies here

import { stackedCustomSeriess } from '../../data/dummy';
import { Header } from '..';
function Stacked() {
  const primaryxAxis = { valueType: 'Category', title: 'Months' };
  const primaryyAxis = {
    title: 'Percentage (%)',

    maximum: 100,
    edgeLabelPlacement: 'Shift',
    labelFormat: '{value}%',
  };

  return (
    <div className=' m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl min-w-500 max-w-900'>
      <Header category='Stacked' title='quarterly sales in the Market' />
      <ChartComponent
        id='charts'
        primaryXAxis={primaryxAxis}
        primaryYAxis={primaryyAxis}
        title='Sales Comparison'
        tooltip={{
          enable: true,
          header: 'Rated Market Price',
          format: '<b>${point.x} : ${point.y}</b>',
        }}
      >
        <Inject
          services={[StackingBarSeries, Legend, Tooltip, DataLabel, Category]}
        />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={stackedCustomSeriess}
            xName='x'
            yName='y'
            name='Apple'
            type='StackingBar100'
            fill='red'
            border={{ width: 2, color: 'black' }}
          ></SeriesDirective>
          <SeriesDirective
            dataSource={stackedCustomSeriess}
            xName='x'
            yName='y1'
            name='Orange'
            type='StackingBar100'
            fill='blue'
            border={{ width: 1, color: 'black' }}
          ></SeriesDirective>
          <SeriesDirective
            dataSource={stackedCustomSeriess}
            xName='x'
            yName='y2'
            name='Wastage'
            type='StackingBar100'
            fill='yellow'
            border={{ width: 2, color: 'black' }}
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}

export default Stacked;
