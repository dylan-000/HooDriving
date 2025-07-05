import { Drinker } from '@/models/drinker';
import { X } from 'lucide-react-native';
import React, { useState } from 'react';
import { FlatList, Modal, Pressable, ScrollView, Text, TextInput, View } from 'react-native';

import '../global.css';

function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const DiceHeader = () => {
    return (
        <View className="items-center p-2 bg-customRed shadow-2xl shadow-customRed rounded-full mx-5 mt-20">
            <Text className="m-3 text-5xl text-white font-extrabold ">
                Roll The Dice 🎲
            </Text>
        </View>
    );
}

function Dice({ drinkers }: DiceProps) {

    // Define the state of our component that we want to change on click. Figure out images later and add that state in.
    const [text, setText] = useState('');

    // Loop arbitrary amt of iterations randomizing the dice before landing on one
    const handlePress = async () => {
        for (let i = 0; i < 20; i++) {
            let rollChoice: Drinker = drinkers[Math.floor(Math.random() * drinkers.length)];
            setText(rollChoice.getName());
            await delay((i ** 2) + 50); // Exponentially slow down the dice to introduce suspension
        }
    }

    return (
        <Pressable onPress={handlePress}>
            <View
                className='mt-20 w-3/5 border-4 bg-white aspect-square items-center justify-center'
            >
                <Text className='text-3xl font-bold'>{text}</Text>
            </View>
        </Pressable>
    );
}

const DrinkerCard = ({ drinker, handlePress }: DrinkerProps & {handlePress: ()=> void}) => {
    return (
        <View
            className='flex-row m-2 bg-yellow-200 rounded-full border border-yellow-500 p-3'
        >
            <Text className='text-center flex-1 text-xl font-bold'>{drinker.name}</Text>

            <Pressable onPress={handlePress} className='active: opacity-50'>
                <X color='black'/>
            </Pressable>
        </View>
    );
}

const AddDrinkerButton = ({ handlePress, text }: { handlePress: () => void, text: string }) => {
    return (
        <Pressable onPress={handlePress}>
            <View
                className='m-2 bg-white/30 backdrop-blur-md rounded-full border-2 border-dashed border-yellow-500 p-3'
            >
                <Text className='font-bold text-xl text-white'>{text}</Text>
            </View>
        </Pressable>
    );
}

const DiceGame = () => {
    const [modalVisible, setModalVisible] = useState(false); // state for the 'add friend' modal form
    const [drinkerEntryText, setDrinkerEntryText] = useState('');
    const [drinkers, SetDrinkers] = useState<Drinker[]>([]);

    const addDrinker = (drinker: Drinker) => {
        SetDrinkers(prev => [...prev, drinker]);
    }

    const removeDrinker = (drinker: Drinker) => {
        SetDrinkers(prev => prev.filter(d => d.getId() != drinker.getId()));
    }

    return (
        <ScrollView className="flex-1 bg-[#282c34]"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ minHeight: "99%", paddingBottom: 10 }}
        >
            <View className='flex-1 items-center'>
                <DiceHeader />
                <Text
                    className='p-5 mt-10 mx-14 text-white text-center font-bold text-lg text-wrap'
                >
                    Welcome to Roll The Dice! The game is as simple as you think, just upload images of your friends and let that n-sided dice rip!
                </Text>
                <Dice drinkers={drinkers} />

                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(!modalVisible);
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
                                    setModalVisible(!modalVisible);
                                    addDrinker( new Drinker(drinkerEntryText) );
                                    setDrinkerEntryText('');
                                }}
                            >
                                <Text className="text-customRed font-semibold">Add Drinker</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>

                <View className='mt-10'>
                    <AddDrinkerButton handlePress={() => { setModalVisible(!modalVisible) }} text='Add a friend!' />
                </View>
                                
                <FlatList
                    className='flex-1 mt-10 w-1/2'
                    data={drinkers}
                    renderItem={({ item }) => <DrinkerCard drinker={item} handlePress={ () => { removeDrinker(item) } }/>}
                    keyExtractor={(drinker) => drinker.getId()}
                    scrollEnabled={false}
                />
            </View>
        </ScrollView>
    );
}

export default DiceGame;