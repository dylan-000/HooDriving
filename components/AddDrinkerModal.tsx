import { Drinker } from "@/models/drinker";
import { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";

export const AddDrinkerModal = ({ addDrinkerFunc, visible, setVisible } : { addDrinkerFunc: (drinker: Drinker) => void, visible: boolean, setVisible: (vis: boolean) => void }) => {
  const [drinkerEntryText, setDrinkerEntryText] = useState('');

  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setVisible(!visible);
      }}
    >
      <View className="flex-1 justify-center items-center bg-[#282c34] bg-opacity-50">
        <View className="w-11/12 p-6 rounded-2xl bg-customRed items-center">
          <TextInput
            className="w-full px-4 py-2 mb-4 bg-white text-black rounded-xl"
            placeholder="Enter name"
            placeholderTextColor="#888"
            onChangeText={setDrinkerEntryText}
            value={drinkerEntryText}
          />
          <Pressable
            className="bg-white px-6 py-2 rounded-xl"
            onPress={() => {
              setVisible(!visible);
              addDrinkerFunc(new Drinker(drinkerEntryText));
              setDrinkerEntryText('');
            }}
          >
            <Text className="text-customRed font-semibold">Add Drinker</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}