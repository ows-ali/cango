import { addExperience } from "../seed-helpers";

export async function seedColors() {
  // Module 123: Basic Adjectives (A1, level=4)
  await addExperience(123, "Learning Colors", 4, "Colors",
    [
      { target: "Der Himmel ist blau.", en: "The sky is blue.", speaker: "person1" },
      { target: "Die Sonne ist gelb.", en: "The sun is yellow.", speaker: "person2" },
      { target: "Das Gras ist grün.", en: "The grass is green.", speaker: "person1" },
      { target: "Das Auto ist rot.", en: "The car is red.", speaker: "person2" },
      { target: "Die Blume ist weiß.", en: "The flower is white.", speaker: "person1" },
    ],
    [{ target: "blau", en: "blue" }, { target: "rot", en: "red" }, { target: "grün", en: "green" }, { target: "gelb", en: "yellow" }, { target: "weiß", en: "white" }],
    [
      { target: "Welche Farbe hat der Himmel?", en: "What color is the sky?", options: [{ target: "blau", en: "blue", correct: true }, { target: "rot", en: "red", correct: false }, { target: "grün", en: "green", correct: false }] },
      { target: "Welche Farbe hat das Auto?", en: "What color is the car?", options: [{ target: "gelb", en: "yellow", correct: false }, { target: "rot", en: "red", correct: true }, { target: "weiß", en: "white", correct: false }] },
    ],
    [{ target: "der Himmel", en: "the sky" }, { target: "die Sonne", en: "the sun" }, { target: "das Gras", en: "the grass" }],
    { question: "Sie zeigen auf einen Gegenstand. Was sagen Sie?", questionTranslation: "You point at an object. What do you say?", options: [
      { text: "Das ist rot.", translation: "That is red.", correct: true },
      { text: "Wo ist das?", translation: "Where is that?", correct: false },
      { text: "Ich möchte das.", translation: "I want that.", correct: false }
    ] },
  );

  await addExperience(123, "Describing Sizes", 4, "Colors",
    [
      { target: "Ich suche einen großen Tisch.", en: "I'm looking for a big table.", speaker: "person1" },
      { target: "Der Tisch hier ist sehr groß.", en: "This table here is very big.", speaker: "person2" },
      { target: "Haben Sie auch einen kleinen Stuhl?", en: "Do you also have a small chair?", speaker: "person1" },
      { target: "Ja, hier ist ein kleiner Stuhl.", en: "Yes, here is a small chair.", speaker: "person2" },
      { target: "Perfekt, der Stuhl ist schön.", en: "Perfect, the chair is nice.", speaker: "person1" },
    ],
    [{ target: "groß", en: "big" }, { target: "klein", en: "small" }, { target: "der Tisch", en: "table", article: "der" }, { target: "der Stuhl", en: "chair", article: "der" }, { target: "schön", en: "nice" }],
    [
      { target: "Was sucht die Person?", en: "What is the person looking for?", options: [{ target: "Einen kleinen Tisch", en: "A small table", correct: false }, { target: "Einen großen Tisch", en: "A big table", correct: true }, { target: "Einen großen Stuhl", en: "A big chair", correct: false }] },
      { target: "Ist der Stuhl groß?", en: "Is the chair big?", options: [{ target: "Ja, er ist groß", en: "Yes, it is big", correct: false }, { target: "Nein, er ist klein", en: "No, it is small", correct: true }, { target: "Er ist lang", en: "It is long", correct: false }] },
    ],
    [{ target: "groß", en: "big" }, { target: "klein", en: "small" }, { target: "der Tisch", en: "table" }],
    { question: "Sie brauchen einen Tisch. Was fragen Sie?", questionTranslation: "You need a table. What do you ask?", options: [
      { text: "Ich suche einen großen Tisch.", translation: "I'm looking for a big table.", correct: true },
      { text: "Ich möchte ein Bier.", translation: "I'd like a beer.", correct: false },
      { text: "Der Tisch ist kaputt.", translation: "The table is broken.", correct: false }
    ] },
  );

  await addExperience(123, "Weather Adjectives", 4, "Colors",
    [
      { target: "Heute ist es warm und sonnig.", en: "Today it is warm and sunny.", speaker: "person1" },
      { target: "Gestern war es kalt und regnerisch.", en: "Yesterday it was cold and rainy.", speaker: "person2" },
      { target: "Das Wetter ist heute sehr schön.", en: "The weather is very nice today.", speaker: "person1" },
      { target: "Ja, ich mag sonnige Tage.", en: "Yes, I like sunny days.", speaker: "person2" },
      { target: "Morgen wird es wieder kalt.", en: "Tomorrow it will be cold again.", speaker: "person1" },
    ],
    [{ target: "warm", en: "warm" }, { target: "kalt", en: "cold" }, { target: "sonnig", en: "sunny" }, { target: "regnerisch", en: "rainy" }, { target: "das Wetter", en: "weather", article: "das" }],
    [
      { target: "Wie ist das Wetter heute?", en: "How is the weather today?", options: [{ target: "Kalt und regnerisch", en: "Cold and rainy", correct: false }, { target: "Warm und sonnig", en: "Warm and sunny", correct: true }, { target: "Warm und regnerisch", en: "Warm and rainy", correct: false }] },
      { target: "War gestern das Wetter schön?", en: "Was the weather nice yesterday?", options: [{ target: "Ja, es war warm", en: "Yes, it was warm", correct: false }, { target: "Nein, es war kalt und regnerisch", en: "No, it was cold and rainy", correct: true }, { target: "Ja, es war sonnig", en: "Yes, it was sunny", correct: false }] },
    ],
    [{ target: "warm", en: "warm" }, { target: "kalt", en: "cold" }, { target: "sonnig", en: "sunny" }, { target: "regnerisch", en: "rainy" }],
    { question: "Sie sehen aus dem Fenster. Was sagen Sie?", questionTranslation: "You look out the window. What do you say?", options: [
      { text: "Heute ist es sonnig und warm.", translation: "Today it is sunny and warm.", correct: true },
      { text: "Ich habe Hunger.", translation: "I'm hungry.", correct: false },
      { text: "Das ist mein Auto.", translation: "That is my car.", correct: false }
    ] },
  );

  // Module 124: Describing Objects (A1, level=4)
  await addExperience(124, "Colors with Nouns", 4, "Colors",
    [
      { target: "Ich habe ein rotes Auto.", en: "I have a red car.", speaker: "person1" },
      { target: "Meine Schwester hat eine blaue Tasche.", en: "My sister has a blue bag.", speaker: "person1" },
      { target: "Mein Bruder hat einen grünen Hut.", en: "My brother has a green hat.", speaker: "person2" },
      { target: "Wir haben einen gelben Ball.", en: "We have a yellow ball.", speaker: "person2" },
      { target: "Und ich habe eine weiße Katze.", en: "And I have a white cat.", speaker: "person1" },
    ],
    [{ target: "das Auto", en: "car", article: "das" }, { target: "die Tasche", en: "bag", article: "die" }, { target: "der Hut", en: "hat", article: "der" }, { target: "der Ball", en: "ball", article: "der" }, { target: "die Katze", en: "cat", article: "die" }],
    [
      { target: "Welches Auto hat die Person?", en: "What car does the person have?", options: [{ target: "Ein blaues Auto", en: "A blue car", correct: false }, { target: "Ein rotes Auto", en: "A red car", correct: true }, { target: "Ein grünes Auto", en: "A green car", correct: false }] },
      { target: "Was hat der Bruder?", en: "What does the brother have?", options: [{ target: "Einen blauen Hut", en: "A blue hat", correct: false }, { target: "Eine weiße Tasche", en: "A white bag", correct: false }, { target: "Einen grünen Hut", en: "A green hat", correct: true }] },
    ],
    [{ target: "das Auto", en: "car" }, { target: "die Tasche", en: "bag" }, { target: "der Hut", en: "hat" }, { target: "der Ball", en: "ball" }, { target: "die Katze", en: "cat" }],
    { question: "Sie beschreiben ein Geschenk. Was sagen Sie?", questionTranslation: "You describe a gift. What do you say?", options: [
      { text: "Ich habe eine blaue Tasche.", translation: "I have a blue bag.", correct: true },
      { text: "Die Tasche ist kaputt.", translation: "The bag is broken.", correct: false },
      { text: "Wo ist die Tasche?", translation: "Where is the bag?", correct: false }
    ] },
  );

  await addExperience(124, "Das ist ein... / Das sind...", 4, "Colors",
    [
      { target: "Das ist ein großer Hund.", en: "That is a big dog.", speaker: "person1" },
      { target: "Und das ist eine kleine Maus.", en: "And that is a small mouse.", speaker: "person1" },
      { target: "Die Katze ist klein und süß.", en: "The cat is small and cute.", speaker: "person2" },
      { target: "Das sind lange Haare.", en: "Those are long hairs.", speaker: "person1" },
      { target: "Der Rock ist kurz und schön.", en: "The skirt is short and nice.", speaker: "person2" },
    ],
    [{ target: "der Hund", en: "dog", article: "der" }, { target: "die Maus", en: "mouse", article: "die" }, { target: "das Haar", en: "hair", article: "das" }, { target: "der Rock", en: "skirt", article: "der" }, { target: "süß", en: "cute" }],
    [
      { target: "Was ist groß?", en: "What is big?", options: [{ target: "Die Maus", en: "The mouse", correct: false }, { target: "Der Hund", en: "The dog", correct: true }, { target: "Die Katze", en: "The cat", correct: false }] },
      { target: "Sind die Haare lang oder kurz?", en: "Are the hairs long or short?", options: [{ target: "Lang", en: "Long", correct: true }, { target: "Kurz", en: "Short", correct: false }, { target: "Süß", en: "Cute", correct: false }] },
    ],
    [{ target: "groß", en: "big" }, { target: "klein", en: "small" }, { target: "lang", en: "long" }, { target: "kurz", en: "short" }],
    { question: "Sie zeigen auf ein Tier. Was sagen Sie?", questionTranslation: "You point at an animal. What do you say?", options: [
      { text: "Das ist ein großer Hund.", translation: "That is a big dog.", correct: true },
      { text: "Der Hund ist böse.", translation: "The dog is angry.", correct: false },
      { text: "Ich habe einen Hund.", translation: "I have a dog.", correct: false }
    ] },
  );

  await addExperience(124, "Comparing Objects", 4, "Colors",
    [
      { target: "Das Auto ist groß.", en: "The car is big.", speaker: "person1" },
      { target: "Das Fahrrad ist klein.", en: "The bicycle is small.", speaker: "person2" },
      { target: "Der Elefant ist sehr groß.", en: "The elephant is very big.", speaker: "person1" },
      { target: "Die Maus ist sehr klein.", en: "The mouse is very small.", speaker: "person2" },
      { target: "Der Zug ist lang.", en: "The train is long.", speaker: "person1" },
    ],
    [{ target: "das Fahrrad", en: "bicycle", article: "das" }, { target: "der Elefant", en: "elephant", article: "der" }, { target: "der Zug", en: "train", article: "der" }, { target: "sehr", en: "very" }],
    [
      { target: "Was ist größer, das Auto oder das Fahrrad?", en: "What is bigger, the car or the bicycle?", options: [{ target: "Das Fahrrad", en: "The bicycle", correct: false }, { target: "Das Auto", en: "The car", correct: true }, { target: "Beide sind groß", en: "Both are big", correct: false }] },
      { target: "Ist der Elefant klein?", en: "Is the elephant small?", options: [{ target: "Ja, er ist sehr klein", en: "Yes, it is very small", correct: false }, { target: "Nein, er ist sehr groß", en: "No, it is very big", correct: true }, { target: "Er ist lang", en: "It is long", correct: false }] },
    ],
    [{ target: "das Auto", en: "car" }, { target: "das Fahrrad", en: "bicycle" }, { target: "der Elefant", en: "elephant" }, { target: "die Maus", en: "mouse" }, { target: "der Zug", en: "train" }],
    { question: "Sie vergleichen zwei Sachen. Was sagen Sie?", questionTranslation: "You compare two things. What do you say?", options: [
      { text: "Das Auto ist groß. Das Fahrrad ist klein.", translation: "The car is big. The bicycle is small.", correct: true },
      { text: "Das Auto und das Fahrrad sind blau.", translation: "The car and the bicycle are blue.", correct: false },
      { text: "Ich kaufe das Auto.", translation: "I buy the car.", correct: false }
    ] },
  );
}
