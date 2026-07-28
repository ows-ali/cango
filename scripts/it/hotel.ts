export async function seedHotel(addExperience: Function) {
  // ========================
  // MODULE 39 — Checking In (A2, level=1)
  // ========================

  // --- 39.1: Arriving at the Hotel ---
  await addExperience(39, "Arriving at the Hotel", 1, "Hotel",
    [
      { it: "Buonasera, ho prenotato una camera doppia.", en: "Good evening, I booked a double room.", speaker: "guest" },
      { it: "Buonasera, a nome di chi?", en: "Good evening, under what name?", speaker: "receptionist" },
      { it: "Mario Bianchi. Ho la conferma qui.", en: "Mario Bianchi. I have the confirmation here.", speaker: "guest" },
      { it: "Ah sì, la vedo nel sistema. Camera 305, al terzo piano.", en: "Ah yes, I see you in the system. Room 305, on the third floor.", speaker: "receptionist" },
      { it: "La colazione è inclusa?", en: "Is breakfast included?", speaker: "guest" },
    ],
    [
      { it: "prenotare", en: "to book" },
      { it: "la camera doppia", en: "double room", article: "la" },
      { it: "la colazione", en: "breakfast", article: "la" },
    ],
    [
      {
        it: "Che tipo di camera ha prenotato l'ospite?", en: "What type of room did the guest book?",
        options: [
          { it: "Una camera doppia", en: "A double room", correct: true },
          { it: "Una camera singola", en: "A single room", correct: false },
          { it: "Una suite", en: "A suite", correct: false },
        ],
      },
      {
        it: "A che piano si trova la camera?", en: "On which floor is the room?",
        options: [
          { it: "Al primo piano", en: "On the first floor", correct: false },
          { it: "Al terzo piano", en: "On the third floor", correct: true },
          { it: "Al quinto piano", en: "On the fifth floor", correct: false },
        ],
      },
    ],
    [
      { it: "la prenotazione", en: "reservation" },
      { it: "la conferma", en: "confirmation" },
    ],
    {
      question: "L'ospite vuole sapere se la colazione è compresa. Cosa dice?",
      questionTranslation: "The guest wants to know if breakfast is included. What does he say?",
      options: [
        { text: "La colazione è inclusa?", translation: "Is breakfast included?", correct: true },
        { text: "Dov'è il ristorante?", translation: "Where is the restaurant?", correct: false },
        { text: "Quanto costa la colazione?", translation: "How much is breakfast?", correct: false },
      ],
    },
  );

  // --- 39.2: Providing Personal Information ---
  await addExperience(39, "Providing Personal Information", 1, "Hotel",
    [
      { it: "Mi serve un documento d'identità, per favore.", en: "I need an identity document, please.", speaker: "receptionist" },
      { it: "Ecco il mio passaporto.", en: "Here is my passport.", speaker: "guest" },
      { it: "Devo compilare la scheda di registrazione.", en: "You need to fill out the registration card.", speaker: "receptionist" },
      { it: "Cosa devo scrivere?", en: "What do I need to write?", speaker: "guest" },
      { it: "Nome, cognome, data di nascita e firma.", en: "First name, last name, date of birth and signature.", speaker: "receptionist" },
    ],
    [
      { it: "il passaporto", en: "passport", article: "il" },
      { it: "la scheda di registrazione", en: "registration card", article: "la" },
      { it: "la firma", en: "signature", article: "la" },
    ],
    [
      {
        it: "Quale documento mostra l'ospite?", en: "Which document does the guest show?",
        options: [
          { it: "La patente di guida", en: "Driver's license", correct: false },
          { it: "Il passaporto", en: "Passport", correct: true },
          { it: "La carta d'identità", en: "ID card", correct: false },
        ],
      },
      {
        it: "Quali informazioni deve scrivere l'ospite?", en: "What information does the guest need to write?",
        options: [
          { it: "Solo il nome", en: "Only the first name", correct: false },
          { it: "Nome, cognome e firma", en: "First name, last name and signature", correct: false },
          { it: "Nome, cognome, data di nascita e firma", en: "First name, last name, date of birth and signature", correct: true },
        ],
      },
    ],
    [
      { it: "il cognome", en: "last name" },
      { it: "la data di nascita", en: "date of birth" },
    ],
    {
      question: "Il receptionist chiede un documento. Cosa dice?",
      questionTranslation: "The receptionist asks for a document. What does he say?",
      options: [
        { text: "Mi serve un documento d'identità, per favore.", translation: "I need an identity document, please.", correct: true },
        { text: "Mi dia la carta di credito.", translation: "Give me your credit card.", correct: false },
        { text: "Deve pagare ora.", translation: "You need to pay now.", correct: false },
      ],
    },
  );

  // --- 39.3: Receiving the Room Key ---
  await addExperience(39, "Receiving the Room Key", 1, "Hotel",
    [
      { it: "Tutto a posto. Ecco la chiave della sua camera.", en: "Everything is in order. Here is your room key.", speaker: "receptionist" },
      { it: "È una carta magnetica?", en: "Is it a key card?", speaker: "guest" },
      { it: "Sì, funziona con la banda magnetica. Inserisca la carta nella fessura.", en: "Yes, it works with a magnetic strip. Insert the card into the slot.", speaker: "receptionist" },
      { it: "E per la luce? Non si accende?", en: "And for the light? It doesn't turn on?", speaker: "guest" },
      { it: "Deve inserire la carta nell'apposito slot vicino alla porta per attivare la corrente.", en: "You need to insert the card in the slot near the door to activate the electricity.", speaker: "receptionist" },
    ],
    [
      { it: "la chiave", en: "key", article: "la" },
      { it: "la carta magnetica", en: "key card", article: "la" },
      { it: "la fessura", en: "slot", article: "la" },
    ],
    [
      {
        it: "Come funziona la chiave della camera?", en: "How does the room key work?",
        options: [
          { it: "Con una serratura normale", en: "With a normal lock", correct: false },
          { it: "Con la banda magnetica", en: "With a magnetic strip", correct: true },
          { it: "Con le impronte digitali", en: "With fingerprints", correct: false },
        ],
      },
      {
        it: "Cosa deve fare l'ospite per la corrente elettrica?", en: "What must the guest do for the electricity?",
        options: [
          { it: "Premere un pulsante", en: "Press a button", correct: false },
          { it: "Inserire la carta nello slot", en: "Insert the card in the slot", correct: true },
          { it: "Chiamare la reception", en: "Call reception", correct: false },
        ],
      },
    ],
    [
      { it: "la corrente", en: "electricity" },
    ],
    {
      question: "L'ospite vuole sapere come attivare la luce. Cosa dice?",
      questionTranslation: "The guest wants to know how to turn on the light. What does he say?",
      options: [
        { text: "E per la luce? Non si accende?", translation: "And for the light? It doesn't turn on?", correct: true },
        { text: "Dov'è l'interruttore?", translation: "Where is the switch?", correct: false },
        { text: "La lampadina è rotta.", translation: "The light bulb is broken.", correct: false },
      ],
    },
  );

  // --- 39.4: Asking About Breakfast ---
  await addExperience(39, "Asking About Breakfast", 1, "Hotel",
    [
      { it: "A che ora è la colazione?", en: "What time is breakfast?", speaker: "guest" },
      { it: "La colazione viene servita dalle 7:00 alle 10:00.", en: "Breakfast is served from 7:00 AM to 10:00 AM.", speaker: "receptionist" },
      { it: "Dove si trova la sala da pranzo?", en: "Where is the dining room?", speaker: "guest" },
      { it: "Al piano terra, dietro l'angolo a sinistra.", en: "On the ground floor, around the corner on the left.", speaker: "receptionist" },
      { it: "È a buffet o al tavolo?", en: "Is it a buffet or table service?", speaker: "guest" },
    ],
    [
      { it: "servire", en: "to serve" },
      { it: "il piano terra", en: "ground floor", article: "il" },
      { it: "il buffet", en: "buffet", article: "il" },
    ],
    [
      {
        it: "Quanto dura il servizio della colazione?", en: "How long does the breakfast service last?",
        options: [
          { it: "Dalle 7:00 alle 10:00", en: "From 7:00 AM to 10:00 AM", correct: true },
          { it: "Dalle 8:00 alle 11:00", en: "From 8:00 AM to 11:00 AM", correct: false },
          { it: "Dalle 6:30 alle 9:30", en: "From 6:30 AM to 9:30 AM", correct: false },
        ],
      },
      {
        it: "Dov'è la sala da pranzo?", en: "Where is the dining room?",
        options: [
          { it: "Al primo piano", en: "On the first floor", correct: false },
          { it: "Al piano terra", en: "On the ground floor", correct: true },
          { it: "Al seminterrato", en: "In the basement", correct: false },
        ],
      },
    ],
    [
      { it: "la sala da pranzo", en: "dining room" },
    ],
    {
      question: "L'ospite chiede informazioni sulla colazione. Cosa dice?",
      questionTranslation: "The guest asks for information about breakfast. What does he say?",
      options: [
        { text: "È a buffet o al tavolo?", translation: "Is it a buffet or table service?", correct: true },
        { text: "La colazione è buona?", translation: "Is the breakfast good?", correct: false },
        { text: "Posso mangiare in camera?", translation: "Can I eat in my room?", correct: false },
      ],
    },
  );

  // --- 39.5: Requesting a Room Change ---
  await addExperience(39, "Requesting a Room Change", 1, "Hotel",
    [
      { it: "Mi dispiace, ma la camera non mi piace. È troppo rumorosa.", en: "I'm sorry, but I don't like the room. It's too noisy.", speaker: "guest" },
      { it: "Mi dispiace per il disagio. A che piano preferirebbe?", en: "I'm sorry for the inconvenience. On which floor would you prefer?", speaker: "receptionist" },
      { it: "C'è una camera più silenziosa disponibile?", en: "Is there a quieter room available?", speaker: "guest" },
      { it: "Sì, abbiamo una camera al secondo piano, lato cortile.", en: "Yes, we have a room on the second floor, courtyard side.", speaker: "receptionist" },
      { it: "Perfetto, la prendo. Grazie mille.", en: "Perfect, I'll take it. Thank you very much.", speaker: "guest" },
    ],
    [
      { it: "rumoroso", en: "noisy" },
      { it: "silenzioso", en: "quiet" },
      { it: "il cortile", en: "courtyard", article: "il" },
    ],
    [
      {
        it: "Perché l'ospite vuole cambiare camera?", en: "Why does the guest want to change rooms?",
        options: [
          { it: "È troppo rumorosa", en: "It's too noisy", correct: true },
          { it: "È troppo piccola", en: "It's too small", correct: false },
          { it: "Non ha la vista mare", en: "It doesn't have a sea view", correct: false },
        ],
      },
      {
        it: "Quale camera viene offerta?", en: "Which room is offered?",
        options: [
          { it: "Al secondo piano, lato cortile", en: "On the second floor, courtyard side", correct: true },
          { it: "Al primo piano, lato strada", en: "On the first floor, street side", correct: false },
          { it: "Al terzo piano, lato giardino", en: "On the third floor, garden side", correct: false },
        ],
      },
    ],
    [
      { it: "cambiare", en: "to change" },
      { it: "disponibile", en: "available" },
    ],
    {
      question: "L'ospite spiega perché non vuole la camera. Cosa dice?",
      questionTranslation: "The guest explains why he doesn't want the room. What does he say?",
      options: [
        { text: "È troppo rumorosa.", translation: "It's too noisy.", correct: true },
        { text: "Non mi piace il colore.", translation: "I don't like the color.", correct: false },
        { text: "Il letto è scomodo.", translation: "The bed is uncomfortable.", correct: false },
      ],
    },
  );

  // ========================
  // MODULE 40 — During Your Stay (A2, level=1)
  // ========================

  // --- 40.1: Ordering Room Service ---
  await addExperience(40, "Ordering Room Service", 1, "Hotel",
    [
      { it: "Pronto, reception? Vorrei ordinare la cena in camera.", en: "Hello, reception? I'd like to order dinner in my room.", speaker: "guest" },
      { it: "Certo, le passo il ristorante.", en: "Certainly, I'll transfer you to the restaurant.", speaker: "receptionist" },
      { it: "Buonasera, vorrei un piatto di pasta al pomodoro.", en: "Good evening, I'd like a plate of pasta with tomato sauce.", speaker: "guest" },
      { it: "Come contorno desidera?", en: "What side dish would you like?", speaker: "receptionist" },
      { it: "Un'insalata mista, per favore.", en: "A mixed salad, please.", speaker: "guest" },
    ],
    [
      { it: "ordinare", en: "to order" },
      { it: "la cena", en: "dinner", article: "la" },
      { it: "il contorno", en: "side dish", article: "il" },
    ],
    [
      {
        it: "Cosa vuole ordinare l'ospite?", en: "What does the guest want to order?",
        options: [
          { it: "Pasta al pomodoro e insalata", en: "Pasta with tomato sauce and salad", correct: true },
          { it: "Pizza e patatine", en: "Pizza and fries", correct: false },
          { it: "Bistecca e verdure", en: "Steak and vegetables", correct: false },
        ],
      },
      {
        it: "Dove vuole mangiare l'ospite?", en: "Where does the guest want to eat?",
        options: [
          { it: "In camera", en: "In his room", correct: true },
          { it: "Al ristorante", en: "At the restaurant", correct: false },
          { it: "In giardino", en: "In the garden", correct: false },
        ],
      },
    ],
    [
      { it: "passare", en: "to transfer" },
      { it: "l'insalata mista", en: "mixed salad" },
    ],
    {
      question: "L'ospite vuole parlare con il ristorante. Cosa dice al receptionist?",
      questionTranslation: "The guest wants to speak with the restaurant. What does he say to the receptionist?",
      options: [
        { text: "Vorrei ordinare la cena in camera.", translation: "I'd like to order dinner in my room.", correct: true },
        { text: "Dov'è il ristorante?", translation: "Where is the restaurant?", correct: false },
        { text: "Il ristorante è aperto?", translation: "Is the restaurant open?", correct: false },
      ],
    },
  );

  // --- 40.2: Asking About Hotel Facilities ---
  await addExperience(40, "Asking About Hotel Facilities", 1, "Hotel",
    [
      { it: "L'albergo ha una palestra?", en: "Does the hotel have a gym?", speaker: "guest" },
      { it: "Sì, la palestra è al quarto piano, aperta dalle 7:00 alle 22:00.", en: "Yes, the gym is on the fourth floor, open from 7:00 AM to 10:00 PM.", speaker: "receptionist" },
      { it: "C'è anche una piscina?", en: "Is there also a pool?", speaker: "guest" },
      { it: "Sì, abbiamo una piscina all'aperto aperta da giugno a settembre.", en: "Yes, we have an outdoor pool open from June to September.", speaker: "receptionist" },
      { it: "E il parcheggio? È gratuito?", en: "And the parking? Is it free?", speaker: "guest" },
    ],
    [
      { it: "la palestra", en: "gym", article: "la" },
      { it: "la piscina", en: "swimming pool", article: "la" },
      { it: "il parcheggio", en: "parking", article: "il" },
    ],
    [
      {
        it: "Dov'è la palestra dell'albergo?", en: "Where is the hotel gym?",
        options: [
          { it: "Al piano terra", en: "On the ground floor", correct: false },
          { it: "Al quarto piano", en: "On the fourth floor", correct: true },
          { it: "Al seminterrato", en: "In the basement", correct: false },
        ],
      },
      {
        it: "Quando è aperta la piscina?", en: "When is the pool open?",
        options: [
          { it: "Da giugno a settembre", en: "From June to September", correct: true },
          { it: "Da aprile a ottobre", en: "From April to October", correct: false },
          { it: "Tutto l'anno", en: "All year round", correct: false },
        ],
      },
    ],
    [
      { it: "gratuito", en: "free of charge" },
    ],
    {
      question: "L'ospite chiede se la piscina è disponibile. Cosa dice?",
      questionTranslation: "The guest asks if the pool is available. What does he say?",
      options: [
        { text: "C'è anche una piscina?", translation: "Is there also a pool?", correct: true },
        { text: "Quanto costa la piscina?", translation: "How much does the pool cost?", correct: false },
        { text: "La piscina è riscaldata?", translation: "Is the pool heated?", correct: false },
      ],
    },
  );

  // --- 40.3: Requesting Towels ---
  await addExperience(40, "Requesting Towels", 1, "Hotel",
    [
      { it: "Buongiorno, avrei bisogno di asciugamani puliti.", en: "Good morning, I would need some clean towels.", speaker: "guest" },
      { it: "Certamente. Quanti ne vuole?", en: "Certainly. How many would you like?", speaker: "receptionist" },
      { it: "Due asciugamani grandi e uno piccolo, per favore.", en: "Two large towels and one small one, please.", speaker: "guest" },
      { it: "Glieli mando subito con il personale delle pulizie.", en: "I'll send them right away with housekeeping.", speaker: "receptionist" },
      { it: "Grazie. C'è anche del bagnoschiuma?", en: "Thank you. Is there also some shower gel?", speaker: "guest" },
    ],
    [
      { it: "l'asciugamano", en: "towel", article: "l'" },
      { it: "il bagnoschiuma", en: "shower gel", article: "il" },
      { it: "le pulizie", en: "housekeeping" },
    ],
    [
      {
        it: "Quanti asciugamani vuole l'ospite?", en: "How many towels does the guest want?",
        options: [
          { it: "Due grandi e uno piccolo", en: "Two large and one small", correct: true },
          { it: "Tre grandi", en: "Three large", correct: false },
          { it: "Uno grande e due piccoli", en: "One large and two small", correct: false },
        ],
      },
      {
        it: "Chi porterà gli asciugamani?", en: "Who will bring the towels?",
        options: [
          { it: "Il receptionist", en: "The receptionist", correct: false },
          { it: "Il personale delle pulizie", en: "Housekeeping", correct: true },
          { it: "Il cuoco", en: "The cook", correct: false },
        ],
      },
    ],
    [
      { it: "mandare", en: "to send" },
    ],
    {
      question: "L'ospite chiede un prodotto per il bagno. Cosa dice?",
      questionTranslation: "The guest asks for a bathroom product. What does he say?",
      options: [
        { text: "C'è anche del bagnoschiuma?", translation: "Is there also some shower gel?", correct: true },
        { text: "Dov'è la doccia?", translation: "Where is the shower?", correct: false },
        { text: "L'acqua è calda?", translation: "Is the water hot?", correct: false },
      ],
    },
  );

  // --- 40.4: Calling for Housekeeping ---
  await addExperience(40, "Calling for Housekeeping", 1, "Hotel",
    [
      { it: "Pronto, reception? Vorrei far pulire la camera.", en: "Hello, reception? I'd like to have my room cleaned.", speaker: "guest" },
      { it: "Certo, a che ora preferisce?", en: "Certainly, what time would you prefer?", speaker: "receptionist" },
      { it: "Tra un'ora, verso le 15:00, va bene?", en: "In one hour, around 3:00 PM, is that okay?", speaker: "guest" },
      { it: "Perfetto, mandiamo qualcuno alle 15:00.", en: "Perfect, we'll send someone at 3:00 PM.", speaker: "receptionist" },
      { it: "Potrebbero anche cambiare le lenzuola, per favore?", en: "Could they also change the sheets, please?", speaker: "guest" },
    ],
    [
      { it: "pulire", en: "to clean" },
      { it: "le lenzuola", en: "sheets" },
    ],
    [
      {
        it: "Cosa vuole l'ospite?", en: "What does the guest want?",
        options: [
          { it: "Far pulire la camera", en: "To have the room cleaned", correct: true },
          { it: "Cambiare camera", en: "To change rooms", correct: false },
          { it: "Ordinare da mangiare", en: "To order food", correct: false },
        ],
      },
      {
        it: "Quando arriverà il personale delle pulizie?", en: "When will housekeeping arrive?",
        options: [
          { it: "Subito", en: "Right away", correct: false },
          { it: "Alle 15:00", en: "At 3:00 PM", correct: true },
          { it: "Domani mattina", en: "Tomorrow morning", correct: false },
        ],
      },
    ],
    [
      { it: "cambiare", en: "to change" },
    ],
    {
      question: "L'ospite chiede un servizio extra per la camera. Cosa dice?",
      questionTranslation: "The guest asks for an extra service for the room. What does he say?",
      options: [
        { text: "Potrebbero anche cambiare le lenzuola?", translation: "Could they also change the sheets?", correct: true },
        { text: "Il letto è troppo duro.", translation: "The bed is too hard.", correct: false },
        { text: "La stanza è fredda.", translation: "The room is cold.", correct: false },
      ],
    },
  );

  // --- 40.5: Asking for a Wake-Up Call ---
  await addExperience(40, "Asking for a Wake-Up Call", 1, "Hotel",
    [
      { it: "Buonasera, vorrei una sveglia per domani mattina.", en: "Good evening, I'd like a wake-up call for tomorrow morning.", speaker: "guest" },
      { it: "A che ora desidera essere svegliato?", en: "What time would you like to be woken up?", speaker: "receptionist" },
      { it: "Alle 6:30, per favore. Devo prendere un treno presto.", en: "At 6:30 AM, please. I have to catch an early train.", speaker: "guest" },
      { it: "D'accordo. La sveglia alle 6:30. Buona serata.", en: "Alright. Wake-up at 6:30 AM. Good evening.", speaker: "receptionist" },
      { it: "Grazie, buona serata anche a lei.", en: "Thank you, good evening to you as well.", speaker: "guest" },
    ],
    [
      { it: "la sveglia", en: "wake-up call", article: "la" },
      { it: "il treno", en: "train", article: "il" },
    ],
    [
      {
        it: "Perché l'ospite vuole la sveglia presto?", en: "Why does the guest want an early wake-up call?",
        options: [
          { it: "Deve prendere un treno", en: "He has to catch a train", correct: true },
          { it: "Deve fare colazione", en: "He needs to have breakfast", correct: false },
          { it: "Ha una riunione", en: "He has a meeting", correct: false },
        ],
      },
      {
        it: "A che ora vuole la sveglia?", en: "What time does he want the wake-up call?",
        options: [
          { it: "Alle 6:00", en: "At 6:00 AM", correct: false },
          { it: "Alle 6:30", en: "At 6:30 AM", correct: true },
          { it: "Alle 7:00", en: "At 7:00 AM", correct: false },
        ],
      },
    ],
    [
      { it: "svegliare", en: "to wake up" },
    ],
    {
      question: "L'ospite chiede alla reception di svegliarlo. Cosa dice?",
      questionTranslation: "The guest asks reception to wake him up. What does he say?",
      options: [
        { text: "Vorrei una sveglia per domani mattina.", translation: "I'd like a wake-up call for tomorrow morning.", correct: true },
        { text: "Il risveglio è automatico?", translation: "Is the wake-up automatic?", correct: false },
        { text: "A che ora chiude la reception?", translation: "What time does reception close?", correct: false },
      ],
    },
  );

  // ========================
  // MODULE 41 — Making Requests (B1, level=2)
  // ========================

  // --- 41.1: Requesting Extra Pillows ---
  await addExperience(41, "Requesting Extra Pillows", 2, "Hotel",
    [
      { it: "Buonasera, avrei bisogno di cuscini extra, per favore.", en: "Good evening, I would need some extra pillows, please.", speaker: "guest" },
      { it: "Certamente, quanti cuscini desidera?", en: "Certainly, how many pillows would you like?", speaker: "receptionist" },
      { it: "Due cuscini in più, se possibile. Quelli che ho sono troppo morbidi.", en: "Two extra pillows if possible. The ones I have are too soft.", speaker: "guest" },
      { it: "Nessun problema. Glieli faccio portare immediatamente.", en: "No problem. I'll have them brought to you immediately.", speaker: "receptionist" },
      { it: "Grazie, e c'è anche una coperta di riserva?", en: "Thank you, and is there also a spare blanket?", speaker: "guest" },
    ],
    [
      { it: "il cuscino", en: "pillow", article: "il" },
      { it: "morbido", en: "soft" },
      { it: "la coperta", en: "blanket", article: "la" },
    ],
    [
      {
        it: "Quanti cuscini extra vuole l'ospite?", en: "How many extra pillows does the guest want?",
        options: [
          { it: "Uno", en: "One", correct: false },
          { it: "Due", en: "Two", correct: true },
          { it: "Tre", en: "Three", correct: false },
        ],
      },
      {
        it: "Perché l'ospite vuole cuscini extra?", en: "Why does the guest want extra pillows?",
        options: [
          { it: "Quelli attuali sono troppo morbidi", en: "The current ones are too soft", correct: true },
          { it: "Non ci sono cuscini in camera", en: "There are no pillows in the room", correct: false },
          { it: "I cuscini sono sporchi", en: "The pillows are dirty", correct: false },
        ],
      },
    ],
    [
      { it: "extra", en: "extra" },
      { it: "portare", en: "to bring" },
    ],
    {
      question: "L'ospite chiede se ha una coperta di scorta. Cosa dice?",
      questionTranslation: "The guest asks if there's a spare blanket. What does he say?",
      options: [
        { text: "C'è anche una coperta di riserva?", translation: "Is there also a spare blanket?", correct: true },
        { text: "La coperta è troppo sottile.", translation: "The blanket is too thin.", correct: false },
        { text: "Dov'è la coperta?", translation: "Where is the blanket?", correct: false },
      ],
    },
  );

  // --- 41.2: Asking for a Late Check-Out ---
  await addExperience(41, "Asking for a Late Check-Out", 2, "Hotel",
    [
      { it: "Buongiorno, domani devo partire nel pomeriggio. È possibile fare tardo check-out?", en: "Good morning, I have to leave tomorrow afternoon. Is late check-out possible?", speaker: "guest" },
      { it: "Il check-out standard è alle 11:00. Fino a che ora le servirebbe?", en: "Standard check-out is at 11:00 AM. Until what time would you need?", speaker: "receptionist" },
      { it: "Fino alle 14:00, se possibile. Il mio volo parte alle 17:00.", en: "Until 2:00 PM if possible. My flight departs at 5:00 PM.", speaker: "guest" },
      { it: "Posso concederle il tardo check-out fino alle 14:00 con un supplemento di 30 euro.", en: "I can grant late check-out until 2:00 PM with a surcharge of 30 euros.", speaker: "receptionist" },
      { it: "Va bene, proceda pure. Posso pagare con carta di credito?", en: "That's fine, go ahead. Can I pay by credit card?", speaker: "guest" },
    ],
    [
      { it: "il check-out", en: "check-out", article: "il" },
      { it: "il supplemento", en: "surcharge", article: "il" },
      { it: "il volo", en: "flight", article: "il" },
    ],
    [
      {
        it: "Fino a che ora l'ospite vorrebbe rimanere in camera?", en: "Until what time would the guest like to stay in the room?",
        options: [
          { it: "Fino alle 12:00", en: "Until 12:00 PM", correct: false },
          { it: "Fino alle 14:00", en: "Until 2:00 PM", correct: true },
          { it: "Fino alle 16:00", en: "Until 4:00 PM", correct: false },
        ],
      },
      {
        it: "Quanto costa il supplemento per il tardo check-out?", en: "How much is the late check-out surcharge?",
        options: [
          { it: "20 euro", en: "20 euros", correct: false },
          { it: "30 euro", en: "30 euros", correct: true },
          { it: "50 euro", en: "50 euros", correct: false },
        ],
      },
    ],
    [
      { it: "concedere", en: "to grant" },
    ],
    {
      question: "L'ospite chiede un permesso speciale per la partenza. Cosa dice?",
      questionTranslation: "The guest asks for a special permission for departure. What does he say?",
      options: [
        { text: "È possibile fare tardo check-out?", translation: "Is late check-out possible?", correct: true },
        { text: "Posso uscire più tardi?", translation: "Can I leave later?", correct: false },
        { text: "Il check-out è obbligatorio?", translation: "Is check-out mandatory?", correct: false },
      ],
    },
  );

  // --- 41.3: Ordering Dinner in the Room ---
  await addExperience(41, "Ordering Dinner in the Room", 2, "Hotel",
    [
      { it: "Buonasera, vorrei ordinare la cena in camera per le 20:30.", en: "Good evening, I'd like to order dinner in my room for 8:30 PM.", speaker: "guest" },
      { it: "Certamente, ecco il menù del ristorante.", en: "Certainly, here is the restaurant menu.", speaker: "receptionist" },
      { it: "Come antipasto prendo il prosciutto e melone, e come secondo la bistecca ai ferri.", en: "For starter I'll have the ham and melon, and for main course the grilled steak.", speaker: "guest" },
      { it: "La bistecca come la preferisce? Al sangue, media o ben cotta?", en: "How would you like the steak? Rare, medium or well done?", speaker: "receptionist" },
      { it: "Media, per favore. E anche una bottiglia di vino rosso della casa.", en: "Medium, please. And also a bottle of house red wine.", speaker: "guest" },
    ],
    [
      { it: "l'antipasto", en: "starter", article: "l'" },
      { it: "il secondo", en: "main course", article: "il" },
      { it: "al sangue", en: "rare" },
    ],
    [
      {
        it: "Quale secondo piatto sceglie l'ospite?", en: "Which main course does the guest choose?",
        options: [
          { it: "Pesce al forno", en: "Baked fish", correct: false },
          { it: "Bistecca ai ferri", en: "Grilled steak", correct: true },
          { it: "Pollo arrosto", en: "Roast chicken", correct: false },
        ],
      },
      {
        it: "Come vuole la bistecca?", en: "How does he want the steak?",
        options: [
          { it: "Al sangue", en: "Rare", correct: false },
          { it: "Media", en: "Medium", correct: true },
          { it: "Ben cotta", en: "Well done", correct: false },
        ],
      },
    ],
    [
      { it: "il menù", en: "menu" },
      { it: "la bottiglia", en: "bottle" },
    ],
    {
      question: "L'ospite specifica quando vuole la cena. Cosa dice?",
      questionTranslation: "The guest specifies when he wants dinner. What does he say?",
      options: [
        { text: "Vorrei ordinare la cena in camera per le 20:30.", translation: "I'd like to order dinner in my room for 8:30 PM.", correct: true },
        { text: "La cena è ancora disponibile?", translation: "Is dinner still available?", correct: false },
        { text: "Posso cenare più tardi?", translation: "Can I have dinner later?", correct: false },
      ],
    },
  );

  // --- 41.4: Requesting Laundry Service ---
  await addExperience(41, "Requesting Laundry Service", 2, "Hotel",
    [
      { it: "Buongiorno, avrei bisogno del servizio lavanderia.", en: "Good morning, I would need the laundry service.", speaker: "guest" },
      { it: "Certamente. Troverà il sacchetto per la biancheria nell'armadio.", en: "Certainly. You'll find the laundry bag in the wardrobe.", speaker: "receptionist" },
      { it: "Ho alcuni capi delicati che necessitano di lavaggio a secco.", en: "I have some delicate items that need dry cleaning.", speaker: "guest" },
      { it: "Nessun problema. Compili il modulo con le istruzioni di lavaggio.", en: "No problem. Fill out the form with the washing instructions.", speaker: "receptionist" },
      { it: "Tra quanto tempo saranno pronti?", en: "How long will they be ready?", speaker: "guest" },
    ],
    [
      { it: "la lavanderia", en: "laundry service", article: "la" },
      { it: "il lavaggio a secco", en: "dry cleaning", article: "il" },
      { it: "l'armadio", en: "wardrobe", article: "l'" },
    ],
    [
      {
        it: "Dove si trova il sacchetto per la biancheria?", en: "Where is the laundry bag?",
        options: [
          { it: "Nel bagno", en: "In the bathroom", correct: false },
          { it: "Nell'armadio", en: "In the wardrobe", correct: true },
          { it: "Sotto il letto", en: "Under the bed", correct: false },
        ],
      },
      {
        it: "Che tipo di lavaggio serve per i capi delicati?", en: "What type of wash is needed for the delicate items?",
        options: [
          { it: "Lavaggio in lavatrice", en: "Machine wash", correct: false },
          { it: "Lavaggio a secco", en: "Dry cleaning", correct: true },
          { it: "Lavaggio a mano", en: "Hand wash", correct: false },
        ],
      },
    ],
    [
      { it: "il capo", en: "item of clothing" },
      { it: "delicato", en: "delicate" },
    ],
    {
      question: "L'ospite vuole sapere i tempi del servizio. Cosa chiede?",
      questionTranslation: "The guest wants to know the service times. What does he ask?",
      options: [
        { text: "Tra quanto tempo saranno pronti?", translation: "How long will they be ready?", correct: true },
        { text: "Quanto costa il servizio?", translation: "How much does the service cost?", correct: false },
        { text: "Dov'è la lavanderia?", translation: "Where is the laundry?", correct: false },
      ],
    },
  );

  // --- 41.5: Asking for an Extra Key Card ---
  await addExperience(41, "Asking for an Extra Key Card", 2, "Hotel",
    [
      { it: "Buongiorno, mio marito è uscito con l'unica chiave della camera.", en: "Good morning, my husband left with the only room key.", speaker: "guest" },
      { it: "Nessun problema, possiamo farle una seconda chiave.", en: "No problem, we can make you a second key.", speaker: "receptionist" },
      { it: "Perfetto. Vorrei anche sapere se la chiave funziona per l'accesso alla palestra.", en: "Perfect. I'd also like to know if the key works for gym access.", speaker: "guest" },
      { it: "Sì, la stessa chiave dà accesso alla palestra e alla piscina.", en: "Yes, the same key provides access to the gym and the pool.", speaker: "receptionist" },
      { it: "Bene, e fino a che ora è aperta la palestra?", en: "Good, and until what time is the gym open?", speaker: "guest" },
    ],
    [
      { it: "funzionare", en: "to work" },
      { it: "l'accesso", en: "access", article: "l'" },
    ],
    [
      {
        it: "Perché l'ospite ha bisogno di una seconda chiave?", en: "Why does the guest need a second key?",
        options: [
          { it: "Ha perso la chiave", en: "She lost the key", correct: false },
          { it: "Suo marito ha l'unica chiave", en: "Her husband has the only key", correct: true },
          { it: "La chiave non funziona", en: "The key doesn't work", correct: false },
        ],
      },
      {
        it: "Oltre alla camera, a cosa dà accesso la chiave?", en: "Besides the room, what does the key give access to?",
        options: [
          { it: "Alla palestra e alla piscina", en: "To the gym and the pool", correct: true },
          { it: "Al parcheggio", en: "To the parking", correct: false },
          { it: "Al ristorante", en: "To the restaurant", correct: false },
        ],
      },
    ],
    [
      { it: "il marito", en: "husband" },
    ],
    {
      question: "L'ospite spiega perché ha bisogno di una chiave extra. Cosa dice?",
      questionTranslation: "The guest explains why she needs an extra key. What does she say?",
      options: [
        { text: "Mio marito è uscito con l'unica chiave.", translation: "My husband left with the only key.", correct: true },
        { text: "Ho chiuso la chiave in camera.", translation: "I locked the key in the room.", correct: false },
        { text: "La chiave non entra nella serratura.", translation: "The key doesn't go into the lock.", correct: false },
      ],
    },
  );

  // ========================
  // MODULE 42 — Dealing with Issues (B1, level=2)
  // ========================

  // --- 42.1: Broken Air Conditioning ---
  await addExperience(42, "Broken Air Conditioning", 2, "Hotel",
    [
      { it: "Buongiorno, l'aria condizionata nella mia camera non funziona.", en: "Good morning, the air conditioning in my room isn't working.", speaker: "guest" },
      { it: "Mi dispiace per il disagio. Ha provato a regolare il termostato?", en: "I'm sorry for the inconvenience. Did you try adjusting the thermostat?", speaker: "receptionist" },
      { it: "Sì, ma non succede niente. La camera è molto calda.", en: "Yes, but nothing happens. The room is very hot.", speaker: "guest" },
      { it: "Mando subito un tecnico a controllare. Nell'attesa posso offrirle un ventilatore.", en: "I'll send a technician right away to check. In the meantime I can offer you a fan.", speaker: "receptionist" },
      { it: "Grazie. Se non si può riparare oggi, vorrei cambiare camera.", en: "Thanks. If it can't be fixed today, I'd like to change rooms.", speaker: "guest" },
    ],
    [
      { it: "l'aria condizionata", en: "air conditioning", article: "l'" },
      { it: "il termostato", en: "thermostat", article: "il" },
      { it: "il tecnico", en: "technician", article: "il" },
    ],
    [
      {
        it: "Qual è il problema nella camera?", en: "What is the problem in the room?",
        options: [
          { it: "L'aria condizionata non funziona", en: "The AC doesn't work", correct: true },
          { it: "Il riscaldamento è rotto", en: "The heating is broken", correct: false },
          { it: "La TV non si accende", en: "The TV won't turn on", correct: false },
        ],
      },
      {
        it: "Cosa offre il receptionist nell'attesa?", en: "What does the receptionist offer in the meantime?",
        options: [
          { it: "Un ventilatore", en: "A fan", correct: true },
          { it: "Un condizionatore portatile", en: "A portable AC unit", correct: false },
          { it: "Uno sconto", en: "A discount", correct: false },
        ],
      },
    ],
    [
      { it: "riparare", en: "to fix" },
      { it: "il ventilatore", en: "fan" },
    ],
    {
      question: "L'ospite minaccia di cambiare camera se il problema persiste. Cosa dice?",
      questionTranslation: "The guest threatens to change rooms if the problem persists. What does he say?",
      options: [
        { text: "Se non si può riparare oggi, vorrei cambiare camera.", translation: "If it can't be fixed today, I'd like to change rooms.", correct: true },
        { text: "Voglio un rimborso.", translation: "I want a refund.", correct: false },
        { text: "Chiami il direttore.", translation: "Call the manager.", correct: false },
      ],
    },
  );

  // --- 42.2: Noise Complaint ---
  await addExperience(42, "Noise Complaint", 2, "Hotel",
    [
      { it: "Buonasera, c'è molto rumore dalla camera accanto. Non riesco a dormire.", en: "Good evening, there's a lot of noise from the room next door. I can't sleep.", speaker: "guest" },
      { it: "Mi dispiace molto. Di che tipo di rumore si tratta?", en: "I'm very sorry. What kind of noise is it?", speaker: "receptionist" },
      { it: "Musica alta e voci. Sono le 23:00 passate.", en: "Loud music and voices. It's past 11:00 PM.", speaker: "guest" },
      { it: "Intervengo subito. Chiamo la stanza e chiedo di abbassare il volume.", en: "I'll intervene immediately. I'll call the room and ask them to lower the volume.", speaker: "receptionist" },
      { it: "Grazie. Se continua, vorrei parlare con il direttore.", en: "Thank you. If it continues, I'd like to speak to the manager.", speaker: "guest" },
    ],
    [
      { it: "il rumore", en: "noise", article: "il" },
      { it: "intervenire", en: "to intervene" },
      { it: "abbassare", en: "to lower" },
    ],
    [
      {
        it: "Da dove proviene il rumore?", en: "Where does the noise come from?",
        options: [
          { it: "Dalla strada", en: "From the street", correct: false },
          { it: "Dalla camera accanto", en: "From the room next door", correct: true },
          { it: "Dal piano di sopra", en: "From the floor above", correct: false },
        ],
      },
      {
        it: "Cosa farà il receptionist per risolvere il problema?", en: "What will the receptionist do to solve the problem?",
        options: [
          { it: "Sposterà l'ospite in un'altra camera", en: "He will move the guest to another room", correct: false },
          { it: "Chiamerà la polizia", en: "He will call the police", correct: false },
          { it: "Chiamerà la stanza rumorosa", en: "He will call the noisy room", correct: true },
        ],
      },
    ],
    [
      { it: "la musica", en: "music" },
    ],
    {
      question: "L'ospite avverte che potrebbe aggravare la situazione. Cosa dice?",
      questionTranslation: "The guest warns he might escalate the situation. What does he say?",
      options: [
        { text: "Se continua, vorrei parlare con il direttore.", translation: "If it continues, I'd like to speak to the manager.", correct: true },
        { text: "Chiamo la polizia.", translation: "I'm calling the police.", correct: false },
        { text: "Me ne vado dall'hotel.", translation: "I'm leaving the hotel.", correct: false },
      ],
    },
  );

  // --- 42.3: Hot Water Problem ---
  await addExperience(42, "Hot Water Problem", 2, "Hotel",
    [
      { it: "Buongiorno, non c'è acqua calda nella doccia.", en: "Good morning, there's no hot water in the shower.", speaker: "guest" },
      { it: "Ha lasciato scorrere l'acqua per qualche minuto? A volte ci vuole un po'.", en: "Did you let the water run for a few minutes? Sometimes it takes a while.", speaker: "receptionist" },
      { it: "Sì, ho aspettato cinque minuti ma è rimasta fredda.", en: "Yes, I waited five minutes but it stayed cold.", speaker: "guest" },
      { it: "Probabilmente è la caldaia centrale. Avviso subito la manutenzione.", en: "It's probably the central boiler. I'll notify maintenance right away.", speaker: "receptionist" },
      { it: "Posso usare la doccia di un'altra camera nel frattempo?", en: "Can I use another room's shower in the meantime?", speaker: "guest" },
    ],
    [
      { it: "l'acqua calda", en: "hot water", article: "l'" },
      { it: "la caldaia", en: "boiler", article: "la" },
      { it: "la manutenzione", en: "maintenance", article: "la" },
    ],
    [
      {
        it: "Per quanto tempo l'ospite ha lasciato scorrere l'acqua?", en: "How long did the guest let the water run?",
        options: [
          { it: "Due minuti", en: "Two minutes", correct: false },
          { it: "Cinque minuti", en: "Five minutes", correct: true },
          { it: "Dieci minuti", en: "Ten minutes", correct: false },
        ],
      },
      {
        it: "Quale potrebbe essere la causa del problema?", en: "What could be the cause of the problem?",
        options: [
          { it: "La caldaia centrale", en: "The central boiler", correct: true },
          { it: "La doccia è rotta", en: "The shower is broken", correct: false },
          { it: "Non c'è acqua in tutto l'hotel", en: "There's no water in the whole hotel", correct: false },
        ],
      },
    ],
    [
      { it: "scorrere", en: "to run (water)" },
    ],
    {
      question: "L'ospite chiede una soluzione temporanea. Cosa dice?",
      questionTranslation: "The guest asks for a temporary solution. What does he say?",
      options: [
        { text: "Posso usare la doccia di un'altra camera nel frattempo?", translation: "Can I use another room's shower in the meantime?", correct: true },
        { text: "Voglio uno sconto sulla stanza.", translation: "I want a discount on the room.", correct: false },
        { text: "Dov'è la doccia pubblica?", translation: "Where is the public shower?", correct: false },
      ],
    },
  );

  // --- 42.4: Lost Key Card ---
  await addExperience(42, "Lost Key Card", 2, "Hotel",
    [
      { it: "Buongiorno, ho chiuso la porta e ho dimenticato la chiave dentro la camera.", en: "Good morning, I closed the door and forgot the key inside the room.", speaker: "guest" },
      { it: "Non si preoccupi, succede spesso. Le faccio una nuova chiave.", en: "Don't worry, it happens often. I'll make you a new key.", speaker: "receptionist" },
      { it: "Devo anche mostrare un documento per verificare?", en: "Do I also need to show an ID to verify?", speaker: "guest" },
      { it: "Sì, per sicurezza. Ho bisogno di vedere il suo documento.", en: "Yes, for security. I need to see your ID.", speaker: "receptionist" },
      { it: "Ecco la patente. La vecchia chiave verrà disattivata?", en: "Here's my driver's license. Will the old key be deactivated?", speaker: "guest" },
    ],
    [
      { it: "dimenticare", en: "to forget" },
      { it: "verificare", en: "to verify" },
      { it: "disattivare", en: "to deactivate" },
    ],
    [
      {
        it: "Dov'è finita la chiave dell'ospite?", en: "Where did the guest's key end up?",
        options: [
          { it: "L'ha persa per strada", en: "He lost it on the street", correct: false },
          { it: "L'ha dimenticata in camera", en: "He forgot it in the room", correct: true },
          { it: "L'ha lasciata alla reception", en: "He left it at reception", correct: false },
        ],
      },
      {
        it: "Perché il receptionist chiede un documento?", en: "Why does the receptionist ask for an ID?",
        options: [
          { it: "Per fare una copia", en: "To make a copy", correct: false },
          { it: "Per sicurezza e verifica", en: "For security and verification", correct: true },
          { it: "Per la registrazione", en: "For registration", correct: false },
        ],
      },
    ],
    [
      { it: "la patente", en: "driver's license" },
    ],
    {
      question: "L'ospite chiede della vecchia chiave. Cosa dice?",
      questionTranslation: "The guest asks about the old key. What does he say?",
      options: [
        { text: "La vecchia chiave verrà disattivata?", translation: "Will the old key be deactivated?", correct: true },
        { text: "Posso tenere anche la vecchia chiave?", translation: "Can I keep the old key too?", correct: false },
        { text: "La vecchia chiave è ancora valida?", translation: "Is the old key still valid?", correct: false },
      ],
    },
  );

  // --- 42.5: Dirty Room ---
  await addExperience(42, "Dirty Room", 2, "Hotel",
    [
      { it: "Buongiorno, la camera non è stata pulita oggi.", en: "Good morning, the room hasn't been cleaned today.", speaker: "guest" },
      { it: "Mi dispiace. Di solito puliamo tra le 10:00 e le 13:00. Era fuori?", en: "I'm sorry. We usually clean between 10:00 AM and 1:00 PM. Were you out?", speaker: "receptionist" },
      { it: "Sì, ma ho messo il cartello 'Non disturbare' per sbaglio.", en: "Yes, but I put the 'Do Not Disturb' sign by mistake.", speaker: "guest" },
      { it: "Ah, ecco. Allora mandiamo subito qualcuno a pulire.", en: "Ah, that explains it. Then we'll send someone right away to clean.", speaker: "receptionist" },
      { it: "Grazie. E potreste anche svuotare il cestino della carta?", en: "Thanks. And could you also empty the wastepaper basket?", speaker: "guest" },
    ],
    [
      { it: "il cartello", en: "sign", article: "il" },
      { it: "il cestino", en: "waste basket", article: "il" },
      { it: "svuotare", en: "to empty" },
    ],
    [
      {
        it: "Perché la camera non è stata pulita?", en: "Why wasn't the room cleaned?",
        options: [
          { it: "Il personale era in pausa", en: "The staff was on break", correct: false },
          { it: "L'ospite aveva messo il cartello 'Non disturbare'", en: "The guest put up the 'Do Not Disturb' sign", correct: true },
          { it: "Non c'era personale disponibile", en: "No staff was available", correct: false },
        ],
      },
      {
        it: "In che orario di solito puliscono le camere?", en: "At what time do they usually clean the rooms?",
        options: [
          { it: "Tra le 8:00 e le 11:00", en: "Between 8:00 AM and 11:00 AM", correct: false },
          { it: "Tra le 10:00 e le 13:00", en: "Between 10:00 AM and 1:00 PM", correct: true },
          { it: "Tra le 14:00 e le 17:00", en: "Between 2:00 PM and 5:00 PM", correct: false },
        ],
      },
    ],
    [
      { it: "il personale", en: "staff" },
    ],
    {
      question: "L'ospite ammette di aver fatto un errore. Cosa dice?",
      questionTranslation: "The guest admits having made a mistake. What does he say?",
      options: [
        { text: "Ho messo il cartello 'Non disturbare' per sbaglio.", translation: "I put the 'Do Not Disturb' sign by mistake.", correct: true },
        { text: "Il personale è stato negligente.", translation: "The staff was negligent.", correct: false },
        { text: "Non c'era nessuno in corridoio.", translation: "There was no one in the hallway.", correct: false },
      ],
    },
  );

  // ========================
  // MODULE 43 — Checking Out (B2, level=3)
  // ========================

  // --- 43.1: Requesting the Bill ---
  await addExperience(43, "Requesting the Bill", 3, "Hotel",
    [
      { it: "Buongiorno, vorrei effettuare il check-out, per favore.", en: "Good morning, I'd like to check out, please.", speaker: "guest" },
      { it: "Certamente. Il suo numero di camera?", en: "Certainly. Your room number?", speaker: "receptionist" },
      { it: "Camera 305. Potrebbe prepararmi il conto?", en: "Room 305. Could you prepare the bill for me?", speaker: "guest" },
      { it: "Ecco il riepilogo delle spese. Vuole verificarlo?", en: "Here is the summary of charges. Would you like to review it?", speaker: "receptionist" },
      { it: "Sì, grazie. Voglio controllare che sia tutto corretto.", en: "Yes, thank you. I want to check that everything is correct.", speaker: "guest" },
    ],
    [
      { it: "effettuare", en: "to carry out" },
      { it: "il conto", en: "the bill", article: "il" },
      { it: "il riepilogo", en: "summary", article: "il" },
    ],
    [
      {
        it: "Quale servizio richiede l'ospite?", en: "What service does the guest request?",
        options: [
          { it: "La colazione in camera", en: "Breakfast in the room", correct: false },
          { it: "Il check-out", en: "Check-out", correct: true },
          { it: "La pulizia della camera", en: "Room cleaning", correct: false },
        ],
      },
      {
        it: "Cosa vuole fare l'ospite con il conto?", en: "What does the guest want to do with the bill?",
        options: [
          { it: "Pagare senza guardare", en: "Pay without looking", correct: false },
          { it: "Verificare che sia tutto corretto", en: "Check that everything is correct", correct: true },
          { it: "Fotografarlo", en: "Take a photo of it", correct: false },
        ],
      },
    ],
    [
      { it: "verificare", en: "to verify" },
      { it: "corretto", en: "correct" },
    ],
    {
      question: "L'ospite chiede di vedere le spese dettagliate. Cosa dice?",
      questionTranslation: "The guest asks to see the itemized charges. What does he say?",
      options: [
        { text: "Potrebbe prepararmi il conto?", translation: "Could you prepare the bill for me?", correct: true },
        { text: "Quanto devo pagare in totale?", translation: "How much do I have to pay in total?", correct: false },
        { text: "Accettate contanti?", translation: "Do you accept cash?", correct: false },
      ],
    },
  );

  // --- 43.2: Reviewing Charges ---
  await addExperience(43, "Reviewing Charges", 3, "Hotel",
    [
      { it: "Ho notato una carica che non riconosco sul conto.", en: "I noticed a charge I don't recognize on the bill.", speaker: "guest" },
      { it: "Vediamo. Quale voce la preoccupa?", en: "Let's see. Which item concerns you?", speaker: "receptionist" },
      { it: "Questo addebito per il minibar. Non ho usato il minibar.", en: "This charge for the minibar. I didn't use the minibar.", speaker: "guest" },
      { it: "Deve essere un errore. Le chiedo scusa, lo rimuovo immediatamente.", en: "It must be a mistake. I apologize, I'll remove it immediately.", speaker: "receptionist" },
      { it: "Grazie. E questa tassa di soggiorno è obbligatoria?", en: "Thank you. And this tourist tax, is it mandatory?", speaker: "guest" },
    ],
    [
      { it: "la carica", en: "charge", article: "la" },
      { it: "l'addebito", en: "debit", article: "l'" },
      { it: "la tassa di soggiorno", en: "tourist tax", article: "la" },
    ],
    [
      {
        it: "Quale addebito l'ospite contesta?", en: "Which charge does the guest dispute?",
        options: [
          { it: "La tassa di soggiorno", en: "The tourist tax", correct: false },
          { it: "Il minibar", en: "The minibar", correct: true },
          { it: "Il servizio in camera", en: "The room service", correct: false },
        ],
      },
      {
        it: "Cosa fa il receptionist dopo aver visto l'errore?", en: "What does the receptionist do after seeing the error?",
        options: [
          { it: "Chiede all'ospite di pagare comunque", en: "Asks the guest to pay anyway", correct: false },
          { it: "Rimuove l'addebito", en: "Removes the charge", correct: true },
          { it: "Chiama il direttore", en: "Calls the manager", correct: false },
        ],
      },
    ],
    [
      { it: "riconoscere", en: "to recognize" },
      { it: "l'errore", en: "mistake" },
    ],
    {
      question: "L'ospite chiede informazioni su un costo extra. Cosa dice?",
      questionTranslation: "The guest asks about an extra cost. What does he say?",
      options: [
        { text: "Questa tassa di soggiorno è obbligatoria?", translation: "This tourist tax, is it mandatory?", correct: true },
        { text: "Posso non pagare questa tassa?", translation: "Can I avoid paying this tax?", correct: false },
        { text: "È incluso nella prenotazione?", translation: "Is it included in the booking?", correct: false },
      ],
    },
  );

  // --- 43.3: Paying by Credit Card ---
  await addExperience(43, "Paying by Credit Card", 3, "Hotel",
    [
      { it: "Il conto totale è di 540 euro. Come desidera pagare?", en: "The total bill is 540 euros. How would you like to pay?", speaker: "receptionist" },
      { it: "Pago con carta di credito. Accettate Visa?", en: "I'll pay by credit card. Do you accept Visa?", speaker: "guest" },
      { it: "Sì, accettiamo tutte le carte principali. Inserisca la carta nel terminale.", en: "Yes, we accept all major cards. Insert your card into the terminal.", speaker: "receptionist" },
      { it: "Devo inserire il PIN o firmare?", en: "Do I need to enter the PIN or sign?", speaker: "guest" },
      { it: "Per importi superiori a 50 euro è richiesto il PIN. Confermi l'importo sullo schermo.", en: "For amounts over 50 euros, the PIN is required. Confirm the amount on the screen.", speaker: "receptionist" },
    ],
    [
      { it: "la carta di credito", en: "credit card", article: "la" },
      { it: "il terminale", en: "terminal", article: "il" },
      { it: "il PIN", en: "PIN", article: "il" },
    ],
    [
      {
        it: "Qual è l'importo totale del conto?", en: "What is the total amount of the bill?",
        options: [
          { it: "450 euro", en: "450 euros", correct: false },
          { it: "540 euro", en: "540 euros", correct: true },
          { it: "600 euro", en: "600 euros", correct: false },
        ],
      },
      {
        it: "Cosa deve fare l'ospite per pagare?", en: "What does the guest need to do to pay?",
        options: [
          { it: "Solo firmare", en: "Just sign", correct: false },
          { it: "Inserire la carta e il PIN", en: "Insert the card and the PIN", correct: true },
          { it: "Dare contanti", en: "Give cash", correct: false },
        ],
      },
    ],
    [
      { it: "l'importo", en: "amount" },
    ],
    {
      question: "L'ospite vuole sapere la procedura di pagamento. Cosa chiede?",
      questionTranslation: "The guest wants to know the payment procedure. What does he ask?",
      options: [
        { text: "Devo inserire il PIN o firmare?", translation: "Do I need to enter the PIN or sign?", correct: true },
        { text: "Posso pagare a rate?", translation: "Can I pay in installments?", correct: false },
        { text: "Accettate assegni?", translation: "Do you accept checks?", correct: false },
      ],
    },
  );

  // --- 43.4: Late Check-Out Arrangement ---
  await addExperience(43, "Late Check-Out Arrangement", 3, "Hotel",
    [
      { it: "Buongiorno, ho una riunione importante qui vicino fino alle 15:00.", en: "Good morning, I have an important meeting nearby until 3:00 PM.", speaker: "guest" },
      { it: "Posso lasciare i bagagli in deposito se vuole.", en: "I can keep your luggage in storage if you'd like.", speaker: "receptionist" },
      { it: "Sarebbe perfetto. C'è un costo per il deposito bagagli?", en: "That would be perfect. Is there a cost for luggage storage?", speaker: "guest" },
      { it: "No, il servizio è gratuito per i nostri ospiti.", en: "No, the service is free for our guests.", speaker: "receptionist" },
      { it: "Bene. Ritiro i bagagli entro le 17:00. Il deposito è aperto fino a quell'ora?", en: "Good. I'll pick up my luggage by 5:00 PM. Is the storage open until that time?", speaker: "guest" },
    ],
    [
      { it: "il bagaglio", en: "luggage", article: "il" },
      { it: "il deposito", en: "storage", article: "il" },
    ],
    [
      {
        it: "Perché l'ospite ha bisogno del deposito bagagli?", en: "Why does the guest need luggage storage?",
        options: [
          { it: "Ha una riunione fino alle 15:00", en: "He has a meeting until 3:00 PM", correct: true },
          { it: "Deve fare shopping", en: "He needs to go shopping", correct: false },
          { it: "Il suo volo è domani", en: "His flight is tomorrow", correct: false },
        ],
      },
      {
        it: "Il deposito bagagli è gratuito o a pagamento?", en: "Is the luggage storage free or paid?",
        options: [
          { it: "A pagamento, 10 euro", en: "Paid, 10 euros", correct: false },
          { it: "Gratuito", en: "Free", correct: true },
          { it: "Dipende dalla durata", en: "Depends on the duration", correct: false },
        ],
      },
    ],
    [
      { it: "ritirare", en: "to pick up" },
    ],
    {
      question: "L'ospite chiede informazioni sugli orari del deposito. Cosa dice?",
      questionTranslation: "The guest asks about the storage hours. What does he say?",
      options: [
        { text: "Il deposito è aperto fino alle 17:00?", translation: "Is the storage open until 5:00 PM?", correct: true },
        { text: "Il deposito è aperto 24 ore?", translation: "Is the storage open 24 hours?", correct: false },
        { text: "Dov'è il deposito bagagli?", translation: "Where is the luggage storage?", correct: false },
      ],
    },
  );

  // --- 43.5: Calling a Taxi ---
  await addExperience(43, "Calling a Taxi", 3, "Hotel",
    [
      { it: "Buongiorno, potrei avere un taxi per la stazione Termini, per favore?", en: "Good morning, could I have a taxi for Termini station, please?", speaker: "guest" },
      { it: "Certamente. Per che ora lo desidera?", en: "Certainly. For what time would you like it?", speaker: "receptionist" },
      { it: "Alle 15:30, devo prendere il treno delle 16:15.", en: "At 3:30 PM, I have to catch the 4:15 PM train.", speaker: "guest" },
      { it: "Un taxi impiega circa 20 minuti per arrivare alla stazione, quindi va bene.", en: "A taxi takes about 20 minutes to reach the station, so that's fine.", speaker: "receptionist" },
      { it: "Perfetto. Quanto costa più o meno la corsa?", en: "Perfect. How much does the ride cost approximately?", speaker: "guest" },
    ],
    [
      { it: "il taxi", en: "taxi", article: "il" },
      { it: "la stazione", en: "station", article: "la" },
      { it: "la corsa", en: "the ride", article: "la" },
    ],
    [
      {
        it: "Dove vuole andare l'ospite?", en: "Where does the guest want to go?",
        options: [
          { it: "All'aeroporto", en: "To the airport", correct: false },
          { it: "Alla stazione Termini", en: "To Termini station", correct: true },
          { it: "Al porto", en: "To the port", correct: false },
        ],
      },
      {
        it: "Quanto tempo ci vuole per arrivare alla stazione?", en: "How long does it take to reach the station?",
        options: [
          { it: "Circa 10 minuti", en: "About 10 minutes", correct: false },
          { it: "Circa 20 minuti", en: "About 20 minutes", correct: true },
          { it: "Circa 40 minuti", en: "About 40 minutes", correct: false },
        ],
      },
    ],
    [
      { it: "impiegare", en: "to take (time)" },
    ],
    {
      question: "L'ospite vuole sapere il costo del taxi. Cosa chiede?",
      questionTranslation: "The guest wants to know the taxi fare. What does he ask?",
      options: [
        { text: "Quanto costa più o meno la corsa?", translation: "How much does the ride cost approximately?", correct: true },
        { text: "Il taxi ha il tassametro?", translation: "Does the taxi have a meter?", correct: false },
        { text: "Posso pagare con carta?", translation: "Can I pay by card?", correct: false },
      ],
    },
  );

  // ========================
  // MODULE 44 — Filing Complaints (B2, level=3)
  // ========================

  // --- 44.1: Writing a Formal Complaint ---
  await addExperience(44, "Writing a Formal Complaint", 3, "Hotel",
    [
      { it: "Buongiorno, vorrei presentare un reclamo formale.", en: "Good morning, I'd like to make a formal complaint.", speaker: "guest" },
      { it: "Mi dispiace sentirlo. Di cosa si tratta esattamente?", en: "I'm sorry to hear that. What is it about exactly?", speaker: "hotel_manager" },
      { it: "Ho trovato insetti in camera ieri sera. È inaccettabile.", en: "I found insects in the room last night. It's unacceptable.", speaker: "guest" },
      { it: "Comprendo la sua frustrazione. Voglio scusarmi personalmente.", en: "I understand your frustration. I want to apologize personally.", speaker: "hotel_manager" },
      { it: "Vorrei che questo venisse messo per iscritto. Ho bisogno di un documento ufficiale.", en: "I'd like this to be put in writing. I need an official document.", speaker: "guest" },
    ],
    [
      { it: "il reclamo", en: "complaint", article: "il" },
      { it: "l'insetto", en: "insect", article: "l'" },
      { it: "inaccettabile", en: "unacceptable" },
    ],
    [
      {
        it: "Qual è il problema denunciato dall'ospite?", en: "What problem is reported by the guest?",
        options: [
          { it: "La camera è troppo piccola", en: "The room is too small", correct: false },
          { it: "Ha trovato insetti in camera", en: "He found insects in the room", correct: true },
          { it: "Il letto è rotto", en: "The bed is broken", correct: false },
        ],
      },
      {
        it: "Cosa chiede l'ospite alla fine?", en: "What does the guest ask at the end?",
        options: [
          { it: "Un rimborso immediato", en: "An immediate refund", correct: false },
          { it: "Un documento ufficiale scritto", en: "An official written document", correct: true },
          { it: "Di parlare con un avvocato", en: "To speak with a lawyer", correct: false },
        ],
      },
    ],
    [
      { it: "per iscritto", en: "in writing" },
      { it: "ufficiale", en: "official" },
    ],
    {
      question: "L'ospite esprime la sua insoddisfazione in modo chiaro. Cosa dice?",
      questionTranslation: "The guest expresses dissatisfaction clearly. What does he say?",
      options: [
        { text: "Ho trovato insetti in camera. È inaccettabile.", translation: "I found insects in the room. It's unacceptable.", correct: true },
        { text: "La camera non mi piace.", translation: "I don't like the room.", correct: false },
        { text: "L'hotel è troppo vecchio.", translation: "The hotel is too old.", correct: false },
      ],
    },
  );

  // --- 44.2: Requesting Compensation ---
  await addExperience(44, "Requesting Compensation", 3, "Hotel",
    [
      { it: "Considerato il disagio subito, ritengo di avere diritto a un risarcimento.", en: "Given the inconvenience suffered, I believe I'm entitled to compensation.", speaker: "guest" },
      { it: "Ha perfettamente ragione. Cosa propone?", en: "You're absolutely right. What do you propose?", speaker: "hotel_manager" },
      { it: "Mi aspetto uno sconto del 30% sul conto totale.", en: "I expect a 30% discount on the total bill.", speaker: "guest" },
      { it: "Posso offrirle uno sconto del 20% e un buono per un prossimo soggiorno.", en: "I can offer you a 20% discount and a voucher for a future stay.", speaker: "hotel_manager" },
      { it: "Accetto la sua proposta, ma voglio che tutto sia documentato per iscritto.", en: "I accept your proposal, but I want everything documented in writing.", speaker: "guest" },
    ],
    [
      { it: "il risarcimento", en: "compensation", article: "il" },
      { it: "lo sconto", en: "discount", article: "lo" },
      { it: "il buono", en: "voucher", article: "il" },
    ],
    [
      {
        it: "Che percentuale di sconto richiede inizialmente l'ospite?", en: "What percentage discount does the guest initially request?",
        options: [
          { it: "20%", en: "20%", correct: false },
          { it: "30%", en: "30%", correct: true },
          { it: "50%", en: "50%", correct: false },
        ],
      },
      {
        it: "Cosa offre il manager in aggiunta allo sconto?", en: "What does the manager offer in addition to the discount?",
        options: [
          { it: "Un upgrade di camera", en: "A room upgrade", correct: false },
          { it: "Un buono per un prossimo soggiorno", en: "A voucher for a future stay", correct: true },
          { it: "La colazione gratuita", en: "Free breakfast", correct: false },
        ],
      },
    ],
    [
      { it: "proporre", en: "to propose" },
      { it: "documentare", en: "to document" },
    ],
    {
      question: "L'ospite accetta l'offerta ma con una condizione. Cosa dice?",
      questionTranslation: "The guest accepts the offer but with a condition. What does he say?",
      options: [
        { text: "Accetto, ma voglio tutto documentato per iscritto.", translation: "I accept, but I want everything documented in writing.", correct: true },
        { text: "Accetto, ma voglio di più.", translation: "I accept, but I want more.", correct: false },
        { text: "Non accetto, vado in tribunale.", translation: "I don't accept, I'll go to court.", correct: false },
      ],
    },
  );

  // --- 44.3: Speaking to the Manager ---
  await addExperience(44, "Speaking to the Manager", 3, "Hotel",
    [
      { it: "Vorrei parlare con il direttore dell'hotel, per favore.", en: "I'd like to speak with the hotel manager, please.", speaker: "guest" },
      { it: "Sono il direttore. Come posso essere utile?", en: "I am the manager. How can I help you?", speaker: "hotel_manager" },
      { it: "Il personale della reception è stato scortese e poco professionale.", en: "The reception staff was rude and unprofessional.", speaker: "guest" },
      { it: "Mi dispiace molto. Può descrivermi cosa è successo?", en: "I'm very sorry. Can you describe what happened?", speaker: "hotel_manager" },
      { it: "Quando ho chiesto informazioni, mi ha risposto in modo sgarbato e senza pazienza.", en: "When I asked for information, she answered rudely and without patience.", speaker: "guest" },
    ],
    [
      { it: "scortese", en: "rude" },
      { it: "professionale", en: "professional" },
      { it: "sgarbato", en: "impolite" },
    ],
    [
      {
        it: "Con chi vuole parlare l'ospite?", en: "Who does the guest want to speak with?",
        options: [
          { it: "Con il receptionist", en: "With the receptionist", correct: false },
          { it: "Con il direttore", en: "With the manager", correct: true },
          { it: "Con il cuoco", en: "With the cook", correct: false },
        ],
      },
      {
        it: "Qual è il problema specifico?", en: "What is the specific problem?",
        options: [
          { it: "La camera non era pulita", en: "The room wasn't clean", correct: false },
          { it: "Il personale è stato scortese", en: "The staff was rude", correct: true },
          { it: "La colazione era fredda", en: "The breakfast was cold", correct: false },
        ],
      },
    ],
    [
      { it: "la pazienza", en: "patience" },
    ],
    {
      question: "L'ospite descrive l'accaduto al direttore. Cosa dice?",
      questionTranslation: "The guest describes the incident to the manager. What does he say?",
      options: [
        { text: "Mi ha risposto in modo sgarbato e senza pazienza.", translation: "She answered rudely and without patience.", correct: true },
        { text: "Non mi ha parlato.", translation: "She didn't speak to me.", correct: false },
        { text: "Mi ha dato informazioni sbagliate.", translation: "She gave me wrong information.", correct: false },
      ],
    },
  );

  // --- 44.4: Unacceptable Service ---
  await addExperience(44, "Unacceptable Service", 3, "Hotel",
    [
      { it: "Il servizio in camera è stato pessimo. La cena è arrivata con due ore di ritardo.", en: "The room service was terrible. Dinner arrived two hours late.", speaker: "guest" },
      { it: "Ha assolutamente ragione. È un ritardo imperdonabile.", en: "You are absolutely right. It's an unforgivable delay.", speaker: "hotel_manager" },
      { it: "E quando è arrivata, la pasta era fredda e la carne era cruda.", en: "And when it arrived, the pasta was cold and the meat was raw.", speaker: "guest" },
      { it: "Mi scuso a nome di tutto l'hotel. Le garantisco che prenderemo provvedimenti.", en: "I apologize on behalf of the entire hotel. I assure you we will take action.", speaker: "hotel_manager" },
      { it: "Vorrei che il pasto fosse stornato dal conto. È il minimo che possiate fare.", en: "I'd like the meal to be removed from the bill. It's the least you can do.", speaker: "guest" },
    ],
    [
      { it: "pessimo", en: "terrible" },
      { it: "il ritardo", en: "delay", article: "il" },
      { it: "crudo", en: "raw" },
    ],
    [
      {
        it: "Con quanto ritardo è arrivata la cena?", en: "How late did dinner arrive?",
        options: [
          { it: "Un'ora", en: "One hour", correct: false },
          { it: "Due ore", en: "Two hours", correct: true },
          { it: "Mezz'ora", en: "Half an hour", correct: false },
        ],
      },
      {
        it: "In che condizioni era la pasta?", en: "What condition was the pasta in?",
        options: [
          { it: "Era calda e buona", en: "It was hot and good", correct: false },
          { it: "Era fredda", en: "It was cold", correct: true },
          { it: "Era bruciata", en: "It was burnt", correct: false },
        ],
      },
    ],
    [
      { it: "stornare", en: "to remove (from a bill)" },
      { it: "il provvedimento", en: "measure/action" },
    ],
    {
      question: "L'ospite chiede che il pasto venga rimosso dal conto. Cosa dice?",
      questionTranslation: "The guest asks for the meal to be removed from the bill. What does he say?",
      options: [
        { text: "Vorrei che il pasto fosse stornato dal conto.", translation: "I'd like the meal to be removed from the bill.", correct: true },
        { text: "Vorrei un altro pasto gratis.", translation: "I'd like another free meal.", correct: false },
        { text: "Ripreparatelo correttamente.", translation: "Prepare it again properly.", correct: false },
      ],
    },
  );

  // --- 44.5: Following Up on a Complaint ---
  await addExperience(44, "Following Up on a Complaint", 3, "Hotel",
    [
      { it: "Buongiorno, ho presentato un reclamo ieri. Vorrei un aggiornamento.", en: "Good morning, I made a complaint yesterday. I'd like an update.", speaker: "guest" },
      { it: "Certamente. Abbiamo esaminato la sua segnalazione con attenzione.", en: "Certainly. We have examined your report carefully.", speaker: "hotel_manager" },
      { it: "Spero che abbiate preso provvedimenti concreti contro i responsabili.", en: "I hope you have taken concrete action against those responsible.", speaker: "guest" },
      { it: "Sì, abbiamo parlato con il personale coinvolto e abbiamo aggiornato le procedure.", en: "Yes, we spoke with the staff involved and updated the procedures.", speaker: "hotel_manager" },
      { it: "Bene. Apprezzo che abbiate preso la cosa seriamente. Riconsidererò l'hotel per il futuro.", en: "Good. I appreciate you took this seriously. I will reconsider the hotel in the future.", speaker: "guest" },
    ],
    [
      { it: "l'aggiornamento", en: "update", article: "l'" },
      { it: "la segnalazione", en: "report", article: "la" },
      { it: "concreto", en: "concrete" },
    ],
    [
      {
        it: "Cosa ha fatto l'hotel dopo la segnalazione?", en: "What did the hotel do after the report?",
        options: [
          { it: "Nulla, hanno ignorato il reclamo", en: "Nothing, they ignored the complaint", correct: false },
          { it: "Hanno parlato con il personale e aggiornato le procedure", en: "They spoke with staff and updated procedures", correct: true },
          { it: "Hanno chiuso l'hotel", en: "They closed the hotel", correct: false },
        ],
      },
      {
        it: "L'ospite tornerà in questo hotel?", en: "Will the guest return to this hotel?",
        options: [
          { it: "No, mai più", en: "No, never again", correct: false },
          { it: "Forse, se prenderanno sul serio la cosa", en: "Maybe, if they take it seriously", correct: true },
          { it: "Sì, ha già prenotato", en: "Yes, he already booked", correct: false },
        ],
      },
    ],
    [
      { it: "riconsiderare", en: "to reconsider" },
    ],
    {
      question: "L'ospite esprime soddisfazione per la gestione del reclamo. Cosa dice?",
      questionTranslation: "The guest expresses satisfaction with the complaint handling. What does he say?",
      options: [
        { text: "Apprezzo che abbiate preso la cosa seriamente.", translation: "I appreciate you took this seriously.", correct: true },
        { text: "Non sono ancora soddisfatto.", translation: "I'm still not satisfied.", correct: false },
        { text: "È troppo tardi per le scuse.", translation: "It's too late for apologies.", correct: false },
      ],
    },
  );

  console.log("  ✓ Hotel seeded");
}
