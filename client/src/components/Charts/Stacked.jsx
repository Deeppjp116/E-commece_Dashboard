import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
  DataLabel,
} from '@syncfusion/ej2-react-charts';

import { stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

import { useDispatch } from 'react-redux';
import { selectMode } from '../../features/featuresSclice';

const Stacked = ({ stackedCustomSeries, width, height }) => {
  const currentMode = useDispatch(selectMode);
  return (
    <ChartComponent
      id='charts'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      legendSettings={{ background: 'white' }}
    >
      <Inject
        services={[Legend, DataLabel, Category, StackingColumnSeries, Tooltip]}
      />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => {
          return (
            <SeriesDirective
              key={index}
              {...item}
              marker={{ dataLabel: { visible: true } }}
            />
          );
        })}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
