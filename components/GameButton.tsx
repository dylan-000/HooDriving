import { Pressable, Text, ViewStyle } from "react-native";

interface GameButtonProps {
    title: string;
    emoji: string;
    bgColorHex: string;
    onPress: () => void;
}

const GameButton = ({ title, emoji, bgColorHex, onPress }: GameButtonProps) => {
    const containerStyle = `mx-20 my-2 p-10 flex-row border-2 rounded-full active:opacity-25`
    const bgStyle: ViewStyle = { backgroundColor: bgColorHex };

    return(
        <Pressable className={containerStyle} onPress={onPress} style={bgStyle}>
            <Text className="flex-1 text-2xl text-black">{title}</Text>
            <Text className="text-4xl">{emoji}</Text>
        </Pressable>
    );
}

export default GameButton;