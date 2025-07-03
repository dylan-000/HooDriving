type Drinker = {
    name: string;
    img?: string;
}

interface DiceProps {
    drinkers: Drinker[];
}

interface DrinkerProps {
    drinker: Drinker;
}