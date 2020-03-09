import React, {Component} from 'react';
import {PieChart} from 'react-native-chart-kit';
import {View, Dimensions, StyleSheet} from 'react-native';

export default class ReactPieChart extends Component {
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
    const data = [
      {
        name: 'Seoul',
        population: 2150,
        color: '#111',
        legendFontColor: 'rgba(26, 205, 115, 1)',
        legendFontSize: 15,
      },
      {
        name: 'Toronto',
        population: 280,
        color: '#444',
        legendFontColor: 'rgba(26, 205, 115, 1)',
        legendFontSize: 15,
      },
      {
        name: 'Beijing',
        population: 52,
        color: '#777',
        legendFontColor: 'rgba(26, 205, 115, 1)',
        legendFontSize: 15,
      },
      {
        name: 'New York',
        population: 85,
        color: '#AAA',
        legendFontColor: 'rgba(26, 205, 115, 1)',
        legendFontSize: 15,
      },
      {
        name: 'Moscow',
        population: 1192,
        color: '#CCC',
        legendFontColor: 'rgba(26, 205, 115, 1)',
        legendFontSize: 15,
      },
    ];
    return (
      <View>
        <PieChart
          data={data}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="rgba(5, 20, 10, 0.5)"
          paddingLeft="15"
          absolute
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
