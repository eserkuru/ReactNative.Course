import React, {Component} from 'react';
import {StackedBarChart} from 'react-native-chart-kit';
import {View, Dimensions, StyleSheet} from 'react-native';

export default class ReactStackedBarChart extends Component {
  render() {
    const screenWidth = Dimensions.get('window').width - 20;
    const chartConfig = {
      backgroundGradientFrom: '#1E2923',
      backgroundGradientFromOpacity: 0.5,
      backgroundGradientTo: '#08130D',
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
    };
    const data = {
      labels: ['Test1', 'Test2'],
      legend: ['L1', 'L2', 'L3'],
      data: [[60, 60, 60], [30, 30, 60]],
      barColors: ['#333', '#555', '#777'],
    };
    return (
      <View>
        <StackedBarChart
          style={styles.chart}
          data={data}
          width={screenWidth}
          height={256}
          chartConfig={chartConfig}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  chart: {
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 16,
  },
});
