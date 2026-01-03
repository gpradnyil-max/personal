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
    // Animals & Nature
    { word: 'elephant', meaning: 'A very large grey animal with a long trunk and big ears', example: 'The elephant sprayed water with its trunk.', similar: ['elefant', 'elephent'] },
    { word: 'giraffe', meaning: 'A tall animal with a very long neck and spots on its body', example: 'The giraffe ate leaves from the tall tree.', similar: ['giraf', 'giraff'] },
    { word: 'butterfly', meaning: 'A beautiful insect with colorful wings that flies', example: 'A butterfly landed on the flower.', similar: ['butterfli', 'buterfly'] },
    { word: 'dolphin', meaning: 'A smart sea animal that swims and jumps out of water', example: 'The dolphin did a flip in the air.', similar: ['dolfin', 'dolphen'] },
    { word: 'squirrel', meaning: 'A small furry animal with a bushy tail that climbs trees', example: 'The squirrel collected nuts for winter.', similar: ['squirel', 'squrrel'] },
    { word: 'penguin', meaning: 'A black and white bird that cannot fly but swims well', example: 'The penguin waddled on the ice.', similar: ['pengun', 'pengwen'] },
    { word: 'rainbow', meaning: 'A colorful arc in the sky that appears after rain', example: 'We saw a beautiful rainbow after the storm.', similar: ['rainboe', 'ranbow'] },
    { word: 'mountain', meaning: 'A very tall and large natural hill made of rock', example: 'We climbed to the top of the mountain.', similar: ['mountan', 'mountin'] },
    { word: 'ocean', meaning: 'A very large body of salt water that covers most of Earth', example: 'Whales live in the ocean.', similar: ['oceon', 'oshean'] },
    { word: 'forest', meaning: 'A large area covered with many trees', example: 'Many animals live in the forest.', similar: ['forrest', 'forrist'] },
    
    // Actions & Feelings
    { word: 'beautiful', meaning: 'Very pretty or pleasing to look at', example: 'The sunset was beautiful.', similar: ['beautful', 'beutiful'] },
    { word: 'adventure', meaning: 'An exciting journey or experience', example: 'Reading books is a great adventure.', similar: ['adventur', 'advenchure'] },
    { word: 'celebrate', meaning: 'To do something special for a happy occasion', example: 'We celebrate birthdays with cake.', similar: ['celebrat', 'celabrate'] },
    { word: 'curious', meaning: 'Wanting to learn or know more about something', example: 'The curious cat looked in the box.', similar: ['curius', 'curiuos'] },
    { word: 'excellent', meaning: 'Extremely good or outstanding', example: 'You did an excellent job on your homework!', similar: ['excelent', 'excellant'] },
    { word: 'favorite', meaning: 'The one you like the most', example: 'Pizza is my favorite food.', similar: ['favourit', 'favrite'] },
    { word: 'generous', meaning: 'Willing to give and share with others', example: 'She was generous and shared her toys.', similar: ['genrous', 'generus'] },
    { word: 'imagine', meaning: 'To make a picture in your mind', example: 'Imagine you can fly like a bird!', similar: ['imagin', 'immagine'] },
    { word: 'important', meaning: 'Having great value or meaning', example: 'It is important to be kind.', similar: ['importent', 'importint'] },
    { word: 'happiness', meaning: 'The feeling of being happy and joyful', example: 'Her smile showed her happiness.', similar: ['happyness', 'hapiness'] },
    
    // School & Learning
    { word: 'alphabet', meaning: 'All the letters from A to Z in order', example: 'Let us sing the alphabet song!', similar: ['alfabet', 'alphabit'] },
    { word: 'calendar', meaning: 'A chart showing days, weeks, and months of the year', example: 'I marked my birthday on the calendar.', similar: ['calender', 'calandar'] },
    { word: 'dictionary', meaning: 'A book that tells you what words mean', example: 'I looked up the word in the dictionary.', similar: ['dictionery', 'dictonary'] },
    { word: 'library', meaning: 'A place with many books you can read or borrow', example: 'We went to the library to find books.', similar: ['libary', 'liberry'] },
    { word: 'science', meaning: 'Learning about how things in the world work', example: 'In science class, we learned about planets.', similar: ['sience', 'scince'] },
    { word: 'teacher', meaning: 'A person who helps you learn new things', example: 'My teacher is very kind.', similar: ['techer', 'teachor'] },
    { word: 'question', meaning: 'Something you ask to get an answer', example: 'I have a question about the homework.', similar: ['queston', 'questien'] },
    { word: 'knowledge', meaning: 'Things you know and have learned', example: 'Reading gives us knowledge.', similar: ['knowlege', 'knowledg'] },
    { word: 'sentence', meaning: 'A group of words that makes a complete thought', example: 'Write a sentence about your pet.', similar: ['sentance', 'sentense'] },
    { word: 'different', meaning: 'Not the same as something else', example: 'Each snowflake is different.', similar: ['diffrent', 'diferent'] },
    
    // Food & Home
    { word: 'breakfast', meaning: 'The first meal you eat in the morning', example: 'I had eggs for breakfast.', similar: ['brekfast', 'breakfest'] },
    { word: 'chocolate', meaning: 'A sweet brown treat made from cocoa beans', example: 'I love chocolate cake!', similar: ['choclate', 'chocolat'] },
    { word: 'vegetable', meaning: 'Plants like carrots and broccoli that are healthy to eat', example: 'Eat your vegetables to grow strong!', similar: ['vegatable', 'vegetabel'] },
    { word: 'sandwich', meaning: 'Food made with bread and fillings in between', example: 'I made a cheese sandwich for lunch.', similar: ['sandwitch', 'sanwich'] },
    { word: 'delicious', meaning: 'Tasting very, very good', example: 'This pizza is delicious!', similar: ['delicous', 'delishous'] },
    { word: 'kitchen', meaning: 'The room where food is cooked', example: 'Mom is cooking in the kitchen.', similar: ['kichen', 'kitchin'] },
    { word: 'bedroom', meaning: 'The room where you sleep', example: 'I keep my toys in my bedroom.', similar: ['bedrom', 'beadroom'] },
    { word: 'furniture', meaning: 'Things like chairs, tables, and beds in a house', example: 'We bought new furniture for the living room.', similar: ['furnitur', 'furnature'] },
    { word: 'window', meaning: 'An opening in a wall with glass to see through', example: 'I looked out the window at the birds.', similar: ['windoe', 'windo'] },
    { word: 'garden', meaning: 'An area where flowers and plants are grown', example: 'We planted tomatoes in our garden.', similar: ['gardin', 'gardun'] },
    
    // People & Activities
    { word: 'birthday', meaning: 'The day each year when you were born', example: 'Happy birthday! You are seven years old!', similar: ['brithday', 'bithday'] },
    { word: 'friend', meaning: 'Someone you like and enjoy spending time with', example: 'My best friend lives next door.', similar: ['freind', 'frend'] },
    { word: 'family', meaning: 'People related to you like parents and siblings', example: 'I love spending time with my family.', similar: ['famly', 'familey'] },
    { word: 'together', meaning: 'With each other, not alone', example: 'We played together at the park.', similar: ['togeather', 'togather'] },
    { word: 'exercise', meaning: 'Moving your body to stay healthy and strong', example: 'Running is good exercise.', similar: ['exersice', 'exercize'] },
    { word: 'practice', meaning: 'Doing something again and again to get better', example: 'Practice makes perfect!', similar: ['practise', 'practace'] },
    { word: 'remember', meaning: 'To keep something in your mind', example: 'Remember to brush your teeth!', similar: ['rember', 'remeber'] },
    { word: 'surprise', meaning: 'Something unexpected that makes you happy', example: 'The party was a big surprise!', similar: ['suprise', 'surprize'] },
    { word: 'tomorrow', meaning: 'The day after today', example: 'We will go to the zoo tomorrow.', similar: ['tommorow', 'tomorow'] },
    { word: 'wonderful', meaning: 'Extremely good, making you feel happy', example: 'We had a wonderful time at the beach!', similar: ['wonderfull', 'wunderful'] }
];
