/* 
We have a robot that you can ask one of the predetermined questions. The questions are as follows:
The first question is about next weather's week
The second question is about the robot's opinion on the task you want to do!
The third question is about what you should eat for dinner.
The fourth question is about the name of a country.

The robot should randomly display one of the predetermined answers to the question you ask, and it should also categorize that question. 
If the question you ask is not among the predetermined questions, it should say, "I cannot answer your question."
*/

const answersForQuestionOne = {
  sunny: [
    "The weather is Sunny and Breezy/Windy",
    "The weather is Sunny and Clear",
    "The weather is Sunny and Warm",
    "The weather is Sunny and Cool",
    "The weather is Sunny and Cloudy",
    "The weather is Sunny and Dry",
    "The weather is Sunny and Hazy",
    "The weather is Sunny with Scattered Clouds",
  ],
  snowy: [
    "The weather outside is snowy and windy, so be sure to bundle up.",
    "There's a deep layer of snow on the ground and the weather is frigid.",
    "The weather forecast calls for both cloudy skies and heavy snow accumulation.",
    "It's been snowing heavily for several days now, and the weather is bitterly cold.",
    "Sleet and freezing rain are expected later tonight, followed by more snow and cold weather.",
    "Even though the weather is snowy and cold, there's something magical about winter scenery.",
    "Although it's beautiful, the weather can be perilously snowy and icy during this time of year.",
    "The weather can be both serene and dangerous during a snowy spell in the mountains.",
    "The weather outside is snowy and treacherous, so avoid driving if you can help it.",
    "In some areas, the weather can switch quickly between clear and sunny to snowy and stormy.",
  ],
};

const answersForQuestionTwo = {
  positiveAnswers: [
    "You should go for it",
    "Absolutely, go ahead",
    "Without a doubt, do it",
    "Yes, it's a great idea",
    "You may rely on it, proceed",
    "As I see it, yes, definitely",
    "Most likely, give it a try",
    "Outlook good, go for it",
    "Yes, definitely",
    "Signs point to yes, go ahead",
    "Absolutely, go for it",
  ],
  negativeAnswers: [
    "It's probably not a good idea",
    "No, I would advise against it",
    "My recommendation is to say no",
    "Outlook not favorable, avoid it",
    "Very doubtful, better not do it",
    "No, it's not recommended",
    "Better not tell you now, but lean towards no",
    "Reply hazy, better to reconsider",
    "Cannot predict now, but leaning towards no",
    "Signs point to no, best to avoid it",
    "Absolutely not, don't proceed",
    "Absolutely no, it's not advisable",
  ],
};

const answersForQuestionThree = {
  fastFood: ["McDonald's", "Burger King", "KFC", "Subway", "Pizza Hut", "Wendy's", "Taco Bell", "Chick-fil-A", "Domino's", "Papa John's"],
  vegetarianFood: [
    "Veggie Burger",
    "Vegetable Stir-Fry",
    "Quinoa Salad",
    "Caprese Sandwich",
    "Mushroom Risotto",
    "Eggplant Parmesan",
    "Vegetable Curry",
    "Tofu Stir-Fry",
    "Spinach and Feta Wrap",
    "Veggie Pizza",
  ],
};

const answersForQuestionFour = {
  Asia: [
    "Afghanistan",
    "Armenia",
    "Azerbaijan",
    "Bahrain",
    "Bangladesh",
    "Bhutan",
    "Brunei",
    "Cambodia",
    "China",
    "Cyprus",
    "Georgia",
    "India",
    "Indonesia",
    "Iran",
  ],
  american_countries: [
    "United States",
    "Canada",
    "Mexico",
    "Brazil",
    "Argentina",
    "Colombia",
    "Peru",
    "Venezuela",
    "Chile",
    "Ecuador",
    "Guatemala",
    "Cuba",
    "Bolivia",
    "Haiti",
    "Dominican Republic",
  ],
};
// Your code goes below this line

// Your code goes above this line
