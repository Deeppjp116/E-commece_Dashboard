import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  AccumulationLegend,
  PyramidSeries,
  AccumulationTooltip,
  AccumulationDataLabel,
  Tooltip,
} from '@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy';
import { Header } from '../../components';

function Pyramid() {
  const marker = { visible: true, width: 10, height: 10 };

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl '>
      <Header category='Pyramid' title='Inflation in the Percentage' />
      <AccumulationChartComponent
        id='charts'
        tooltip={{
          enable: true,
          header: 'Unemployment',
          format: '<b>${point.x} : ${point.y}%</b>',
        }}
      >
        <Inject
          services={[
            AccumulationLegend,
            PyramidSeries,
            AccumulationTooltip,
            AccumulationDataLabel,
            Tooltip,
          ]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={pieChartData}
            xName='x'
            yName='y'
            type='Pyramid'
            gapRatio={0.1}
            marker={marker}
          ></AccumulationSeriesDirective>
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
}
export default Pyramid;
