import { Pressable, Text } from 'react-native';

type BeerButtonProps = {
  onPress: () => void;
};

const BeerButton: React.FC<BeerButtonProps> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress}
        className='active:opacity-25'
    >
      <Text className="text-5xl">🍺</Text>
    </Pressable>
  );
};

export default BeerButton;