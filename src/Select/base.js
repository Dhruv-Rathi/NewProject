import React from 'react';
import useSearchSelect from '../useSearchSelect';
import {View, Text, Pressable} from 'react-native';
import ArrowDownIcon from '../../assets/downArrow';
import useOutsideClicker from '../useOutsideClicker';
const LabelCloseComponent = () => {
  return <Text>Close</Text>;
};
const LabelClearComponent = () => {
  return <Text>Clear</Text>;
};

const NoDataComponent = () => {
  return (
    <View>
      <Text>No Data</Text>
    </View>
  );
};

const Index = ({
  id,
  label,
  showLabel = true,
  OptionsRenderer,
  SelectedDataRenderer = null,
  SearchRenderer = null,
  disabled = false,
  onChange,
  multiple = false,
  dataSource,
  defaultSelected = [],
  errorText = undefined,
  valueKey = 'value',
  defaultOpen = false,
  defaultQuery = '',
  refresh = '',
  ...props
}) => {
  const {
    open,
    setOpen,
    query,
    setQuery,
    options,
    addOrRemove,
    selected,
    setSelected,
  } = useSearchSelect(
    onChange,
    dataSource,
    defaultSelected,
    valueKey,
    defaultOpen,
    defaultQuery,
    refresh,
  );

  const visRef = useOutsideClicker(() => {
    setOpen(false);
  });

  return (
    <View style={{...props.componentWrapperStyles}}>
      {label !== '' && label !== undefined && showLabel && (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 12,
            marginBottom: 7,
          }}>
          <Text>{label}</Text>
        </View>
      )}
      {selected.length > 0 && !open && (
        <View>
          <Pressable onPress={() => setSelected([])}>
            {props.clearText || <LabelClearComponent />}
          </Pressable>
        </View>
      )}
      {open && (
        <View>
          <Pressable onPress={() => setOpen(false)}>
            {props.closeComponent || <LabelCloseComponent />}
          </Pressable>
        </View>
      )}

      <View>
        {open === false && (
          <Pressable
            onPress={() => setOpen(true)}
            style={{flexDirection: 'row'}}>
            <Text style={{flex: 5}}>
              <SelectedDataRenderer selected={selected} />
            </Text>
            {props.suffixIcon || (
              <View
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}>
                <ArrowDownIcon />
              </View>
            )}
          </Pressable>
        )}
        {open === false && errorText !== '' && <Text>{errorText}</Text>}
        {open === true && (
          <View style={{position: 'relative'}} ref={visRef}>
            <SearchRenderer
              query={query}
              onSearch={v => {
                setQuery(v);
                // console.log('abcdef', v);
              }}
              cancelSearch={() => setOpen(false)}
            />
            <View style={{...props.optionsWrapperStyles}}>
              {options.length > 0 && (
                <>
                  {options.map(option => (
                    <Pressable
                      onPress={() => {
                        addOrRemove(multiple, option);
                      }}
                      key={`options${option.value}`}>
                      <OptionsRenderer value={option} selected={selected} />
                    </Pressable>
                  ))}
                </>
              )}
              {options.length === 0 && (
                <>
                  {props.noDataComponent || (
                    <NoDataComponent query={query} options={options} />
                  )}
                </>
              )}
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default Index;