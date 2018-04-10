//STORE for all the information needed to generate and handle all the questions for the quiz APP
const STORE = [
                {
                    question: 'Q1. To bard a roast means to do what to it?',
                    answers: ['Wrap it in fat', 'Trim the Fat', 'Score it', 'Stuff it with herbs'],
                    correctAnswer: 'Wrap it in fat',
                    feedback: 'Ever try to bard asparagus in bacon? It\'s\ delicious!',
                    correctIcon: 'https://img.sndimg.com/food/image/upload/w_555,h_416,c_fit,fl_progressive,q_95/v1/img/recipes/11/66/10/x5EdzBISQNepkd1Xl0zk_Bacon-Wrapped-Asparagus-Bundles-4.png',
                    alt: 'bacon and asparagus',
                 },

                 {
                    question: 'Q2. What three vegetables make up mirepoix?',
                    answers: [ 'Green Peppers, Onions and Celery', 'Carrots, Onions and Celery', 'Carrots, Onions and Green Peppers', 'Celery, Carrots and Green Peppers'],
                    correctAnswer: 'Carrots, Onions and Celery',
                    feedback:'Did you know that Mirepoix is the flavor base to many of your favorite soups? Nothing like a little French to add to your credibility among your friends.',
                    correctIcon: 'http://www.besthealthmag.ca/wp-content/uploads/2017/02/shutterstock_85722355-768x512.jpg',
                    alt: 'bouillabaisse',
                 },

                 {
                    question: 'Q3. What ingredient is omitted in the Cajun variant of mirepoix?',
                    answers: ['Carrots', 'Celery', 'Green Peppers', 'Onions'],
                    correctAnswer: 'Carrots',
                    feedback: 'You know.... gumbo, jambalayas and all that good stuff. Way better if you get rid of carrots',
                    correctIcon: 'https://media.mercola.com/assets/images/foodfacts/carrot-nutrition-facts.jpg',
                    alt: 'carrots',
                 },

                 {
                    question: 'Q4. Saffron is easily the most expensive thing that you might ever find in a spice rack. About how much does saffron sell per ounce?',
                    answers: ['$300', '$500', '$750', '$1000'],
                    correctAnswer: '$300',
                    feedback: 'Fun fact: It takes 50,000 to 75,000 flowers to make 1 pound of saffron. Use it sparingly.',
                    correctIcon: 'https://static1.squarespace.com/static/56e95c49f850829a3e2bc17a/t/599469ee893fc0fbf3d7b8b7/1502898672221/Saffron+Flower.jpg?format=2500w',
                    alt: 'saffron flower',
                 },

                 {
                    question: 'Q5. In what cooking method do you first brown food in fat, then cook in a small amount of liquid over low heat for a long time?',
                    answers: ['Stewing', 'Smoking', 'Velvelting', 'Braising'],
                    correctAnswer: 'Braising',
                    feedback: 'Ever try braising pork belly in soy sauce, ginger, garlic, sugar and star anise? I highly recommend it.',
                    correctIcon: 'http://images.honestcooking.com/wp-content/uploads/2016/09/braised-pork-belly-2-1.jpg',
                    alt: 'braised pork belly',
                 },

                 {
                    question: 'Q6. What is a honing steel used for?',
                    answers: ['To hold hot dishes', 'To replace the blade of a knife', 'To keep a fine edge on a sharp knife',  'To clean the blade'],
                    feedback: 'Not a bad idea to hone your blade right before you use it. 4 times each side.',
                    correctAnswer: 'To keep a fine edge on a sharp knife',
                    correctIcon: 'http://cdn.cutleryandmore.com/products/large/601.jpg',
                    alt: 'a classic chef\'s\ knife',
                 },

                 {
                    question: 'Q7. What does it mean to cure a meat?',
                    answers: ['To remove the fat before cooking', 'To preserve drying, salting or smoking', 'To cut away bacteria left after dry aging', 'To clean the meat prior to preparation'],
                    correctAnswer: 'To preserve drying, salting or smoking',
                    feedback: 'Cured salmon, also known as "Lox" is really good on a toasted bagel with cream cheese and capers.',
                    correctIcon: 'http://media.foodnetwork.ca/recipetracker/dmm/C/U/Cured_and_Smoked_Salmon_003.jpg',
                    alt: 'cured salmon on a bagel',
                 },

                 {
                    question: 'Q8. If you like your pasta prepared al dente, what do you mean?',
                    answers: ['Firm to the bite', 'Soft and Chewy', 'Fresh', 'Sticky'],
                    correctAnswer: 'Firm to the bite',
                    feedback: 'Al dente means literally "to the tooth". More words to add to your vocabulary.',
                    correctIcon: 'https://www.sbs.com.au/food/sites/sbs.com.au.food/files/styles/full/public/Pasta-with-Cherry-Tomatoes.jpg?itok=mlbhhvu7&mtime=1401946169',
                    alt: 'spicy salami and basil pasta',
                 },

                 {
                    question: 'Q9. Capsaicin is the active component in chili peppers that makes them spicy. What is the best drink to quench the burn?', 
                    answers: ['Water', 'Soda', 'Tomato Juice', 'Milk'],
                    correctAnswer: 'Milk',
                    feedback: 'Capsaicin binds well with fat and sugar... but may I suggest that you don\'t\ actually drink the milk.',
                    correctIcon: 'https://n6-img-fp.akamaized.net/free-photo/glass-bottle-of-natural-fresh-milk_1357-450.jpg?size=338&ext=jpg',
                    alt: 'a glass of milk',
                 },

                 {
                    question: 'Q10. What is a roux?', 
                    answers: ['A mixture of flour and fat used for thickening sauces', ' A yeast-based dough', 'A sugary syrup', 'A gluten-free alternative to flour'],
                    correctAnswer: 'A mixture of flour and fat used for thickening sauces',
                    feedback: 'After you sous vide a roast, why not take the drippings and make a roux to serve as gravy?',
                    correctIcon: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/10/5/0/FNM_110111-Mix-And-Match-005_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371600440511.jpeg',
                    alt: 'gravy',
                 },
               ];

const incorrectAnswer = {
                   image: "http://c2.thejournal.ie/media/2013/09/burning-question-scrape-burnt-toast-390x285.jpg",
                   alt: "unhappy burnt toast",
                  };
