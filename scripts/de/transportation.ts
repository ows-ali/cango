import { addExperience } from "../seed-helpers";

export async function seedTransportation() {
  // Module 101: Buying a Ticket (A2)
  await addExperience(101, "Buying a Ticket at the Counter", 1, "Transportation",
    [
      { target: "Guten Tag, ich möchte eine Fahrkarte nach Berlin kaufen.", en: "Hello, I'd like to buy a ticket to Berlin." },
      { target: "Einfach oder hin und zurück?", en: "One-way or round trip?" },
      { target: "Einfach bitte. Wie viel kostet das?", en: "One-way please. How much does it cost?" },
      { target: "Das macht 45 Euro.", en: "That will be 45 euros." },
      { target: "Hier ist mein Geld. Vielen Dank!", en: "Here is my money. Thank you very much!" },
    ],
    [{ target: "die Fahrkarte", en: "ticket", article: "die", plural: "die Fahrkarten" }],
    [
      { target: "Was möchte der Fahrgast kaufen?", en: "What does the passenger want to buy?", options: [{ target: "Eine Fahrkarte nach Berlin", en: "A ticket to Berlin", correct: true }, { target: "Einen Snack", en: "A snack", correct: false }, { target: "Eine Zeitung", en: "A newspaper", correct: false }] },
      { target: "Wie viel kostet die Fahrkarte?", en: "How much does the ticket cost?", options: [{ target: "35 Euro", en: "35 euros", correct: false }, { target: "45 Euro", en: "45 euros", correct: true }, { target: "55 Euro", en: "55 euros", correct: false }] },
    ],
    [{ target: "einfach", en: "one-way" }, { target: "hin und zurück", en: "round trip" }, { target: "kosten", en: "to cost" }],
    { question: "Was machen Sie zuerst am Automaten?", questionTranslation: "What do you do first at the machine?", options: [
      { text: "Drücken Sie auf 'Fahrkarte kaufen'.", translation: "Press 'Buy ticket'.", correct: true },
      { text: "Rufen Sie den Techniker an.", translation: "Call the technician.", correct: false },
      { text: "Gehen Sie zum nächsten Automaten.", translation: "Go to the next machine.", correct: false }
    ] },
  );

  await addExperience(101, "Asking for a Discount Card", 1, "Transportation",
    [
      { target: "Haben Sie eine Bahncard?", en: "Do you have a Bahncard?" },
      { target: "Nein, noch nicht. Kann ich eine beantragen?", en: "No, not yet. Can I apply for one?" },
      { target: "Ja, hier ist das Formular. Die Bahncard 25 kostet 62 Euro im Jahr.", en: "Yes, here is the form. The Bahncard 25 costs 62 euros per year." },
      { target: "Und wie viel spare ich damit?", en: "And how much do I save with it?" },
      { target: "Sie bekommen 25 Prozent Rabatt auf den Fahrpreis.", en: "You get 25 percent discount on the fare." },
    ],
    [{ target: "die Bahncard", en: "discount rail card", article: "die" }, { target: "der Rabatt", en: "discount", article: "der" }, { target: "sparen", en: "to save" }],
    [
      { target: "Was kann man am Schalter beantragen?", en: "What can you apply for at the counter?", options: [{ target: "Eine Bahncard", en: "A Bahncard", correct: true }, { target: "Ein Ticket", en: "A ticket", correct: false }, { target: "Ein Visum", en: "A visa", correct: false }] },
      { target: "Wie viel Rabatt bekommt man mit der Bahncard 25?", en: "How much discount do you get with Bahncard 25?", options: [{ target: "10 Prozent", en: "10 percent", correct: false }, { target: "25 Prozent", en: "25 percent", correct: true }, { target: "50 Prozent", en: "50 percent", correct: false }] },
    ],
    [{ target: "beantragen", en: "to apply for" }, { target: "das Formular", en: "form" }],
    { question: "Was fragen Sie am Schalter?", questionTranslation: "What do you ask at the counter?", options: [
      { text: "Entschuldigung, wo kann ich eine Bahncard beantragen?", translation: "Excuse me, where can I apply for a Bahncard?", correct: true },
      { text: "Ich hätte gerne ein Bier, bitte.", translation: "I'd like a beer, please.", correct: false },
      { text: "Können Sie mir den Weg zum Hotel zeigen?", translation: "Can you show me the way to the hotel?", correct: false }
    ] },
  );

  await addExperience(101, "Buying a Ticket from the Machine", 1, "Transportation",
    [
      { target: "Entschuldigung, wie funktioniert dieser Automat?", en: "Excuse me, how does this machine work?" },
      { target: "Drücken Sie zuerst auf 'Fahrkarte kaufen'.", en: "First press 'Buy ticket'." },
      { target: "Und dann wähle ich mein Ziel aus?", en: "And then I select my destination?" },
      { target: "Genau. Dann bezahlen Sie mit Karte oder Bargeld.", en: "Exactly. Then you pay with card or cash." },
      { target: "Vielen Dank für Ihre Hilfe!", en: "Thank you for your help!" },
    ],
    [{ target: "der Automat", en: "machine/vending machine", article: "der" }, { target: "das Bargeld", en: "cash", article: "das" }, { target: "auswählen", en: "to select" }],
    [
      { target: "Was muss man zuerst drücken?", en: "What must you press first?", options: [{ target: "Fahrkarte kaufen", en: "Buy ticket", correct: true }, { target: "Geld zurück", en: "Change return", correct: false }, { target: "Hilfe", en: "Help", correct: false }] },
      { target: "Wie kann man am Automaten bezahlen?", en: "How can you pay at the machine?", options: [{ target: "Nur mit Bargeld", en: "Cash only", correct: false }, { target: "Mit Karte oder Bargeld", en: "With card or cash", correct: true }, { target: "Nur mit Karte", en: "Card only", correct: false }] },
    ],
    [{ target: "drücken", en: "to press" }, { target: "das Ziel", en: "destination" }],
    { question: "Was fragen Sie am Busbahnhof?", questionTranslation: "What do you ask at the bus station?", options: [
      { text: "Fährt dieser Bus zum Hauptbahnhof?", translation: "Does this bus go to the main station?", correct: true },
      { text: "Wo ist die nächste Tankstelle?", translation: "Where is the nearest gas station?", correct: false },
      { text: "Wie viel kostet ein Taxi?", translation: "How much does a taxi cost?", correct: false }
    ] },
  );

  // Module 102: Finding Your Way (A2)
  await addExperience(102, "Asking for Directions", 1, "Transportation",
    [
      { target: "Entschuldigung, wo ist Gleis 5?", en: "Excuse me, where is platform 5?" },
      { target: "Gehen Sie die Treppe hoch und dann nach rechts.", en: "Go up the stairs and then to the right." },
      { target: "Ist das weit von hier?", en: "Is that far from here?" },
      { target: "Nein, nur zwei Minuten zu Fuß.", en: "No, just two minutes on foot." },
      { target: "Vielen Dank!", en: "Thank you very much!" },
    ],
    [{ target: "das Gleis", en: "platform/track", article: "das", plural: "die Gleise" }, { target: "die Treppe", en: "stairs", article: "die" }],
    [
      { target: "Was sucht der Fahrgast?", en: "What is the passenger looking for?", options: [{ target: "Den Ausgang", en: "The exit", correct: false }, { target: "Gleis 5", en: "Platform 5", correct: true }, { target: "Das Restaurant", en: "The restaurant", correct: false }] },
      { target: "Wie weit ist es zum Gleis?", en: "How far is it to the platform?", options: [{ target: "Zehn Minuten", en: "Ten minutes", correct: false }, { target: "Zwei Minuten", en: "Two minutes", correct: true }, { target: "Fünf Minuten", en: "Five minutes", correct: false }] },
    ],
    [{ target: "hochgehen", en: "to go up" }, { target: "nach rechts", en: "to the right" }],
    { question: "Wie fragen Sie nach dem Weg?", questionTranslation: "How do you ask for directions?", options: [
      { text: "Entschuldigung, wo ist Gleis 5?", translation: "Excuse me, where is platform 5?", correct: true },
      { text: "Können Sie mir ein Taxi rufen?", translation: "Can you call me a taxi?", correct: false },
      { text: "Ich möchte ein Zimmer reservieren.", translation: "I'd like to reserve a room.", correct: false }
    ] },
  );

  await addExperience(102, "Finding the Right Bus", 1, "Transportation",
    [
      { target: "Fährt dieser Bus zum Hauptbahnhof?", en: "Does this bus go to the main train station?" },
      { target: "Ja, aber Sie müssen am Alexanderplatz umsteigen.", en: "Yes, but you need to change at Alexanderplatz." },
      { target: "Welche Linie muss ich dann nehmen?", en: "Which line do I need to take then?" },
      { target: "Die Linie M10 Richtung Hauptbahnhof.", en: "Line M10 towards the main station." },
      { target: "Vielen Dank für die Auskunft!", en: "Thank you for the information!" },
    ],
    [{ target: "der Hauptbahnhof", en: "main train station", article: "der" }, { target: "umsteigen", en: "to change/transfer" }, { target: "die Linie", en: "line", article: "die" }],
    [
      { target: "Wohin fährt der Bus?", en: "Where does the bus go?", options: [{ target: "Zum Flughafen", en: "To the airport", correct: false }, { target: "Zum Hauptbahnhof", en: "To the main station", correct: true }, { target: "Zum Museum", en: "To the museum", correct: false }] },
      { target: "Was muss der Fahrgast am Alexanderplatz machen?", en: "What does the passenger need to do at Alexanderplatz?", options: [{ target: "Aussteigen und ein Taxi nehmen", en: "Get off and take a taxi", correct: false }, { target: "Umsteigen in die M10", en: "Change to the M10", correct: true }, { target: "Eine Fahrkarte kaufen", en: "Buy a ticket", correct: false }] },
    ],
    [{ target: "die Auskunft", en: "information" }],
    { question: "Sie verstehen die Tafel nicht. Was sagen Sie?", questionTranslation: "You don't understand the board. What do you say?", options: [
      { text: "Entschuldigung, ich verstehe die Anzeigetafel nicht.", translation: "Excuse me, I don't understand the board.", correct: true },
      { text: "Ich möchte ein Zimmer buchen.", translation: "I'd like to book a room.", correct: false },
      { text: "Wo ist das Fundbüro?", translation: "Where is lost and found?", correct: false }
    ] },
    undefined,
    [
      { text: "der Bus", translation: "bus", correctValue: "bus" },
      { text: "umsteigen", translation: "to transfer", correctValue: "transfer" },
      { text: "der Hauptbahnhof", translation: "main station", correctValue: "mainstation" }
    ],
  );

  await addExperience(102, "Reading the Departure Board", 1, "Transportation",
    [
      { target: "Entschuldigung, ich verstehe die Anzeigetafel nicht.", en: "Excuse me, I don't understand the departure board." },
      { target: "Welchen Zug suchen Sie?", en: "Which train are you looking for?" },
      { target: "Den ICE nach Hamburg um 14:30 Uhr.", en: "The ICE to Hamburg at 2:30 PM." },
      { target: "Der steht auf Gleis 7. Die Abfahrt ist pünktlich.", en: "It's on platform 7. The departure is on time." },
      { target: "Perfekt, vielen Dank!", en: "Perfect, thank you very much!" },
    ],
    [{ target: "die Anzeigetafel", en: "departure board", article: "die" }, { target: "pünktlich", en: "on time" }, { target: "die Abfahrt", en: "departure", article: "die" }],
    [
      { target: "Was sucht der Fahrgast?", en: "What is the passenger looking for?", options: [{ target: "Den ICE nach Hamburg", en: "The ICE to Hamburg", correct: true }, { target: "Den Bus zum Flughafen", en: "The bus to the airport", correct: false }, { target: "Das Fundbüro", en: "The lost and found", correct: false }] },
      { target: "Wann fährt der Zug?", en: "When does the train depart?", options: [{ target: "Um 13:30 Uhr", en: "At 1:30 PM", correct: false }, { target: "Um 14:30 Uhr", en: "At 2:30 PM", correct: true }, { target: "Um 15:30 Uhr", en: "At 3:30 PM", correct: false }] },
    ],
    [{ target: "verstehen", en: "to understand" }, { target: "suchen", en: "to look for" }],
    { question: "Ihr Zug fällt aus. Was tun Sie?", questionTranslation: "Your train is cancelled. What do you do?", options: [
      { text: "Gehen Sie zu Gleis 4 und nehmen Sie den Ersatzzug.", translation: "Go to platform 4 and take the replacement train.", correct: true },
      { text: "Warten Sie einfach am Gleis.", translation: "Just wait at the platform.", correct: false },
      { text: "Rufen Sie ein Taxi.", translation: "Call a taxi.", correct: false }
    ] },
  );

  // Module 103: Delay Announcements (B1)
  await addExperience(103, "Train Delay Announcement", 2, "Transportation",
    [
      { target: "Achtung, eine Durchsage für die Reisenden.", en: "Attention, an announcement for travelers." },
      { target: "Der ICE 782 nach München hat voraussichtlich 20 Minuten Verspätung.", en: "ICE 782 to Munich is expected to be 20 minutes late." },
      { target: "Grund dafür ist eine technische Störung am Gleis.", en: "The reason is a technical fault on the track." },
      { target: "Wir bitten um Ihr Verständnis.", en: "We ask for your understanding." },
      { target: "Weitere Informationen erhalten Sie am Serviceschalter.", en: "Further information is available at the service desk." },
    ],
    [{ target: "die Verspätung", en: "delay", article: "die" }, { target: "die Störung", en: "fault/disturbance", article: "die" }, { target: "der Serviceschalter", en: "service desk", article: "der" }],
    [
      { target: "Warum hat der Zug Verspätung?", en: "Why is the train delayed?", options: [{ target: "Wegen des Wetters", en: "Because of the weather", correct: false }, { target: "Wegen einer technischen Störung", en: "Because of a technical fault", correct: true }, { target: "Wegen Personalmangels", en: "Because of staff shortage", correct: false }] },
      { target: "Wie viel Verspätung hat der Zug?", en: "How late is the train?", options: [{ target: "10 Minuten", en: "10 minutes", correct: false }, { target: "20 Minuten", en: "20 minutes", correct: true }, { target: "30 Minuten", en: "30 minutes", correct: false }] },
    ],
    [{ target: "voraussichtlich", en: "expected/probably" }, { target: "das Verständnis", en: "understanding" }],
    { question: "Was fragen Sie den Schaffner?", questionTranslation: "What do you ask the conductor?", options: [
      { text: "Entschuldigung, warum hat der Zug Verspätung?", translation: "Excuse me, why is the train delayed?", correct: true },
      { text: "Ich möchte eine Fahrkarte kaufen.", translation: "I'd like to buy a ticket.", correct: false },
      { text: "Wo ist das Restaurant?", translation: "Where is the restaurant?", correct: false }
    ] },
  );

  await addExperience(103, "Cancelled Train — Finding Alternatives", 2, "Transportation",
    [
      { target: "Meine Damen und Herren, der IC 208 nach Stuttgart fällt heute aus.", en: "Ladies and gentlemen, IC 208 to Stuttgart is cancelled today." },
      { target: "Bitte begeben Sie sich zu Gleis 4. Dort wartet ein Ersatzzug.", en: "Please proceed to platform 4. A replacement train is waiting there." },
      { target: "Die Abfahrt ist um 17:15 Uhr, etwa 30 Minuten später.", en: "Departure is at 5:15 PM, about 30 minutes later." },
      { target: "Alternativ können Sie den nächsten IC um 18:00 Uhr nehmen.", en: "Alternatively, you can take the next IC at 6:00 PM." },
      { target: "Wir entschuldigen uns für die Unannehmlichkeiten.", en: "We apologize for the inconvenience." },
    ],
    [{ target: "ausfallen", en: "to be cancelled" }, { target: "der Ersatzzug", en: "replacement train", article: "der" }, { target: "die Unannehmlichkeiten", en: "inconvenience" }],
    [
      { target: "Was ist mit dem IC 208 passiert?", en: "What happened to IC 208?", options: [{ target: "Er hat Verspätung", en: "It is delayed", correct: false }, { target: "Er fällt aus", en: "It is cancelled", correct: true }, { target: "Er fährt früher", en: "It departs earlier", correct: false }] },
      { target: "Wann fährt der Ersatzzug?", en: "When does the replacement train depart?", options: [{ target: "Um 17:15 Uhr", en: "At 5:15 PM", correct: true }, { target: "Um 18:00 Uhr", en: "At 6:00 PM", correct: false }, { target: "Um 16:45 Uhr", en: "At 4:45 PM", correct: false }] },
    ],
    [{ target: "sich begeben", en: "to proceed" }, { target: "alternativ", en: "alternatively" }],
    { question: "Das Gleis hat sich geändert. Was machen Sie?", questionTranslation: "The platform has changed. What do you do?", options: [
      { text: "Achten Sie auf die neuen Aushänge.", translation: "Pay attention to the new notices.", correct: true },
      { text: "Gehen Sie einfach nach Hause.", translation: "Just go home.", correct: false },
      { text: "Steigen Sie in den erstbesten Zug.", translation: "Board the first train you see.", correct: false }
    ] },
  );

  await addExperience(103, "Understanding Platform Changes", 2, "Transportation",
    [
      { target: "Aufgrund einer Gleiserneuerung ändert sich die Abfahrtsstelle.", en: "Due to track renovation, the departure point is changing." },
      { target: "Der RE 7 nach Köln fährt heute ab Gleis 12 statt Gleis 8.", en: "RE 7 to Cologne departs from platform 12 instead of platform 8 today." },
      { target: "Bitte beachten Sie die neuen Aushänge.", en: "Please pay attention to the new notices." },
      { target: "Die Züge nach Köln halten auch am Bahnsteig C.", en: "Trains to Cologne also stop at platform C." },
      { target: "Vielen Dank für Ihre Aufmerksamkeit.", en: "Thank you for your attention." },
    ],
    [{ target: "die Gleiserneuerung", en: "track renovation", article: "die" }, { target: "der Aushang", en: "notice", article: "der" }],
    [
      { target: "Warum ändert sich das Gleis?", en: "Why is the platform changing?", options: [{ target: "Wegen einer Verspätung", en: "Due to a delay", correct: false }, { target: "Wegen einer Gleiserneuerung", en: "Due to track renovation", correct: true }, { target: "Wegen des Wetters", en: "Due to weather", correct: false }] },
      { target: "Von welchem Gleis fährt der RE 7 jetzt?", en: "From which platform does RE 7 depart now?", options: [{ target: "Gleis 8", en: "Platform 8", correct: false }, { target: "Gleis 12", en: "Platform 12", correct: true }, { target: "Gleis 6", en: "Platform 6", correct: false }] },
    ],
    [{ target: "sich ändern", en: "to change" }, { target: "beachten", en: "to pay attention to" }],
    { question: "Sie haben den Anschluss verpasst. Was machen Sie?", questionTranslation: "You missed your connection. What do you do?", options: [
      { text: "Gehen Sie zum Serviceschalter und fragen Sie nach Hilfe.", translation: "Go to the service desk and ask for help.", correct: true },
      { text: "Buchen Sie einen neuen Flug.", translation: "Book a new flight.", correct: false },
      { text: "Warten Sie einfach.", translation: "Just wait.", correct: false }
    ] },
    undefined,
    [
      { text: "die Gleiserneuerung", translation: "track renovation", correctValue: "renovation" },
      { text: "der Aushang", translation: "notice", correctValue: "notice" },
      { text: "der Bahnsteig", translation: "platform", correctValue: "platform" }
    ],
  );

  // Module 105: Complex Itinerary (B2)
  await addExperience(105, "Planning a Complex Multi-Leg Trip", 3, "Transportation",
    [
      { target: "Ich muss von Berlin über Frankfurt nach Zürich reisen.", en: "I need to travel from Berlin via Frankfurt to Zurich." },
      { target: "Empfehlen Sie mir eine Route mit möglichst kurzer Umsteigezeit?", en: "Can you recommend a route with the shortest possible transfer time?" },
      { target: "Nehmen Sie den ICE 109 um 7:30 Uhr. In Frankfurt haben Sie 15 Minuten Umsteigezeit.", en: "Take ICE 109 at 7:30 AM. In Frankfurt you have a 15-minute transfer time." },
      { target: "Und von Frankfurt nach Zürich fährt ein ICE um 10:15 Uhr.", en: "And from Frankfurt to Zurich, an ICE departs at 10:15 AM." },
      { target: "Das klingt gut. Buchen Sie mir bitte einen Sitzplatz im Großraumwagen.", en: "That sounds good. Please reserve me a seat in the open-plan carriage." },
    ],
    [{ target: "die Umsteigezeit", en: "transfer time", article: "die" }, { target: "der Großraumwagen", en: "open-plan carriage", article: "der" }],
    [
      { target: "Wohin möchte der Fahrgast reisen?", en: "Where does the passenger want to travel?", options: [{ target: "Berlin über Frankfurt nach Zürich", en: "Berlin via Frankfurt to Zurich", correct: true }, { target: "Frankfurt über Berlin nach Zürich", en: "Frankfurt via Berlin to Zurich", correct: false }, { target: "Berlin direkt nach Zürich", en: "Berlin directly to Zurich", correct: false }] },
      { target: "Wie lange hat er in Frankfurt Umsteigezeit?", en: "How long is his transfer time in Frankfurt?", options: [{ target: "10 Minuten", en: "10 minutes", correct: false }, { target: "15 Minuten", en: "15 minutes", correct: true }, { target: "20 Minuten", en: "20 minutes", correct: false }] },
    ],
    [{ target: "empfehlen", en: "to recommend" }, { target: "buchen", en: "to book" }],
    { question: "Was sagen Sie am Reisezentrum?", questionTranslation: "What do you say at the travel center?", options: [
      { text: "Können Sie mir eine Route mit kurzer Umsteigezeit empfehlen?", translation: "Can you recommend a route with a short transfer time?", correct: true },
      { text: "Ich hätte gerne ein Bier und eine Brezel.", translation: "I'd like a beer and a pretzel.", correct: false },
      { text: "Wo kann ich mein Gepäck abgeben?", translation: "Where can I drop off my luggage?", correct: false }
    ] },
  );

  await addExperience(105, "Handling a Missed Connection", 3, "Transportation",
    [
      { target: "Ich habe meinen Anschlusszug verpasst wegen der Verspätung.", en: "I missed my connecting train because of the delay." },
      { target: "Kein Problem. Ich buche Sie kostenlos auf den nächsten Zug um.", en: "No problem. I'll rebook you on the next train for free." },
      { target: "Der nächste Zug fährt in 45 Minuten ab Gleis 6.", en: "The next train departs in 45 minutes from platform 6." },
      { target: "Muss ich mich beeilen, um einen Sitzplatz zu bekommen?", en: "Do I need to hurry to get a seat?" },
      { target: "Nein, der Zug hat genug Kapazität. Sie können entspannt einsteigen.", en: "No, the train has enough capacity. You can board calmly." },
    ],
    [{ target: "verpassen", en: "to miss" }, { target: "der Anschlusszug", en: "connecting train", article: "der" }, { target: "die Kapazität", en: "capacity", article: "die" }],
    [
      { target: "Warum hat der Fahrgast den Anschlusszug verpasst?", en: "Why did the passenger miss the connecting train?", options: [{ target: "Er hat verschlafen", en: "He overslept", correct: false }, { target: "Wegen der Verspätung", en: "Because of the delay", correct: true }, { target: "Er war am falschen Gleis", en: "He was at the wrong platform", correct: false }] },
      { target: "Was macht der Service-Mitarbeiter?", en: "What does the service employee do?", options: [{ target: "Er gibt dem Fahrgast eine Entschädigung", en: "He gives the passenger compensation", correct: false }, { target: "Er bucht den Fahrgast kostenlos um", en: "He rebooks the passenger for free", correct: true }, { target: "Er ruft ein Taxi", en: "He calls a taxi", correct: false }] },
    ],
    [{ target: "umbuchen", en: "to rebook" }, { target: "entspannt", en: "relaxed" }],
    { question: "Sie sind unzufrieden. Was machen Sie?", questionTranslation: "You're dissatisfied. What do you do?", options: [
      { text: "Reichen Sie eine schriftliche Beschwerde ein.", translation: "File a written complaint.", correct: true },
      { text: "Schreiben Sie einen wütenden Brief.", translation: "Write an angry letter.", correct: false },
      { text: "Vergessen Sie die Sache einfach.", translation: "Just forget about it.", correct: false }
    ] },
  );

  // Module 106: Customer Service (B2)
  await addExperience(106, "Lodge a Formal Complaint", 3, "Transportation",
    [
      { target: "Ich möchte eine Beschwerde einreichen wegen der gestrigen Zugfahrt.", en: "I would like to file a complaint about yesterday's train journey." },
      { target: "Die Klimaanlage im Waggon 3 hat nicht funktioniert.", en: "The air conditioning in carriage 3 was not working." },
      { target: "Haben Sie Ihre Fahrkarte und die Zugnummer parat?", en: "Do you have your ticket and the train number ready?" },
      { target: "Ja, hier sind alle Unterlagen. Ich erwarte eine Fahrpreiserstattung.", en: "Yes, here are all the documents. I expect a fare refund." },
      { target: "Wir werden Ihren Fall prüfen und uns innerhalb von 14 Tagen melden.", en: "We will review your case and get back to you within 14 days." },
    ],
    [{ target: "die Beschwerde", en: "complaint", article: "die" }, { target: "die Fahrpreiserstattung", en: "fare refund", article: "die" }, { target: "die Unterlagen", en: "documents" }],
    [
      { target: "Warum möchte der Fahrgast eine Beschwerde einreichen?", en: "Why does the passenger want to file a complaint?", options: [{ target: "Der Zug hatte Verspätung", en: "The train was late", correct: false }, { target: "Die Klimaanlage hat nicht funktioniert", en: "The AC was not working", correct: true }, { target: "Das Essen war schlecht", en: "The food was bad", correct: false }] },
      { target: "Wie lange dauert die Bearbeitung der Beschwerde?", en: "How long does the complaint processing take?", options: [{ target: "7 Tage", en: "7 days", correct: false }, { target: "14 Tage", en: "14 days", correct: true }, { target: "30 Tage", en: "30 days", correct: false }] },
    ],
    [{ target: "einreichen", en: "to file" }, { target: "prüfen", en: "to review" }],
    { question: "Sie reisen geschäftlich. Welches Ticket?", questionTranslation: "You're traveling for business. Which ticket?", options: [
      { text: "Gibt es einen Rabatt für Vielreisende?", translation: "Is there a discount for frequent travelers?", correct: true },
      { text: "Wo ist das nächste Hotel?", translation: "Where is the nearest hotel?", correct: false },
      { text: "Können Sie mir das Datum nennen?", translation: "Can you tell me the date?", correct: false }
    ] },
    undefined,
    [
      { text: "die Beschwerde", translation: "complaint", correctValue: "complaint" },
      { text: "die Fahrpreiserstattung", translation: "fare refund", correctValue: "refund" },
      { text: "die Unterlagen", translation: "documents", correctValue: "documents" }
    ],
  );

  await addExperience(106, "Negotiating a Better Fare", 3, "Transportation",
    [
      { target: "Ich reise geschäftlich und brauche ein flexibles Ticket.", en: "I'm traveling for business and need a flexible ticket." },
      { target: "Dann empfehle ich das Flexpreis-Ticket. Es kostet 130 Euro.", en: "Then I recommend the flex fare ticket. It costs 130 euros." },
      { target: "Gibt es einen Rabatt für Vielreisende?", en: "Is there a discount for frequent travelers?" },
      { target: "Mit der Bahncard 100 reisen Sie ein Jahr lang unbegrenzt.", en: "With Bahncard 100 you travel unlimited for a year." },
      { target: "Das ist eine gute Investition für meine regelmäßigen Fahrten.", en: "That's a good investment for my regular trips." },
    ],
    [{ target: "geschäftlich", en: "business" }, { target: "das Flexpreis-Ticket", en: "flex fare ticket" }, { target: "unbegrenzt", en: "unlimited" }],
    [
      { target: "Welches Ticket empfehlen Sie?", en: "Which ticket do you recommend?", options: [{ target: "Das Sparpreis-Ticket", en: "The saver fare ticket", correct: false }, { target: "Das Flexpreis-Ticket", en: "The flex fare ticket", correct: true }, { target: "Das Sonderticket", en: "The special ticket", correct: false }] },
      { target: "Was ist der Vorteil der Bahncard 100?", en: "What is the advantage of Bahncard 100?", options: [{ target: "25 Prozent Rabatt", en: "25 percent discount", correct: false }, { target: "Unbegrenztes Reisen für ein Jahr", en: "Unlimited travel for a year", correct: true }, { target: "Kostenlose Getränke im Zug", en: "Free drinks on the train", correct: false }] },
    ],
    [{ target: "der Vielreisende", en: "frequent traveler" }, { target: "die Investition", en: "investment" }],
    { question: "Sie rufen beim Arzt an. Was sagen Sie?", questionTranslation: "You call the doctor. What do you say?", options: [
      { text: "Guten Tag, ich möchte einen Termin vereinbaren.", translation: "Hello, I'd like to make an appointment.", correct: true },
      { text: "Können Sie mir ein Rezept ausstellen?", translation: "Can you give me a prescription?", correct: false },
      { text: "Ich brauche einen Krankenwagen.", translation: "I need an ambulance.", correct: false }
    ] },
  );
}