import {useEffect, useState} from 'react';

export default function (
  onChange,
  dataSource,
  defaultSelected = [],
  refresh = '',
  defaultOpen = false,
  defaultQuery = '',
) {
  const [open, setOpen] = useState(defaultOpen);
  const [query, setQuery] = useState(defaultQuery);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState(defaultSelected);
  const [loading, setLoading] = useState(false);

  const onTyping = async (query, force = false) => {
    setLoading(true);
    let dropdownOptions = await dataSource(query);
    setOptions(dropdownOptions);
    setLoading(false);
  };

  useEffect(() => {
    onTyping();
  }, [refresh]);

  useEffect(() => {
    setSelected(defaultSelected);
  }, [defaultSelected.length]);

  useEffect(() => {
    if (query !== '') {
      const debounceTimer = setTimeout(() => {
        onTyping(query);
      }, 200);
      return () => clearTimeout(debounceTimer);
    }
  }, [query]);

  const addOrRemove = (multiple, option) => {
    if (!multiple) {
      setSelected([option]);
      onChange(option);
      setOpen(false);
    } else {
      if (!selected.some(current => current.value === option.value)) {
        if (multiple) {
          onChange([...selected, option]);
          setSelected([...selected, option]);
        }
      } else {
        let selectionAfterRemoval = selected;

        selectionAfterRemoval = selectionAfterRemoval.filter(
          current => current.value !== option.value,
        );
        onChange([...selectionAfterRemoval]);
        setSelected([...selectionAfterRemoval]);
      }
    }
  };

  return {
    open,
    setOpen,
    query,
    setQuery,
    options,
    setOptions,
    selected,
    setSelected,
    addOrRemove,
    loading,
  };
}
