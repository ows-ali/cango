import { addExperience } from "../seed-helpers";

export async function seedHotel() {
  // Module 139: Checking In (A2)
  await addExperience(139, "Arriving at the Hotel", 1, "Hotel & Accommodation",
    [
      { target: "Guten Abend, ich habe ein Zimmer reserviert.", en: "Good evening, I have a room reserved.", speaker: "Gast" },
      { target: "Herzlich willkommen! Auf welchen Namen läuft die Reservierung?", en: "Welcome! Under which name is the reservation?", speaker: "Rezeptionist" },
      { target: "Mein Name ist Müller. Ich habe ein Einzelzimmer für drei Nächte gebucht.", en: "My name is Müller. I booked a single room for three nights.", speaker: "Gast" },
      { target: "Ja, ich habe Sie im System. Ihr Zimmer ist Nummer 312 im dritten Stock.", en: "Yes, I have you in the system. Your room is number 312 on the third floor.", speaker: "Rezeptionist" },
      { target: "Vielen Dank. Wo finde ich den Fahrstuhl?", en: "Thank you very much. Where can I find the elevator?", speaker: "Gast" },
    ],
    [{ target: "das Einzelzimmer", en: "single room", article: "das", plural: "die Einzelzimmer" }, { target: "die Reservierung", en: "reservation", article: "die", plural: "die Reservierungen" }, { target: "der Stock", en: "floor/story", article: "der", plural: "die Stockwerke" }],
    [
      { target: "Was hat der Gast gebucht?", en: "What did the guest book?", options: [{ target: "Ein Doppelzimmer", en: "A double room", correct: false }, { target: "Ein Einzelzimmer", en: "A single room", correct: true }, { target: "Eine Suite", en: "A suite", correct: false }] },
      { target: "Auf welchem Stock ist das Zimmer?", en: "On which floor is the room?", options: [{ target: "Im zweiten Stock", en: "On the second floor", correct: false }, { target: "Im dritten Stock", en: "On the third floor", correct: true }, { target: "Im ersten Stock", en: "On the first floor", correct: false }] },
    ],
    [{ target: "reservieren", en: "to reserve" }, { target: "der Fahrstuhl", en: "elevator" }],
    { question: "Was sagen Sie an der Rezeption?", questionTranslation: "What do you say at the reception?", options: [
      { text: "Guten Abend, ich habe ein Zimmer reserviert.", translation: "Good evening, I have a room reserved.", correct: true },
      { text: "Ich möchte bitte bezahlen.", translation: "I'd like to pay, please.", correct: false },
      { text: "Können Sie mir ein Taxi rufen?", translation: "Can you call me a taxi?", correct: false }
    ] },
  );

  await addExperience(139, "Filling Out the Registration Form", 1, "Hotel & Accommodation",
    [
      { target: "Bitte füllen Sie das Anmeldeformular aus.", en: "Please fill out the registration form.", speaker: "Rezeptionist" },
      { target: "Muss ich alle Felder ausfüllen?", en: "Do I have to fill in all the fields?", speaker: "Gast" },
      { target: "Ja, besonders Ihre Adresse und Ihre Unterschrift sind wichtig.", en: "Yes, especially your address and your signature are important.", speaker: "Rezeptionist" },
      { target: "Brauchen Sie auch meinen Reisepass?", en: "Do you also need my passport?", speaker: "Gast" },
      { target: "Ja, ich muss Ihren Ausweis kopieren. Einen Moment bitte.", en: "Yes, I need to copy your ID. One moment please.", speaker: "Rezeptionist" },
    ],
    [{ target: "das Anmeldeformular", en: "registration form", article: "das", plural: "die Anmeldeformulare" }, { target: "die Adresse", en: "address", article: "die", plural: "die Adressen" }, { target: "die Unterschrift", en: "signature", article: "die", plural: "die Unterschriften" }],
    [
      { target: "Was muss der Gast ausfüllen?", en: "What does the guest have to fill out?", options: [{ target: "Das Frühstücksbuffet", en: "The breakfast buffet", correct: false }, { target: "Das Anmeldeformular", en: "The registration form", correct: true }, { target: "Die Speisekarte", en: "The menu", correct: false }] },
      { target: "Was kopiert der Rezeptionist?", en: "What does the receptionist copy?", options: [{ target: "Den Reisepass", en: "The passport", correct: true }, { target: "Die Kreditkarte", en: "The credit card", correct: false }, { target: "Den Zimmerschlüssel", en: "The room key", correct: false }] },
    ],
    [{ target: "ausfüllen", en: "to fill out" }, { target: "der Reisepass", en: "passport" }],
    { question: "Was machen Sie zuerst, wenn Sie ankommen?", questionTranslation: "What do you do first when you arrive?", options: [
      { text: "Gehen Sie zur Rezeption und melden Sie sich an.", translation: "Go to the reception and check in.", correct: true },
      { text: "Gehen Sie direkt auf Ihr Zimmer.", translation: "Go directly to your room.", correct: false },
      { text: "Rufen Sie den Zimmerservice an.", translation: "Call room service.", correct: false }
    ] },
  );

  await addExperience(139, "Asking About Hotel Amenities", 1, "Hotel & Accommodation",
    [
      { target: "Gibt es WLAN im Hotel?", en: "Is there WiFi in the hotel?", speaker: "Gast" },
      { target: "Ja, das WLAN ist kostenlos. Das Passwort steht auf der Karte.", en: "Yes, the WiFi is free. The password is on the card.", speaker: "Rezeptionist" },
      { target: "Wo ist das Frühstücksrestaurant?", en: "Where is the breakfast restaurant?", speaker: "Gast" },
      { target: "Das Frühstück gibt es im Restaurant im Erdgeschoss von 7 bis 10 Uhr.", en: "Breakfast is in the restaurant on the ground floor from 7 to 10 AM.", speaker: "Rezeptionist" },
      { target: "Gibt es auch einen Fitnessraum?", en: "Is there also a fitness room?", speaker: "Gast" },
    ],
    [{ target: "das WLAN", en: "WiFi", article: "das" }, { target: "das Frühstück", en: "breakfast", article: "das" }, { target: "der Fitnessraum", en: "fitness room", article: "der", plural: "die Fitnessräume" }],
    [
      { target: "Ist das WLAN kostenlos?", en: "Is the WiFi free?", options: [{ target: "Ja, es ist kostenlos", en: "Yes, it is free", correct: true }, { target: "Nein, es kostet 5 Euro", en: "No, it costs 5 euros", correct: false }, { target: "Es gibt kein WLAN", en: "There is no WiFi", correct: false }] },
      { target: "Wo ist das Frühstücksrestaurant?", en: "Where is the breakfast restaurant?", options: [{ target: "Im ersten Stock", en: "On the first floor", correct: false }, { target: "Im Erdgeschoss", en: "On the ground floor", correct: true }, { target: "Im Keller", en: "In the basement", correct: false }] },
    ],
    [{ target: "kostenlos", en: "free of charge" }, { target: "das Passwort", en: "password" }],
    { question: "Sie brauchen das WLAN-Passwort. Was fragen Sie?", questionTranslation: "You need the WiFi password. What do you ask?", options: [
      { text: "Entschuldigung, wie ist das WLAN-Passwort?", translation: "Excuse me, what is the WiFi password?", correct: true },
      { text: "Können Sie mir den Fernseher erklären?", translation: "Can you explain the TV to me?", correct: false },
      { text: "Wo ist der nächste Supermarkt?", translation: "Where is the nearest supermarket?", correct: false }
    ] },
    undefined,
    [
      { text: "das WLAN", translation: "WiFi", correctValue: "wifi" },
      { text: "das Frühstück", translation: "breakfast", correctValue: "breakfast" },
      { text: "das Erdgeschoss", translation: "ground floor", correctValue: "groundfloor" }
    ],
  );

  // Module 140: During Your Stay (A2)
  await addExperience(140, "Ordering Room Service", 1, "Hotel & Accommodation",
    [
      { target: "Kann ich etwas zu essen aufs Zimmer bestellen?", en: "Can I order something to eat to my room?", speaker: "Gast" },
      { target: "Ja, gerne. Hier ist die Speisekarte.", en: "Yes, of course. Here is the menu.", speaker: "Rezeptionist" },
      { target: "Ich hätte gerne eine Gemüsesuppe und ein Glas Wasser.", en: "I'd like a vegetable soup and a glass of water.", speaker: "Gast" },
      { target: "Kommt sofort. Das dauert ungefähr 20 Minuten.", en: "Coming right away. That will take about 20 minutes.", speaker: "Rezeptionist" },
      { target: "Kann ich das auf die Zimmerrechnung setzen lassen?", en: "Can I have that charged to the room bill?", speaker: "Gast" },
    ],
    [{ target: "der Zimmerservice", en: "room service", article: "der" }, { target: "die Speisekarte", en: "menu", article: "die", plural: "die Speisekarten" }, { target: "die Rechnung", en: "bill", article: "die", plural: "die Rechnungen" }],
    [
      { target: "Was möchte der Gast bestellen?", en: "What does the guest want to order?", options: [{ target: "Ein Steak und Bier", en: "A steak and beer", correct: false }, { target: "Eine Gemüsesuppe und Wasser", en: "A vegetable soup and water", correct: true }, { target: "Einen Salat und Wein", en: "A salad and wine", correct: false }] },
      { target: "Wie lange dauert die Lieferung?", en: "How long does the delivery take?", options: [{ target: "10 Minuten", en: "10 minutes", correct: false }, { target: "20 Minuten", en: "20 minutes", correct: true }, { target: "30 Minuten", en: "30 minutes", correct: false }] },
    ],
    [{ target: "bestellen", en: "to order" }, { target: "die Suppe", en: "soup" }],
    { question: "Was sagen Sie für den Zimmerservice?", questionTranslation: "What do you say for room service?", options: [
      { text: "Kann ich etwas zu essen aufs Zimmer bestellen?", translation: "Can I order something to eat to my room?", correct: true },
      { text: "Ich möchte bitte den Safe öffnen.", translation: "I'd like to open the safe, please.", correct: false },
      { text: "Können Sie mein Zimmer reinigen?", translation: "Can you clean my room?", correct: false }
    ] },
  );

  await addExperience(140, "Requesting Housekeeping", 1, "Hotel & Accommodation",
    [
      { target: "Könnten Sie frische Handtücher auf mein Zimmer bringen?", en: "Could you bring fresh towels to my room?", speaker: "Gast" },
      { target: "Natürlich. Soll ich auch das Bett frisch beziehen?", en: "Of course. Should I also change the bedsheets?", speaker: "Reinigungskraft" },
      { target: "Ja, bitte. Und ich brauche auch neues Duschgel.", en: "Yes, please. And I also need new shower gel.", speaker: "Gast" },
      { target: "Kein Problem. Ich kümmere mich sofort darum.", en: "No problem. I'll take care of it right away.", speaker: "Reinigungskraft" },
      { target: "Vielen Dank! Soll ich das ,Bitte nicht stören'-Schild an die Tür hängen?", en: "Thank you very much! Should I hang the 'Do not disturb' sign on the door?", speaker: "Gast" },
    ],
    [{ target: "das Handtuch", en: "towel", article: "das", plural: "die Handtücher" }, { target: "das Bett", en: "bed", article: "das", plural: "die Betten" }, { target: "das Duschgel", en: "shower gel", article: "das" }],
    [
      { target: "Was möchte der Gast als Erstes?", en: "What does the guest want first?", options: [{ target: "Frische Handtücher", en: "Fresh towels", correct: true }, { target: "Ein neues Kissen", en: "A new pillow", correct: false }, { target: "Mehr Toilettenpapier", en: "More toilet paper", correct: false }] },
      { target: "Was bietet die Reinigungskraft noch an?", en: "What else does the housekeeper offer?", options: [{ target: "Den Boden wischen", en: "Mop the floor", correct: false }, { target: "Das Bett frisch beziehen", en: "Change the bedsheets", correct: true }, { target: "Die Fenster putzen", en: "Clean the windows", correct: false }] },
    ],
    [{ target: "bringen", en: "to bring" }, { target: "frisch", en: "fresh" }],
    { question: "Was sagen Sie, wenn Sie frische Handtücher brauchen?", questionTranslation: "What do you say when you need fresh towels?", options: [
      { text: "Könnten Sie mir frische Handtücher bringen?", translation: "Could you bring me fresh towels?", correct: true },
      { text: "Die Handtücher sind zu klein.", translation: "The towels are too small.", correct: false },
      { text: "Ich möchte die Handtücher kaufen.", translation: "I want to buy the towels.", correct: false }
    ] },
  );

  await addExperience(140, "Asking About the Neighborhood", 1, "Hotel & Accommodation",
    [
      { target: "Gibt es ein gutes Restaurant in der Nähe?", en: "Is there a good restaurant nearby?", speaker: "Gast" },
      { target: "Ja, gleich um die Ecke ist ein Italiener. Der ist sehr beliebt.", en: "Yes, just around the corner is an Italian restaurant. It's very popular.", speaker: "Rezeptionist" },
      { target: "Kann man da auch draußen sitzen?", en: "Can you sit outside there too?", speaker: "Gast" },
      { target: "Ja, die haben eine schöne Terrasse. Soll ich einen Tisch reservieren?", en: "Yes, they have a nice terrace. Shall I reserve a table?", speaker: "Rezeptionist" },
      { target: "Das wäre toll. Für zwei Personen um 19 Uhr bitte.", en: "That would be great. For two people at 7 PM please.", speaker: "Gast" },
    ],
    [{ target: "das Restaurant", en: "restaurant", article: "das", plural: "die Restaurants" }, { target: "die Nähe", en: "vicinity", article: "die" }, { target: "die Terrasse", en: "terrace", article: "die", plural: "die Terrassen" }],
    [
      { target: "Was empfiehlt der Rezeptionist?", en: "What does the receptionist recommend?", options: [{ target: "Einen Italiener um die Ecke", en: "An Italian around the corner", correct: true }, { target: "Ein chinesisches Restaurant", en: "A Chinese restaurant", correct: false }, { target: "Das Hotelrestaurant", en: "The hotel restaurant", correct: false }] },
      { target: "Wann möchte der Gast essen gehen?", en: "When does the guest want to go eat?", options: [{ target: "Um 18 Uhr", en: "At 6 PM", correct: false }, { target: "Um 19 Uhr", en: "At 7 PM", correct: true }, { target: "Um 20 Uhr", en: "At 8 PM", correct: false }] },
    ],
    [{ target: "beliebt", en: "popular" }, { target: "reservieren", en: "to reserve" }],
    { question: "Was fragen Sie nach einem guten Restaurant?", questionTranslation: "What do you ask for a good restaurant?", options: [
      { text: "Können Sie mir ein gutes Restaurant in der Nähe empfehlen?", translation: "Can you recommend a good restaurant nearby?", correct: true },
      { text: "Wo ist die nächste U-Bahn-Station?", translation: "Where is the nearest subway station?", correct: false },
      { text: "Wie spät ist es?", translation: "What time is it?", correct: false }
    ] },
    undefined,
    [
      { text: "die Terrasse", translation: "terrace", correctValue: "terrace" },
      { text: "beliebt", translation: "popular", correctValue: "popular" },
      { text: "die Nähe", translation: "vicinity", correctValue: "vicinity" }
    ],
  );

  // Module 141: Making Requests (B1)
  await addExperience(141, "Making Special Requests", 2, "Hotel & Accommodation",
    [
      { target: "Haben Sie ein Zimmer mit Meerblick?", en: "Do you have a room with a sea view?", speaker: "Gast" },
      { target: "Ja, wir hätten noch ein Zimmer im vierten Stock mit Balkon frei.", en: "Yes, we still have a room available on the fourth floor with a balcony.", speaker: "Rezeptionist" },
      { target: "Das klingt wunderbar. Könnte ich mir das Zimmer vorher ansehen?", en: "That sounds wonderful. Could I see the room beforehand?", speaker: "Gast" },
      { target: "Selbstverständlich. Ich begleite Sie nach oben.", en: "Of course. I'll accompany you upstairs.", speaker: "Rezeptionist" },
      { target: "Perfekt. Und gibt es die Möglichkeit, ein Zustellbett zu bekommen?", en: "Perfect. And is it possible to get an extra bed?", speaker: "Gast" },
    ],
    [{ target: "der Meerblick", en: "sea view", article: "der" }, { target: "der Balkon", en: "balcony", article: "der", plural: "die Balkone" }, { target: "das Zustellbett", en: "extra bed", article: "das", plural: "die Zustellbetten" }],
    [
      { target: "Was für ein Zimmer sucht der Gast?", en: "What kind of room is the guest looking for?", options: [{ target: "Ein Zimmer mit Stadtblick", en: "A room with a city view", correct: false }, { target: "Ein Zimmer mit Meerblick", en: "A room with a sea view", correct: true }, { target: "Ein Zimmer zum Innenhof", en: "A room facing the courtyard", correct: false }] },
      { target: "Was möchte der Gast vor der Buchung tun?", en: "What does the guest want to do before booking?", options: [{ target: "Das Zimmer ansehen", en: "See the room", correct: true }, { target: "Den Preis verhandeln", en: "Negotiate the price", correct: false }, { target: "Das Frühstück probieren", en: "Try the breakfast", correct: false }] },
    ],
    [{ target: "wunderbar", en: "wonderful" }, { target: "die Möglichkeit", en: "possibility" }],
    { question: "Sie möchten ein Zimmer mit Aussicht. Was sagen Sie?", questionTranslation: "You want a room with a view. What do you say?", options: [
      { text: "Haben Sie ein Zimmer mit Meerblick?", translation: "Do you have a room with a sea view?", correct: true },
      { text: "Das Zimmer ist zu klein.", translation: "The room is too small.", correct: false },
      { text: "Kann ich die Minibar nutzen?", translation: "Can I use the minibar?", correct: false }
    ] },
  );

  await addExperience(141, "Requesting Late Check-Out", 2, "Hotel & Accommodation",
    [
      { target: "Kann ich später auschecken? Mein Flug geht erst um 18 Uhr.", en: "Can I check out later? My flight isn't until 6 PM.", speaker: "Gast" },
      { target: "Late Check-out ist bis 14 Uhr möglich. Das kostet 30 Euro extra.", en: "Late check-out is possible until 2 PM. That costs 30 euros extra.", speaker: "Rezeptionist" },
      { target: "In Ordnung, das ist akzeptabel. Könnte ich auch mein Gepäck hier lassen?", en: "Alright, that's acceptable. Could I also leave my luggage here?", speaker: "Gast" },
      { target: "Ja, wir haben einen Gepäckraum. Sie können Ihre Sachen dort einschließen.", en: "Yes, we have a luggage room. You can lock your things there.", speaker: "Rezeptionist" },
      { target: "Ausgezeichnet. Dann möchte ich den Late Check-out bis 14 Uhr buchen.", en: "Excellent. Then I'd like to book late check-out until 2 PM.", speaker: "Gast" },
    ],
    [{ target: "der Late Check-out", en: "late check-out", article: "der" }, { target: "der Gepäckraum", en: "luggage room", article: "der", plural: "die Gepäckräume" }, { target: "das Gepäck", en: "luggage", article: "das" }],
    [
      { target: "Warum möchte der Gast später auschecken?", en: "Why does the guest want to check out later?", options: [{ target: "Er hat einen späten Flug", en: "He has a late flight", correct: true }, { target: "Er möchte länger schlafen", en: "He wants to sleep longer", correct: false }, { target: "Er hat kein Geld", en: "He has no money", correct: false }] },
      { target: "Bis wann ist Late Check-out möglich?", en: "Until when is late check-out possible?", options: [{ target: "Bis 12 Uhr", en: "Until 12 PM", correct: false }, { target: "Bis 14 Uhr", en: "Until 2 PM", correct: true }, { target: "Bis 16 Uhr", en: "Until 4 PM", correct: false }] },
    ],
    [{ target: "auschecken", en: "to check out" }, { target: "akzeptabel", en: "acceptable" }],
    { question: "Was fragen Sie an der Rezeption?", questionTranslation: "What do you ask at the reception?", options: [
      { text: "Kann ich später auschecken? Ich habe einen späten Flug.", translation: "Can I check out later? I have a late flight.", correct: true },
      { text: "Kann ich früher einchecken?", translation: "Can I check in earlier?", correct: false },
      { text: "Kann ich ein Upgrade bekommen?", translation: "Can I get an upgrade?", correct: false }
    ] },
    undefined,
    [
      { text: "auschecken", translation: "to check out", correctValue: "checkout" },
      { text: "der Gepäckraum", translation: "luggage room", correctValue: "luggage_room" },
      { text: "das Gepäck", translation: "luggage", correctValue: "luggage" }
    ],
  );

  // Module 142: Dealing with Issues (B1)
  await addExperience(142, "Reporting a Room Problem", 2, "Hotel & Accommodation",
    [
      { target: "Die Heizung funktioniert nicht. Es ist sehr kalt im Zimmer.", en: "The heating isn't working. It's very cold in the room.", speaker: "Gast" },
      { target: "Das tut mir leid. Ich schicke sofort einen Techniker vorbei.", en: "I'm sorry about that. I'll send a technician right away.", speaker: "Rezeptionist" },
      { target: "Könnten Sie mir vielleicht eine zusätzliche Decke bringen?", en: "Could you perhaps bring me an extra blanket?", speaker: "Gast" },
      { target: "Selbstverständlich. Und falls die Heizung nicht repariert werden kann, biete ich Ihnen ein anderes Zimmer an.", en: "Of course. And if the heating cannot be repaired, I'll offer you another room.", speaker: "Rezeptionist" },
      { target: "Das wäre sehr nett. Ich hoffe, das Problem lässt sich schnell lösen.", en: "That would be very kind. I hope the problem can be resolved quickly.", speaker: "Gast" },
    ],
    [{ target: "die Heizung", en: "heating", article: "die", plural: "die Heizungen" }, { target: "der Techniker", en: "technician", article: "der", plural: "die Techniker" }, { target: "die Decke", en: "blanket", article: "die", plural: "die Decken" }],
    [
      { target: "Was ist das Problem im Zimmer?", en: "What is the problem in the room?", options: [{ target: "Die Heizung funktioniert nicht", en: "The heating isn't working", correct: true }, { target: "Der Fernseher ist kaputt", en: "The TV is broken", correct: false }, { target: "Die Tür schließt nicht", en: "The door doesn't close", correct: false }] },
      { target: "Was bietet der Rezeptionist als Lösung an?", en: "What solution does the receptionist offer?", options: [{ target: "Einen Rabatt auf den Zimmerpreis", en: "A discount on the room rate", correct: false }, { target: "Einen Techniker und ein anderes Zimmer falls nötig", en: "A technician and another room if necessary", correct: true }, { target: "Eine kostenlose Nacht", en: "A free night", correct: false }] },
    ],
    [{ target: "funktionieren", en: "to work/function" }, { target: "reparieren", en: "to repair" }],
    { question: "Die Heizung ist kaputt. Was sagen Sie?", questionTranslation: "The heating is broken. What do you say?", options: [
      { text: "Die Heizung funktioniert nicht. Können Sie bitte einen Techniker schicken?", translation: "The heating isn't working. Can you please send a technician?", correct: true },
      { text: "Ich möchte bitte ein kaltes Getränk.", translation: "I'd like a cold drink, please.", correct: false },
      { text: "Wo ist der Lichtschalter?", translation: "Where is the light switch?", correct: false }
    ] },
  );

  await addExperience(142, "Making a Noise Complaint", 2, "Hotel & Accommodation",
    [
      { target: "Es ist zu laut im Nebenzimmer. Ich kann nicht schlafen.", en: "It's too loud in the next room. I can't sleep.", speaker: "Gast" },
      { target: "Das tut mir sehr leid. Um welche Uhrzeit ist der Lärm am schlimmsten?", en: "I'm very sorry. At what time is the noise worst?", speaker: "Rezeptionist" },
      { target: "Seit ungefähr 23 Uhr hört man laute Musik und Stimmen.", en: "Since about 11 PM you can hear loud music and voices.", speaker: "Gast" },
      { target: "Ich werde die Gäste im Nebenzimmer bitten, leiser zu sein.", en: "I will ask the guests in the next room to be quieter.", speaker: "Rezeptionist" },
      { target: "Vielen Dank. Wenn es nicht aufhört, müsste ich leider um ein anderes Zimmer bitten.", en: "Thank you. If it doesn't stop, I would unfortunately have to ask for another room.", speaker: "Gast" },
    ],
    [{ target: "der Lärm", en: "noise", article: "der" }, { target: "das Nebenzimmer", en: "next room", article: "das", plural: "die Nebenzimmer" }, { target: "die Musik", en: "music", article: "die" }],
    [
      { target: "Warum kann der Gast nicht schlafen?", en: "Why can't the guest sleep?", options: [{ target: "Es ist zu heiß im Zimmer", en: "It's too hot in the room", correct: false }, { target: "Es ist zu laut im Nebenzimmer", en: "It's too loud in the next room", correct: true }, { target: "Das Bett ist unbequem", en: "The bed is uncomfortable", correct: false }] },
      { target: "Was macht der Rezeptionist wegen der Beschwerde?", en: "What does the receptionist do about the complaint?", options: [{ target: "Er ignoriert das Problem", en: "He ignores the problem", correct: false }, { target: "Er bittet die Gäste, leiser zu sein", en: "He asks the guests to be quieter", correct: true }, { target: "Er ruft die Polizei", en: "He calls the police", correct: false }] },
    ],
    [{ target: "laut", en: "loud" }, { target: "schlimm", en: "bad/severe" }],
    { question: "Was sagen Sie an der Rezeption wegen Lärms?", questionTranslation: "What do you say at the reception about noise?", options: [
      { text: "Es ist sehr laut im Nebenzimmer. Können Sie bitte etwas unternehmen?", translation: "It's very loud in the next room. Can you please do something about it?", correct: true },
      { text: "Können Sie mir den Wecker stellen?", translation: "Can you set my alarm?", correct: false },
      { text: "Ich möchte bitte früstücken.", translation: "I'd like to have breakfast, please.", correct: false }
    ] },
    undefined,
    [
      { text: "der Lärm", translation: "noise", correctValue: "noise" },
      { text: "das Nebenzimmer", translation: "next room", correctValue: "nextroom" },
      { text: "die Musik", translation: "music", correctValue: "music" }
    ],
  );

  // Module 143: Checking Out (B2)
  await addExperience(143, "The Check-Out Process", 3, "Hotel & Accommodation",
    [
      { target: "Guten Morgen, ich möchte auschecken.", en: "Good morning, I'd like to check out.", speaker: "Gast" },
      { target: "Guten Morgen! Hat Ihnen der Aufenthalt gefallen?", en: "Good morning! Did you enjoy your stay?", speaker: "Rezeptionist" },
      { target: "Ja, es war ein sehr angenehmer Aufenthalt. Das Zimmer war komfortabel.", en: "Yes, it was a very pleasant stay. The room was comfortable.", speaker: "Gast" },
      { target: "Das freut mich sehr. Ich hoffe, Sie kommen bald wieder.", en: "I'm very glad to hear that. I hope you'll come back soon.", speaker: "Rezeptionist" },
      { target: "Gerne. Könnten Sie mir bitte eine Quittung ausstellen?", en: "I'd be happy to. Could you please issue me a receipt?", speaker: "Gast" },
    ],
    [{ target: "der Aufenthalt", en: "stay", article: "der", plural: "die Aufenthalte" }, { target: "komfortabel", en: "comfortable" }, { target: "die Quittung", en: "receipt", article: "die", plural: "die Quittungen" }],
    [
      { target: "Wie fand der Gast seinen Aufenthalt?", en: "How did the guest find his stay?", options: [{ target: "Sehr angenehm und komfortabel", en: "Very pleasant and comfortable", correct: true }, { target: "Ganz okay aber zu teuer", en: "Okay but too expensive", correct: false }, { target: "Enttäuschend und laut", en: "Disappointing and loud", correct: false }] },
      { target: "Was möchte der Gast beim Auschecken?", en: "What does the guest want when checking out?", options: [{ target: "Eine kostenlose Übernachtung", en: "A free night", correct: false }, { target: "Eine Quittung", en: "A receipt", correct: true }, { target: "Ein Upgrade", en: "An upgrade", correct: false }] },
    ],
    [{ target: "sich freuen", en: "to be pleased" }, { target: "ausstellen", en: "to issue" }],
    { question: "Was sagen Sie beim Auschecken?", questionTranslation: "What do you say when checking out?", options: [
      { text: "Guten Morgen, ich möchte auschecken. Könnten Sie mir eine Quittung ausstellen?", translation: "Good morning, I'd like to check out. Could you issue me a receipt?", correct: true },
      { text: "Guten Morgen, ich möchte ein neues Zimmer.", translation: "Good morning, I'd like a new room.", correct: false },
      { text: "Guten Morgen, ich möchte den Safe öffnen.", translation: "Good morning, I'd like to open the safe.", correct: false }
    ] },
  );

  await addExperience(143, "Reviewing the Bill", 3, "Hotel & Accommodation",
    [
      { target: "Ich glaube, die Rechnung stimmt nicht.", en: "I believe the bill is not correct.", speaker: "Gast" },
      { target: "Welcher Posten ist Ihrer Meinung nach falsch?", en: "Which item do you believe is incorrect?", speaker: "Rezeptionist" },
      { target: "Mir wurde zweimal der Zimmerservice berechnet, aber ich habe nur einmal bestellt.", en: "I was charged twice for room service, but I only ordered once.", speaker: "Gast" },
      { target: "Lassen Sie mich das überprüfen. Sie haben recht, das war ein Fehler unseres Systems.", en: "Let me check that. You're right, that was an error in our system.", speaker: "Rezeptionist" },
      { target: "Könnten Sie den Betrag bitte korrigieren und mir eine korrigierte Rechnung ausstellen?", en: "Could you please correct the amount and issue me a corrected bill?", speaker: "Gast" },
    ],
    [{ target: "der Posten", en: "item (on a bill)", article: "der", plural: "die Posten" }, { target: "der Betrag", en: "amount", article: "der", plural: "die Beträge" }, { target: "der Fehler", en: "mistake", article: "der", plural: "die Fehler" }],
    [
      { target: "Was ist das Problem mit der Rechnung?", en: "What is the problem with the bill?", options: [{ target: "Der Zimmerservice wurde doppelt berechnet", en: "Room service was charged twice", correct: true }, { target: "Der Zimmerpreis ist zu hoch", en: "The room rate is too high", correct: false }, { target: "Die Mehrwertsteuer fehlt", en: "The VAT is missing", correct: false }] },
      { target: "Was war die Ursache für den Fehler?", en: "What was the cause of the error?", options: [{ target: "Ein Betrugsversuch", en: "An attempted fraud", correct: false }, { target: "Ein Fehler im System", en: "An error in the system", correct: true }, { target: "Ein Missverständnis", en: "A misunderstanding", correct: false }] },
    ],
    [{ target: "überprüfen", en: "to check/review" }, { target: "korrigieren", en: "to correct" }],
    { question: "Die Rechnung ist falsch. Was sagen Sie?", questionTranslation: "The bill is wrong. What do you say?", options: [
      { text: "Ich glaube, die Rechnung stimmt nicht. Könnten Sie das bitte überprüfen?", translation: "I believe the bill is not correct. Could you please check it?", correct: true },
      { text: "Die Rechnung ist viel zu niedrig.", translation: "The bill is much too low.", correct: false },
      { text: "Ich möchte bitte bar bezahlen.", translation: "I'd like to pay in cash, please.", correct: false }
    ] },
    undefined,
    [
      { text: "der Posten", translation: "item", correctValue: "item" },
      { text: "der Betrag", translation: "amount", correctValue: "amount" },
      { text: "der Fehler", translation: "mistake", correctValue: "mistake" }
    ],
  );

  // Module 144: Filing Complaints (B2)
  await addExperience(144, "Making a Formal Complaint", 3, "Hotel & Accommodation",
    [
      { target: "Ich bin sehr enttäuscht vom Service in diesem Hotel.", en: "I am very disappointed with the service in this hotel.", speaker: "Gast" },
      { target: "Das bedaure ich sehr. Dürfte ich fragen, woran es genau liegt?", en: "I'm very sorry to hear that. May I ask what exactly the issue is?", speaker: "Hotelmanager" },
      { target: "Das Personal war unfreundlich und das Zimmer entsprach nicht der Beschreibung.", en: "The staff was unfriendly and the room did not match the description.", speaker: "Gast" },
      { target: "Ich verstehe Ihren Unmut vollkommen. Ich werde mich umgehend um die Angelegenheit kümmern.", en: "I completely understand your frustration. I will attend to the matter immediately.", speaker: "Hotelmanager" },
      { target: "Ich erwarte, dass Sie angemessene Maßnahmen ergreifen. So etwas darf nicht vorkommen.", en: "I expect you to take appropriate measures. Something like this must not happen.", speaker: "Gast" },
    ],
    [{ target: "enttäuscht", en: "disappointed" }, { target: "das Personal", en: "staff", article: "das" }, { target: "die Maßnahme", en: "measure", article: "die", plural: "die Maßnahmen" }],
    [
      { target: "Warum ist der Gast enttäuscht?", en: "Why is the guest disappointed?", options: [{ target: "Das Personal war unfreundlich und das Zimmer nicht wie beschrieben", en: "The staff was unfriendly and the room was not as described", correct: true }, { target: "Das Frühstück war zu teuer", en: "The breakfast was too expensive", correct: false }, { target: "Der Pool war geschlossen", en: "The pool was closed", correct: false }] },
      { target: "Was erwartet der Gast vom Hotelmanager?", en: "What does the guest expect from the hotel manager?", options: [{ target: "Eine kostenlose Übernachtung", en: "A free night", correct: false }, { target: "Angemessene Maßnahmen", en: "Appropriate measures", correct: true }, { target: "Eine persönliche Entschuldigung", en: "A personal apology", correct: false }] },
    ],
    [{ target: "der Unmut", en: "frustration" }, { target: "die Angelegenheit", en: "matter/affair" }],
    { question: "Was sagen Sie bei einer formellen Beschwerde?", questionTranslation: "What do you say when filing a formal complaint?", options: [
      { text: "Ich bin sehr enttäuscht vom Service. Ich erwarte angemessene Maßnahmen.", translation: "I am very disappointed with the service. I expect appropriate measures.", correct: true },
      { text: "Können Sie mir ein Taxi rufen?", translation: "Can you call me a taxi?", correct: false },
      { text: "Die Aussicht ist wunderschön.", translation: "The view is beautiful.", correct: false }
    ] },
  );

  await addExperience(144, "Requesting Compensation", 3, "Hotel & Accommodation",
    [
      { target: "Ich möchte eine Entschädigung für die Unannehmlichkeiten während meines Aufenthalts.", en: "I would like compensation for the inconvenience during my stay.", speaker: "Gast" },
      { target: "Ich verstehe Ihren Anspruch. Was genau schwebt Ihnen vor?", en: "I understand your claim. What exactly did you have in mind?", speaker: "Hotelmanager" },
      { target: "Da die Klimaanlage drei Tage lang ausgefallen ist, halte ich eine Rückerstattung von 30 Prozent für angemessen.", en: "Since the air conditioning was broken for three days, I consider a refund of 30 percent appropriate.", speaker: "Gast" },
      { target: "Das ist eine berechtigte Forderung. Ich biete Ihnen eine Ermäßigung von 25 Prozent auf den Gesamtpreis an.", en: "That is a justified demand. I offer you a discount of 25 percent on the total price.", speaker: "Hotelmanager" },
      { target: "In Ordnung, unter dieser Bedingung bin ich bereit, die Angelegenheit als erledigt zu betrachten.", en: "Alright, on that condition I am willing to consider the matter resolved.", speaker: "Gast" },
    ],
    [{ target: "die Entschädigung", en: "compensation", article: "die", plural: "die Entschädigungen" }, { target: "die Rückerstattung", en: "refund", article: "die", plural: "die Rückerstattungen" }, { target: "die Ermäßigung", en: "discount/reduction", article: "die", plural: "die Ermäßigungen" }],
    [
      { target: "Was fordert der Gast als Entschädigung?", en: "What compensation does the guest demand?", options: [{ target: "Eine kostenlose Übernachtung", en: "A free night", correct: false }, { target: "30 Prozent Rückerstattung", en: "30 percent refund", correct: true }, { target: "Ein Upgrade zur Suite", en: "An upgrade to the suite", correct: false }] },
      { target: "Was bietet der Hotelmanager stattdessen an?", en: "What does the hotel manager offer instead?", options: [{ target: "25 Prozent Ermäßigung", en: "25 percent discount", correct: true }, { target: "Eine kostenlose Flasche Wein", en: "A free bottle of wine", correct: false }, { target: "Einen Gutschein für den nächsten Besuch", en: "A voucher for the next visit", correct: false }] },
    ],
    [{ target: "berechtigt", en: "justified" }, { target: "die Bedingung", en: "condition" }],
    { question: "Was sagen Sie, wenn Sie eine Entschädigung wollen?", questionTranslation: "What do you say when you want compensation?", options: [
      { text: "Ich möchte eine Entschädigung für die Unannehmlichkeiten. Eine Rückerstattung wäre angemessen.", translation: "I would like compensation for the inconvenience. A refund would be appropriate.", correct: true },
      { text: "Können Sie mir ein besseres Zimmer geben?", translation: "Can you give me a better room?", correct: false },
      { text: "Ich möchte mich beschweren.", translation: "I want to complain.", correct: false }
    ] },
    undefined,
    [
      { text: "die Entschädigung", translation: "compensation", correctValue: "compensation" },
      { text: "die Rückerstattung", translation: "refund", correctValue: "refund" },
      { text: "die Ermäßigung", translation: "discount", correctValue: "discount" }
    ],
  );
}
