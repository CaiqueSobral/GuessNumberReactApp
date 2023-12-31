import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

type Props = {
  children: string | JSX.Element;
  onPress?: () => void;
};
export default function PrimaryButton(props: Props) {
  return (
    <TouchableOpacity
      className="flex justify-center items-center py-[4%] px-[15%] rounded-full bg-primaryShade shadow-md"
      onPress={props.onPress}
    >
      <Text className="text-xl font-bold text-primaryText uppercase">
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}
