import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ReactLineChart from './cross/components/charts/ReactLineChart';
import ReactBrezierLineChart from './cross/components/charts/ReactBrezierLineChart';
import ReactProgressChart from './cross/components/charts/ReactProgressChart';
import ReactBarChart from './cross/components/charts/ReactBarChart';
import ReactStackedBarChart from './cross/components/charts/ReactStackedBarChart';
import ReactPieChart from './cross/components/charts/ReactPieChart';
import ReactContributionGraph from './cross/components/charts/ReactContributionGraph';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Text style={styles.titleText}>Line Chart</Text>
            <ReactLineChart />
            <Text style={styles.titleText}>Bezier Line Chart</Text>
            <ReactBrezierLineChart />
            <Text style={styles.titleText}>Progress Chart</Text>
            <ReactProgressChart />
            <Text style={styles.titleText}>Bar Chart</Text>
            <ReactBarChart />
            <Text style={styles.titleText}>Stacked Bar Chart</Text>
            <ReactStackedBarChart />
            <Text style={styles.titleText}>Pie Chart</Text>
            <ReactPieChart />
            <Text style={styles.titleText}>Contribution graph</Text>
            <ReactContributionGraph />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#717171',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 24,
  },
  body: {},
  titleText: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default App;
