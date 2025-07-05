import { Modal, Pressable, Text, TextInput, View } from 'react-native';

export const DrinkerModal = ({
  visible,
  onClose,
  onSubmit,
  inputText,
  setInputText,
}: {
  visible: boolean;
  onClose: () => void;
  onSubmit: () => void;
  inputText: string;
  setInputText: (text: string) => void;
}) => (
  <Modal animationType='slide' transparent visible={visible} onRequestClose={onClose}>
    <View className="flex-1 justify-center items-center bg-[#282c34] bg-opacity-50">
      <View className="w-11/12 p-6 rounded-2xl bg-customRed items-center">
        <TextInput
          className="w-full px-4 py-2 mb-4 bg-white text-black rounded-xl"
          placeholder="Enter name"
          placeholderTextColor="#888"
          onChangeText={setInputText}
          value={inputText}
        />
        <Pressable className="bg-white px-6 py-2 rounded-xl" onPress={onSubmit}>
          <Text className="text-customRed font-semibold">Add Drinker</Text>
        </Pressable>
      </View>
    </View>
  </Modal>
);
