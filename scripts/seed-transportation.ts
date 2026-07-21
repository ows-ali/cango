export async function seedTransportation(addExperience: Function) {
  // Module 1 (A2) - Buying a Ticket - 5 experiences total
  // Keep these 3 existing experiences (already recovered from git):
  await addExperience(1, "Buying a Ticket at the Counter", 1, "Transportation",
    [
      { it: "Buongiorno, vorrei comprare un biglietto per Roma.", en: "Good morning, I'd like to buy a ticket to Rome.", speaker: "passenger" },
      { it: "Solo andata o andata e ritorno?", en: "One-way or round trip?", speaker: "ticket_agent" },
      { it: "Solo andata, per favore. Quanto costa?", en: "One-way please. How much does it cost?", speaker: "passenger" },
      { it: "Sono 45 euro.", en: "That's 45 euros.", speaker: "ticket_agent" },
      { it: "Ecco i soldi. Grazie mille!", en: "Here's the money. Thank you very much!", speaker: "passenger" },
    ],
    [{ it: "il biglietto", en: "ticket", article: "il", plural: "i biglietti" }],
    [
      { it: "Cosa vuole comprare il passeggero?", en: "What does the passenger want to buy?", options: [{ it: "Un biglietto per Roma", en: "A ticket to Rome", correct: true }, { it: "Uno spuntino", en: "A snack", correct: false }, { it: "Un giornale", en: "A newspaper", correct: false }] },
      { it: "Quanto costa il biglietto?", en: "How much does the ticket cost?", options: [{ it: "35 euro", en: "35 euros", correct: false }, { it: "45 euro", en: "45 euros", correct: true }, { it: "55 euro", en: "55 euros", correct: false }] },
    ],
    [{ it: "solo andata", en: "one-way" }, { it: "andata e ritorno", en: "round trip" }, { it: "costare", en: "to cost" }],
    { question: "Cosa fa prima alla biglietteria?", questionTranslation: "What do you do first at the ticket counter?", options: [
      { text: "Saluta e chiede un biglietto.", translation: "Greet and ask for a ticket.", correct: true },
      { text: "Si siede e aspetta.", translation: "Sit down and wait.", correct: false },
      { text: "Telefona a un amico.", translation: "Call a friend.", correct: false }
    ] },
  );

  // Add 2 more for module 1 to reach 5
  await addExperience(1, "Asking for a Discount Card", 1, "Transportation",
    [
      { it: "Avete una carta fedeltà?", en: "Do you have a loyalty card?", speaker: "passenger" },
      { it: "No, ancora no. Posso richiederne una?", en: "No, not yet. Can I apply for one?", speaker: "passenger" },
      { it: "Sì, ecco il modulo. La carta costa 30 euro all'anno.", en: "Yes, here is the form. The card costs 30 euros per year.", speaker: "ticket_agent" },
      { it: "E quanto risparmio con questa carta?", en: "And how much do I save with this card?", speaker: "passenger" },
      { it: "Riceve uno sconto del 20% sul biglietto.", en: "You get a 20% discount on the ticket.", speaker: "ticket_agent" },
    ],
    [{ it: "la carta fedeltà", en: "loyalty card", article: "la" }, { it: "lo sconto", en: "discount", article: "lo" }, { it: "risparmiare", en: "to save" }],
    [
      { it: "Cosa si può richiedere alla biglietteria?", en: "What can you apply for at the counter?", options: [{ it: "Una carta fedeltà", en: "A loyalty card", correct: true }, { it: "Un biglietto", en: "A ticket", correct: false }, { it: "Un visto", en: "A visa", correct: false }] },
      { it: "Quanto sconto si ottiene con la carta?", en: "How much discount do you get with the card?", options: [{ it: "10%", en: "10 percent", correct: false }, { it: "20%", en: "20 percent", correct: true }, { it: "50%", en: "50 percent", correct: false }] },
    ],
    [{ it: "richiedere", en: "to apply for" }, { it: "il modulo", en: "form" }],
    { question: "Cosa chiede alla biglietteria?", questionTranslation: "What do you ask at the ticket counter?", options: [
      { text: "Scusi, dove posso richiedere una carta fedeltà?", translation: "Excuse me, where can I get a loyalty card?", correct: true },
      { text: "Vorrei una birra, per favore.", translation: "I'd like a beer, please.", correct: false },
      { text: "Può mostrarmi la strada per l'hotel?", translation: "Can you show me the way to the hotel?", correct: false }
    ] },
  );

  await addExperience(1, "Buying a Ticket from the Machine", 1, "Transportation",
    [
      { it: "Scusi, come funziona questa macchinetta?", en: "Excuse me, how does this machine work?", speaker: "passenger" },
      { it: "Premere prima 'Acquista biglietto'.", en: "First press 'Buy ticket'.", speaker: "station_employee" },
      { it: "E poi scelgo la mia destinazione?", en: "And then I select my destination?", speaker: "passenger" },
      { it: "Esatto. Poi si paga con carta o contanti.", en: "Exactly. Then you pay with card or cash.", speaker: "station_employee" },
      { it: "Grazie mille per l'aiuto!", en: "Thank you very much for your help!", speaker: "passenger" },
    ],
    [{ it: "la macchinetta", en: "vending machine", article: "la" }, { it: "i contanti", en: "cash", article: "i" }, { it: "scegliere", en: "to select" }],
    [
      { it: "Cosa bisogna premere prima?", en: "What must you press first?", options: [{ it: "Acquista biglietto", en: "Buy ticket", correct: true }, { it: "Resto", en: "Change", correct: false }, { it: "Aiuto", en: "Help", correct: false }] },
      { it: "Come si può pagare alla macchinetta?", en: "How can you pay at the machine?", options: [{ it: "Solo contanti", en: "Cash only", correct: false }, { it: "Con carta o contanti", en: "With card or cash", correct: true }, { it: "Solo con carta", en: "Card only", correct: false }] },
    ],
    [{ it: "premere", en: "to press" }, { it: "la destinazione", en: "destination" }],
    { question: "Cosa chiede alla fermata dell'autobus?", questionTranslation: "What do you ask at the bus stop?", options: [
      { text: "Questo autobus va alla stazione centrale?", translation: "Does this bus go to the main station?", correct: true },
      { text: "Dov'è il distributore più vicino?", translation: "Where is the nearest gas station?", correct: false },
      { text: "Quanto costa un taxi?", translation: "How much does a taxi cost?", correct: false }
    ] },
  );

  // --- 2 NEW experiences for Module 1 (Buying a Ticket) ---
  await addExperience(1, "Asking About Student Discounts", 1, "Transportation",
    [
      { it: "Buongiorno, ho 22 anni. Ci sono sconti per studenti?", en: "Good morning, I'm 22. Are there student discounts?", speaker: "passenger" },
      { it: "Sì, c'è una tariffa giovani sotto i 26 anni. Costa il 30% in meno.", en: "Yes, there's a youth fare for under 26. It costs 30% less.", speaker: "ticket_agent" },
      { it: "Devo mostrare un documento?", en: "Do I need to show ID?", speaker: "passenger" },
      { it: "Serve la carta d'identità o la tessera universitaria.", en: "You need an ID card or a university card.", speaker: "ticket_agent" },
      { it: "Perfetto, ho la tessera universitaria con me.", en: "Perfect, I have my university card with me.", speaker: "passenger" },
    ],
    [{ it: "lo sconto giovani", en: "youth discount", article: "lo" }, { it: "la tariffa", en: "fare", article: "la" }, { it: "il documento", en: "ID document", article: "il" }],
    [
      { it: "Che tipo di sconto offre la biglietteria?", en: "What discount does the ticket office offer?", options: [{ it: "Sconto del 30% per giovani", en: "30% youth discount", correct: true }, { it: "Biglietto gratis", en: "Free ticket", correct: false }, { it: "Due al prezzo di uno", en: "Two for one", correct: false }] },
      { it: "Quale documento deve mostrare?", en: "Which document must the passenger show?", options: [{ it: "Il passaporto", en: "Passport", correct: false }, { it: "La carta d'identità o la tessera universitaria", en: "ID card or university card", correct: true }, { it: "La patente di guida", en: "Driver's license", correct: false }] },
    ],
    [{ it: "lo studente", en: "student" }, { it: "la tessera universitaria", en: "university card" }],
    { question: "La biglietteria è chiusa. Cosa fa?", questionTranslation: "The ticket office is closed. What do you do?", options: [
      { text: "Vado alla macchinetta automatica.", translation: "I go to the ticket machine.", correct: true },
      { text: "Torno a casa.", translation: "I go home.", correct: false },
      { text: "Salgo sul treno senza biglietto.", translation: "I board the train without a ticket.", correct: false }
    ] },
  );

  await addExperience(1, "Buying a Round Trip Ticket", 1, "Transportation",
    [
      { it: "Vorrei un biglietto andata e ritorno per Venezia.", en: "I'd like a round trip ticket to Venice.", speaker: "passenger" },
      { it: "Partenza oggi e ritorno quando?", en: "Departure today and return when?", speaker: "ticket_agent" },
      { it: "Domani sera, intorno alle 20:00.", en: "Tomorrow evening, around 8 PM.", speaker: "passenger" },
      { it: "Il biglietto aperto costa 80 euro. Può tornare con qualsiasi treno.", en: "The open ticket costs 80 euros. You can return on any train.", speaker: "ticket_agent" },
      { it: "Va bene, lo prendo. Accettate carte di credito?", en: "Alright, I'll take it. Do you accept credit cards?", speaker: "passenger" },
    ],
    [{ it: "andata e ritorno", en: "round trip" }, { it: "la partenza", en: "departure", article: "la" }, { it: "accettare", en: "to accept" }],
    [
      { it: "Che tipo di biglietto vuole il passeggero?", en: "What kind of ticket does the passenger want?", options: [{ it: "Solo andata", en: "One-way", correct: false }, { it: "Andata e ritorno", en: "Round trip", correct: true }, { it: "Abbonamento mensile", en: "Monthly pass", correct: false }] },
      { it: "Quanto costa il biglietto aperto?", en: "How much is the open ticket?", options: [{ it: "60 euro", en: "60 euros", correct: false }, { it: "80 euro", en: "80 euros", correct: true }, { it: "100 euro", en: "100 euros", correct: false }] },
    ],
    [{ it: "la carta di credito", en: "credit card" }],
    { question: "Il biglietto è stampato. Cosa controlla?", questionTranslation: "The ticket is printed. What do you check?", options: [
      { text: "Controllo la data e l'ora di partenza.", translation: "I check the date and departure time.", correct: true },
      { text: "Lo metto via senza guardare.", translation: "I put it away without looking.", correct: false },
      { text: "Chiedo un rimborso.", translation: "I ask for a refund.", correct: false }
    ] },
  );

  // Module 2 (A2) - Finding Your Way - 5 experiences total
  // 3 existing + 2 new
  await addExperience(2, "Asking for Directions", 1, "Transportation",
    [
      { it: "Scusi, dov'è il binario 5?", en: "Excuse me, where is platform 5?", speaker: "passenger" },
      { it: "Salga le scale e poi vada a destra.", en: "Go up the stairs and then to the right.", speaker: "station_employee" },
      { it: "È lontano da qui?", en: "Is that far from here?", speaker: "passenger" },
      { it: "No, solo due minuti a piedi.", en: "No, just two minutes on foot.", speaker: "station_employee" },
      { it: "Grazie mille!", en: "Thank you very much!", speaker: "passenger" },
    ],
    [{ it: "il binario", en: "platform/track", article: "il", plural: "i binari" }, { it: "la scala", en: "stairs", article: "la" }],
    [
      { it: "Cosa cerca il passeggero?", en: "What is the passenger looking for?", options: [{ it: "L'uscita", en: "The exit", correct: false }, { it: "Il binario 5", en: "Platform 5", correct: true }, { it: "Il ristorante", en: "The restaurant", correct: false }] },
      { it: "Quanto dista il binario?", en: "How far is the platform?", options: [{ it: "Dieci minuti", en: "Ten minutes", correct: false }, { it: "Due minuti", en: "Two minutes", correct: true }, { it: "Cinque minuti", en: "Five minutes", correct: false }] },
    ],
    [{ it: "salire", en: "to go up" }, { it: "a destra", en: "to the right" }],
    { question: "Come chiede indicazioni?", questionTranslation: "How do you ask for directions?", options: [
      { text: "Scusi, dov'è il binario 5?", translation: "Excuse me, where is platform 5?", correct: true },
      { text: "Può chiamarmi un taxi?", translation: "Can you call me a taxi?", correct: false },
      { text: "Vorrei prenotare una camera.", translation: "I'd like to reserve a room.", correct: false }
    ] },
  );

  await addExperience(2, "Finding the Right Bus", 1, "Transportation",
    [
      { it: "Questo autobus va alla stazione centrale?", en: "Does this bus go to the main train station?", speaker: "passenger" },
      { it: "Sì, ma deve cambiare a Piazza del Duomo.", en: "Yes, but you need to change at Piazza del Duomo.", speaker: "bus_driver" },
      { it: "Che linea devo prendere?", en: "Which line do I need to take then?", speaker: "passenger" },
      { it: "La linea 60 direzione stazione centrale.", en: "Line 60 towards the main station.", speaker: "bus_driver" },
      { it: "Grazie per l'informazione!", en: "Thank you for the information!", speaker: "passenger" },
    ],
    [{ it: "la stazione centrale", en: "main train station", article: "la" }, { it: "cambiare", en: "to change/transfer" }, { it: "la linea", en: "line", article: "la" }],
    [
      { it: "Dove va l'autobus?", en: "Where does the bus go?", options: [{ it: "All'aeroporto", en: "To the airport", correct: false }, { it: "Alla stazione centrale", en: "To the main station", correct: true }, { it: "Al museo", en: "To the museum", correct: false }] },
      { it: "Cosa deve fare il passeggero a Piazza del Duomo?", en: "What does the passenger need to do at Piazza del Duomo?", options: [{ it: "Scendere e prendere un taxi", en: "Get off and take a taxi", correct: false }, { it: "Cambiare con la linea 60", en: "Change to line 60", correct: true }, { it: "Comprare un biglietto", en: "Buy a ticket", correct: false }] },
    ],
    [{ it: "l'informazione", en: "information" }],
    { question: "Non capisce il tabellone. Cosa dice?", questionTranslation: "You don't understand the board. What do you say?", options: [
      { text: "Scusi, non capisco il tabellone delle partenze.", translation: "Excuse me, I don't understand the departure board.", correct: true },
      { text: "Vorrei prenotare una camera.", translation: "I'd like to book a room.", correct: false },
      { text: "Dov'è l'ufficio oggetti smarriti?", translation: "Where is lost and found?", correct: false }
    ] },
    undefined,
    [
      { text: "l'autobus", translation: "bus", correctValue: "bus" },
      { text: "cambiare", translation: "to transfer", correctValue: "transfer" },
      { text: "la stazione centrale", translation: "main station", correctValue: "mainstation" }
    ],
  );

  await addExperience(2, "Reading the Departure Board", 1, "Transportation",
    [
      { it: "Scusi, non capisco il tabellone delle partenze.", en: "Excuse me, I don't understand the departure board.", speaker: "passenger" },
      { it: "Che treno sta cercando?", en: "Which train are you looking for?", speaker: "station_employee" },
      { it: "Il Frecciarossa per Milano delle 14:30.", en: "The Frecciarossa to Milan at 2:30 PM.", speaker: "passenger" },
      { it: "È al binario 7. La partenza è in orario.", en: "It's on platform 7. The departure is on time.", speaker: "station_employee" },
      { it: "Perfetto, grazie mille!", en: "Perfect, thank you very much!", speaker: "passenger" },
    ],
    [{ it: "il tabellone", en: "departure board", article: "il" }, { it: "in orario", en: "on time" }, { it: "la partenza", en: "departure", article: "la" }],
    [
      { it: "Cosa cerca il passeggero?", en: "What is the passenger looking for?", options: [{ it: "Il Frecciarossa per Milano", en: "The Frecciarossa to Milan", correct: true }, { it: "L'autobus per l'aeroporto", en: "The bus to the airport", correct: false }, { it: "L'ufficio oggetti smarriti", en: "The lost and found", correct: false }] },
      { it: "A che ora parte il treno?", en: "When does the train depart?", options: [{ it: "Alle 13:30", en: "At 1:30 PM", correct: false }, { it: "Alle 14:30", en: "At 2:30 PM", correct: true }, { it: "Alle 15:30", en: "At 3:30 PM", correct: false }] },
    ],
    [{ it: "capire", en: "to understand" }, { it: "cercare", en: "to look for" }],
    { question: "Il suo treno è cancellato. Cosa fa?", questionTranslation: "Your train is cancelled. What do you do?", options: [
      { text: "Vada al binario 4 e prenda il treno sostitutivo.", translation: "Go to platform 4 and take the replacement train.", correct: true },
      { text: "Aspetti semplicemente al binario.", translation: "Just wait at the platform.", correct: false },
      { text: "Chiami un taxi.", translation: "Call a taxi.", correct: false }
    ] },
  );

  // --- 2 NEW experiences for Module 2 ---
  await addExperience(2, "Navigating the Metro", 1, "Transportation",
    [
      { it: "Scusi, qual è la fermata della metropolitana più vicina?", en: "Excuse me, what's the nearest metro station?", speaker: "passenger" },
      { it: "La fermata più vicina è Piazza della Repubblica, linea A.", en: "The nearest station is Piazza della Repubblica, line A.", speaker: "station_employee" },
      { it: "Devo cambiare per arrivare al Colosseo?", en: "Do I need to change to get to the Colosseum?", speaker: "passenger" },
      { it: "No, è diretto. Scenda a Termini e prenda la linea B.", en: "No, it's direct. Get off at Termini and take line B.", speaker: "station_employee" },
      { it: "Grazie, quanto costa un biglietto della metro?", en: "Thanks, how much does a metro ticket cost?", speaker: "passenger" },
    ],
    [{ it: "la metropolitana", en: "subway/metro", article: "la" }, { it: "la fermata", en: "stop/station", article: "la" }, { it: "scendere", en: "to get off" }],
    [
      { it: "Quale linea della metro deve prendere?", en: "Which metro line should the passenger take?", options: [{ it: "Linea A", en: "Line A", correct: true }, { it: "Linea B", en: "Line B", correct: false }, { it: "Linea C", en: "Line C", correct: false }] },
      { it: "Il passeggero deve cambiare linea?", en: "Does the passenger need to change lines?", options: [{ it: "Sì, a Termini", en: "Yes, at Termini", correct: true }, { it: "No, è diretto", en: "No, it's direct", correct: false }, { it: "Sì, alla stazione centrale", en: "Yes, at the main station", correct: false }] },
    ],
    [{ it: "la metropolitana", en: "metro" }, { it: "la fermata", en: "station/stop" }],
    { question: "Ha perso la fermata. Cosa fa?", questionTranslation: "You missed your stop. What do you do?", options: [
      { text: "Scendo alla prossima fermata e torno indietro.", translation: "I get off at the next stop and go back.", correct: true },
      { text: "Rimango seduto.", translation: "I stay seated.", correct: false },
      { text: "Tiro l'allarme.", translation: "I pull the emergency brake.", correct: false }
    ] },
  );

  await addExperience(2, "Asking About the Airport Shuttle", 1, "Transportation",
    [
      { it: "C'è una navetta per l'aeroporto?", en: "Is there a shuttle to the airport?", speaker: "passenger" },
      { it: "Sì, parte ogni 30 minuti dal piazzale davanti alla stazione.", en: "Yes, it departs every 30 minutes from the square in front of the station.", speaker: "station_employee" },
      { it: "Quanto dura il viaggio?", en: "How long does the trip take?", speaker: "passenger" },
      { it: "Circa 45 minuti, dipende dal traffico.", en: "About 45 minutes, depending on traffic.", speaker: "station_employee" },
      { it: "Il biglietto si compra a bordo?", en: "Can I buy the ticket on board?", speaker: "passenger" },
    ],
    [{ it: "la navetta", en: "shuttle", article: "la" }, { it: "l'aeroporto", en: "airport", article: "l'" }, { it: "il piazzale", en: "square/esplanade", article: "il" }],
    [
      { it: "Ogni quanto parte la navetta?", en: "How often does the shuttle depart?", options: [{ it: "Ogni 15 minuti", en: "Every 15 minutes", correct: false }, { it: "Ogni 30 minuti", en: "Every 30 minutes", correct: true }, { it: "Ogni ora", en: "Every hour", correct: false }] },
      { it: "Quanto dura il viaggio in navetta?", en: "How long does the shuttle trip take?", options: [{ it: "30 minuti", en: "30 minutes", correct: false }, { it: "45 minuti", en: "45 minutes", correct: true }, { it: "60 minuti", en: "60 minutes", correct: false }] },
    ],
    [{ it: "la navetta", en: "shuttle" }, { it: "il traffico", en: "traffic" }],
    { question: "La navetta è in ritardo. Cosa chiede?", questionTranslation: "The shuttle is late. What do you ask?", options: [
      { text: "Scusi, la navetta per l'aeroporto è in ritardo?", translation: "Excuse me, is the shuttle to the airport late?", correct: true },
      { text: "Dov'è il binario?", translation: "Where is the platform?", correct: false },
      { text: "Posso avere un rimborso?", translation: "Can I have a refund?", correct: false }
    ] },
  );

  // Module 3 (B1) - Delay Announcements - 5 total (3 existing + 2 new)
  await addExperience(3, "Train Delay Announcement", 2, "Transportation",
    [
      { it: "Attenzione, un annuncio per i viaggiatori.", en: "Attention, an announcement for travelers.", speaker: "announcer" },
      { it: "Il Frecciarossa 952 per Napoli avrà circa 20 minuti di ritardo.", en: "Frecciarossa 952 to Naples will be approximately 20 minutes late.", speaker: "announcer" },
      { it: "Il motivo è un guasto tecnico sulla linea.", en: "The reason is a technical fault on the line.", speaker: "announcer" },
      { it: "Ci scusiamo per il disagio.", en: "We apologize for the inconvenience.", speaker: "announcer" },
      { it: "Maggiori informazioni sono disponibili al banco assistenza.", en: "Further information is available at the service desk.", speaker: "announcer" },
    ],
    [{ it: "il ritardo", en: "delay", article: "il" }, { it: "il guasto", en: "fault/breakdown", article: "il" }, { it: "il banco assistenza", en: "service desk", article: "il" }],
    [
      { it: "Perché il treno è in ritardo?", en: "Why is the train delayed?", options: [{ it: "A causa del maltempo", en: "Because of the weather", correct: false }, { it: "A causa di un guasto tecnico", en: "Because of a technical fault", correct: true }, { it: "Per mancanza di personale", en: "Because of staff shortage", correct: false }] },
      { it: "Quanto ritardo ha il treno?", en: "How late is the train?", options: [{ it: "10 minuti", en: "10 minutes", correct: false }, { it: "20 minuti", en: "20 minutes", correct: true }, { it: "30 minuti", en: "30 minutes", correct: false }] },
    ],
    [{ it: "circa", en: "approximately" }, { it: "il disagio", en: "inconvenience" }],
    { question: "Cosa chiede al capotreno?", questionTranslation: "What do you ask the conductor?", options: [
      { text: "Scusi, perché il treno è in ritardo?", translation: "Excuse me, why is the train delayed?", correct: true },
      { text: "Vorrei comprare un biglietto.", translation: "I'd like to buy a ticket.", correct: false },
      { text: "Dov'è il ristorante?", translation: "Where is the restaurant?", correct: false }
    ] },
  );

  await addExperience(3, "Cancelled Train — Finding Alternatives", 2, "Transportation",
    [
      { it: "Signore e signori, l'Intercity 608 per Bologna è cancellato oggi.", en: "Ladies and gentlemen, Intercity 608 to Bologna is cancelled today.", speaker: "announcer" },
      { it: "Vi preghiamo di recarvi al binario 4. Un treno sostitutivo vi aspetta.", en: "Please proceed to platform 4. A replacement train is waiting there.", speaker: "announcer" },
      { it: "La partenza è alle 17:15, circa 30 minuti più tardi.", en: "Departure is at 5:15 PM, about 30 minutes later.", speaker: "announcer" },
      { it: "In alternativa, potete prendere il prossimo Intercity delle 18:00.", en: "Alternatively, you can take the next Intercity at 6:00 PM.", speaker: "announcer" },
      { it: "Ci scusiamo per il disagio.", en: "We apologize for the inconvenience.", speaker: "announcer" },
    ],
    [{ it: "cancellato", en: "cancelled" }, { it: "il treno sostitutivo", en: "replacement train", article: "il" }, { it: "il disagio", en: "inconvenience", article: "il" }],
    [
      { it: "Cosa è successo all'Intercity 608?", en: "What happened to Intercity 608?", options: [{ it: "È in ritardo", en: "It is delayed", correct: false }, { it: "È cancellato", en: "It is cancelled", correct: true }, { it: "Parte prima", en: "It departs earlier", correct: false }] },
      { it: "A che ora parte il treno sostitutivo?", en: "When does the replacement train depart?", options: [{ it: "Alle 17:15", en: "At 5:15 PM", correct: true }, { it: "Alle 18:00", en: "At 6:00 PM", correct: false }, { it: "Alle 16:45", en: "At 4:45 PM", correct: false }] },
    ],
    [{ it: "recarsi", en: "to proceed" }, { it: "in alternativa", en: "alternatively" }],
    { question: "Il binario è cambiato. Cosa fa?", questionTranslation: "The platform has changed. What do you do?", options: [
      { text: "Faccia attenzione ai nuovi avvisi.", translation: "Pay attention to the new notices.", correct: true },
      { text: "Torni a casa.", translation: "Just go home.", correct: false },
      { text: "Sali sul primo treno che vede.", translation: "Board the first train you see.", correct: false }
    ] },
  );

  await addExperience(3, "Understanding Platform Changes", 2, "Transportation",
    [
      { it: "A causa di lavori sui binari, il punto di partenza cambia.", en: "Due to track work, the departure point is changing.", speaker: "announcer" },
      { it: "Il Regionale 7 per Torino parte oggi dal binario 12 invece del binario 8.", en: "Regionale 7 to Turin departs from platform 12 instead of platform 8 today.", speaker: "announcer" },
      { it: "Si prega di prestare attenzione ai nuovi avvisi.", en: "Please pay attention to the new notices.", speaker: "announcer" },
      { it: "I treni per Torino fermano anche al marciapiede C.", en: "Trains to Turin also stop at platform C.", speaker: "announcer" },
      { it: "Grazie per l'attenzione.", en: "Thank you for your attention.", speaker: "announcer" },
    ],
    [{ it: "i lavori", en: "track work/renovation", article: "i" }, { it: "l'avviso", en: "notice", article: "l'" }],
    [
      { it: "Perché cambia il binario?", en: "Why is the platform changing?", options: [{ it: "A causa di un ritardo", en: "Due to a delay", correct: false }, { it: "A causa di lavori sui binari", en: "Due to track work", correct: true }, { it: "A causa del maltempo", en: "Due to weather", correct: false }] },
      { it: "Da quale binario parte il Regionale 7 adesso?", en: "From which platform does Regionale 7 depart now?", options: [{ it: "Binario 8", en: "Platform 8", correct: false }, { it: "Binario 12", en: "Platform 12", correct: true }, { it: "Binario 6", en: "Platform 6", correct: false }] },
    ],
    [{ it: "cambiare", en: "to change" }, { it: "prestare attenzione", en: "to pay attention to" }],
    { question: "Ha perso la coincidenza. Cosa fa?", questionTranslation: "You missed your connection. What do you do?", options: [
      { text: "Vada al banco assistenza e chieda aiuto.", translation: "Go to the service desk and ask for help.", correct: true },
      { text: "Prenoti un nuovo volo.", translation: "Book a new flight.", correct: false },
      { text: "Aspetti e basta.", translation: "Just wait.", correct: false }
    ] },
    undefined,
    [
      { text: "i lavori", translation: "track work", correctValue: "work" },
      { text: "l'avviso", translation: "notice", correctValue: "notice" },
      { text: "il marciapiede", translation: "platform", correctValue: "platform" }
    ],
  );

  // --- 2 NEW experiences for Module 3 (B1 Delay Announcements) ---
  await addExperience(3, "Asking About Delay Duration", 2, "Transportation",
    [
      { it: "Scusi, il treno per Genova ha quanto ritardo?", en: "Excuse me, how late is the train to Genoa?", speaker: "passenger" },
      { it: "Circa 40 minuti a causa del maltempo.", en: "About 40 minutes due to bad weather.", speaker: "station_employee" },
      { it: "Perderò la coincidenza per la Francia. Cosa posso fare?", en: "I'll miss my connection to France. What can I do?", speaker: "passenger" },
      { it: "Si rivolga al banco assistenza per una riprogrammazione gratuita.", en: "Go to the service desk for a free rebooking.", speaker: "station_employee" },
      { it: "Grazie, vado subito.", en: "Thank you, I'll go right away.", speaker: "passenger" },
    ],
    [{ it: "il maltempo", en: "bad weather", article: "il" }, { it: "riprogrammare", en: "to rebook" }, { it: "la riprogrammazione", en: "rebooking", article: "la" }],
    [
      { it: "Perché il treno è in ritardo?", en: "Why is the train late?", options: [{ it: "Per un guasto tecnico", en: "Due to a technical fault", correct: false }, { it: "Per il maltempo", en: "Due to bad weather", correct: true }, { it: "Per sciopero", en: "Due to a strike", correct: false }] },
      { it: "Cosa può fare il passeggero alla coincidenza persa?", en: "What can the passenger do about the missed connection?", options: [{ it: "Comprare un nuovo biglietto", en: "Buy a new ticket", correct: false }, { it: "Andare al banco assistenza per riprogrammare", en: "Go to the service desk for rebooking", correct: true }, { it: "Prendere un taxi", en: "Take a taxi", correct: false }] },
    ],
    [{ it: "la coincidenza", en: "connection" }, { it: "il servizio clienti", en: "customer service" }],
    { question: "L'annuncio non è chiaro. Cosa fa?", questionTranslation: "The announcement isn't clear. What do you do?", options: [
      { text: "Chiedo a un impiegato cosa ha detto l'annuncio.", translation: "I ask an employee what the announcement said.", correct: true },
      { text: "Scrivo una lettera di reclamo.", translation: "I write a complaint letter.", correct: false },
      { text: "Me ne vado.", translation: "I leave.", correct: false }
    ] },
  );

  await addExperience(3, "Delay Compensation Information", 2, "Transportation",
    [
      { it: "Con un ritardo di oltre 60 minuti ho diritto a un risarcimento?", en: "With a delay of over 60 minutes, am I entitled to compensation?", speaker: "passenger" },
      { it: "Sì, può richiedere un rimborso parziale del biglietto.", en: "Yes, you can claim a partial refund of the ticket.", speaker: "station_employee" },
      { it: "Come funziona la procedura?", en: "How does the procedure work?", speaker: "passenger" },
      { it: "Compili questo modulo online e alleghi il biglietto.", en: "Fill out this online form and attach the ticket.", speaker: "station_employee" },
      { it: "E il rimborso arriva direttamente sul conto corrente?", en: "And the refund goes directly to my bank account?", speaker: "passenger" },
    ],
    [{ it: "il risarcimento", en: "compensation", article: "il" }, { it: "il rimborso parziale", en: "partial refund", article: "il" }, { it: "la procedura", en: "procedure", article: "la" }],
    [
      { it: "Dopo quanto ritardo si ha diritto al risarcimento?", en: "After how long a delay are you entitled to compensation?", options: [{ it: "30 minuti", en: "30 minutes", correct: false }, { it: "60 minuti", en: "60 minutes", correct: true }, { it: "90 minuti", en: "90 minutes", correct: false }] },
      { it: "Cosa deve fare il passeggero per ottenere il rimborso?", en: "What must the passenger do to get the refund?", options: [{ it: "Telefonare al numero verde", en: "Call the toll-free number", correct: false }, { it: "Compilare un modulo online", en: "Fill out an online form", correct: true }, { it: "Andare in tribunale", en: "Go to court", correct: false }] },
    ],
    [{ it: "il conto corrente", en: "bank account" }],
    { question: "Il ritardo è di 2 ore. Cosa dice all'impiegato?", questionTranslation: "The delay is 2 hours. What do you say to the employee?", options: [
      { text: "Vorrei informazioni sul risarcimento per il ritardo.", translation: "I'd like information about compensation for the delay.", correct: true },
      { text: "Dov'è il bar più vicino?", translation: "Where is the nearest bar?", correct: false },
      { text: "Mi dia un biglietto nuovo.", translation: "Give me a new ticket.", correct: false }
    ] },
  );

  // Module 4 (B1) - Platform Changes - 5 NEW experiences (no old ones exist)
  await addExperience(4, "Last-Minute Platform Change", 2, "Transportation",
    [
      { it: "Attenzione! Il treno per Bologna delle 15:45 parte dal binario 6 anziché dal binario 3.", en: "Attention! The 3:45 PM train to Bologna departs from platform 6 instead of platform 3.", speaker: "announcer" },
      { it: "Il cambio è dovuto a un problema di segnalazione.", en: "The change is due to a signaling problem.", speaker: "announcer" },
      { it: "Il treno partirà con 5 minuti di ritardo.", en: "The train will depart 5 minutes late.", speaker: "announcer" },
      { it: "C'è abbastanza tempo per arrivare al binario 6?", en: "Is there enough time to get to platform 6?", speaker: "passenger" },
      { it: "Sì, prenda il sottopassaggio, sono solo 2 minuti a piedi.", en: "Yes, take the underpass, it's only 2 minutes on foot.", speaker: "station_employee" },
    ],
    [{ it: "il cambio", en: "change", article: "il" }, { it: "la segnalazione", en: "signaling", article: "la" }, { it: "il sottopassaggio", en: "underpass", article: "il" }],
    [
      { it: "Perché è cambiato il binario?", en: "Why did the platform change?", options: [{ it: "Per lavori", en: "Due to works", correct: false }, { it: "Per un problema di segnalazione", en: "Due to a signaling problem", correct: true }, { it: "Per il maltempo", en: "Due to weather", correct: false }] },
      { it: "Da quale binario parte il treno ora?", en: "From which platform does the train depart now?", options: [{ it: "Binario 3", en: "Platform 3", correct: false }, { it: "Binario 6", en: "Platform 6", correct: true }, { it: "Binario 8", en: "Platform 8", correct: false }] },
    ],
    [{ it: "il binario", en: "platform" }, { it: "il sottopassaggio", en: "underpass" }],
    { question: "Il cambio è di corsia. Cosa controlla?", questionTranslation: "The platform changed. What do you check?", options: [
      { text: "Controllo il tabellone per la nuova indicazione.", translation: "I check the board for the new platform.", correct: true },
      { text: "Salgo sul primo treno disponibile.", translation: "I board the first available train.", correct: false },
      { text: "Torno a casa.", translation: "I go home.", correct: false }
    ] },
  );

  await addExperience(4, "Asking Why the Platform Changed", 2, "Transportation",
    [
      { it: "Scusi, perché il Regionale per Pisa è stato spostato al binario 9?", en: "Excuse me, why was the Regional train to Pisa moved to platform 9?", speaker: "passenger" },
      { it: "Lavori di manutenzione sul binario 7, signore.", en: "Maintenance work on platform 7, sir.", speaker: "station_employee" },
      { it: "Ma il tabellone segnava ancora binario 7 cinque minuti fa.", en: "But the board still showed platform 7 five minutes ago.", speaker: "passenger" },
      { it: "Ci scusiamo, l'avviso è arrivato all'ultimo momento.", en: "We apologize, the notice came at the last moment.", speaker: "station_employee" },
      { it: "Va bene, corro al binario 9. Arrivo in tempo?", en: "Alright, I'll run to platform 9. Will I make it in time?", speaker: "passenger" },
    ],
    [{ it: "la manutenzione", en: "maintenance", article: "la" }, { it: "l'ultimo momento", en: "last moment", article: "l'" }],
    [
      { it: "Perché il treno è stato spostato?", en: "Why was the train moved?", options: [{ it: "Lavori di manutenzione", en: "Maintenance work", correct: true }, { it: "Sciopero", en: "Strike", correct: false }, { it: "Guasto al treno", en: "Train breakdown", correct: false }] },
      { it: "Il tabellone era aggiornato?", en: "Was the board updated?", options: [{ it: "Sì, subito", en: "Yes, immediately", correct: false }, { it: "No, l'avviso è arrivato tardi", en: "No, the notice came late", correct: true }, { it: "Non c'è tabellone", en: "There is no board", correct: false }] },
    ],
    [{ it: "spostare", en: "to move" }, { it: "la manutenzione", en: "maintenance" }],
    { question: "Il tabellone on line non funziona. Cosa fa?", questionTranslation: "The online board isn't working. What do you do?", options: [
      { text: "Chiedo informazioni a un impiegato della stazione.", translation: "I ask a station employee for information.", correct: true },
      { text: "Scelgo un binario a caso.", translation: "I pick a platform at random.", correct: false },
      { text: "Controllo un sito di terze parti.", translation: "I check a third-party site.", correct: false }
    ] },
  );

  await addExperience(4, "Confused About the New Platform", 2, "Transportation",
    [
      { it: "Scusi, ho appena sentito l'annuncio ma non ho capito bene.", en: "Excuse me, I just heard the announcement but didn't quite understand.", speaker: "passenger" },
      { it: "Il Frecciargento per Roma è stato spostato al binario 1.", en: "The Frecciargento to Rome has been moved to platform 1.", speaker: "station_employee" },
      { it: "Ero al binario 4. Quanto dista il binario 1?", en: "I was at platform 4. How far is platform 1?", speaker: "passenger" },
      { it: "Attraversi l'atrio principale e scenda le scale. Circa 3 minuti.", en: "Cross the main hall and go down the stairs. About 3 minutes.", speaker: "station_employee" },
      { it: "Grazie, spero di farcela!", en: "Thanks, I hope I make it!", speaker: "passenger" },
    ],
    [{ it: "l'atrio", en: "main hall", article: "l'" }, { it: "farcela", en: "to make it" }],
    [
      { it: "Che treno è stato spostato?", en: "Which train was moved?", options: [{ it: "Il Regionale per Napoli", en: "The Regional to Naples", correct: false }, { it: "Il Frecciargento per Roma", en: "The Frecciargento to Rome", correct: true }, { it: "L'Intercity per Milano", en: "The Intercity to Milan", correct: false }] },
      { it: "Dov'è il binario 1?", en: "Where is platform 1?", options: [{ it: "Al piano superiore", en: "Upstairs", correct: false }, { it: "Attraverso l'atrio e giù per le scale", en: "Cross the hall and down the stairs", correct: true }, { it: "Fuori dalla stazione", en: "Outside the station", correct: false }] },
    ],
    [{ it: "annunciare", en: "to announce" }, { it: "l'atrio", en: "main hall" }],
    { question: "Non capisce l'annuncio in italiano. Cosa dice?", questionTranslation: "You don't understand the Italian announcement. What do you say?", options: [
      { text: "Scusi, può ripetere più lentamente, per favore?", translation: "Excuse me, can you repeat more slowly, please?", correct: true },
      { text: "Parla inglese?", translation: "Do you speak English?", correct: false },
      { text: "Lasci perdere.", translation: "Never mind.", correct: false }
    ] },
  );

  await addExperience(4, "Platform Change While on the Train", 2, "Transportation",
    [
      { it: "Attenzione, il treno cambia binario alla stazione di Firenze.", en: "Attention, the train changes platform at Florence station.", speaker: "conductor" },
      { it: "Scusi, cosa significa che il treno cambia binario?", en: "Excuse me, what does it mean the train changes platform?", speaker: "passenger" },
      { it: "Dopo Firenze, il treno proseguirà dal binario 5 invece del binario 2.", en: "After Florence, the train will continue from platform 5 instead of platform 2.", speaker: "conductor" },
      { it: "Devo scendere a Firenze e cambiare treno?", en: "Do I have to get off in Florence and change trains?", speaker: "passenger" },
      { it: "No, rimanga sullo stesso treno. Solo il binario di arrivo cambia.", en: "No, stay on the same train. Only the arrival platform changes.", speaker: "conductor" },
    ],
    [{ it: "proseguire", en: "to continue" }, { it: "l'arrivo", en: "arrival", article: "l'" }],
    [
      { it: "Cosa cambia per il passeggero?", en: "What changes for the passenger?", options: [{ it: "Deve scendere e cambiare treno", en: "He must get off and change trains", correct: false }, { it: "Solo il binario di arrivo cambia", en: "Only the arrival platform changes", correct: true }, { it: "Il treno è cancellato", en: "The train is cancelled", correct: false }] },
      { it: "Dove cambia binario il treno?", en: "Where does the train change platform?", options: [{ it: "A Roma", en: "In Rome", correct: false }, { it: "A Firenze", en: "In Florence", correct: true }, { it: "A Bologna", en: "In Bologna", correct: false }] },
    ],
    [{ it: "il cambio binario", en: "platform change" }],
    { question: "Il capotreno dà informazioni. Cosa dice per ringraziare?", questionTranslation: "The conductor gives information. What do you say to thank him?", options: [
      { text: "Grazie, ora è chiaro.", translation: "Thank you, it's clear now.", correct: true },
      { text: "Non mi interessa.", translation: "I don't care.", correct: false },
      { text: "Devo parlare con il capostazione.", translation: "I need to speak to the stationmaster.", correct: false }
    ] },
  );

  // Rest of Module 4 + Modules 5-6 follow same pattern (5 experiences each, 2 old + 3 new for Mod 5-6, all new for Mod 4)
  // [Prompt truncated for brevity - but give the full content in the actual task]

  // Module 5 (B2) - Complex Itinerary - 5 total (2 old + 3 new)
  await addExperience(5, "Planning a Complex Multi-Leg Trip", 3, "Transportation",
    [
      { it: "Devo viaggiare da Milano via Firenze a Roma.", en: "I need to travel from Milan via Florence to Rome.", speaker: "passenger" },
      { it: "Può consigliarmi un itinerario con tempi di coincidenza brevi?", en: "Can you recommend a route with the shortest possible transfer times?", speaker: "passenger" },
      { it: "Prenda il Frecciarossa 1005 delle 7:30. A Firenze ha 15 minuti per la coincidenza.", en: "Take Frecciarossa 1005 at 7:30 AM. In Florence you have a 15-minute transfer.", speaker: "ticket_agent" },
      { it: "E da Firenze a Roma parte un Frecciarossa alle 10:15.", en: "And from Florence to Rome, a Frecciarossa departs at 10:15 AM.", speaker: "ticket_agent" },
      { it: "Perfetto. Mi prenoti un posto in carrozza open space, per favore.", en: "Perfect. Please reserve me a seat in the open-plan carriage.", speaker: "passenger" },
    ],
    [{ it: "la coincidenza", en: "transfer/connection", article: "la" }, { it: "la carrozza", en: "carriage", article: "la" }],
    [
      { it: "Dove vuole viaggiare il passeggero?", en: "Where does the passenger want to travel?", options: [{ it: "Milano via Firenze a Roma", en: "Milan via Florence to Rome", correct: true }, { it: "Firenze via Milano a Roma", en: "Florence via Milan to Rome", correct: false }, { it: "Milano direttamente a Roma", en: "Milan directly to Rome", correct: false }] },
      { it: "Quanto tempo ha per la coincidenza a Firenze?", en: "How long is his transfer in Florence?", options: [{ it: "10 minuti", en: "10 minutes", correct: false }, { it: "15 minuti", en: "15 minutes", correct: true }, { it: "20 minuti", en: "20 minutes", correct: false }] },
    ],
    [{ it: "consigliare", en: "to recommend" }, { it: "prenotare", en: "to book" }],
    { question: "Cosa dice al centro viaggi?", questionTranslation: "What do you say at the travel center?", options: [
      { text: "Può consigliarmi un itinerario con coincidenze brevi?", translation: "Can you recommend a route with short transfers?", correct: true },
      { text: "Vorrei una birra e una pizza.", translation: "I'd like a beer and a pizza.", correct: false },
      { text: "Dove posso lasciare i bagagli?", translation: "Where can I drop off my luggage?", correct: false }
    ] },
  );

  await addExperience(5, "Handling a Missed Connection", 3, "Transportation",
    [
      { it: "Ho perso la coincidenza a causa del ritardo.", en: "I missed my connecting train because of the delay.", speaker: "passenger" },
      { it: "Nessun problema. Le riprogrammo il biglietto sul prossimo treno gratuitamente.", en: "No problem. I'll rebook you on the next train for free.", speaker: "ticket_agent" },
      { it: "Il prossimo treno parte tra 45 minuti dal binario 6.", en: "The next train departs in 45 minutes from platform 6.", speaker: "ticket_agent" },
      { it: "Devo sbrigarmi per trovare un posto?", en: "Do I need to hurry to get a seat?", speaker: "passenger" },
      { it: "No, il treno ha abbastanza posti. Può salire con calma.", en: "No, the train has enough capacity. You can board calmly.", speaker: "ticket_agent" },
    ],
    [{ it: "perdere", en: "to miss" }, { it: "la coincidenza", en: "connection", article: "la" }, { it: "la capienza", en: "capacity", article: "la" }],
    [
      { it: "Perché il passeggero ha perso la coincidenza?", en: "Why did the passenger miss the connection?", options: [{ it: "Ha dormito troppo", en: "He overslept", correct: false }, { it: "A causa del ritardo", en: "Because of the delay", correct: true }, { it: "Era al binario sbagliato", en: "He was at the wrong platform", correct: false }] },
      { it: "Cosa fa l'impiegato dell'assistenza?", en: "What does the service employee do?", options: [{ it: "Dà un risarcimento al passeggero", en: "He gives compensation", correct: false }, { it: "Riprogramma il biglietto gratis", en: "He rebooks the passenger for free", correct: true }, { it: "Chiama un taxi", en: "He calls a taxi", correct: false }] },
    ],
    [{ it: "riprogrammare", en: "to rebook" }, { it: "con calma", en: "calmly" }],
    { question: "È insoddisfatto. Cosa fa?", questionTranslation: "You're dissatisfied. What do you do?", options: [
      { text: "Presenti un reclamo scritto.", translation: "File a written complaint.", correct: true },
      { text: "Scriva una lettera arrabbiata.", translation: "Write an angry letter.", correct: false },
      { text: "Se ne dimentichi e basta.", translation: "Just forget about it.", correct: false }
    ] },
  );

  // 3 NEW for Module 5
  await addExperience(5, "Planning a Train + Ferry Trip", 3, "Transportation",
    [
      { it: "Vorrei un itinerario combinato treno più traghetto per la Sicilia.", en: "I'd like a combined train and ferry itinerary to Sicily.", speaker: "passenger" },
      { it: "Prenda l'Intercity per Villa San Giovanni, poi il traghetto per Messina.", en: "Take the Intercity to Villa San Giovanni, then the ferry to Messina.", speaker: "ticket_agent" },
      { it: "I biglietti sono integrati o devo comprarli separatamente?", en: "Are the tickets integrated or do I need to buy them separately?", speaker: "passenger" },
      { it: "Può acquistare un biglietto unico treno più nave.", en: "You can buy a single combined train and ferry ticket.", speaker: "ticket_agent" },
      { it: "Quanto costa e quanto dura il viaggio totale?", en: "How much is it and how long is the total journey?", speaker: "passenger" },
    ],
    [{ it: "il traghetto", en: "ferry", article: "il" }, { it: "combinato", en: "combined" }, { it: "il biglietto unico", en: "single ticket", article: "il" }],
    [
      { it: "Come si arriva in Sicilia con il treno?", en: "How do you reach Sicily by train?", options: [{ it: "Treno diretto da Milano", en: "Direct train from Milan", correct: false }, { it: "Treno fino a Villa San Giovanni, poi traghetto", en: "Train to Villa San Giovanni, then ferry", correct: true }, { it: "Treno fino a Napoli, poi aereo", en: "Train to Naples, then plane", correct: false }] },
      { it: "Come si acquista il biglietto?", en: "How do you buy the ticket?", options: [{ it: "Biglietti separati", en: "Separate tickets", correct: false }, { it: "Biglietto unico treno più nave", en: "Single combined ticket", correct: true }, { it: "Solo online", en: "Only online", correct: false }] },
    ],
    [{ it: "la Sicilia", en: "Sicily" }, { it: "il viaggio totale", en: "total journey" }],
    { question: "Il traghetto è in ritardo. Cosa chiede?", questionTranslation: "The ferry is delayed. What do you ask?", options: [
      { text: "Il traghetto per Messina è in orario?", translation: "Is the ferry to Messina on time?", correct: true },
      { text: "Dov'è la banchina?", translation: "Where is the dock?", correct: false },
      { text: "C'è un ristorante a bordo?", translation: "Is there a restaurant on board?", correct: false }
    ] },
  );

  await addExperience(5, "Booking a Night Train", 3, "Transportation",
    [
      { it: "Ci sono treni notturni da Milano a Lecce?", en: "Are there overnight trains from Milan to Lecce?", speaker: "passenger" },
      { it: "Sì, l'Intercity Notte parte alle 22:30 con arrivo alle 7:45.", en: "Yes, the Intercity Notte departs at 10:30 PM and arrives at 7:45 AM.", speaker: "ticket_agent" },
      { it: "Vorrei una cuccetta in compartimento singolo.", en: "I'd like a couchette in a single compartment.", speaker: "passenger" },
      { it: "Costa 35 euro in più. La prima colazione è inclusa.", en: "That costs 35 euros extra. Breakfast is included.", speaker: "ticket_agent" },
      { it: "Perfetto, la prenoto per venerdì prossimo.", en: "Perfect, I'll book it for next Friday.", speaker: "passenger" },
    ],
    [{ it: "il treno notturno", en: "night train", article: "il" }, { it: "la cuccetta", en: "couchette", article: "la" }, { it: "il compartimento", en: "compartment", article: "il" }],
    [
      { it: "A che ora parte il treno notturno?", en: "When does the night train depart?", options: [{ it: "Alle 21:30", en: "At 9:30 PM", correct: false }, { it: "Alle 22:30", en: "At 10:30 PM", correct: true }, { it: "Alle 23:30", en: "At 11:30 PM", correct: false }] },
      { it: "Cosa è incluso nel supplemento cuccetta?", en: "What is included in the couchette supplement?", options: [{ it: "Cena", en: "Dinner", correct: false }, { it: "Prima colazione", en: "Breakfast", correct: true }, { it: "Bevande analcoliche", en: "Soft drinks", correct: false }] },
    ],
    [{ it: "la cuccetta", en: "couchette" }, { it: "incluso", en: "included" }],
    { question: "Ha difficoltà a dormire. Cosa chiede al controllore?", questionTranslation: "You have trouble sleeping. What do you ask the conductor?", options: [
      { text: "Può abbassare il riscaldamento, per favore?", translation: "Can you turn down the heating, please?", correct: true },
      { text: "Può comprarmi qualcosa da mangiare?", translation: "Can you buy me something to eat?", correct: false },
      { text: "Il treno è in orario?", translation: "Is the train on time?", correct: false }
    ] },
  );

  await addExperience(5, "Multi-City European Itinerary", 3, "Transportation",
    [
      { it: "Devo organizzare un viaggio Zurigo - Milano - Roma in due giorni.", en: "I need to plan a Zurich - Milan - Rome trip in two days.", speaker: "passenger" },
      { it: "Da Zurigo a Milano prenda l'Eurocity. Il biglietto costa 55 euro.", en: "From Zurich to Milan take the Eurocity. The ticket costs 55 euros.", speaker: "ticket_agent" },
      { it: "A Milano ho coincidenza per Roma. Quanto tempo serve per cambiare stazione?", en: "In Milan I have a connection to Rome. How much time do I need to change stations?", speaker: "passenger" },
      { it: "Dalla stazione centrale all'altra stazione sono 10 minuti di taxi.", en: "From the central station to the other station is 10 minutes by taxi.", speaker: "ticket_agent" },
      { it: "Allora scelga il biglietto flessibile nel caso perda la coincidenza.", en: "Then choose the flexible ticket in case I miss the connection.", speaker: "passenger" },
    ],
    [{ it: "l'Eurocity", en: "Eurocity train", article: "l'" }, { it: "la stazione", en: "station", article: "la" }, { it: "flessibile", en: "flexible" }],
    [
      { it: "Qual è la prima tappa del viaggio?", en: "What is the first leg of the journey?", options: [{ it: "Milano-Roma", en: "Milan-Rome", correct: false }, { it: "Zurigo-Milano", en: "Zurich-Milan", correct: true }, { it: "Roma-Napoli", en: "Rome-Naples", correct: false }] },
      { it: "Quanto costa il biglietto Zurigo-Milano?", en: "How much is the Zurich-Milan ticket?", options: [{ it: "45 euro", en: "45 euros", correct: false }, { it: "55 euro", en: "55 euros", correct: true }, { it: "65 euro", en: "65 euros", correct: false }] },
    ],
    [{ it: "la tappa", en: "leg/stage" }, { it: "l'organizzazione", en: "organization" }],
    { question: "Viaggia con bagaglio pesante. Cosa chiede?", questionTranslation: "You're traveling with heavy luggage. What do you ask?", options: [
      { text: "C'è un deposito bagagli alla stazione?", translation: "Is there a luggage storage at the station?", correct: true },
      { text: "Il treno ha posti liberi?", translation: "Does the train have free seats?", correct: false },
      { text: "Quanto costa il biglietto?", translation: "How much is the ticket?", correct: false }
    ] },
  );

  // Module 6 (B2) - Customer Service - 5 total (2 old + 3 new)
  await addExperience(6, "Lodge a Formal Complaint", 3, "Transportation",
    [
      { it: "Vorrei presentare un reclamo per il viaggio in treno di ieri.", en: "I would like to file a complaint about yesterday's train journey.", speaker: "passenger" },
      { it: "L'aria condizionata nella carrozza 3 non funzionava.", en: "The air conditioning in carriage 3 was not working.", speaker: "passenger" },
      { it: "Ha con sé il biglietto e il numero del treno?", en: "Do you have your ticket and the train number ready?", speaker: "customer_service" },
      { it: "Sì, ecco tutti i documenti. Attendo un rimborso.", en: "Yes, here are all the documents. I expect a refund.", speaker: "passenger" },
      { it: "Esamineremo il suo caso e la contatteremo entro 14 giorni.", en: "We will review your case and get back to you within 14 days.", speaker: "customer_service" },
    ],
    [{ it: "il reclamo", en: "complaint", article: "il" }, { it: "il rimborso", en: "refund", article: "il" }, { it: "i documenti", en: "documents", article: "i" }],
    [
      { it: "Perché il passeggero vuole presentare un reclamo?", en: "Why does the passenger want to file a complaint?", options: [{ it: "Il treno era in ritardo", en: "The train was late", correct: false }, { it: "L'aria condizionata non funzionava", en: "The AC was not working", correct: true }, { it: "Il cibo era cattivo", en: "The food was bad", correct: false }] },
      { it: "Quanto tempo ci vuole per la gestione del reclamo?", en: "How long does the complaint processing take?", options: [{ it: "7 giorni", en: "7 days", correct: false }, { it: "14 giorni", en: "14 days", correct: true }, { it: "30 giorni", en: "30 days", correct: false }] },
    ],
    [{ it: "presentare", en: "to file" }, { it: "esaminare", en: "to review" }],
    { question: "Viaggia per lavoro. Che biglietto sceglie?", questionTranslation: "You're traveling for business. Which ticket do you choose?", options: [
      { text: "C'è uno sconto per chi viaggia spesso?", translation: "Is there a discount for frequent travelers?", correct: true },
      { text: "Dov'è l'hotel più vicino?", translation: "Where is the nearest hotel?", correct: false },
      { text: "Può dirmi la data?", translation: "Can you tell me the date?", correct: false }
    ] },
    undefined,
    [
      { text: "il reclamo", translation: "complaint", correctValue: "complaint" },
      { text: "il rimborso", translation: "refund", correctValue: "refund" },
      { text: "i documenti", translation: "documents", correctValue: "documents" }
    ],
  );

  await addExperience(6, "Negotiating a Better Fare", 3, "Transportation",
    [
      { it: "Viaggio per lavoro e ho bisogno di un biglietto flessibile.", en: "I'm traveling for business and need a flexible ticket.", speaker: "passenger" },
      { it: "Allora le consiglio il biglietto flessibile. Costa 130 euro.", en: "Then I recommend the flex fare ticket. It costs 130 euros.", speaker: "customer_service" },
      { it: "C'è uno sconto per chi viaggia spesso?", en: "Is there a discount for frequent travelers?", speaker: "passenger" },
      { it: "Con l'abbonamento annuale viaggia illimitatamente per un anno.", en: "With the annual pass you travel unlimited for a year.", speaker: "customer_service" },
      { it: "È un buon investimento per i miei viaggi regolari.", en: "That's a good investment for my regular trips.", speaker: "passenger" },
    ],
    [{ it: "per lavoro", en: "for business" }, { it: "il biglietto flessibile", en: "flex fare ticket" }, { it: "illimitatamente", en: "unlimited" }],
    [
      { it: "Che biglietto consiglia l'impiegato?", en: "Which ticket does the employee recommend?", options: [{ it: "Il biglietto economico", en: "The saver fare", correct: false }, { it: "Il biglietto flessibile", en: "The flex fare", correct: true }, { it: "Il biglietto speciale", en: "The special ticket", correct: false }] },
      { it: "Qual è il vantaggio dell'abbonamento annuale?", en: "What is the advantage of the annual pass?", options: [{ it: "Sconto del 25%", en: "25 percent discount", correct: false }, { it: "Viaggi illimitati per un anno", en: "Unlimited travel for a year", correct: true }, { it: "Bevande gratis sul treno", en: "Free drinks on the train", correct: false }] },
    ],
    [{ it: "il viaggiatore frequente", en: "frequent traveler" }, { it: "l'investimento", en: "investment" }],
    { question: "Telefona al servizio clienti. Cosa dice?", questionTranslation: "You call customer service. What do you say?", options: [
      { text: "Buongiorno, vorrei informazioni sui biglietti flessibili.", translation: "Hello, I'd like information about flexible tickets.", correct: true },
      { text: "Può darmi una ricetta?", translation: "Can you give me a prescription?", correct: false },
      { text: "Ho bisogno di un'ambulanza.", translation: "I need an ambulance.", correct: false }
    ] },
  );

  // 3 NEW for Module 6
  await addExperience(6, "Requesting a Refund Online", 3, "Transportation",
    [
      { it: "Ho comprato un biglicio online ma devo cancellare il viaggio.", en: "I bought a ticket online but I need to cancel the trip.", speaker: "passenger" },
      { it: "Può gestire la cancellazione dal suo account nella sezione 'I miei ordini'.", en: "You can manage the cancellation from your account in the 'My orders' section.", speaker: "customer_service" },
      { it: "Ho diritto a un rimborso completo?", en: "Am I entitled to a full refund?", speaker: "passenger" },
      { it: "Dipende dalla tariffa. Il biglietto economy non è rimborsabile.", en: "It depends on the fare. The economy ticket is non-refundable.", speaker: "customer_service" },
      { it: "Peccato, la prossima volta sceglierò la tariffa flessibile.", en: "Too bad, next time I'll choose the flexible fare.", speaker: "passenger" },
    ],
    [{ it: "la cancellazione", en: "cancellation", article: "la" }, { it: "rimborsabile", en: "refundable" }, { it: "l'account", en: "account", article: "l'" }],
    [
      { it: "Come può cancellare il biglietto il passeggero?", en: "How can the passenger cancel the ticket?", options: [{ it: "Telefonando al call center", en: "By calling the call center", correct: false }, { it: "Dal suo account online", en: "From his online account", correct: true }, { it: "Inviando una lettera", en: "By sending a letter", correct: false }] },
      { it: "Il biglietto economy è rimborsabile?", en: "Is the economy ticket refundable?", options: [{ it: "Sì, completamente", en: "Yes, fully", correct: false }, { it: "Sì, parzialmente", en: "Yes, partially", correct: false }, { it: "No, non è rimborsabile", en: "No, it's not refundable", correct: true }] },
    ],
    [{ it: "online", en: "online" }, { it: "cancellare", en: "to cancel" }],
    { question: "Non trova l'ordine nel suo account. Cosa fa?", questionTranslation: "You can't find the order in your account. What do you do?", options: [
      { text: "Chiamo il servizio clienti per assistenza.", translation: "I call customer service for assistance.", correct: true },
      { text: "Ricomprare il biglietto.", translation: "Buy the ticket again.", correct: false },
      { text: "Cambio sito web.", translation: "Change website.", correct: false }
    ] },
  );

  await addExperience(6, "Lost Luggage at the Station", 3, "Transportation",
    [
      { it: "Ho lasciato la mia borsa sul treno. Cosa devo fare?", en: "I left my bag on the train. What should I do?", speaker: "passenger" },
      { it: "Si rivolga all'ufficio oggetti smarriti, al piano terra.", en: "Go to the lost and found office on the ground floor.", speaker: "station_employee" },
      { it: "Devo descrivere la borsa e il contenuto?", en: "Do I need to describe the bag and its contents?", speaker: "passenger" },
      { it: "Sì, e le servirà il numero del treno e della carrozza.", en: "Yes, and you'll need the train number and carriage.", speaker: "station_employee" },
      { it: "Il treno era l'Intercity 724, carrozza 5, posti 22-23.", en: "It was Intercity 724, carriage 5, seats 22-23.", speaker: "passenger" },
    ],
    [{ it: "smarrirsi", en: "to get lost" }, { it: "la borsa", en: "bag", article: "la" }, { it: "l'ufficio oggetti smarriti", en: "lost and found office", article: "l'" }],
    [
      { it: "Dove si trova l'ufficio oggetti smarriti?", en: "Where is the lost and found office?", options: [{ it: "Al primo piano", en: "On the first floor", correct: false }, { it: "Al piano terra", en: "On the ground floor", correct: true }, { it: "Fuori dalla stazione", en: "Outside the station", correct: false }] },
      { it: "Cosa deve ricordarsi il passeggero?", en: "What must the passenger remember?", options: [{ it: "Il numero del treno e della carrozza", en: "The train and carriage number", correct: true }, { it: "Il costo del biglietto", en: "The ticket cost", correct: false }, { it: "L'orario di partenza", en: "The departure time", correct: false }] },
    ],
    [{ it: "l'oggetto smarrito", en: "lost item" }],
    { question: "Scopre che il treno riparte. Cosa fa?", questionTranslation: "You discover the train is leaving again. What do you do?", options: [
      { text: "Torno subito al binario a cercare la borsa.", translation: "I go back to the platform immediately to look for the bag.", correct: true },
      { text: "Aspetto che lo trovino.", translation: "I wait for them to find it.", correct: false },
      { text: "Prendo il prossimo treno.", translation: "I take the next train.", correct: false }
    ] },
  );

  await addExperience(6, "Appealing a Fine", 3, "Transportation",
    [
      { it: "Ho ricevuto una multa ma avevo il biglietto valido.", en: "I received a fine but I had a valid ticket.", speaker: "passenger" },
      { it: "Il suo biglietto non era stato convalidato prima della salita.", en: "Your ticket wasn't validated before boarding.", speaker: "customer_service" },
      { it: "Non sapevo che si dovesse convalidare il biglietto in Italia.", en: "I didn't know you had to validate the ticket in Italy.", speaker: "passenger" },
      { it: "Può presentare un ricorso scritto entro 60 giorni.", en: "You can file a written appeal within 60 days.", speaker: "customer_service" },
      { it: "Ecco la mia lettera di spiegazione con i documenti allegati.", en: "Here is my explanation letter with the attached documents.", speaker: "passenger" },
    ],
    [{ it: "la multa", en: "fine", article: "la" }, { it: "convalidare", en: "to validate" }, { it: "il ricorso", en: "appeal", article: "il" }],
    [
      { it: "Perché il passeggero ha ricevuto una multa?", en: "Why did the passenger receive a fine?", options: [{ it: "Non aveva un biglietto", en: "He didn't have a ticket", correct: false }, { it: "Il biglietto non era convalidato", en: "The ticket wasn't validated", correct: true }, { it: "Era in prima classe", en: "He was in first class", correct: false }] },
      { it: "Quanto tempo ha per fare ricorso?", en: "How much time does he have to appeal?", options: [{ it: "30 giorni", en: "30 days", correct: false }, { it: "60 giorni", en: "60 days", correct: true }, { it: "90 giorni", en: "90 days", correct: false }] },
    ],
    [{ it: "presentare ricorso", en: "to file an appeal" }, { it: "allegare", en: "to attach" }],
    { question: "Il controllore chiede il biglietto. Cosa dice?", questionTranslation: "The ticket inspector asks for your ticket. What do you say?", options: [
      { text: "Ecco il mio biglietto, l'ho appena comprato.", translation: "Here is my ticket, I just bought it.", correct: true },
      { text: "Non ho un biglietto.", translation: "I don't have a ticket.", correct: false },
      { text: "Il mio biglietto è a casa.", translation: "My ticket is at home.", correct: false }
    ] },
  );

  console.log("  ✓ Transportation seeded");
}
