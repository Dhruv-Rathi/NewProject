import {useEffect, useRef} from 'react';
import React from 'react';
import {AccessibilityInfo} from 'react-native';
export default function useOutsideClicker(callback) {
  const visRef = useRef(null);
  const handleClickOutside = event => {
    if (visRef.current && !visRef.current.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    AccessibilityInfo.addEventListener('change', handleClickOutside, true);
    return () => {
      AccessibilityInfo.addEventListener(
        'change',
        handleClickOutside,
        true,
      ).remove();
    };
  });
  return visRef;
}
