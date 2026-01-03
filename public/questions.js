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
        icon: '🌈',
        name: 'Adjectives',
        instruction: 'Choose the best adjective to complete the sentence:',
        sentences: [
            { template: 'There was a _____ queue at the airport.', answer: 'long', options: ['tall', 'messy', 'juicy', 'long', 'busy', 'warm'], explanation: '"Long" describes the length of the queue. We use "long" for things that stretch out, like queues, roads, or hair!' },
            { template: "Oscar's bedroom was very _____.", answer: 'messy', options: ['tall', 'messy', 'juicy', 'long', 'busy', 'warm'], explanation: '"Messy" means untidy or disorganized. Bedrooms can get messy when things aren\'t put away!' },
            { template: 'We ate some _____ bread.', answer: 'warm', options: ['tall', 'messy', 'juicy', 'long', 'busy', 'warm'], explanation: '"Warm" describes the temperature of the bread. Fresh bread from the oven feels warm and cozy!' },
            { template: "Jenny's tower was very _____.", answer: 'tall', options: ['tall', 'messy', 'juicy', 'long', 'busy', 'warm'], explanation: '"Tall" describes the height of the tower. We use "tall" for things that go up high, like towers, buildings, and people!' },
            { template: 'Omar liked the _____ apple.', answer: 'juicy', options: ['tall', 'messy', 'juicy', 'long', 'busy', 'warm'], explanation: '"Juicy" describes an apple that has lots of sweet juice inside. Yummy!' },
            { template: 'The car park was very _____.', answer: 'busy', options: ['tall', 'messy', 'juicy', 'long', 'busy', 'warm'], explanation: '"Busy" means full of activity with lots of cars and people. A busy place has many things happening!' },
            { template: 'The _____ dog ran across the park.', answer: 'happy', options: ['happy', 'quickly', 'bright', 'soft', 'loud', 'tiny'], explanation: '"Happy" describes how the dog was feeling - joyful and cheerful while running and playing!' },
            { template: 'She wore a _____ dress to the party.', answer: 'beautiful', options: ['beautiful', 'slowly', 'carefully', 'ugly', 'red', 'new'], explanation: '"Beautiful" means very pretty or lovely. It\'s the best adjective to describe a nice dress for a party!' },
            { template: 'The _____ mountain was covered in snow.', answer: 'huge', options: ['huge', 'small', 'green', 'rocky', 'steep', 'cold'], explanation: '"Huge" means very, very big! Mountains are often huge because they are so tall and wide.' },
            { template: 'He has a very _____ voice.', answer: 'loud', options: ['quiet', 'loud', 'soft', 'deep', 'high', 'clear'], explanation: '"Loud" describes a voice that can be heard easily, even from far away. The opposite is "quiet"!' },
            { template: 'The _____ cat slept on the sofa.', answer: 'lazy', options: ['lazy', 'active', 'sleepy', 'fluffy', 'black', 'fat'], explanation: '"Lazy" describes someone who doesn\'t want to be active. A cat sleeping on the sofa is being lazy!' },
            { template: 'We had a _____ meal at the restaurant.', answer: 'delicious', options: ['delicious', 'terrible', 'quick', 'slow', 'expensive', 'cheap'], explanation: '"Delicious" means the food tasted really, really good! It\'s the best word to describe a yummy meal.' },
            { template: 'The _____ wind blew the leaves away.', answer: 'strong', options: ['strong', 'weak', 'cold', 'warm', 'gentle', 'fierce'], explanation: '"Strong" describes wind that has a lot of power - enough to blow leaves away!' },
            { template: 'She gave me a _____ smile.', answer: 'bright', options: ['bright', 'sad', 'wide', 'small', 'warm', 'cold'], explanation: '"Bright" describes a big, cheerful smile that lights up someone\'s face, like sunshine!' },
            { template: 'The _____ boy helped his grandmother.', answer: 'kind', options: ['kind', 'rude', 'tall', 'young', 'old', 'smart'], explanation: '"Kind" describes someone who is helpful and caring. Helping your grandmother is a very kind thing to do!' },
            { template: 'The _____ ice cream melted quickly.', answer: 'cold', options: ['cold', 'hot', 'sweet', 'soft', 'creamy', 'frozen'], explanation: '"Cold" describes the temperature of the ice cream. Ice cream is cold, which is why it melts when it gets warm!' },
            { template: 'We saw a _____ elephant at the zoo.', answer: 'giant', options: ['giant', 'tiny', 'slow', 'grey', 'wild', 'hungry'], explanation: '"Giant" means extremely big! Elephants are giant animals - some of the largest on Earth!' },
            { template: 'She has _____ hair that reaches her waist.', answer: 'long', options: ['long', 'short', 'curly', 'blonde', 'thick', 'shiny'], explanation: '"Long" describes the length of her hair. Hair that reaches the waist has grown very long!' },
            { template: 'The _____ puppy wagged its tail.', answer: 'excited', options: ['excited', 'sleepy', 'brown', 'small', 'cute', 'furry'], explanation: '"Excited" describes how the puppy was feeling - full of energy and happiness! Puppies wag their tails when excited.' },
            { template: 'He told a _____ joke that made everyone laugh.', answer: 'funny', options: ['funny', 'sad', 'long', 'silly', 'old', 'boring'], explanation: '"Funny" describes the joke - it was amusing and made people laugh! Funny things bring joy and laughter.' }
        ]
    },
    noun: {
        icon: '🏠',
        name: 'Nouns',
        instruction: 'Choose the noun that best completes the sentence:',
        sentences: [
            { template: 'The _____ flew high in the sky.', answer: 'bird', options: ['bird', 'quickly', 'blue', 'fly', 'happy', 'above'], explanation: '"Bird" is a noun - it\'s a thing (an animal) that can fly. Nouns are naming words for people, places, animals, or things!' },
            { template: 'My _____ baked a delicious cake.', answer: 'mother', options: ['mother', 'bake', 'sweet', 'kitchen', 'quickly', 'nice'], explanation: '"Mother" is a noun - it\'s a person who can bake cakes! Nouns can be people in our family.' },
            { template: 'The _____ barked loudly at night.', answer: 'dog', options: ['dog', 'bark', 'loud', 'night', 'scary', 'fast'], explanation: '"Dog" is a noun - it\'s an animal that barks. We need a noun (thing) to be the subject doing the barking!' },
            { template: 'We visited the _____ during our holiday.', answer: 'beach', options: ['beach', 'sunny', 'swim', 'sand', 'wave', 'hot'], explanation: '"Beach" is a noun - it\'s a place you can visit. We visit places (nouns), not actions or descriptions!' },
            { template: 'The _____ shines brightly in the morning.', answer: 'sun', options: ['sun', 'bright', 'shine', 'warm', 'yellow', 'sky'], explanation: '"Sun" is a noun - it\'s a thing in the sky that gives us light and warmth!' },
            { template: 'I read a _____ before going to bed.', answer: 'book', options: ['book', 'read', 'story', 'sleepy', 'night', 'page'], explanation: '"Book" is a noun - it\'s a thing you can hold and read. You read books, not actions!' },
            { template: 'The _____ rang loudly in the classroom.', answer: 'bell', options: ['bell', 'ring', 'loud', 'class', 'sound', 'metal'], explanation: '"Bell" is a noun - it\'s a thing that makes a ringing sound. We need a noun to be doing the ringing!' },
            { template: 'She put the flowers in a _____.', answer: 'vase', options: ['vase', 'pretty', 'water', 'glass', 'table', 'flower'], explanation: '"Vase" is a noun - it\'s a container (thing) used to hold flowers. You put things in other things (nouns)!' },
            { template: 'The _____ was full of colorful fish.', answer: 'aquarium', options: ['aquarium', 'fish', 'water', 'blue', 'swim', 'glass'], explanation: '"Aquarium" is a noun - it\'s a glass tank (thing/place) where fish live and swim!' },
            { template: 'We planted a _____ in the garden.', answer: 'tree', options: ['tree', 'green', 'grow', 'leaf', 'tall', 'plant'], explanation: '"Tree" is a noun - it\'s a living thing that you can plant. You plant things (nouns) in gardens!' },
            { template: 'The _____ delivered our letters.', answer: 'postman', options: ['postman', 'deliver', 'letter', 'mail', 'walk', 'bag'], explanation: '"Postman" is a noun - it\'s a person whose job is to deliver letters and packages!' },
            { template: 'I ate a _____ for breakfast.', answer: 'banana', options: ['banana', 'yellow', 'eat', 'sweet', 'fruit', 'morning'], explanation: '"Banana" is a noun - it\'s a fruit (thing) that you can eat. We eat things (nouns)!' },
            { template: 'The _____ had four wheels.', answer: 'car', options: ['car', 'drive', 'fast', 'road', 'wheel', 'red'], explanation: '"Car" is a noun - it\'s a vehicle (thing) that has wheels. Things have parts, not actions!' },
            { template: 'She wore a pretty _____ on her head.', answer: 'hat', options: ['hat', 'wear', 'pretty', 'head', 'pink', 'warm'], explanation: '"Hat" is a noun - it\'s a thing you can wear on your head. You wear things (nouns)!' },
            { template: 'The _____ swam gracefully in the pond.', answer: 'duck', options: ['duck', 'swim', 'water', 'yellow', 'quack', 'feather'], explanation: '"Duck" is a noun - it\'s an animal (thing) that can swim. We need a noun to be doing the swimming!' },
            { template: 'The _____ blew out the candles on her cake.', answer: 'girl', options: ['girl', 'blow', 'happy', 'birthday', 'wish', 'pink'], explanation: '"Girl" is a noun - it\'s a person who can blow out candles. We need a noun (person) doing the action!' },
            { template: 'We found a beautiful _____ on the beach.', answer: 'shell', options: ['shell', 'find', 'sandy', 'pretty', 'ocean', 'wet'], explanation: '"Shell" is a noun - it\'s a thing you can find on the beach. Shells are beautiful objects from sea creatures!' },
            { template: 'The _____ flew a kite in the park.', answer: 'boy', options: ['boy', 'fly', 'windy', 'high', 'string', 'colorful'], explanation: '"Boy" is a noun - it\'s a person who can fly a kite. We need a noun (person) to be doing the flying!' },
            { template: 'I lost my _____ at school today.', answer: 'pencil', options: ['pencil', 'lost', 'write', 'sharp', 'wooden', 'yellow'], explanation: '"Pencil" is a noun - it\'s a thing you can lose. You can lose objects (nouns), not actions!' },
            { template: 'The _____ made a nest in the tree.', answer: 'robin', options: ['robin', 'build', 'high', 'branch', 'eggs', 'spring'], explanation: '"Robin" is a noun - it\'s a bird (animal) that builds nests. We need a noun to be doing the building!' }
        ]
    },
    verb: {
        icon: '🏃',
        name: 'Verbs',
        instruction: 'Choose the verb that best completes the sentence:',
        sentences: [
            { template: 'The children _____ in the playground.', answer: 'played', options: ['played', 'happy', 'swing', 'loud', 'outside', 'fun'], explanation: '"Played" is a verb - it\'s an action word! Verbs tell us what someone or something does. The children did the action of playing!' },
            { template: 'She _____ her homework after school.', answer: 'finished', options: ['finished', 'difficult', 'school', 'book', 'pencil', 'desk'], explanation: '"Finished" is a verb - it describes the action of completing something. She did the action of finishing her homework!' },
            { template: 'The cat _____ the mouse around the house.', answer: 'chased', options: ['chased', 'fast', 'scary', 'house', 'mouse', 'corner'], explanation: '"Chased" is a verb - it\'s the action of running after something. The cat did the action of chasing!' },
            { template: 'We _____ a beautiful rainbow yesterday.', answer: 'saw', options: ['saw', 'colorful', 'sky', 'rain', 'pretty', 'amazing'], explanation: '"Saw" is a verb - it\'s the past tense of "see". It describes the action of looking at something with your eyes!' },
            { template: 'The chef _____ a delicious meal.', answer: 'cooked', options: ['cooked', 'tasty', 'kitchen', 'food', 'hot', 'hungry'], explanation: '"Cooked" is a verb - it describes the action of preparing food. The chef did the action of cooking!' },
            { template: 'The bird _____ from tree to tree.', answer: 'flew', options: ['flew', 'high', 'wing', 'branch', 'fast', 'free'], explanation: '"Flew" is a verb - it\'s the past tense of "fly". It describes the action of moving through the air with wings!' },
            { template: 'He _____ the ball into the goal.', answer: 'kicked', options: ['kicked', 'round', 'goal', 'score', 'foot', 'hard'], explanation: '"Kicked" is a verb - it describes the action of hitting something with your foot. He did the action of kicking!' },
            { template: 'She _____ a letter to her grandmother.', answer: 'wrote', options: ['wrote', 'long', 'paper', 'pen', 'stamp', 'kind'], explanation: '"Wrote" is a verb - it\'s the past tense of "write". It describes the action of putting words on paper!' },
            { template: 'The dog _____ loudly at the stranger.', answer: 'barked', options: ['barked', 'loud', 'scary', 'angry', 'fence', 'night'], explanation: '"Barked" is a verb - it describes the action of a dog making its loud sound. The dog did the action of barking!' },
            { template: 'They _____ a sandcastle at the beach.', answer: 'built', options: ['built', 'sandy', 'bucket', 'beach', 'big', 'wave'], explanation: '"Built" is a verb - it\'s the past tense of "build". It describes the action of making or constructing something!' },
            { template: 'The baby _____ when she was hungry.', answer: 'cried', options: ['cried', 'hungry', 'loud', 'milk', 'mother', 'tired'], explanation: '"Cried" is a verb - it describes the action of making crying sounds. The baby did the action of crying!' },
            { template: 'He _____ the heavy box upstairs.', answer: 'carried', options: ['carried', 'heavy', 'stairs', 'strong', 'box', 'tired'], explanation: '"Carried" is a verb - it describes the action of holding something and moving it. He did the action of carrying!' },
            { template: 'She _____ her teeth before bed.', answer: 'brushed', options: ['brushed', 'white', 'toothbrush', 'clean', 'night', 'mint'], explanation: '"Brushed" is a verb - it describes the action of cleaning with a brush. She did the action of brushing!' },
            { template: 'The students _____ attentively to the teacher.', answer: 'listened', options: ['listened', 'quiet', 'teacher', 'class', 'lesson', 'smart'], explanation: '"Listened" is a verb - it describes the action of paying attention to sounds. The students did the action of listening!' },
            { template: 'The flowers _____ in the garden.', answer: 'bloomed', options: ['bloomed', 'pretty', 'colorful', 'spring', 'smell', 'garden'], explanation: '"Bloomed" is a verb - it describes the action of flowers opening up and showing their petals!' },
            { template: 'She _____ the door and walked inside.', answer: 'opened', options: ['opened', 'wooden', 'inside', 'door', 'slowly', 'heavy'], explanation: '"Opened" is a verb - it describes the action of making a door move to let you through!' },
            { template: 'The frog _____ into the pond.', answer: 'jumped', options: ['jumped', 'green', 'wet', 'splash', 'lily', 'pond'], explanation: '"Jumped" is a verb - it describes the action of leaping through the air. The frog did the action of jumping!' },
            { template: 'He _____ his bicycle to school every day.', answer: 'rides', options: ['rides', 'fast', 'wheel', 'pedal', 'helmet', 'morning'], explanation: '"Rides" is a verb - it describes the action of using a bicycle to travel. He does the action of riding!' },
            { template: 'The artist _____ a beautiful picture.', answer: 'painted', options: ['painted', 'colorful', 'brush', 'canvas', 'pretty', 'frame'], explanation: '"Painted" is a verb - it describes the action of creating art with paint. The artist did the action of painting!' },
            { template: 'They _____ hands and became friends.', answer: 'shook', options: ['shook', 'friendly', 'happy', 'hands', 'smile', 'nice'], explanation: '"Shook" is a verb - it\'s the past tense of "shake". It describes the action of moving hands up and down together!' }
        ]
    },
    adverb: {
        icon: '⚡',
        name: 'Adverbs',
        instruction: 'Choose the adverb that best completes the sentence:',
        sentences: [
            { template: 'The tortoise walked _____ across the road.', answer: 'slowly', options: ['slowly', 'quickly', 'carefully', 'happily', 'loudly', 'quietly'], explanation: '"Slowly" is an adverb that tells us HOW the tortoise walked. Tortoises are famous for moving at a slow pace!' },
            { template: 'She sang the song _____.', answer: 'beautifully', options: ['beautifully', 'badly', 'loudly', 'softly', 'quickly', 'happily'], explanation: '"Beautifully" is an adverb that tells us HOW she sang. It means she sang in a lovely, pleasing way!' },
            { template: 'He _____ finished his homework.', answer: 'quickly', options: ['slowly', 'quickly', 'carefully', 'neatly', 'easily', 'hardly'], explanation: '"Quickly" is an adverb that tells us HOW he finished - in a fast way, without taking much time!' },
            { template: 'The baby slept _____ through the night.', answer: 'peacefully', options: ['peacefully', 'loudly', 'badly', 'restlessly', 'soundly', 'lightly'], explanation: '"Peacefully" is an adverb that tells us HOW the baby slept - calmly and without being disturbed!' },
            { template: 'She spoke _____ so everyone could hear.', answer: 'loudly', options: ['quietly', 'softly', 'loudly', 'clearly', 'slowly', 'fast'], explanation: '"Loudly" is an adverb that tells us HOW she spoke - with a strong voice that everyone could hear!' },
            { template: 'The dancer moved _____ across the stage.', answer: 'gracefully', options: ['gracefully', 'clumsily', 'quickly', 'slowly', 'beautifully', 'awkwardly'], explanation: '"Gracefully" is an adverb that tells us HOW the dancer moved - smoothly and elegantly, like a swan!' },
            { template: 'He waited _____ for his turn.', answer: 'patiently', options: ['patiently', 'impatiently', 'eagerly', 'anxiously', 'calmly', 'nervously'], explanation: '"Patiently" is an adverb that tells us HOW he waited - calmly, without getting upset or rushing!' },
            { template: 'The children played _____ in the garden.', answer: 'happily', options: ['happily', 'sadly', 'quietly', 'loudly', 'noisily', 'peacefully'], explanation: '"Happily" is an adverb that tells us HOW the children played - with joy and having lots of fun!' },
            { template: 'She _____ agreed to help her friend.', answer: 'gladly', options: ['gladly', 'reluctantly', 'sadly', 'angrily', 'happily', 'quickly'], explanation: '"Gladly" is an adverb that tells us HOW she agreed - willingly and with pleasure, because she wanted to help!' },
            { template: 'The dog barked _____ at the mailman.', answer: 'fiercely', options: ['fiercely', 'gently', 'quietly', 'loudly', 'angrily', 'softly'], explanation: '"Fiercely" is an adverb that tells us HOW the dog barked - in an aggressive, intense way to scare away the mailman!' },
            { template: 'He answered the question _____.', answer: 'correctly', options: ['correctly', 'wrongly', 'quickly', 'slowly', 'confidently', 'nervously'], explanation: '"Correctly" is an adverb that tells us HOW he answered - in the right way, without making mistakes!' },
            { template: 'She dressed _____ for the party.', answer: 'elegantly', options: ['elegantly', 'casually', 'quickly', 'carelessly', 'beautifully', 'simply'], explanation: '"Elegantly" is an adverb that tells us HOW she dressed - in a stylish, sophisticated way for the special occasion!' },
            { template: 'The train arrived _____.', answer: 'late', options: ['early', 'late', 'soon', 'finally', 'suddenly', 'quickly'], explanation: '"Late" is an adverb that tells us WHEN the train arrived - after the expected time, not on schedule!' },
            { template: 'He _____ admitted his mistake.', answer: 'honestly', options: ['honestly', 'dishonestly', 'reluctantly', 'proudly', 'shamefully', 'quietly'], explanation: '"Honestly" is an adverb that tells us HOW he admitted - truthfully, without hiding or lying about it!' },
            { template: 'The sun shone _____ today.', answer: 'brightly', options: ['brightly', 'dimly', 'warmly', 'hotly', 'strongly', 'weakly'], explanation: '"Brightly" is an adverb that tells us HOW the sun shone - with lots of light, making everything look clear and sunny!' },
            { template: 'The rabbit hopped _____ through the garden.', answer: 'quickly', options: ['quickly', 'slowly', 'quietly', 'happily', 'carefully', 'softly'], explanation: '"Quickly" is an adverb that tells us HOW the rabbit hopped - fast and with speed, as rabbits usually do!' },
            { template: 'She _____ closed the door to not wake the baby.', answer: 'quietly', options: ['quietly', 'loudly', 'quickly', 'slowly', 'gently', 'softly'], explanation: '"Quietly" is an adverb that tells us HOW she closed the door - without making noise to keep the baby sleeping!' },
            { template: 'The old man walked _____ with his cane.', answer: 'slowly', options: ['slowly', 'quickly', 'carefully', 'happily', 'quietly', 'steadily'], explanation: '"Slowly" is an adverb that tells us HOW the old man walked - at a slow pace, taking his time with his cane.' },
            { template: 'The team played _____ and won the match.', answer: 'brilliantly', options: ['brilliantly', 'badly', 'lazily', 'slowly', 'carelessly', 'poorly'], explanation: '"Brilliantly" is an adverb that tells us HOW the team played - in an excellent, outstanding way that led to winning!' },
            { template: 'He _____ forgot his homework at home.', answer: 'accidentally', options: ['accidentally', 'purposely', 'happily', 'sadly', 'quickly', 'slowly'], explanation: '"Accidentally" is an adverb that tells us HOW he forgot - by mistake, not on purpose. Oops!' }
        ]
    },
    conjunction: {
        icon: '🔗',
        name: 'Conjunctions',
        instruction: 'Choose the conjunction that best joins the sentence:',
        sentences: [
            { template: 'I wanted to play outside, _____ it was raining.', answer: 'but', options: ['and', 'but', 'or', 'so', 'because', 'if'], explanation: '"But" shows contrast - you wanted to play (positive), but the rain stopped you (negative). Use "but" when two ideas are opposite!' },
            { template: 'She likes apples _____ oranges.', answer: 'and', options: ['and', 'but', 'or', 'so', 'because', 'if'], explanation: '"And" connects two similar things together. She likes both apples AND oranges - they go together!' },
            { template: 'Would you like tea _____ coffee?', answer: 'or', options: ['and', 'but', 'or', 'so', 'because', 'if'], explanation: '"Or" gives a choice between options. You can pick tea OR coffee, but not both!' },
            { template: 'He was tired, _____ he went to bed early.', answer: 'so', options: ['and', 'but', 'or', 'so', 'because', 'if'], explanation: '"So" shows a result. Being tired caused him to go to bed early - "so" connects the reason with what happened!' },
            { template: 'I stayed home _____ I was feeling sick.', answer: 'because', options: ['and', 'but', 'or', 'so', 'because', 'if'], explanation: '"Because" explains the reason why. Why did you stay home? BECAUSE you were sick!' },
            { template: 'We can go to the park _____ you finish your homework.', answer: 'if', options: ['and', 'but', 'or', 'so', 'because', 'if'], explanation: '"If" shows a condition - something that must happen first. Going to the park depends on finishing homework!' },
            { template: 'The movie was long _____ interesting.', answer: 'but', options: ['and', 'but', 'or', 'so', 'because', 'yet'], explanation: '"But" shows contrast. "Long" might seem negative, BUT "interesting" is positive - showing it was worth watching!' },
            { template: 'She studied hard, _____ she passed the exam.', answer: 'so', options: ['and', 'but', 'or', 'so', 'because', 'if'], explanation: '"So" shows a result. Studying hard led to passing the exam - the result of her hard work!' },
            { template: 'You can have cake _____ ice cream for dessert.', answer: 'or', options: ['and', 'but', 'or', 'so', 'because', 'if'], explanation: '"Or" gives a choice. Pick one dessert: cake OR ice cream - you need to choose!' },
            { template: 'I like swimming _____ playing football.', answer: 'and', options: ['and', 'but', 'or', 'so', 'because', 'if'], explanation: '"And" connects two things you like equally. You enjoy both swimming AND football!' },
            { template: 'He ran fast, _____ he missed the bus.', answer: 'but', options: ['and', 'but', 'or', 'so', 'because', 'yet'], explanation: '"But" shows contrast. Running fast should help catch the bus, BUT surprisingly he still missed it!' },
            { template: 'We brought umbrellas _____ it might rain.', answer: 'because', options: ['and', 'but', 'or', 'so', 'because', 'if'], explanation: '"Because" explains the reason. Why bring umbrellas? BECAUSE rain might come!' },
            { template: 'She is smart _____ hardworking.', answer: 'and', options: ['and', 'but', 'or', 'so', 'because', 'if'], explanation: '"And" connects two positive qualities together. She has both traits - smart AND hardworking!' },
            { template: 'Hurry up, _____ we will be late!', answer: 'or', options: ['and', 'but', 'or', 'so', 'because', 'if'], explanation: '"Or" shows what will happen if you don\'t hurry - being late! It\'s a warning: hurry OR face being late!' },
            { template: 'The food was cold, _____ it was still tasty.', answer: 'but', options: ['and', 'but', 'or', 'so', 'because', 'yet'], explanation: '"But" shows contrast. Cold food is usually bad, BUT this food was still tasty despite being cold!' },
            { template: 'I will help you _____ you ask nicely.', answer: 'if', options: ['and', 'but', 'or', 'so', 'because', 'if'], explanation: '"If" shows a condition. Helping depends on asking nicely - it\'s something that must happen first!' },
            { template: 'She was hungry, _____ she made a sandwich.', answer: 'so', options: ['and', 'but', 'or', 'so', 'because', 'if'], explanation: '"So" shows a result. Being hungry caused her to make food - the sandwich was the result of her hunger!' },
            { template: 'Do you want to play inside _____ outside?', answer: 'or', options: ['and', 'but', 'or', 'so', 'because', 'if'], explanation: '"Or" gives a choice between two places. You need to pick one - inside OR outside!' },
            { template: 'The dog is loyal _____ friendly.', answer: 'and', options: ['and', 'but', 'or', 'so', 'because', 'if'], explanation: '"And" connects two qualities the dog has. The dog is both loyal AND friendly - two good traits together!' },
            { template: 'He wore a coat _____ it was very cold outside.', answer: 'because', options: ['and', 'but', 'or', 'so', 'because', 'if'], explanation: '"Because" explains the reason. Why wear a coat? BECAUSE the weather was very cold!' }
        ]
    }
};
