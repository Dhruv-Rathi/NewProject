/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {View, Pressable, Text, SafeAreaView, TextInput} from 'react-native';
import CheckIcon from '../../assets/check';
import CrossIcon from '../../assets/cross';
import useSearchSelect from '../useSearchSelect';

const Index = ({
  label,
  id,
  showLabel = true,
  OptionsRenderer,
  SelectedDataRenderer = null,
  SearchRenderer = null,
  disabled = false,
  onChange,
  multiple = false,
  dataSource,
  icon,
  defaultSelected = [],
  ...props
}) => {
  const {options, addOrRemove, selected} = useSearchSelect(
    onChange,
    dataSource,
    defaultSelected,
  );

  return (
    <View
      style={{
        position: 'relative',
      }}>
      {label !== '' && label !== undefined && showLabel && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 12,
            marginBottom: 7,
          }}>
          <Text>{label}</Text>
          <View style={{marginLeft: 12}}>{icon}</View>
        </View>
      )}
      <View style={{...props.pickerWrapperStyles}}>
        <View style={{...props.optionsWrapperStyles}}>
          {options.length > 0 && (
            <>
              {options.map(option => (
                <Pressable
                  onPress={() => {
                    addOrRemove(multiple, option);
                  }}
                  key={`option${option.value}`}>
                  <OptionsRenderer
                    value={option}
                    selected={selected}
                    props={props}
                  />
                </Pressable>
              ))}
            </>
          )}
        </View>
      </View>
    </View>
  );
};

export default Index;
