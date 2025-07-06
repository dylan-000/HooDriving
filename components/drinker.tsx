import { images } from '@/constants/images';
import { Drinker } from '@/models/drinker';
import { Image, Text, View } from 'react-native';

const DrinkerCard = ({ drinker }: {drinker: Drinker}) => {
    return (
        <View className='border-2 rounded-xl p-4 m-2'>
            <Image
                source={images.placeholder}
            />
            <Text className='p-1 text-center text-3xl font-bold'>{drinker.getName()}</Text>
        </View>
    );
}

export default DrinkerCard;