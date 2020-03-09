import React, {Component} from 'react';
import {ContributionGraph} from 'react-native-chart-kit';
import {View, Dimensions, StyleSheet} from 'react-native';

export default class ReactContributionGraph extends Component {
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
    const commitsData = [
      {date: '2020-01-02', count: 1},
      {date: '2020-01-03', count: 2},
      {date: '2020-01-04', count: 3},
      {date: '2020-01-05', count: 4},
      {date: '2020-01-06', count: 5},
      {date: '2020-01-30', count: 2},
      {date: '2020-01-31', count: 3},
      {date: '2020-03-01', count: 2},
      {date: '2020-04-02', count: 4},
      {date: '2020-03-05', count: 2},
      {date: '2020-02-30', count: 4},
    ];
    return (
      <View>
        <ContributionGraph
          values={commitsData}
          endDate={new Date('2020-04-01')}
          numDays={91}
          width={screenWidth}
          height={220}
          chartConfig={chartConfig}
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
