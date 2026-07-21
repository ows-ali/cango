export async function seedRestaurant(addExperience: Function) {
  // === Module 27 (A2, level=1) - Ordering Food ===
  await addExperience(27, "Booking a Restaurant Table", 1, "Restaurant",
    [
      { it: "Buonasera, vorrei prenotare un tavolo per stasera.", en: "Good evening, I'd like to book a table for tonight.", speaker: "customer" },
      { it: "Per quante persone?", en: "For how many people?", speaker: "waiter" },
      { it: "Per due persone, alle 20:00.", en: "For two people, at 8 PM.", speaker: "customer" },
      { it: "Va bene. Fumo o non fumo?", en: "Alright. Smoking or non-smoking?", speaker: "waiter" },
      { it: "Non fumo, grazie. Vorrei un tavolo vicino alla finestra.", en: "Non-smoking, thanks. I'd like a table near the window.", speaker: "customer" },
    ],
    [{ it: "il tavolo", en: "table", article: "il", plural: "i tavoli" }, { it: "prenotare", en: "to book" }, { it: "la finestra", en: "window", article: "la" }],
    [
      { it: "Cosa vuole fare il cliente?", en: "What does the customer want to do?", options: [{ it: "Ordinare da mangiare", en: "Order food", correct: false }, { it: "Prenotare un tavolo", en: "Book a table", correct: true }, { it: "Pagare il conto", en: "Pay the bill", correct: false }] },
      { it: "Per quante persone è la prenotazione?", en: "For how many people is the booking?", options: [{ it: "Quattro", en: "Four", correct: false }, { it: "Due", en: "Two", correct: true }, { it: "Una", en: "One", correct: false }] },
    ],
    [{ it: "la prenotazione", en: "reservation" }, { it: "il fumo", en: "smoking" }, { it: "il cameriere", en: "waiter" }],
    { question: "Cosa dice per prenotare un tavolo?", questionTranslation: "What do you say to book a table?", options: [
      { text: "Vorrei prenotare un tavolo per due alle 20:00.", translation: "I'd like to book a table for two at 8 PM.", correct: true },
      { text: "Vorrei un caffè, per favore.", translation: "I'd like a coffee, please.", correct: false },
      { text: "Dov'è il bagno?", translation: "Where is the bathroom?", correct: false }
    ] },
  );

  await addExperience(27, "Ordering a Starter and Main Course", 1, "Restaurant",
    [
      { it: "Buonasera, avete il menu del giorno?", en: "Good evening, do you have the daily menu?", speaker: "customer" },
      { it: "Sì, eccolo. Oggi abbiamo spaghetti alle vongole e pesce spada.", en: "Yes, here it is. Today we have spaghetti with clams and swordfish.", speaker: "waiter" },
      { it: "Come antipasto prendo la bruschetta.", en: "As a starter I'll have the bruschetta.", speaker: "customer" },
      { it: "E come primo gli spaghetti alle vongole. Vorrei anche dell'acqua.", en: "And as a first course the spaghetti with clams. I'd also like some water.", speaker: "customer" },
      { it: "Subito. Acqua naturale o frizzante?", en: "Right away. Still or sparkling water?", speaker: "waiter" },
    ],
    [{ it: "l'antipasto", en: "starter", article: "l'", plural: "gli antipasti" }, { it: "il primo", en: "first course", article: "il" }, { it: "il menu", en: "menu", article: "il" }],
    [
      { it: "Cosa prende il cliente come antipasto?", en: "What does the customer have as a starter?", options: [{ it: "Spaghetti alle vongole", en: "Spaghetti with clams", correct: false }, { it: "Bruschetta", en: "Bruschetta", correct: true }, { it: "Pesce spada", en: "Swordfish", correct: false }] },
      { it: "Che tipo di acqua chiede il cliente?", en: "What type of water does the customer ask about?", options: [{ it: "Solo naturale", en: "Only still", correct: false }, { it: "Non specifica ancora", en: "Doesn't specify yet", correct: true }, { it: "Frizzante", en: "Sparkling", correct: false }] },
    ],
    [{ it: "l'acqua naturale", en: "still water" }, { it: "l'acqua frizzante", en: "sparkling water" }],
    { question: "Cosa dice al cameriere per ordinare?", questionTranslation: "What do you tell the waiter to order?", options: [
      { text: "Come antipasto prendo la bruschetta, per favore.", translation: "As a starter I'll have the bruschetta, please.", correct: true },
      { text: "Il conto, per favore.", translation: "The bill, please.", correct: false },
      { text: "Questo piatto è freddo.", translation: "This dish is cold.", correct: false }
    ] },
  );

  await addExperience(27, "Ordering Pizza and Drinks", 1, "Restaurant",
    [
      { it: "Cosa desidera ordinare?", en: "What would you like to order?", speaker: "waiter" },
      { it: "Vorrei una pizza margherita e un'insalata mista.", en: "I'd like a margherita pizza and a mixed salad.", speaker: "customer" },
      { it: "E da bere?", en: "And to drink?", speaker: "waiter" },
      { it: "Una bottiglia di vino rosso della casa, per favore.", en: "A bottle of house red wine, please.", speaker: "customer" },
      { it: "Va bene. Arriva tra 15 minuti.", en: "Alright. It will be ready in 15 minutes.", speaker: "waiter" },
    ],
    [{ it: "la pizza", en: "pizza", article: "la", plural: "le pizze" }, { it: "il vino rosso", en: "red wine", article: "il" }, { it: "l'insalata", en: "salad", article: "l'" }],
    [
      { it: "Cosa ordina il cliente da mangiare?", en: "What does the customer order to eat?", options: [{ it: "Solo pizza", en: "Pizza only", correct: false }, { it: "Pizza margherita e insalata mista", en: "Margherita pizza and mixed salad", correct: true }, { it: "Pesce spada", en: "Swordfish", correct: false }] },
      { it: "Cosa ordina da bere?", en: "What does he order to drink?", options: [{ it: "Acqua frizzante", en: "Sparkling water", correct: false }, { it: "Birra alla spina", en: "Draft beer", correct: false }, { it: "Vino rosso della casa", en: "House red wine", correct: true }] },
    ],
    [{ it: "la margherita", en: "margherita pizza" }, { it: "ordinare", en: "to order" }],
    { question: "Il cameriere chiede cosa volete da bere. Cosa rispondete?", questionTranslation: "The waiter asks what you want to drink. What do you reply?", options: [
      { text: "Una bottiglia di vino rosso della casa, per favore.", translation: "A bottle of house red wine, please.", correct: true },
      { text: "Un caffè macchiato.", translation: "An espresso with a drop of milk.", correct: false },
      { text: "Niente, grazie.", translation: "Nothing, thanks.", correct: false }
    ] },
  );

  await addExperience(27, "Asking About Daily Specials", 1, "Restaurant",
    [
      { it: "Scusi, quali sono i piatti del giorno?", en: "Excuse me, what are the daily specials?", speaker: "customer" },
      { it: "Oggi abbiamo risotto ai funghi porcini e orata al forno.", en: "Today we have porcini mushroom risotto and baked sea bream.", speaker: "waiter" },
      { it: "Il risotto è senza lattosio?", en: "Is the risotto lactose-free?", speaker: "customer" },
      { it: "Sì, è preparato con brodo vegetale. È senza lattosio.", en: "Yes, it's made with vegetable broth. It's lactose-free.", speaker: "waiter" },
      { it: "Allora prendo il risotto, grazie.", en: "Then I'll have the risotto, thanks.", speaker: "customer" },
    ],
    [{ it: "il piatto del giorno", en: "daily special", article: "il", plural: "i piatti del giorno" }, { it: "il risotto", en: "risotto", article: "il" }, { it: "i funghi porcini", en: "porcini mushrooms", article: "i" }],
    [
      { it: "Quali piatti del giorno ci sono?", en: "What are the daily specials?", options: [{ it: "Pizza e insalata", en: "Pizza and salad", correct: false }, { it: "Risotto ai funghi porcini e orata al forno", en: "Porcini mushroom risotto and baked sea bream", correct: true }, { it: "Bistecca e patatine", en: "Steak and fries", correct: false }] },
      { it: "Il risotto contiene lattosio?", en: "Does the risotto contain lactose?", options: [{ it: "Sì, contiene latte", en: "Yes, it contains milk", correct: false }, { it: "No, è senza lattosio", en: "No, it's lactose-free", correct: true }, { it: "Il cameriere non lo sa", en: "The waiter doesn't know", correct: false }] },
    ],
    [{ it: "il brodo vegetale", en: "vegetable broth" }, { it: "l'orata", en: "sea bream", article: "l'" }],
    { question: "Cosa chiede per conoscere i piatti del giorno?", questionTranslation: "What do you ask to learn about the daily specials?", options: [
      { text: "Scusi, quali sono i piatti del giorno?", translation: "Excuse me, what are today's specials?", correct: true },
      { text: "Dov'è la carta dei vini?", translation: "Where is the wine list?", correct: false },
      { text: "Posso avere il conto?", translation: "Can I have the bill?", correct: false }
    ] },
  );

  await addExperience(27, "Ordering a Second Course and Dessert", 1, "Restaurant",
    [
      { it: "Come secondo vorrei la bistecca alla griglia.", en: "As a main course I'd like the grilled steak.", speaker: "customer" },
      { it: "La preferisce al sangue, media o ben cotta?", en: "Do you prefer it rare, medium, or well done?", speaker: "waiter" },
      { it: "Media, per favore. Con contorno di patate arrosto.", en: "Medium, please. With a side of roast potatoes.", speaker: "customer" },
      { it: "E come dolce? Abbiamo tiramisù e panna cotta.", en: "And for dessert? We have tiramisù and panna cotta.", speaker: "waiter" },
      { it: "Prendo il tiramisù, grazie.", en: "I'll have the tiramisù, thanks.", speaker: "customer" },
    ],
    [{ it: "il secondo", en: "main course", article: "il", plural: "i secondi" }, { it: "la bistecca", en: "steak", article: "la" }, { it: "il contorno", en: "side dish", article: "il" }],
    [
      { it: "Come vuole la bistecca il cliente?", en: "How does the customer want the steak?", options: [{ it: "Al sangue", en: "Rare", correct: false }, { it: "Media", en: "Medium", correct: true }, { it: "Ben cotta", en: "Well done", correct: false }] },
      { it: "Cosa prende come dolce?", en: "What does he have for dessert?", options: [{ it: "Panna cotta", en: "Panna cotta", correct: false }, { it: "Tiramisù", en: "Tiramisù", correct: true }, { it: "Gelato", en: "Ice cream", correct: false }] },
    ],
    [{ it: "la griglia", en: "grill" }, { it: "il tiramisù", en: "tiramisù" }],
    { question: "Il cameriere chiede la cottura della bistecca. Cosa dite?", questionTranslation: "The waiter asks how you want the steak cooked. What do you say?", options: [
      { text: "Media, per favore.", translation: "Medium, please.", correct: true },
      { text: "Al sangue, ben cotta.", translation: "Rare, well done.", correct: false },
      { text: "Non mi interessa.", translation: "I don't care.", correct: false }
    ] },
  );

  // === Module 28 (A2, level=1) - At the Table ===
  await addExperience(28, "Asking for Salt and Bread", 1, "Restaurant",
    [
      { it: "Scusi, può portarmi del pane, per favore?", en: "Excuse me, can you bring some bread, please?", speaker: "customer" },
      { it: "Subito. Vuole anche dell'olio d'oliva?", en: "Right away. Would you also like some olive oil?", speaker: "waiter" },
      { it: "Sì, grazie. E anche del sale, per favore.", en: "Yes, thanks. And also some salt, please.", speaker: "customer" },
      { it: "Arriva tutto. Ecco a lei.", en: "Everything is coming. Here you are.", speaker: "waiter" },
      { it: "Grazie mille, gentilissimo.", en: "Thank you very much, very kind.", speaker: "customer" },
    ],
    [{ it: "il pane", en: "bread", article: "il" }, { it: "il sale", en: "salt", article: "il" }, { it: "l'olio d'oliva", en: "olive oil", article: "l'" }],
    [
      { it: "Cosa chiede prima il cliente?", en: "What does the customer ask for first?", options: [{ it: "Del sale", en: "Some salt", correct: false }, { it: "Del pane", en: "Some bread", correct: true }, { it: "Del vino", en: "Some wine", correct: false }] },
      { it: "Cosa offre il cameriere insieme al pane?", en: "What does the waiter offer with the bread?", options: [{ it: "Burro", en: "Butter", correct: false }, { it: "Olio d'oliva", en: "Olive oil", correct: true }, { it: "Aceto", en: "Vinegar", correct: false }] },
    ],
    [{ it: "portare", en: "to bring" }, { it: "il pane", en: "bread" }],
    { question: "Il pane è finito. Cosa dice al cameriere?", questionTranslation: "The bread is finished. What do you say to the waiter?", options: [
      { text: "Scusi, può portare altro pane?", translation: "Excuse me, can you bring more bread?", correct: true },
      { text: "Il pane è cattivo.", translation: "The bread is bad.", correct: false },
      { text: "Non voglio pane.", translation: "I don't want bread.", correct: false }
    ] },
  );

  await addExperience(28, "Asking for More Water", 1, "Restaurant",
    [
      { it: "Scusi, può portare altra acqua, per favore?", en: "Excuse me, can you bring more water, please?", speaker: "customer" },
      { it: "Ancora acqua naturale o anche frizzante?", en: "More still water or also sparkling?", speaker: "waiter" },
      { it: "Naturale, grazie. Una bottiglia grande.", en: "Still, thanks. A large bottle.", speaker: "customer" },
      { it: "Subito. Desidera altro?", en: "Right away. Would you like anything else?", speaker: "waiter" },
      { it: "No, grazie, va bene così per ora.", en: "No thanks, it's fine for now.", speaker: "customer" },
    ],
    [{ it: "la bottiglia", en: "bottle", article: "la", plural: "le bottiglie" }, { it: "l'acqua", en: "water", article: "l'" }],
    [
      { it: "Che tipo di acqua vuole il cliente?", en: "What type of water does the customer want?", options: [{ it: "Frizzante", en: "Sparkling", correct: false }, { it: "Naturale", en: "Still", correct: true }, { it: "Gasata", en: "Carbonated", correct: false }] },
      { it: "Il cliente vuole altro cibo?", en: "Does the customer want more food?", options: [{ it: "Sì, un dolce", en: "Yes, a dessert", correct: false }, { it: "No, va bene così per ora", en: "No, it's fine for now", correct: true }, { it: "Sì, un caffè", en: "Yes, a coffee", correct: false }] },
    ],
    [{ it: "ancora", en: "more" }, { it: "la bottiglia grande", en: "large bottle" }],
    { question: "L'acqua è finita. Cosa chiedete al cameriere?", questionTranslation: "The water is finished. What do you ask the waiter?", options: [
      { text: "Scusi, può portare altra acqua?", translation: "Excuse me, can you bring more water?", correct: true },
      { text: "Porti il conto.", translation: "Bring the bill.", correct: false },
      { text: "Vorrei un digestivo.", translation: "I'd like a digestif.", correct: false }
    ] },
  );

  await addExperience(28, "Ordering Coffee After Meal", 1, "Restaurant",
    [
      { it: "Desidera qualcos'altro?", en: "Would you like anything else?", speaker: "waiter" },
      { it: "Sì, vorrei un caffè e un amaro.", en: "Yes, I'd like a coffee and a digestif.", speaker: "customer" },
      { it: "Un caffè normale o macchiato?", en: "A regular coffee or macchiato?", speaker: "waiter" },
      { it: "Normale, per favore. L'amaro lo prendo al banco.", en: "Regular, please. I'll have the digestif at the bar.", speaker: "customer" },
      { it: "Va bene. Porto subito il caffè.", en: "Alright. I'll bring the coffee right away.", speaker: "waiter" },
    ],
    [{ it: "il caffè", en: "coffee", article: "il", plural: "i caffè" }, { it: "l'amaro", en: "digestif", article: "l'", plural: "gli amari" }],
    [
      { it: "Che tipo di caffè vuole il cliente?", en: "What kind of coffee does the customer want?", options: [{ it: "Macchiato", en: "Macchiato", correct: false }, { it: "Normale", en: "Regular", correct: true }, { it: "Decaffeinato", en: "Decaf", correct: false }] },
      { it: "Dove prende l'amaro?", en: "Where does he have the digestif?", options: [{ it: "Al tavolo", en: "At the table", correct: false }, { it: "Al banco", en: "At the bar", correct: true }, { it: "All'aperto", en: "Outside", correct: false }] },
    ],
    [{ it: "dopo pasto", en: "after meal" }, { it: "il caffè normale", en: "regular coffee" }],
    { question: "Il cameriere chiede se volete altro. Cosa rispondete?", questionTranslation: "The waiter asks if you want anything else. What do you reply?", options: [
      { text: "Sì, vorrei un caffè, per favore.", translation: "Yes, I'd like a coffee, please.", correct: true },
      { text: "No, andiamo via.", translation: "No, we're leaving.", correct: false },
      { text: "Porti il pranzo.", translation: "Bring lunch.", correct: false }
    ] },
  );

  await addExperience(28, "Asking for the Check", 1, "Restaurant",
    [
      { it: "Cameriere, il conto, per favore.", en: "Waiter, the bill, please.", speaker: "customer" },
      { it: "Ecco a lei. Sono 52 euro.", en: "Here you are. That's 52 euros.", speaker: "waiter" },
      { it: "Posso pagare con la carta di credito?", en: "Can I pay with a credit card?", speaker: "customer" },
      { it: "Certo, accettiamo tutte le carte.", en: "Of course, we accept all cards.", speaker: "waiter" },
      { it: "Va bene. Il servizio è incluso?", en: "Alright. Is the service charge included?", speaker: "customer" },
    ],
    [{ it: "il conto", en: "the bill", article: "il" }, { it: "pagare", en: "to pay" }, { it: "il servizio", en: "service charge", article: "il" }],
    [
      { it: "Quanto costa il pasto?", en: "How much is the meal?", options: [{ it: "42 euro", en: "42 euros", correct: false }, { it: "52 euro", en: "52 euros", correct: true }, { it: "62 euro", en: "62 euros", correct: false }] },
      { it: "Come vuole pagare il cliente?", en: "How does the customer want to pay?", options: [{ it: "In contanti", en: "Cash", correct: false }, { it: "Con carta di credito", en: "With credit card", correct: true }, { it: "Con assegno", en: "With check", correct: false }] },
    ],
    [{ it: "la carta di credito", en: "credit card" }, { it: "incluso", en: "included" }],
    { question: "Come chiedete il conto al cameriere?", questionTranslation: "How do you ask the waiter for the bill?", options: [
      { text: "Cameriere, il conto, per favore.", translation: "Waiter, the bill, please.", correct: true },
      { text: "Dov'è la cassa?", translation: "Where is the cash register?", correct: false },
      { text: "Quanto costa la pizza?", translation: "How much is the pizza?", correct: false }
    ] },
  );

  await addExperience(28, "Asking to Split the Bill", 1, "Restaurant",
    [
      { it: "Possiamo avere il conto separato?", en: "Can we have separate checks?", speaker: "customer" },
      { it: "Certo. Divido in due, giusto?", en: "Of course. I'll split it in two, right?", speaker: "waiter" },
      { it: "Sì, grazie. Io ho preso la pizza, lui la bistecca.", en: "Yes, thanks. I had the pizza, he had the steak.", speaker: "customer" },
      { it: "Va bene. Allora per lei sono 18 euro, per lui 34.", en: "Alright. So for you 18 euros, for him 34.", speaker: "waiter" },
      { it: "Perfetto, ecco 20 euro. Tenga il resto.", en: "Perfect, here's 20 euros. Keep the change.", speaker: "customer" },
    ],
    [{ it: "separato", en: "separate" }, { it: "dividere", en: "to split" }, { it: "il resto", en: "change", article: "il" }],
    [
      { it: "Cosa chiede il cliente?", en: "What does the customer ask?", options: [{ it: "Uno sconto", en: "A discount", correct: false }, { it: "Il conto separato", en: "Separate checks", correct: true }, { it: "Un doggy bag", en: "A doggy bag", correct: false }] },
      { it: "Quanto paga il primo cliente?", en: "How much does the first customer pay?", options: [{ it: "18 euro", en: "18 euros", correct: true }, { it: "34 euro", en: "34 euros", correct: false }, { it: "20 euro", en: "20 euros", correct: false }] },
    ],
    [{ it: "il conto separato", en: "separate check" }, { it: "tenere il resto", en: "keep the change" }],
    { question: "Volete dividere il conto. Cosa dite?", questionTranslation: "You want to split the bill. What do you say?", options: [
      { text: "Possiamo avere il conto separato?", translation: "Can we have separate checks?", correct: true },
      { text: "Pago io per tutti.", translation: "I'll pay for everyone.", correct: false },
      { text: "Dov'è il pos?", translation: "Where is the card terminal?", correct: false }
    ] },
  );

  // === Module 29 (B1, level=2) - Dietary Needs ===
  await addExperience(29, "Asking About Allergens", 2, "Restaurant",
    [
      { it: "Buongiorno, sono allergico alle arachidi. Ci sono piatti senza arachidi?", en: "Good morning, I'm allergic to peanuts. Are there dishes without peanuts?", speaker: "customer" },
      { it: "Non preoccupatevi, tutti i nostri piatti sono preparati senza arachidi.", en: "Don't worry, all our dishes are prepared without peanuts.", speaker: "waiter" },
      { it: "Anche i dolci? Il tiramisù contiene arachidi?", en: "Even the desserts? Does the tiramisù contain peanuts?", speaker: "customer" },
      { it: "No, il tiramisù è fatto con uova, mascarpone e caffè. È sicuro.", en: "No, tiramisù is made with eggs, mascarpone, and coffee. It's safe.", speaker: "waiter" },
      { it: "Grazie per la precisione, lo ordino volentieri.", en: "Thank you for the precision, I'll happily order it.", speaker: "customer" },
    ],
    [{ it: "l'allergia", en: "allergy", article: "l'", plural: "le allergie" }, { it: "le arachidi", en: "peanuts", article: "le" }, { it: "sicuro", en: "safe" }],
    [
      { it: "A cosa è allergico il cliente?", en: "What is the customer allergic to?", options: [{ it: "Lattosio", en: "Lactose", correct: false }, { it: "Arachidi", en: "Peanuts", correct: true }, { it: "Glutine", en: "Gluten", correct: false }] },
      { it: "Il tiramisù contiene arachidi?", en: "Does the tiramisù contain peanuts?", options: [{ it: "Sì, contiene arachidi", en: "Yes, it contains peanuts", correct: false }, { it: "No, è fatto con uova, mascarpone e caffè", en: "No, it's made with eggs, mascarpone, and coffee", correct: true }, { it: "Il cameriere non lo sa", en: "The waiter doesn't know", correct: false }] },
    ],
    [{ it: "l'allergene", en: "allergen" }, { it: "il mascarpone", en: "mascarpone" }, { it: "preparato", en: "prepared" }],
    { question: "Avete un'allergia alimentare. Cosa dite al cameriere?", questionTranslation: "You have a food allergy. What do you tell the waiter?", options: [
      { text: "Sono allergico alle arachidi. Ci sono piatti senza arachidi?", translation: "I'm allergic to peanuts. Are there dishes without peanuts?", correct: true },
      { text: "Non mi piace la frutta secca.", translation: "I don't like nuts.", correct: false },
      { text: "Vorrei cambiare piatto.", translation: "I'd like to change dishes.", correct: false }
    ] },
  );

  await addExperience(29, "Ordering a Gluten-Free Meal", 2, "Restaurant",
    [
      { it: "Avete opzioni senza glutine? Ho la celiachia.", en: "Do you have gluten-free options? I have celiac disease.", speaker: "customer" },
      { it: "Certamente. La pasta è senza glutine e usiamo farina di riso.", en: "Certainly. The pasta is gluten-free and we use rice flour.", speaker: "waiter" },
      { it: "Anche la pizza può essere senza glutine?", en: "Can the pizza also be gluten-free?", speaker: "customer" },
      { it: "Sì, abbiamo la base per pizza senza glutine. È molto buona.", en: "Yes, we have a gluten-free pizza base. It's very good.", speaker: "waiter" },
      { it: "Allora prendo la pizza senza glutine con verdure grigliate.", en: "Then I'll take the gluten-free pizza with grilled vegetables.", speaker: "customer" },
    ],
    [{ it: "senza glutine", en: "gluten-free" }, { it: "la celiachia", en: "celiac disease", article: "la" }, { it: "la farina di riso", en: "rice flour", article: "la" }],
    [
      { it: "Quale condizione medica ha il cliente?", en: "What medical condition does the customer have?", options: [{ it: "Diabete", en: "Diabetes", correct: false }, { it: "Celiachia", en: "Celiac disease", correct: true }, { it: "Ipertensione", en: "Hypertension", correct: false }] },
      { it: "Quale tipo di farina usano per la pasta senza glutine?", en: "What type of flour do they use for gluten-free pasta?", options: [{ it: "Farina di mais", en: "Corn flour", correct: false }, { it: "Farina di riso", en: "Rice flour", correct: true }, { it: "Farina di mandorle", en: "Almond flour", correct: false }] },
    ],
    [{ it: "la base per pizza", en: "pizza base" }, { it: "le verdure grigliate", en: "grilled vegetables" }],
    { question: "Avete bisogno di un menu senza glutine. Cosa chiedete?", questionTranslation: "You need a gluten-free menu. What do you ask?", options: [
      { text: "Avete opzioni senza glutine? Ho la celiachia.", translation: "Do you have gluten-free options? I have celiac disease.", correct: true },
      { text: "La pasta è fresca?", translation: "Is the pasta fresh?", correct: false },
      { text: "Vorrei un piatto piccante.", translation: "I'd like a spicy dish.", correct: false }
    ] },
  );

  await addExperience(29, "Requesting a Vegan Menu", 2, "Restaurant",
    [
      { it: "C'è un menu vegano? Non mangio prodotti animali.", en: "Is there a vegan menu? I don't eat animal products.", speaker: "customer" },
      { it: "Sì, abbiamo piatti vegani. Le consiglio il curry di ceci.", en: "Yes, we have vegan dishes. I recommend the chickpea curry.", speaker: "waiter" },
      { it: "È molto piccante?", en: "Is it very spicy?", speaker: "customer" },
      { it: "No, è delicato. Viene servito con riso basmati.", en: "No, it's mild. It's served with basmati rice.", speaker: "waiter" },
      { it: "Perfetto, lo prendo. Anche l'antipasto di verdure crude è vegano?", en: "Perfect, I'll take it. Is the raw vegetable starter also vegan?", speaker: "customer" },
    ],
    [{ it: "vegano", en: "vegan" }, { it: "i ceci", en: "chickpeas", article: "i" }, { it: "il curry", en: "curry", article: "il" }],
    [
      { it: "Cosa consiglia il cameriere?", en: "What does the waiter recommend?", options: [{ it: "Pizza margherita", en: "Margherita pizza", correct: false }, { it: "Curry di ceci", en: "Chickpea curry", correct: true }, { it: "Bistecca di soia", en: "Soy steak", correct: false }] },
      { it: "Il curry di ceci è piccante?", en: "Is the chickpea curry spicy?", options: [{ it: "Sì, molto piccante", en: "Yes, very spicy", correct: false }, { it: "No, è delicato", en: "No, it's mild", correct: true }, { it: "Medio", en: "Medium", correct: false }] },
    ],
    [{ it: "il prodotto animale", en: "animal product" }, { it: "il riso basmati", en: "basmati rice" }],
    { question: "Siete vegani e chiedete informazioni. Cosa dite?", questionTranslation: "You're vegan and asking for information. What do you say?", options: [
      { text: "C'è un menu vegano? Non mangio prodotti animali.", translation: "Is there a vegan menu? I don't eat animal products.", correct: true },
      { text: "Vorrei una bistecca al sangue.", translation: "I'd like a rare steak.", correct: false },
      { text: "Il pesce è fresco?", translation: "Is the fish fresh?", correct: false }
    ] },
  );

  await addExperience(29, "Ordering Lactose-Free Options", 2, "Restaurant",
    [
      { it: "Sono intollerante al lattosio. Quali piatti posso mangiare?", en: "I'm lactose intolerant. Which dishes can I eat?", speaker: "customer" },
      { it: "Molti piatti sono senza lattosio. La pasta all'arrabbiata è sicura.", en: "Many dishes are lactose-free. The arrabbiata pasta is safe.", speaker: "waiter" },
      { it: "E i dolci? Hanno latte?", en: "And the desserts? Do they have milk?", speaker: "customer" },
      { it: "Il sorbetto al limone è senza lattosio. Glielo consiglio.", en: "The lemon sorbet is lactose-free. I recommend it.", speaker: "waiter" },
      { it: "Allora prendo la pasta all'arrabbiata e il sorbetto.", en: "Then I'll have the arrabbiata pasta and the sorbet.", speaker: "customer" },
    ],
    [{ it: "il lattosio", en: "lactose", article: "il" }, { it: "intollerante", en: "intolerant" }, { it: "il sorbetto", en: "sorbet", article: "il" }],
    [
      { it: "Quale intolleranza ha il cliente?", en: "What intolerance does the customer have?", options: [{ it: "Glutine", en: "Gluten", correct: false }, { it: "Lattosio", en: "Lactose", correct: true }, { it: "Uova", en: "Eggs", correct: false }] },
      { it: "Quale dolce senza lattosio consiglia il cameriere?", en: "Which lactose-free dessert does the waiter recommend?", options: [{ it: "Tiramisù", en: "Tiramisù", correct: false }, { it: "Panna cotta", en: "Panna cotta", correct: false }, { it: "Sorbetto al limone", en: "Lemon sorbet", correct: true }] },
    ],
    [{ it: "l'arrabbiata", en: "arrabbiata (angry style)" }, { it: "al limone", en: "lemon" }],
    { question: "Siete intolleranti al lattosio. Cosa chiedete?", questionTranslation: "You are lactose intolerant. What do you ask?", options: [
      { text: "Sono intollerante al lattosio. Quali piatti posso mangiare?", translation: "I'm lactose intolerant. Which dishes can I eat?", correct: true },
      { text: "Vorrei molto formaggio sulla pasta.", translation: "I'd like a lot of cheese on the pasta.", correct: false },
      { text: "Il caffè è decaffeinato?", translation: "Is the coffee decaf?", correct: false }
    ] },
  );

  await addExperience(29, "Asking About Vegetarian Dishes", 2, "Restaurant",
    [
      { it: "Sono vegetariano. Cosa mi consiglia?", en: "I'm vegetarian. What do you recommend?", speaker: "customer" },
      { it: "Abbiamo un'ottima parmigiana di melanzane.", en: "We have an excellent eggplant parmigiana.", speaker: "waiter" },
      { it: "Contiene carne o uova?", en: "Does it contain meat or eggs?", speaker: "customer" },
      { it: "No, solo melanzane, pomodoro, mozzarella e basilico.", en: "No, only eggplant, tomato, mozzarella, and basil.", speaker: "waiter" },
      { it: "Perfetto, la prendo con un contorno di spinaci saltati.", en: "Perfect, I'll have it with a side of sautéed spinach.", speaker: "customer" },
    ],
    [{ it: "vegetariano", en: "vegetarian" }, { it: "la parmigiana di melanzane", en: "eggplant parmigiana", article: "la" }, { it: "la melanzana", en: "eggplant", article: "la" }],
    [
      { it: "Cosa consiglia il cameriere al cliente vegetariano?", en: "What does the waiter recommend to the vegetarian customer?", options: [{ it: "Bistecca alla griglia", en: "Grilled steak", correct: false }, { it: "Parmigiana di melanzane", en: "Eggplant parmigiana", correct: true }, { it: "Pesce al forno", en: "Baked fish", correct: false }] },
      { it: "La parmigiana contiene carne?", en: "Does the parmigiana contain meat?", options: [{ it: "Sì, contiene carne macinata", en: "Yes, it contains minced meat", correct: false }, { it: "No, solo verdure e formaggio", en: "No, only vegetables and cheese", correct: true }, { it: "Sì, contiene pollo", en: "Yes, it contains chicken", correct: false }] },
    ],
    [{ it: "la mozzarella", en: "mozzarella" }, { it: "il basilico", en: "basil" }],
    { question: "Siete vegetariani e volete un consiglio. Cosa dite?", questionTranslation: "You're vegetarian and want a recommendation. What do you say?", options: [
      { text: "Sono vegetariano. Cosa mi consiglia?", translation: "I'm vegetarian. What do you recommend?", correct: true },
      { text: "Il pesce è pescato oggi?", translation: "Is the fish caught today?", correct: false },
      { text: "Vorrei la bistecca ai ferri.", translation: "I'd like a grilled steak.", correct: false }
    ] },
  );

  // === Module 30 (B1, level=2) - Complaints ===
  await addExperience(30, "Wrong Order Received", 2, "Restaurant",
    [
      { it: "Scusi, ma questo non è quello che ho ordinato.", en: "Excuse me, but this isn't what I ordered.", speaker: "customer" },
      { it: "Oh, mi dispiace. Cosa aveva ordinato?", en: "Oh, I'm sorry. What did you order?", speaker: "waiter" },
      { it: "Avevo chiesto la pasta al pomodoro, non la carbonara.", en: "I had asked for pasta with tomato sauce, not carbonara.", speaker: "customer" },
      { it: "Le chiedo scusa, lo cambio subito.", en: "I apologize, I'll change it right away.", speaker: "waiter" },
      { it: "Grazie. Quanto tempo ci vorrà?", en: "Thanks. How long will it take?", speaker: "customer" },
    ],
    [{ it: "l'ordine", en: "order", article: "l'" }, { it: "sbagliato", en: "wrong" }, { it: "cambiare", en: "to change" }],
    [
      { it: "Cosa ha ricevuto il cliente invece della pasta al pomodoro?", en: "What did the customer receive instead of pasta with tomato sauce?", options: [{ it: "Pasta all'arrabbiata", en: "Arrabbiata pasta", correct: false }, { it: "Carbonara", en: "Carbonara", correct: true }, { it: "Pasta al pesto", en: "Pesto pasta", correct: false }] },
      { it: "Cosa fa il cameriere dopo le scuse?", en: "What does the waiter do after apologizing?", options: [{ it: "Porta lo stesso piatto", en: "Brings the same dish", correct: false }, { it: "Cambia il piatto subito", en: "Changes the dish immediately", correct: true }, { it: "Chiama il manager", en: "Calls the manager", correct: false }] },
    ],
    [{ it: "mi dispiace", en: "I'm sorry" }, { it: "la carbonara", en: "carbonara" }],
    { question: "Il piatto ricevuto è sbagliato. Cosa dite?", questionTranslation: "The dish you received is wrong. What do you say?", options: [
      { text: "Scusi, ma questo non è quello che ho ordinato.", translation: "Excuse me, but this isn't what I ordered.", correct: true },
      { text: "Il piatto è buonissimo.", translation: "The dish is delicious.", correct: false },
      { text: "Posso avere più formaggio?", translation: "Can I have more cheese?", correct: false }
    ] },
  );

  await addExperience(30, "Food Quality Complaint", 2, "Restaurant",
    [
      { it: "Scusi, la bistecca è troppo cotta. L'avevo chiesta media.", en: "Excuse me, the steak is overcooked. I asked for medium.", speaker: "customer" },
      { it: "Mi dispiace molto. Gliela faccio rifare.", en: "I'm very sorry. I'll have it remade for you.", speaker: "waiter" },
      { it: "E anche le patatine sono fredde.", en: "And also the fries are cold.", speaker: "customer" },
      { it: "Le porto patatine fresche subito. Vuole anche un altro contorno?", en: "I'll bring fresh fries right away. Would you like a different side?", speaker: "waiter" },
      { it: "No, grazie. Solo per favore si assicuri che la prossima sia media.", en: "No, thanks. Just please make sure the next one is medium.", speaker: "customer" },
    ],
    [{ it: "la bistecca", en: "steak", article: "la" }, { it: "cotta", en: "cooked" }, { it: "le patatine fritte", en: "french fries", article: "le" }],
    [
      { it: "Quale problema ha la bistecca?", en: "What's wrong with the steak?", options: [{ it: "È cruda", en: "It's raw", correct: false }, { it: "È troppo cotta", en: "It's overcooked", correct: true }, { it: "È salata", en: "It's salty", correct: false }] },
      { it: "Che altro problema c'è con il pasto?", en: "What other problem is there with the meal?", options: [{ it: "Le patatine sono fredde", en: "The fries are cold", correct: true }, { it: "La salsa è piccante", en: "The sauce is spicy", correct: false }, { it: "Il piatto è piccolo", en: "The dish is small", correct: false }] },
    ],
    [{ it: "rifare", en: "to redo" }, { it: "assicurarsi", en: "to make sure" }],
    { question: "La carne non è cotta come richiesto. Cosa dite?", questionTranslation: "The meat isn't cooked as requested. What do you say?", options: [
      { text: "Scusi, la bistecca è troppo cotta. L'avevo chiesta media.", translation: "Excuse me, the steak is overcooked. I asked for medium.", correct: true },
      { text: "La bistecca è perfetta.", translation: "The steak is perfect.", correct: false },
      { text: "Quanto costa la bistecca?", translation: "How much is the steak?", correct: false }
    ] },
  );

  await addExperience(30, "Complaint About Long Wait", 2, "Restaurant",
    [
      { it: "Scusi, stiamo aspettando da 40 minuti. Il nostro ordine è pronto?", en: "Excuse me, we've been waiting for 40 minutes. Is our order ready?", speaker: "customer" },
      { it: "Mi dispiace per l'attesa. C'è stato un problema in cucina.", en: "I'm sorry about the wait. There was a problem in the kitchen.", speaker: "waiter" },
      { it: "Capisco, ma è davvero troppo tempo. Ci sono tavoli arrivati dopo di noi che hanno già mangiato.", en: "I understand, but that's really too long. Tables that arrived after us have already eaten.", speaker: "customer" },
      { it: "Ha ragione. Il suo ordine è prioritario ora. Offriamo un antipasto come scusa.", en: "You're right. Your order is priority now. We offer a starter as an apology.", speaker: "waiter" },
      { it: "Va bene, grazie. Apprezziamo il gesto.", en: "Alright, thanks. We appreciate the gesture.", speaker: "customer" },
    ],
    [{ it: "l'attesa", en: "wait", article: "l'" }, { it: "il ritardo", en: "delay", article: "il" }, { it: "la cucina", en: "kitchen", article: "la" }],
    [
      { it: "Quanto tempo aspettano i clienti?", en: "How long have the customers been waiting?", options: [{ it: "20 minuti", en: "20 minutes", correct: false }, { it: "40 minuti", en: "40 minutes", correct: true }, { it: "Un'ora", en: "One hour", correct: false }] },
      { it: "Cosa offre il cameriere come scusa?", en: "What does the waiter offer as an apology?", options: [{ it: "Uno sconto sul conto", en: "A discount on the bill", correct: false }, { it: "Un antipasto gratis", en: "A free starter", correct: true }, { it: "Un dolce in omaggio", en: "A complimentary dessert", correct: false }] },
    ],
    [{ it: "prioritario", en: "priority" }, { it: "il gesto", en: "gesture" }],
    { question: "Il cibo tarda ad arrivare. Cosa dite al cameriere?", questionTranslation: "The food is taking too long. What do you say to the waiter?", options: [
      { text: "Scusi, stiamo aspettando da 40 minuti. Il nostro ordine è pronto?", translation: "Excuse me, we've been waiting for 40 minutes. Is our order ready?", correct: true },
      { text: "Porti il conto, andiamo via.", translation: "Bring the bill, we're leaving.", correct: false },
      { text: "Dov'è il bagno?", translation: "Where's the bathroom?", correct: false }
    ] },
  );

  await addExperience(30, "Food Too Salty", 2, "Restaurant",
    [
      { it: "Scusi, questo piatto è troppo salato. Non riesco a mangiarlo.", en: "Excuse me, this dish is too salty. I can't eat it.", speaker: "customer" },
      { it: "Mi dispiace molto. Lo riferisco subito allo chef.", en: "I'm very sorry. I'll report it to the chef right away.", speaker: "waiter" },
      { it: "Potrei avere qualcos'altro? Forse un piatto più leggero.", en: "Could I have something else? Maybe a lighter dish.", speaker: "customer" },
      { it: "Certamente. Le consiglio l'insalata di mare, è molto delicata.", en: "Certainly. I recommend the seafood salad, it's very delicate.", speaker: "waiter" },
      { it: "Va bene, prendo quella. La precedente la tolgo dal conto?", en: "Alright, I'll have that. Will you remove the previous one from the bill?", speaker: "customer" },
    ],
    [{ it: "salato", en: "salty" }, { it: "leggero", en: "light" }, { it: "riferire", en: "to report" }],
    [
      { it: "Qual è il problema con il piatto?", en: "What's the problem with the dish?", options: [{ it: "È bruciato", en: "It's burnt", correct: false }, { it: "È troppo salato", en: "It's too salty", correct: true }, { it: "È insipido", en: "It's bland", correct: false }] },
      { it: "Cosa consiglia il cameriere in alternativa?", en: "What does the waiter recommend instead?", options: [{ it: "Pesce al forno", en: "Baked fish", correct: false }, { it: "Insalata di mare", en: "Seafood salad", correct: true }, { it: "Pasta al pomodoro", en: "Pasta with tomato sauce", correct: false }] },
    ],
    [{ it: "l'insalata di mare", en: "seafood salad" }, { it: "delicato", en: "delicate" }],
    { question: "Il cibo è troppo salato. Come vi lamentate?", questionTranslation: "The food is too salty. How do you complain?", options: [
      { text: "Scusi, questo piatto è troppo salato. Non riesco a mangiarlo.", translation: "Excuse me, this dish is too salty. I can't eat it.", correct: true },
      { text: "Questo piatto è delizioso.", translation: "This dish is delicious.", correct: false },
      { text: "Potrei avere più sale?", translation: "Could I have more salt?", correct: false }
    ] },
  );

  await addExperience(30, "Complaint About Dirty Cutlery", 2, "Restaurant",
    [
      { it: "Scusi, ma la forchetta è sporca. Può portarmene un'altra?", en: "Excuse me, but the fork is dirty. Can you bring me another one?", speaker: "customer" },
      { it: "Oh, mi scuso. Gliene porto una pulita immediatamente.", en: "Oh, I apologize. I'll bring you a clean one immediately.", speaker: "waiter" },
      { it: "E anche il bicchiere ha un alone. Potrei averne uno pulito?", en: "And also the glass has a stain. Could I have a clean one?", speaker: "customer" },
      { it: "Certo. Sostituisco anche il bicchiere. Ci scusi per il disagio.", en: "Of course. I'll replace the glass as well. We apologize for the inconvenience.", speaker: "waiter" },
      { it: "Grazie. Spero che la cucina sia più pulita delle stoviglie.", en: "Thanks. I hope the kitchen is cleaner than the tableware.", speaker: "customer" },
    ],
    [{ it: "la forchetta", en: "fork", article: "la" }, { it: "sporco", en: "dirty" }, { it: "il bicchiere", en: "glass", article: "il" }],
    [
      { it: "Perché il cliente chiede una nuova forchetta?", en: "Why does the customer ask for a new fork?", options: [{ it: "È rotta", en: "It's broken", correct: false }, { it: "È sporca", en: "It's dirty", correct: true }, { it: "È troppo piccola", en: "It's too small", correct: false }] },
      { it: "Cos'altro è sporco secondo il cliente?", en: "What else is dirty according to the customer?", options: [{ it: "Il piatto", en: "The plate", correct: false }, { it: "Il bicchiere", en: "The glass", correct: true }, { it: "Il tovagliolo", en: "The napkin", correct: false }] },
    ],
    [{ it: "pulito", en: "clean" }, { it: "la stoviglia", en: "piece of tableware" }],
    { question: "Le posate non sono pulite. Cosa dite?", questionTranslation: "The cutlery isn't clean. What do you say?", options: [
      { text: "Scusi, ma la forchetta è sporca. Può portarmene un'altra?", translation: "Excuse me, but the fork is dirty. Can you bring another one?", correct: true },
      { text: "Le posate sono bellissime.", translation: "The cutlery is beautiful.", correct: false },
      { text: "Dov'è il coltello?", translation: "Where is the knife?", correct: false }
    ] },
  );

  // === Module 31 (B2, level=3) - Wine & Dining ===
  await addExperience(31, "Choosing a Wine from the List", 3, "Restaurant",
    [
      { it: "Buonasera, può consigliarmi un vino per accompagnare il pesce?", en: "Good evening, can you recommend a wine to accompany the fish?", speaker: "customer" },
      { it: "Certamente. Con il pesce consiglio un Vermentino di Sardegna, fresco e minerale.", en: "Certainly. With fish I recommend a Vermentino from Sardinia, crisp and mineral.", speaker: "waiter" },
      { it: "Che annata consiglia?", en: "Which vintage do you recommend?", speaker: "customer" },
      { it: "Il 2020 è stato un'ottima annata per i bianchi sardi.", en: "2020 was an excellent vintage for Sardinian whites.", speaker: "waiter" },
      { it: "Perfetto, prendo una bottiglia di Vermentino 2020.", en: "Perfect, I'll take a bottle of Vermentino 2020.", speaker: "customer" },
    ],
    [{ it: "il vino bianco", en: "white wine", article: "il" }, { it: "l'annata", en: "vintage", article: "l'" }, { it: "il Vermentino", en: "Vermentino (wine)", article: "il" }],
    [
      { it: "Quale vino consiglia il cameriere con il pesce?", en: "Which wine does the waiter recommend with fish?", options: [{ it: "Chianti", en: "Chianti", correct: false }, { it: "Vermentino", en: "Vermentino", correct: true }, { it: "Barolo", en: "Barolo", correct: false }] },
      { it: "Quale annata di Vermentino consiglia?", en: "Which vintage of Vermentino does he recommend?", options: [{ it: "2019", en: "2019", correct: false }, { it: "2020", en: "2020", correct: true }, { it: "2021", en: "2021", correct: false }] },
    ],
    [{ it: "la Sardegna", en: "Sardinia" }, { it: "minerale", en: "mineral (wine)" }, { it: "fresco", en: "crisp" }],
    { question: "Volete un consiglio sul vino. Cosa chiedete?", questionTranslation: "You want wine advice. What do you ask?", options: [
      { text: "Può consigliarmi un vino per accompagnare il pesce?", translation: "Can you recommend a wine to accompany the fish?", correct: true },
      { text: "Qual è il vino più economico?", translation: "What's the cheapest wine?", correct: false },
      { text: "Vorrei una birra artigianale.", translation: "I'd like a craft beer.", correct: false }
    ] },
  );

  await addExperience(31, "Wine Tasting and Decanting", 3, "Restaurant",
    [
      { it: "Abbiamo ordinato un Barolo. Potrebbe stapparlo e farlo decantare?", en: "We ordered a Barolo. Could you uncork it and decant it?", speaker: "customer" },
      { it: "Certamente. Il Barolo giovane ha bisogno di ossigenarsi.", en: "Certainly. Young Barolo needs to breathe.", speaker: "waiter" },
      { it: "Quanto tempo consiglia di lasciarlo decantare?", en: "How long do you recommend letting it decant?", speaker: "customer" },
      { it: "Almeno 30 minuti per sprigionare tutti gli aromi.", en: "At least 30 minutes to release all the aromas.", speaker: "waiter" },
      { it: "Perfetto. Assaggerò il vino dopo la decantazione.", en: "Perfect. I'll taste the wine after decanting.", speaker: "customer" },
    ],
    [{ it: "il Barolo", en: "Barolo (wine)", article: "il" }, { it: "decantare", en: "to decant" }, { it: "l'aroma", en: "aroma", article: "l'", plural: "gli aromi" }],
    [
      { it: "Perché il Barolo ha bisogno di decantare?", en: "Why does Barolo need to decant?", options: [{ it: "Per raffreddarlo", en: "To cool it down", correct: false }, { it: "Per ossigenarsi e sprigionare gli aromi", en: "To breathe and release aromas", correct: true }, { it: "Per diluirlo", en: "To dilute it", correct: false }] },
      { it: "Quanto tempo consiglia il cameriere per la decantazione?", en: "How long does the waiter recommend for decanting?", options: [{ it: "15 minuti", en: "15 minutes", correct: false }, { it: "30 minuti", en: "30 minutes", correct: true }, { it: "45 minuti", en: "45 minutes", correct: false }] },
    ],
    [{ it: "stappare", en: "to uncork" }, { it: "assaggiare", en: "to taste" }],
    { question: "Il vino rosso è chiuso. Cosa chiedete al cameriere?", questionTranslation: "The red wine is closed. What do you ask the waiter?", options: [
      { text: "Potrebbe stapparlo e farlo decantare?", translation: "Could you uncork it and let it decant?", correct: true },
      { text: "Può scaldare il vino?", translation: "Can you heat the wine?", correct: false },
      { text: "È un vino dolce?", translation: "Is it a sweet wine?", correct: false }
    ] },
  );

  await addExperience(31, "Discussing Wine Regions", 3, "Restaurant",
    [
      { it: "Questo Brunello è eccezionale. Di quale zona della Toscana proviene?", en: "This Brunello is exceptional. Which area of Tuscany does it come from?", speaker: "customer" },
      { it: "Proviene da Montalcino, una delle migliori zone per il Sangiovese.", en: "It comes from Montalcino, one of the best areas for Sangiovese.", speaker: "waiter" },
      { it: "Ho visitato quella zona. I vigneti sono meravigliosi.", en: "I've visited that area. The vineyards are wonderful.", speaker: "customer" },
      { it: "Allora saprà che il Brunello richiede almeno 5 anni di invecchiamento.", en: "Then you'll know that Brunello requires at least 5 years of aging.", speaker: "waiter" },
      { it: "Sì, e si sente. Ha un bouquet complesso e tannini vellutati.", en: "Yes, and you can tell. It has a complex bouquet and velvety tannins.", speaker: "customer" },
    ],
    [{ it: "il Brunello", en: "Brunello (wine)", article: "il" }, { it: "il vigneto", en: "vineyard", article: "il" }, { it: "l'invecchiamento", en: "aging", article: "l'" }],
    [
      { it: "Da dove proviene il Brunello?", en: "Where does the Brunello come from?", options: [{ it: "Firenze", en: "Florence", correct: false }, { it: "Montalcino", en: "Montalcino", correct: true }, { it: "Siena", en: "Siena", correct: false }] },
      { it: "Quanti anni di invecchiamento richiede il Brunello?", en: "How many years of aging does Brunello require?", options: [{ it: "3 anni", en: "3 years", correct: false }, { it: "5 anni", en: "5 years", correct: true }, { it: "10 anni", en: "10 years", correct: false }] },
    ],
    [{ it: "la Toscana", en: "Tuscany" }, { it: "vellutato", en: "velvety" }],
    { question: "Apprezzate un vino e volete saperne di più. Cosa chiedete?", questionTranslation: "You appreciate a wine and want to know more. What do you ask?", options: [
      { text: "Di quale zona della Toscana proviene questo vino?", translation: "Which area of Tuscany does this wine come from?", correct: true },
      { text: "Quanto costa al litro?", translation: "How much per liter?", correct: false },
      { text: "È un vino biologico?", translation: "Is it an organic wine?", correct: false }
    ] },
  );

  await addExperience(31, "Pairing Wine with a Multi-Course Meal", 3, "Restaurant",
    [
      { it: "Per una cena di 5 portate, come suggerisce di abbinare i vini?", en: "For a 5-course dinner, how do you suggest pairing the wines?", speaker: "customer" },
      { it: "Inizio con un Franciacorta come aperitivo, poi un bianco per l'antipasto.", en: "I'd start with a Franciacorta as an aperitif, then a white for the starter.", speaker: "waiter" },
      { it: "E per il primo e secondo?", en: "And for the first and second course?", speaker: "customer" },
      { it: "Un rosso leggero per la pasta, un rosso più strutturato per la carne.", en: "A light red for the pasta, a more structured red for the meat.", speaker: "waiter" },
      { it: "Ottimo. E per il dolce un passito, immagino.", en: "Excellent. And for dessert a passito wine, I imagine.", speaker: "customer" },
    ],
    [{ it: "l'abbinamento", en: "pairing", article: "l'" }, { it: "il Franciacorta", en: "Franciacorta (sparkling)", article: "il" }, { it: "strutturato", en: "structured (wine)" }],
    [
      { it: "Quale vino consiglia per iniziare la cena?", en: "Which wine does he recommend to start the dinner?", options: [{ it: "Prosecco", en: "Prosecco", correct: false }, { it: "Franciacorta", en: "Franciacorta", correct: true }, { it: "Spumante dolce", en: "Sweet sparkling", correct: false }] },
      { it: "Che tipo di vino consiglia per il dolce?", en: "What kind of wine does he recommend for dessert?", options: [{ it: "Rosso corposo", en: "Full-bodied red", correct: false }, { it: "Passito", en: "Passito (sweet wine)", correct: true }, { it: "Bianco secco", en: "Dry white", correct: false }] },
    ],
    [{ it: "il passito", en: "sweet dessert wine" }, { it: "l'aperitivo", en: "aperitif" }],
    { question: "Volete abbinare i vini ai piatti. Cosa chiedete al sommelier?", questionTranslation: "You want to pair wines with dishes. What do you ask the sommelier?", options: [
      { text: "Per una cena di 5 portate, come suggerisce di abbinare i vini?", translation: "For a 5-course dinner, how do you suggest pairing the wines?", correct: true },
      { text: "Qual è il vino più economico?", translation: "What's the cheapest wine?", correct: false },
      { text: "Avete vino sfuso?", translation: "Do you have bulk wine?", correct: false }
    ] },
  );

  await addExperience(31, "Ordering a Digestif After Dinner", 3, "Restaurant",
    [
      { it: "Vorrei un digestivo di qualità. Avete grappa invecchiata?", en: "I'd like a quality digestif. Do you have aged grappa?", speaker: "customer" },
      { it: "Certo. Abbiamo una grappa di Barolo invecchiata 10 anni.", en: "Of course. We have a Barolo grappa aged 10 years.", speaker: "waiter" },
      { it: "Perfetto. La prendo liscia, a temperatura ambiente.", en: "Perfect. I'll have it neat, at room temperature.", speaker: "customer" },
      { it: "Un'ottima scelta. Vuole anche un sigaro dal nostro humidor?", en: "An excellent choice. Would you also like a cigar from our humidor?", speaker: "waiter" },
      { it: "No, grazie. Solo la grappa. Magari un cioccolatino fondente.", en: "No, thanks. Just the grappa. Maybe a dark chocolate truffle.", speaker: "customer" },
    ],
    [{ it: "la grappa", en: "grappa", article: "la" }, { it: "invecchiato", en: "aged" }, { it: "liscio", en: "neat/straight" }],
    [
      { it: "Quanti anni ha la grappa di Barolo?", en: "How old is the Barolo grappa?", options: [{ it: "5 anni", en: "5 years", correct: false }, { it: "10 anni", en: "10 years", correct: true }, { it: "15 anni", en: "15 years", correct: false }] },
      { it: "Come vuole la grappa il cliente?", en: "How does the customer want the grappa?", options: [{ it: "Con ghiaccio", en: "With ice", correct: false }, { it: "Liscia a temperatura ambiente", en: "Neat at room temperature", correct: true }, { it: "Con caffè", en: "With coffee", correct: false }] },
    ],
    [{ it: "il digestivo", en: "digestif" }, { it: "il cioccolatino", en: "chocolate truffle" }],
    { question: "Dopo cena volete un distillato. Cosa chiedete?", questionTranslation: "After dinner you want a spirit. What do you ask?", options: [
      { text: "Vorrei un digestivo di qualità. Avete grappa invecchiata?", translation: "I'd like a quality digestif. Do you have aged grappa?", correct: true },
      { text: "Vorrei un altro caffè.", translation: "I'd like another coffee.", correct: false },
      { text: "Il conto, per favore.", translation: "The bill, please.", correct: false }
    ] },
  );

  // === Module 32 (B2, level=3) - Special Occasions ===
  await addExperience(32, "Celebrating a Birthday at the Restaurant", 3, "Restaurant",
    [
      { it: "Stasera festeggiamo il compleanno di mia moglie. Ha una torta speciale?", en: "Tonight we're celebrating my wife's birthday. Do you have a special cake?", speaker: "customer" },
      { it: "Auguri! Possiamo preparare una torta con candeline e scrittura personalizzata.", en: "Congratulations! We can prepare a cake with candles and personalized writing.", speaker: "waiter" },
      { it: "Sarebbe fantastico. Potete anche cantare tanti auguri?", en: "That would be fantastic. Can you also sing 'happy birthday'?", speaker: "customer" },
      { it: "Certamente, il nostro staff sarà felice di partecipare.", en: "Certainly, our staff will be happy to join in.", speaker: "waiter" },
      { it: "Grazie. Sarà una sorpresa. La portate dopo il dolce?", en: "Thank you. It will be a surprise. Will you bring it after dessert?", speaker: "customer" },
    ],
    [{ it: "il compleanno", en: "birthday", article: "il" }, { it: "la torta", en: "cake", article: "la" }, { it: "la candelina", en: "birthday candle", article: "la" }],
    [
      { it: "Perché il cliente va al ristorante stasera?", en: "Why is the customer going to the restaurant tonight?", options: [{ it: "Un appuntamento di lavoro", en: "A business meeting", correct: false }, { it: "Il compleanno della moglie", en: "His wife's birthday", correct: true }, { it: "Un anniversario", en: "An anniversary", correct: false }] },
      { it: "Cosa offre il ristorante per la celebrazione?", en: "What does the restaurant offer for the celebration?", options: [{ it: "Uno sconto", en: "A discount", correct: false }, { it: "Una torta con candeline", en: "A cake with candles", correct: true }, { it: "Vino gratis", en: "Free wine", correct: false }] },
    ],
    [{ it: "festeggiare", en: "to celebrate" }, { it: "la sorpresa", en: "surprise" }],
    { question: "Volete organizzare una festa a sorpresa. Cosa dite al cameriere?", questionTranslation: "You want to organize a surprise party. What do you tell the waiter?", options: [
      { text: "Stasera festeggiamo un compleanno. Potete preparare una torta?", translation: "Tonight we're celebrating a birthday. Can you prepare a cake?", correct: true },
      { text: "Il tavolo è troppo piccolo.", translation: "The table is too small.", correct: false },
      { text: "Vorrei cambiare il mio ordine.", translation: "I'd like to change my order.", correct: false }
    ] },
  );

  await addExperience(32, "Organizing a Business Dinner", 3, "Restaurant",
    [
      { it: "Buongiorno, vorrei organizzare una cena aziendale per 12 persone.", en: "Good morning, I'd like to organize a corporate dinner for 12 people.", speaker: "customer" },
      { it: "Certamente. Preferite una sala privata o il salone principale?", en: "Certainly. Do you prefer a private room or the main hall?", speaker: "waiter" },
      { it: "Una sala privata, per favore. Abbiamo bisogno di un proiettore per una presentazione.", en: "A private room, please. We need a projector for a presentation.", speaker: "customer" },
      { it: "La nostra sala riunioni ha un maxischermo e impianto audio. Costa 200 euro.", en: "Our meeting room has a large screen and audio system. It costs 200 euros.", speaker: "waiter" },
      { it: "Va bene. Vorrei anche un menu fisso con vini inclusi.", en: "Alright. I'd also like a fixed menu with wines included.", speaker: "customer" },
    ],
    [{ it: "la cena aziendale", en: "corporate dinner", article: "la" }, { it: "la sala privata", en: "private room", article: "la" }, { it: "il proiettore", en: "projector", article: "il" }],
    [
      { it: "Per quante persone è la cena aziendale?", en: "For how many people is the corporate dinner?", options: [{ it: "10", en: "10", correct: false }, { it: "12", en: "12", correct: true }, { it: "15", en: "15", correct: false }] },
      { it: "Quale attrezzatura serve per la presentazione?", en: "What equipment does he need for the presentation?", options: [{ it: "Un microfono", en: "A microphone", correct: false }, { it: "Un proiettore", en: "A projector", correct: true }, { it: "Una lavagna", en: "A blackboard", correct: false }] },
    ],
    [{ it: "il maxischermo", en: "large screen" }, { it: "il menu fisso", en: "fixed menu" }],
    { question: "Dovete organizzare un evento di lavoro. Cosa chiedete?", questionTranslation: "You need to organize a work event. What do you ask?", options: [
      { text: "Vorrei organizzare una cena aziendale per 12 persone con sala privata.", translation: "I'd like to organize a corporate dinner for 12 with a private room.", correct: true },
      { text: "Vorrei un tavolo per due vicino alla finestra.", translation: "I'd like a table for two near the window.", correct: false },
      { text: "Quanto costa la pizza margherita?", translation: "How much is the margherita pizza?", correct: false }
    ] },
  );

  await addExperience(32, "Anniversary Dinner Arrangements", 3, "Restaurant",
    [
      { it: "È il nostro anniversario di matrimonio. Vorrei un tavolo romantico.", en: "It's our wedding anniversary. I'd like a romantic table.", speaker: "customer" },
      { it: "Che bello! Possiamo preparare una decorazione speciale con fiori e candele.", en: "How lovely! We can prepare a special decoration with flowers and candles.", speaker: "waiter" },
      { it: "E possibile avere un menu degustazione con matching di vini?", en: "And is it possible to have a tasting menu with wine pairing?", speaker: "customer" },
      { it: "Sì, il nostro chef ha un menu speciale per le occasioni: 7 portate con vini.", en: "Yes, our chef has a special occasions menu: 7 courses with wines.", speaker: "waiter" },
      { it: "Perfetto. Lo prenoto per le 20:30. Mia moglie sarà felicissima.", en: "Perfect. I'll book it for 8:30 PM. My wife will be very happy.", speaker: "customer" },
    ],
    [{ it: "l'anniversario", en: "anniversary", article: "l'" }, { it: "la decorazione", en: "decoration", article: "la" }, { it: "il menu degustazione", en: "tasting menu", article: "il" }],
    [
      { it: "Quale occasione speciale celebra il cliente?", en: "What special occasion is the customer celebrating?", options: [{ it: "Compleanno", en: "Birthday", correct: false }, { it: "Anniversario di matrimonio", en: "Wedding anniversary", correct: true }, { it: "Promozione", en: "Promotion", correct: false }] },
      { it: "Quante portate ha il menu speciale?", en: "How many courses does the special menu have?", options: [{ it: "5 portate", en: "5 courses", correct: false }, { it: "7 portate", en: "7 courses", correct: true }, { it: "10 portate", en: "10 courses", correct: false }] },
    ],
    [{ it: "romantico", en: "romantic" }, { it: "la candela", en: "candle" }],
    { question: "È il vostro anniversario. Cosa dite al ristorante?", questionTranslation: "It's your anniversary. What do you tell the restaurant?", options: [
      { text: "È il nostro anniversario. Vorrei un tavolo romantico con decorazioni speciali.", translation: "It's our anniversary. I'd like a romantic table with special decorations.", correct: true },
      { text: "Vorrei il menu più economico.", translation: "I'd like the cheapest menu.", correct: false },
      { text: "Avete tavoli liberi per stasera?", translation: "Do you have tables available tonight?", correct: false }
    ] },
  );

  await addExperience(32, "Requesting a Custom Menu for a Party", 3, "Restaurant",
    [
      { it: "Vorrei organizzare una festa di laurea per mio figlio. 20 invitati.", en: "I'd like to organize a graduation party for my son. 20 guests.", speaker: "customer" },
      { it: "Congratulazioni! Possiamo creare un menu personalizzato con finger food e buffet.", en: "Congratulations! We can create a custom menu with finger food and buffet.", speaker: "waiter" },
      { it: "Preferirei un menu fisso di 4 portate. Alcuni ospiti sono vegetariani.", en: "I'd prefer a fixed 4-course menu. Some guests are vegetarian.", speaker: "customer" },
      { it: "Nessun problema. Prepariamo opzioni vegetariane per ogni portata.", en: "No problem. We'll prepare vegetarian options for each course.", speaker: "waiter" },
      { it: "Perfetto. Potete anche preparare un brindisi con prosecco all'arrivo?", en: "Perfect. Can you also prepare a welcome toast with prosecco?", speaker: "customer" },
    ],
    [{ it: "la laurea", en: "graduation", article: "la" }, { it: "il finger food", en: "finger food", article: "il" }, { it: "il brindisi", en: "toast", article: "il" }],
    [
      { it: "Quale evento festeggia il cliente?", en: "What event is the customer celebrating?", options: [{ it: "Un matrimonio", en: "A wedding", correct: false }, { it: "Una laurea", en: "A graduation", correct: true }, { it: "Un battesimo", en: "A baptism", correct: false }] },
      { it: "Quanti invitati ci saranno?", en: "How many guests will there be?", options: [{ it: "15", en: "15", correct: false }, { it: "20", en: "20", correct: true }, { it: "25", en: "25", correct: false }] },
    ],
    [{ it: "personalizzato", en: "custom/personalized" }, { it: "il prosecco", en: "Prosecco" }],
    { question: "Volete organizzare una festa con menu personalizzato. Cosa chiedete?", questionTranslation: "You want to organize a party with a custom menu. What do you ask?", options: [
      { text: "Vorrei organizzare una festa di laurea con menu personalizzato per 20 persone.", translation: "I'd like to organize a graduation party with a custom menu for 20 people.", correct: true },
      { text: "Avete un tavolo libero per stasera?", translation: "Do you have a free table tonight?", correct: false },
      { text: "Vorrei ordinare una pizza da asporto.", translation: "I'd like to order a takeaway pizza.", correct: false }
    ] },
  );

  await addExperience(32, "Planning a Business Lunch with Clients", 3, "Restaurant",
    [
      { it: "Domani ho un pranzo di lavoro con clienti tedeschi. Consigli?", en: "Tomorrow I have a business lunch with German clients. Any advice?", speaker: "customer" },
      { it: "Un menu internazionale con opzioni leggere è sempre una scelta sicura.", en: "An international menu with light options is always a safe choice.", speaker: "waiter" },
      { it: "Vorrei qualcosa di tipicamente italiano ma non troppo elaborato.", en: "I'd like something typically Italian but not too elaborate.", speaker: "customer" },
      { it: "Le consiglio antipasto di salumi e formaggi, poi risotto e scaloppina al limone.", en: "I recommend a cured meats and cheese starter, then risotto and lemon veal scaloppine.", speaker: "waiter" },
      { it: "Ottimo. Prenoto per le 13:00, sala silenziosa con wifi, per favore.", en: "Excellent. I'll book for 1 PM, a quiet room with wifi, please.", speaker: "customer" },
    ],
    [{ it: "il pranzo di lavoro", en: "business lunch", article: "il" }, { it: "il cliente", en: "client", article: "il" }, { it: "la scaloppina", en: "scaloppine", article: "la" }],
    [
      { it: "Quale tipo di menu consiglia il cameriere per i clienti tedeschi?", en: "What type of menu does the waiter recommend for German clients?", options: [{ it: "Menu piccante", en: "Spicy menu", correct: false }, { it: "Menu internazionale con opzioni leggere", en: "International menu with light options", correct: true }, { it: "Menu di pesce crudo", en: "Raw fish menu", correct: false }] },
      { it: "A che ora prenota il pranzo?", en: "What time does he book the lunch?", options: [{ it: "12:00", en: "12 PM", correct: false }, { it: "13:00", en: "1 PM", correct: true }, { it: "14:00", en: "2 PM", correct: false }] },
    ],
    [{ it: "il salume", en: "cured meat" }, { it: "il formaggio", en: "cheese" }],
    { question: "Avete un pranzo di lavoro. Cosa richiedete al ristorante?", questionTranslation: "You have a business lunch. What do you request from the restaurant?", options: [
      { text: "Vorrei un menu internazionale con opzioni leggere per i miei clienti.", translation: "I'd like an international menu with light options for my clients.", correct: true },
      { text: "Vorrei mangiare solo pizza.", translation: "I'd like to eat only pizza.", correct: false },
      { text: "Avete un menu per bambini?", translation: "Do you have a children's menu?", correct: false }
    ] },
  );

  console.log("  ✓ Restaurant seeded");
}
