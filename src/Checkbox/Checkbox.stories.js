import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import CheckBox from './index';

import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';

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

storiesOf('Checkbox Picker', module)
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
  .add('Default Picker', () => (
    <CheckBox
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
    <CheckBox
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
  ))
  .add('Multiple Select', () => (
    <CheckBox
      label="Select Continent"
      dataSource={q => {
        return fetchContinents(q);
      }}
      onChange={v => {
        console.log(v);
      }}
      multiple={true}
    />
  ))
  .add('Multiple Selected', () => (
    <CheckBox
      label="Select Continent"
      dataSource={q => {
        return fetchContinents(q);
      }}
      defaultSelected={[
        {label: 'Asia', value: 'asia'},
        {label: 'Europe', value: 'europe'},
      ]}
      onChange={v => {
        console.log(v);
      }}
      multiple={true}
    />
  ));
