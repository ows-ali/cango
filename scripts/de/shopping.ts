import { addExperience } from "../seed-helpers";

export async function seedShopping() {
  // Module 133: Light Shopping (A2)
  await addExperience(133, "Buying Groceries", 1, "Shopping",
    [
      { target: "Ich möchte einkaufen gehen. Was brauchen wir?", en: "I want to go shopping. What do we need?" },
      { target: "Wir brauchen Milch, Eier, Brot und Obst.", en: "We need milk, eggs, bread and fruit." },
      { target: "Wie viel kostet die Milch hier?", en: "How much does the milk cost here?" },
      { target: "Die Milch kostet 1,49 Euro.", en: "The milk costs 1.49 euros." },
      { target: "Das ist günstig. Ich nehme zwei Flaschen.", en: "That's cheap. I'll take two bottles." },
    ],
    [{ target: "einkaufen", en: "to shop" }, { target: "das Obst", en: "fruit", article: "das" }, { target: "die Flasche", en: "bottle", article: "die", plural: "die Flaschen" }],
    [
      { target: "Was möchte die Person kaufen?", en: "What does the person want to buy?", options: [{ target: "Milch, Eier, Brot und Obst", en: "Milk, eggs, bread and fruit", correct: true }, { target: "Fleisch und Käse", en: "Meat and cheese", correct: false }, { target: "Süßigkeiten und Getränke", en: "Candy and drinks", correct: false }] },
      { target: "Wie viel kostet die Milch?", en: "How much does the milk cost?", options: [{ target: "1,49 Euro", en: "1.49 euros", correct: true }, { target: "2,49 Euro", en: "2.49 euros", correct: false }, { target: "0,99 Euro", en: "0.99 euros", correct: false }] },
    ],
    [{ target: "brauchen", en: "to need" }, { target: "günstig", en: "cheap" }, { target: "nehmen", en: "to take" }],
    { question: "Was sagen Sie im Supermarkt?", questionTranslation: "What do you say at the supermarket?", options: [
      { text: "Entschuldigung, wo finde ich die Milch?", translation: "Excuse me, where can I find the milk?", correct: true },
      { text: "Ich möchte ein Hotelzimmer buchen.", translation: "I'd like to book a hotel room.", correct: false },
      { text: "Wie spät ist es?", translation: "What time is it?", correct: false }
    ] },
  );

  await addExperience(133, "At the Bakery", 1, "Shopping",
    [
      { target: "Guten Morgen, ich hätte gern drei Brötchen.", en: "Good morning, I'd like three rolls." },
      { target: "Möchten Sie sonst noch etwas?", en: "Would you like anything else?" },
      { target: "Ja, ein Stück Kuchen bitte. Was kostet der Kuchen?", en: "Yes, a piece of cake please. How much does the cake cost?" },
      { target: "Das Stück kostet 2,80 Euro.", en: "The piece costs 2.80 euros." },
      { target: "Gut, ich nehme auch ein Stück Apfelkuchen.", en: "Good, I'll also take a piece of apple cake." },
    ],
    [{ target: "das Brötchen", en: "roll/bread roll", article: "das", plural: "die Brötchen" }, { target: "der Kuchen", en: "cake", article: "der" }, { target: "das Stück", en: "piece", article: "das" }],
    [
      { target: "Was bestellt die Person zuerst?", en: "What does the person order first?", options: [{ target: "Drei Brötchen", en: "Three rolls", correct: true }, { target: "Ein Stück Kuchen", en: "A piece of cake", correct: false }, { target: "Ein Brot", en: "A loaf of bread", correct: false }] },
      { target: "Wie viel kostet der Kuchen?", en: "How much does the cake cost?", options: [{ target: "2,50 Euro", en: "2.50 euros", correct: false }, { target: "2,80 Euro", en: "2.80 euros", correct: true }, { target: "3,00 Euro", en: "3.00 euros", correct: false }] },
    ],
    [{ target: "hätte gern", en: "would like" }, { target: "die Bäckerei", en: "bakery" }],
    { question: "Was sagen Sie an der Bäckerei?", questionTranslation: "What do you say at the bakery?", options: [
      { text: "Ich hätte gern ein halbes Brot, bitte.", translation: "I'd like half a loaf of bread, please.", correct: true },
      { text: "Ich möchte ein Ticket kaufen.", translation: "I'd like to buy a ticket.", correct: false },
      { text: "Wo ist die nächste Bank?", translation: "Where is the nearest bank?", correct: false }
    ] },
  );

  await addExperience(133, "At the Deli Counter", 1, "Shopping",
    [
      { target: "Guten Tag, 200 Gramm Käse, bitte.", en: "Hello, 200 grams of cheese, please." },
      { target: "Welchen Käse möchten Sie?", en: "Which cheese would you like?" },
      { target: "Den Gouda, bitte. Können Sie das in Scheiben schneiden?", en: "The Gouda, please. Can you cut that into slices?" },
      { target: "Ja, natürlich. Soll es etwas mehr sein?", en: "Yes, of course. Should it be a bit more?" },
      { target: "Nein, danke. Das reicht.", en: "No, thanks. That's enough." },
    ],
    [{ target: "der Käse", en: "cheese", article: "der" }, { target: "das Gramm", en: "gram", article: "das" }, { target: "die Scheibe", en: "slice", article: "die" }],
    [
      { target: "Wie viel Käse möchte die Person?", en: "How much cheese does the person want?", options: [{ target: "100 Gramm", en: "100 grams", correct: false }, { target: "200 Gramm", en: "200 grams", correct: true }, { target: "300 Gramm", en: "300 grams", correct: false }] },
      { target: "Welchen Käse bestellt sie?", en: "Which cheese does she order?", options: [{ target: "Emmentaler", en: "Emmental", correct: false }, { target: "Gouda", en: "Gouda", correct: true }, { target: "Camembert", en: "Camembert", correct: false }] },
    ],
    [{ target: "schneiden", en: "to cut" }, { target: "reichen", en: "to be enough" }],
    { question: "Was sagen Sie an der Bedientheke?", questionTranslation: "What do you say at the service counter?", options: [
      { text: "Können Sie mir 300 Gramm Schinken abwiegen?", translation: "Can you weigh me 300 grams of ham?", correct: true },
      { text: "Ich suche den Ausgang.", translation: "I'm looking for the exit.", correct: false },
      { text: "Haben Sie Briefmarken?", translation: "Do you have stamps?", correct: false }
    ] },
  );

  // Module 134: Clothes & Sizes (A2)
  await addExperience(134, "Trying on Clothes", 1, "Shopping",
    [
      { target: "Kann ich das anprobieren?", en: "Can I try this on?" },
      { target: "Ja, die Umkleidekabinen sind hinten links.", en: "Yes, the fitting rooms are at the back left." },
      { target: "Wo ist die Umkleidekabine?", en: "Where is the fitting room?" },
      { target: "Dort drüben neben den Kassen.", en: "Over there next to the checkout counters." },
      { target: "Danke. Ich schaue mal, ob es passt.", en: "Thanks. I'll see if it fits." },
    ],
    [{ target: "anprobieren", en: "to try on" }, { target: "die Umkleidekabine", en: "fitting room", article: "die" }],
    [
      { target: "Was möchte die Kundin machen?", en: "What does the customer want to do?", options: [{ target: "Die Hose kaufen", en: "Buy the pants", correct: false }, { target: "Die Hose anprobieren", en: "Try on the pants", correct: true }, { target: "Die Hose umtauschen", en: "Exchange the pants", correct: false }] },
      { target: "Wo ist die Umkleidekabine?", en: "Where is the fitting room?", options: [{ target: "Hinten links", en: "Back left", correct: true }, { target: "Vorne rechts", en: "Front right", correct: false }, { target: "Neben dem Eingang", en: "Next to the entrance", correct: false }] },
    ],
    [{ target: "passen", en: "to fit" }, { target: "die Hose", en: "pants/trousers", article: "die" }],
    { question: "Sie möchten eine Hose anprobieren. Was sagen Sie?", questionTranslation: "You want to try on pants. What do you say?", options: [
      { text: "Kann ich diese Hose anprobieren?", translation: "Can I try on these pants?", correct: true },
      { text: "Wie viel kostet diese Hose?", translation: "How much do these pants cost?", correct: false },
      { text: "Ich möchte diese Hose umtauschen.", translation: "I'd like to exchange these pants.", correct: false }
    ] },
  );

  await addExperience(134, "Asking for a Different Size", 1, "Shopping",
    [
      { target: "Die Hose gefällt mir, aber sie ist zu groß.", en: "I like the pants, but they are too big." },
      { target: "Haben Sie das in Größe M?", en: "Do you have this in size M?" },
      { target: "Ja, wir haben Größe M auf Lager.", en: "Yes, we have size M in stock." },
      { target: "Kann ich die auch in Schwarz bekommen?", en: "Can I also get them in black?" },
      { target: "Ja, hier ist die Hose in Schwarz, Größe M.", en: "Yes, here are the pants in black, size M." },
    ],
    [{ target: "die Größe", en: "size", article: "die" }, { target: "auf Lager", en: "in stock" }, { target: "gefallen", en: "to like" }],
    [
      { target: "Warum passt die Hose nicht?", en: "Why don't the pants fit?", options: [{ target: "Sie ist zu klein", en: "They are too small", correct: false }, { target: "Sie ist zu groß", en: "They are too big", correct: true }, { target: "Sie ist zu kurz", en: "They are too short", correct: false }] },
      { target: "Welche Größe sucht die Kundin?", en: "Which size is the customer looking for?", options: [{ target: "Größe S", en: "Size S", correct: false }, { target: "Größe M", en: "Size M", correct: true }, { target: "Größe L", en: "Size L", correct: false }] },
    ],
    [{ target: "zu groß", en: "too big" }, { target: "bekommen", en: "to get" }],
    { question: "Das Kleid ist zu eng. Was sagen Sie?", questionTranslation: "The dress is too tight. What do you say?", options: [
      { text: "Haben Sie dieses Kleid in einer größeren Größe?", translation: "Do you have this dress in a larger size?", correct: true },
      { text: "Das Kleid ist sehr schön.", translation: "The dress is very nice.", correct: false },
      { text: "Ich möchte das Kleid nicht.", translation: "I don't want the dress.", correct: false }
    ] },
  );

  await addExperience(134, "Choosing Colors", 1, "Shopping",
    [
      { target: "Ich hätte gern das Kleid in Blau.", en: "I'd like the dress in blue." },
      { target: "Das blaue Kleid ist leider ausverkauft.", en: "The blue dress is unfortunately sold out." },
      { target: "Gibt es das Kleid auch in Rot?", en: "Is the dress also available in red?" },
      { target: "Ja, in Rot haben wir es noch in Ihrer Größe.", en: "Yes, in red we still have it in your size." },
      { target: "Perfekt, das rote Kleid gefällt mir auch sehr gut.", en: "Perfect, I also like the red dress very much." },
    ],
    [{ target: "das Kleid", en: "dress", article: "das" }, { target: "ausverkauft", en: "sold out" }, { target: "rot", en: "red" }],
    [
      { target: "Welche Farbe möchte die Kundin zuerst?", en: "Which color does the customer want first?", options: [{ target: "Rot", en: "Red", correct: false }, { target: "Blau", en: "Blue", correct: true }, { target: "Grün", en: "Green", correct: false }] },
      { target: "Warum kann sie das blaue Kleid nicht kaufen?", en: "Why can't she buy the blue dress?", options: [{ target: "Es ist zu teuer", en: "It's too expensive", correct: false }, { target: "Es ist ausverkauft", en: "It's sold out", correct: true }, { target: "Es passt nicht", en: "It doesn't fit", correct: false }] },
    ],
    [{ target: "die Farbe", en: "color", article: "die" }, { target: "leider", en: "unfortunately" }],
    { question: "Sie suchen ein bestimmtes Kleid. Was fragen Sie?", questionTranslation: "You're looking for a specific dress. What do you ask?", options: [
      { text: "Gibt es dieses Kleid auch in Grün?", translation: "Is this dress also available in green?", correct: true },
      { text: "Wo ist die nächste Bushaltestelle?", translation: "Where is the next bus stop?", correct: false },
      { text: "Können Sie mir die Uhrzeit sagen?", translation: "Can you tell me the time?", correct: false }
    ] },
  );

  // Module 135: Comparing Products (B1)
  await addExperience(135, "Comparing Features", 2, "Shopping",
    [
      { target: "Dieses Modell hat mehr Funktionen als das andere.", en: "This model has more features than the other." },
      { target: "Welches ist besser für den täglichen Gebrauch?", en: "Which one is better for daily use?" },
      { target: "Das günstigere Modell ist einfacher zu bedienen.", en: "The cheaper model is easier to use." },
      { target: "Aber das teurere Modell hat eine längere Garantie.", en: "But the more expensive model has a longer warranty." },
      { target: "Dann nehme ich das teurere, weil es zuverlässiger ist.", en: "Then I'll take the more expensive one because it's more reliable." },
    ],
    [{ target: "das Modell", en: "model", article: "das" }, { target: "die Funktion", en: "feature/function", article: "die" }, { target: "die Garantie", en: "warranty", article: "die" }],
    [
      { target: "Welches Modell hat mehr Funktionen?", en: "Which model has more features?", options: [{ target: "Das günstigere", en: "The cheaper one", correct: false }, { target: "Das teurere", en: "The more expensive one", correct: true }, { target: "Beide gleich", en: "Both the same", correct: false }] },
      { target: "Warum nimmt die Person das teurere Modell?", en: "Why does the person take the more expensive model?", options: [{ target: "Es ist schöner", en: "It's prettier", correct: false }, { target: "Es ist zuverlässiger", en: "It's more reliable", correct: true }, { target: "Es ist leichter", en: "It's lighter", correct: false }] },
    ],
    [{ target: "besser", en: "better" }, { target: "einfacher", en: "easier" }, { target: "zuverlässiger", en: "more reliable" }],
    { question: "Sie vergleichen zwei Handys. Was sagen Sie?", questionTranslation: "You're comparing two phones. What do you say?", options: [
      { text: "Welches Handy hat die bessere Kamera?", translation: "Which phone has the better camera?", correct: true },
      { text: "Ich möchte ein Eis essen.", translation: "I want to eat ice cream.", correct: false },
      { text: "Wo ist die Bibliothek?", translation: "Where is the library?", correct: false }
    ] },
  );

  await addExperience(135, "Price Comparison", 2, "Shopping",
    [
      { target: "Das ist günstiger, aber die Qualität ist schlechter.", en: "That is cheaper, but the quality is worse." },
      { target: "Stimmt, aber der Preisunterschied ist ziemlich groß.", en: "True, but the price difference is quite large." },
      { target: "Wenn ich auf das billigere Modell verzichte, spare ich Geld.", en: "If I go without the cheaper model, I save money." },
      { target: "Aber das hochwertigere Produkt hält länger.", en: "But the higher-quality product lasts longer." },
      { target: "Du hast recht. Lieber einmal teuer kaufen als dreimal billig.", en: "You're right. Better to buy expensive once than cheap three times." },
    ],
    [{ target: "die Qualität", en: "quality", article: "die" }, { target: "der Preisunterschied", en: "price difference", article: "der" }, { target: "hochwertig", en: "high-quality" }],
    [
      { target: "Was ist der Nachteil des günstigeren Produkts?", en: "What is the disadvantage of the cheaper product?", options: [{ target: "Es ist zu groß", en: "It's too big", correct: false }, { target: "Die Qualität ist schlechter", en: "The quality is worse", correct: true }, { target: "Es gibt es nicht in Blau", en: "It's not available in blue", correct: false }] },
      { target: "Was ist besser auf lange Sicht?", en: "What is better in the long run?", options: [{ target: "Ein billiges Produkt", en: "A cheap product", correct: false }, { target: "Ein hochwertiges Produkt", en: "A high-quality product", correct: true }, { target: "Kein Produkt zu kaufen", en: "To buy no product", correct: false }] },
    ],
    [{ target: "günstiger", en: "cheaper" }, { target: "schlechter", en: "worse" }, { target: "halten", en: "to last" }],
    { question: "Was sagen Sie beim Preisvergleich?", questionTranslation: "What do you say when comparing prices?", options: [
      { text: "Dieses Produkt ist billiger, aber die Qualität ist besser.", translation: "This product is cheaper, but the quality is better.", correct: true },
      { text: "Guten Appetit!", translation: "Enjoy your meal!", correct: false },
      { text: "Können Sie mir den Weg zeigen?", translation: "Can you show me the way?", correct: false }
    ] },
  );

  // Module 136: Returns & Exchanges (B1)
  await addExperience(136, "Returning an Item", 2, "Shopping",
    [
      { target: "Ich möchte das zurückgeben.", en: "I would like to return this." },
      { target: "Haben Sie den Kassenbon?", en: "Do you have the receipt?" },
      { target: "Ja, hier ist der Kassenbon.", en: "Yes, here is the receipt." },
      { target: "Warum möchten Sie es zurückgeben?", en: "Why would you like to return it?" },
      { target: "Es gefällt mir nicht. Die Farbe ist anders als online.", en: "I don't like it. The color is different than online." },
    ],
    [{ target: "zurückgeben", en: "to return" }, { target: "der Kassenbon", en: "receipt", article: "der" }],
    [
      { target: "Was möchte die Kundin mit dem Artikel machen?", en: "What does the customer want to do with the item?", options: [{ target: "Ihn umtauschen", en: "Exchange it", correct: false }, { target: "Ihn zurückgeben", en: "Return it", correct: true }, { target: "Ihn kaufen", en: "Buy it", correct: false }] },
      { target: "Warum möchte sie den Artikel zurückgeben?", en: "Why does she want to return the item?", options: [{ target: "Er ist kaputt", en: "It's broken", correct: false }, { target: "Die Farbe ist anders", en: "The color is different", correct: true }, { target: "Er ist zu teuer", en: "It's too expensive", correct: false }] },
    ],
    [{ target: "die Rückgabe", en: "return" }, { target: "anders", en: "different" }],
    { question: "Sie möchten etwas zurückgeben. Was sagen Sie?", questionTranslation: "You want to return something. What do you say?", options: [
      { text: "Guten Tag, ich möchte diesen Artikel zurückgeben.", translation: "Hello, I'd like to return this item.", correct: true },
      { text: "Ich möchte ein Eis bestellen.", translation: "I'd like to order ice cream.", correct: false },
      { text: "Haben Sie eine Bahncard?", translation: "Do you have a Bahncard?", correct: false }
    ] },
  );

  await addExperience(136, "Exchanging for a Different Size", 2, "Shopping",
    [
      { target: "Kann ich das umtauschen?", en: "Can I exchange this?" },
      { target: "Die Jacke ist zu klein für mich.", en: "The jacket is too small for me." },
      { target: "Haben Sie den Kassenbon dabei?", en: "Do you have the receipt with you?" },
      { target: "Ja, hier. Ich hätte gern eine Nummer größer.", en: "Yes, here. I'd like one size larger." },
      { target: "Gerne. Wir tauschen die Jacke in Größe L um.", en: "Certainly. We'll exchange the jacket for size L." },
    ],
    [{ target: "umtauschen", en: "to exchange" }, { target: "die Jacke", en: "jacket", article: "die" }],
    [
      { target: "Warum möchte die Kundin die Jacke umtauschen?", en: "Why does the customer want to exchange the jacket?", options: [{ target: "Sie ist zu groß", en: "It's too big", correct: false }, { target: "Sie ist zu klein", en: "It's too small", correct: true }, { target: "Sie gefällt ihr nicht", en: "She doesn't like it", correct: false }] },
      { target: "Welche Größe möchte sie haben?", en: "Which size does she want?", options: [{ target: "Größe S", en: "Size S", correct: false }, { target: "Größe M", en: "Size M", correct: false }, { target: "Größe L", en: "Size L", correct: true }] },
    ],
    [{ target: "die Jacke", en: "jacket" }, { target: "die Nummer", en: "size/number" }],
    { question: "Die Schuhe sind zu eng. Was sagen Sie?", questionTranslation: "The shoes are too tight. What do you say?", options: [
      { text: "Kann ich diese Schuhe eine Größe größer umtauschen?", translation: "Can I exchange these shoes for a size larger?", correct: true },
      { text: "Die Schuhe sind sehr schön.", translation: "The shoes are very nice.", correct: false },
      { text: "Wie viel kosten die Schuhe?", translation: "How much do the shoes cost?", correct: false }
    ] },
  );

  // Module 137: Customer Service (B2)
  await addExperience(137, "Warranty Claim", 3, "Shopping",
    [
      { target: "Das Gerät ist defekt. Ich habe Garantie darauf.", en: "The device is defective. I have a warranty on it." },
      { target: "Haben Sie die Garantieurkunde und den Kaufbeleg?", en: "Do you have the warranty certificate and the proof of purchase?" },
      { target: "Ja, alle Unterlagen sind vollständig.", en: "Yes, all documents are complete." },
      { target: "Wir können das Gerät kostenlos reparieren oder austauschen.", en: "We can repair or replace the device free of charge." },
      { target: "Das wäre mir lieber. Ich möchte ein Ersatzgerät.", en: "I would prefer that. I would like a replacement device." },
    ],
    [{ target: "das Gerät", en: "device", article: "das" }, { target: "defekt", en: "defective" }, { target: "die Garantieurkunde", en: "warranty certificate", article: "die" }],
    [
      { target: "Was ist mit dem Gerät passiert?", en: "What happened to the device?", options: [{ target: "Es ist verloren gegangen", en: "It was lost", correct: false }, { target: "Es ist defekt", en: "It is defective", correct: true }, { target: "Es ist ausverkauft", en: "It is sold out", correct: false }] },
      { target: "Was bietet der Kundendienst an?", en: "What does the customer service offer?", options: [{ target: "Eine Rückerstattung", en: "A refund", correct: false }, { target: "Reparatur oder Austausch", en: "Repair or replacement", correct: true }, { target: "Einen Gutschein", en: "A voucher", correct: false }] },
    ],
    [{ target: "die Reparatur", en: "repair" }, { target: "der Austausch", en: "replacement" }, { target: "der Kaufbeleg", en: "proof of purchase" }],
    { question: "Was sagen Sie beim Kundendienst?", questionTranslation: "What do you say at customer service?", options: [
      { text: "Ich habe dieses Gerät vor zwei Wochen gekauft und es funktioniert nicht.", translation: "I bought this device two weeks ago and it doesn't work.", correct: true },
      { text: "Können Sie mir ein Taxi rufen?", translation: "Can you call me a taxi?", correct: false },
      { text: "Ich möchte ein Zimmer buchen.", translation: "I'd like to book a room.", correct: false }
    ] },
  );

  await addExperience(137, "Complaint About a Product", 3, "Shopping",
    [
      { target: "Ich bin nicht zufrieden mit dem Produkt.", en: "I am not satisfied with the product." },
      { target: "Was ist das Problem genau?", en: "What exactly is the problem?" },
      { target: "Die Verarbeitung ist mangelhaft und das Material ist billig.", en: "The workmanship is poor and the material is cheap." },
      { target: "Das tut mir leid. Wir werden den Fall prüfen.", en: "I'm sorry about that. We will review the case." },
      { target: "Ich erwarte eine vollständige Rückerstattung des Kaufpreises.", en: "I expect a full refund of the purchase price." },
    ],
    [{ target: "die Verarbeitung", en: "workmanship", article: "die" }, { target: "das Material", en: "material", article: "das" }, { target: "die Rückerstattung", en: "refund", article: "die" }],
    [
      { target: "Warum ist die Kundin unzufrieden?", en: "Why is the customer dissatisfied?", options: [{ target: "Das Produkt ist zu teuer", en: "The product is too expensive", correct: false }, { target: "Die Verarbeitung ist mangelhaft", en: "The workmanship is poor", correct: true }, { target: "Die Farbe gefällt ihr nicht", en: "She doesn't like the color", correct: false }] },
      { target: "Was erwartet die Kundin?", en: "What does the customer expect?", options: [{ target: "Einen Umtausch", en: "An exchange", correct: false }, { target: "Eine Reparatur", en: "A repair", correct: false }, { target: "Eine vollständige Rückerstattung", en: "A full refund", correct: true }] },
    ],
    [{ target: "mangelhaft", en: "poor/defective" }, { target: "der Kaufpreis", en: "purchase price" }],
    { question: "Sie beschweren sich über ein Produkt. Was sagen Sie?", questionTranslation: "You complain about a product. What do you say?", options: [
      { text: "Ich möchte eine vollständige Rückerstattung, da das Produkt nicht der Beschreibung entspricht.", translation: "I want a full refund because the product does not match the description.", correct: true },
      { text: "Können Sie mich mit der Geschäftsleitung verbinden?", translation: "Can you connect me with management?", correct: false },
      { text: "Ich werde eine negative Bewertung schreiben.", translation: "I will write a negative review.", correct: false }
    ] },
  );

  // Module 138: Negotiating (B2)
  await addExperience(138, "Haggling at a Flea Market", 3, "Shopping",
    [
      { target: "Können Sie einen besseren Preis machen?", en: "Can you make a better price?" },
      { target: "Die Vase kostet 30 Euro, das ist schon günstig.", en: "The vase costs 30 euros, that's already cheap." },
      { target: "20 Euro wäre mein Angebot. Was sagen Sie dazu?", en: "20 euros would be my offer. What do you say to that?" },
      { target: "25 Euro ist der niedrigste Preis, den ich akzeptieren kann.", en: "25 euros is the lowest price I can accept." },
      { target: "Abgemacht! Ich nehme die Vase für 25 Euro.", en: "Deal! I'll take the vase for 25 euros." },
    ],
    [{ target: "der Flohmarkt", en: "flea market", article: "der" }, { target: "das Angebot", en: "offer", article: "das" }, { target: "akzeptieren", en: "to accept" }],
    [
      { target: "Was bietet die Kundin für die Vase?", en: "What does the customer offer for the vase?", options: [{ target: "15 Euro", en: "15 euros", correct: false }, { target: "20 Euro", en: "20 euros", correct: true }, { target: "25 Euro", en: "25 euros", correct: false }] },
      { target: "Auf welchen Preis einigen sie sich?", en: "What price do they agree on?", options: [{ target: "20 Euro", en: "20 euros", correct: false }, { target: "25 Euro", en: "25 euros", correct: true }, { target: "30 Euro", en: "30 euros", correct: false }] },
    ],
    [{ target: "der Preis", en: "price" }, { target: "abgemacht", en: "deal/agreed" }],
    { question: "Sie sind auf dem Flohmarkt. Was sagen Sie?", questionTranslation: "You are at the flea market. What do you say?", options: [
      { text: "Können Sie mir einen besseren Preis anbieten?", translation: "Can you offer me a better price?", correct: true },
      { text: "Ich möchte den Artikel zurückgeben.", translation: "I'd like to return the item.", correct: false },
      { text: "Wo ist die nächste U-Bahn?", translation: "Where is the nearest subway?", correct: false }
    ] },
  );

  await addExperience(138, "Bulk Discount", 3, "Shopping",
    [
      { target: "Wenn ich drei nehme, gibt es dann Rabatt?", en: "If I take three, is there a discount then?" },
      { target: "Ab drei Exemplaren gewähren wir 10 Prozent Mengenrabatt.", en: "From three copies we grant a 10 percent bulk discount." },
      { target: "Kann ich die Farben frei wählen?", en: "Can I choose the colors freely?" },
      { target: "Ja, Sie können zwischen Blau, Rot und Grün wählen.", en: "Yes, you can choose between blue, red and green." },
      { target: "Dann nehme ich drei Stück, eine von jeder Farbe.", en: "Then I'll take three pieces, one of each color." },
    ],
    [{ target: "der Rabatt", en: "discount", article: "der" }, { target: "der Mengenrabatt", en: "bulk discount", article: "der" }, { target: "wählen", en: "to choose" }],
    [
      { target: "Welchen Rabatt bekommt die Kundin?", en: "What discount does the customer get?", options: [{ target: "5 Prozent", en: "5 percent", correct: false }, { target: "10 Prozent", en: "10 percent", correct: true }, { target: "15 Prozent", en: "15 percent", correct: false }] },
      { target: "Welche Farben kann die Kundin wählen?", en: "Which colors can the customer choose?", options: [{ target: "Nur Blau", en: "Only blue", correct: false }, { target: "Blau, Rot und Grün", en: "Blue, red and green", correct: true }, { target: "Schwarz und Weiß", en: "Black and white", correct: false }] },
    ],
    [{ target: "gewähren", en: "to grant" }, { target: "das Exemplar", en: "copy/item" }],
    { question: "Sie möchten mehrere Artikel kaufen. Was fragen Sie?", questionTranslation: "You want to buy multiple items. What do you ask?", options: [
      { text: "Gibt es einen Mengenrabatt, wenn ich mehrere Exemplare kaufe?", translation: "Is there a bulk discount if I buy multiple copies?", correct: true },
      { text: "Ich hätte gern eine Tüte, bitte.", translation: "I'd like a bag, please.", correct: false },
      { text: "Können Sie mir die Uhrzeit sagen?", translation: "Can you tell me the time?", correct: false }
    ] },
  );
}
