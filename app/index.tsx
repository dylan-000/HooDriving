import BeerButton from "@/components/beerButton";
import GameButton from "@/components/GameButton";
import { ScrollView, Text, TextInput, View } from "react-native";

import '../global.css';

/**
 * should route to multiple different games that the user can use to find their driver:
 * 
 * slot machine game
 * russian roulette revolver game
 * 
 */

const Header = () => {
  return (
    <View className="items-center p-2 bg-black rounded-full mx-5 mt-20">
      <Text className="m-3 text-5xl text-white font-extrabold ">
        HooDriving?
      </Text>
      <Text className="font-extrabold text-4xl text-yellow-400">
        - - - - - - - - - - - - - - - -
      </Text>
      <Text className="text-5xl m-3 text-white">
        🚗...🍻
      </Text>
    </View>
  );
}

const NameEntrySection = () =>
{
  return(
    <View className="flex-row items-center mx-7 p-2 space-x-2 ">
        <TextInput
          className="border rounded-xl flex-1 p-3"
          placeholder="Enter your drinkers here"
        />
        <BeerButton onPress={() => { console.log('Cheers!') }} />
      </View>
  );
}
//F5F3F0
export default function Index() {
  return (
    <ScrollView className="flex-1 bg-[#F5F3F0]"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ minHeight: "99%", paddingBottom: 10 }}
    >
      <Header/>
      <View className="mx-7 mt-7">
        <Text className="text-2xl font-bold text-center"> Decide your designated driver the fun way — no fights, no guilt, just games.</Text>
      </View>
      <View className="mt-20">
        <GameButton 
          title="Revolver Roulette"
          emoji="🔫"
          bgColorHex="#A9E190"
          onPress={() => {console.log("Revolver Roulette Clicked")}}
        />
        <GameButton 
          title="Roll the Dice"
          emoji="🎲"
          bgColorHex="#D3D0CB"
          onPress={() => {console.log("Revolver Roulette Clicked")}}
        />
      </View>
    </ScrollView>
  );
}
