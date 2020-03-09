import React, {Component} from 'react';
import {BarChart} from 'react-native-chart-kit';
import {View, Dimensions, StyleSheet} from 'react-native';

export default class ReactBarChart extends Component {
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
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
        },
      ],
    };
    return (
      <View>
        <BarChart
          style={styles.chart}
          data={data}
          width={screenWidth}
          height={256}
          yAxisLabel="$"
          chartConfig={chartConfig}
          verticalLabelRotation={30}
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
