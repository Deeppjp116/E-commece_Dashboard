import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from '@syncfusion/ej2-react-charts';

const SparkLine = ({ currentColor, id, type, height, width, data, color }) => {
  const transformedData = data.map((item) => ({
    x: item.x,
    xval: item.xval,
    y: item.y,
    yval: item.yval,
  }));
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={1}
      valueType='Numeric'
      fill={color}
      border={{ color: currentColor, width: 2 }}
      dataSource={transformedData}
      xName='x'
      yName='y'
      type={type}
      alt='ChartLine'
      tooltipSettings={{
        visible: true,
        format: 'Yearly ${x} : Growth ${y}',
        trackLineSettings: {
          visible: true,
        },
      }}
      markerSettings={{ visible: ['All'], size: 3.5, fill: currentColor }}
    >
      {/* {console.log(data)}
      {console.log(data.x)} */}
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
