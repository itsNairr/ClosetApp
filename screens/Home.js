import React from 'react';
import { Text, View } from 'react-native';
import { useColorScheme } from "nativewind";
import moment from "moment";

function generateGreetings(){
  var currentHour = moment().format("HH");
  if (currentHour >= 3 && currentHour < 12){
      return "Good Morning";
  } else if (currentHour >= 12 && currentHour < 15){
      return "Good Afternoon";
  }   else if (currentHour >= 15 && currentHour < 20){
      return "Good Evening";
  } else if (currentHour >= 20 || currentHour < 3){
      return "Good Night";
  } else {
      return "Hello"
  }
}

export default function Home() {
  const { colorScheme, toggleColorScheme } = useColorScheme();
  return (
    <View className="flex-auto bg-black">
      <Text className="
      text-white
      text-[50px] 
      p-10 
      font-bold 
      xs:text-[30px] 
      xs:p-5
      xs:py-7"
      >
      {generateGreetings()}
      </Text>
      <View className="
      blur-lg 
      justify-center 
      w-full 
      h-full 
      rounded-[50px] 
      shadow-2xl
    shadow-white 
    bg-neutral-800"
    ></View>
    </View>
  );
}