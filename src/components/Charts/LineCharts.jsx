import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  DateTime,
  Legend,
  Tooltip,
  LineSeries,
} from '@syncfusion/ej2-react-charts';

import {
  lineCustomSeries,
  LinePrimaryXAxis,
  LinePrimaryYAxis,
} from '../../data/dummy';
import { useSelector } from 'react-redux';
import { selectfeature } from '../../features/featuresSclice';

const animationSettings = {
  enable: true, // Set to true to enable animation
  duration: 1000, // Set the animation duration (if needed)
  delay: 0, // Set the animation delay (if needed)
};
const AreaChart = () => {
  const currentMode = useSelector(selectfeature);
  return (
    <div>
      <ChartComponent
        id='line-chart'
        height='420px'
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        animation={animationSettings}
        enableAnimation={true}
        Animation={{ enable: true, duration: 3000 }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />

        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  );
};

export default AreaChart;
