import {
  AccumulationChartComponent,
  AccumulationSeriesCollectionDirective,
  AccumulationSeriesDirective,
  Inject,
  PieSeries,
  AccumulationLegend,
  AccumulationDataLabel,
} from '@syncfusion/ej2-react-charts';

import { pieChartData } from '../../data/dummy';
import { Header } from '../../components';
const Pie = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl '>
      <Header category='Chart' title='Ificiency of oil-fired power' />
      <AccumulationChartComponent id='charts'>
        <Inject
          services={[PieSeries, AccumulationLegend, AccumulationDataLabel]}
        />
        <AccumulationSeriesCollectionDirective>
          <AccumulationSeriesDirective
            dataSource={pieChartData}
            xName='x'
            yName='y'
            type='Pie'
            dataLabel={{ visible: true, position: 'Outside' }}
          />
        </AccumulationSeriesCollectionDirective>
      </AccumulationChartComponent>
    </div>
  );
};

export default Pie;
