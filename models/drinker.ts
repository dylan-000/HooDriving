import uuid from 'react-native-uuid';

export class Drinker {
    private name: string;
    private id: string;

    constructor(name: string) {
        this.name = name;
        this.id = uuid.v4();
    }

    getId = () => { return this.id; };
    getName = () => { return this.name };
    setName = (name: string) => { this.name = name; };
}