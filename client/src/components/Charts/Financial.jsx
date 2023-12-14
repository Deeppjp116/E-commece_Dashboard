import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  PolarSeries,
  LineSeries,
  Category,
  Tooltip,
} from '@syncfusion/ej2-react-charts';
import Financialgrid from '../../components/Grids/Financial';
import { Polardata } from '../../data/dummy';
import { Header } from '../../components';
const Financial = () => {
  const primaryxAxis = {
    title: 'Month',
    valueType: 'Category',
    labelPlacement: 'OnTicks',
  };
  const primaryyAxis = {
    minimum: 20,
    maximum: 40,
    interval: 5,
    title: 'Efficiency',
    labelFormat: '{value}%',
  };
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl '>
      <Header category='Chart' title='Sales/Months' />
      <ChartComponent
        id='Polar-charts'
        primaryXAxis={primaryxAxis}
        primaryYAxis={primaryyAxis}
        tooltip={{ enable: true }}
      >
        <Inject services={[Tooltip, PolarSeries, LineSeries, Category]} />
        <SeriesCollectionDirective>
          <SeriesDirective
            marker={{ visible: true }}
            name='PolarChart'
            dataSource={Polardata}
            xName='x'
            yName='y'
            type='Polar'
            drawType='Line'
          ></SeriesDirective>
        </SeriesCollectionDirective>
      </ChartComponent>
      <Financialgrid />
    </div>
  );
};

export default Financial;
