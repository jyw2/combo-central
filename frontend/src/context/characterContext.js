import { createContext } from 'react';

const CharacterContext = createContext({
    characterData: {},
    setCharacterData: () => { }
});

export { CharacterContext }