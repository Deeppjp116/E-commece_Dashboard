import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  HistogramSeries,
} from '@syncfusion/ej2-react-charts';
import ColorMapingGride from '../../components/Grids/ColorMapingGride';
import { colorMappingData } from '../../data/dummy';
import { Header } from '../../components';
const ColorMaping = () => {
  const primaryxAxis = {
    majorGridLines: { width: 3 },
    title: 'Score of Final Examination',
    valueType: 'Category',
  };
  const primaryyAxis = {
    title: 'Number of Students',
    minimum: 0,
    maximum: 40,
    interval: 5,
    majorTickLines: { width: 2 },
    majorGridLines: { width: 3 },
    lineStyle: { width: 0 },
  };
  const legendSettings = { visible: false };
  const tooltipsettings = { enable: true };
  const marker = {
    dataLabel: {
      visible: true,
      position: 'Top',
      font: { fontWeight: '600', color: '#ffffff' },
    },
  };
  return (
    <>
      <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl w-full'>
        <Header category='Chart' title='Compition of Marketing' />
        <ChartComponent
          primaryXAxis={primaryxAxis}
          primaryYAxis={primaryyAxis}
          tooltip={tooltipsettings}
          legendSettings={legendSettings}
          title='Examination Results'
          id='color-charts'
        >
          <Inject
            services={[HistogramSeries, Legend, Tooltip, Category, DataLabel]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              arker={marker}
              name='PolarChart'
              dataSource={colorMappingData}
              xName='x'
              yName='y'
              showNormalDistribution={true}
              type='Histogram'
              drawType='Line'
            ></SeriesDirective>
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      <ColorMapingGride />
    </>
  );
};

export default ColorMaping;
