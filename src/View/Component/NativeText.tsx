import {Text, TextProps} from 'react-native';
import React from 'react';

interface NativeTextProp extends TextProps {
  text: string;
}
export const NativeText: React.FC<NativeTextProp> = props => {
  return <Text {...props}>{props.text}</Text>;
};
