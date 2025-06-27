import { images } from '@/constants/images';
import { Image, Text, View } from 'react-native';

const DrinkerCard = ({ name, img }: Drinker) => {
    return (
        <View className='border-2 rounded-xl p-4 m-2'>
            <Image
                source={images.placeholder}
            />
            <Text className='p-1 text-center text-3xl font-bold'>{name}</Text>
        </View>
    );
}

/**
 * Could make a view that would encapsulate the card component that would just be an image of a slot machine
 * 
 * then the image would just change when the slot is pulled and
 */
export default DrinkerCard;