import { addExperience } from "../seed-helpers";

export async function seedBasicNeeds() {
  // Module 125: Asking for Help (A1)
  await addExperience(125, "Asking for Directions", 4, "Basic Needs",
    [
      { target: "Entschuldigung, wo ist der Bahnhof?", en: "Excuse me, where is the train station?", speaker: "tourist" },
      { target: "Der Bahnhof ist da vorne, nach der Ampel rechts.", en: "The train station is ahead there, right after the traffic light.", speaker: "local" },
      { target: "Ist das weit von hier?", en: "Is that far from here?", speaker: "tourist" },
      { target: "Nein, nur fünf Minuten zu Fuß.", en: "No, just five minutes on foot.", speaker: "local" },
      { target: "Vielen Dank für Ihre Hilfe!", en: "Thank you very much for your help!", speaker: "tourist" },
    ],
    [{ target: "der Bahnhof", en: "train station", article: "der" }, { target: "die Ampel", en: "traffic light", article: "die" }, { target: "weit", en: "far" }],
    [
      { target: "Was sucht der Tourist?", en: "What is the tourist looking for?", options: [{ target: "Das Museum", en: "The museum", correct: false }, { target: "Den Bahnhof", en: "The train station", correct: true }, { target: "Das Café", en: "The café", correct: false }] },
      { target: "Wie weit ist der Bahnhof?", en: "How far is the station?", options: [{ target: "Zehn Minuten", en: "Ten minutes", correct: false }, { target: "Fünf Minuten", en: "Five minutes", correct: true }, { target: "Zwanzig Minuten", en: "Twenty minutes", correct: false }] },
    ],
    [{ target: "die Hilfe", en: "help" }, { target: "finden", en: "to find" }],
    { question: "Sie suchen den Weg zur Post. Was fragen Sie?", questionTranslation: "You're looking for the post office. What do you ask?", options: [
      { text: "Entschuldigung, wo ist die Post bitte?", translation: "Excuse me, where is the post office please?", correct: true },
      { text: "Ich möchte ein Eis, bitte.", translation: "I'd like an ice cream, please.", correct: false },
      { text: "Guten Morgen, wie geht es Ihnen?", translation: "Good morning, how are you?", correct: false }
    ] },
  );

  await addExperience(125, "Asking for Help in a Store", 4, "Basic Needs",
    [
      { target: "Entschuldigung, können Sie mir helfen?", en: "Excuse me, can you help me?", speaker: "customer" },
      { target: "Ja, natürlich. Was brauchen Sie?", en: "Yes, of course. What do you need?", speaker: "assistant" },
      { target: "Ich suche eine bestimmte Größe. Haben Sie das in klein?", en: "I'm looking for a specific size. Do you have this in small?", speaker: "customer" },
      { target: "Moment, ich schaue nach. Ja, hier ist Größe S.", en: "One moment, I'll check. Yes, here is size S.", speaker: "assistant" },
      { target: "Perfekt, vielen Dank! Das ist genau, was ich brauche.", en: "Perfect, thank you very much! That's exactly what I need.", speaker: "customer" },
    ],
    [{ target: "helfen", en: "to help" }, { target: "die Größe", en: "size", article: "die" }, { target: "suchen", en: "to look for" }],
    [
      { target: "Was sucht der Kunde?", en: "What is the customer looking for?", options: [{ target: "Eine andere Farbe", en: "A different color", correct: false }, { target: "Eine bestimmte Größe", en: "A specific size", correct: true }, { target: "Einen Rabatt", en: "A discount", correct: false }] },
      { target: "Welche Größe bekommt der Kunde?", en: "Which size does the customer get?", options: [{ target: "Größe M", en: "Size M", correct: false }, { target: "Größe L", en: "Size L", correct: false }, { target: "Größe S", en: "Size S", correct: true }] },
    ],
    [{ target: "der Kunde", en: "customer" }, { target: "das Geschäft", en: "store" }],
    { question: "Sie finden ein Produkt nicht im Regal. Was fragen Sie?", questionTranslation: "You can't find a product on the shelf. What do you ask?", options: [
      { text: "Entschuldigung, haben Sie dieses Produkt auf Lager?", translation: "Excuse me, do you have this product in stock?", correct: true },
      { text: "Wie spät ist es?", translation: "What time is it?", correct: false },
      { text: "Das Essen war sehr lecker.", translation: "The food was very tasty.", correct: false }
    ] },
  );

  await addExperience(125, "Asking About Opening Hours", 4, "Basic Needs",
    [
      { target: "Entschuldigung, wann öffnet die Apotheke?", en: "Excuse me, when does the pharmacy open?", speaker: "customer" },
      { target: "Die Apotheke öffnet um acht Uhr morgens.", en: "The pharmacy opens at eight in the morning.", speaker: "local" },
      { target: "Und wann schließt sie?", en: "And when does it close?", speaker: "customer" },
      { target: "Sie schließt um achtzehn Uhr. Aber heute ist Samstag.", en: "It closes at six PM. But today is Saturday.", speaker: "local" },
      { target: "Hat samstags andere Öffnungszeiten?", en: "Does it have different hours on Saturday?", speaker: "customer" },
    ],
    [{ target: "die Apotheke", en: "pharmacy", article: "die" }, { target: "öffnen", en: "to open" }, { target: "die Öffnungszeit", en: "opening hours", article: "die" }],
    [
      { target: "Wann öffnet die Apotheke?", en: "When does the pharmacy open?", options: [{ target: "Um sechs Uhr", en: "At six", correct: false }, { target: "Um acht Uhr", en: "At eight", correct: true }, { target: "Um zehn Uhr", en: "At ten", correct: false }] },
      { target: "Welcher Tag ist heute?", en: "What day is it today?", options: [{ target: "Sonntag", en: "Sunday", correct: false }, { target: "Samstag", en: "Saturday", correct: true }, { target: "Montag", en: "Monday", correct: false }] },
    ],
    [{ target: "der Samstag", en: "Saturday" }, { target: "die Woche", en: "week" }],
    { question: "Sie brauchen Medikamente. Was fragen Sie?", questionTranslation: "You need medicine. What do you ask?", options: [
      { text: "Entschuldigung, wann hat die Apotheke geöffnet?", translation: "Excuse me, when is the pharmacy open?", correct: true },
      { text: "Wie viel kostet eine Fahrkarte?", translation: "How much is a ticket?", correct: false },
      { text: "Ich möchte ein Hotelzimmer reservieren.", translation: "I'd like to reserve a hotel room.", correct: false }
    ] },
  );

  // Module 126: Emergencies (A1)
  await addExperience(126, "Calling for Help", 4, "Basic Needs",
    [
      { target: "Hilfe! Ich brauche einen Arzt!", en: "Help! I need a doctor!", speaker: "person" },
      { target: "Was ist passiert? Sind Sie verletzt?", en: "What happened? Are you injured?", speaker: "helper" },
      { target: "Ich bin gestürzt und mein Bein tut weh.", en: "I fell and my leg hurts.", speaker: "person" },
      { target: "Bleiben Sie ruhig. Ich rufe den Notarzt.", en: "Stay calm. I'll call the emergency doctor.", speaker: "helper" },
      { target: "Danke, das ist sehr nett.", en: "Thanks, that's very kind.", speaker: "person" },
    ],
    [{ target: "die Hilfe", en: "help", article: "die" }, { target: "der Arzt", en: "doctor", article: "der" }, { target: "verletzt", en: "injured" }],
    [
      { target: "Was ist passiert?", en: "What happened?", options: [{ target: "Die Person ist gefallen", en: "The person fell", correct: true }, { target: "Die Person hat Hunger", en: "The person is hungry", correct: false }, { target: "Die Person sucht das Hotel", en: "The person is looking for the hotel", correct: false }] },
      { target: "Was ruft der Helfer?", en: "What does the helper call?", options: [{ target: "Ein Taxi", en: "A taxi", correct: false }, { target: "Den Notarzt", en: "The emergency doctor", correct: true }, { target: "Die Polizei", en: "The police", correct: false }] },
    ],
    [{ target: "passieren", en: "to happen" }, { target: "rufen", en: "to call" }],
    { question: "Jemand ist auf der Straße gestürzt. Was sagen Sie?", questionTranslation: "Someone fell on the street. What do you say?", options: [
      { text: "Brauchen Sie Hilfe? Soll ich einen Arzt rufen?", translation: "Do you need help? Should I call a doctor?", correct: true },
      { text: "Wo ist der nächste Supermarkt?", translation: "Where is the nearest supermarket?", correct: false },
      { text: "Ich möchte ein Zimmer buchen.", translation: "I'd like to book a room.", correct: false }
    ] },
  );

  await addExperience(126, "Lost Child", 4, "Basic Needs",
    [
      { target: "Entschuldigung, ich habe mein Kind verloren.", en: "Excuse me, I've lost my child.", speaker: "parent" },
      { target: "Keine Sorge. Wie heißt Ihr Kind und wie alt ist es?", en: "Don't worry. What's your child's name and how old are they?", speaker: "security" },
      { target: "Es heißt Max und ist vier Jahre alt.", en: "His name is Max and he's four years old.", speaker: "parent" },
      { target: "Welche Kleidung trägt Max?", en: "What clothing is Max wearing?", speaker: "security" },
      { target: "Er trägt eine rote Jacke und eine blaue Hose.", en: "He's wearing a red jacket and blue pants.", speaker: "parent" },
    ],
    [{ target: "das Kind", en: "child", article: "das" }, { target: "verlieren", en: "to lose" }, { target: "die Jacke", en: "jacket", article: "die" }],
    [
      { target: "Wie heißt das Kind?", en: "What's the child's name?", options: [{ target: "Moritz", en: "Moritz", correct: false }, { target: "Max", en: "Max", correct: true }, { target: "Felix", en: "Felix", correct: false }] },
      { target: "Was trägt Max für Kleidung?", en: "What clothing is Max wearing?", options: [{ target: "Eine grüne Jacke", en: "A green jacket", correct: false }, { target: "Eine rote Jacke und blaue Hose", en: "A red jacket and blue pants", correct: true }, { target: "Einen gelben Pullover", en: "A yellow sweater", correct: false }] },
    ],
    [{ target: "die Sorge", en: "worry" }, { target: "tragen", en: "to wear" }],
    { question: "Sie haben Ihren Freund auf dem Bahnhof verloren. Was sagen Sie?", questionTranslation: "You lost your friend at the station. What do you say?", options: [
      { text: "Entschuldigung, ich habe meinen Freund verloren. Können Sie mir helfen?", translation: "Excuse me, I've lost my friend. Can you help me?", correct: true },
      { text: "Einmal Berlin hin und zurück, bitte.", translation: "One Berlin return ticket, please.", correct: false },
      { text: "Das Essen schmeckt wunderbar.", translation: "The food tastes wonderful.", correct: false }
    ] },
  );

  await addExperience(126, "Reporting a Lost Item", 4, "Basic Needs",
    [
      { target: "Entschuldigung, ich habe meine Tasche verloren.", en: "Excuse me, I've lost my bag.", speaker: "person" },
      { target: "Wo haben Sie sie zuletzt gesehen?", en: "Where did you last see it?", speaker: "officer" },
      { target: "Im Zug von München nach Frankfurt.", en: "On the train from Munich to Frankfurt.", speaker: "person" },
      { target: "Wie sieht die Tasche aus?", en: "What does the bag look like?", speaker: "officer" },
      { target: "Sie ist schwarz und ziemlich groß. Mein Pass ist drin.", en: "It's black and quite big. My passport is inside.", speaker: "person" },
    ],
    [{ target: "die Tasche", en: "bag", article: "die" }, { target: "der Pass", en: "passport", article: "der" }, { target: "schwarz", en: "black" }],
    [
      { target: "Was hat die Person verloren?", en: "What did the person lose?", options: [{ target: "Den Pass", en: "The passport", correct: false }, { target: "Die Tasche", en: "The bag", correct: true }, { target: "Den Zug", en: "The train", correct: false }] },
      { target: "Wo hat sie die Tasche zuletzt gesehen?", en: "Where did she last see the bag?", options: [{ target: "Im Café", en: "At the café", correct: false }, { target: "Im Zug", en: "On the train", correct: true }, { target: "Im Hotel", en: "At the hotel", correct: false }] },
    ],
    [{ target: "das Fundbüro", en: "lost and found office" }, { target: "beschreiben", en: "to describe" }],
    { question: "Sie haben Ihren Rucksack verloren. Was sagen Sie am Fundbüro?", questionTranslation: "You lost your backpack. What do you say at lost and found?", options: [
      { text: "Guten Tag, ich habe meinen Rucksack verloren. Er ist blau.", translation: "Good day, I've lost my backpack. It's blue.", correct: true },
      { text: "Ich möchte ein Ticket kaufen.", translation: "I'd like to buy a ticket.", correct: false },
      { text: "Wo ist die nächste U-Bahn-Station?", translation: "Where is the next subway station?", correct: false }
    ] },
  );
}