export async function seedSocial(addExperience: Function) {
  // ========================
  // MODULE 51 — Making Plans (A2, level=1)
  // ========================

  // --- 1: Inviting a Friend for Coffee ---
  await addExperience(51, "Inviting a Friend for Coffee", 1, "Social",
    [
      { it: "Ciao Marco, che fai stasera?", en: "Hi Marco, what are you doing tonight?", speaker: "person_a" },
      { it: "Non ho piani. Perché?", en: "I don't have plans. Why?", speaker: "person_b" },
      { it: "Vuoi prendere un caffè insieme più tardi?", en: "Do you want to grab a coffee together later?", speaker: "person_a" },
      { it: "Buona idea! A che ora ci vediamo?", en: "Good idea! What time shall we meet?", speaker: "person_b" },
      { it: "Alle 18:00 al bar Giordano. Ti va bene?", en: "At 6:00 PM at Bar Giordano. Does that work for you?", speaker: "person_a" },
    ],
    [
      { it: "il caffè", en: "coffee", article: "il" },
      { it: "il piano", en: "plan", article: "il" },
      { it: "insieme", en: "together" },
    ],
    [
      {
        it: "Cosa fa Marco stasera?", en: "What is Marco doing tonight?",
        options: [
          { it: "Ha un appuntamento", en: "He has an appointment", correct: false },
          { it: "Non ha piani", en: "He doesn't have plans", correct: true },
          { it: "Va a cena fuori", en: "He's going out for dinner", correct: false },
        ],
      },
      {
        it: "A che ora si vedono?", en: "What time do they meet?",
        options: [
          { it: "Alle 17:00", en: "At 5:00 PM", correct: false },
          { it: "Alle 18:00", en: "At 6:00 PM", correct: true },
          { it: "Alle 19:00", en: "At 7:00 PM", correct: false },
        ],
      },
    ],
    [
      { it: "prendere un caffè", en: "to have a coffee" },
      { it: "vedersi", en: "to meet up" },
    ],
    {
      question: "L'amico rifiuta l'invito. Cosa dice?",
      questionTranslation: "The friend declines the invitation. What does he say?",
      options: [
        { text: "Mi dispiace, stasera sono impegnato.", translation: "Sorry, I'm busy tonight.", correct: true },
        { text: "Sì, ci vediamo.", translation: "Yes, see you there.", correct: false },
        { text: "Aspetta un minuto.", translation: "Wait a minute.", correct: false },
      ],
    },
  );

  // --- 2: Suggesting a Movie Night ---
  await addExperience(51, "Suggesting a Movie Night", 1, "Social",
    [
      { it: "Ciao! Hai voglia di vedere un film questo weekend?", en: "Hi! Do you feel like watching a movie this weekend?", speaker: "person_a" },
      { it: "Volentieri! Che genere preferisci?", en: "I'd love to! What genre do you prefer?", speaker: "person_b" },
      { it: "Mi piacciono i film comici. Conosci l'ultimo film di Checco Zalone?", en: "I like comedy films. Do you know the latest Checco Zalone movie?", speaker: "person_a" },
      { it: "L'ho visto al cinema. È molto divertente!", en: "I saw it at the cinema. It's very funny!", speaker: "person_b" },
      { it: "Allora sabato sera al cinema Roma?", en: "So Saturday night at Cinema Roma?", speaker: "person_a" },
    ],
    [
      { it: "il film", en: "movie", article: "il" },
      { it: "il cinema", en: "cinema", article: "il" },
      { it: "divertente", en: "funny" },
    ],
    [
      {
        it: "Che tipo di film piacciono a chi parla?", en: "What type of movies does the speaker like?",
        options: [
          { it: "Film comici", en: "Comedy films", correct: true },
          { it: "Film horror", en: "Horror films", correct: false },
          { it: "Film drammatici", en: "Dramatic films", correct: false },
        ],
      },
      {
        it: "Dove vanno a vedere il film?", en: "Where do they go to watch the movie?",
        options: [
          { it: "Al cinema Roma", en: "At Cinema Roma", correct: true },
          { it: "A casa di Marco", en: "At Marco's house", correct: false },
          { it: "Al teatro", en: "At the theater", correct: false },
        ],
      },
    ],
    [
      { it: "il weekend", en: "weekend" },
      { it: "volentieri", en: "gladly" },
    ],
    {
      question: "L'amico propone un'alternativa. Cosa dice?",
      questionTranslation: "The friend proposes an alternative. What does he say?",
      options: [
        { text: "Preferisco vedere un film d'azione, se per te va bene.", translation: "I prefer to watch an action movie if that's okay with you.", correct: true },
        { text: "Non voglio vedere niente.", translation: "I don't want to watch anything.", correct: false },
        { text: "Il cinema è chiuso.", translation: "The cinema is closed.", correct: false },
      ],
    },
  );

  // --- 3: Planning a Picnic ---
  await addExperience(51, "Planning a Picnic", 1, "Social",
    [
      { it: "Che bella giornata! Facciamo un picnic?", en: "What a beautiful day! Shall we have a picnic?", speaker: "person_a" },
      { it: "Ottima idea! Dove possiamo andare?", en: "Great idea! Where can we go?", speaker: "person_b" },
      { it: "Al parco di Villa Borghese. C'è molto spazio.", en: "To Villa Borghese park. There's lots of space.", speaker: "person_a" },
      { it: "Cosa portiamo da mangiare?", en: "What should we bring to eat?", speaker: "person_b" },
      { it: "Io porto panini e bevande. Tu porta la frutta!", en: "I'll bring sandwiches and drinks. You bring the fruit!", speaker: "person_a" },
    ],
    [
      { it: "il picnic", en: "picnic", article: "il" },
      { it: "il parco", en: "park", article: "il" },
      { it: "il panino", en: "sandwich", article: "il" },
    ],
    [
      {
        it: "Dove fanno il picnic?", en: "Where do they have the picnic?",
        options: [
          { it: "Al parco di Villa Borghese", en: "At Villa Borghese park", correct: true },
          { it: "Al mare", en: "At the sea", correct: false },
          { it: "In montagna", en: "In the mountains", correct: false },
        ],
      },
      {
        it: "Cosa porta la seconda persona?", en: "What does the second person bring?",
        options: [
          { it: "I panini", en: "The sandwiches", correct: false },
          { it: "Le bevande", en: "The drinks", correct: false },
          { it: "La frutta", en: "The fruit", correct: true },
        ],
      },
    ],
    [
      { it: "portare", en: "to bring" },
      { it: "la giornata", en: "day/weather" },
    ],
    {
      question: "La persona vuole sapere se serve altro. Cosa dice?",
      questionTranslation: "The person wants to know if anything else is needed. What does he say?",
      options: [
        { text: "Serve altro? Devo comprare qualcosa?", translation: "Anything else? Should I buy something?", correct: true },
        { text: "Non mi va.", translation: "I don't feel like it.", correct: false },
        { text: "Fa troppo caldo.", translation: "It's too hot.", correct: false },
      ],
    },
  );

  // --- 4: Asking a Friend to Go Shopping ---
  await addExperience(51, "Asking a Friend to Go Shopping", 1, "Social",
    [
      { it: "Ciao Giulia, domani pomeriggio sei libera?", en: "Hi Giulia, are you free tomorrow afternoon?", speaker: "person_a" },
      { it: "Sì, perché?", en: "Yes, why?", speaker: "person_b" },
      { it: "Devo comprare un regalo per mia sorella e ho bisogno di consigli.", en: "I need to buy a gift for my sister and I need advice.", speaker: "person_a" },
      { it: "Certo! Andiamo in centro? Ci sono tanti negozi.", en: "Sure! Shall we go to the city center? There are many shops.", speaker: "person_b" },
      { it: "Perfetto, passiamo da te alle 15:00.", en: "Perfect, I'll pick you up at 3:00 PM.", speaker: "person_a" },
    ],
    [
      { it: "il regalo", en: "gift", article: "il" },
      { it: "il negozio", en: "shop", article: "il" },
      { it: "il centro", en: "city center", article: "il" },
    ],
    [
      {
        it: "Perché la persona vuole andare a fare shopping?", en: "Why does the person want to go shopping?",
        options: [
          { it: "Deve comprare un regalo", en: "She needs to buy a gift", correct: true },
          { it: "Deve comprare vestiti", en: "She needs to buy clothes", correct: false },
          { it: "Deve comprare cibo", en: "She needs to buy food", correct: false },
        ],
      },
      {
        it: "A che ora si incontrano?", en: "What time do they meet?",
        options: [
          { it: "Alle 14:00", en: "At 2:00 PM", correct: false },
          { it: "Alle 15:00", en: "At 3:00 PM", correct: true },
          { it: "Alle 16:00", en: "At 4:00 PM", correct: false },
        ],
      },
    ],
    [
      { it: "il consiglio", en: "advice" },
      { it: "passare da", en: "to pick up" },
    ],
    {
      question: "L'amica non può venire. Cosa dice?",
      questionTranslation: "The friend can't come. What does she say?",
      options: [
        { text: "Mi dispiace, ma domani ho un impegno.", translation: "Sorry, but I have a commitment tomorrow.", correct: true },
        { text: "Non mi piacciono i regali.", translation: "I don't like gifts.", correct: false },
        { text: "Vai senza di me.", translation: "Go without me.", correct: false },
      ],
    },
  );

  // --- 5: Deciding on a Restaurant ---
  await addExperience(51, "Deciding on a Restaurant", 1, "Social",
    [
      { it: "Allora, dove andiamo a cena stasera?", en: "So, where are we going for dinner tonight?", speaker: "person_a" },
      { it: "Che ne dici di una pizzeria?", en: "How about a pizzeria?", speaker: "person_b" },
      { it: "Buona idea. Conosco una pizzeria in centro che fa pizze ottime.", en: "Good idea. I know a pizzeria in the center that makes excellent pizzas.", speaker: "person_a" },
      { it: "Si chiama Da Michele. Dobbiamo prenotare?", en: "It's called Da Michele. Should we book?", speaker: "person_b" },
      { it: "Sì, è sempre pieno. Chiamo per prenotare un tavolo per due.", en: "Yes, it's always full. I'll call to book a table for two.", speaker: "person_a" },
    ],
    [
      { it: "la cena", en: "dinner", article: "la" },
      { it: "la pizzeria", en: "pizzeria", article: "la" },
      { it: "il tavolo", en: "table", article: "il" },
    ],
    [
      {
        it: "Che tipo di ristorante propongono?", en: "What type of restaurant do they propose?",
        options: [
          { it: "Una pizzeria", en: "A pizzeria", correct: true },
          { it: "Un ristorante cinese", en: "A Chinese restaurant", correct: false },
          { it: "Un sushi bar", en: "A sushi bar", correct: false },
        ],
      },
      {
        it: "Perché devono prenotare?", en: "Why do they need to book?",
        options: [
          { it: "Perché è sempre vuoto", en: "Because it's always empty", correct: false },
          { it: "Perché è sempre pieno", en: "Because it's always full", correct: true },
          { it: "Perché è chiuso", en: "Because it's closed", correct: false },
        ],
      },
    ],
    [
      { it: "preferire", en: "to prefer" },
      { it: "prenotare", en: "to reserve" },
    ],
    {
      question: "La pizzeria è completa. Cosa dice?",
      questionTranslation: "The pizzeria is fully booked. What does she say?",
      options: [
        { text: "Peccato, proviamo un altro ristorante.", translation: "Too bad, let's try another restaurant.", correct: true },
        { text: "Andiamo a casa.", translation: "Let's go home.", correct: false },
        { text: "Non ho fame.", translation: "I'm not hungry.", correct: false },
      ],
    },
  );

  // ========================
  // MODULE 52 — At a Social Event (A2, level=1)
  // ========================

  // --- 1: Arriving at a Party ---
  await addExperience(52, "Arriving at a Party", 1, "Social",
    [
      { it: "Ciao! Buon compleanno, Marco!", en: "Hi! Happy birthday, Marco!", speaker: "person_a" },
      { it: "Grazie mille! Sono contento che sei venuto!", en: "Thank you so much! I'm glad you came!", speaker: "friend" },
      { it: "Ecco un piccolo regalo per te.", en: "Here's a small gift for you.", speaker: "person_a" },
      { it: "Non dovevi disturbarti! Apri una birra dal frigo.", en: "You shouldn't have! Grab a beer from the fridge.", speaker: "friend" },
      { it: "Grazie. Auguri ancora e tante felicità!", en: "Thanks. Best wishes again and lots of happiness!", speaker: "person_a" },
    ],
    [
      { it: "il compleanno", en: "birthday", article: "il" },
      { it: "il regalo", en: "gift", article: "il" },
      { it: "la birra", en: "beer", article: "la" },
    ],
    [
      {
        it: "Perché l'ospite dà un regalo?", en: "Why does the guest give a gift?",
        options: [
          { it: "Perché è Natale", en: "Because it's Christmas", correct: false },
          { it: "Perché è il compleanno di Marco", en: "Because it's Marco's birthday", correct: true },
          { it: "Perché è un ringraziamento", en: "Because it's a thank you", correct: false },
        ],
      },
      {
        it: "Cosa dice Marco quando riceve il regalo?", en: "What does Marco say when he receives the gift?",
        options: [
          { it: "Non volevo niente.", en: "I didn't want anything.", correct: false },
          { it: "Non dovevi disturbarti!", en: "You shouldn't have!", correct: true },
          { it: "Metti via il regalo.", en: "Put the gift away.", correct: false },
        ],
      },
    ],
    [
      { it: "augurare", en: "to wish" },
      { it: "contento", en: "glad" },
    ],
    {
      question: "L'ospite arriva in ritardo. Cosa dice?",
      questionTranslation: "The guest arrives late. What does he say?",
      options: [
        { text: "Scusa per il ritardo, c'era molto traffico.", translation: "Sorry for the delay, there was a lot of traffic.", correct: true },
        { text: "Sei in ritardo anche tu.", translation: "You're late too.", correct: false },
        { text: "Non importa.", translation: "It doesn't matter.", correct: false },
      ],
    },
  );

  // --- 2: Introducing People at a Gathering ---
  await addExperience(52, "Introducing People at a Gathering", 1, "Social",
    [
      { it: "Ciao a tutti! Lui è Luca, un mio amico di università.", en: "Hi everyone! This is Luca, a friend from university.", speaker: "person_a" },
      { it: "Piacere, Luca. Io sono Sara.", en: "Nice to meet you, Luca. I'm Sara.", speaker: "person_b" },
      { it: "Piacere mio. Di cosa ti occupi?", en: "Pleasure is mine. What do you do?", speaker: "friend" },
      { it: "Lavoro come graphic designer. E tu?", en: "I work as a graphic designer. And you?", speaker: "person_b" },
      { it: "Faccio lo sviluppatore. Lavoro in una startup.", en: "I'm a developer. I work at a startup.", speaker: "friend" },
    ],
    [
      { it: "l'università", en: "university", article: "l'" },
      { it: "il graphic designer", en: "graphic designer", article: "il" },
      { it: "lo sviluppatore", en: "developer", article: "lo" },
    ],
    [
      {
        it: "Come conosce Luca?", en: "How does she know Luca?",
        options: [
          { it: "Dal lavoro", en: "From work", correct: false },
          { it: "Dall'università", en: "From university", correct: true },
          { it: "Dalla palestra", en: "From the gym", correct: false },
        ],
      },
      {
        it: "Che lavoro fa Luca?", en: "What job does Luca do?",
        options: [
          { it: "Graphic designer", en: "Graphic designer", correct: false },
          { it: "Sviluppatore", en: "Developer", correct: true },
          { it: "Insegnante", en: "Teacher", correct: false },
        ],
      },
    ],
    [
      { it: "presentare", en: "to introduce" },
      { it: "lavorare", en: "to work" },
    ],
    {
      question: "Luca vuole sapere di più su Sara. Cosa chiede?",
      questionTranslation: "Luca wants to know more about Sara. What does he ask?",
      options: [
        { text: "Da quanto tempo lavori come graphic designer?", translation: "How long have you worked as a graphic designer?", correct: true },
        { text: "Quanto guadagni?", translation: "How much do you earn?", correct: false },
        { text: "Dove abiti?", translation: "Where do you live?", correct: false },
      ],
    },
  );

  // --- 3: Offering Drinks ---
  await addExperience(52, "Offering Drinks", 1, "Social",
    [
      { it: "Cosa posso offrirti da bere?", en: "What can I get you to drink?", speaker: "person_a" },
      { it: "Un bicchiere di vino rosso, grazie.", en: "A glass of red wine, thanks.", speaker: "person_b" },
      { it: "Rosso o bianco? Ho un Chianti molto buono.", en: "Red or white? I have a very good Chianti.", speaker: "person_a" },
      { it: "Rosso va bene. Il Chianti è perfetto!", en: "Red is fine. Chianti is perfect!", speaker: "person_b" },
      { it: "Ecco a te. Cin cin!", en: "Here you go. Cheers!", speaker: "person_a" },
    ],
    [
      { it: "il vino rosso", en: "red wine", article: "il" },
      { it: "il bicchiere", en: "glass", article: "il" },
      { it: "il Chianti", en: "Chianti wine", article: "il" },
    ],
    [
      {
        it: "Cosa offre da bere?", en: "What drink does the host offer?",
        options: [
          { it: "Vino rosso", en: "Red wine", correct: true },
          { it: "Acqua", en: "Water", correct: false },
          { it: "Succo di frutta", en: "Fruit juice", correct: false },
        ],
      },
      {
        it: "Che tipo di Chianti ha l'ospite?", en: "What kind of Chianti does the host have?",
        options: [
          { it: "Molto economico", en: "Very cheap", correct: false },
          { it: "Molto buono", en: "Very good", correct: true },
          { it: "Non lo sa", en: "He doesn't know", correct: false },
        ],
      },
    ],
    [
      { it: "offrire", en: "to offer" },
      { it: "il vino bianco", en: "white wine" },
    ],
    {
      question: "L'ospite propone un'alternativa analcolica. Cosa dice?",
      questionTranslation: "The host proposes a non-alcoholic alternative. What does he say?",
      options: [
        { text: "Preferisci qualcosa di analcolico? Ho anche succo e aranciata.", translation: "Do you prefer something non-alcoholic? I also have juice and orangeade.", correct: true },
        { text: "Bevi solo vino.", translation: "Drink only wine.", correct: false },
        { text: "Non ho altro.", translation: "I have nothing else.", correct: false },
      ],
    },
  );

  // --- 4: Talking About the Food ---
  await addExperience(52, "Talking About the Food", 1, "Social",
    [
      { it: "Questa pasta è squisita! Chi l'ha preparata?", en: "This pasta is delicious! Who prepared it?", speaker: "person_a" },
      { it: "L'ho fatta io. È una ricetta della nonna.", en: "I made it myself. It's grandmother's recipe.", speaker: "person_b" },
      { it: "Complimenti! È la pasta più buona che abbia mai mangiato.", en: "Congratulations! It's the best pasta I've ever eaten.", speaker: "person_a" },
      { it: "Posso avere la ricetta?", en: "Can I have the recipe?", speaker: "person_a" },
      { it: "Certo, te la mando domani per email.", en: "Sure, I'll send it to you tomorrow by email.", speaker: "person_b" },
    ],
    [
      { it: "la pasta", en: "pasta", article: "la" },
      { it: "la ricetta", en: "recipe", article: "la" },
      { it: "squisito", en: "delicious" },
    ],
    [
      {
        it: "Cosa sta mangiando?", en: "What is the guest eating?",
        options: [
          { it: "Pasta", en: "Pasta", correct: true },
          { it: "Insalata", en: "Salad", correct: false },
          { it: "Dolce", en: "Dessert", correct: false },
        ],
      },
      {
        it: "La ricetta è di chi?", en: "Whose recipe is it?",
        options: [
          { it: "Della nonna", en: "Grandmother's", correct: true },
          { it: "Della mamma", en: "Mother's", correct: false },
          { it: "Di un libro di cucina", en: "From a cookbook", correct: false },
        ],
      },
    ],
    [
      { it: "preparare", en: "to prepare" },
      { it: "il complimento", en: "compliment" },
    ],
    {
      question: "L'ospite si offre di aiutare con la cena. Cosa dice?",
      questionTranslation: "The guest offers to help with dinner. What does he say?",
      options: [
        { text: "Posso aiutare in cucina? Devo tagliare qualcosa?", translation: "Can I help in the kitchen? Do I need to cut something?", correct: true },
        { text: "Cucina tu.", translation: "You cook.", correct: false },
        { text: "Non mi piace cucinare.", translation: "I don't like cooking.", correct: false },
      ],
    },
  );

  // --- 5: Saying Goodbye ---
  await addExperience(52, "Saying Goodbye", 1, "Social",
    [
      { it: "È già mezzanotte! Devo andare.", en: "It's already midnight! I have to go.", speaker: "person_a" },
      { it: "Già? È ancora presto!", en: "Already? It's still early!", speaker: "friend" },
      { it: "Domani mi sveglio presto per lavoro. È stata una bella serata!", en: "I have to wake up early for work tomorrow. It was a lovely evening!", speaker: "person_a" },
      { it: "Sono contento che tu sia venuto. Torn presto!", en: "I'm glad you came. Come back soon!", speaker: "friend" },
      { it: "Grazie dell'invito. Alla prossima!", en: "Thanks for the invitation. See you next time!", speaker: "person_a" },
    ],
    [
      { it: "la mezzanotte", en: "midnight", article: "la" },
      { it: "la serata", en: "evening", article: "la" },
      { it: "l'invito", en: "invitation", article: "l'" },
    ],
    [
      {
        it: "Perché l'ospite va via?", en: "Why is the guest leaving?",
        options: [
          { it: "Si annoia", en: "He's bored", correct: false },
          { it: "Domani si sveglia presto", en: "He has to wake up early tomorrow", correct: true },
          { it: "Non gli piace la festa", en: "He doesn't like the party", correct: false },
        ],
      },
      {
        it: "Che ora è quando l'ospite va via?", en: "What time is it when the guest leaves?",
        options: [
          { it: "Mezzanotte", en: "Midnight", correct: true },
          { it: "Le 23:00", en: "11:00 PM", correct: false },
          { it: "L'01:00", en: "1:00 AM", correct: false },
        ],
      },
    ],
    [
      { it: "andare via", en: "to leave" },
      { it: "la festa", en: "party" },
    ],
    {
      question: "L'ospite ringrazia l'organizzatore. Cosa dice?",
      questionTranslation: "The guest thanks the host. What does he say?",
      options: [
        { text: "Grazie di tutto, mi sono divertito molto!", translation: "Thanks for everything, I had a great time!", correct: true },
        { text: "La prossima volta invito io.", translation: "Next time I'll be the host.", correct: false },
        { text: "C'era troppo rumore.", translation: "It was too noisy.", correct: false },
      ],
    },
  );

  // ========================
  // MODULE 53 — Small Talk (B1, level=2)
  // ========================

  // --- 1: Talking About the Weather ---
  await addExperience(53, "Talking About the Weather", 2, "Social",
    [
      { it: "Che tempo fa oggi? Il sole è splendido!", en: "How's the weather today? The sun is splendid!", speaker: "person_a" },
      { it: "Sì, finalmente! Dopo una settimana di pioggia.", en: "Yes, finally! After a week of rain.", speaker: "person_b" },
      { it: "Il meteo dice che domani arriva l'anticiclone.", en: "The forecast says a high-pressure system is coming tomorrow.", speaker: "person_a" },
      { it: "Speriamo duri. Ho voglia di andare al mare.", en: "Let's hope it lasts. I feel like going to the beach.", speaker: "person_b" },
      { it: "Anch'io! Magari questo weekend.", en: "Me too! Maybe this weekend.", speaker: "person_a" },
    ],
    [
      { it: "il sole", en: "sun", article: "il" },
      { it: "la pioggia", en: "rain", article: "la" },
      { it: "il meteo", en: "weather forecast", article: "il" },
    ],
    [
      {
        it: "Com'è il tempo oggi?", en: "What's the weather like today?",
        options: [
          { it: "Piovoso", en: "Rainy", correct: false },
          { it: "Splendido con il sole", en: "Splendid with sun", correct: true },
          { it: "Nebbioso", en: "Foggy", correct: false },
        ],
      },
      {
        it: "Cosa sperano di fare nel weekend?", en: "What do they hope to do this weekend?",
        options: [
          { it: "Andare al mare", en: "Go to the beach", correct: true },
          { it: "Andare in montagna", en: "Go to the mountains", correct: false },
          { it: "Restare a casa", en: "Stay home", correct: false },
        ],
      },
    ],
    [
      { it: "il tempo", en: "weather" },
      { it: "l'anticiclone", en: "high-pressure system" },
    ],
    {
      question: "La persona non è d'accordo sulle previsioni. Cosa dice?",
      questionTranslation: "The person disagrees about the forecast. What does he say?",
      options: [
        { text: "Il meteo dice che pioverà, non mi fidò.", translation: "The forecast says it will rain, I don't trust it.", correct: true },
        { text: "Il meteo ha sempre ragione.", translation: "The forecast is always right.", correct: false },
        { text: "Non guardo mai il meteo.", translation: "I never check the forecast.", correct: false },
      ],
    },
  );

  // --- 2: Asking About the Weekend ---
  await addExperience(53, "Asking About the Weekend", 2, "Social",
    [
      { it: "Come è andato il tuo weekend?", en: "How was your weekend?", speaker: "person_a" },
      { it: "Molto bene! Sono andato a fare una gita in montagna.", en: "Very well! I went on a trip to the mountains.", speaker: "person_b" },
      { it: "Che bello! Com'era il tempo lassù?", en: "How nice! What was the weather like up there?", speaker: "person_a" },
      { it: "Fresco ma soleggiato. Abbiamo fatto una bella camminata.", en: "Cool but sunny. We had a nice hike.", speaker: "person_b" },
      { it: "Deve essere stato rilassante. Io sono rimasto a casa a leggere.", en: "That must have been relaxing. I stayed home reading.", speaker: "person_a" },
    ],
    [
      { it: "la gita", en: "trip", article: "la" },
      { it: "la montagna", en: "mountain", article: "la" },
      { it: "la camminata", en: "hike", article: "la" },
    ],
    [
      {
        it: "Cosa ha fatto la persona nel weekend?", en: "What did the person do on the weekend?",
        options: [
          { it: "Ha visitato un museo", en: "He visited a museum", correct: false },
          { it: "È andato in montagna", en: "He went to the mountains", correct: true },
          { it: "È stato a casa", en: "He stayed home", correct: false },
        ],
      },
      {
        it: "Tempo com'era in montagna?", en: "What was the weather like in the mountains?",
        options: [
          { it: "Freddo e nuvoloso", en: "Cold and cloudy", correct: false },
          { it: "Fresco ma soleggiato", en: "Cool but sunny", correct: true },
          { it: "Caldo e umido", en: "Hot and humid", correct: false },
        ],
      },
    ],
    [
      { it: "rilassante", en: "relaxing" },
      { it: "leggere", en: "to read" },
    ],
    {
      question: "La persona chiede cosa ha fatto l'altra. Cosa dice?",
      questionTranslation: "The person asks what the other did. What does he say?",
      options: [
        { text: "E tu cosa hai fatto di bello?", translation: "And what nice things did you do?", correct: true },
        { text: "Non mi interessa.", translation: "I don't care.", correct: false },
        { text: "Parlami di te.", translation: "Tell me about yourself.", correct: false },
      ],
    },
  );

  // --- 3: Talking About Work ---
  await addExperience(53, "Talking About Work", 2, "Social",
    [
      { it: "Da quanto tempo lavori in questa azienda?", en: "How long have you worked at this company?", speaker: "person_a" },
      { it: "Da circa tre anni. È un buon posto di lavoro.", en: "For about three years. It's a good workplace.", speaker: "person_b" },
      { it: "Fai ancora orari lunghi come prima?", en: "Do you still work long hours like before?", speaker: "person_a" },
      { it: "Adesso un po' meno. L'azienda ha migliorato le condizioni.", en: "Now a bit less. The company improved the conditions.", speaker: "person_b" },
      { it: "Mi fa piacere. L'equilibrio vita-lavoro è importante.", en: "I'm glad to hear that. Work-life balance is important.", speaker: "person_a" },
    ],
    [
      { it: "l'azienda", en: "company", article: "l'" },
      { it: "l'orario", en: "hours/schedule", article: "l'" },
      { it: "le condizioni", en: "conditions" },
    ],
    [
      {
        it: "Da quanto tempo lavora in azienda?", en: "How long has he worked at the company?",
        options: [
          { it: "Da un anno", en: "For one year", correct: false },
          { it: "Da circa tre anni", en: "For about three years", correct: true },
          { it: "Da cinque anni", en: "For five years", correct: false },
        ],
      },
      {
        it: "Cosa è cambiato sul lavoro?", en: "What changed at work?",
        options: [
          { it: "Ha cambiato lavoro", en: "He changed jobs", correct: false },
          { it: "Le condizioni sono migliorate", en: "The conditions improved", correct: true },
          { it: "Lavora di più", en: "He works more", correct: false },
        ],
      },
    ],
    [
      { it: "il posto di lavoro", en: "workplace" },
      { it: "migliorare", en: "to improve" },
    ],
    {
      question: "L'altra persona si lamenta del lavoro. Cosa dice?",
      questionTranslation: "The other person complains about work. What does he say?",
      options: [
        { text: "Ultimamente sono molto stressato, ho troppi progetti.", translation: "Lately I've been very stressed, I have too many projects.", correct: true },
        { text: "Il lavoro è perfetto.", translation: "Work is perfect.", correct: false },
        { text: "Mi piace tutto.", translation: "I like everything.", correct: false },
      ],
    },
  );

  // --- 4: Talking About the City ---
  await addExperience(53, "Talking About the City", 2, "Social",
    [
      { it: "Da quanto tempo abiti a Roma?", en: "How long have you lived in Rome?", speaker: "person_a" },
      { it: "Da cinque anni. Mi sono trasferita per lavoro.", en: "For five years. I moved here for work.", speaker: "person_b" },
      { it: "Ti piace vivere qui?", en: "Do you like living here?", speaker: "person_a" },
      { it: "Molto. È una città vibrante, ma a volte caotica.", en: "Very much. It's a vibrant city, but sometimes chaotic.", speaker: "person_b" },
      { it: "Sì, il traffico è terribile. Ma i monumenti sono incredibili.", en: "Yes, the traffic is terrible. But the monuments are incredible.", speaker: "person_a" },
    ],
    [
      { it: "la città", en: "city", article: "la" },
      { it: "il traffico", en: "traffic", article: "il" },
      { it: "il monumento", en: "monument", article: "il" },
    ],
    [
      {
        it: "Perché si è trasferita a Roma?", en: "Why did she move to Rome?",
        options: [
          { it: "Per studio", en: "For study", correct: false },
          { it: "Per lavoro", en: "For work", correct: true },
          { it: "Per la famiglia", en: "For family", correct: false },
        ],
      },
      {
        it: "Cosa pensa del traffico a Roma?", en: "What do they think about the traffic in Rome?",
        options: [
          { it: "È accettabile", en: "It's acceptable", correct: false },
          { it: "È terribile", en: "It's terrible", correct: true },
          { it: "Non c'è traffico", en: "There's no traffic", correct: false },
        ],
      },
    ],
    [
      { it: "trasferirsi", en: "to move (relocate)" },
      { it: "caotico", en: "chaotic" },
    ],
    {
      question: "La persona chiede consigli sulla zona. Cosa dice?",
      questionTranslation: "The person asks for advice about the area. What does he say?",
      options: [
        { text: "Qual è il quartiere migliore dove vivere secondo te?", translation: "What's the best neighborhood to live in, in your opinion?", correct: true },
        { text: "Quanto costa vivere a Roma?", translation: "How much does it cost to live in Rome?", correct: false },
        { text: "Roma è piccola.", translation: "Rome is small.", correct: false },
      ],
    },
  );

  // --- 5: Making Small Talk at a Coffee Break ---
  await addExperience(53, "Making Small Talk at a Coffee Break", 2, "Social",
    [
      { it: "Prendiamo un caffè insieme?", en: "Shall we grab a coffee together?", speaker: "person_a" },
      { it: "Volentieri. Ho bisogno di una pausa.", en: "Gladly. I need a break.", speaker: "person_b" },
      { it: "Che macchina prendi? La espresso o la cappuccino?", en: "Which one will you have? Espresso or cappuccino?", speaker: "person_a" },
      { it: "Un caffè macchiato. Dopo pranzo preferisco qualcosa di leggero.", en: "A macchiato. After lunch I prefer something light.", speaker: "person_b" },
      { it: "Io invece prendo un espresso. Mi dà la carica!", en: "I'll have an espresso instead. It gives me energy!", speaker: "person_a" },
    ],
    [
      { it: "il caffè macchiato", en: "coffee with a drop of milk", article: "il" },
      { it: "la pausa", en: "break", article: "la" },
      { it: "la carica", en: "energy", article: "la" },
    ],
    [
      {
        it: "Cosa prendono da bere?", en: "What do they order to drink?",
        options: [
          { it: "Due espressi", en: "Two espressos", correct: false },
          { it: "Un macchiato e un espresso", en: "A macchiato and an espresso", correct: true },
          { it: "Due cappuccini", en: "Two cappuccinos", correct: false },
        ],
      },
      {
        it: "Perché una persona prende il macchiato?", en: "Why does one person order a macchiato?",
        options: [
          { it: "Perché non le piace il caffè", en: "Because she doesn't like coffee", correct: false },
          { it: "Perché dopo pranzo preferisce qualcosa di leggero", en: "Because after lunch she prefers something light", correct: true },
          { it: "Perché costa meno", en: "Because it costs less", correct: false },
        ],
      },
    ],
    [
      { it: "leggero", en: "light" },
      { it: "la macchina del caffè", en: "coffee machine" },
    ],
    {
      question: "La pausa finisce e tornano al lavoro. Cosa dice?",
      questionTranslation: "The break ends and they go back to work. What does he say?",
      options: [
        { text: "Torniamo in ufficio, la pausa è finita.", translation: "Let's go back to the office, the break is over.", correct: true },
        { text: "Restiamo ancora un po'.", translation: "Let's stay a bit longer.", correct: false },
        { text: "Prendiamo un altro caffè.", translation: "Let's have another coffee.", correct: false },
      ],
    },
  );

  // ========================
  // MODULE 54 — Talking About Hobbies (B1, level=2)
  // ========================

  // --- 1: Talking About Sports ---
  await addExperience(54, "Talking About Sports", 2, "Social",
    [
      { it: "Fai sport nel tempo libero?", en: "Do you play sports in your free time?", speaker: "person_a" },
      { it: "Sì, gioco a tennis due volte a settimana.", en: "Yes, I play tennis twice a week.", speaker: "person_b" },
      { it: "Da quanto tempo giochi?", en: "How long have you been playing?", speaker: "person_a" },
      { it: "Da circa cinque anni. Ho iniziato all'università.", en: "For about five years. I started at university.", speaker: "person_b" },
      { it: "Che bello! A me piace correre. La mattina faccio jogging al parco.", en: "How nice! I like running. In the morning I go jogging in the park.", speaker: "person_a" },
    ],
    [
      { it: "il tennis", en: "tennis", article: "il" },
      { it: "il jogging", en: "jogging", article: "il" },
      { it: "il tempo libero", en: "free time", article: "il" },
    ],
    [
      {
        it: "Quale sport fa una delle due persone?", en: "Which sport does one of the two people play?",
        options: [
          { it: "Calcio", en: "Football", correct: false },
          { it: "Tennis", en: "Tennis", correct: true },
          { it: "Nuoto", en: "Swimming", correct: false },
        ],
      },
      {
        it: "Dove fa jogging l'altra persona?", en: "Where does the other person go jogging?",
        options: [
          { it: "In palestra", en: "At the gym", correct: false },
          { it: "Al parco", en: "At the park", correct: true },
          { it: "Sulla spiaggia", en: "On the beach", correct: false },
        ],
      },
    ],
    [
      { it: "giocare", en: "to play" },
      { it: "iniziare", en: "to start" },
    ],
    {
      question: "La persona chiede se può unirsi. Cosa dice?",
      questionTranslation: "The person asks if they can join. What do they say?",
      options: [
        { text: "Posso venire a giocare con te qualche volta?", translation: "Can I come play with you sometime?", correct: true },
        { text: "Sei bravo?", translation: "Are you good?", correct: false },
        { text: "Non mi piace lo sport.", translation: "I don't like sports.", correct: false },
      ],
    },
  );

  // --- 2: Talking About Music ---
  await addExperience(54, "Talking About Music", 2, "Social",
    [
      { it: "Che genere di musica ascolti?", en: "What genre of music do you listen to?", speaker: "person_a" },
      { it: "Ascolto principalmente rock italiano. Mi piace molto Vasco Rossi.", en: "I mainly listen to Italian rock. I really like Vasco Rossi.", speaker: "person_b" },
      { it: "Grande! Sei mai stato a un suo concerto?", en: "Great! Have you ever been to one of his concerts?", speaker: "person_a" },
      { it: "Sì, tre volte. L'ultima a San Siro, un'esperienza incredibile.", en: "Yes, three times. The last one at San Siro, an incredible experience.", speaker: "person_b" },
      { it: "Che fortuna! Io suono la chitarra in una band amatoriale.", en: "How lucky! I play guitar in an amateur band.", speaker: "person_a" },
    ],
    [
      { it: "il rock", en: "rock music", article: "il" },
      { it: "il concerto", en: "concert", article: "il" },
      { it: "la chitarra", en: "guitar", article: "la" },
    ],
    [
      {
        it: "Che musica ascolta?", en: "What music does he listen to?",
        options: [
          { it: "Jazz", en: "Jazz", correct: false },
          { it: "Rock italiano", en: "Italian rock", correct: true },
          { it: "Musica classica", en: "Classical music", correct: false },
        ],
      },
      {
        it: "Quante volte è andato a un concerto di Vasco Rossi?", en: "How many times has he been to a Vasco Rossi concert?",
        options: [
          { it: "Una volta", en: "Once", correct: false },
          { it: "Due volte", en: "Twice", correct: false },
          { it: "Tre volte", en: "Three times", correct: true },
        ],
      },
    ],
    [
      { it: "ascoltare", en: "to listen" },
      { it: "suonare", en: "to play (instrument)" },
    ],
    {
      question: "L'altra persona propone di andare a un concerto insieme. Cosa dice?",
      questionTranslation: "The other person proposes going to a concert together. What does he say?",
      options: [
        { text: "C'è un concerto di Vasco Rossi il mese prossimo. Ti andrebbe di venire?", translation: "There's a Vasco Rossi concert next month. Would you like to come?", correct: true },
        { text: "Non mi piacciono i concerti.", translation: "I don't like concerts.", correct: false },
        { text: "I biglietti sono troppo cari.", translation: "The tickets are too expensive.", correct: false },
      ],
    },
  );

  // --- 3: Talking About Reading ---
  await addExperience(54, "Talking About Reading", 2, "Social",
    [
      { it: "Ti piace leggere? Che libri preferisci?", en: "Do you like reading? What books do you prefer?", speaker: "person_a" },
      { it: "Adoro i romanzi storici. In questo periodo leggo un libro su Giulio Cesare.", en: "I love historical novels. These days I'm reading a book about Julius Caesar.", speaker: "person_b" },
      { it: "Interessante! Io preferisco i gialli. Quelli di Andrea Camilleri sono fantastici.", en: "Interesting! I prefer mystery novels. Andrea Camilleri's are fantastic.", speaker: "person_a" },
      { it: "Ah, il Commissario Montalbano! Li ho letti quasi tutti.", en: "Ah, Inspector Montalbano! I've read almost all of them.", speaker: "person_b" },
      { it: "Allora abbiamo gusti simili. Dovresti leggere anche Roberto Saviano.", en: "So we have similar tastes. You should also read Roberto Saviano.", speaker: "person_a" },
    ],
    [
      { it: "il romanzo storico", en: "historical novel", article: "il" },
      { it: "il giallo", en: "mystery novel", article: "il" },
      { it: "il libro", en: "book", article: "il" },
    ],
    [
      {
        it: "Che genere di libri le piace?", en: "What genre of books does she like?",
        options: [
          { it: "Romanzi storici", en: "Historical novels", correct: true },
          { it: "Fantascienza", en: "Science fiction", correct: false },
          { it: "Poesia", en: "Poetry", correct: false },
        ],
      },
      {
        it: "Chi è Andrea Camilleri?", en: "Who is Andrea Camilleri?",
        options: [
          { it: "Un cantante", en: "A singer", correct: false },
          { it: "Uno scrittore di gialli", en: "A mystery writer", correct: true },
          { it: "Un attore", en: "An actor", correct: false },
        ],
      },
    ],
    [
      { it: "leggere", en: "to read" },
      { it: "fantastico", en: "fantastic" },
    ],
    {
      question: "La persona consiglia un libro. Cosa dice?",
      questionTranslation: "The person recommends a book. What does he say?",
      options: [
        { text: "Dovresti leggere questo libro, è appassionante.", translation: "You should read this book, it's gripping.", correct: true },
        { text: "Non leggo molto.", translation: "I don't read much.", correct: false },
        { text: "I libri sono noiosi.", translation: "Books are boring.", correct: false },
      ],
    },
  );

  // --- 4: Talking About Cooking ---
  await addExperience(54, "Talking About Cooking", 2, "Social",
    [
      { it: "Ti piace cucinare? Io vado pazzo per la cucina italiana.", en: "Do you like cooking? I'm crazy about Italian cuisine.", speaker: "person_a" },
      { it: "Molto! Il mio piatto forte è la carbonara.", en: "Very much! My specialty is carbonara.", speaker: "person_b" },
      { it: "La carbonara è un piatto romano vero? Con guanciale e pecorino?", en: "Carbonara is a Roman dish, right? With guanciale and pecorino?", speaker: "person_a" },
      { it: "Esatto! Niente panna, come fanno alcuni. Deve essere autentica.", en: "Exactly! No cream, like some make it. It must be authentic.", speaker: "person_b" },
      { it: "D'accordo. Dovresti insegnarmi a farla!", en: "Agreed. You should teach me how to make it!", speaker: "person_a" },
    ],
    [
      { it: "la carbonara", en: "carbonara", article: "la" },
      { it: "il guanciale", en: "cured pork cheek", article: "il" },
      { it: "il pecorino", en: "pecorino cheese", article: "il" },
    ],
    [
      {
        it: "Qual è il piatto forte?", en: "What is the specialty dish?",
        options: [
          { it: "La pasta al pomodoro", en: "Pasta with tomato sauce", correct: false },
          { it: "La carbonara", en: "Carbonara", correct: true },
          { it: "La pizza", en: "Pizza", correct: false },
        ],
      },
      {
        it: "Cosa non va messo nella carbonara autentica?", en: "What should not be put in authentic carbonara?",
        options: [
          { it: "Uova", en: "Eggs", correct: false },
          { it: "Panna", en: "Cream", correct: true },
          { it: "Pepe", en: "Pepper", correct: false },
        ],
      },
    ],
    [
      { it: "cucinare", en: "to cook" },
      { it: "autentico", en: "authentic" },
    ],
    {
      question: "L'altra persona propone di cucinare insieme. Cosa dice?",
      questionTranslation: "The other person proposes cooking together. What does he say?",
      options: [
        { text: "Possiamo cucinare insieme questo weekend? Ti va?", translation: "Can we cook together this weekend? Does that sound good?", correct: true },
        { text: "Cucina tu per me.", translation: "You cook for me.", correct: false },
        { text: "Non ho una cucina.", translation: "I don't have a kitchen.", correct: false },
      ],
    },
  );

  // --- 5: Talking About Photography ---
  await addExperience(54, "Talking About Photography", 2, "Social",
    [
      { it: "Che bella macchina fotografica! La usi per lavoro o per hobby?", en: "What a nice camera! Do you use it for work or as a hobby?", speaker: "person_a" },
      { it: "È un hobby. Mi piace fotografare paesaggi e monumenti.", en: "It's a hobby. I like taking photos of landscapes and monuments.", speaker: "person_b" },
      { it: "Le tue foto sembrano professionali. Hai un occhio artistico.", en: "Your photos look professional. You have an artistic eye.", speaker: "person_a" },
      { it: "Grazie! Ultimamente sto sperimentando la fotografia di strada.", en: "Thanks! Lately I've been experimenting with street photography.", speaker: "person_b" },
      { it: "Che bello. Condividi le foto su Instagram?", en: "How nice. Do you share your photos on Instagram?", speaker: "person_a" },
    ],
    [
      { it: "la macchina fotografica", en: "camera", article: "la" },
      { it: "il paesaggio", en: "landscape", article: "il" },
      { it: "la fotografia", en: "photography", article: "la" },
    ],
    [
      {
        it: "La persona usa la macchina fotografica per lavoro?", en: "Does the person use the camera for work?",
        options: [
          { it: "Sì, è un fotografo professionista", en: "Yes, he's a professional photographer", correct: false },
          { it: "No, è un hobby", en: "No, it's a hobby", correct: true },
          { it: "Sì, a volte", en: "Yes, sometimes", correct: false },
        ],
      },
      {
        it: "Che tipo di fotografia sta sperimentando?", en: "What type of photography is he experimenting with?",
        options: [
          { it: "Fotografia naturalistica", en: "Wildlife photography", correct: false },
          { it: "Fotografia di strada", en: "Street photography", correct: true },
          { it: "Fotografia subacquea", en: "Underwater photography", correct: false },
        ],
      },
    ],
    [
      { it: "l'hobby", en: "hobby" },
      { it: "condividere", en: "to share" },
    ],
    {
      question: "L'altra persona chiede consigli di fotografia. Cosa dice?",
      questionTranslation: "The other person asks for photography tips. What does he say?",
      options: [
        { text: "Che impostazioni usi per fotografare i monumenti?", translation: "What settings do you use for photographing monuments?", correct: true },
        { text: "Quanto costa la tua macchina?", translation: "How much did your camera cost?", correct: false },
        { text: "Mi presti la macchina?", translation: "Can you lend me the camera?", correct: false },
      ],
    },
  );

  // ========================
  // MODULE 55 — Deep Conversations (B2, level=3)
  // ========================

  // --- 1: Discussing Opinions on Education ---
  await addExperience(55, "Discussing Opinions on Education", 3, "Social",
    [
      { it: "Cosa pensi del sistema educativo italiano?", en: "What do you think of the Italian education system?", speaker: "person_a" },
      { it: "Ha dei punti di forza, ma anche molte carenze secondo me.", en: "It has strengths, but also many shortcomings in my opinion.", speaker: "person_b" },
      { it: "Ad esempio? Cosa andrebbe migliorato?", en: "For example? What should be improved?", speaker: "person_a" },
      { it: "L'istruzione è troppo teorica. Servirebbe più formazione pratica.", en: "Education is too theoretical. We need more practical training.", speaker: "person_b" },
      { it: "Concordo. Inoltre gli investimenti nella scuola sono insufficienti.", en: "I agree. Moreover, investment in schools is insufficient.", speaker: "person_a" },
    ],
    [
      { it: "il sistema educativo", en: "education system", article: "il" },
      { it: "la carenza", en: "shortcoming", article: "la" },
      { it: "la formazione pratica", en: "practical training", article: "la" },
    ],
    [
      {
        it: "Qual è la principale critica al sistema?", en: "What is the main criticism of the system?",
        options: [
          { it: "È troppo costoso", en: "It's too expensive", correct: false },
          { it: "È troppo teorico", en: "It's too theoretical", correct: true },
          { it: "Mancano gli insegnanti", en: "There is a lack of teachers", correct: false },
        ],
      },
      {
        it: "Cosa sarebbe necessario secondo loro?", en: "What would be needed according to them?",
        options: [
          { it: "Più libri di testo", en: "More textbooks", correct: false },
          { it: "Più formazione pratica", en: "More practical training", correct: true },
          { it: "Più compiti a casa", en: "More homework", correct: false },
        ],
      },
    ],
    [
      { it: "l'istruzione", en: "education" },
      { it: "investire", en: "to invest" },
    ],
    {
      question: "La persona esprime una contro-argomentazione. Cosa dice?",
      questionTranslation: "The person expresses a counter-argument. What does he say?",
      options: [
        { text: "Non sono completamente d'accordo. Credo che la teoria sia importante.", translation: "I don't completely agree. I think theory is important.", correct: true },
        { text: "Hai ragione su tutto.", translation: "You're right about everything.", correct: false },
        { text: "Non mi interessa l'argomento.", translation: "I'm not interested in the topic.", correct: false },
      ],
    },
  );

  // --- 2: Talking About Culture and Identity ---
  await addExperience(55, "Talking About Culture and Identity", 3, "Social",
    [
      { it: "Cosa significa per te essere italiano?", en: "What does being Italian mean to you?", speaker: "person_a" },
      { it: "È un misto di orgoglio e senso critico. Amo la cultura, ma non tutto va bene.", en: "It's a mix of pride and critical awareness. I love the culture, but not everything is fine.", speaker: "person_b" },
      { it: "Cosa ami di più della cultura italiana?", en: "What do you love most about Italian culture?", speaker: "person_a" },
      { it: "La cucina, la storia, l'arte e il senso di comunità.", en: "The cuisine, history, art, and sense of community.", speaker: "person_b" },
      { it: "E cosa cambieresti?", en: "And what would you change?", speaker: "person_a" },
      { it: "La burocrazia e la mentalità a volte troppo individualista.", en: "The bureaucracy and the sometimes overly individualistic mindset.", speaker: "person_b" },
    ],
    [
      { it: "l'orgoglio", en: "pride", article: "l'" },
      { it: "la cultura", en: "culture", article: "la" },
      { it: "la burocrazia", en: "bureaucracy", article: "la" },
    ],
    [
      {
        it: "Cosa ama di più della cultura italiana?", en: "What does he love most about Italian culture?",
        options: [
          { it: "La moda", en: "Fashion", correct: false },
          { it: "La cucina, storia, arte e comunità", en: "Cuisine, history, art and community", correct: true },
          { it: "Lo sport", en: "Sports", correct: false },
        ],
      },
      {
        it: "Cosa cambierebbe?", en: "What would he change?",
        options: [
          { it: "Il cibo", en: "The food", correct: false },
          { it: "La burocrazia e la mentalità individualista", en: "Bureaucracy and the individualistic mindset", correct: true },
          { it: "La lingua", en: "The language", correct: false },
        ],
      },
    ],
    [
      { it: "il senso critico", en: "critical awareness" },
      { it: "la mentalità", en: "mindset" },
    ],
    {
      question: "L'altra persona chiede un'opinione sul futuro. Cosa dice?",
      questionTranslation: "The other person asks for an opinion about the future. What does he say?",
      options: [
        { text: "Come pensi che evolverà la cultura italiana nei prossimi anni?", translation: "How do you think Italian culture will evolve in the coming years?", correct: true },
        { text: "Il futuro della cultura è la tecnologia.", translation: "The future of culture is technology.", correct: false },
        { text: "Non cambierà niente.", translation: "Nothing will change.", correct: false },
      ],
    },
  );

  // --- 3: Discussing Environmental Issues ---
  await addExperience(55, "Discussing Environmental Issues", 3, "Social",
    [
      { it: "Sei preoccupato per il cambiamento climatico?", en: "Are you worried about climate change?", speaker: "person_a" },
      { it: "Molto. Credo che dovremmo agire subito prima che sia troppo tardi.", en: "Very much. I think we should act immediately before it's too late.", speaker: "person_b" },
      { it: "Cosa fai concretamente per l'ambiente?", en: "What do you concretely do for the environment?", speaker: "person_a" },
      { it: "Faccio la raccolta differenziata, uso la bici e cerco di ridurre i rifiuti.", en: "I do separate waste collection, use my bike, and try to reduce waste.", speaker: "person_b" },
      { it: "Fai già molto. Il problema è che serve un cambiamento culturale globale.", en: "You already do a lot. The problem is that a global cultural change is needed.", speaker: "person_a" },
    ],
    [
      { it: "il cambiamento climatico", en: "climate change", article: "il" },
      { it: "la raccolta differenziata", en: "separate waste collection", article: "la" },
      { it: "il rifiuto", en: "waste", article: "il" },
    ],
    [
      {
        it: "Cosa fa concretamente per l'ambiente?", en: "What does he concretely do for the environment?",
        options: [
          { it: "Guida un'auto elettrica", en: "He drives an electric car", correct: false },
          { it: "Fai raccolta differenziata, usa la bici, riduce i rifiuti", en: "Separate waste, uses bike, reduces waste", correct: true },
          { it: "Pianta alberi", en: "He plants trees", correct: false },
        ],
      },
      {
        it: "Cosa serve secondo loro per risolvere il problema?", en: "What is needed to solve the problem according to them?",
        options: [
          { it: "Più tecnologia", en: "More technology", correct: false },
          { it: "Un cambiamento culturale globale", en: "A global cultural change", correct: true },
          { it: "Più soldi", en: "More money", correct: false },
        ],
      },
    ],
    [
      { it: "l'ambiente", en: "environment", article: "l'" },
      { it: "ridurre", en: "to reduce" },
    ],
    {
      question: "La persona propone un'iniziativa ambientale. Cosa dice?",
      questionTranslation: "The person proposes an environmental initiative. What does he say?",
      options: [
        { text: "Potremmo organizzare una pulizia del parco questo weekend, che ne pensi?", translation: "We could organize a park clean-up this weekend, what do you think?", correct: true },
        { text: "Non possiamo fare niente.", translation: "We can't do anything.", correct: false },
        { text: "L'ambiente non mi preoccupa.", translation: "I'm not worried about the environment.", correct: false },
      ],
    },
  );

  // --- 4: Discussing Technology and Society ---
  await addExperience(55, "Discussing Technology and Society", 3, "Social",
    [
      { it: "Pensi che la tecnologia stia isolando le persone?", en: "Do you think technology is isolating people?", speaker: "person_a" },
      { it: "In parte sì. Passiamo troppo tempo sui social e poco nella vita reale.", en: "Partially yes. We spend too much time on social media and little in real life.", speaker: "person_b" },
      { it: "Però ha anche aperto nuove possibilità di connessione.", en: "But it's also opened new possibilities for connection.", speaker: "person_a" },
      { it: "Vero. Senza internet non potrei lavorare da remoto come faccio ora.", en: "True. Without the internet I couldn't work remotely like I do now.", speaker: "person_b" },
      { it: "Il punto è trovare un equilibrio tra digitale e relazioni umane.", en: "The point is to find a balance between digital and human relationships.", speaker: "person_a" },
    ],
    [
      { it: "la tecnologia", en: "technology", article: "la" },
      { it: "il social", en: "social media", article: "il" },
      { it: "l'equilibrio", en: "balance", article: "l'" },
    ],
    [
      {
        it: "Qual è l'effetto negativo della tecnologia secondo loro?", en: "What's the negative effect of technology according to them?",
        options: [
          { it: "Rende le persone più intelligenti", en: "It makes people smarter", correct: false },
          { it: "Sta isolando le persone", en: "It's isolating people", correct: true },
          { it: "È troppo costosa", en: "It's too expensive", correct: false },
        ],
      },
      {
        it: "Che aspetto positivo ha la tecnologia?", en: "What positive aspect does technology have?",
        options: [
          { it: "Nuove possibilità di connessione", en: "New possibilities for connection", correct: true },
          { it: "Sostituisce i rapporti umani", en: "It replaces human relationships", correct: false },
          { it: "Rende tutti uguali", en: "It makes everyone equal", correct: false },
        ],
      },
    ],
    [
      { it: "isolare", en: "to isolate" },
      { it: "il rapporto umano", en: "human relationship" },
    ],
    {
      question: "L'altra persona parla dei social media. Cosa dice?",
      questionTranslation: "The other person talks about social media. What does he say?",
      options: [
        { text: "Credo che i social creino dipendenza, soprattutto tra i giovani.", translation: "I think social media are addictive, especially among young people.", correct: true },
        { text: "I social sono perfetti, non hanno difetti.", translation: "Social media are perfect, they have no flaws.", correct: false },
        { text: "Non uso i social, non mi interessano.", translation: "I don't use social media, I'm not interested.", correct: false },
      ],
    },
  );

  // --- 5: Discussing Politics ---
  await addExperience(55, "Discussing Politics", 3, "Social",
    [
      { it: "Segui la politica italiana?", en: "Do you follow Italian politics?", speaker: "person_a" },
      { it: "Cerco di tenermi informato, ma spesso è frustrante.", en: "I try to stay informed, but it's often frustrating.", speaker: "person_b" },
      { it: "Cosa ti frustra di più?", en: "What frustrates you the most?", speaker: "person_a" },
      { it: "La polarizzazione estrema e la mancanza di dialogo costruttivo.", en: "The extreme polarization and the lack of constructive dialogue.", speaker: "person_b" },
      { it: "Sì, il dibattito è sempre più acceso e meno rispettoso.", en: "Yes, the debate is increasingly heated and less respectful.", speaker: "person_a" },
    ],
    [
      { it: "la politica", en: "politics", article: "la" },
      { it: "la polarizzazione", en: "polarization", article: "la" },
      { it: "il dialogo costruttivo", en: "constructive dialogue", article: "il" },
    ],
    [
      {
        it: "Come descrive la situazione politica?", en: "How does he describe the political situation?",
        options: [
          { it: "Calma e collaborativa", en: "Calm and collaborative", correct: false },
          { it: "Frustrante e polarizzata", en: "Frustrating and polarized", correct: true },
          { it: "Non lo segue", en: "He doesn't follow it", correct: false },
        ],
      },
      {
        it: "Cosa manca secondo lui?", en: "What is missing according to him?",
        options: [
          { it: "Più soldi", en: "More money", correct: false },
          { it: "Dialogo costruttivo", en: "Constructive dialogue", correct: true },
          { it: "Più leggi", en: "More laws", correct: false },
        ],
      },
    ],
    [
      { it: "frustrante", en: "frustrating" },
      { it: "il dibattito", en: "debate" },
    ],
    {
      question: "L'altra persona propone una soluzione. Cosa dice?",
      questionTranslation: "The other person proposes a solution. What does he say?",
      options: [
        { text: "Forse dovremmo ascoltarci di più e gridare di meno.", translation: "Maybe we should listen to each other more and shout less.", correct: true },
        { text: "La soluzione è votare diversamente.", translation: "The solution is to vote differently.", correct: false },
        { text: "Non c'è soluzione.", translation: "There's no solution.", correct: false },
      ],
    },
  );

  // ========================
  // MODULE 56 — Making Arrangements (B2, level=3)
  // ========================

  // --- 1: Organizing a Group Dinner ---
  await addExperience(56, "Organizing a Group Dinner", 3, "Social",
    [
      { it: "Allora, organizziamo una cena di gruppo per sabato?", en: "So, shall we organize a group dinner for Saturday?", speaker: "person_a" },
      { it: "Ottima idea. Quanti siamo?", en: "Great idea. How many are we?", speaker: "person_b" },
      { it: "Io, te, Luca e Sara. In quattro.", en: "Me, you, Luca and Sara. Four people.", speaker: "person_a" },
      { it: "Devo chiamare per prenotare. Avete preferenze di cucina?", en: "I need to call to book. Do you have cuisine preferences?", speaker: "person_b" },
      { it: "Qualunque va bene, purché abbia opzioni vegetariane.", en: "Any is fine, as long as it has vegetarian options.", speaker: "person_a" },
    ],
    [
      { it: "la cena di gruppo", en: "group dinner", article: "la" },
      { it: "la preferenza", en: "preference", article: "la" },
      { it: "l'opzione vegetariana", en: "vegetarian option", article: "l'" },
    ],
    [
      {
        it: "Quante persone partecipano alla cena?", en: "How many people are joining the dinner?",
        options: [
          { it: "Tre", en: "Three", correct: false },
          { it: "Quattro", en: "Four", correct: true },
          { it: "Cinque", en: "Five", correct: false },
        ],
      },
      {
        it: "Che requisito ha per il ristorante?", en: "What requirement does he have for the restaurant?",
        options: [
          { it: "Deve essere economico", en: "It must be cheap", correct: false },
          { it: "Deve avere opzioni vegetariane", en: "It must have vegetarian options", correct: true },
          { it: "Deve essere vicino al centro", en: "It must be near the center", correct: false },
        ],
      },
    ],
    [
      { it: "organizzare", en: "to organize" },
      { it: "purché", en: "as long as" },
    ],
    {
      question: "Il ristorante preferito è completo. Cosa dice?",
      questionTranslation: "The preferred restaurant is full. What does he say?",
      options: [
        { text: "Ho chiamato La Pergola, ma è al completo. Proviamo Da Giacomo?", translation: "I called La Pergola, but it's full. Shall we try Da Giacomo?", correct: true },
        { text: "Non andiamo più.", translation: "Let's not go anymore.", correct: false },
        { text: "Andiamo da soli.", translation: "Let's go alone.", correct: false },
      ],
    },
  );

  // --- 2: Coordinating a Trip to the Beach ---
  await addExperience(56, "Coordinating a Trip to the Beach", 3, "Social",
    [
      { it: "Organizziamo una gita al mare domenica?", en: "Shall we organize a trip to the beach on Sunday?", speaker: "person_a" },
      { it: "Mi piacerebbe. A che ora ci troviamo?", en: "I'd like that. What time shall we meet?", speaker: "person_b" },
      { it: "Partiamo presto per evitare il traffico. Diciamo alle 7:00?", en: "Let's leave early to avoid traffic. Shall we say 7:00 AM?", speaker: "person_a" },
      { it: "Va bene. Chi guida?", en: "Okay. Who's driving?", speaker: "person_b" },
      { it: "Io ho la macchina. Posso passare a prendere tutti.", en: "I have the car. I can pick everyone up.", speaker: "person_a" },
    ],
    [
      { it: "la gita al mare", en: "beach trip", article: "la" },
      { it: "la macchina", en: "car", article: "la" },
      { it: "guidare", en: "to drive" },
    ],
    [
      {
        it: "Quando vanno al mare?", en: "When are they going to the beach?",
        options: [
          { it: "Sabato", en: "Saturday", correct: false },
          { it: "Domenica", en: "Sunday", correct: true },
          { it: "Venerdì", en: "Friday", correct: false },
        ],
      },
      {
        it: "Perché partono presto?", en: "Why are they leaving early?",
        options: [
          { it: "Per vedere l'alba", en: "To watch the sunrise", correct: false },
          { it: "Per evitare il traffico", en: "To avoid traffic", correct: true },
          { it: "Per arrivare prima al ristorante", en: "To arrive early at the restaurant", correct: false },
        ],
      },
    ],
    [
      { it: "evitare", en: "to avoid" },
      { it: "passare a prendere", en: "to pick up" },
    ],
    {
      question: "Un amico non ha la macchina. Cosa chiede?",
      questionTranslation: "A friend doesn't have a car. What does he ask?",
      options: [
        { text: "Potete passare a prendere anche me? Non ho la macchina.", translation: "Can you pick me up too? I don't have a car.", correct: true },
        { text: "Prendo l'autobus.", translation: "I'll take the bus.", correct: false },
        { text: "Non vengo.", translation: "I'm not coming.", correct: false },
      ],
    },
  );

  // --- 3: Planning a Surprise Party ---
  await addExperience(56, "Planning a Surprise Party", 3, "Social",
    [
      { it: "Dobbiamo organizzarci per la festa a sorpresa di Anna.", en: "We need to coordinate for Anna's surprise party.", speaker: "person_a" },
      { it: "Sì, il suo compleanno è venerdì prossimo. Che piano hai in mente?", en: "Yes, her birthday is next Friday. What plan do you have in mind?", speaker: "person_b" },
      { it: "Vorrei organizzare una festa al mio appartamento. Invitiamo 15 persone.", en: "I'd like to organize a party at my apartment. Let's invite 15 people.", speaker: "person_a" },
      { it: "Perfetto. Io mi occupo delle decorazioni e della torta.", en: "Perfect. I'll take care of decorations and the cake.", speaker: "person_b" },
      { it: "Io preparo da mangiare. Ma non dire niente ad Anna per favore!", en: "I'll prepare the food. But don't say anything to Anna please!", speaker: "person_a" },
    ],
    [
      { it: "la festa a sorpresa", en: "surprise party", article: "la" },
      { it: "la decorazione", en: "decoration", article: "la" },
      { it: "la torta", en: "cake", article: "la" },
    ],
    [
      {
        it: "Per chi è la festa a sorpresa?", en: "Who is the surprise party for?",
        options: [
          { it: "Per Marco", en: "For Marco", correct: false },
          { it: "Per Anna", en: "For Anna", correct: true },
          { it: "Per Luca", en: "For Luca", correct: false },
        ],
      },
      {
        it: "Di cosa si occupa la seconda persona?", en: "What is the second person responsible for?",
        options: [
          { it: "Della musica", en: "For the music", correct: false },
          { it: "Delle decorazioni e della torta", en: "For decorations and the cake", correct: true },
          { it: "Del cibo", en: "For the food", correct: false },
        ],
      },
    ],
    [
      { it: "la sorpresa", en: "surprise" },
      { it: "occuparsi di", en: "to take care of" },
    ],
    {
      question: "Il luogo della festa cambia. Cosa dice?",
      questionTranslation: "The party location changes. What does he say?",
      options: [
        { text: "Il mio appartamento non è disponibile. Possiamo farla da te?", translation: "My apartment isn't available. Can we have it at your place?", correct: true },
        { text: "La festa è cancellata.", translation: "The party is cancelled.", correct: false },
        { text: "Non lo so.", translation: "I don't know.", correct: false },
      ],
    },
  );

  // --- 4: Coordinating a Workout Session ---
  await addExperience(56, "Coordinating a Workout Session", 3, "Social",
    [
      { it: "Ti va di andare in palestra insieme questa settimana?", en: "Do you feel like going to the gym together this week?", speaker: "person_a" },
      { it: "Buona idea! Che giorni sei libero?", en: "Good idea! Which days are you free?", speaker: "person_b" },
      { it: "Di solito vado lunedì, mercoledì e venerdì dopo il lavoro.", en: "I usually go Monday, Wednesday, and Friday after work.", speaker: "person_a" },
      { it: "Mercoledì mi va bene. Alle 18:00?", en: "Wednesday works for me. At 6:00 PM?", speaker: "person_b" },
      { it: "Perfetto. Ci vediamo direttamente in palestra.", en: "Perfect. Let's meet directly at the gym.", speaker: "person_a" },
    ],
    [
      { it: "la palestra", en: "gym", article: "la" },
      { it: "l'allenamento", en: "workout", article: "l'" },
      { it: "l'orario", en: "time", article: "l'" },
    ],
    [
      {
        it: "Quanti giorni va in palestra di solito?", en: "How many days does he usually go to the gym?",
        options: [
          { it: "Due giorni", en: "Two days", correct: false },
          { it: "Tre giorni", en: "Three days", correct: true },
          { it: "Cinque giorni", en: "Five days", correct: false },
        ],
      },
      {
        it: "Che giorno decidono di andare insieme?", en: "Which day do they decide to go together?",
        options: [
          { it: "Lunedì", en: "Monday", correct: false },
          { it: "Mercoledì", en: "Wednesday", correct: true },
          { it: "Venerdì", en: "Friday", correct: false },
        ],
      },
    ],
    [
      { it: "andare in palestra", en: "to go to the gym" },
      { it: "liberò", en: "free" },
    ],
    {
      question: "La persona propone un orario diverso. Cosa dice?",
      questionTranslation: "The person proposes a different time. What does he say?",
      options: [
        { text: "Alle 18:00 per me è presto. Possiamo spostare alle 19:00?", translation: "6:00 PM is early for me. Can we move it to 7:00 PM?", correct: true },
        { text: "Non posso quel giorno.", translation: "I can't that day.", correct: false },
        { text: "Cambiamo palestra.", translation: "Let's change gym.", correct: false },
      ],
    },
  );

  // --- 5: Finalizing Event Logistics ---
  await addExperience(56, "Finalizing Event Logistics", 3, "Social",
    [
      { it: "Allora, per l'evento di beneficenza abbiamo bisogno di volontari.", en: "So, for the charity event we need volunteers.", speaker: "person_a" },
      { it: "Quanti ne servono? Io posso portare due amici.", en: "How many are needed? I can bring two friends.", speaker: "person_b" },
      { it: "Almeno dieci. Dobbiamo gestire l'accoglienza e il buffet.", en: "At least ten. We need to manage the reception and the buffet.", speaker: "person_a" },
      { it: "Io posso occuparmi dell'accoglienza. Che orario?", en: "I can take care of the reception. What time?", speaker: "person_b" },
      { it: "L'evento inizia alle 19:00. I volontari devono arrivare alle 17:00 per preparare.", en: "The event starts at 7:00 PM. Volunteers need to arrive at 5:00 PM to prepare.", speaker: "person_a" },
    ],
    [
      { it: "l'evento di beneficenza", en: "charity event", article: "l'" },
      { it: "il volontario", en: "volunteer", article: "il" },
      { it: "l'accoglienza", en: "reception", article: "l'" },
    ],
    [
      {
        it: "Quanti volontari servono?", en: "How many volunteers are needed?",
        options: [
          { it: "Cinque", en: "Five", correct: false },
          { it: "Almeno dieci", en: "At least ten", correct: true },
          { it: "Quindici", en: "Fifteen", correct: false },
        ],
      },
      {
        it: "A che ora devono arrivare i volontari?", en: "What time do volunteers need to arrive?",
        options: [
          { it: "Alle 19:00", en: "At 7:00 PM", correct: false },
          { it: "Alle 17:00", en: "At 5:00 PM", correct: true },
          { it: "Alle 18:00", en: "At 6:00 PM", correct: false },
        ],
      },
    ],
    [
      { it: "gestire", en: "to manage" },
      { it: "il buffet", en: "buffet", article: "il" },
    ],
    {
      question: "Mancano volontari. Cosa dice per incoraggiare?",
      questionTranslation: "Volunteers are short. What does he say to encourage?",
      options: [
        { text: "Ragazzi, abbiamo ancora bisogno di aiuto. Chi può venire?", translation: "Guys, we still need help. Who can come?", correct: true },
        { text: "Non venite, non serve.", translation: "Don't come, it's not needed.", correct: false },
        { text: "L'evento è annullato.", translation: "The event is cancelled.", correct: false },
      ],
    },
  );

  console.log("  ✓ Social seeded");
}
