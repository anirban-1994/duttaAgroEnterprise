import React from 'react';
import {View} from 'react-native';
import {NativeText} from './NativeText';

export enum ButtonVariant {
  primary = 'primary',
  secondary = 'secondary',
  danger = 'danger',
}
type ButtonProps = {
  width: number;
  height: number;
  text: string;
  variant: ButtonVariant;
};
export const Button: React.FC<ButtonProps> = props => {
  return (
    <View
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: 'red',
      }}>
      <NativeText text={props.text} />
    </View>
  );
};
