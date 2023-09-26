import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type ComponentWithProps = React.PropsWithChildren<{}>;

export default function PrimaryButton({ children }: ComponentWithProps) {
  return (
    <TouchableOpacity className="flex justify-center items-center py-[4%] px-[15%] rounded-full bg-[#39031e] shadow-md">
      <Text className="text-2xl font-bold text-gray-100 uppercase">
        {children}
      </Text>
    </TouchableOpacity>
  );
}
