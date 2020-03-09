import React, {Component} from 'react';
import {ProgressChart} from 'react-native-chart-kit';
import {View, Dimensions, StyleSheet} from 'react-native';

export default class ReactProgressChart extends Component {
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
      labels: ['Swim', 'Bike', 'Run'], // optional
      data: [0.4, 0.6, 0.8],
    };
    return (
      <View>
        <ProgressChart
          data={data}
          width={screenWidth}
          height={256}
          chartConfig={chartConfig}
          hideLegend={false}
          style={styles.chart}
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
