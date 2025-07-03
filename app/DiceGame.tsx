import React, { useState } from 'react';
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import '../global.css';

/**
 * Need to implement dynamic adding and removing of the drinkers players in the dice game: 
 * - Add a button that will pull up a form that will ask for their information
*/

// Helper function to introduce a delay in the rolling of the dice
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
            setText(rollChoice.name);
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

const DrinkerCard = ({ drinker }: DrinkerProps) => {
    return (
        <View
            className='m-2 bg-yellow-200 rounded-full border border-yellow-500 p-3'
        >
            <Text>{drinker.name}</Text>
        </View>
    );
}

const DiceGame = () => {

    // Temp values for now
    let drinkers: Drinker[] = [
        { name: 'Dylan' },
        { name: 'Nathaniel' },
        { name: 'Sophia' },
        { name: 'Jackson' },
        { name: 'Isabella' },
        { name: 'Liam' },
        { name: 'Olivia' },
        { name: 'Noah' },
        { name: 'Emma' },
        { name: 'Aiden' },
        { name: 'Mia' },
        { name: 'Lucas' },
        { name: 'Amelia' },
        { name: 'Ethan' },
        { name: 'Harper' },
        { name: 'Mason' },
        { name: 'Ella' },
        { name: 'Logan' },
        { name: 'Avery' },
        { name: 'James' }
    ];

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
                <FlatList
                    className='flex-1 mt-20 w-1/2'
                    data={drinkers}
                    renderItem={({ item }) => <DrinkerCard drinker={item} />}
                    scrollEnabled={false}
                />
            </View>
        </ScrollView>
    );
}

export default DiceGame;