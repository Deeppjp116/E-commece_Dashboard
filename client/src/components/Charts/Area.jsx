import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  SplineAreaSeries,
} from '@syncfusion/ej2-react-charts';
import { Header } from '..';
import AreaGrid from '../Grids/Areagrid';
import {
  areaCustomSeries,
  areaPrimaryXAxis,
  areaPrimaryYAxis,
} from '../../data/dummy';
import { useSelector } from 'react-redux';
import { selectfeature } from '../../features/featuresSclice';

const AreaChart = () => {
  const currentMode = useSelector(selectfeature);
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl '>
      <Header category='Area' title='inflation Rate in Percentage' />
      <ChartComponent
        id='area-chart'
        height='420px'
        primaryXAxis={areaPrimaryXAxis}
        primaryYAxis={areaPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        enableAnimation={true}
        Animation={{ enable: true, duration: 3000 }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[DateTime, SplineAreaSeries, Legend]} />

        <SeriesCollectionDirective>
          {areaCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
      <AreaGrid />
    </div>
  );
};

export default AreaChart;
