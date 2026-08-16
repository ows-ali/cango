export async function seedShopping(addExperience: Function) {
  // ============================================================
  // Module 33 (A2, level=1) - Light Shopping
  // ============================================================
  await addExperience(33, "Buying Fresh Produce at the Market", 1, "Shopping",
    [
      { it: "Buongiorno, quanto costano le mele?", en: "Good morning, how much are the apples?", speaker: "customer" },
      { it: "Le mele sono 2 euro al chilo. Sono molto buone!", en: "Apples are 2 euros per kilo. They're very good!", speaker: "seller" },
      { it: "Me ne dia un chilo, per favore.", en: "Give me a kilo, please.", speaker: "customer" },
      { it: "Ecco, un chilo di mele. Vuole altro?", en: "Here, one kilo of apples. Would you like anything else?", speaker: "seller" },
      { it: "Sì, anche mezzo chilo di arance. Quanto fa in tutto?", en: "Yes, also half a kilo of oranges. How much is that in total?", speaker: "customer" },
    ],
    [
      { it: "la mela", en: "apple", article: "la", plural: "le mele" },
      { it: "il chilo", en: "kilo", article: "il", plural: "i chili" },
      { it: "l'arancia", en: "orange", article: "l'", plural: "le arance" },
    ],
    [
      {
        it: "Quanto costano le mele al chilo?", en: "How much are the apples per kilo?",
        options: [
          { it: "3 euro", en: "3 euros", correct: false },
          { it: "2 euro", en: "2 euros", correct: true },
          { it: "1 euro", en: "1 euro", correct: false },
        ],
      },
      {
        it: "Quante arance compra il cliente?", en: "How many oranges does the customer buy?",
        options: [
          { it: "Un chilo", en: "One kilo", correct: false },
          { it: "Mezzo chilo", en: "Half a kilo", correct: true },
          { it: "Due chili", en: "Two kilos", correct: false },
        ],
      },
    ],
    [
      { it: "quanto costa", en: "how much does it cost" },
      { it: "mezzo", en: "half" },
      { it: "in tutto", en: "in total" },
    ],
    {
      question: "Cosa dice al mercato per comprare la frutta?", questionTranslation: "What do you say at the market to buy fruit?",
      options: [
        { text: "Buongiorno, vorrei un chilo di mele.", translation: "Good morning, I'd like a kilo of apples.", correct: true },
        { text: "Mi dia il conto, per favore.", translation: "Give me the bill, please.", correct: false },
        { text: "Vorrei una busta per la spesa.", translation: "I'd like a shopping bag.", correct: false },
      ],
    },
  );

  await addExperience(33, "Buying Bread at the Bakery", 1, "Shopping",
    [
      { it: "Buongiorno, avete del pane fresco?", en: "Good morning, do you have fresh bread?", speaker: "customer" },
      { it: "Sì, appena sfornato. Quanto ne vuole?", en: "Yes, freshly baked. How much would you like?", speaker: "shop_assistant" },
      { it: "Una pagnotta intera, per favore.", en: "A whole loaf, please.", speaker: "customer" },
      { it: "Ecco a lei. Vuole anche qualcosa di dolce?", en: "Here you are. Would you also like something sweet?", speaker: "shop_assistant" },
      { it: "Sì, due cornetti. Quanto pago?", en: "Yes, two croissants. How much do I pay?", speaker: "customer" },
    ],
    [
      { it: "il pane", en: "bread", article: "il" },
      { it: "la pagnotta", en: "loaf", article: "la", plural: "le pagnotte" },
      { it: "il cornetto", en: "croissant", article: "il", plural: "i cornetti" },
    ],
    [
      {
        it: "Cosa compra il cliente dal fornaio?", en: "What does the customer buy at the bakery?",
        options: [
          { it: "Pane e cornetti", en: "Bread and croissants", correct: true },
          { it: "Solo pane", en: "Only bread", correct: false },
          { it: "Solo cornetti", en: "Only croissants", correct: false },
        ],
      },
      {
        it: "Com'è il pane che vende il fornaio?", en: "What is the bread like the baker sells?",
        options: [
          { it: "Di ieri", en: "Yesterday's", correct: false },
          { it: "Appena sfornato", en: "Freshly baked", correct: true },
          { it: "Congelato", en: "Frozen", correct: false },
        ],
      },
    ],
    [
      { it: "il fornaio", en: "baker" },
      { it: "fresco", en: "fresh" },
    ],
    {
      question: "Come chiede il pane fresco al panificio?", questionTranslation: "How do you ask for fresh bread at the bakery?",
      options: [
        { text: "Buongiorno, avete del pane fresco?", translation: "Good morning, do you have fresh bread?", correct: true },
        { text: "Vorrei restituire questo pane.", translation: "I'd like to return this bread.", correct: false },
        { text: "Quanto costa il pane confezionato?", translation: "How much does packaged bread cost?", correct: false },
      ],
    },
  );

  await addExperience(33, "Buying Cheese and Cold Cuts", 1, "Shopping",
    [
      { it: "Buongiorno, vorrei del formaggio.", en: "Good morning, I'd like some cheese.", speaker: "customer" },
      { it: "Che tipo di formaggio preferisce?", en: "What kind of cheese do you prefer?", speaker: "shop_assistant" },
      { it: "Il Parmigiano Reggiano, 200 grammi per favore.", en: "Parmigiano Reggiano, 200 grams please.", speaker: "customer" },
      { it: "Ecco due belle fette. Desidera anche del prosciutto?", en: "Here are two nice slices. Would you also like some ham?", speaker: "shop_assistant" },
      { it: "Sì, 150 grammi di prosciutto crudo. Grazie.", en: "Yes, 150 grams of cured ham. Thank you.", speaker: "customer" },
    ],
    [
      { it: "il formaggio", en: "cheese", article: "il", plural: "i formaggi" },
      { it: "il grammo", en: "gram", article: "il", plural: "i grammi" },
      { it: "il prosciutto", en: "ham", article: "il" },
    ],
    [
      {
        it: "Quanto formaggio vuole il cliente?", en: "How much cheese does the customer want?",
        options: [
          { it: "200 grammi", en: "200 grams", correct: true },
          { it: "150 grammi", en: "150 grams", correct: false },
          { it: "300 grammi", en: "300 grams", correct: false },
        ],
      },
      {
        it: "Che tipo di formaggio chiede?", en: "What type of cheese does he ask for?",
        options: [
          { it: "Mozzarella", en: "Mozzarella", correct: false },
          { it: "Parmigiano Reggiano", en: "Parmigiano Reggiano", correct: true },
          { it: "Gorgonzola", en: "Gorgonzola", correct: false },
        ],
      },
    ],
    [
      { it: "la fetta", en: "slice" },
      { it: "desiderare", en: "to wish/desire" },
      { it: "il prosciutto crudo", en: "cured ham" },
    ],
    {
      question: "Come ordina formaggio e salumi al banco?", questionTranslation: "How do you order cheese and cold cuts at the counter?",
      options: [
        { text: "Vorrei 200 grammi di Parmigiano, per favore.", translation: "I'd like 200 grams of Parmigiano, please.", correct: true },
        { text: "Vorrei una pizza margherita.", translation: "I'd like a margherita pizza.", correct: false },
        { text: "Mi dia un litro di latte.", translation: "Give me a liter of milk.", correct: false },
      ],
    },
  );

  await addExperience(33, "Paying at the Supermarket Checkout", 1, "Shopping",
    [
      { it: "Buongiorno, ha la tessera fedeltà?", en: "Good morning, do you have a loyalty card?", speaker: "cashier" },
      { it: "Sì, eccola. Il totale è 23 euro e 50 centesimi.", en: "Yes, here it is. The total is 23 euros and 50 cents.", speaker: "cashier" },
      { it: "Va bene. Posso pagare con la carta?", en: "Alright. Can I pay by card?", speaker: "customer" },
      { it: "Certamente, inserisca la carta nel lettore.", en: "Of course, insert the card into the reader.", speaker: "cashier" },
      { it: "Fatto. Buona giornata!", en: "Done. Have a good day!", speaker: "customer" },
    ],
    [
      { it: "la tessera fedeltà", en: "loyalty card", article: "la", plural: "le tessere fedeltà" },
      { it: "il totale", en: "total", article: "il", plural: "i totali" },
      { it: "il lettore", en: "reader", article: "il", plural: "i lettori" },
    ],
    [
      {
        it: "Quanto costa in totale la spesa?", en: "How much is the total grocery bill?",
        options: [
          { it: "23 euro e 50 centesimi", en: "23 euros and 50 cents", correct: true },
          { it: "24 euro", en: "24 euros", correct: false },
          { it: "22 euro e 50 centesimi", en: "22 euros and 50 cents", correct: false },
        ],
      },
      {
        it: "Come paga il cliente?", en: "How does the customer pay?",
        options: [
          { it: "Contanti", en: "Cash", correct: false },
          { it: "Con la carta", en: "By card", correct: true },
          { it: "Con un assegno", en: "By check", correct: false },
        ],
      },
    ],
    [
      { it: "la cassa", en: "checkout" },
      { it: "il centesimo", en: "cent" },
    ],
    {
      question: "Alla cassa cosa dice per pagare con la carta?", questionTranslation: "At the checkout, what do you say to pay by card?",
      options: [
        { text: "Posso pagare con la carta?", translation: "Can I pay by card?", correct: true },
        { text: "Accettate Bitcoin?", translation: "Do you accept Bitcoin?", correct: false },
        { text: "Quanto costa la spedizione?", translation: "How much is shipping?", correct: false },
      ],
    },
  );

  await addExperience(33, "Buying Groceries with a Shopping List", 1, "Shopping",
    [
      { it: "Ho una lista della spesa. Ci serve la pasta.", en: "I have a shopping list. We need pasta.", speaker: "customer" },
      { it: "Quanti pacchi di pasta prendiamo?", en: "How many packs of pasta shall we get?", speaker: "customer" },
      { it: "Due pacchi, e anche un barattolo di pomodoro.", en: "Two packs, and also a jar of tomato sauce.", speaker: "customer" },
      { it: "Scusi, dove trovo la pasta?", en: "Excuse me, where can I find pasta?", speaker: "customer" },
      { it: "La pasta è al secondo scaffale, a sinistra.", en: "Pasta is on the second shelf, on the left.", speaker: "shop_assistant" },
    ],
    [
      { it: "la lista della spesa", en: "shopping list", article: "la", plural: "le liste della spesa" },
      { it: "il pacco", en: "pack", article: "il", plural: "i pacchi" },
      { it: "lo scaffale", en: "shelf", article: "lo", plural: "gli scaffali" },
    ],
    [
      {
        it: "Quanti pacchi di pasta compra il cliente?", en: "How many packs of pasta does the customer buy?",
        options: [
          { it: "Uno", en: "One", correct: false },
          { it: "Due", en: "Two", correct: true },
          { it: "Tre", en: "Three", correct: false },
        ],
      },
      {
        it: "Dove si trova la pasta nel negozio?", en: "Where is the pasta located in the store?",
        options: [
          { it: "Al primo scaffale a destra", en: "On the first shelf on the right", correct: false },
          { it: "Al secondo scaffale a sinistra", en: "On the second shelf on the left", correct: true },
          { it: "Vicino alla cassa", en: "Near the checkout", correct: false },
        ],
      },
    ],
    [
      { it: "la pasta", en: "pasta" },
      { it: "il barattolo", en: "jar" },
    ],
    {
      question: "Cosa chiede al commesso per trovare un prodotto?", questionTranslation: "What do you ask the shop assistant to find a product?",
      options: [
        { text: "Scusi, dove trovo la pasta?", translation: "Excuse me, where can I find pasta?", correct: true },
        { text: "Quanto costa questo prodotto?", translation: "How much is this product?", correct: false },
        { text: "Può avvolgermi questo regalo?", translation: "Can you wrap this gift for me?", correct: false },
      ],
    },
  );

  // ============================================================
  // Module 34 (A2, level=1) - Clothes & Sizes
  // ============================================================
  await addExperience(34, "Trying on a Shirt", 1, "Shopping",
    [
      { it: "Buongiorno, posso provare questa camicia?", en: "Good morning, can I try this shirt on?", speaker: "customer" },
      { it: "Certo, i camerini sono in fondo a destra.", en: "Of course, the fitting rooms are at the back on the right.", speaker: "shop_assistant" },
      { it: "Quale taglia porta?", en: "What size do you wear?", speaker: "shop_assistant" },
      { it: "Porto la M. Ma questa mi sembra troppo stretta.", en: "I wear M. But this one seems too tight.", speaker: "customer" },
      { it: "Gliela prendo in taglia L, così la prova.", en: "I'll get it for you in size L, so you can try it.", speaker: "shop_assistant" },
    ],
    [
      { it: "la camicia", en: "shirt", article: "la", plural: "le camicie" },
      { it: "il camerino", en: "fitting room", article: "il", plural: "i camerini" },
      { it: "la taglia", en: "size", article: "la", plural: "le taglie" },
    ],
    [
      {
        it: "Dove sono i camerini?", en: "Where are the fitting rooms?",
        options: [
          { it: "Davanti al negozio", en: "At the front of the store", correct: false },
          { it: "In fondo a destra", en: "At the back on the right", correct: true },
          { it: "Al primo piano", en: "On the first floor", correct: false },
        ],
      },
      {
        it: "Che taglia porta il cliente?", en: "What size does the customer wear?",
        options: [
          { it: "S", en: "S", correct: false },
          { it: "M", en: "M", correct: true },
          { it: "L", en: "L", correct: false },
        ],
      },
    ],
    [
      { it: "provare", en: "to try on" },
      { it: "stretto", en: "tight" },
      { it: "la taglia M", en: "size M" },
    ],
    {
      question: "Come chiede al commesso di poter provare un capo?", questionTranslation: "How do you ask the shop assistant to try on a garment?",
      options: [
        { text: "Posso provare questa camicia?", translation: "Can I try this shirt on?", correct: true },
        { text: "Quanto costa questa camicia?", translation: "How much is this shirt?", correct: false },
        { text: "Vorrei comprare questa camicia.", translation: "I'd like to buy this shirt.", correct: false },
      ],
    },
  );

  await addExperience(34, "Asking for a Different Size", 1, "Shopping",
    [
      { it: "Questa maglietta mi piace, ma è troppo grande.", en: "I like this t-shirt, but it's too big.", speaker: "customer" },
      { it: "Che taglia vuole?", en: "What size would you like?", speaker: "shop_assistant" },
      { it: "La S, per favore. Avete il verde anche in S?", en: "Size S, please. Do you have green in S too?", speaker: "customer" },
      { it: "Lasci controllare... Sì, ecco la verde in S.", en: "Let me check... Yes, here's the green one in S.", speaker: "shop_assistant" },
      { it: "Perfetta! La prendo. Quanto costa?", en: "Perfect! I'll take it. How much does it cost?", speaker: "customer" },
    ],
    [
      { it: "la maglietta", en: "t-shirt", article: "la", plural: "le magliette" },
      { it: "grande", en: "big" },
      { it: "il verde", en: "green" },
    ],
    [
      {
        it: "Perché il cliente non prende la taglia M?", en: "Why doesn't the customer take size M?",
        options: [
          { it: "È troppo piccola", en: "It's too small", correct: false },
          { it: "È troppo grande", en: "It's too big", correct: true },
          { it: "Non gli piace il colore", en: "He doesn't like the colour", correct: false },
        ],
      },
      {
        it: "In quale colore vuole la maglietta?", en: "What colour does the customer want the t-shirt in?",
        options: [
          { it: "Blu", en: "Blue", correct: false },
          { it: "Rosso", en: "Red", correct: false },
          { it: "Verde", en: "Green", correct: true },
        ],
      },
    ],
    [
      { it: "il colore", en: "colour" },
      { it: "la taglia S", en: "size S" },
    ],
    {
      question: "Cosa dice se un capo è troppo grande?", questionTranslation: "What do you say if a garment is too big?",
      options: [
        { text: "Questa mi sembra troppo grande. Avete una taglia più piccola?", translation: "This seems too big. Do you have a smaller size?", correct: true },
        { text: "Questa mi va bene, la compro.", translation: "This fits me well, I'll buy it.", correct: false },
        { text: "Non mi piace questo colore.", translation: "I don't like this colour.", correct: false },
      ],
    },
  );

  await addExperience(34, "Buying Jeans", 1, "Shopping",
    [
      { it: "Cerco un paio di jeans scuri.", en: "I'm looking for a pair of dark jeans.", speaker: "customer" },
      { it: "Che misura di vita porta?", en: "What waist size do you wear?", speaker: "shop_assistant" },
      { it: "Il 32, di solito. E di lunghezza il 34.", en: "32, usually. And length 34.", speaker: "customer" },
      { it: "Ecco un paio in taglia 32/34. Può provarli nel camerino.", en: "Here's a pair in size 32/34. You can try them in the fitting room.", speaker: "shop_assistant" },
      { it: "Mi stanno bene! Li prendo.", en: "They fit me well! I'll take them.", speaker: "customer" },
    ],
    [
      { it: "i jeans", en: "jeans", article: "i" },
      { it: "la misura", en: "measurement/size", article: "la", plural: "le misure" },
      { it: "la lunghezza", en: "length", article: "la", plural: "le lunghezze" },
    ],
    [
      {
        it: "Quale misura di vita porta il cliente nei jeans?", en: "What waist size does the customer wear in jeans?",
        options: [
          { it: "30", en: "30", correct: false },
          { it: "32", en: "32", correct: true },
          { it: "34", en: "34", correct: false },
        ],
      },
      {
        it: "I jeans gli stanno bene?", en: "Do the jeans fit him well?",
        options: [
          { it: "No, sono troppo stretti", en: "No, they're too tight", correct: false },
          { it: "Sì, gli stanno bene", en: "Yes, they fit him well", correct: true },
          { it: "No, sono troppo larghi", en: "No, they're too loose", correct: false },
        ],
      },
    ],
    [
      { it: "la vita", en: "waist" },
      { it: "scuro", en: "dark" },
    ],
    {
      question: "Come si descrive la taglia dei jeans?", questionTranslation: "How do you describe jeans sizing?",
      options: [
        { text: "Porto il 32 di vita e il 34 di lunghezza.", translation: "I wear 32 waist and 34 length.", correct: true },
        { text: "Voglio un paio di jeans chiari.", translation: "I want a pair of light jeans.", correct: false },
        { text: "Questi jeans costano troppo.", translation: "These jeans cost too much.", correct: false },
      ],
    },
  );

  await addExperience(34, "Looking for Shoes", 1, "Shopping",
    [
      { it: "Buongiorno, cerco un paio di scarpe da ginnastica.", en: "Good morning, I'm looking for a pair of trainers.", speaker: "customer" },
      { it: "Che numero porta?", en: "What size do you wear?", speaker: "shop_assistant" },
      { it: "Il 42. Avete le scarpe bianche?", en: "42. Do you have white shoes?", speaker: "customer" },
      { it: "Sì, ecco questo modello in bianco, numero 42. Le piacciono?", en: "Yes, here's this model in white, size 42. Do you like them?", speaker: "shop_assistant" },
      { it: "Sì, sono comode. Le prendo!", en: "Yes, they're comfortable. I'll take them!", speaker: "customer" },
    ],
    [
      { it: "le scarpe da ginnastica", en: "trainers", article: "le" },
      { it: "il numero", en: "shoe size", article: "il", plural: "i numeri" },
      { it: "comodo", en: "comfortable" },
    ],
    [
      {
        it: "Quale numero di scarpe porta il cliente?", en: "What shoe size does the customer wear?",
        options: [
          { it: "41", en: "41", correct: false },
          { it: "42", en: "42", correct: true },
          { it: "43", en: "43", correct: false },
        ],
      },
      {
        it: "Che colore di scarpe vuole?", en: "What colour shoes does he want?",
        options: [
          { it: "Nere", en: "Black", correct: false },
          { it: "Bianche", en: "White", correct: true },
          { it: "Blu", en: "Blue", correct: false },
        ],
      },
    ],
    [
      { it: "il modello", en: "model/style" },
      { it: "le scarpe", en: "shoes" },
    ],
    {
      question: "Come si chiede il numero di scarpe al commesso?", questionTranslation: "How do you ask for shoe size at the shop?",
      options: [
        { text: "Che numero porta?", translation: "What size do you wear?", correct: false },
        { text: "Cerco un paio di scarpe da ginnastica, numero 42.", translation: "I'm looking for a pair of trainers, size 42.", correct: true },
        { text: "Quanto costano queste scarpe?", translation: "How much are these shoes?", correct: false },
      ],
    },
    undefined,
    [
      { text: "le scarpe da ginnastica", translation: "trainers", correctValue: "trainers" },
      { text: "il numero", translation: "shoe size", correctValue: "size" },
    ],
  );

  await addExperience(34, "Choosing a Dress for an Event", 1, "Shopping",
    [
      { it: "Buongiorno, cerco un vestito elegante per una festa.", en: "Good morning, I'm looking for an elegant dress for a party.", speaker: "customer" },
      { it: "Che tipo di festa è?", en: "What kind of party is it?", speaker: "shop_assistant" },
      { it: "Una cena di gala. Vorrei qualcosa di lungo.", en: "A gala dinner. I'd like something long.", speaker: "customer" },
      { it: "Questo vestito rosso è molto elegante. Vuole provarlo?", en: "This red dress is very elegant. Would you like to try it on?", speaker: "shop_assistant" },
      { it: "Sì, e anche quel vestito nero. Li provo entrambi.", en: "Yes, and also that black dress. I'll try both on.", speaker: "customer" },
    ],
    [
      { it: "il vestito", en: "dress", article: "il", plural: "i vestiti" },
      { it: "elegante", en: "elegant" },
      { it: "la festa", en: "party", article: "la", plural: "le feste" },
    ],
    [
      {
        it: "Che tipo di vestito cerca la cliente?", en: "What kind of dress is the customer looking for?",
        options: [
          { it: "Un vestito corto casual", en: "A short casual dress", correct: false },
          { it: "Un vestito elegante lungo", en: "A long elegant dress", correct: true },
          { it: "Un vestito da mare", en: "A beach dress", correct: false },
        ],
      },
      {
        it: "Per quale occasione compra il vestito?", en: "For what occasion is she buying the dress?",
        options: [
          { it: "Una festa di compleanno", en: "A birthday party", correct: false },
          { it: "Una cena di gala", en: "A gala dinner", correct: true },
          { it: "Un matrimonio", en: "A wedding", correct: false },
        ],
      },
    ],
    [
      { it: "lungo", en: "long" },
      { it: "corto", en: "short" },
    ],
    {
      question: "Cosa dice per provare più capi insieme?", questionTranslation: "What do you say to try on multiple items?",
      options: [
        { text: "Posso provare questo vestito e anche quello?", translation: "Can I try this dress and also that one?", correct: true },
        { text: "Mi dia il vestito rosso, lo compro.", translation: "Give me the red dress, I'll buy it.", correct: false },
        { text: "Non mi piace niente.", translation: "I don't like anything.", correct: false },
      ],
    },
  );

  // ============================================================
  // Module 35 (B1, level=2) - Comparing Products
  // ============================================================
  await addExperience(35, "Comparing Price and Quality of Wine", 2, "Shopping",
    [
      { it: "Buongiorno, vorrei una bottiglia di vino rosso di qualità.", en: "Good morning, I'd like a bottle of quality red wine.", speaker: "customer" },
      { it: "Abbiamo due scelte: questo Chianti a 12 euro e questo Brunello a 35 euro.", en: "We have two options: this Chianti at 12 euros and this Brunello at 35 euros.", speaker: "shop_assistant" },
      { it: "Che differenza c'è tra i due?", en: "What's the difference between the two?", speaker: "customer" },
      { it: "Il Brunello è più corposo e invecchiato più a lungo. Il Chianti è più leggero.", en: "The Brunello is fuller-bodied and aged longer. The Chianti is lighter.", speaker: "shop_assistant" },
      { it: "Allora prendo il Brunello. Il rapporto qualità-prezzo è migliore.", en: "Then I'll take the Brunello. The value for money is better.", speaker: "customer" },
    ],
    [
      { it: "la bottiglia", en: "bottle", article: "la", plural: "le bottiglie" },
      { it: "corposo", en: "full-bodied" },
      { it: "il rapporto qualità-prezzo", en: "value for money", article: "il" },
    ],
    [
      {
        it: "Quale vino è più costoso?", en: "Which wine is more expensive?",
        options: [
          { it: "Il Chianti", en: "The Chianti", correct: false },
          { it: "Il Brunello", en: "The Brunello", correct: true },
          { it: "Costano uguale", en: "They cost the same", correct: false },
        ],
      },
      {
        it: "Quale vino sceglie il cliente alla fine?", en: "Which wine does the customer choose in the end?",
        options: [
          { it: "Il Chianti perché costa meno", en: "The Chianti because it costs less", correct: false },
          { it: "Il Brunello per la qualità migliore", en: "The Brunello for the better quality", correct: true },
          { it: "Nessuno, non compra niente", en: "None, he doesn't buy anything", correct: false },
        ],
      },
    ],
    [
      { it: "la qualità", en: "quality" },
      { it: "leggero", en: "light" },
      { it: "migliore", en: "better" },
    ],
    {
      question: "Come si chiede un confronto tra due prodotti?", questionTranslation: "How do you ask for a comparison between two products?",
      options: [
        { text: "Che differenza c'è tra questi due vini?", translation: "What's the difference between these two wines?", correct: true },
        { text: "Questo vino è buono?", translation: "Is this wine good?", correct: false },
        { text: "Vorrei il vino più economico.", translation: "I'd like the cheapest wine.", correct: false },
      ],
    },
  );

  await addExperience(35, "Comparing Smartphones", 2, "Shopping",
    [
      { it: "Sto cercando un nuovo smartphone. Questo modello è di ultima generazione?", en: "I'm looking for a new smartphone. Is this model the latest generation?", speaker: "customer" },
      { it: "Sì, questo è uscito il mese scorso. Ha una fotocamera migliore del modello precedente.", en: "Yes, this came out last month. It has a better camera than the previous model.", speaker: "shop_assistant" },
      { it: "Quanta memoria ha?", en: "How much memory does it have?", speaker: "customer" },
      { it: "128GB, contro i 64GB del modello più economico.", en: "128GB, compared to 64GB of the cheaper model.", speaker: "shop_assistant" },
      { it: "E la durata della batteria è più lunga?", en: "And is the battery life longer?", speaker: "customer" },
    ],
    [
      { it: "lo smartphone", en: "smartphone", article: "lo", plural: "gli smartphone" },
      { it: "la fotocamera", en: "camera", article: "la", plural: "le fotocamere" },
      { it: "la batteria", en: "battery", article: "la", plural: "le batterie" },
    ],
    [
      {
        it: "Qual è la differenza principale tra i due modelli?", en: "What's the main difference between the two models?",
        options: [
          { it: "Il colore", en: "The colour", correct: false },
          { it: "La memoria", en: "The memory", correct: true },
          { it: "La marca", en: "The brand", correct: false },
        ],
      },
      {
        it: "Quanta memoria ha il modello più recente?", en: "How much memory does the newer model have?",
        options: [
          { it: "64GB", en: "64GB", correct: false },
          { it: "128GB", en: "128GB", correct: true },
          { it: "256GB", en: "256GB", correct: false },
        ],
      },
    ],
    [
      { it: "di ultima generazione", en: "latest generation" },
      { it: "la memoria", en: "memory" },
      { it: "la durata", en: "duration/life" },
    ],
    {
      question: "Come si informa sulle caratteristiche tecniche di un prodotto?", questionTranslation: "How do you ask about the technical features of a product?",
      options: [
        { text: "Quanta memoria ha questo smartphone?", translation: "How much memory does this smartphone have?", correct: true },
        { text: "Questo smartphone è bello?", translation: "Is this smartphone nice-looking?", correct: false },
        { text: "Quanto è grande lo schermo?", translation: "How big is the screen?", correct: false },
      ],
    },
  );

  await addExperience(35, "Choosing Between Two Jackets", 2, "Shopping",
    [
      { it: "Non so quale giacca scegliere. Questa è più calda?", en: "I don't know which jacket to choose. Is this one warmer?", speaker: "customer" },
      { it: "Sì, questa è imbottita ed è più adatta per l'inverno. L'altra è più leggera.", en: "Yes, this one is padded and more suitable for winter. The other is lighter.", speaker: "shop_assistant" },
      { it: "E come materiale? Questa è di lana, l'altra è sintetica?", en: "And the material? This one is wool, the other is synthetic?", speaker: "customer" },
      { it: "Esatto. La giacca di lana è più costosa, ma dura più a lungo.", en: "Exactly. The wool jacket is more expensive, but it lasts longer.", speaker: "shop_assistant" },
      { it: "Preferisco la lana. Allora prendo questa. I materiali naturali sono meglio.", en: "I prefer wool. Then I'll take this one. Natural materials are better.", speaker: "customer" },
    ],
    [
      { it: "la giacca", en: "jacket", article: "la", plural: "le giacche" },
      { it: "imbottito", en: "padded" },
      { it: "la lana", en: "wool", article: "la" },
    ],
    [
      {
        it: "Quale giacca è più adatta per l'inverno?", en: "Which jacket is more suitable for winter?",
        options: [
          { it: "La giacca leggera", en: "The light jacket", correct: false },
          { it: "La giacca imbottita", en: "The padded jacket", correct: true },
          { it: "Sono uguali", en: "They're the same", correct: false },
        ],
      },
      {
        it: "Perché il cliente sceglie la giacca di lana?", en: "Why does the customer choose the wool jacket?",
        options: [
          { it: "Costa meno", en: "It costs less", correct: false },
          { it: "È di materiale naturale e dura di più", en: "It's natural material and lasts longer", correct: true },
          { it: "È sintetica", en: "It's synthetic", correct: false },
        ],
      },
    ],
    [
      { it: "il materiale", en: "material" },
      { it: "sintetico", en: "synthetic" },
      { it: "naturale", en: "natural" },
    ],
    {
      question: "Come si confrontano due capi di abbigliamento?", questionTranslation: "How do you compare two clothing items?",
      options: [
        { text: "Quale differenza c'è tra queste due giacche?", translation: "What's the difference between these two jackets?", correct: true },
        { text: "Questa giacca mi piace molto.", translation: "I really like this jacket.", correct: false },
        { text: "Avete questa giacca in un altro colore?", translation: "Do you have this jacket in another colour?", correct: false },
      ],
    },
  );

  await addExperience(35, "Organic vs Conventional Produce", 2, "Shopping",
    [
      { it: "Queste mele sono biologiche? Hanno un aspetto diverso.", en: "Are these apples organic? They look different.", speaker: "customer" },
      { it: "Sì, quelle a sinistra sono biologiche, quelle a destra sono convenzionali.", en: "Yes, the ones on the left are organic, the ones on the right are conventional.", speaker: "seller" },
      { it: "Il prezzo è molto diverso. Le biologiche costano di più.", en: "The price is very different. The organic ones cost more.", speaker: "customer" },
      { it: "Certo, perché la coltivazione biologica richiede più lavoro e non usa pesticidi.", en: "Of course, because organic farming requires more work and doesn't use pesticides.", speaker: "seller" },
      { it: "Capisco. Ne prendo un chilo. Meglio spendere di più per la salute.", en: "I understand. I'll take a kilo. Better to spend more for health.", speaker: "customer" },
    ],
    [
      { it: "biologico", en: "organic" },
      { it: "convenzionale", en: "conventional" },
      { it: "il pesticida", en: "pesticide", article: "il", plural: "i pesticidi" },
    ],
    [
      {
        it: "Quali mele costano di più?", en: "Which apples cost more?",
        options: [
          { it: "Quelle convenzionali", en: "The conventional ones", correct: false },
          { it: "Quelle biologiche", en: "The organic ones", correct: true },
          { it: "Costano uguale", en: "They cost the same", correct: false },
        ],
      },
      {
        it: "Perché il cliente sceglie le mele biologiche?", en: "Why does the customer choose the organic apples?",
        options: [
          { it: "Perché costano meno", en: "Because they cost less", correct: false },
          { it: "Perché sono più grandi", en: "Because they're bigger", correct: false },
          { it: "Perché sono migliori per la salute", en: "Because they're better for health", correct: true },
        ],
      },
    ],
    [
      { it: "a sinistra", en: "on the left" },
      { it: "la salute", en: "health" },
    ],
    {
      question: "Come si chiede se un prodotto è biologico?", questionTranslation: "How do you ask if a product is organic?",
      options: [
        { text: "Queste mele sono biologiche?", translation: "Are these apples organic?", correct: true },
        { text: "Queste mele sono dolci?", translation: "Are these apples sweet?", correct: false },
        { text: "Queste mele vengono dall'Italia?", translation: "Do these apples come from Italy?", correct: false },
      ],
    },
  );

  await addExperience(35, "Comparing Prices at Different Stores", 2, "Shopping",
    [
      { it: "Ho visto lo stesso frullatore in un altro negozio a meno prezzo.", en: "I saw the same blender at another store for a lower price.", speaker: "customer" },
      { it: "Quanto costava laggiù?", en: "How much did it cost there?", speaker: "shop_assistant" },
      { it: "40 euro, mentre qui costa 50 euro. Potete fare un prezzo migliore?", en: "40 euros, while here it costs 50 euros. Can you offer a better price?", speaker: "customer" },
      { it: "Facciamo 45 euro e includiamo la garanzia estesa.", en: "We'll do 45 euros and include the extended warranty.", speaker: "shop_assistant" },
      { it: "Allora lo compro qui. 45 euro con la garanzia è un buon affare.", en: "Then I'll buy it here. 45 euros with the warranty is a good deal.", speaker: "customer" },
    ],
    [
      { it: "il frullatore", en: "blender", article: "il", plural: "i frullatori" },
      { it: "la garanzia", en: "warranty", article: "la", plural: "le garanzie" },
      { it: "l'affare", en: "deal/bargain", article: "l'", plural: "gli affari" },
    ],
    [
      {
        it: "Dove il cliente ha visto il frullatore a meno prezzo?", en: "Where did the customer see the blender at a lower price?",
        options: [
          { it: "Online", en: "Online", correct: false },
          { it: "In un altro negozio", en: "In another store", correct: true },
          { it: "In un catalogo", en: "In a catalogue", correct: false },
        ],
      },
      {
        it: "Qual è l'offerta finale del negoziante?", en: "What is the final offer from the shopkeeper?",
        options: [
          { it: "50 euro senza garanzia", en: "50 euros without warranty", correct: false },
          { it: "45 euro con garanzia estesa", en: "45 euros with extended warranty", correct: true },
          { it: "40 euro come l'altro negozio", en: "40 euros like the other store", correct: false },
        ],
      },
    ],
    [
      { it: "mentre", en: "while" },
      { it: "includere", en: "to include" },
    ],
    {
      question: "Cosa dice per chiedere uno sconto basato sul prezzo di un concorrente?", questionTranslation: "What do you say to ask for a discount based on a competitor's price?",
      options: [
        { text: "In un altro negozio costa meno. Potete fare lo stesso prezzo?", translation: "It costs less at another store. Can you match the price?", correct: true },
        { text: "Questo prodotto è troppo caro.", translation: "This product is too expensive.", correct: false },
        { text: "Vorrei parlare con il direttore.", translation: "I'd like to speak to the manager.", correct: false },
      ],
    },
  );

  // ============================================================
  // Module 36 (B1, level=2) - Returns & Exchanges
  // ============================================================
  await addExperience(36, "Returning a Faulty Product", 2, "Shopping",
    [
      { it: "Buongiorno, ho comprato questo asciugacapelli ieri ma non funziona.", en: "Good morning, I bought this hairdryer yesterday but it doesn't work.", speaker: "customer" },
      { it: "Ha portato lo scontrino?", en: "Did you bring the receipt?", speaker: "shop_assistant" },
      { it: "Sì, eccolo. Il prodotto è difettoso, l'ho usato solo una volta.", en: "Yes, here it is. The product is faulty, I only used it once.", speaker: "customer" },
      { it: "Mi dispiace. Possiamo sostituirlo o rimborsarlo.", en: "I'm sorry. We can replace it or refund it.", speaker: "shop_assistant" },
      { it: "Preferisco un rimborso, grazie.", en: "I prefer a refund, thank you.", speaker: "customer" },
    ],
    [
      { it: "l'asciugacapelli", en: "hairdryer", article: "l'" },
      { it: "lo scontrino", en: "receipt", article: "lo", plural: "gli scontrini" },
      { it: "difettoso", en: "faulty" },
    ],
    [
      {
        it: "Perché il cliente vuole restituire l'asciugacapelli?", en: "Why does the customer want to return the hairdryer?",
        options: [
          { it: "Non gli piace il colore", en: "He doesn't like the colour", correct: false },
          { it: "Non funziona", en: "It doesn't work", correct: true },
          { it: "È troppo piccolo", en: "It's too small", correct: false },
        ],
      },
      {
        it: "Cosa sceglie il cliente tra sostituzione e rimborso?", en: "What does the customer choose between replacement and refund?",
        options: [
          { it: "La sostituzione", en: "Replacement", correct: false },
          { it: "Il rimborso", en: "Refund", correct: true },
          { it: "Un buono sconto", en: "A discount voucher", correct: false },
        ],
      },
    ],
    [
      { it: "restituire", en: "to return" },
      { it: "il rimborso", en: "refund" },
      { it: "funzionare", en: "to work" },
    ],
    {
      question: "Cosa dice per restituire un prodotto difettoso?", questionTranslation: "What do you say to return a faulty product?",
      options: [
        { text: "Ho comprato questo prodotto ma è difettoso. Vorrei un rimborso.", translation: "I bought this product but it's faulty. I'd like a refund.", correct: true },
        { text: "Questo prodotto non mi piace più.", translation: "I don't like this product anymore.", correct: false },
        { text: "Posso avere uno sconto sul prossimo acquisto?", translation: "Can I have a discount on my next purchase?", correct: false },
      ],
    },
  );

  await addExperience(36, "Exchanging a Wrong Size", 2, "Shopping",
    [
      { it: "Buongiorno, ho comprato queste scarpe online ma la taglia è sbagliata.", en: "Good morning, I bought these shoes online but the size is wrong.", speaker: "customer" },
      { it: "Ha l'email di conferma dell'ordine?", en: "Do you have the order confirmation email?", speaker: "shop_assistant" },
      { it: "Sì, eccola. Ho ordinato il 39 ma mi avete mandato il 38.", en: "Yes, here it is. I ordered size 39 but you sent me size 38.", speaker: "customer" },
      { it: "Mi scuso per l'errore. Possiamo fare il cambio senza costi aggiuntivi.", en: "I apologize for the error. We can do the exchange at no extra cost.", speaker: "shop_assistant" },
      { it: "Perfetto. Quanto tempo ci vuole per ricevere il paio giusto?", en: "Perfect. How long does it take to receive the right pair?", speaker: "customer" },
    ],
    [
      { it: "la conferma", en: "confirmation", article: "la", plural: "le conferme" },
      { it: "l'ordine", en: "order", article: "l'", plural: "gli ordini" },
      { it: "il cambio", en: "exchange", article: "il", plural: "i cambi" },
    ],
    [
      {
        it: "Qual è il problema con le scarpe?", en: "What's the problem with the shoes?",
        options: [
          { it: "Sono rotte", en: "They are broken", correct: false },
          { it: "La taglia è sbagliata", en: "The size is wrong", correct: true },
          { it: "Non piacciono al cliente", en: "The customer doesn't like them", correct: false },
        ],
      },
      {
        it: "Il cambio ha costi aggiuntivi?", en: "Does the exchange have extra costs?",
        options: [
          { it: "Sì, 5 euro", en: "Yes, 5 euros", correct: false },
          { it: "No, è gratuito", en: "No, it's free", correct: true },
          { it: "Dipende dal prodotto", en: "Depends on the product", correct: false },
        ],
      },
    ],
    [
      { it: "sbagliato", en: "wrong" },
      { it: "aggiuntivo", en: "additional" },
    ],
    {
      question: "Come si spiega un errore nella taglia ricevuta?", questionTranslation: "How do you explain a mistake in the size received?",
      options: [
        { text: "Ho ordinato il 39 ma ho ricevuto il 38.", translation: "I ordered size 39 but received size 38.", correct: true },
        { text: "Queste scarpe non mi stanno bene.", translation: "These shoes don't fit me well.", correct: false },
        { text: "Vorrei provare un altro modello.", translation: "I'd like to try another model.", correct: false },
      ],
    },
  );

  await addExperience(36, "Returning After the Return Period", 2, "Shopping",
    [
      { it: "Buongiorno, vorrei restituire questo maglione che ho comprato tre settimane fa.", en: "Good morning, I'd like to return this sweater I bought three weeks ago.", speaker: "customer" },
      { it: "Mi dispiace, ma la nostra politica di reso è di 14 giorni.", en: "I'm sorry, but our return policy is 14 days.", speaker: "shop_assistant" },
      { it: "Lo so, ma il maglione si è rovinato dopo il primo lavaggio.", en: "I know, but the sweater got ruined after the first wash.", speaker: "customer" },
      { it: "Ha seguito le istruzioni di lavaggio sull'etichetta?", en: "Did you follow the washing instructions on the label?", speaker: "shop_assistant" },
      { it: "Sì, altrimenti non lo riporterei. È un difetto di fabbricazione.", en: "Yes, otherwise I wouldn't return it. It's a manufacturing defect.", speaker: "customer" },
    ],
    [
      { it: "il maglione", en: "sweater", article: "il", plural: "i maglioni" },
      { it: "la politica di reso", en: "return policy", article: "la" },
      { it: "il difetto di fabbricazione", en: "manufacturing defect", article: "il", plural: "i difetti di fabbricazione" },
    ],
    [
      {
        it: "Qual è il problema con il maglione?", en: "What's the problem with the sweater?",
        options: [
          { it: "È troppo grande", en: "It's too big", correct: false },
          { it: "Si è rovinato dopo il lavaggio", en: "It got ruined after washing", correct: true },
          { it: "Non piace al cliente", en: "The customer doesn't like it", correct: false },
        ],
      },
      {
        it: "Perché il negozio potrebbe accettare il reso comunque?", en: "Why might the store accept the return anyway?",
        options: [
          { it: "Per gentilezza", en: "Out of kindness", correct: false },
          { it: "Perché è un difetto di fabbricazione", en: "Because it's a manufacturing defect", correct: true },
          { it: "Perché il cliente insiste", en: "Because the customer insists", correct: false },
        ],
      },
    ],
    [
      { it: "il lavaggio", en: "wash/washing" },
      { it: "l'etichetta", en: "label" },
    ],
    {
      question: "Cosa dice se il prodotto si è rovinato dopo il primo utilizzo?", questionTranslation: "What do you say if the product got ruined after first use?",
      options: [
        { text: "Il prodotto si è rovinato dopo il primo lavaggio. È un difetto.", translation: "The product got ruined after the first wash. It's a defect.", correct: true },
        { text: "Non mi piace più, vorrei cambiarlo.", translation: "I don't like it anymore, I'd like to exchange it.", correct: false },
        { text: "Avete un altro colore?", translation: "Do you have another colour?", correct: false },
      ],
    },
  );

  await addExperience(36, "Getting a Refund for a Gift", 2, "Shopping",
    [
      { it: "Buongiorno, ho ricevuto questa borsa come regalo ma non mi piace molto.", en: "Good morning, I received this bag as a gift but I don't really like it.", speaker: "customer" },
      { it: "Ha il tagliando del prezzo ancora attaccato?", en: "Is the price tag still attached?", speaker: "shop_assistant" },
      { it: "Sì, è ancora nuovo con l'etichetta. Non ho lo scontrino però.", en: "Yes, it's still new with the tag. However, I don't have the receipt.", speaker: "customer" },
      { it: "Senza scontrino possiamo fare solo un buono acquisto dello stesso valore.", en: "Without a receipt we can only give a store credit of the same value.", speaker: "shop_assistant" },
      { it: "Va bene, accetto il buono. Così posso scegliere qualcosa che mi piace.", en: "That's fine, I'll accept the store credit. That way I can choose something I like.", speaker: "customer" },
    ],
    [
      { it: "la borsa", en: "bag", article: "la", plural: "le borse" },
      { it: "il regalo", en: "gift", article: "il", plural: "i regali" },
      { it: "il buono acquisto", en: "store credit/gift card", article: "il", plural: "i buoni acquisto" },
    ],
    [
      {
        it: "Perché il cliente vuole restituire la borsa?", en: "Why does the customer want to return the bag?",
        options: [
          { it: "È rotta", en: "It's broken", correct: false },
          { it: "Non gli piace molto", en: "He doesn't really like it", correct: true },
          { it: "È troppo piccola", en: "It's too small", correct: false },
        ],
      },
      {
        it: "Cosa offre il negozio senza scontrino?", en: "What does the store offer without a receipt?",
        options: [
          { it: "Un rimborso in contanti", en: "A cash refund", correct: false },
          { it: "Un buono acquisto", en: "A store credit", correct: true },
          { it: "Niente", en: "Nothing", correct: false },
        ],
      },
    ],
    [
      { it: "il tagliando del prezzo", en: "price tag" },
      { it: "accettare", en: "to accept" },
    ],
    {
      question: "Cosa dice per restituire un regalo senza scontrino?", questionTranslation: "What do you say to return a gift without a receipt?",
      options: [
        { text: "Ho ricevuto questa borsa come regalo ma non ho lo scontrino.", translation: "I received this bag as a gift but I don't have the receipt.", correct: true },
        { text: "Questa borsa è troppo cara.", translation: "This bag is too expensive.", correct: false },
        { text: "Vorrei comprare questa borsa in un altro colore.", translation: "I'd like to buy this bag in another colour.", correct: false },
      ],
    },
  );

  await addExperience(36, "Returning an Online Purchase", 2, "Shopping",
    [
      { it: "Ho ricevuto il pacco ma manca un articolo.", en: "I received the package but an item is missing.", speaker: "customer" },
      { it: "Mi dispiace per l'inconveniente. Può mandarmi una foto del contenuto?", en: "I'm sorry for the inconvenience. Can you send me a photo of the contents?", speaker: "customer_service" },
      { it: "Certo. Ecco la foto. Manca la lampada che ho ordinato.", en: "Of course. Here's the photo. The lamp I ordered is missing.", speaker: "customer" },
      { it: "Ha ragione. Le spediamo subito la lampada mancante senza costi.", en: "You're right. We'll send you the missing lamp right away at no cost.", speaker: "customer_service" },
      { it: "Grazie. E per il reso degli altri articoli, come funziona?", en: "Thank you. And for returning the other items, how does it work?", speaker: "customer" },
    ],
    [
      { it: "il pacco", en: "package", article: "il", plural: "i pacchi" },
      { it: "l'articolo", en: "item/article", article: "l'", plural: "gli articoli" },
      { it: "il contenuto", en: "contents", article: "il" },
    ],
    [
      {
        it: "Qual è il problema con l'ordine?", en: "What's the problem with the order?",
        options: [
          { it: "Il pacco è danneggiato", en: "The package is damaged", correct: false },
          { it: "Manca un articolo", en: "An item is missing", correct: true },
          { it: "L'articolo è sbagliato", en: "The item is wrong", correct: false },
        ],
      },
      {
        it: "Cosa fa il servizio clienti per risolvere il problema?", en: "What does customer service do to solve the problem?",
        options: [
          { it: "Offre un rimborso parziale", en: "Offers a partial refund", correct: false },
          { it: "Spedisce l'articolo mancante senza costi", en: "Ships the missing item at no cost", correct: true },
          { it: "Chiede di rispedire tutto indietro", en: "Asks to send everything back", correct: false },
        ],
      },
    ],
    [
      { it: "mancare", en: "to be missing" },
      { it: "spedire", en: "to ship" },
    ],
    {
      question: "Come si segnala un articolo mancante in un ordine online?", questionTranslation: "How do you report a missing item in an online order?",
      options: [
        { text: "Ho ricevuto il pacco ma manca un articolo.", translation: "I received the package but an item is missing.", correct: true },
        { text: "Il pacco è in ritardo.", translation: "The package is late.", correct: false },
        { text: "Vorrei annullare l'ordine.", translation: "I'd like to cancel the order.", correct: false },
      ],
    },
  );

  // ============================================================
  // Module 37 (B2, level=3) - Customer Service
  // ============================================================
  await addExperience(37, "Filing a Formal Complaint", 3, "Shopping",
    [
      { it: "Buongiorno, vorrei presentare un reclamo formale per un prodotto acquistato.", en: "Good morning, I'd like to file a formal complaint about a purchased product.", speaker: "customer" },
      { it: "Prego, mi dica qual è il problema.", en: "Please, tell me what the problem is.", speaker: "customer_service" },
      { it: "Ho comprato un frigorifero la settimana scorsa e non raffredda correttamente.", en: "I bought a refrigerator last week and it doesn't cool properly.", speaker: "customer" },
      { it: "Ha già contattato il servizio di assistenza tecnica?", en: "Have you already contacted technical support?", speaker: "customer_service" },
      { it: "Sì, ma non hanno risolto il problema. Vorrei parlare con il responsabile.", en: "Yes, but they didn't solve the problem. I'd like to speak with the manager.", speaker: "customer" },
    ],
    [
      { it: "il reclamo", en: "complaint", article: "il", plural: "i reclami" },
      { it: "il frigorifero", en: "refrigerator", article: "il", plural: "i frigoriferi" },
      { it: "il responsabile", en: "manager", article: "il", plural: "i responsabili" },
    ],
    [
      {
        it: "Qual è il problema con il frigorifero?", en: "What's the problem with the refrigerator?",
        options: [
          { it: "Fa troppo rumore", en: "It makes too much noise", correct: false },
          { it: "Non raffredda correttamente", en: "It doesn't cool properly", correct: true },
          { it: "Non si apre bene", en: "It doesn't open well", correct: false },
        ],
      },
      {
        it: "Perché il cliente vuole parlare con il responsabile?", en: "Why does the customer want to speak with the manager?",
        options: [
          { it: "Per chiedere uno sconto", en: "To ask for a discount", correct: false },
          { it: "Perché l'assistenza tecnica non ha risolto il problema", en: "Because technical support didn't solve the problem", correct: true },
          { it: "Per fare amicizia", en: "To make friends", correct: false },
        ],
      },
    ],
    [
      { it: "presentare un reclamo", en: "to file a complaint" },
      { it: "l'assistenza tecnica", en: "technical support" },
      { it: "risolvere", en: "to solve" },
    ],
    {
      question: "Cosa dice per chiedere di parlare con un responsabile?", questionTranslation: "What do you say to ask to speak with a manager?",
      options: [
        { text: "L'assistenza tecnica non ha risolto il problema. Vorrei parlare con il responsabile.", translation: "Technical support didn't solve the problem. I'd like to speak with the manager.", correct: true },
        { text: "Il prodotto non funziona, cosa posso fare?", translation: "The product doesn't work, what can I do?", correct: false },
        { text: "Vorrei un rimborso immediato.", translation: "I'd like an immediate refund.", correct: false },
      ],
    },
  );

  await addExperience(37, "Joining a Loyalty Program", 3, "Shopping",
    [
      { it: "Ho sentito parlare del vostro programma fedeltà. Come funziona?", en: "I heard about your loyalty program. How does it work?", speaker: "customer" },
      { it: "Con la nostra carta fedeltà accumula punti su ogni acquisto. Ogni 100 punti riceve 10 euro di sconto.", en: "With our loyalty card you earn points on every purchase. Every 100 points you get 10 euros off.", speaker: "shop_assistant" },
      { it: "E come si ottiene la carta? C'è un costo di iscrizione?", en: "And how do you get the card? Is there a membership fee?", speaker: "customer" },
      { it: "No, l'iscrizione è gratuita. Può registrarsi online o direttamente in negozio.", en: "No, membership is free. You can register online or directly in-store.", speaker: "shop_assistant" },
      { it: "Perfetto, mi registro subito. Ci sono anche offerte esclusive per i soci?", en: "Perfect, I'll register right away. Are there also exclusive offers for members?", speaker: "customer" },
    ],
    [
      { it: "il programma fedeltà", en: "loyalty program", article: "il", plural: "i programmi fedeltà" },
      { it: "il punto", en: "point", article: "il", plural: "i punti" },
      { it: "l'iscrizione", en: "membership/registration", article: "l'", plural: "le iscrizioni" },
    ],
    [
      {
        it: "Ogni quanti punti si ottiene uno sconto di 10 euro?", en: "How many points do you need to get 10 euros off?",
        options: [
          { it: "50 punti", en: "50 points", correct: false },
          { it: "100 punti", en: "100 points", correct: true },
          { it: "200 punti", en: "200 points", correct: false },
        ],
      },
      {
        it: "L'iscrizione al programma fedeltà è a pagamento?", en: "Is the loyalty program membership paid?",
        options: [
          { it: "Sì, costa 10 euro all'anno", en: "Yes, costs 10 euros per year", correct: false },
          { it: "No, è gratuita", en: "No, it's free", correct: true },
          { it: "Dipende dal negozio", en: "Depends on the store", correct: false },
        ],
      },
    ],
    [
      { it: "accumulare", en: "to accumulate" },
      { it: "gratuito", en: "free of charge" },
      { it: "esclusivo", en: "exclusive" },
    ],
    {
      question: "Come si chiedono informazioni sul programma fedeltà?", questionTranslation: "How do you ask about the loyalty program?",
      options: [
        { text: "Ho sentito parlare del vostro programma fedeltà, come funziona?", translation: "I heard about your loyalty program, how does it work?", correct: true },
        { text: "Quanto costa questo prodotto?", translation: "How much does this product cost?", correct: false },
        { text: "Accettate carte di credito?", translation: "Do you accept credit cards?", correct: false },
      ],
    },
  );

  await addExperience(37, "Handling a Billing Error", 3, "Shopping",
    [
      { it: "Buongiorno, nella mia ultima fattura c'è un addebito che non riconosco.", en: "Good morning, in my last invoice there's a charge I don't recognize.", speaker: "customer" },
      { it: "Mi faccia vedere la fattura. Quale addebito non riconosce?", en: "Let me see the invoice. Which charge don't you recognize?", speaker: "customer_service" },
      { it: "Questa voce di 45 euro per un abbonamento che non ho mai attivato.", en: "This item of 45 euros for a subscription I never activated.", speaker: "customer" },
      { it: "Ha ragione, è stato un errore del nostro sistema. Provvedo subito allo storno.", en: "You're right, it was a system error. I'll proceed with the reversal immediately.", speaker: "customer_service" },
      { it: "Grazie. E quando vedrò il rimborso sul conto?", en: "Thank you. And when will I see the refund in my account?", speaker: "customer" },
    ],
    [
      { it: "la fattura", en: "invoice", article: "la", plural: "le fatture" },
      { it: "l'addebito", en: "charge/debit", article: "l'", plural: "gli addebiti" },
      { it: "lo storno", en: "reversal", article: "lo", plural: "gli storni" },
    ],
    [
      {
        it: "Qual è il problema con la fattura?", en: "What's the problem with the invoice?",
        options: [
          { it: "Il totale è sbagliato", en: "The total is wrong", correct: false },
          { it: "C'è un addebito non riconosciuto", en: "There's an unrecognized charge", correct: true },
          { it: "Manca una fattura", en: "An invoice is missing", correct: false },
        ],
      },
      {
        it: "Cosa fa il servizio clienti per risolvere?", en: "What does customer service do to resolve it?",
        options: [
          { it: "Chiede di pagare comunque", en: "Asks to pay anyway", correct: false },
          { it: "Procede con lo storno", en: "Proceeds with the reversal", correct: true },
          { it: "Offre uno sconto", en: "Offers a discount", correct: false },
        ],
      },
    ],
    [
      { it: "riconoscere", en: "to recognize" },
      { it: "provvedere", en: "to take action" },
    ],
    {
      question: "Come si contesta un addebito non riconosciuto?", questionTranslation: "How do you dispute an unrecognized charge?",
      options: [
        { text: "Nella mia fattura c'è un addebito che non riconosco.", translation: "In my invoice there's a charge I don't recognize.", correct: true },
        { text: "Non ho ricevuto la fattura.", translation: "I didn't receive the invoice.", correct: false },
        { text: "La fattura è in ritardo.", translation: "The invoice is late.", correct: false },
      ],
    },
  );

  await addExperience(37, "Requesting Extended Warranty Service", 3, "Shopping",
    [
      { it: "Ho acquistato una lavatrice con garanzia estesa e ora ha un problema.", en: "I bought a washing machine with extended warranty and now it has a problem.", speaker: "customer" },
      { it: "Qual è il numero di serie del prodotto e il codice della garanzia?", en: "What is the product serial number and the warranty code?", speaker: "customer_service" },
      { it: "Il numero di serie è WM-2024-789 e il codice garanzia è EXT-4567.", en: "The serial number is WM-2024-789 and the warranty code is EXT-4567.", speaker: "customer" },
      { it: "La garanzia è ancora valida. Prenoto un tecnico per domani tra le 14 e le 17.", en: "The warranty is still valid. I'll book a technician for tomorrow between 2 PM and 5 PM.", speaker: "customer_service" },
      { it: "La visita del tecnico è inclusa nella garanzia o devo pagare?", en: "Is the technician visit included in the warranty or do I need to pay?", speaker: "customer" },
    ],
    [
      { it: "la lavatrice", en: "washing machine", article: "la", plural: "le lavatrici" },
      { it: "il numero di serie", en: "serial number", article: "il" },
      { it: "il tecnico", en: "technician", article: "il", plural: "i tecnici" },
    ],
    [
      {
        it: "Quale prodotto ha un problema?", en: "Which product has a problem?",
        options: [
          { it: "Un frigorifero", en: "A refrigerator", correct: false },
          { it: "Una lavatrice", en: "A washing machine", correct: true },
          { it: "Un forno", en: "An oven", correct: false },
        ],
      },
      {
        it: "La garanzia estesa copre la visita del tecnico?", en: "Does the extended warranty cover the technician visit?",
        options: [
          { it: "No, bisogna pagare a parte", en: "No, you need to pay separately", correct: false },
          { it: "Dipende dal tipo di guasto", en: "Depends on the type of fault", correct: false },
          { it: "La domanda non riceve risposta chiara nella conversazione", en: "The question doesn't get a clear answer in the conversation", correct: false },
        ],
      },
    ],
    [
      { it: "la garanzia estesa", en: "extended warranty" },
      { it: "valido", en: "valid" },
      { it: "prenotare", en: "to book" },
    ],
    {
      question: "Cosa dice per attivare la garanzia su un prodotto?", questionTranslation: "What do you say to activate warranty service on a product?",
      options: [
        { text: "Ho una garanzia estesa sulla lavatrice. Ha un problema e vorrei un tecnico.", translation: "I have an extended warranty on the washing machine. It has a problem and I'd like a technician.", correct: true },
        { text: "La mia lavatrice non funziona più.", translation: "My washing machine doesn't work anymore.", correct: false },
        { text: "Vorrei comprare una nuova garanzia.", translation: "I'd like to buy a new warranty.", correct: false },
      ],
    },
  );

  await addExperience(37, "Escalating a Customer Service Issue", 3, "Shopping",
    [
      { it: "Ho già contattato il servizio clienti tre volte senza ricevere una soluzione.", en: "I've already contacted customer service three times without receiving a solution.", speaker: "customer" },
      { it: "Mi dispiace per l'esperienza negativa. Mi lasci verificare la sua pratica.", en: "I'm sorry for the negative experience. Let me check your file.", speaker: "customer_service" },
      { it: "Il problema è che il divano che ho ordinato due mesi fa non è ancora stato consegnato.", en: "The problem is that the sofa I ordered two months ago hasn't been delivered yet.", speaker: "customer" },
      { it: "Vedo che c'è stato un ritardo nella produzione. Posso offrirle un rimborso parziale del 15%.", en: "I see there was a delay in production. I can offer you a partial refund of 15%.", speaker: "customer_service" },
      { it: "Preferirei una soluzione più concreta. Aggiungete anche la spedizione gratuita.", en: "I'd prefer a more concrete solution. Also include free shipping.", speaker: "customer" },
    ],
    [
      { it: "la pratica", en: "file/case", article: "la", plural: "le pratiche" },
      { it: "il divano", en: "sofa", article: "il", plural: "i divani" },
      { it: "la spedizione", en: "shipping/delivery", article: "la", plural: "le spedizioni" },
    ],
    [
      {
        it: "Quante volte il cliente ha contattato il servizio clienti?", en: "How many times has the customer contacted customer service?",
        options: [
          { it: "Una volta", en: "Once", correct: false },
          { it: "Due volte", en: "Twice", correct: false },
          { it: "Tre volte", en: "Three times", correct: true },
        ],
      },
      {
        it: "Quale compensazione offre inizialmente il servizio clienti?", en: "What compensation does customer service initially offer?",
        options: [
          { it: "Un rimborso completo", en: "A full refund", correct: false },
          { it: "Un rimborso parziale del 15%", en: "A partial refund of 15%", correct: true },
          { it: "Un buono sconto", en: "A discount voucher", correct: false },
        ],
      },
    ],
    [
      { it: "concreto", en: "concrete" },
      { it: "la compensazione", en: "compensation" },
    ],
    {
      question: "Come si lamenta di un servizio clienti inefficace?", questionTranslation: "How do you complain about ineffective customer service?",
      options: [
        { text: "Ho contattato il servizio clienti più volte senza ricevere una soluzione.", translation: "I've contacted customer service multiple times without receiving a solution.", correct: true },
        { text: "Il vostro servizio clienti è terribile.", translation: "Your customer service is terrible.", correct: false },
        { text: "Non comprerò mai più da voi.", translation: "I'll never buy from you again.", correct: false },
      ],
    },
  );

  // ============================================================
  // Module 38 (B2, level=3) - Negotiating
  // ============================================================
  await addExperience(38, "Haggling at a Flea Market", 3, "Shopping",
    [
      { it: "Quanto vuole per questo orologio vintage?", en: "How much do you want for this vintage watch?", speaker: "customer" },
      { it: "80 euro. È un pezzo unico degli anni '60.", en: "80 euros. It's a unique piece from the 1960s.", speaker: "seller" },
      { it: "È interessante, ma 80 euro mi sembrano troppi. Posso offrirle 50?", en: "It's interesting, but 80 euros seems like too much. Can I offer 50?", speaker: "customer" },
      { it: "È troppo poco. Posso scendere a 70, ma non meno.", en: "That's too low. I can go down to 70, but not less.", speaker: "seller" },
      { it: "Facciamo 60 e chiudiamo l'affare. Se no lascio perdere.", en: "Let's make it 60 and close the deal. Otherwise I'll pass.", speaker: "customer" },
    ],
    [
      { it: "l'orologio", en: "watch", article: "l'", plural: "gli orologi" },
      { it: "vintage", en: "vintage" },
      { it: "il pezzo unico", en: "unique piece", article: "il", plural: "i pezzi unici" },
    ],
    [
      {
        it: "Quanto costa inizialmente l'orologio?", en: "How much does the watch cost initially?",
        options: [
          { it: "60 euro", en: "60 euros", correct: false },
          { it: "70 euro", en: "70 euros", correct: false },
          { it: "80 euro", en: "80 euros", correct: true },
        ],
      },
      {
        it: "A che prezzo chiudono l'affare?", en: "At what price do they close the deal?",
        options: [
          { it: "50 euro", en: "50 euros", correct: false },
          { it: "60 euro", en: "60 euros", correct: true },
          { it: "70 euro", en: "70 euros", correct: false },
        ],
      },
    ],
    [
      { it: "contrattare", en: "to bargain/haggle" },
      { it: "offrire", en: "to offer" },
      { it: "scendere", en: "to go down (in price)" },
    ],
    {
      question: "Come si fa un'offerta più bassa al mercatino?", questionTranslation: "How do you make a lower offer at the flea market?",
      options: [
        { text: "80 euro è troppo. Posso offrirle 60?", translation: "80 euros is too much. Can I offer you 60?", correct: true },
        { text: "Quanto costa questo orologio?", translation: "How much is this watch?", correct: false },
        { text: "Questo orologio è bellissimo.", translation: "This watch is beautiful.", correct: false },
      ],
    },
  );

  await addExperience(38, "Negotiating a Bulk Discount", 3, "Shopping",
    [
      { it: "Buongiorno, rappresento un'associazione culturale. Vorrei acquistare 20 libri.", en: "Good morning, I represent a cultural association. I'd like to purchase 20 books.", speaker: "customer" },
      { it: "Che libri ha scelto? Il prezzo di copertina è 25 euro ciascuno.", en: "Which books have you chosen? The cover price is 25 euros each.", speaker: "shop_assistant" },
      { it: "Questi tre titoli. Per un ordine così grande, potete farmi uno sconto?", en: "These three titles. For such a large order, can you give me a discount?", speaker: "customer" },
      { it: "Per un acquisto all'ingrosso possiamo offrire il 15% di sconto. Il totale sarebbe 425 euro.", en: "For a bulk purchase, we can offer 15% off. The total would be 425 euros.", speaker: "shop_assistant" },
      { it: "Se arrivate al 20% di sconto, ordino anche 10 copie di un quarto titolo.", en: "If you reach 20% off, I'll also order 10 copies of a fourth title.", speaker: "customer" },
    ],
    [
      { it: "l'associazione culturale", en: "cultural association", article: "l'" },
      { it: "il libro", en: "book", article: "il", plural: "i libri" },
      { it: "all'ingrosso", en: "wholesale/bulk" },
    ],
    [
      {
        it: "Quanti libri vuole acquistare inizialmente il cliente?", en: "How many books does the customer initially want to buy?",
        options: [
          { it: "10", en: "10", correct: false },
          { it: "20", en: "20", correct: true },
          { it: "30", en: "30", correct: false },
        ],
      },
      {
        it: "Che sconto ottiene il cliente sulla prima offerta?", en: "What discount does the customer get on the first offer?",
        options: [
          { it: "10%", en: "10%", correct: false },
          { it: "15%", en: "15%", correct: true },
          { it: "20%", en: "20%", correct: false },
        ],
      },
    ],
    [
      { it: "lo sconto", en: "discount" },
      { it: "il titolo", en: "title" },
    ],
    {
      question: "Come si chiede uno sconto per un ordine all'ingrosso?", questionTranslation: "How do you ask for a discount on a bulk order?",
      options: [
        { text: "Per un ordine così grande, potete farmi uno sconto?", translation: "For such a large order, can you give me a discount?", correct: true },
        { text: "Quanto costa questo libro?", translation: "How much does this book cost?", correct: false },
        { text: "Vorrei restituire questi libri.", translation: "I'd like to return these books.", correct: false },
      ],
    },
  );

  await addExperience(38, "Negotiating Price at a Market Stall", 3, "Shopping",
    [
      { it: "Questa borsa in pelle mi piace molto. Quanto costa?", en: "I really like this leather bag. How much does it cost?", speaker: "customer" },
      { it: "È fatta a mano, vera pelle italiana. 120 euro.", en: "It's handmade, genuine Italian leather. 120 euros.", speaker: "seller" },
      { it: "È bellissima, ma 120 euro superano il mio budget. Non può farmi un prezzo migliore?", en: "It's beautiful, but 120 euros exceeds my budget. Can't you give me a better price?", speaker: "customer" },
      { it: "Per lei faccio 100 euro, ma è l'ultimo prezzo.", en: "For you I'll do 100 euros, but that's the final price.", speaker: "seller" },
      { it: "Va bene, 100 euro. Ma mi metta anche la cintura in omaggio.", en: "Alright, 100 euros. But throw in the belt for free as a gift.", speaker: "customer" },
    ],
    [
      { it: "la pelle", en: "leather", article: "la" },
      { it: "il budget", en: "budget", article: "il" },
      { it: "l'omaggio", en: "free gift", article: "l'", plural: "gli omaggi" },
    ],
    [
      {
        it: "Qual è il prezzo iniziale della borsa?", en: "What's the initial price of the bag?",
        options: [
          { it: "100 euro", en: "100 euros", correct: false },
          { it: "120 euro", en: "120 euros", correct: true },
          { it: "90 euro", en: "90 euros", correct: false },
        ],
      },
      {
        it: "Cosa ottiene in più il cliente oltre allo sconto?", en: "What extra does the customer get besides the discount?",
        options: [
          { it: "Un portafoglio", en: "A wallet", correct: false },
          { it: "Una cintura in omaggio", en: "A belt for free", correct: true },
          { it: "La spedizione gratuita", en: "Free shipping", correct: false },
        ],
      },
    ],
    [
      { it: "a mano", en: "by hand" },
      { it: "superare", en: "to exceed" },
      { it: "l'ultimo prezzo", en: "final price" },
    ],
    {
      question: "Cosa dice per ottenere un extra insieme all'acquisto?", questionTranslation: "What do you say to get an extra item with your purchase?",
      options: [
        { text: "Se pago 100 euro, potrebbe includere anche la cintura?", translation: "If I pay 100 euros, could you include the belt as well?", correct: true },
        { text: "Mi dia la borsa a 100 euro.", translation: "Give me the bag for 100 euros.", correct: false },
        { text: "La borsa è troppo cara.", translation: "The bag is too expensive.", correct: false },
      ],
    },
  );

  await addExperience(38, "Negotiating a Service Contract", 3, "Shopping",
    [
      { it: "Ho ricevuto il vostro preventivo per la pulizia annuale degli uffici.", en: "I received your quote for the annual office cleaning.", speaker: "customer" },
      { it: "Sì, 300 euro al mese per due interventi settimanali.", en: "Yes, 300 euros per month for two weekly cleanings.", speaker: "service_provider" },
      { it: "Il prezzo è superiore a quello del vostro concorrente. Potete allinearvi a 250 euro?", en: "The price is higher than your competitor's. Can you match 250 euros?", speaker: "customer" },
      { it: "250 è troppo poco. Possiamo fare 270 ma includendo anche la pulizia dei vetri una volta al mese.", en: "250 is too low. We can do 270 but also including window cleaning once a month.", speaker: "service_provider" },
      { it: "Accetto. 270 euro al mese con la pulizia dei vetri inclusa. Firmiamo un contratto annuale.", en: "Accepted. 270 euros per month with window cleaning included. We'll sign an annual contract.", speaker: "customer" },
    ],
    [
      { it: "il preventivo", en: "quote/estimate", article: "il", plural: "i preventivi" },
      { it: "la pulizia", en: "cleaning", article: "la", plural: "le pulizie" },
      { it: "il contratto", en: "contract", article: "il", plural: "i contratti" },
    ],
    [
      {
        it: "Qual è il prezzo mensile iniziale proposto?", en: "What is the initial monthly price proposed?",
        options: [
          { it: "250 euro", en: "250 euros", correct: false },
          { it: "270 euro", en: "270 euros", correct: false },
          { it: "300 euro", en: "300 euros", correct: true },
        ],
      },
      {
        it: "Quale servizio extra viene incluso nella controfferta?", en: "What extra service is included in the counter-offer?",
        options: [
          { it: "Pulizia dei bagni", en: "Bathroom cleaning", correct: false },
          { it: "Pulizia dei vetri", en: "Window cleaning", correct: true },
          { it: "Pulizia della moquette", en: "Carpet cleaning", correct: false },
        ],
      },
    ],
    [
      { it: "il concorrente", en: "competitor" },
      { it: "allinearsi", en: "to match/align" },
      { it: "firmare", en: "to sign" },
    ],
    {
      question: "Come si negozia un preventivo con un fornitore di servizi?", questionTranslation: "How do you negotiate a quote with a service provider?",
      options: [
        { text: "Il vostro prezzo è superiore al concorrente. Potete fare di meglio?", translation: "Your price is higher than the competitor. Can you do better?", correct: true },
        { text: "Il vostro servizio è troppo caro.", translation: "Your service is too expensive.", correct: false },
        { text: "Fatemi il miglior prezzo possibile.", translation: "Give me the best possible price.", correct: false },
      ],
    },
  );

  await addExperience(38, "Negotiating a Price Match Guarantee", 3, "Shopping",
    [
      { it: "Buongiorno, ho trovato questo televisore a 550 euro da un altro rivenditore.", en: "Good morning, I found this TV for 550 euros at another retailer.", speaker: "customer" },
      { it: "Il nostro prezzo è 600 euro. Abbiamo una politica di price match.", en: "Our price is 600 euros. We have a price match policy.", speaker: "shop_assistant" },
      { it: "Perfetto, allora potete eguagliare il prezzo? Ho la pubblicità con me.", en: "Perfect, so can you match the price? I have the advertisement with me.", speaker: "customer" },
      { it: "Certamente. Se ci mostra la pubblicità, le facciamo lo stesso prezzo di 550 euro.", en: "Certainly. If you show us the advertisement, we'll give you the same price of 550 euros.", speaker: "shop_assistant" },
      { it: "Ecco la foto dell'annuncio. E se aggiungo anche la soundbar, potete fare un pacchetto?", en: "Here's a photo of the ad. And if I also add the soundbar, can you do a bundle deal?", speaker: "customer" },
    ],
    [
      { it: "il televisore", en: "television", article: "il", plural: "i televisori" },
      { it: "il rivenditore", en: "retailer", article: "il", plural: "i rivenditori" },
      { it: "il price match", en: "price match", article: "il" },
    ],
    [
      {
        it: "Qual è la differenza di prezzo tra i due negozi?", en: "What's the price difference between the two stores?",
        options: [
          { it: "30 euro", en: "30 euros", correct: false },
          { it: "50 euro", en: "50 euros", correct: true },
          { it: "100 euro", en: "100 euros", correct: false },
        ],
      },
      {
        it: "Cosa deve mostrare il cliente per ottenere il price match?", en: "What must the customer show to get the price match?",
        options: [
          { it: "La carta d'identità", en: "His ID", correct: false },
          { it: "La ricevuta dell'altro negozio", en: "The receipt from the other store", correct: false },
          { it: "La pubblicità dell'altro rivenditore", en: "The advertisement from the other retailer", correct: true },
        ],
      },
    ],
    [
      { it: "eguagliare", en: "to match" },
      { it: "il pacchetto", en: "bundle/package" },
    ],
    {
      question: "Come si chiede a un negozio di eguagliare il prezzo di un concorrente?", questionTranslation: "How do you ask a store to match a competitor's price?",
      options: [
        { text: "Ho trovato questo prodotto a meno da un altro rivenditore. Potete eguagliare il prezzo?", translation: "I found this product cheaper at another retailer. Can you match the price?", correct: true },
        { text: "Questo prodotto è in sconto?", translation: "Is this product on sale?", correct: false },
        { text: "Quanto costa questo televisore?", translation: "How much does this TV cost?", correct: false },
      ],
    },
  );

  console.log("  ✓ Shopping seeded");
}
