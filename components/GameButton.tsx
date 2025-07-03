import { Pressable, Text } from "react-native";
import '../global.css';

interface GameButtonProps {
    title: string;
    emoji: string;
    onPress: () => void;
}

const GameButton = ({ title, emoji, onPress }: GameButtonProps) => {
    const containerStyle = `bg-background shadow-2xl shadow-yellow-500 border border-yellow-400 mx-20 my-2 p-10 flex-row rounded-full active:opacity-50`
    
    return(
        <Pressable className={containerStyle} onPress={onPress}>
            <Text className="flex-1 font-bold text-2xl text-white">{title}</Text>
            <Text className="text-4xl">{emoji}</Text>
        </Pressable>
    );
}

export default GameButton;