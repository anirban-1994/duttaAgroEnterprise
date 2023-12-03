import React from 'react';
import {Camera, CameraProps} from 'react-native-vision-camera';

export const NativeCamera: React.FC<CameraProps> = props => {
  return <Camera {...props} />;
};
