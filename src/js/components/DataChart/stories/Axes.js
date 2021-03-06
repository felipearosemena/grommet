import React from 'react';
import { storiesOf } from '@storybook/react';

import { Box, DataChart, Grommet } from 'grommet';
import { grommet } from 'grommet/themes';

const data = [];
for (let i = 0; i < 7; i += 1) {
  const v = Math.sin(i / 2.0);
  const digits = ((i % 12) + 1).toString().padStart(2, 0);
  data.push({
    // explore variations in date format by changing the xAxis key to
    // the timer period you are interested in
    second: `2020-05-15T08:04:${digits}`,
    minute: `2020-05-15T08:${digits}:00`,
    hour: `2020-05-15T${digits}:00:00`,
    day: `2020-05-${digits}`,
    month: `2020-${digits}-15`,
    year: `20${digits}-01-15`,
    // explore variations in yAxis value handling by changing the chart key
    // to one of these
    percent: Math.abs(v * 100), // make yAxis suffix '%'
    amount: i * 111111, // make yAxis prefix '$'
  });
}

const AxesDataChart = () => (
  <Grommet theme={grommet}>
    <Box align="center" justify="start" pad="large">
      <DataChart
        data={data}
        chart={{ key: 'percent', type: 'bar' }}
        xAxis={{ key: 'day', guide: true }}
        yAxis={{ guide: true, labels: 3, suffix: '%' }}
      />
    </Box>
  </Grommet>
);

storiesOf('DataChart', module).add('Axes', () => <AxesDataChart />);
