import ChartBar from '../chart-bar/chart-bar.component';

import './chart.component.scss';

type ChartProps = {
  dataPoints: any[];
};

const Chart = (props: ChartProps) => {
  const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointsValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
