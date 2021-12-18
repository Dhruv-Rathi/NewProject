import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import CheckIcon from './assets/check';
import CrossIcon from './assets/cross';
import CircleIcon from './assets/circle';
import {Checkbox, Radio, Select} from './src';

const fetchContinents = (q = '') => {
  let continents = [
    'Africa',
    'Antarctica',
    'Asia',
    'Oceania',
    'Europe',
    'North America',
    'South America',
  ];
  continents = continents.map(c => {
    return {
      value: c.toLowerCase(),
      label: c,
    };
  });
  if (q !== '') {
    continents = continents.filter(c => {
      if (c.value.search(q.toLocaleLowerCase()) > -1) {
        return c;
      }
    });
  }

  return continents;
};

const App = () => {
  const [refreshCounter, setRefreshCounter] = useState(0);
  return (
    <ScrollView>
      <View style={{marginVertical: 10, marginHorizontal: 100, flex: 1}}>
        <View style={{marginBottom: 20}}>
          <Text style={{fontWeight: 'bold'}}>CheckBox Multiple Picker</Text>
          <Checkbox
            label="Select Continent"
            dataSource={q => {
              return fetchContinents(q);
            }}
            onChange={v => {
              console.log(v);
            }}
            name="continent"
            multiple="true"
          />
        </View>
        <View style={{marginVertical: 40}}>
          <Text style={{fontWeight: 'bold'}}>Radio Single Picker</Text>
          <Radio
            label="Select Continent"
            dataSource={q => {
              return fetchContinents(q);
            }}
            onChange={v => {
              console.log(v);
            }}
            name="continent"
            // multiple="true"
          />
        </View>
        <View>
          <Text style={{fontWeight: 'bold'}}>Select Picker</Text>
          <Button
            onPress={() => {
              setRefreshCounter(curr => curr + 1);
            }}
            title="Increase"
          />
          <Select
            refresh={refreshCounter}
            label="Select Continent"
            dataSource={q => {
              console.log('data source');
              return fetchContinents(q);
            }}
            onChange={v => {
              console.log(v);
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default App;
