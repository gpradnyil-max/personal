/**
 * Vocabulary Words Data
 * 
 * This file contains vocabulary words for Advait's Learning Adventure.
 * 50 words with meanings and similar-looking words for the spelling quiz.
 * 
 * To add new words:
 * 1. Add a new object to the VOCABULARY_DATA array with:
 *    - word: The correct spelling
 *    - meaning: Simple, kid-friendly definition
 *    - example: An example sentence using the word
 *    - similar: Array of 2 similar-looking incorrect spellings
 */

const VOCABULARY_DATA = [
    // Space & Science
    { word: 'astronaut', meaning: 'A person who travels to space', example: 'The astronaut floated in the rocket.', similar: ['astronot', 'astronaught'] },
    { word: 'galaxy', meaning: 'A huge group of stars and planets', example: 'Our Earth is in the Milky Way galaxy.', similar: ['galaxie', 'gallaxy'] },
    { word: 'volcano', meaning: 'A mountain that can erupt with hot lava', example: 'Smoke came out of the volcano.', similar: ['volcanow', 'volcanno'] },
    { word: 'dinosaur', meaning: 'A large reptile that lived a long time ago', example: 'The T-Rex was a big dinosaur.', similar: ['dinasaur', 'dinosore'] },
    { word: 'planet', meaning: 'A large round object in space like Earth', example: 'Mars is a red planet.', similar: ['plannet', 'planit'] },
    { word: 'gravity', meaning: 'The force that pulls things down to Earth', example: 'Gravity makes the apple fall.', similar: ['gravety', 'gravitty'] },
    { word: 'telescope', meaning: 'A tool to look at stars far away', example: 'I saw the moon through my telescope.', similar: ['telascope', 'telescop'] },
    { word: 'experiment', meaning: 'A test to learn something new', example: 'We did a science experiment with vinegar.', similar: ['experimint', 'experament'] },
    { word: 'energy', meaning: 'Power to do work or move', example: 'Food gives you energy to play.', similar: ['enerjy', 'enrgy'] },
    { word: 'magnet', meaning: 'A metal that pulls other metals to it', example: 'The magnet stuck to the fridge.', similar: ['magnit', 'magnett'] },

    // Nature & Animals
    { word: 'jungle', meaning: 'A thick forest with many plants and animals', example: 'Monkeys live in the jungle.', similar: ['jungel', 'jungl'] },
    { word: 'caterpillar', meaning: 'A small worm-like bug that becomes a butterfly', example: 'The caterpillar ate a green leaf.', similar: ['caterpilar', 'catapillar'] },
    { word: 'aquarium', meaning: 'A place with water tanks for fish', example: 'We saw sharks at the aquarium.', similar: ['aquariam', 'acarium'] },
    { word: 'blossom', meaning: 'A flower on a tree', example: 'The cherry blossom is pink.', similar: ['blosom', 'blossum'] },
    { word: 'hurricane', meaning: 'A very big storm with strong winds', example: 'The hurricane blew down trees.', similar: ['huricane', 'hurricane'] },
    { word: 'meadow', meaning: 'A field with grass and flowers', example: 'Sheep grazed in the meadow.', similar: ['medow', 'meaddow'] },
    { word: 'octopus', meaning: 'A sea animal with eight arms', example: 'The octopus hid in the rocks.', similar: ['octapus', 'octipus'] },
    { word: 'peacock', meaning: 'A bird with beautiful blue and green feathers', example: 'The peacock opened its tail feathers.', similar: ['peacoc', 'peacok'] },
    { word: 'reptile', meaning: 'A cold-blooded animal like a snake or lizard', example: 'A turtle is a reptile.', similar: ['reptil', 'reptial'] },
    { word: 'valley', meaning: 'Low land between hills or mountains', example: 'The river flowed through the valley.', similar: ['valey', 'vallie'] },

    // People & Jobs
    { word: 'detective', meaning: 'Someone who solves mysteries', example: 'The detective found the lost ring.', similar: ['detectiv', 'dectective'] },
    { word: 'musician', meaning: 'Someone who plays music', example: 'The musician played the piano well.', similar: ['musicin', 'musition'] },
    { word: 'scientist', meaning: 'Someone who studies science', example: 'The scientist looked at germs.', similar: ['scientest', 'siencist'] },
    { word: 'athlete', meaning: 'Someone who is good at sports', example: 'The athlete ran very fast.', similar: ['athelete', 'athleet'] },
    { word: 'author', meaning: 'Someone who writes books', example: 'My favorite author wrote this story.', similar: ['auther', 'athor'] },
    { word: 'dentist', meaning: 'A doctor for your teeth', example: 'The dentist cleaned my teeth.', similar: ['dentest', 'dentistt'] },
    { word: 'neighbor', meaning: 'Someone who lives near you', example: 'My neighbor has a friendly dog.', similar: ['nieghbor', 'naybor'] },
    { word: 'president', meaning: 'The leader of a country', example: 'The president gave a speech.', similar: ['presidant', 'prezident'] },
    { word: 'soldier', meaning: 'A person in the army', example: 'The soldier wore a green uniform.', similar: ['soljer', 'souldier'] },
    { word: 'customer', meaning: 'Someone who buys things', example: 'The customer paid for the milk.', similar: ['custommer', 'custumer'] },

    // Feelings & Character
    { word: 'courage', meaning: 'Being brave when you are scared', example: 'It took courage to jump in the pool.', similar: ['corage', 'curage'] },
    { word: 'honest', meaning: 'Telling the truth', example: 'He was honest about breaking the vase.', similar: ['onnest', 'honist'] },
    { word: 'patience', meaning: 'Waiting without getting angry', example: 'Have patience, it is almost your turn.', similar: ['pationce', 'paitence'] },
    { word: 'curious', meaning: 'Wanting to know more', example: 'I am curious about how cars work.', similar: ['curius', 'curiuos'] },
    { word: 'jealous', meaning: 'Wanting what someone else has', example: 'He was jealous of her new toy.', similar: ['jelous', 'jealus'] },
    { word: 'nervous', meaning: 'Feeling worried or scared', example: 'I felt nervous before the test.', similar: ['nervus', 'nervis'] },
    { word: 'grateful', meaning: 'Feeling thankful', example: 'I am grateful for my family.', similar: ['greatful', 'gratefull'] },
    { word: 'generous', meaning: 'Happy to share with others', example: 'She is generous with her cookies.', similar: ['genrous', 'generus'] },
    { word: 'creative', meaning: 'Good at making new things', example: 'He is creative and likes to paint.', similar: ['creativ', 'createve'] },
    { word: 'responsible', meaning: 'Doing what you are supposed to do', example: 'She is responsible and feeds her cat.', similar: ['responsable', 'responcible'] },

    // Things & Places
    { word: 'bicycle', meaning: 'A vehicle with two wheels', example: 'I ride my bicycle to the park.', similar: ['bycicle', 'bicyle'] },
    { word: 'treasure', meaning: 'Valuable things like gold or jewels', example: 'Pirates look for buried treasure.', similar: ['tresure', 'treashure'] },
    { word: 'umbrella', meaning: 'Something to keep you dry in rain', example: 'Open your umbrella, it is raining.', similar: ['umbrela', 'umberella'] },
    { word: 'vegetable', meaning: 'A plant you can eat', example: 'Carrots are a healthy vegetable.', similar: ['vegtable', 'vegatable'] },
    { word: 'chocolate', meaning: 'A sweet candy made from cocoa', example: 'I love hot chocolate in winter.', similar: ['choclate', 'chocolat'] },
    { word: 'museum', meaning: 'A place to see old or special things', example: 'We saw dinosaur bones at the museum.', similar: ['museam', 'musium'] },
    { word: 'restaurant', meaning: 'A place to buy and eat a meal', example: 'We ate pizza at the restaurant.', similar: ['restarant', 'resturant'] },
    { word: 'hospital', meaning: 'A place for sick people to get help', example: 'Doctors work at the hospital.', similar: ['hospitel', 'hostpital'] },
    { word: 'library', meaning: 'A place to borrow books', example: 'Quiet please, we are in the library.', similar: ['libary', 'liberry'] },
    { word: 'orchestra', meaning: 'A large group of musicians playing together', example: 'The orchestra played beautiful music.', similar: ['orkestra', 'orchestrea'] }
];
