/**
 * Grammar Questions Data
 * 
 * This file contains all the grammar questions for Advait's Learning Adventure.
 * Each category has 20 questions with explanations.
 * 
 * To add new questions:
 * 1. Find the appropriate category (adjective, noun, verb, adverb, conjunction)
 * 2. Add a new object to the sentences array with:
 *    - template: The sentence with _____ for the blank
 *    - answer: The correct answer
 *    - options: Array of 6 word choices (including the answer)
 *    - explanation: Why the answer is correct (shown when wrong answer is picked)
 */

const GRAMMAR_DATA = {
    adjective: {
        icon: '🎨',
        name: 'Adjectives',
        instruction: 'Choose the best adjective to complete the sentence:',
        sentences: [
            { template: "The _____ kitten played with the yarn.", answer: "fluffy", options: ["fluffy", "loud", "square", "slow", "wet", "green"], explanation: "Fluffy describes how soft the kitten's fur feels!" },
            { template: "A _____ knight fought the dragon.", answer: "brave", options: ["brave", "sleepy", "paper", "purple", "tasty", "quiet"], explanation: "Brave describes the knight's courage to fight a dragon!" },
            { template: "The _____ lemon made me pucker.", answer: "sour", options: ["sour", "sweet", "fluffy", "fast", "blue", "happy"], explanation: "Sour describes the sharp taste of a lemon!" },
            { template: "We walked on the _____ beach.", answer: "sandy", options: ["sandy", "glass", "liquid", "flying", "loud", "angry"], explanation: "Sandy describes what the beach is made of!" },
            { template: "The _____ pencil broke when I pressed too hard.", answer: "sharp", options: ["sharp", "liquid", "soft", "happy", "fast", "sleepy"], explanation: "Sharp describes the point of the pencil." },
            { template: "A _____ box was hard to lift.", answer: "heavy", options: ["heavy", "light", "flying", "invisible", "happy", "fast"], explanation: "Heavy describes the weight of the box." },
            { template: "The _____ jar had no cookies left.", answer: "empty", options: ["empty", "full", "heavy", "loud", "fast", "happy"], explanation: "Empty means there is nothing inside." },
            { template: "She wore a _____ scarf around her neck.", answer: "purple", options: ["purple", "loud", "angry", "fast", "rainy", "tasty"], explanation: "Purple is a color adjective describing the scarf." },
            { template: "The _____ traffic woke me up.", answer: "noisy", options: ["noisy", "quiet", "soft", "tasty", "purple", "sleepy"], explanation: "Noisy describes the loud sounds of the traffic." },
            { template: "A _____ breeze blew through the trees.", answer: "gentle", options: ["gentle", "heavy", "purple", "square", "loud", "angry"], explanation: "Gentle describes a soft and light wind." },
            { template: "The _____ banana was ready to eat.", answer: "ripe", options: ["ripe", "blue", "hard", "metal", "loud", "fast"], explanation: "Ripe means the fruit is ready to be eaten." },
            { template: "He has _____ hair.", answer: "short", options: ["short", "loud", "heavy", "fast", "green", "tasty"], explanation: "Short describes the length of his hair." },
            { template: "The _____ dog needed a bath.", answer: "muddy", options: ["muddy", "clean", "invisible", "purple", "fast", "loud"], explanation: "Muddy describes the dog covered in dirt and water." },
            { template: "A _____ tiger roared in the jungle.", answer: "wild", options: ["wild", "tame", "plastic", "purple", "quiet", "slow"], explanation: "Wild describes an animal living in nature, not a pet." },
            { template: "The _____ room looked very nice.", answer: "clean", options: ["clean", "messy", "loud", "heavy", "angry", "fast"], explanation: "Clean means there is no dirt or mess." },
            { template: "The _____ desert has very little water.", answer: "dry", options: ["dry", "wet", "swimming", "green", "loud", "fast"], explanation: "Dry describes a place with no rain or water." },
            { template: "We went to a _____ dinner party.", answer: "fancy", options: ["fancy", "muddy", "broken", "sleepy", "loud", "fast"], explanation: "Fancy describes something special and elegant." },
            { template: "The _____ toy would not work.", answer: "broken", options: ["broken", "new", "happy", "fast", "tasty", "soft"], explanation: "Broken means it is damaged and doesn't work." },
            { template: "We walked down a _____ path in the woods.", answer: "narrow", options: ["narrow", "wide", "loud", "purple", "happy", "fast"], explanation: "Narrow means the path is not wide." },
            { template: "The _____ glue got on my fingers.", answer: "sticky", options: ["sticky", "dry", "loud", "fast", "happy", "sleepy"], explanation: "Sticky describes how the glue feels." }
        ]
    },
    noun: {
        icon: '📦',
        name: 'Nouns',
        instruction: 'Choose the correct noun to complete the sentence:',
        sentences: [
            { template: "The _____ gave me medicine when I was sick.", answer: "doctor", options: ["doctor", "run", "happy", "blue", "quickly", "under"], explanation: "Doctor is a person who helps sick people." },
            { template: "A _____ has many books to read.", answer: "library", options: ["library", "swim", "loud", "slowly", "green", "eat"], explanation: "Library is a place where books are kept." },
            { template: "The _____ shines brightly at night.", answer: "moon", options: ["moon", "jump", "soft", "quickly", "sing", "happy"], explanation: "Moon is a thing in the sky at night." },
            { template: "My new _____ are very comfortable.", answer: "shoes", options: ["shoes", "run", "blue", "slowly", "eat", "happy"], explanation: "Shoes are things you wear on your feet." },
            { template: "The _____ flows all the way to the sea.", answer: "river", options: ["river", "walk", "happy", "green", "slowly", "sleep"], explanation: "River is a body of water (a thing)." },
            { template: "A _____ flies the airplane.", answer: "pilot", options: ["pilot", "fly", "blue", "quickly", "cloud", "high"], explanation: "Pilot is a person who flies planes." },
            { template: "The _____ is full of colorful flowers.", answer: "garden", options: ["garden", "grow", "happy", "slowly", "run", "eat"], explanation: "Garden is a place where plants grow." },
            { template: "My _____ is two years older than me.", answer: "sister", options: ["sister", "run", "blue", "quickly", "happy", "jump"], explanation: "Sister is a person in your family." },
            { template: "The _____ on the wall tells the time.", answer: "clock", options: ["clock", "tick", "round", "slowly", "run", "blue"], explanation: "Clock is a thing that shows time." },
            { template: "I used a _____ to take a photo.", answer: "camera", options: ["camera", "smile", "happy", "quickly", "run", "blue"], explanation: "Camera is a thing used to take pictures." },
            { template: "The _____ sells fresh fruit and vegetables.", answer: "market", options: ["market", "buy", "fresh", "slowly", "eat", "happy"], explanation: "Market is a place where you buy things." },
            { template: "A _____ has high stone walls and towers.", answer: "castle", options: ["castle", "old", "build", "quickly", "run", "blue"], explanation: "Castle is a large building (a place)." },
            { template: "The _____ runs on tracks.", answer: "train", options: ["train", "fast", "go", "loudly", "blue", "happy"], explanation: "Train is a vehicle (a thing)." },
            { template: "My _____ is soft to sleep on.", answer: "pillow", options: ["pillow", "sleep", "soft", "slowly", "dream", "night"], explanation: "Pillow is a thing you rest your head on." },
            { template: "The _____ is surrounded by water.", answer: "island", options: ["island", "swim", "wet", "quickly", "blue", "happy"], explanation: "Island is a piece of land (a place)." },
            { template: "A _____ bakes fresh bread.", answer: "baker", options: ["baker", "cook", "hot", "slowly", "eat", "happy"], explanation: "Baker is a person who makes bread." },
            { template: "The _____ helps me do my homework.", answer: "computer", options: ["computer", "think", "smart", "quickly", "run", "blue"], explanation: "Computer is a machine (a thing)." },
            { template: "A _____ has a very long neck.", answer: "giraffe", options: ["giraffe", "tall", "eat", "slowly", "run", "yellow"], explanation: "Giraffe is an animal (a thing)." },
            { template: "The _____ opens the locked door.", answer: "key", options: ["key", "open", "small", "quickly", "turn", "metal"], explanation: "Key is a tool (a thing) to open locks." },
            { template: "My _____ is empty, I have no money.", answer: "pocket", options: ["pocket", "empty", "spend", "slowly", "run", "blue"], explanation: "Pocket is a part of your clothes (a thing)." }
        ]
    },
    verb: {
        icon: '🏃',
        name: 'Verbs',
        instruction: 'Choose the correct verb to complete the sentence:',
        sentences: [
            { template: "The baby _____ on the floor.", answer: "crawls", options: ["crawls", "baby", "floor", "soft", "happy", "blue"], explanation: "Crawls is the action the baby is doing." },
            { template: "We _____ the big tree in the park.", answer: "climb", options: ["climb", "tree", "tall", "green", "park", "happy"], explanation: "Climb is the action of going up the tree." },
            { template: "She _____ a beautiful picture.", answer: "draws", options: ["draws", "picture", "pretty", "paper", "pencil", "blue"], explanation: "Draws is the action of making a picture." },
            { template: "He _____ a glass of cold milk.", answer: "drinks", options: ["drinks", "milk", "glass", "cold", "white", "happy"], explanation: "Drinks is the action of swallowing liquid." },
            { template: "The bird _____ a sweet song.", answer: "sings", options: ["sings", "bird", "song", "sweet", "tree", "blue"], explanation: "Sings is the action the bird does." },
            { template: "They _____ to the music.", answer: "dance", options: ["dance", "music", "loud", "happy", "party", "shoes"], explanation: "Dance is the action of moving to music." },
            { template: "I _____ my hands with soap.", answer: "wash", options: ["wash", "soap", "hands", "clean", "water", "blue"], explanation: "Wash is the action of cleaning." },
            { template: "The car _____ at the red light.", answer: "stops", options: ["stops", "car", "red", "light", "road", "fast"], explanation: "Stops is the action the car does." },
            { template: "We _____ a funny movie together.", answer: "watch", options: ["watch", "movie", "funny", "popcorn", "happy", "sit"], explanation: "Watch is the action of looking at the movie." },
            { template: "He _____ the ball to his dog.", answer: "throws", options: ["throws", "ball", "dog", "round", "park", "happy"], explanation: "Throws is the action of tossing the ball." },
            { template: "She _____ behind the sofa.", answer: "hides", options: ["hides", "sofa", "behind", "game", "quiet", "blue"], explanation: "Hides is the action of staying out of sight." },
            { template: "The sun _____ in the morning.", answer: "rises", options: ["rises", "sun", "morning", "bright", "sky", "yellow"], explanation: "Rises is the action the sun does." },
            { template: "I _____ my bag for school.", answer: "pack", options: ["pack", "bag", "school", "book", "heavy", "blue"], explanation: "Pack is the action of putting things in the bag." },
            { template: "The teacher _____ a story to the class.", answer: "reads", options: ["reads", "teacher", "story", "book", "class", "happy"], explanation: "Reads is the action the teacher does." },
            { template: "We _____ our toys with friends.", answer: "share", options: ["share", "toys", "friends", "nice", "play", "happy"], explanation: "Share is the action of letting others use your things." },
            { template: "The fish _____ in the bowl.", answer: "swims", options: ["swims", "fish", "bowl", "water", "orange", "wet"], explanation: "Swims is the action the fish does." },
            { template: "He _____ the broken bike.", answer: "fixes", options: ["fixes", "bike", "broken", "tool", "ride", "blue"], explanation: "Fixes is the action of repairing." },
            { template: "She _____ her hair every morning.", answer: "brushes", options: ["brushes", "hair", "long", "mirror", "pretty", "blue"], explanation: "Brushes is the action of grooming hair." },
            { template: "They _____ at the funny joke.", answer: "laugh", options: ["laugh", "joke", "funny", "happy", "loud", "smile"], explanation: "Laugh is the action you do when something is funny." },
            { template: "I _____ when I sleep at night.", answer: "dream", options: ["dream", "sleep", "night", "bed", "dark", "happy"], explanation: "Dream is the action that happens in your mind while sleeping." }
        ]
    },
    adverb: {
        icon: '⚡',
        name: 'Adverbs',
        instruction: 'Choose the correct adverb to complete the sentence:',
        sentences: [
            { template: "He whispered _____ so no one would hear.", answer: "softly", options: ["softly", "loud", "run", "happy", "green", "table"], explanation: "Softly describes HOW he whispered." },
            { template: "She danced _____ around the room.", answer: "wildly", options: ["wildly", "dance", "room", "shoe", "music", "floor"], explanation: "Wildly describes HOW she danced." },
            { template: "The rain fell _____ on the roof.", answer: "heavily", options: ["heavily", "rain", "wet", "cloud", "sky", "blue"], explanation: "Heavily describes HOW the rain fell." },
            { template: "He ate his dinner _____.", answer: "hungrily", options: ["hungrily", "dinner", "plate", "fork", "food", "table"], explanation: "Hungrily describes HOW he ate." },
            { template: "They shouted _____ when they won.", answer: "excitedly", options: ["excitedly", "shout", "win", "game", "happy", "loud"], explanation: "Excitedly describes HOW they shouted." },
            { template: "She wrote her name _____ on the paper.", answer: "neatly", options: ["neatly", "name", "paper", "pen", "write", "desk"], explanation: "Neatly describes HOW she wrote." },
            { template: "The turtle moved _____ toward the lettuce.", answer: "steadily", options: ["steadily", "turtle", "green", "shell", "walk", "slow"], explanation: "Steadily describes HOW the turtle moved." },
            { template: "He spoke _____ to the teacher.", answer: "politely", options: ["politely", "speak", "teacher", "school", "class", "boy"], explanation: "Politely describes HOW he spoke." },
            { template: "She smiled _____ at her friend.", answer: "sweetly", options: ["sweetly", "smile", "friend", "face", "happy", "girl"], explanation: "Sweetly describes HOW she smiled." },
            { template: "We waited _____ for the show to start.", answer: "eagerly", options: ["eagerly", "wait", "show", "time", "seat", "watch"], explanation: "Eagerly describes HOW we waited." },
            { template: "The sun shone _____ on the beach.", answer: "warmly", options: ["warmly", "sun", "beach", "sand", "sky", "yellow"], explanation: "Warmly describes HOW the sun shone." },
            { template: "He drove _____ on the icy road.", answer: "carefully", options: ["carefully", "drive", "car", "road", "ice", "wheel"], explanation: "Carefully describes HOW he drove." },
            { template: "The choir sang _____.", answer: "beautifully", options: ["beautifully", "sing", "song", "music", "voice", "stand"], explanation: "Beautifully describes HOW they sang." },
            { template: "They played _____ and followed the rules.", answer: "fairly", options: ["fairly", "play", "game", "rule", "ball", "team"], explanation: "Fairly describes HOW they played." },
            { template: "He looked _____ at his broken toy.", answer: "sadly", options: ["sadly", "look", "toy", "break", "eye", "boy"], explanation: "Sadly describes HOW he looked." },
            { template: "She answered the question _____.", answer: "wisely", options: ["wisely", "answer", "ask", "know", "smart", "girl"], explanation: "Wisely describes HOW she answered." },
            { template: "The wind blew _____ during the storm.", answer: "strongly", options: ["strongly", "wind", "storm", "blow", "air", "cloud"], explanation: "Strongly describes HOW the wind blew." },
            { template: "He worked _____ to finish his task.", answer: "busily", options: ["busily", "work", "task", "job", "time", "man"], explanation: "Busily describes HOW he worked." },
            { template: "She walked _____ to get exercise.", answer: "briskly", options: ["briskly", "walk", "shoe", "path", "girl", "leg"], explanation: "Briskly describes HOW she walked." },
            { template: "They lived _____ ever after.", answer: "happily", options: ["happily", "live", "house", "time", "life", "family"], explanation: "Happily describes HOW they lived." }
        ]
    },
    conjunction: {
        icon: '🔗',
        name: 'Conjunctions',
        instruction: 'Choose the correct conjunction to join the sentences:',
        sentences: [
            { template: "I like tea _____ cake.", answer: "and", options: ["and", "but", "or", "so", "because", "if"], explanation: "And joins two things you like." },
            { template: "Is the ball red _____ blue?", answer: "or", options: ["or", "and", "but", "so", "because", "if"], explanation: "Or gives you a choice." },
            { template: "I was hot, _____ I opened the window.", answer: "so", options: ["so", "and", "but", "or", "because", "if"], explanation: "So shows the result of being hot." },
            { template: "He is small _____ he is strong.", answer: "but", options: ["but", "and", "or", "so", "because", "if"], explanation: "But connects opposite ideas (small vs strong)." },
            { template: "I cried _____ I fell down.", answer: "because", options: ["because", "and", "but", "or", "so", "if"], explanation: "Because explains why you cried." },
            { template: "Wait here _____ I am ready.", answer: "until", options: ["until", "and", "but", "or", "so", "because"], explanation: "Until tells you how long to wait." },
            { template: "Wash your hands _____ you eat.", answer: "before", options: ["before", "and", "but", "or", "so", "because"], explanation: "Before tells you when to wash hands." },
            { template: "Brush your teeth _____ dinner.", answer: "after", options: ["after", "and", "but", "or", "so", "because"], explanation: "After tells you when to brush teeth." },
            { template: "I will go _____ you go too.", answer: "if", options: ["if", "and", "but", "or", "so", "because"], explanation: "If shows a condition." },
            { template: "It is sunny _____ it is cold.", answer: "yet", options: ["yet", "and", "or", "so", "because", "if"], explanation: "Yet shows a contrast, like 'but'." },
            { template: "_____ it rained, we played outside.", answer: "Although", options: ["Although", "and", "but", "or", "so", "because"], explanation: "Although introduces a contrast." },
            { template: "_____ I slept, it snowed.", answer: "While", options: ["While", "and", "but", "or", "so", "because"], explanation: "While means at the same time." },
            { template: "_____ you are here, please help me.", answer: "Since", options: ["Since", "and", "but", "or", "so", "because"], explanation: "Since gives a reason." },
            { template: "_____ you hurry, we will be late.", answer: "Unless", options: ["Unless", "and", "but", "or", "so", "because"], explanation: "Unless means 'if not'." },
            { template: "Neither Tom _____ Sam came to the party.", answer: "nor", options: ["nor", "and", "but", "or", "so", "because"], explanation: "Nor is used with neither." },
            { template: "Both Mom _____ Dad are home.", answer: "and", options: ["and", "but", "or", "so", "because", "if"], explanation: "And connects Mom and Dad." },
            { template: "You can either stay _____ go.", answer: "or", options: ["or", "and", "but", "so", "because", "if"], explanation: "Or is used with either." },
            { template: "I am happy _____ you came.", answer: "that", options: ["that", "and", "but", "or", "so", "because"], explanation: "That connects the feeling with the reason." },
            { template: "_____ the bell rings, you can go.", answer: "When", options: ["When", "and", "but", "or", "so", "because"], explanation: "When tells the time something happens." },
            { template: "_____ you go, I will follow.", answer: "Where", options: ["Where", "and", "but", "or", "so", "because"], explanation: "Where refers to the place." }
        ]
    }
};
