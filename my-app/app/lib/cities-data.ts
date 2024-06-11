import { AllImagesProps } from './definitions';
import apocaliptic from '@/public/assets/city/apocalyptic_1.jpg';
import deathCity from '@/public/assets/city/death-city.jpg';
import forbiddentWest from '@/public/assets/city/forbidden-west.jpg';
import metro from '@/public/assets/city/metro.jpg';
import nier from '@/public/assets/city/nier.jpg';
import pacity from '@/public/assets/city/pacity.jpg';

export const allCities: AllImagesProps[] = [
    {
        id: 1,
        name: apocaliptic,
        description: "Runes-City"
    },
    {
        id: 2,
        name: deathCity,
        description: "Death-City"
    },
    {
        id: 3,
        name: forbiddentWest,
        description: "Forbidden West"
    },
    {
        id: 4,
        name: metro,
        description: "New-York"
    },
    {
        id: 5,
        name: nier,
        description: "Nier Automata"
    },
    {
        id: 6,
        name: pacity,
        description: "Crater-City"
    }
];