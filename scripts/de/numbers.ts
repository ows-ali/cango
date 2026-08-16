import { addExperience } from "../seed-helpers";

export async function seedNumbers() {
  // Module 121: Counting & Prices (A1)
  await addExperience(121, "How Much Does It Cost?", 4, "Numbers",
    [
      { target: "Entschuldigung, wie viel kostet dieser Apfel?", en: "Excuse me, how much does this apple cost?", speaker: "customer" },
      { target: "Der Apfel kostet einen Euro.", en: "The apple costs one euro.", speaker: "vendor" },
      { target: "Und wie viel kosten drei Äpfel?", en: "And how much do three apples cost?", speaker: "customer" },
      { target: "Drei Äpfel kosten drei Euro.", en: "Three apples cost three euros.", speaker: "vendor" },
      { target: "Okay, ich nehme zwei Äpfel. Hier sind zwei Euro.", en: "Okay, I'll take two apples. Here are two euros.", speaker: "customer" },
    ],
    [{ target: "eins", en: "one" }, { target: "zwei", en: "two" }, { target: "drei", en: "three" }, { target: "kosten", en: "to cost" }],
    [
      { target: "Wie viel kostet ein Apfel?", en: "How much does one apple cost?", options: [{ target: "Zwei Euro", en: "Two euros", correct: false }, { target: "Einen Euro", en: "One euro", correct: true }, { target: "Drei Euro", en: "Three euros", correct: false }] },
      { target: "Wie viele Äpfel kauft der Kunde?", en: "How many apples does the customer buy?", options: [{ target: "Einen", en: "One", correct: false }, { target: "Zwei", en: "Two", correct: true }, { target: "Drei", en: "Three", correct: false }] },
    ],
    [{ target: "der Euro", en: "euro" }, { target: "kaufen", en: "to buy" }],
    { question: "Sie wollen etwas auf dem Markt kaufen. Was fragen Sie?", questionTranslation: "You want to buy something at the market. What do you ask?", options: [
      { text: "Entschuldigung, wie viel kostet das?", translation: "Excuse me, how much does this cost?", correct: true },
      { text: "Wo ist die Toilette?", translation: "Where is the toilet?", correct: false },
      { text: "Können Sie mich anrufen?", translation: "Can you call me?", correct: false }
    ] },
  );

  await addExperience(121, "Numbers Ten to Twenty", 4, "Numbers",
    [
      { target: "Wie viele Schüler sind in der Klasse?", en: "How many students are in the class?", speaker: "teacher" },
      { target: "Elf Schüler sind in der Klasse.", en: "Eleven students are in the class.", speaker: "student1" },
      { target: "Und wie viele Stühle? Ich sehe nur zehn.", en: "And how many chairs? I only see ten.", speaker: "teacher" },
      { target: "Sieben Stühle sind hier und vier dort. Das macht elf.", en: "Seven chairs are here and four there. That makes eleven.", speaker: "student2" },
      { target: "Ah, elf Stühle für elf Schüler. Perfekt!", en: "Ah, eleven chairs for eleven students. Perfect!", speaker: "teacher" },
    ],
    [{ target: "zehn", en: "ten" }, { target: "elf", en: "eleven" }, { target: "zwölf", en: "twelve" }, { target: "zwanzig", en: "twenty" }],
    [
      { target: "Wie viele Schüler sind in der Klasse?", en: "How many students are in the class?", options: [{ target: "Zehn", en: "Ten", correct: false }, { target: "Elf", en: "Eleven", correct: true }, { target: "Zwölf", en: "Twelve", correct: false }] },
      { target: "Wie viele Stühle sind insgesamt da?", en: "How many chairs are there in total?", options: [{ target: "Zehn", en: "Ten", correct: false }, { target: "Elf", en: "Eleven", correct: true }, { target: "Vierzehn", en: "Fourteen", correct: false }] },
    ],
    [{ target: "die Klasse", en: "class" }, { target: "der Schüler", en: "student" }, { target: "der Stuhl", en: "chair" }],
    { question: "Sie zählen die Gegenstände im Raum. Was sagen Sie?", questionTranslation: "You count the objects in the room. What do you say?", options: [
      { text: "Ich sehe fünf Bücher und sechs Stifte. Das macht elf.", translation: "I see five books and six pens. That makes eleven.", correct: true },
      { text: "Ich möchte ein Buch kaufen.", translation: "I want to buy a book.", correct: false },
      { text: "Der Raum ist sehr groß.", translation: "The room is very big.", correct: false }
    ] },
  );

  await addExperience(121, "Prices at the Supermarket", 4, "Numbers",
    [
      { target: "Was kostet die Milch?", en: "How much is the milk?", speaker: "customer" },
      { target: "Die Milch kostet ein Euro neunzig.", en: "The milk costs one euro ninety.", speaker: "cashier" },
      { target: "Und das Brot? Ist das im Angebot?", en: "And the bread? Is it on sale?", speaker: "customer" },
      { target: "Ja, das Brot kostet nur zwei Euro fünfzig. Normal drei Euro.", en: "Yes, the bread is only two euros fifty. Normally three euros.", speaker: "cashier" },
      { target: "Super! Ich nehme die Milch und das Brot. Das macht vier Euro vierzig.", en: "Great! I'll take the milk and bread. That makes four euros forty.", speaker: "customer" },
    ],
    [{ target: "die Milch", en: "milk", article: "die" }, { target: "das Brot", en: "bread", article: "das" }, { target: "das Angebot", en: "sale/offer", article: "das" }],
    [
      { target: "Was kostet die Milch?", en: "How much is the milk?", options: [{ target: "Zwei Euro", en: "Two euros", correct: false }, { target: "Ein Euro neunzig", en: "One euro ninety", correct: true }, { target: "Drei Euro", en: "Three euros", correct: false }] },
      { target: "Was ist im Angebot?", en: "What's on sale?", options: [{ target: "Die Milch", en: "The milk", correct: false }, { target: "Das Brot", en: "The bread", correct: true }, { target: "Der Käse", en: "The cheese", correct: false }] },
    ],
    [{ target: "der Supermarkt", en: "supermarket" }, { target: "die Kasse", en: "checkout" }],
    { question: "An der Supermarktkasse. Was sagen Sie?", questionTranslation: "At the supermarket checkout. What do you say?", options: [
      { text: "Ich möchte bitte bezahlen. Wie viel macht das?", translation: "I'd like to pay please. How much is that?", correct: true },
      { text: "Können Sie mich um drei Uhr anrufen?", translation: "Can you call me at three o'clock?", correct: false },
      { text: "Ich suche den Ausgang.", translation: "I'm looking for the exit.", correct: false }
    ] },
  );

  // Module 122: Telling Time (A1)
  await addExperience(122, "What Time Is It?", 4, "Numbers",
    [
      { target: "Entschuldigung, wie spät ist es?", en: "Excuse me, what time is it?", speaker: "person1" },
      { target: "Es ist drei Uhr.", en: "It's three o'clock.", speaker: "person2" },
      { target: "Danke. Um wie viel Uhr schließt das Museum?", en: "Thanks. What time does the museum close?", speaker: "person1" },
      { target: "Das Museum schließt um fünf Uhr.", en: "The museum closes at five o'clock.", speaker: "person2" },
      { target: "Perfekt, ich habe noch zwei Stunden Zeit.", en: "Perfect, I still have two hours.", speaker: "person1" },
    ],
    [{ target: "die Uhr", en: "clock", article: "die" }, { target: "spät", en: "late" }, { target: "die Stunde", en: "hour", article: "die" }],
    [
      { target: "Wie spät ist es?", en: "What time is it?", options: [{ target: "Zwei Uhr", en: "Two o'clock", correct: false }, { target: "Drei Uhr", en: "Three o'clock", correct: true }, { target: "Vier Uhr", en: "Four o'clock", correct: false }] },
      { target: "Um wie viel Uhr schließt das Museum?", en: "What time does the museum close?", options: [{ target: "Um drei Uhr", en: "At three", correct: false }, { target: "Um vier Uhr", en: "At four", correct: false }, { target: "Um fünf Uhr", en: "At five", correct: true }] },
    ],
    [{ target: "schließen", en: "to close" }, { target: "das Museum", en: "museum" }],
    { question: "Sie fragen nach der Uhrzeit. Was sagen Sie?", questionTranslation: "You ask for the time. What do you say?", options: [
      { text: "Entschuldigung, wie spät ist es bitte?", translation: "Excuse me, what time is it please?", correct: true },
      { text: "Ich heiße Peter und komme aus Bonn.", translation: "My name is Peter and I'm from Bonn.", correct: false },
      { text: "Guten Appetit!", translation: "Enjoy your meal!", correct: false }
    ] },
  );

  await addExperience(122, "Half Past and Quarter Past", 4, "Numbers",
    [
      { target: "Der Zug fährt um vierzehn Uhr dreißig. Sind Sie bereit?", en: "The train leaves at 2:30 PM. Are you ready?", speaker: "announcer" },
      { target: "Wie viel Uhr ist es jetzt?", en: "What time is it now?", speaker: "passenger1" },
      { target: "Es ist Viertel nach zwei.", en: "It's quarter past two.", speaker: "passenger2" },
      { target: "Dann haben wir noch fünfzehn Minuten.", en: "Then we still have fifteen minutes.", speaker: "passenger1" },
      { target: "Genau. Der Zug fährt um halb drei.", en: "Exactly. The train leaves at half past two.", speaker: "passenger2" },
    ],
    [{ target: "halb", en: "half" }, { target: "das Viertel", en: "quarter" }, { target: "die Minute", en: "minute", article: "die" }],
    [
      { target: "Wie viel Uhr ist es?", en: "What time is it?", options: [{ target: "Viertel nach zwei", en: "Quarter past two", correct: true }, { target: "Halb drei", en: "Half past two", correct: false }, { target: "Drei Uhr", en: "Three o'clock", correct: false }] },
      { target: "Wann fährt der Zug?", en: "When does the train leave?", options: [{ target: "Um zwei Uhr", en: "At two", correct: false }, { target: "Um halb drei", en: "At half past two", correct: true }, { target: "Um drei Uhr", en: "At three", correct: false }] },
    ],
    [{ target: "der Zug", en: "train" }, { target: "bereit", en: "ready" }],
    { question: "Sie warten auf den Zug. Was fragen Sie?", questionTranslation: "You're waiting for the train. What do you ask?", options: [
      { text: "Wie viel Uhr ist es? Wann fährt der Zug?", translation: "What time is it? When does the train leave?", correct: true },
      { text: "Wo ist der nächste Supermarkt?", translation: "Where is the nearest supermarket?", correct: false },
      { text: "Ich möchte ein Bier bestellen.", translation: "I'd like to order a beer.", correct: false }
    ] },
  );

  await addExperience(122, "Making a Time Appointment", 4, "Numbers",
    [
      { target: "Können wir uns um zehn Uhr treffen?", en: "Can we meet at ten o'clock?", speaker: "person1" },
      { target: "Um zehn Uhr habe ich einen Termin. Geht es um elf?", en: "At ten I have an appointment. Is eleven okay?", speaker: "person2" },
      { target: "Elf Uhr passt mir gut. Wo treffen wir uns?", en: "Eleven o'clock works for me. Where do we meet?", speaker: "person1" },
      { target: "Im Café am Marktplatz. Weißt du, wo das ist?", en: "At the café on the market square. Do you know where it is?", speaker: "person2" },
      { target: "Ja, ich kenne das Café. Bis morgen um elf!", en: "Yes, I know the café. See you tomorrow at eleven!", speaker: "person1" },
    ],
    [{ target: "treffen", en: "to meet" }, { target: "der Termin", en: "appointment", article: "der" }, { target: "der Marktplatz", en: "market square", article: "der" }],
    [
      { target: "Um wie viel Uhr treffen sie sich?", en: "What time do they meet?", options: [{ target: "Um zehn Uhr", en: "At ten", correct: false }, { target: "Um elf Uhr", en: "At eleven", correct: true }, { target: "Um zwölf Uhr", en: "At twelve", correct: false }] },
      { target: "Wo treffen sie sich?", en: "Where do they meet?", options: [{ target: "Im Museum", en: "At the museum", correct: false }, { target: "Im Café", en: "At the café", correct: true }, { target: "Im Park", en: "In the park", correct: false }] },
    ],
    [{ target: "sich treffen", en: "to meet each other" }, { target: "passen", en: "to suit/fit" }],
    { question: "Sie verabreden sich mit einem Freund. Was sagen Sie?", questionTranslation: "You make plans with a friend. What do you say?", options: [
      { text: "Können wir uns um drei Uhr im Café treffen?", translation: "Can we meet at three at the café?", correct: true },
      { text: "Ich muss zum Arzt.", translation: "I have to go to the doctor.", correct: false },
      { text: "Wie viel kostet eine Fahrkarte?", translation: "How much is a ticket?", correct: false }
    ] },
  );
}