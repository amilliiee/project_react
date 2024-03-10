import macAndCheese from '../img/mac.jpeg';
import steakAndPotatoes from '../img/steak.jpeg';
import maruchan from '../img/ramen.jpeg';
import salad from '../img/salad.jpeg';

export const RECIPES = [
    {
        id: 0,
        name: 'Mac & Cheese',
        vegan: false,
        description: 'Perfectly cooked pasta covered in melty cheese.',
        image: macAndCheese
    },
    {
        id: 1,
        name: 'Steak and Potatoes',
        vegan: false,
        description: 'NY Ribeye and creamy mashed potatoes topped with freshly chopped green onions.',
        image: steakAndPotatoes
    },
    {
        id: 2,
        name: 'Maruchan Cup Noodles',
        vegan: false,
        description: 'You\'re broke, at least throw an egg in.',
        image: maruchan
    },
    {
        id: 3,
        name: '?',
        vegan: true,
        description: 'Literally cannot think of any "standard" vegan meal.',
        image: salad
    }
];