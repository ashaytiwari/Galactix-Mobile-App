import React, { useEffect, useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { useDebounce } from '@hooks/useDebounce';

import { IAppSearchBarProps } from '@interfaces/uiInterfaces/generic';

import { colors } from '@styles/colors';

import styles from './AppSearchBar.styles';

const AppSearchBar: React.FC<IAppSearchBarProps> = (props) => {

  const { placeholder, name, value, onChange, onClear } = props;

  const [searchQuery, setSearchQuery] = useState(value);

  const debouncedQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    setSearchQuery(value);
  }, [value]);

  useEffect(() => {

    if (debouncedQuery === '' || debouncedQuery !== value) {
      onChange(debouncedQuery);
    }

  }, [debouncedQuery]);

  function handleClearInputField() {
    setSearchQuery('');
    onClear();
  }

  function renderClearIcon() {

    if (searchQuery?.trim().length === 0) {
      return;
    }

    const closeIconAttributes = {
      name: 'close',
      size: 20,
      color: colors.white,
    };

    return (
      <TouchableOpacity onPress={handleClearInputField}>
        <Icon {...closeIconAttributes} />
      </TouchableOpacity>
    );

  }

  const searchIconAttributes = {
    name: 'search',
    size: 20,
    color: colors.white,
  };

  const textInputAttributes = {
    placeholder,
    style: styles.inputControl,
    placeholderTextColor: colors.tertiary,
    value: searchQuery,
    onChangeText(text: string) {
      setSearchQuery(text);
    }
  };

  return (
    <View style={styles.appSearchBarMain}>
      <Icon {...searchIconAttributes} />
      <TextInput {...textInputAttributes} />
      {renderClearIcon()}
    </View>
  );

};

export default AppSearchBar;