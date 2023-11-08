import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  BubbleSeries,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';
import { BubbleData } from '../../data/dummy';
function Bar() {
  const primaryxAxis = {
    title: 'Literacy Rate',
    minimum: 50,
    maximum: 100,
    interval: 5,
  };
  const primaryyAxis = {
    title: 'GDP growth rate',
    minimum: -2,
    maximum: 16,
    interval: 2,
  };

  return (
    <div className=' m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl min-w-500 max-w-900'>
      <Header category='Bubble series' title='Literacy Rate' />
      <ChartComponent
        id='charts'
        primaryXAxis={primaryxAxis}
        primaryYAxis={primaryyAxis}
        title='GDP vs Literacy Rate'
        tooltip={{ enable: true }}
      >
        <Inject services={[BubbleSeries, Tooltip]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            dataSource={BubbleData}
            xName='x'
            yName='y'
            size='size'
            type='Bubble'
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
}
export default Bar;
