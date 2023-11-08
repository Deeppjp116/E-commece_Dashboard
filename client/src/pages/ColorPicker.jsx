import * as React from 'react';
import { world_map } from '../data/world_map';
import { uncountries } from '../data/data';
import * as ReactDOM from 'react-dom';
import {
  MapsComponent,
  LayersDirective,
  LayerDirective,
  Inject,
  MapsTooltip,
  DataLabel,
  Marker,
  MarkersDirective,
  MarkerDirective,
  Zoom,
  Legend,
} from '@syncfusion/ej2-react-maps';

export function Maps() {
  console.log(uncountries[0].Country);
  return (
    <MapsComponent
      id='maps'
      zoomSettings={{ enable: true, enablePanning: true }}
      legendSettings={{
        visible: true,
        mode: 'Interactive',
        invertedPointer: true,
      }}
    >
      <Inject services={[MapsTooltip, Marker, Zoom, Legend]} />
      <LayersDirective>
        <LayerDirective
          shapeData={world_map}
          shapeDataPath='Country'
          shapePropertyPath='name'
          dataSource={uncountries}
          shapeSettings={{
            autofill: true,
          }}
          tooltipSettings={{
            visible: true,
            valuePath: 'name',
            colorValuePath: 'Membership',
            colorMapping: [
              { value: 'Permanent', color: '#D84444' },
              { value: 'Non-Permanent', color: '#316DB5' },
            ],
            // format: uncountries.map((arry, index) => ``),
          }}
        >
          <MarkersDirective>
            <MarkerDirective
              enableDrag={true}
              visible={true}
              animationDuration={3}
              dataSource={[
                {
                  latitude: 49.95121990866204,
                  longitude: 18.468749999999998,
                  name: 'MarkerOne',
                },
                {
                  latitude: 59.88893689676585,
                  longitude: -109.3359375,
                  name: 'MarkerTwo',
                },
                {
                  latitude: -6.64607562172573,
                  longitude: -55.54687499999999,
                  name: 'MarkerThree',
                },
                {
                  latitude: 23.644385824912135,
                  longitude: 77.83189239539234,
                  name: 'MarkerFour',
                },
                {
                  latitude: 63.66569332894224,
                  longitude: 98.2225173953924,
                  name: 'MarkerFive',
                },
              ]}
              shape='Balloon'
              width={20}
              height={20}
              border={{ width: 2, color: '#285255' }}
            ></MarkerDirective>
          </MarkersDirective>
        </LayerDirective>
      </LayersDirective>
    </MapsComponent>
  );
}

export default Maps;
