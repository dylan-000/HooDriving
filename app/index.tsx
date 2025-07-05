import GameButton from "@/components/GameButton";
import { images } from "@/constants/images";
import { useRouter } from "expo-router";
import { ImageBackground, ScrollView, Text, View } from "react-native";
import '../global.css';

/**
 * should route to multiple different games that the user can use to find their driver:
 * 
 * slot machine game
 * russian roulette revolver game
 * 
 * TODO:
 * - Implement dice game
 * - Implement revolver roulette
*/

const Header = () => {
  return (
    <View className="items-center p-2 bg-background rounded-full mx-5 mt-20">
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

export default function Index() {

  const router = useRouter();
  
  return (
    <ImageBackground source={images.nightBackground} className="flex-1">
      <ScrollView className="flex-1"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "99%", paddingBottom: 10 }}
      >
        <Header />
        <View className="mx-7 mt-7">
          <Text className="text-2xl text-white font-bold text-center"> Decide your designated driver the fun way — no fights, no guilt, just games.</Text>
        </View>
        <View className="mt-20">
          <GameButton
            title="Revolver Roulette"
            emoji="🔫"
            onPress={() => { router.navigate('./RouletteGame') }}
          />
          <GameButton
            title="Roll the Dice"
            emoji="🎲"
            onPress={() => { router.navigate('./DiceGame') }}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
