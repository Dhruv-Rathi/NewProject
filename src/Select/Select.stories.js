import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import Select from './index';
import {SafeAreaView} from 'react-native';
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

storiesOf('Pickers/Select', module)
  .addDecorator(getStory => (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
      }}>
      {getStory()}
    </SafeAreaView>
  ))
  .add('Single', () => (
    <Select
      label="Select Continent"
      dataSource={q => {
        return fetchContinents(q);
      }}
      onChange={v => {
        console.log(v);
      }}
      name="continent"
    />
  ))
  .add('Single Selected', () => (
    <Select
      label="Select Continent"
      dataSource={q => {
        return fetchContinents(q);
      }}
      defaultSelected={[{label: 'Asia', value: 'asia'}]}
      onChange={v => {
        console.log(v);
      }}
      name="continent"
    />
  ));
