import {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import SelectBase from './base';
import CrossIcon from '../../assets/cross';
import CheckIcon from '../../assets/check';
export default function (props) {
  return (
    <SelectBase
      SelectedDataRenderer={SelectedDataRenderer}
      OptionsRenderer={OptionsRenderer}
      SearchRenderer={SearchRenderer}
      {...props}
    />
  );
}

const OptionsRenderer = ({value, selected}) => {
  const [found, setFound] = useState(false);

  useEffect(() => {
    let localFound = selected.some(current => current.value === value.value);
    setFound(localFound === false ? false : true);
  }, [selected, value.value]);

  return (
    <View style={{flexDirection: 'row'}}>
      <View>
        {value.avatar && (
          <Image
            style={{height: 4, marginRight: 2}}
            src={value.avatar}
            alt={value.label}
          />
        )}
        <Text>{value.label}</Text>
      </View>
      {found === true && (
        <View>
          <CheckIcon />
        </View>
      )}
    </View>
  );
};

const SearchRenderer = ({query = '', onSearch, cancelSearch}) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{flex: 5, justifyContent: 'flex-start'}}>
        <TextInput
          defaultValue={query}
          placeholder="Type something ..."
          onChange={e => {
            onSearch(e);
            console.log(query, typeof query);
          }}
        />
      </View>
      <View style={{justifyContent: 'flex-end'}}>
        <Pressable
          style={{position: 'absolute'}}
          onPress={() => {
            cancelSearch();
          }}>
          <CrossIcon style={{width: 5, height: 5}} />
        </Pressable>
      </View>
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