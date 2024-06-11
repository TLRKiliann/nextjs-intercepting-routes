import { AllImagesProps } from './definitions';
import saintMary from '@/public/assets/holliday/Saint-Mary-Lake.jpg';
import tropical from '@/public/assets/holliday/tropical.jpg';
import waterfall from '@/public/assets/holliday/waterfall.jpg';
import mountain from '@/public/assets/holliday/mountain.jpg';
import lake from '@/public/assets/holliday/lake.jpg';
import greenTree from '@/public/assets/holliday/green-tree.jpg';

export const allHollyDays: AllImagesProps[] = [
    {
        id: 1,
        name: saintMary,
        description: "Saint-Mary"
    },
    {
        id: 2,
        name: tropical,
        description: "Tropical"
    },
    {
        id: 3,
        name: waterfall,
        description: "Waterfall"
    },
    {
        id: 4,
        name: mountain,
        description: "Mountains"
    },
    {
        id: 5,
        name: lake,
        description: "Dark Lake"
    },
    {
        id: 6,
        name: greenTree,
        description: "Big Green Tree"
    }
];