/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import CheckBox from './base';
import CheckIcon from '../../assets/check';

export default function (props) {
  return (
    <CheckBox
      SelectedDataRenderer={SelectedDataRenderer}
      OptionsRenderer={OptionsRenderer}
      SearchRenderer={SearchRenderer}
      style={{...(props.optionsWrapperStyles || {marginVertical: 2})}}
      {...props}
    />
  );
}

const OptionsRenderer = ({value, selected, props}) => {
  const [found, setFound] = useState(false);

  useEffect(() => {
    let localFound = selected.some(current => current.value === value.value);
    setFound(localFound === false ? false : true);
  }, [selected, value.value]);

  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        id={value.value}
        name={props.name}
        onChange={() => {}}
        // onPress={setFound(true)}
        style={{
          borderColor: '#000',
          padding: 2,
          height: 20,
          borderRadius: 15,
          backgroundColor: found ? '#0000FF' : '#fff',
          width: 20,
          borderWidth: 1,
          marginHorizontal: 4,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: 12,
          marginBottom: 7,
        }}>
        <Text>{value.label}</Text>
      </View>
    </View>
  );
};

const SearchRenderer = ({query, onSearch, cancelSearch}) => {
  return (
    <View>
      <TextInput
        defaultValue={query}
        placeholder="Type something ..."
        onChange={e => {
          onSearch(e);
        }}
      />
      <Text>
        <Text
          style={{position: 'absolute'}}
          onPress={() => {
            cancelSearch();
          }}>
          {/* <XIcon style={{width: 5, height: 5}} /> */}
        </Text>
      </Text>
    </View>
  );
};

const SelectedDataRenderer = ({selected}) => {
  const [text, setText] = useState('None Selected');
  useEffect(() => {
    if (selected.length > 0) {
      let tempText = selected.map(val => val.label).join('; ');
      setText(tempText);
    } else {
      setText('None Selected');
    }
  }, [selected]);
  return <>{text}</>;
};
