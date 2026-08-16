import { addExperience } from "../seed-helpers";

export async function seedRestaurant() {
  // Module 127: Ordering Food (A2)
  await addExperience(127, "Booking a Table", 1, "Restaurant",
    [
      { target: "Guten Abend, ich möchte einen Tisch reservieren.", en: "Good evening, I'd like to reserve a table.", speaker: "customer" },
      { target: "Für wie viele Personen und wann?", en: "For how many people and when?", speaker: "host" },
      { target: "Für zwei Personen, heute um 20:00 Uhr.", en: "For two people, today at 8 PM.", speaker: "customer" },
      { target: "Das geht. Raucher oder Nichtraucher?", en: "That works. Smoking or non-smoking?", speaker: "host" },
      { target: "Nichtraucher, bitte. Und gern am Fenster.", en: "Non-smoking, please. And preferably by the window.", speaker: "customer" },
    ],
    [{ target: "reservieren", en: "to reserve" }, { target: "der Tisch", en: "table", article: "der" }],
    [
      { target: "Für wie viele Personen möchte der Gast reservieren?", en: "For how many people does the guest want to reserve?", options: [{ target: "Für eine Person", en: "For one person", correct: false }, { target: "Für zwei Personen", en: "For two people", correct: true }, { target: "Für vier Personen", en: "For four people", correct: false }] },
      { target: "Wo möchte der Gast sitzen?", en: "Where does the guest want to sit?", options: [{ target: "An der Bar", en: "At the bar", correct: false }, { target: "In der Mitte", en: "In the middle", correct: false }, { target: "Am Fenster", en: "By the window", correct: true }] },
    ],
    [{ target: "die Reservierung", en: "reservation" }, { target: "der Gast", en: "guest" }],
    { question: "Sie rufen im Restaurant an. Was sagen Sie zuerst?", questionTranslation: "You call the restaurant. What do you say first?", options: [
      { text: "Guten Abend, ich möchte gern einen Tisch reservieren.", translation: "Good evening, I'd like to reserve a table.", correct: true },
      { text: "Ich hätte gern ein Bier.", translation: "I'd like a beer.", correct: false },
      { text: "Die Rechnung bitte.", translation: "The bill please.", correct: false }
    ] },
  );

  await addExperience(127, "Ordering Drinks", 1, "Restaurant",
    [
      { target: "Guten Abend, was darf ich Ihnen bringen?", en: "Good evening, what can I get you?", speaker: "waiter" },
      { target: "Ich hätte gern ein Glas Rotwein, bitte.", en: "I'd like a glass of red wine, please.", speaker: "customer1" },
      { target: "Für mich eine Apfelschorle.", en: "For me an apple spritzer.", speaker: "customer2" },
      { target: "Möchten Sie schon die Speisekarte?", en: "Would you like the menu already?", speaker: "waiter" },
      { target: "Ja, gern. Wir möchten auch etwas essen.", en: "Yes, please. We'd also like to eat something.", speaker: "customer1" },
    ],
    [{ target: "der Rotwein", en: "red wine", article: "der" }, { target: "die Apfelschorle", en: "apple spritzer", article: "die" }, { target: "die Speisekarte", en: "menu", article: "die" }],
    [
      { target: "Was bestellt der erste Gast?", en: "What does the first guest order?", options: [{ target: "Ein Bier", en: "A beer", correct: false }, { target: "Ein Glas Rotwein", en: "A glass of red wine", correct: true }, { target: "Eine Cola", en: "A cola", correct: false }] },
      { target: "Was möchte der zweite Gast trinken?", en: "What does the second guest want to drink?", options: [{ target: "Wasser", en: "Water", correct: false }, { target: "Eine Apfelschorle", en: "An apple spritzer", correct: true }, { target: "Kaffee", en: "Coffee", correct: false }] },
    ],
    [{ target: "bringen", en: "to bring" }, { target: "bestellen", en: "to order" }],
    { question: "Der Kellner kommt an den Tisch. Was sagen Sie?", questionTranslation: "The waiter comes to the table. What do you say?", options: [
      { text: "Ich hätte gern ein Glas Weißwein, bitte.", translation: "I'd like a glass of white wine, please.", correct: true },
      { text: "Wo ist die Toilette?", translation: "Where is the toilet?", correct: false },
      { text: "Das war nicht mein Fehler.", translation: "That wasn't my fault.", correct: false }
    ] },
  );

  await addExperience(127, "Paying the Bill", 1, "Restaurant",
    [
      { target: "Zahlen bitte. Können wir getrennt zahlen?", en: "The bill please. Can we pay separately?", speaker: "customer1" },
      { target: "Ja, natürlich. Das macht 38 Euro für Sie und 42 Euro für Sie.", en: "Yes, of course. That's 38 euros for you and 42 euros for you.", speaker: "waiter" },
      { target: "Stimmt so. Das Trinkgeld ist inklusive.", en: "Keep the change. The tip is included.", speaker: "customer1" },
      { target: "Vielen Dank. Hat es Ihnen geschmeckt?", en: "Thank you very much. Did you enjoy it?", speaker: "waiter" },
      { target: "Ja, sehr gut. Besonders der Fisch war ausgezeichnet.", en: "Yes, very much. Especially the fish was excellent.", speaker: "customer2" },
    ],
    [{ target: "die Rechnung", en: "the bill", article: "die" }, { target: "das Trinkgeld", en: "tip", article: "das" }, { target: "schmecken", en: "to taste good" }],
    [
      { target: "Was fragen die Gäste?", en: "What do the guests ask?", options: [{ target: "Nach der Speisekarte", en: "For the menu", correct: false }, { target: "Nach der Rechnung", en: "For the bill", correct: true }, { target: "Nach dem Weg", en: "For directions", correct: false }] },
      { target: "Was war besonders gut?", en: "What was especially good?", options: [{ target: "Der Fisch", en: "The fish", correct: true }, { target: "Das Steak", en: "The steak", correct: false }, { target: "Die Suppe", en: "The soup", correct: false }] },
    ],
    [{ target: "bezahlen", en: "to pay" }, { target: "inklusive", en: "included" }],
    { question: "Sie wollen bezahlen. Was sagen Sie zum Kellner?", questionTranslation: "You want to pay. What do you say to the waiter?", options: [
      { text: "Zahlen bitte. Es hat sehr gut geschmeckt!", translation: "The bill please. It was very tasty!", correct: true },
      { text: "Können wir noch zehn Minuten warten?", translation: "Can we wait another ten minutes?", correct: false },
      { text: "Haben Sie einen Tisch für vier Personen?", translation: "Do you have a table for four?", correct: false }
    ] },
  );

  // Module 128: At the Table (A2)
  await addExperience(128, "Asking for More Items", 1, "Restaurant",
    [
      { target: "Entschuldigung, können wir noch etwas Brot haben?", en: "Excuse me, can we have some more bread?", speaker: "customer" },
      { target: "Natürlich. Ich bringe Ihnen sofort mehr.", en: "Of course. I'll bring you more right away.", speaker: "waiter" },
      { target: "Und noch ein Glas Wasser, bitte.", en: "And another glass of water, please.", speaker: "customer" },
      { target: "Mit oder ohne Kohlensäure?", en: "With or without carbonation?", speaker: "waiter" },
      { target: "Mit Kohlensäure, bitte.", en: "With carbonation, please.", speaker: "customer" },
    ],
    [{ target: "das Brot", en: "bread", article: "das" }, { target: "das Wasser", en: "water", article: "das" }, { target: "die Kohlensäure", en: "carbonation", article: "die" }],
    [
      { target: "Was möchten die Gäste noch?", en: "What do the guests want more of?", options: [{ target: "Mehr Brot und Wasser", en: "More bread and water", correct: true }, { target: "Mehr Wein", en: "More wine", correct: false }, { target: "Die Rechnung", en: "The bill", correct: false }] },
      { target: "Wie möchten die Gäste das Wasser?", en: "How do the guests want the water?", options: [{ target: "Ohne Kohlensäure", en: "Without carbonation", correct: false }, { target: "Mit Kohlensäure", en: "With carbonation", correct: true }, { target: "Warm", en: "Warm", correct: false }] },
    ],
    [{ target: "sofort", en: "immediately" }, { target: "noch", en: "more/another" }],
    { question: "Sie brauchen noch etwas am Tisch. Was sagen Sie?", questionTranslation: "You need something else at the table. What do you say?", options: [
      { text: "Entschuldigung, können wir bitte noch einen Kaffee bekommen?", translation: "Excuse me, can we have another coffee please?", correct: true },
      { text: "Ich möchte ein Hotelzimmer buchen.", translation: "I'd like to book a hotel room.", correct: false },
      { text: "Wie komme ich zum Bahnhof?", translation: "How do I get to the station?", correct: false }
    ] },
  );

  await addExperience(128, "At the Buffet", 1, "Restaurant",
    [
      { target: "Das Frühstücksbuffet ist von 7 bis 10 Uhr.", en: "The breakfast buffet is from 7 to 10 AM.", speaker: "staff" },
      { target: "Toll. Kann ich mich bedienen?", en: "Great. Can I help myself?", speaker: "guest" },
      { target: "Ja, bitte. Teller und Besteck finden Sie links.", en: "Yes, please. Plates and cutlery are on the left.", speaker: "staff" },
      { target: "Gibt es auch Rührei und Speck?", en: "Is there also scrambled eggs and bacon?", speaker: "guest" },
      { target: "Ja, das ist hinten rechts. Guten Appetit!", en: "Yes, that's at the back right. Enjoy your meal!", speaker: "staff" },
    ],
    [{ target: "das Frühstück", en: "breakfast", article: "das" }, { target: "das Buffet", en: "buffet", article: "das" }, { target: "das Besteck", en: "cutlery", article: "das" }],
    [
      { target: "Wann ist das Frühstücksbuffet?", en: "When is the breakfast buffet?", options: [{ target: "Von 6 bis 9 Uhr", en: "From 6 to 9", correct: false }, { target: "Von 7 bis 10 Uhr", en: "From 7 to 10", correct: true }, { target: "Von 8 bis 11 Uhr", en: "From 8 to 11", correct: false }] },
      { target: "Wo sind die Teller?", en: "Where are the plates?", options: [{ target: "Rechts", en: "Right", correct: false }, { target: "Links", en: "Left", correct: true }, { target: "Hinten", en: "Back", correct: false }] },
    ],
    [{ target: "das Rührei", en: "scrambled eggs" }, { target: "der Speck", en: "bacon" }],
    { question: "Sie sind am Frühstücksbuffet. Was fragen Sie?", questionTranslation: "You're at the breakfast buffet. What do you ask?", options: [
      { text: "Gibt es auch frische Brötchen und Kaffee?", translation: "Is there also fresh rolls and coffee?", correct: true },
      { text: "Wie viel kostet ein Ticket?", translation: "How much is a ticket?", correct: false },
      { text: "Wo ist der Ausgang?", translation: "Where is the exit?", correct: false }
    ] },
  );

  await addExperience(128, "Asking About the Menu", 1, "Restaurant",
    [
      { target: "Was können Sie empfehlen?", en: "What can you recommend?", speaker: "customer" },
      { target: "Das Tagesgericht ist sehr beliebt. Heute gibt es Schnitzel mit Pommes.", en: "The daily special is very popular. Today it's schnitzel with fries.", speaker: "waiter" },
      { target: "Das klingt gut. Und was ist in der vegetarischen Option?", en: "That sounds good. And what's in the vegetarian option?", speaker: "customer" },
      { target: "Das ist Gemüsepfanne mit Reis und Sojasoße.", en: "That's a vegetable pan with rice and soy sauce.", speaker: "waiter" },
      { target: "Ich nehme das Tagesgericht. Und eine Suppe als Vorspeise.", en: "I'll take the daily special. And a soup as a starter.", speaker: "customer" },
    ],
    [{ target: "empfehlen", en: "to recommend" }, { target: "das Tagesgericht", en: "daily special", article: "das" }, { target: "die Vorspeise", en: "starter", article: "die" }],
    [
      { target: "Was ist das Tagesgericht?", en: "What's the daily special?", options: [{ target: "Schnitzel mit Pommes", en: "Schnitzel with fries", correct: true }, { target: "Gemüsepfanne", en: "Vegetable pan", correct: false }, { target: "Fisch mit Reis", en: "Fish with rice", correct: false }] },
      { target: "Was bestellt der Gast als Vorspeise?", en: "What does the guest order as a starter?", options: [{ target: "Einen Salat", en: "A salad", correct: false }, { target: "Eine Suppe", en: "A soup", correct: true }, { target: "Brot", en: "Bread", correct: false }] },
    ],
    [{ target: "die Hauptspeise", en: "main course" }, { target: "beliebt", en: "popular" }],
    { question: "Sie wissen nicht, was Sie bestellen sollen. Was fragen Sie?", questionTranslation: "You don't know what to order. What do you ask?", options: [
      { text: "Was können Sie mir heute empfehlen?", translation: "What can you recommend to me today?", correct: true },
      { text: "Ich möchte bitte zahlen.", translation: "I'd like to pay please.", correct: false },
      { text: "Haben Sie die Speisekarte auf Englisch?", translation: "Do you have the menu in English?", correct: false }
    ] },
  );

  // Module 129: Dietary Needs (B1)
  await addExperience(129, "Vegetarian Options", 2, "Restaurant",
    [
      { target: "Ich bin Vegetarier. Gibt es vegetarische Gerichte?", en: "I'm a vegetarian. Are there vegetarian dishes?", speaker: "customer" },
      { target: "Ja, wir haben mehrere Optionen. Zum Beispiel den Gemüseauflauf.", en: "Yes, we have several options. For example the vegetable casserole.", speaker: "waiter" },
      { target: "Ist der Auflauf auch vegan?", en: "Is the casserole also vegan?", speaker: "customer" },
      { target: "Er enthält Käse und Sahne, also ist er nicht vegan.", en: "It contains cheese and cream, so it's not vegan.", speaker: "waiter" },
      { target: "Gibt es dann ein veganes Gericht?", en: "Is there a vegan dish then?", speaker: "customer" },
    ],
    [{ target: "vegetarisch", en: "vegetarian" }, { target: "vegan", en: "vegan" }, { target: "der Gemüseauflauf", en: "vegetable casserole", article: "der" }],
    [
      { target: "Was sucht der Gast?", en: "What is the guest looking for?", options: [{ target: "Ein Fleischgericht", en: "A meat dish", correct: false }, { target: "Ein vegetarisches Gericht", en: "A vegetarian dish", correct: true }, { target: "Ein Dessert", en: "A dessert", correct: false }] },
      { target: "Warum ist der Auflauf nicht vegan?", en: "Why isn't the casserole vegan?", options: [{ target: "Weil er Fleisch enthält", en: "Because it contains meat", correct: false }, { target: "Weil er Käse und Sahne enthält", en: "Because it contains cheese and cream", correct: true }, { target: "Weil er Gluten enthält", en: "Because it contains gluten", correct: false }] },
    ],
    [{ target: "enthalten", en: "to contain" }, { target: "die Option", en: "option" }],
    { question: "Sie sind Vegetarier und fragen im Restaurant. Was sagen Sie?", questionTranslation: "You're a vegetarian asking at a restaurant. What do you say?", options: [
      { text: "Entschuldigung, gibt es vegetarische Gerichte auf der Karte?", translation: "Excuse me, are there vegetarian dishes on the menu?", correct: true },
      { text: "Ich möchte ein Steak, bitte medium.", translation: "I'd like a steak, please medium.", correct: false },
      { text: "Bringen Sie mir bitte die Rechnung.", translation: "Please bring me the bill.", correct: false }
    ] },
  );

  await addExperience(129, "Food Allergies", 2, "Restaurant",
    [
      { target: "Ich habe eine Nussallergie. Enthält dieses Gericht Nüsse?", en: "I have a nut allergy. Does this dish contain nuts?", speaker: "customer" },
      { target: "Lassen Sie mich in der Küche fragen. Kann ich Ihnen den Salat empfehlen?", en: "Let me ask in the kitchen. Can I recommend the salad?", speaker: "waiter" },
      { target: "Enthält der Salat auch Nüsse?", en: "Does the salad also contain nuts?", speaker: "customer" },
      { target: "Nein, der Salat ist nussfrei. Aber das Dressing enthält Milchprodukte.", en: "No, the salad is nut-free. But the dressing contains dairy.", speaker: "waiter" },
      { target: "Das ist kein Problem. Ich nehme den Salat, aber das Dressing extra.", en: "That's no problem. I'll take the salad, but the dressing on the side.", speaker: "customer" },
    ],
    [{ target: "die Allergie", en: "allergy", article: "die" }, { target: "nussfrei", en: "nut-free" }, { target: "das Dressing", en: "dressing", article: "das" }],
    [
      { target: "Warum fragt der Gast nach Nüssen?", en: "Why does the guest ask about nuts?", options: [{ target: "Er mag keine Nüsse", en: "He doesn't like nuts", correct: false }, { target: "Er hat eine Nussallergie", en: "He has a nut allergy", correct: true }, { target: "Er will Nüsse kaufen", en: "He wants to buy nuts", correct: false }] },
      { target: "Was enthält das Dressing?", en: "What does the dressing contain?", options: [{ target: "Nüsse", en: "Nuts", correct: false }, { target: "Milchprodukte", en: "Dairy products", correct: true }, { target: "Gluten", en: "Gluten", correct: false }] },
    ],
    [{ target: "die Küche", en: "kitchen" }, { target: "fragen", en: "to ask" }],
    { question: "Sie haben eine Allergie. Was sagen Sie im Restaurant?", questionTranslation: "You have an allergy. What do you say at the restaurant?", options: [
      { text: "Entschuldigung, ich habe eine Laktoseintoleranz. Welche Gerichte sind laktosefrei?", translation: "Excuse me, I'm lactose intolerant. Which dishes are lactose-free?", correct: true },
      { text: "Ich möchte ein Bier, bitte.", translation: "I'd like a beer, please.", correct: false },
      { text: "Das Essen war ausgezeichnet.", translation: "The food was excellent.", correct: false }
    ] },
  );

  // Module 130: Complaints (B1)
  await addExperience(130, "Cold Food Complaint", 2, "Restaurant",
    [
      { target: "Entschuldigung, aber mein Essen ist kalt.", en: "Excuse me, but my food is cold.", speaker: "customer" },
      { target: "Das tut mir leid. Ich bringe es sofort in die Küche zurück.", en: "I'm sorry. I'll take it back to the kitchen immediately.", speaker: "waiter" },
      { target: "Ich warte jetzt schon zwanzig Minuten auf das Essen.", en: "I've already been waiting twenty minutes for the food.", speaker: "customer" },
      { target: "Es tut mir wirklich leid. Möchten Sie in der Zwischenzeit etwas trinken?", en: "I'm really sorry. Would you like something to drink in the meantime?", speaker: "waiter" },
      { target: "Ein Glas Wasser wäre nett. Aber ich hätte das Essen gern schnell.", en: "A glass of water would be nice. But I'd like the food quickly.", speaker: "customer" },
    ],
    [{ target: "kalt", en: "cold" }, { target: "leidtun", en: "to be sorry" }, { target: "zurück", en: "back" }],
    [
      { target: "Was ist das Problem?", en: "What is the problem?", options: [{ target: "Das Essen ist kalt", en: "The food is cold", correct: true }, { target: "Das Essen ist zu salzig", en: "The food is too salty", correct: false }, { target: "Das Essen ist verbrannt", en: "The food is burnt", correct: false }] },
      { target: "Wie lange hat der Gast gewartet?", en: "How long has the guest been waiting?", options: [{ target: "Zehn Minuten", en: "Ten minutes", correct: false }, { target: "Zwanzig Minuten", en: "Twenty minutes", correct: true }, { target: "Dreißig Minuten", en: "Thirty minutes", correct: false }] },
    ],
    [{ target: "die Beschwerde", en: "complaint" }, { target: "die Entschuldigung", en: "apology" }],
    { question: "Ihr Essen ist kalt. Was sagen Sie zum Kellner?", questionTranslation: "Your food is cold. What do you say to the waiter?", options: [
      { text: "Entschuldigung, aber mein Essen ist leider kalt. Können Sie es bitte erwärmen?", translation: "Excuse me, but my food is unfortunately cold. Can you please heat it up?", correct: true },
      { text: "Das Essen schmeckt sehr gut.", translation: "The food tastes very good.", correct: false },
      { text: "Ich möchte ein Dessert bestellen.", translation: "I'd like to order a dessert.", correct: false }
    ] },
  );

  await addExperience(130, "Wrong Order", 2, "Restaurant",
    [
      { target: "Ich habe etwas anderes bestellt. Ich wollte das Schnitzel, nicht den Braten.", en: "I ordered something different. I wanted the schnitzel, not the roast.", speaker: "customer" },
      { target: "Oh, Verzeihung. Ich habe die Bestellung verwechselt.", en: "Oh, pardon. I mixed up the order.", speaker: "waiter" },
      { target: "Können Sie das bitte korrigieren? Ich habe wirklich Hunger.", en: "Can you please correct that? I'm really hungry.", speaker: "customer" },
      { target: "Natürlich, sofort. Ich bringe Ihnen das Schnitzel in fünf Minuten.", en: "Of course, right away. I'll bring you the schnitzel in five minutes.", speaker: "waiter" },
      { target: "Danke. Und können Sie den Braten einem anderen Gast geben?", en: "Thanks. And can you give the roast to another guest?", speaker: "customer" },
    ],
    [{ target: "bestellen", en: "to order" }, { target: "verwechseln", en: "to mix up" }, { target: "korrigieren", en: "to correct" }],
    [
      { target: "Was hat der Gast bestellt?", en: "What did the guest order?", options: [{ target: "Den Braten", en: "The roast", correct: false }, { target: "Das Schnitzel", en: "The schnitzel", correct: true }, { target: "Den Salat", en: "The salad", correct: false }] },
      { target: "Was bringt der Kellner in fünf Minuten?", en: "What will the waiter bring in five minutes?", options: [{ target: "Den Braten", en: "The roast", correct: false }, { target: "Das Schnitzel", en: "The schnitzel", correct: true }, { target: "Die Rechnung", en: "The bill", correct: false }] },
    ],
    [{ target: "der Fehler", en: "mistake" }, { target: "das Problem", en: "problem" }],
    { question: "Sie bekommen das falsche Gericht. Was sagen Sie?", questionTranslation: "You got the wrong dish. What do you say?", options: [
      { text: "Entschuldigung, ich habe das nicht bestellt. Ich wollte das Schnitzel.", translation: "Excuse me, I didn't order this. I wanted the schnitzel.", correct: true },
      { text: "Das Essen schmeckt fantastisch!", translation: "The food tastes fantastic!", correct: false },
      { text: "Können Sie mir den Weg zum Hotel zeigen?", translation: "Can you show me the way to the hotel?", correct: false }
    ] },
  );

  // Module 131: Wine & Dining (B2)
  await addExperience(131, "Choosing a Wine", 3, "Restaurant",
    [
      { target: "Wir möchten gern eine Flasche Wein zum Essen bestellen.", en: "We'd like to order a bottle of wine with our meal.", speaker: "customer" },
      { target: "Darf ich fragen, was Sie essen werden? Dann kann ich besser beraten.", en: "May I ask what you'll be eating? Then I can advise better.", speaker: "sommelier" },
      { target: "Ich nehme das Rinderfilet und sie den Lachs.", en: "I'll have the beef fillet and she'll have the salmon.", speaker: "customer" },
      { target: "Dann empfehle ich einen kräftigen Rotwein zum Fleisch und einen leichten Weißwein zum Fisch.", en: "Then I recommend a full-bodied red wine with the meat and a light white wine with the fish.", speaker: "sommelier" },
      { target: "Ausgezeichnet. Wir nehmen einen halben Liter von beiden.", en: "Excellent. We'll take a half liter of each.", speaker: "customer" },
    ],
    [{ target: "die Flasche", en: "bottle", article: "die" }, { target: "beraten", en: "to advise" }, { target: "kräftig", en: "full-bodied" }],
    [
      { target: "Welchen Wein empfiehlt der Sommelier zum Lachs?", en: "Which wine does the sommelier recommend with the salmon?", options: [{ target: "Einen kräftigen Rotwein", en: "A full-bodied red wine", correct: false }, { target: "Einen leichten Weißwein", en: "A light white wine", correct: true }, { target: "Einen Rosé", en: "A rosé", correct: false }] },
      { target: "Wie viel Wein bestellen die Gäste?", en: "How much wine do the guests order?", options: [{ target: "Je einen halben Liter", en: "Half a liter of each", correct: true }, { target: "Je eine ganze Flasche", en: "A whole bottle of each", correct: false }, { target: "Zwei Gläser", en: "Two glasses", correct: false }] },
    ],
    [{ target: "der Sommelier", en: "sommelier" }, { target: "das Rinderfilet", en: "beef fillet" }],
    { question: "Sie möchten Wein zum Essen bestellen. Was fragen Sie?", questionTranslation: "You want to order wine with your meal. What do you ask?", options: [
      { text: "Welchen Wein würden Sie zu diesem Gericht empfehlen?", translation: "Which wine would you recommend with this dish?", correct: true },
      { text: "Ich möchte ein Bier, bitte.", translation: "I'd like a beer, please.", correct: false },
      { text: "Können Sie mir ein Glas Wasser bringen?", translation: "Can you bring me a glass of water?", correct: false }
    ] },
  );

  await addExperience(131, "Fine Dining Experience", 3, "Restaurant",
    [
      { target: "Ich hätte gern das Degustationsmenü mit Weinbegleitung.", en: "I'd like the tasting menu with wine pairing.", speaker: "customer" },
      { target: "Eine ausgezeichnete Wahl. Das Menü besteht aus sechs Gängen.", en: "An excellent choice. The menu consists of six courses.", speaker: "waiter" },
      { target: "Gibt es eine vegetarische Alternative für das Menü?", en: "Is there a vegetarian alternative for the menu?", speaker: "customer" },
      { target: "Selbstverständlich. Der Küchenchef bereitet gern eine vegetarische Variante zu.", en: "Of course. The chef will be happy to prepare a vegetarian version.", speaker: "waiter" },
      { target: "Wunderbar. Ich freue mich auf das Menü.", en: "Wonderful. I'm looking forward to the menu.", speaker: "customer" },
    ],
    [{ target: "das Degustationsmenü", en: "tasting menu", article: "das" }, { target: "der Gang", en: "course", article: "der" }, { target: "der Küchenchef", en: "head chef", article: "der" }],
    [
      { target: "Wie viele Gänge hat das Menü?", en: "How many courses does the menu have?", options: [{ target: "Vier Gänge", en: "Four courses", correct: false }, { target: "Sechs Gänge", en: "Six courses", correct: true }, { target: "Acht Gänge", en: "Eight courses", correct: false }] },
      { target: "Gibt es eine vegetarische Option?", en: "Is there a vegetarian option?", options: [{ target: "Ja, der Küchenchef macht eine Variante", en: "Yes, the chef will make a version", correct: true }, { target: "Nein, nur mit Fleisch", en: "No, only with meat", correct: false }, { target: "Nur auf Vorbestellung", en: "Only on pre-order", correct: false }] },
    ],
    [{ target: "die Alternative", en: "alternative" }, { target: "vorbereiten", en: "to prepare" }],
    { question: "Sie möchten das Degustationsmenü bestellen. Was sagen Sie?", questionTranslation: "You want to order the tasting menu. What do you say?", options: [
      { text: "Ich hätte gern das Degustationsmenü mit der Weinbegleitung.", translation: "I'd like the tasting menu with the wine pairing.", correct: true },
      { text: "Einmal Pommes mit Ketchup, bitte.", translation: "Fries with ketchup, please.", correct: false },
      { text: "Haben Sie einen Tisch für zwei?", translation: "Do you have a table for two?", correct: false }
    ] },
  );

  // Module 132: Special Occasions (B2)
  await addExperience(132, "Birthday Dinner", 3, "Restaurant",
    [
      { target: "Ich möchte einen Tisch für eine Geburtstagsfeier reservieren.", en: "I'd like to reserve a table for a birthday celebration.", speaker: "customer" },
      { target: "Gerne. Wie viele Gäste werden erwartet?", en: "Gladly. How many guests are expected?", speaker: "host" },
      { target: "Wir sind insgesamt zehn Personen. Haben Sie einen separaten Raum?", en: "We're ten people total. Do you have a private room?", speaker: "customer" },
      { target: "Ja, wir haben einen Raum für bis zu zwölf Personen.", en: "Yes, we have a room for up to twelve people.", speaker: "host" },
      { target: "Perfekt. Können wir auch eine Torte mitbringen?", en: "Perfect. Can we also bring a cake?", speaker: "customer" },
    ],
    [{ target: "die Feier", en: "celebration", article: "die" }, { target: "der Gast", en: "guest", article: "der" }, { target: "separat", en: "private/separate" }],
    [
      { target: "Für wie viele Personen reserviert der Gast?", en: "For how many people does the guest reserve?", options: [{ target: "Acht Personen", en: "Eight people", correct: false }, { target: "Zehn Personen", en: "Ten people", correct: true }, { target: "Zwölf Personen", en: "Twelve people", correct: false }] },
      { target: "Was möchte der Gast mitbringen?", en: "What does the guest want to bring?", options: [{ target: "Eine Torte", en: "A cake", correct: true }, { target: "Geschenke", en: "Gifts", correct: false }, { target: "Luftballons", en: "Balloons", correct: false }] },
    ],
    [{ target: "die Geburtstagsfeier", en: "birthday party" }, { target: "mitbringen", en: "to bring along" }],
    { question: "Sie planen eine Geburtstagsfeier im Restaurant. Was fragen Sie?", questionTranslation: "You're planning a birthday party at a restaurant. What do you ask?", options: [
      { text: "Haben Sie einen separaten Raum für eine Feier mit zehn Personen?", translation: "Do you have a private room for a party of ten?", correct: true },
      { text: "Ich hätte gern ein Glas Wasser.", translation: "I'd like a glass of water.", correct: false },
      { text: "Wie spät ist es?", translation: "What time is it?", correct: false }
    ] },
  );

  await addExperience(132, "Business Dinner", 3, "Restaurant",
    [
      { target: "Vielen Dank für die Einladung zum Geschäftsessen.", en: "Thank you very much for the invitation to the business dinner.", speaker: "guest" },
      { target: "Gerne. Ich hoffe, das Restaurant gefällt Ihnen.", en: "You're welcome. I hope you like the restaurant.", speaker: "host" },
      { target: "Es ist hervorragend. Die Atmosphäre ist sehr angenehm.", en: "It's excellent. The atmosphere is very pleasant.", speaker: "guest" },
      { target: "Darf ich vorschlagen, dass wir mit einem Glas Champagner auf die Zusammenarbeit anstoßen?", en: "May I suggest we toast to the cooperation with a glass of champagne?", speaker: "host" },
      { target: "Eine ausgezeichnete Idee. Auf eine erfolgreiche Partnerschaft!", en: "An excellent idea. To a successful partnership!", speaker: "guest" },
    ],
    [{ target: "das Geschäftsessen", en: "business dinner", article: "das" }, { target: "die Atmosphäre", en: "atmosphere", article: "die" }, { target: "anstoßen", en: "to toast" }],
    [
      { target: "Warum sind die Gäste im Restaurant?", en: "Why are the guests at the restaurant?", options: [{ target: "Für eine Hochzeit", en: "For a wedding", correct: false }, { target: "Für ein Geschäftsessen", en: "For a business dinner", correct: true }, { target: "Für einen Geburtstag", en: "For a birthday", correct: false }] },
      { target: "Worauf stoßen die Gäste an?", en: "What do the guests toast to?", options: [{ target: "Auf das Essen", en: "To the food", correct: false }, { target: "Auf eine erfolgreiche Zusammenarbeit", en: "To a successful cooperation", correct: true }, { target: "Auf das schöne Wetter", en: "To the nice weather", correct: false }] },
    ],
    [{ target: "vorschlagen", en: "to suggest" }, { target: "die Zusammenarbeit", en: "cooperation" }],
    { question: "Sie sind bei einem Geschäftsessen. Was sagen Sie?", questionTranslation: "You're at a business dinner. What do you say?", options: [
      { text: "Vielen Dank für die Einladung. Darf ich auf unsere Zusammenarbeit anstoßen?", translation: "Thank you for the invitation. May I toast to our cooperation?", correct: true },
      { text: "Ich möchte bitte zahlen.", translation: "I'd like to pay please.", correct: false },
      { text: "Die Toilette ist besetzt.", translation: "The toilet is occupied.", correct: false }
    ] },
  );
}