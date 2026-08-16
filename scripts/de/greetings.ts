import { addExperience } from "../seed-helpers";

export async function seedGreetings() {
  // Module 119: Hello & Goodbye (A1)
  await addExperience(119, "Saying Hello", 4, "Greetings",
    [
      { target: "Hallo! Wie geht es Ihnen?", en: "Hello! How are you?", speaker: "person1" },
      { target: "Mir geht es gut, danke. Und Ihnen?", en: "I'm fine, thanks. And you?", speaker: "person2" },
      { target: "Auch gut, vielen Dank.", en: "Also good, thank you very much.", speaker: "person1" },
      { target: "Schön, Sie kennenzulernen.", en: "Nice to meet you.", speaker: "person2" },
      { target: "Ganz meinerseits. Auf Wiedersehen!", en: "Likewise. Goodbye!", speaker: "person1" },
    ],
    [{ target: "Hallo", en: "hello" }, { target: "danke", en: "thanks" }, { target: "Auf Wiedersehen", en: "goodbye" }],
    [
      { target: "Wie begrüßt man jemanden auf Deutsch?", en: "How do you greet someone in German?", options: [{ target: "Hallo", en: "Hello", correct: true }, { target: "Tschüss", en: "Bye", correct: false }, { target: "Prost", en: "Cheers", correct: false }] },
      { target: "Was sagt man zum Abschied?", en: "What do you say when leaving?", options: [{ target: "Guten Morgen", en: "Good morning", correct: false }, { target: "Auf Wiedersehen", en: "Goodbye", correct: true }, { target: "Entschuldigung", en: "Excuse me", correct: false }] },
    ],
    [{ target: "gehen", en: "to go" }, { target: "kennenlernen", en: "to get to know" }],
    { question: "Sie treffen jemanden zum ersten Mal. Was sagen Sie?", questionTranslation: "You meet someone for the first time. What do you say?", options: [
      { text: "Schön, Sie kennenzulernen.", translation: "Nice to meet you.", correct: true },
      { text: "Tschüss, bis morgen.", translation: "Bye, see you tomorrow.", correct: false },
      { text: "Wo ist der Bahnhof?", translation: "Where is the train station?", correct: false }
    ] },
  );

  await addExperience(119, "Morning Greetings", 4, "Greetings",
    [
      { target: "Guten Morgen, Frau Schmidt!", en: "Good morning, Mrs. Schmidt!", speaker: "kollege" },
      { target: "Guten Morgen, Herr Müller. Wie war Ihr Wochenende?", en: "Good morning, Mr. Müller. How was your weekend?", speaker: "frau_schmidt" },
      { target: "Es war sehr schön. Ich war im Park.", en: "It was very nice. I was in the park.", speaker: "kollege" },
      { target: "Das klingt gut. Das Wetter war ja auch toll.", en: "That sounds good. The weather was great too.", speaker: "frau_schmidt" },
      { target: "Ja, genau. Einen schönen Tag noch!", en: "Yes, exactly. Have a nice day!", speaker: "kollege" },
    ],
    [{ target: "Guten Morgen", en: "good morning" }, { target: "das Wochenende", en: "the weekend", article: "das" }, { target: "der Park", en: "the park", article: "der" }],
    [
      { target: "Wann sagt man 'Guten Morgen'?", en: "When do you say 'Guten Morgen'?", options: [{ target: "Am Abend", en: "In the evening", correct: false }, { target: "Am Morgen", en: "In the morning", correct: true }, { target: "In der Nacht", en: "At night", correct: false }] },
      { target: "Wo war Herr Müller am Wochenende?", en: "Where was Mr. Müller on the weekend?", options: [{ target: "Im Büro", en: "At the office", correct: false }, { target: "Im Park", en: "In the park", correct: true }, { target: "Im Restaurant", en: "At the restaurant", correct: false }] },
    ],
    [{ target: "das Wetter", en: "the weather" }, { target: "toll", en: "great" }],
    { question: "Sie kommen ins Büro. Was sagen Sie?", questionTranslation: "You arrive at the office. What do you say?", options: [
      { text: "Guten Morgen! Ich wünsche Ihnen einen schönen Tag.", translation: "Good morning! I wish you a nice day.", correct: true },
      { text: "Gute Nacht! Bis morgen.", translation: "Good night! See you tomorrow.", correct: false },
      { text: "Hilfe! Ich brauche einen Arzt.", translation: "Help! I need a doctor.", correct: false }
    ] },
  );

  await addExperience(119, "Evening Farewells", 4, "Greetings",
    [
      { target: "Guten Abend, Herr Braun. Gehen Sie schon nach Hause?", en: "Good evening, Mr. Braun. Are you going home already?", speaker: "kollege" },
      { target: "Ja, Feierabend! Ich bin müde.", en: "Yes, quitting time! I'm tired.", speaker: "herr_braun" },
      { target: "Dann machen Sie es gut. Bis morgen!", en: "Then take care. See you tomorrow!", speaker: "kollege" },
      { target: "Bis morgen. Schlafen Sie gut!", en: "See you tomorrow. Sleep well!", speaker: "herr_braun" },
      { target: "Gute Nacht und träumen Sie schön!", en: "Good night and sweet dreams!", speaker: "kollege" },
    ],
    [{ target: "Guten Abend", en: "good evening" }, { target: "müde", en: "tired" }, { target: "Gute Nacht", en: "good night" }],
    [
      { target: "Wann sagt man 'Guten Abend'?", en: "When do you say 'Guten Abend'?", options: [{ target: "Am Morgen", en: "In the morning", correct: false }, { target: "Am Abend", en: "In the evening", correct: true }, { target: "Am Mittag", en: "At noon", correct: false }] },
      { target: "Warum geht Herr Braun nach Hause?", en: "Why is Mr. Braun going home?", options: [{ target: "Er ist krank", en: "He is sick", correct: false }, { target: "Er ist müde", en: "He is tired", correct: true }, { target: "Er hat Hunger", en: "He is hungry", correct: false }] },
    ],
    [{ target: "nach Hause", en: "home" }, { target: "schlafen", en: "to sleep" }],
    { question: "Ein Kollege verabschiedet sich. Was sagen Sie?", questionTranslation: "A colleague says goodbye. What do you say?", options: [
      { text: "Bis morgen! Machen Sie es gut.", translation: "See you tomorrow! Take care.", correct: true },
      { text: "Kommen Sie bitte mit.", translation: "Please come with me.", correct: false },
      { text: "Wo ist die nächste U-Bahn?", translation: "Where is the nearest subway?", correct: false }
    ] },
  );

  // Module 120: Introducing Yourself (A1)
  await addExperience(120, "Introducing Yourself", 4, "Greetings",
    [
      { target: "Guten Tag! Ich heiße Lisa Fischer.", en: "Good day! My name is Lisa Fischer.", speaker: "lisa" },
      { target: "Freut mich! Ich bin Tom Weber.", en: "Nice to meet you! I'm Tom Weber.", speaker: "tom" },
      { target: "Woher kommen Sie, Herr Weber?", en: "Where are you from, Mr. Weber?", speaker: "lisa" },
      { target: "Ich komme aus Berlin. Und Sie?", en: "I'm from Berlin. And you?", speaker: "tom" },
      { target: "Ich komme aus München.", en: "I'm from Munich.", speaker: "lisa" },
    ],
    [{ target: "der Name", en: "name", article: "der" }, { target: "Freut mich", en: "nice to meet you" }, { target: "woher", en: "from where" }],
    [
      { target: "Wie heißt die Frau?", en: "What is the woman's name?", options: [{ target: "Tom Weber", en: "Tom Weber", correct: false }, { target: "Lisa Fischer", en: "Lisa Fischer", correct: true }, { target: "Anna Schmidt", en: "Anna Schmidt", correct: false }] },
      { target: "Woher kommt Herr Weber?", en: "Where is Mr. Weber from?", options: [{ target: "Aus München", en: "From Munich", correct: false }, { target: "Aus Berlin", en: "From Berlin", correct: true }, { target: "Aus Hamburg", en: "From Hamburg", correct: false }] },
    ],
    [{ target: "heißen", en: "to be called" }, { target: "kommen aus", en: "to come from" }],
    { question: "Sie stellen sich vor. Was sagen Sie?", questionTranslation: "You introduce yourself. What do you say?", options: [
      { text: "Guten Tag! Ich heiße Anna und komme aus Köln.", translation: "Good day! My name is Anna and I'm from Cologne.", correct: true },
      { text: "Auf Wiedersehen! Bis später.", translation: "Goodbye! See you later.", correct: false },
      { text: "Ich hätte gern ein Glas Wasser.", translation: "I'd like a glass of water.", correct: false }
    ] },
  );

  await addExperience(120, "Asking About Someone", 4, "Greetings",
    [
      { target: "Wer ist das da drüben?", en: "Who is that over there?", speaker: "person1" },
      { target: "Das ist Frau Klein. Sie ist unsere neue Kollegin.", en: "That's Mrs. Klein. She is our new colleague.", speaker: "person2" },
      { target: "Wo arbeitet sie vorher?", en: "Where did she work before?", speaker: "person1" },
      { target: "Sie hat bei einer Bank in Frankfurt gearbeitet.", en: "She worked at a bank in Frankfurt.", speaker: "person2" },
      { target: "Interessant. Ich stelle mich später vor.", en: "Interesting. I'll introduce myself later.", speaker: "person1" },
    ],
    [{ target: "der Kollege", en: "colleague (male)", article: "der" }, { target: "die Kollegin", en: "colleague (female)", article: "die" }, { target: "arbeiten", en: "to work" }],
    [
      { target: "Wer ist Frau Klein?", en: "Who is Mrs. Klein?", options: [{ target: "Eine neue Kollegin", en: "A new colleague", correct: true }, { target: "Die Chefin", en: "The boss", correct: false }, { target: "Eine Kundin", en: "A customer", correct: false }] },
      { target: "Wo hat Frau Klein früher gearbeitet?", en: "Where did Mrs. Klein work before?", options: [{ target: "In einer Schule", en: "In a school", correct: false }, { target: "In einem Krankenhaus", en: "In a hospital", correct: false }, { target: "Bei einer Bank", en: "At a bank", correct: true }] },
    ],
    [{ target: "vorher", en: "before/formerly" }, { target: "vorstellen", en: "to introduce" }],
    { question: "Sie fragen nach einer Person. Was sagen Sie?", questionTranslation: "You ask about someone. What do you say?", options: [
      { text: "Wer ist das da drüben? Ich kenne sie noch nicht.", translation: "Who is that over there? I don't know her yet.", correct: true },
      { text: "Können Sie mir den Weg zeigen?", translation: "Can you show me the way?", correct: false },
      { text: "Das Essen schmeckt sehr gut.", translation: "The food tastes very good.", correct: false }
    ] },
  );

  await addExperience(120, "Making Small Talk", 4, "Greetings",
    [
      { target: "Was machen Sie beruflich?", en: "What do you do for work?", speaker: "person1" },
      { target: "Ich bin Ingenieur. Und Sie?", en: "I'm an engineer. And you?", speaker: "person2" },
      { target: "Ich arbeite als Lehrerin.", en: "I work as a teacher.", speaker: "person1" },
      { target: "Das ist ein schöner Beruf.", en: "That's a nice profession.", speaker: "person2" },
      { target: "Danke. Ich mag meinen Job sehr.", en: "Thanks. I like my job very much.", speaker: "person1" },
    ],
    [{ target: "beruflich", en: "professionally" }, { target: "der Ingenieur", en: "engineer", article: "der" }, { target: "der Beruf", en: "profession", article: "der" }],
    [
      { target: "Was ist die Frau von Beruf?", en: "What is the woman's profession?", options: [{ target: "Ingenieurin", en: "Engineer", correct: false }, { target: "Lehrerin", en: "Teacher", correct: true }, { target: "Ärztin", en: "Doctor", correct: false }] },
      { target: "Mag die Frau ihren Beruf?", en: "Does the woman like her job?", options: [{ target: "Ja, sehr", en: "Yes, very much", correct: true }, { target: "Nein, gar nicht", en: "No, not at all", correct: false }, { target: "Sie hat keinen Job", en: "She doesn't have a job", correct: false }] },
    ],
    [{ target: "mögen", en: "to like" }, { target: "der Job", en: "job", article: "der" }],
    { question: "Sie lernen jemanden kennen und wollen Small Talk machen. Was fragen Sie?", questionTranslation: "You meet someone and want to make small talk. What do you ask?", options: [
      { text: "Was machen Sie beruflich?", translation: "What do you do for work?", correct: true },
      { text: "Wie viel kostet das?", translation: "How much does that cost?", correct: false },
      { text: "Wo ist die nächste Tankstelle?", translation: "Where is the nearest gas station?", correct: false }
    ] },
  );
}