export async function seedEmergency(addExperience: Function) {
  // === Module 45 (A2, level=1) - Calling for Help ===

  await addExperience(45, "Chiamare il Numero di Emergenza", 1, "Emergency",
    [
      { it: "Pronto, è il numero di emergenza?", en: "Hello, is this the emergency number?", speaker: "person" },
      { it: "Sì, quale emergenza ha?", en: "Yes, what is your emergency?", speaker: "operator" },
      { it: "C'è stata un'incidente in via Garibaldi.", en: "There has been an accident on Via Garibaldi.", speaker: "person" },
      { it: "Resta calmo. Arriviamo subito.", en: "Stay calm. We'll be there immediately.", speaker: "operator" },
      { it: "Grazie, vi aspetto.", en: "Thank you, I'll wait.", speaker: "person" },
    ],
    [{ it: "il numero di emergenza", en: "emergency number", article: "il" }, { it: "calmo", en: "calm" }, { it: "subito", en: "immediately" }],
    [
      { it: "Chi risponde al telefono?", en: "Who answers the phone?", options: [{ it: "Un medico", en: "A doctor", correct: false }, { it: "Un operatore", en: "An operator", correct: true }, { it: "Un poliziotto", en: "A police officer", correct: false }] },
      { it: "Cosa è successo?", en: "What happened?", options: [{ it: "Un incidente in via Garibaldi", en: "An accident on Via Garibaldi", correct: true }, { it: "Un furto in banca", en: "A bank robbery", correct: false }, { it: "Una festa", en: "A party", correct: false }] },
    ],
    [{ it: "l'emergenza", en: "emergency" }, { it: "l'incidente", en: "accident" }, { it: "arrivare", en: "to arrive" }],
    { question: "Cosa dice quando chiama il numero di emergenza?", questionTranslation: "What do you say when calling the emergency number?", options: [
      { text: "Pronto, è il numero di emergenza?", translation: "Hello, is this the emergency number?", correct: true },
      { text: "Vorrei ordinare una pizza.", translation: "I'd like to order a pizza.", correct: false },
      { text: "Che ore sono?", translation: "What time is it?", correct: false }
    ] },
  );

  await addExperience(45, "Richiedere un'Ambulanza", 1, "Emergency",
    [
      { it: "Pronto, ho bisogno di un'ambulanza.", en: "Hello, I need an ambulance.", speaker: "person" },
      { it: "Dov'è il paziente?", en: "Where is the patient?", speaker: "operator" },
      { it: "Siamo al parco, vicino alla fontana.", en: "We are at the park, near the fountain.", speaker: "person" },
      { it: "Il paziente è cosciente?", en: "Is the patient conscious?", speaker: "operator" },
      { it: "Sì, ma ha molto dolore al petto.", en: "Yes, but he has a lot of chest pain.", speaker: "person" },
    ],
    [{ it: "l'ambulanza", en: "ambulance", article: "l'" }, { it: "il paziente", en: "patient", article: "il" }, { it: "il petto", en: "chest", article: "il" }],
    [
      { it: "Cosa richiede la persona?", en: "What does the person request?", options: [{ it: "Un'ambulanza", en: "An ambulance", correct: true }, { it: "La polizia", en: "The police", correct: false }, { it: "Un taxi", en: "A taxi", correct: false }] },
      { it: "Dove si trova il paziente?", en: "Where is the patient located?", options: [{ it: "Al ristorante", en: "At the restaurant", correct: false }, { it: "Al parco vicino alla fontana", en: "At the park near the fountain", correct: true }, { it: "In stazione", en: "At the station", correct: false }] },
    ],
    [{ it: "avere bisogno di", en: "to need" }, { it: "cosciente", en: "conscious" }, { it: "il dolore", en: "pain" }],
    { question: "Come descrive il problema al centralino?", questionTranslation: "How do you describe the problem to the operator?", options: [
      { text: "Il paziente ha molto dolore al petto.", translation: "The patient has a lot of chest pain.", correct: true },
      { text: "Il paziente vuole mangiare.", translation: "The patient wants to eat.", correct: false },
      { text: "Il paziente dorme.", translation: "The patient is sleeping.", correct: false }
    ] },
  );

  await addExperience(45, "Segnalare un Incendio", 1, "Emergency",
    [
      { it: "Pronto, c'è un incendio!", en: "Hello, there is a fire!", speaker: "person" },
      { it: "Dov'è l'incendio?", en: "Where is the fire?", speaker: "operator" },
      { it: "In via Roma 25, al terzo piano.", en: "At Via Roma 25, on the third floor.", speaker: "person" },
      { it: "Ci sono persone all'interno?", en: "Are there people inside?", speaker: "operator" },
      { it: "Sì, credo di sì. Sbrigatevi!", en: "Yes, I think so. Hurry!", speaker: "person" },
    ],
    [{ it: "l'incendio", en: "fire", article: "l'" }, { it: "il piano", en: "floor", article: "il" }, { it: "sbrigarsi", en: "to hurry" }],
    [
      { it: "Cosa sta succedendo?", en: "What is happening?", options: [{ it: "Un incendio", en: "A fire", correct: true }, { it: "Una festa", en: "A party", correct: false }, { it: "Un concerto", en: "A concert", correct: false }] },
      { it: "Dov'è l'incendio?", en: "Where is the fire?", options: [{ it: "Al primo piano", en: "On the first floor", correct: false }, { it: "Al terzo piano", en: "On the third floor", correct: true }, { it: "Al quinto piano", en: "On the fifth floor", correct: false }] },
    ],
    [{ it: "l'incendio", en: "fire" }, { it: "all'interno", en: "inside" }],
    { question: "Cosa dice per segnalare un incendio?", questionTranslation: "What do you say to report a fire?", options: [
      { text: "Pronto, c'è un incendio in via Roma 25!", translation: "Hello, there is a fire at Via Roma 25!", correct: true },
      { text: "Pronto, vorrei un caffè.", translation: "Hello, I'd like a coffee.", correct: false },
      { text: "Pronto, che tempo fa?", translation: "Hello, what's the weather like?", correct: false }
    ] },
  );

  await addExperience(45, "Chiamare la Polizia", 1, "Emergency",
    [
      { it: "Pronto, chiamo per denunciare un furto.", en: "Hello, I'm calling to report a theft.", speaker: "person" },
      { it: "Quando è successo?", en: "When did it happen?", speaker: "operator" },
      { it: "Pochi minuti fa, sono ancora qui.", en: "A few minutes ago, I'm still here.", speaker: "person" },
      { it: "Le mandiamo una volante. Non si muova.", en: "We'll send a patrol car. Don't move.", speaker: "operator" },
      { it: "Va bene, aspetto qui fuori.", en: "Alright, I'll wait outside here.", speaker: "person" },
    ],
    [{ it: "il furto", en: "theft", article: "il" }, { it: "la volante", en: "patrol car", article: "la" }, { it: "muoversi", en: "to move" }],
    [
      { it: "Perché chiama la polizia?", en: "Why is the person calling the police?", options: [{ it: "Per denunciare un furto", en: "To report a theft", correct: true }, { it: "Per chiedere un'informazione", en: "To ask for information", correct: false }, { it: "Per salutare", en: "To say hello", correct: false }] },
      { it: "Cosa manda l'operatore?", en: "What does the operator send?", options: [{ it: "Un'ambulanza", en: "An ambulance", correct: false }, { it: "Una volante", en: "A patrol car", correct: true }, { it: "Un idraulico", en: "A plumber", correct: false }] },
    ],
    [{ it: "denunciare", en: "to report" }, { it: "il furto", en: "theft" }],
    { question: "Cosa dice per chiamare la polizia?", questionTranslation: "What do you say to call the police?", options: [
      { text: "Pronto, vorrei denunciare un furto.", translation: "Hello, I'd like to report a theft.", correct: true },
      { text: "Pronto, posso parlare con Mario?", translation: "Hello, can I speak to Mario?", correct: false },
      { text: "Pronto, c'è un problema con la macchina.", translation: "Hello, there's a problem with the car.", correct: false }
    ] },
  );

  await addExperience(45, "Chiedere Aiuto dopo un Incidente", 1, "Emergency",
    [
      { it: "Aiuto! Mio marito è caduto dalle scale!", en: "Help! My husband fell down the stairs!", speaker: "person" },
      { it: "Dove siete ora?", en: "Where are you now?", speaker: "operator" },
      { it: "Siamo in casa, in via Dante 10.", en: "We're at home, at Via Dante 10.", speaker: "person" },
      { it: "Ha battuto la testa?", en: "Did he hit his head?", speaker: "operator" },
      { it: "Sì, e non riesce ad alzarsi.", en: "Yes, and he can't get up.", speaker: "person" },
    ],
    [{ it: "cadere", en: "to fall" }, { it: "la scala", en: "stairs", article: "la" }, { it: "la testa", en: "head", article: "la" }],
    [
      { it: "Cosa è successo al marito?", en: "What happened to the husband?", options: [{ it: "È caduto dalle scale", en: "He fell down the stairs", correct: true }, { it: "Ha perso le chiavi", en: "He lost the keys", correct: false }, { it: "Ha mangiato troppo", en: "He ate too much", correct: false }] },
      { it: "Il marito può alzarsi?", en: "Can the husband get up?", options: [{ it: "Sì, sta bene", en: "Yes, he's fine", correct: false }, { it: "No, non riesce ad alzarsi", en: "No, he can't get up", correct: true }, { it: "Non lo so", en: "I don't know", correct: false }] },
    ],
    [{ it: "aiuto", en: "help" }, { it: "battere", en: "to hit" }],
    { question: "Cosa grida per chiedere aiuto?", questionTranslation: "What do you shout to ask for help?", options: [
      { text: "Aiuto! È caduto dalle scale!", translation: "Help! He fell down the stairs!", correct: true },
      { text: "Aiuto! Ho fame!", translation: "Help! I'm hungry!", correct: false },
      { text: "Aiuto! Ho perso l'autobus!", translation: "Help! I missed the bus!", correct: false }
    ] },
  );

  // === Module 46 (A2, level=1) - At the Hospital ===

  await addExperience(46, "Arrivare al Pronto Soccorso", 1, "Emergency",
    [
      { it: "Buongiorno, questo è il pronto soccorso?", en: "Good morning, is this the emergency room?", speaker: "person" },
      { it: "Sì, si accomodi. Ha la tessera sanitaria?", en: "Yes, come in. Do you have your health card?", speaker: "nurse" },
      { it: "Ecco qui la mia tessera sanitaria.", en: "Here is my health card.", speaker: "person" },
      { it: "Bene, si sieda in sala d'attesa. La chiameremo.", en: "Good, have a seat in the waiting room. We'll call you.", speaker: "nurse" },
      { it: "Grazie, aspetterò.", en: "Thank you, I'll wait.", speaker: "person" },
    ],
    [{ it: "il pronto soccorso", en: "emergency room", article: "il" }, { it: "la tessera sanitaria", en: "health card", article: "la" }, { it: "la sala d'attesa", en: "waiting room", article: "la" }],
    [
      { it: "Cosa chiede l'infermiera?", en: "What does the nurse ask for?", options: [{ it: "La tessera sanitaria", en: "The health card", correct: true }, { it: "Il passaporto", en: "The passport", correct: false }, { it: "La patente", en: "The driver's license", correct: false }] },
      { it: "Dove deve sedersi il paziente?", en: "Where should the patient sit?", options: [{ it: "In sala d'attesa", en: "In the waiting room", correct: true }, { it: "Fuori dall'ospedale", en: "Outside the hospital", correct: false }, { it: "In ufficio", en: "In the office", correct: false }] },
    ],
    [{ it: "accomodarsi", en: "to come in" }, { it: "chiamare", en: "to call" }],
    { question: "Cosa mostra all'arrivo al pronto soccorso?", questionTranslation: "What do you show upon arrival at the emergency room?", options: [
      { text: "Mostro la mia tessera sanitaria.", translation: "I show my health card.", correct: true },
      { text: "Mostro la mia carta di credito.", translation: "I show my credit card.", correct: false },
      { text: "Mostro il biglietto del treno.", translation: "I show my train ticket.", correct: false }
    ] },
  );

  await addExperience(46, "Registrarsi all'Accettazione", 1, "Emergency",
    [
      { it: "Buongiorno, devo registrarmi per la visita.", en: "Good morning, I need to register for the examination.", speaker: "person" },
      { it: "Come si chiama e qual è la sua data di nascita?", en: "What's your name and date of birth?", speaker: "nurse" },
      { it: "Mi chiamo Marco Rossi, sono nato il 15 marzo 1990.", en: "My name is Marco Rossi, I was born on March 15, 1990.", speaker: "person" },
      { it: "Ha allergie a qualche farmaco?", en: "Do you have allergies to any medication?", speaker: "nurse" },
      { it: "No, nessuna allergia che io sappia.", en: "No, no allergies that I know of.", speaker: "person" },
    ],
    [{ it: "la registrazione", en: "registration", article: "la" }, { it: "la data di nascita", en: "date of birth", article: "la" }, { it: "l'allergia", en: "allergy", article: "l'" }],
    [
      { it: "Cosa chiede l'infermiera per la registrazione?", en: "What does the nurse ask for registration?", options: [{ it: "Nome e data di nascita", en: "Name and date of birth", correct: true }, { it: "Numero di telefono", en: "Phone number", correct: false }, { it: "Indirizzo email", en: "Email address", correct: false }] },
      { it: "Chiede anche informazioni sulle allergie?", en: "Does she also ask about allergies?", options: [{ it: "Sì, chiede se ha allergie", en: "Yes, she asks if he has allergies", correct: true }, { it: "No, non chiede nulla", en: "No, she doesn't ask anything", correct: false }, { it: "Solo se è minorenne", en: "Only if he is a minor", correct: false }] },
    ],
    [{ it: "registrarsi", en: "to register" }, { it: "la visita", en: "examination" }],
    { question: "Cosa dice per registrarsi?", questionTranslation: "What do you say to register?", options: [
      { text: "Buongiorno, devo registrarmi per la visita.", translation: "Good morning, I need to register for the examination.", correct: true },
      { text: "Buongiorno, vorrei un caffè.", translation: "Good morning, I'd like a coffee.", correct: false },
      { text: "Buongiorno, dov'è l'uscita?", translation: "Good morning, where is the exit?", correct: false }
    ] },
  );

  await addExperience(46, "Descrivere i Sintomi", 1, "Emergency",
    [
      { it: "Dottore, non mi sento bene.", en: "Doctor, I don't feel well.", speaker: "person" },
      { it: "Che sintomi ha?", en: "What symptoms do you have?", speaker: "doctor" },
      { it: "Ho la febbre alta e mal di testa.", en: "I have a high fever and a headache.", speaker: "person" },
      { it: "Da quanto tempo ha questi sintomi?", en: "How long have you had these symptoms?", speaker: "doctor" },
      { it: "Da ieri sera, circa 24 ore.", en: "Since last night, about 24 hours.", speaker: "person" },
    ],
    [{ it: "il sintomo", en: "symptom", article: "il" }, { it: "la febbre", en: "fever", article: "la" }, { it: "il mal di testa", en: "headache", article: "il" }],
    [
      { it: "Quali sintomi ha il paziente?", en: "What symptoms does the patient have?", options: [{ it: "Febbre alta e mal di testa", en: "High fever and headache", correct: true }, { it: "Mal di pancia", en: "Stomach ache", correct: false }, { it: "Dolore al ginocchio", en: "Knee pain", correct: false }] },
      { it: "Da quanto tempo ha questi sintomi?", en: "How long has he had these symptoms?", options: [{ it: "Da una settimana", en: "For a week", correct: false }, { it: "Da ieri sera", en: "Since last night", correct: true }, { it: "Da un mese", en: "For a month", correct: false }] },
    ],
    [{ it: "sentirsi", en: "to feel" }, { it: "alto", en: "high" }],
    { question: "Cosa dice al dottore per descrivere i sintomi?", questionTranslation: "What do you say to the doctor to describe symptoms?", options: [
      { text: "Ho la febbre alta e mal di testa.", translation: "I have a high fever and a headache.", correct: true },
      { text: "Ho fame e sete.", translation: "I'm hungry and thirsty.", correct: false },
      { text: "Ho comprato una macchina nuova.", translation: "I bought a new car.", correct: false }
    ] },
  );

  await addExperience(46, "Aspettare la Visita", 1, "Emergency",
    [
      { it: "Scusi, quanto devo ancora aspettare?", en: "Excuse me, how much longer do I have to wait?", speaker: "person" },
      { it: "Ancora qualche minuto, c'è molta gente.", en: "A few more minutes, there are many people.", speaker: "nurse" },
      { it: "Ma ho molto dolore, non posso aspettare tanto.", en: "But I'm in a lot of pain, I can't wait that long.", speaker: "person" },
      { it: "Capisco, provo a sollecitare la sua visita.", en: "I understand, I'll try to expedite your examination.", speaker: "nurse" },
      { it: "Grazie, lo apprezzo molto.", en: "Thank you, I really appreciate it.", speaker: "person" },
    ],
    [{ it: "aspettare", en: "to wait" }, { it: "sollecitare", en: "to expedite" }, { it: "apprezzare", en: "to appreciate" }],
    [
      { it: "Cosa chiede il paziente alla infermiera?", en: "What does the patient ask the nurse?", options: [{ it: "Quanto deve aspettare", en: "How long he has to wait", correct: true }, { it: "Dov'è il bagno", en: "Where the bathroom is", correct: false }, { it: "Che ora è", en: "What time it is", correct: false }] },
      { it: "Cosa offre di fare l'infermiera?", en: "What does the nurse offer to do?", options: [{ it: "Chiamare un taxi", en: "Call a taxi", correct: false }, { it: "Sollecitare la visita", en: "Expedite the examination", correct: true }, { it: "Dare una medicina", en: "Give some medicine", correct: false }] },
    ],
    [{ it: "ancora", en: "still/yet" }, { it: "la gente", en: "people" }],
    { question: "Cosa dice se ha molto dolore e deve aspettare?", questionTranslation: "What do you say if you're in a lot of pain and have to wait?", options: [
      { text: "Ho molto dolore, non posso aspettare tanto.", translation: "I'm in a lot of pain, I can't wait that long.", correct: true },
      { text: "Va bene, aspetto con calma.", translation: "It's fine, I'll wait calmly.", correct: false },
      { text: "Me ne vado.", translation: "I'm leaving.", correct: false }
    ] },
  );

  await addExperience(46, "Ricevere le Prime Indicazioni", 1, "Emergency",
    [
      { it: "Dottore, cosa devo fare?", en: "Doctor, what should I do?", speaker: "person" },
      { it: "Deve fare una radiografia al braccio.", en: "You need to get an X-ray of your arm.", speaker: "doctor" },
      { it: "Dove devo andare per la radiografia?", en: "Where do I go for the X-ray?", speaker: "person" },
      { it: "Al piano di sotto, stanza 3. Poi torni qui.", en: "Downstairs, room 3. Then come back here.", speaker: "doctor" },
      { it: "Va bene, vado subito. Grazie.", en: "Alright, I'll go right away. Thank you.", speaker: "person" },
    ],
    [{ it: "la radiografia", en: "X-ray", article: "la" }, { it: "il braccio", en: "arm", article: "il" }, { it: "la stanza", en: "room", article: "la" }],
    [
      { it: "Cosa deve fare il paziente?", en: "What does the patient need to do?", options: [{ it: "Fare una radiografia", en: "Get an X-ray", correct: true }, { it: "Prendere una medicina", en: "Take some medicine", correct: false }, { it: "Andare a casa", en: "Go home", correct: false }] },
      { it: "Dove si fa la radiografia?", en: "Where is the X-ray done?", options: [{ it: "Al piano di sopra", en: "Upstairs", correct: false }, { it: "Al piano di sotto, stanza 3", en: "Downstairs, room 3", correct: true }, { it: "In un altro ospedale", en: "At another hospital", correct: false }] },
    ],
    [{ it: "dovere", en: "must/have to" }, { it: "tornare", en: "to come back" }],
    { question: "Cosa chiede dopo la visita?", questionTranslation: "What do you ask after the examination?", options: [
      { text: "Cosa devo fare, dottore?", translation: "What should I do, doctor?", correct: true },
      { text: "Quanto costa la visita?", translation: "How much does the examination cost?", correct: false },
      { text: "Posso andare al ristorante?", translation: "Can I go to the restaurant?", correct: false }
    ] },
  );

  // === Module 47 (B1, level=2) - Describing an Accident ===

  await addExperience(47, "Descrivere un Incidente Stradale", 2, "Emergency",
    [
      { it: "Cosa è successo esattamente?", en: "What exactly happened?", speaker: "doctor" },
      { it: "Ero in macchina e un'auto mi ha tamponato.", en: "I was in my car and another car rear-ended me.", speaker: "person" },
      { it: "A che velocità andava l'altra auto?", en: "How fast was the other car going?", speaker: "doctor" },
      { it: "Non so, ma l'impatto è stato forte. Ho battuto il collo.", en: "I don't know, but the impact was strong. I hit my neck.", speaker: "person" },
      { it: "Dobbiamo controllare il colpo di frusta.", en: "We need to check for whiplash.", speaker: "doctor" },
    ],
    [{ it: "tamponare", en: "to rear-end" }, { it: "l'impatto", en: "impact", article: "l'" }, { it: "il colpo di frusta", en: "whiplash", article: "il" }],
    [
      { it: "Cosa è successo al paziente?", en: "What happened to the patient?", options: [{ it: "Ha tamponato un'auto", en: "He rear-ended a car", correct: false }, { it: "Un'auto lo ha tamponato", en: "Another car rear-ended him", correct: true }, { it: "È caduto dalla moto", en: "He fell off his motorcycle", correct: false }] },
      { it: "Quale parte del corpo si è fatta male?", en: "Which body part did he hurt?", options: [{ it: "Il ginocchio", en: "The knee", correct: false }, { it: "Il collo", en: "The neck", correct: true }, { it: "La gamba", en: "The leg", correct: false }] },
    ],
    [{ it: "esattamente", en: "exactly" }, { it: "forte", en: "strong" }, { it: "controllare", en: "to check" }],
    { question: "Come descrive l'incidente al dottore?", questionTranslation: "How do you describe the accident to the doctor?", options: [
      { text: "Ero in macchina e un'auto mi ha tamponato.", translation: "I was in my car and another car rear-ended me.", correct: true },
      { text: "Ho preso l'autobus e sono arrivato tardi.", translation: "I took the bus and arrived late.", correct: false },
      { text: "Stavo camminando e ho visto un incidente.", translation: "I was walking and I saw an accident.", correct: false }
    ] },
  );

  await addExperience(47, "Spiegare le Proprie Ferite", 2, "Emergency",
    [
      { it: "Mi sono tagliato con un vetro rotto.", en: "I cut myself with broken glass.", speaker: "person" },
      { it: "La ferita è profonda. Perde molto sangue?", en: "The wound is deep. Is it bleeding a lot?", speaker: "doctor" },
      { it: "Sì, non smette di sanguinare.", en: "Yes, it won't stop bleeding.", speaker: "person" },
      { it: "Facciamo una medicazione e forse qualche punto di sutura.", en: "Let's do a dressing and maybe some stitches.", speaker: "doctor" },
      { it: "Farà male?", en: "Will it hurt?", speaker: "person" },
    ],
    [{ it: "tagliarsi", en: "to cut oneself" }, { it: "la ferita", en: "wound", article: "la" }, { it: "il punto di sutura", en: "stitch", article: "il" }],
    [
      { it: "Come si è ferito il paziente?", en: "How did the patient get hurt?", options: [{ it: "Tagliandosi con un vetro", en: "Cutting himself with glass", correct: true }, { it: "Cadendo dalla bicicletta", en: "Falling off his bicycle", correct: false }, { it: "Bruciandosi con l'acqua", en: "Burning himself with water", correct: false }] },
      { it: "Cosa potrebbe servire per la ferita?", en: "What might the wound need?", options: [{ it: "Una fasciatura", en: "A bandage", correct: false }, { it: "Dei punti di sutura", en: "Some stitches", correct: true }, { it: "Una crema", en: "A cream", correct: false }] },
    ],
    [{ it: "il sangue", en: "blood" }, { it: "sanguinare", en: "to bleed" }, { it: "la medicazione", en: "dressing" }],
    { question: "Cosa dice per spiegare come si è ferito?", questionTranslation: "What do you say to explain how you got hurt?", options: [
      { text: "Mi sono tagliato con un vetro rotto.", translation: "I cut myself with broken glass.", correct: true },
      { text: "Mi sono comprato un gelato.", translation: "I bought myself an ice cream.", correct: false },
      { text: "Ho visto un film interessante.", translation: "I saw an interesting movie.", correct: false }
    ] },
  );

  await addExperience(47, "Raccontare una Caduta", 2, "Emergency",
    [
      { it: "Sono scivolato sul pavimento bagnato.", en: "I slipped on the wet floor.", speaker: "person" },
      { it: "Ha battuto la testa o la schiena?", en: "Did you hit your head or your back?", speaker: "doctor" },
      { it: "Ho battuto la schiena e ora non sento la gamba destra.", en: "I hit my back and now I can't feel my right leg.", speaker: "person" },
      { it: "Potrebbe essere una lesione alla colonna vertebrale. Facciamo una TAC.", en: "It could be a spinal injury. Let's do a CT scan.", speaker: "doctor" },
      { it: "È grave, dottore?", en: "Is it serious, doctor?", speaker: "person" },
    ],
    [{ it: "scivolare", en: "to slip" }, { it: "la schiena", en: "back", article: "la" }, { it: "la colonna vertebrale", en: "spine", article: "la" }],
    [
      { it: "Come è caduto il paziente?", en: "How did the patient fall?", options: [{ it: "Scivolando sul pavimento bagnato", en: "Slipping on a wet floor", correct: true }, { it: "Inciampando su un gradino", en: "Tripping on a step", correct: false }, { it: "Saltando da una sedia", en: "Jumping off a chair", correct: false }] },
      { it: "Quale esame potrebbe servire?", en: "Which exam might be needed?", options: [{ it: "Una radiografia", en: "An X-ray", correct: false }, { it: "Una TAC", en: "A CT scan", correct: true }, { it: "Un'ecografia", en: "An ultrasound", correct: false }] },
    ],
    [{ it: "bagnato", en: "wet" }, { it: "la lesione", en: "injury" }],
    { question: "Cosa dice al dottore dopo la caduta?", questionTranslation: "What do you tell the doctor after the fall?", options: [
      { text: "Non sento la gamba destra dopo la caduta.", translation: "I can't feel my right leg after the fall.", correct: true },
      { text: "Ho fame dopo la caduta.", translation: "I'm hungry after the fall.", correct: false },
      { text: "La caduta mi ha fatto venire sonno.", translation: "The fall made me sleepy.", correct: false }
    ] },
  );

  await addExperience(47, "Descrivere un Infortunio sul Lavoro", 2, "Emergency",
    [
      { it: "Mi sono fatto male al lavoro. Sono caduto da una scala.", en: "I got hurt at work. I fell off a ladder.", speaker: "person" },
      { it: "Che tipo di lavoro fa?", en: "What kind of work do you do?", speaker: "doctor" },
      { it: "Sono muratore, stavo lavorando su un'impalcatura.", en: "I'm a bricklayer, I was working on scaffolding.", speaker: "person" },
      { it: "Ha dolori alla spalla o alla schiena?", en: "Do you have pain in your shoulder or back?", speaker: "doctor" },
      { it: "Soprattutto alla spalla destra, non riesco ad alzare il braccio.", en: "Especially my right shoulder, I can't lift my arm.", speaker: "person" },
    ],
    [{ it: "l'infortunio", en: "injury/accident", article: "l'" }, { it: "l'impalcatura", en: "scaffolding", article: "l'" }, { it: "la spalla", en: "shoulder", article: "la" }],
    [
      { it: "Dove lavora il paziente?", en: "Where does the patient work?", options: [{ it: "In ufficio", en: "In an office", correct: false }, { it: "In un cantiere edile", en: "On a construction site", correct: true }, { it: "In un ristorante", en: "In a restaurant", correct: false }] },
      { it: "Quale parte del corpo è più dolorante?", en: "Which part of the body hurts most?", options: [{ it: "La spalla destra", en: "The right shoulder", correct: true }, { it: "Il ginocchio sinistro", en: "The left knee", correct: false }, { it: "La caviglia", en: "The ankle", correct: false }] },
    ],
    [{ it: "il muratore", en: "bricklayer" }, { it: "alzare", en: "to lift" }],
    { question: "Cosa dice per descrivere l'infortunio sul lavoro?", questionTranslation: "What do you say to describe the work injury?", options: [
      { text: "Mi sono fatto male al lavoro cadendo da una scala.", translation: "I got hurt at work falling off a ladder.", correct: true },
      { text: "Ho finito il mio turno di lavoro.", translation: "I finished my work shift.", correct: false },
      { text: "Il mio capo mi ha dato un aumento.", translation: "My boss gave me a raise.", correct: false }
    ] },
  );

  await addExperience(47, "Spiegare un Malore Improvviso", 2, "Emergency",
    [
      { it: "Dottore, improvvisamente ho avuto un forte dolore al petto.", en: "Doctor, I suddenly had a sharp pain in my chest.", speaker: "person" },
      { it: "Il dolore si estende al braccio sinistro?", en: "Does the pain radiate to your left arm?", speaker: "doctor" },
      { it: "Sì, e mi sento anche il fiato corto.", en: "Yes, and I also feel short of breath.", speaker: "person" },
      { it: "Potrebbe essere un infarto. Le facciamo subito un elettrocardiogramma.", en: "It could be a heart attack. We'll do an ECG right away.", speaker: "doctor" },
      { it: "Fa' presto, dottore, mi sento male.", en: "Hurry, doctor, I feel unwell.", speaker: "person" },
    ],
    [{ it: "improvvisamente", en: "suddenly" }, { it: "il fiato corto", en: "shortness of breath", article: "il" }, { it: "l'infarto", en: "heart attack", article: "l'" }],
    [
      { it: "Quali sintomi ha il paziente?", en: "What symptoms does the patient have?", options: [{ it: "Dolore al petto e fiato corto", en: "Chest pain and shortness of breath", correct: true }, { it: "Mal di pancia e nausea", en: "Stomach ache and nausea", correct: false }, { it: "Mal di gola e tosse", en: "Sore throat and cough", correct: false }] },
      { it: "Quale esame vuole fare il dottore?", en: "Which test does the doctor want to do?", options: [{ it: "Una radiografia", en: "An X-ray", correct: false }, { it: "Un elettrocardiogramma", en: "An ECG", correct: true }, { it: "Un'analisi del sangue", en: "A blood test", correct: false }] },
    ],
    [{ it: "estendersi", en: "to radiate" }, { it: "elettrocardiogramma", en: "ECG" }],
    { question: "Come spiega un malore improvviso?", questionTranslation: "How do you explain a sudden illness?", options: [
      { text: "Ho avuto un forte dolore al petto e mi sento il fiato corto.", translation: "I had a sharp chest pain and feel short of breath.", correct: true },
      { text: "Ho mangiato troppo e ho mal di stomaco.", translation: "I ate too much and have a stomach ache.", correct: false },
      { text: "Ho sonno e voglio dormire.", translation: "I'm sleepy and want to sleep.", correct: false }
    ] },
  );

  // === Module 48 (B1, level=2) - At the Pharmacy (Emergency) ===

  await addExperience(48, "Cercare una Farmacia di Turno", 2, "Emergency",
    [
      { it: "Buonasera, c'è una farmacia di turno qui vicino?", en: "Good evening, is there an on-duty pharmacy nearby?", speaker: "person" },
      { it: "Sì, la farmacia in piazza del Duomo è aperta fino a mezzanotte.", en: "Yes, the pharmacy in Piazza del Duomo is open until midnight.", speaker: "pharmacist" },
      { it: "Ha l'orario affisso fuori?", en: "Do you have the hours posted outside?", speaker: "person" },
      { it: "C'è il cartello con i turni delle farmacie della zona.", en: "There's a sign with the duty rotations for pharmacies in the area.", speaker: "pharmacist" },
      { it: "Grazie, vado subito a controllare.", en: "Thank you, I'll go check right away.", speaker: "person" },
    ],
    [{ it: "la farmacia di turno", en: "on-duty pharmacy", article: "la" }, { it: "aperto", en: "open" }, { it: "il cartello", en: "sign", article: "il" }],
    [
      { it: "Cosa cerca il cliente?", en: "What is the customer looking for?", options: [{ it: "Una farmacia di turno", en: "An on-duty pharmacy", correct: true }, { it: "Un supermercato", en: "A supermarket", correct: false }, { it: "Un ristorante", en: "A restaurant", correct: false }] },
      { it: "Fino a che ora è aperta la farmacia?", en: "Until what time is the pharmacy open?", options: [{ it: "Fino alle 22", en: "Until 10 PM", correct: false }, { it: "Fino a mezzanotte", en: "Until midnight", correct: true }, { it: "Fino alle 20", en: "Until 8 PM", correct: false }] },
    ],
    [{ it: "la farmacia", en: "pharmacy" }, { it: "aperto", en: "open" }, { it: "la zona", en: "area" }],
    { question: "Cosa chiede per trovare una farmacia aperta?", questionTranslation: "What do you ask to find an open pharmacy?", options: [
      { text: "Buonasera, c'è una farmacia di turno qui vicino?", translation: "Good evening, is there an on-duty pharmacy nearby?", correct: true },
      { text: "Buonasera, vorrei prenotare un tavolo.", translation: "Good evening, I'd like to book a table.", correct: false },
      { text: "Buonasera, dove posso comprare un giornale?", translation: "Good evening, where can I buy a newspaper?", correct: false }
    ] },
  );

  await addExperience(48, "Chiedere un Farmaco per il Dolore", 2, "Emergency",
    [
      { it: "Buongiorno, ho un forte mal di testa. Cosa mi consiglia?", en: "Good morning, I have a bad headache. What do you recommend?", speaker: "person" },
      { it: "Le serve qualcosa di specifico o vuole un antidolorifico generico?", en: "Do you need something specific or would you like a generic painkiller?", speaker: "pharmacist" },
      { it: "Un antidolorifico generico va bene. Quale mi consiglia?", en: "A generic painkiller is fine. Which one do you recommend?", speaker: "person" },
      { it: "Le consiglio l'ibuprofene. Può prenderne una compressa ogni 8 ore.", en: "I recommend ibuprofen. You can take one tablet every 8 hours.", speaker: "pharmacist" },
      { it: "Va bene, lo prendo. Grazie.", en: "Alright, I'll take it. Thanks.", speaker: "person" },
    ],
    [{ it: "l'antidolorifico", en: "painkiller", article: "l'" }, { it: "la compressa", en: "tablet", article: "la" }, { it: "consigliare", en: "to recommend" }],
    [
      { it: "Cosa chiede il cliente?", en: "What does the customer ask for?", options: [{ it: "Un antidolorifico per il mal di testa", en: "A painkiller for a headache", correct: true }, { it: "Una medicina per la tosse", en: "Medicine for cough", correct: false }, { it: "Una crema per la pelle", en: "Skin cream", correct: false }] },
      { it: "Ogni quante ore può prendere l'ibuprofene?", en: "How often can he take ibuprofen?", options: [{ it: "Ogni 4 ore", en: "Every 4 hours", correct: false }, { it: "Ogni 6 ore", en: "Every 6 hours", correct: false }, { it: "Ogni 8 ore", en: "Every 8 hours", correct: true }] },
    ],
    [{ it: "specifico", en: "specific" }, { it: "generico", en: "generic" }],
    { question: "Cosa dice per chiedere un farmaco per il dolore?", questionTranslation: "What do you say to ask for pain medication?", options: [
      { text: "Ho un forte mal di testa. Cosa mi consiglia?", translation: "I have a bad headache. What do you recommend?", correct: true },
      { text: "Vorrei un caffè, per favore.", translation: "I'd like a coffee, please.", correct: false },
      { text: "Posso usare il telefono?", translation: "Can I use the phone?", correct: false }
    ] },
  );

  await addExperience(48, "Richiedere un Antibiotico", 2, "Emergency",
    [
      { it: "Buongiorno, il medico mi ha prescritto un antibiotico.", en: "Good morning, the doctor prescribed me an antibiotic.", speaker: "person" },
      { it: "Mi mostra la ricetta medica?", en: "Can you show me the prescription?", speaker: "pharmacist" },
      { it: "Ecco la ricetta. È per un'infezione alla gola.", en: "Here's the prescription. It's for a throat infection.", speaker: "person" },
      { it: "L'antibiotico va preso per 7 giorni, anche se si sente meglio.", en: "The antibiotic must be taken for 7 days, even if you feel better.", speaker: "pharmacist" },
      { it: "Ho capito. Ci sono effetti collaterali?", en: "I understand. Are there any side effects?", speaker: "person" },
    ],
    [{ it: "l'antibiotico", en: "antibiotic", article: "l'" }, { it: "la ricetta medica", en: "prescription", article: "la" }, { it: "l'effetto collaterale", en: "side effect", article: "l'" }],
    [
      { it: "Cosa deve mostrare il cliente?", en: "What does the customer need to show?", options: [{ it: "La carta d'identità", en: "ID card", correct: false }, { it: "La ricetta medica", en: "The prescription", correct: true }, { it: "La tessera sanitaria", en: "The health card", correct: false }] },
      { it: "Per quanti giorni va preso l'antibiotico?", en: "For how many days should the antibiotic be taken?", options: [{ it: "3 giorni", en: "3 days", correct: false }, { it: "7 giorni", en: "7 days", correct: true }, { it: "10 giorni", en: "10 days", correct: false }] },
    ],
    [{ it: "prescrivere", en: "to prescribe" }, { it: "l'infezione", en: "infection" }],
    { question: "Cosa dice per ritirare un antibiotico?", questionTranslation: "What do you say to pick up an antibiotic?", options: [
      { text: "Il medico mi ha prescritto un antibiotico. Ecco la ricetta.", translation: "The doctor prescribed me an antibiotic. Here's the prescription.", correct: true },
      { text: "Vorrei comprare delle caramelle.", translation: "I'd like to buy some candy.", correct: false },
      { text: "Cerco un regalo per un amico.", translation: "I'm looking for a gift for a friend.", correct: false }
    ] },
  );

  await addExperience(48, "Comprare Medicinali per la Febbre", 2, "Emergency",
    [
      { it: "Buongiorno, mio figlio ha la febbre alta, 39 gradi.", en: "Good morning, my son has a high fever, 39 degrees.", speaker: "person" },
      { it: "Quanti anni ha suo figlio?", en: "How old is your son?", speaker: "pharmacist" },
      { it: "Ha 4 anni. Cosa posso dargli?", en: "He's 4 years old. What can I give him?", speaker: "person" },
      { it: "Può dare il paracetamolo sciroppo, 5 ml ogni 6 ore.", en: "You can give paracetamol syrup, 5 ml every 6 hours.", speaker: "pharmacist" },
      { it: "Va bene. Ha anche dei cerotti rinfrescanti?", en: "Alright. Do you also have cooling patches?", speaker: "person" },
    ],
    [{ it: "la febbre", en: "fever", article: "la" }, { it: "lo sciroppo", en: "syrup", article: "lo" }, { it: "il cerotto rinfrescante", en: "cooling patch", article: "il" }],
    [
      { it: "Chi ha la febbre?", en: "Who has a fever?", options: [{ it: "Il cliente", en: "The customer", correct: false }, { it: "Il figlio del cliente", en: "The customer's son", correct: true }, { it: "Il farmacista", en: "The pharmacist", correct: false }] },
      { it: "Quanto sciroppo può dare al bambino?", en: "How much syrup can he give the child?", options: [{ it: "5 ml ogni 6 ore", en: "5 ml every 6 hours", correct: true }, { it: "10 ml ogni 4 ore", en: "10 ml every 4 hours", correct: false }, { it: "15 ml ogni 8 ore", en: "15 ml every 8 hours", correct: false }] },
    ],
    [{ it: "il figlio", en: "son" }, { it: "il paracetamolo", en: "paracetamol" }],
    { question: "Cosa dice per comprare medicine per la febbre del bambino?", questionTranslation: "What do you say to buy medicine for a child's fever?", options: [
      { text: "Mio figlio ha la febbre alta, 39 gradi. Cosa posso dargli?", translation: "My son has a high fever, 39 degrees. What can I give him?", correct: true },
      { text: "Mio figlio vuole un gelato.", translation: "My son wants an ice cream.", correct: false },
      { text: "Mio figlio ha perso il giocattolo.", translation: "My son lost his toy.", correct: false }
    ] },
  );

  await addExperience(48, "Chiedere un Farmaco per un'Allergia", 2, "Emergency",
    [
      { it: "Buongiorno, ho una reazione allergica. Il mio viso è gonfio.", en: "Good morning, I'm having an allergic reaction. My face is swollen.", speaker: "person" },
      { it: "Da quando ha questi sintomi?", en: "When did these symptoms start?", speaker: "pharmacist" },
      { it: "Da circa un'ora, dopo aver mangiato delle arachidi.", en: "About an hour ago, after eating some peanuts.", speaker: "person" },
      { it: "Ha difficoltà a respirare?", en: "Do you have difficulty breathing?", speaker: "pharmacist" },
      { it: "Un po'. Mi dia qualcosa per favore.", en: "A little. Please give me something.", speaker: "person" },
    ],
    [{ it: "la reazione allergica", en: "allergic reaction", article: "la" }, { it: "gonfio", en: "swollen" }, { it: "respirare", en: "to breathe" }],
    [
      { it: "Cosa ha causato la reazione?", en: "What caused the reaction?", options: [{ it: "Delle arachidi", en: "Some peanuts", correct: true }, { it: "Un farmaco", en: "A medication", correct: false }, { it: "Una puntura d'insetto", en: "An insect sting", correct: false }] },
      { it: "Quali sintomi ha il cliente?", en: "What symptoms does the customer have?", options: [{ it: "Viso gonfio e difficoltà a respirare", en: "Swollen face and difficulty breathing", correct: true }, { it: "Mal di pancia e vomito", en: "Stomach ache and vomiting", correct: false }, { it: "Mal di testa e febbre", en: "Headache and fever", correct: false }] },
    ],
    [{ it: "la reazione", en: "reaction" }, { it: "l'arachide", en: "peanut" }],
    { question: "Cosa dice per una reazione allergica?", questionTranslation: "What do you say for an allergic reaction?", options: [
      { text: "Ho una reazione allergica, il mio viso è gonfio.", translation: "I'm having an allergic reaction, my face is swollen.", correct: true },
      { text: "Ho sonno e voglio dormire.", translation: "I'm sleepy and want to sleep.", correct: false },
      { text: "Ho caldo, vorrei un po' d'acqua.", translation: "I'm hot, I'd like some water.", correct: false }
    ] },
  );

  // === Module 49 (B2, level=3) - Police & Documents ===

  await addExperience(49, "Denunciare un Furto", 3, "Emergency",
    [
      { it: "Buongiorno, vorrei denunciare un furto.", en: "Good morning, I'd like to report a theft.", speaker: "person" },
      { it: "Cosa le hanno rubato e dove?", en: "What was stolen from you and where?", speaker: "police_officer" },
      { it: "Mi hanno rubato il portafoglio mentre ero sull'autobus.", en: "They stole my wallet while I was on the bus.", speaker: "person" },
      { it: "Ricorda il momento preciso o la linea dell'autobus?", en: "Do you remember the exact time or the bus line?", speaker: "police_officer" },
      { it: "Era l'autobus numero 64, intorno alle 14:30.", en: "It was bus number 64, around 2:30 PM.", speaker: "person" },
    ],
    [{ it: "il furto", en: "theft", article: "il" }, { it: "il portafoglio", en: "wallet", article: "il" }, { it: "preciso", en: "exact" }],
    [
      { it: "Cosa è stato rubato?", en: "What was stolen?", options: [{ it: "Il telefono", en: "The phone", correct: false }, { it: "Il portafoglio", en: "The wallet", correct: true }, { it: "La borsa", en: "The bag", correct: false }] },
      { it: "Dove è avvenuto il furto?", en: "Where did the theft occur?", options: [{ it: "Al ristorante", en: "At a restaurant", correct: false }, { it: "Sull'autobus 64", en: "On bus number 64", correct: true }, { it: "In albergo", en: "At the hotel", correct: false }] },
    ],
    [{ it: "rubare", en: "to steal" }, { it: "il ladro", en: "thief" }],
    { question: "Cosa dice per denunciare un furto?", questionTranslation: "What do you say to report a theft?", options: [
      { text: "Buongiorno, vorrei denunciare un furto.", translation: "Good morning, I'd like to report a theft.", correct: true },
      { text: "Buongiorno, vorrei comprare un biglietto.", translation: "Good morning, I'd like to buy a ticket.", correct: false },
      { text: "Buongiorno, vorrei un caffè.", translation: "Good morning, I'd like a coffee.", correct: false }
    ] },
  );

  await addExperience(49, "Descrivere il Ladro", 3, "Emergency",
    [
      { it: "Può descrivere il ladro?", en: "Can you describe the thief?", speaker: "police_officer" },
      { it: "Era un uomo alto, circa trent'anni, con i capelli scuri.", en: "He was a tall man, about thirty years old, with dark hair.", speaker: "person" },
      { it: "Che indumenti indossava?", en: "What clothes was he wearing?", speaker: "police_officer" },
      { it: "Indossava un giubbotto nero e un berretto da baseball.", en: "He was wearing a black jacket and a baseball cap.", speaker: "person" },
      { it: "Ha notato qualche segno particolare?", en: "Did you notice any distinctive features?", speaker: "police_officer" },
    ],
    [{ it: "alto", en: "tall" }, { it: "i capelli scuri", en: "dark hair", article: "i" }, { it: "il giubbotto", en: "jacket", article: "il" }],
    [
      { it: "Che età aveva il ladro?", en: "How old was the thief?", options: [{ it: "Circa vent'anni", en: "About twenty", correct: false }, { it: "Circa trent'anni", en: "About thirty", correct: true }, { it: "Circa quarant'anni", en: "About forty", correct: false }] },
      { it: "Cosa indossava il ladro?", en: "What was the thief wearing?", options: [{ it: "Un giubbotto nero e un berretto", en: "A black jacket and a cap", correct: true }, { it: "Un cappotto blu e una sciarpa", en: "A blue coat and a scarf", correct: false }, { it: "Una maglietta bianca e jeans", en: "A white t-shirt and jeans", correct: false }] },
    ],
    [{ it: "descrivere", en: "to describe" }, { it: "indossare", en: "to wear" }, { it: "il segno particolare", en: "distinctive feature" }],
    { question: "Come descrive il ladro alla polizia?", questionTranslation: "How do you describe the thief to the police?", options: [
      { text: "Era un uomo alto, trent'anni, capelli scuri, giubbotto nero.", translation: "He was a tall man, thirty, dark hair, black jacket.", correct: true },
      { text: "Era una donna con una gonna rossa.", translation: "She was a woman with a red skirt.", correct: false },
      { text: "Non ricordo niente di lui.", translation: "I don't remember anything about him.", correct: false }
    ] },
  );

  await addExperience(49, "Sporgere Denuncia per Smarrimento", 3, "Emergency",
    [
      { it: "Ho perso tutti i miei documenti, compreso il passaporto.", en: "I lost all my documents, including my passport.", speaker: "person" },
      { it: "Dove li ha persi?", en: "Where did you lose them?", speaker: "police_officer" },
      { it: "Non ne sono sicuro, forse al mercato o sull'autobus.", en: "I'm not sure, maybe at the market or on the bus.", speaker: "person" },
      { it: "Compili questo modulo di denuncia per smarrimento.", en: "Fill out this loss report form.", speaker: "police_officer" },
      { it: "Dopo la denuncia, potrò richiedere un duplicato?", en: "After the report, can I request a duplicate?", speaker: "person" },
    ],
    [{ it: "lo smarrimento", en: "loss", article: "lo" }, { it: "la denuncia", en: "report/complaint", article: "la" }, { it: "il duplicato", en: "duplicate", article: "il" }],
    [
      { it: "Cosa ha perso il cliente?", en: "What did the customer lose?", options: [{ it: "Solo il portafoglio", en: "Only the wallet", correct: false }, { it: "Tutti i documenti, compreso il passaporto", en: "All documents, including passport", correct: true }, { it: "Solo la patente", en: "Only the driver's license", correct: false }] },
      { it: "Cosa deve compilare?", en: "What does he need to fill out?", options: [{ it: "Un modulo di denuncia per smarrimento", en: "A loss report form", correct: true }, { it: "Un modulo di reclamo", en: "A complaint form", correct: false }, { it: "Un questionario", en: "A questionnaire", correct: false }] },
    ],
    [{ it: "perdere", en: "to lose" }, { it: "il modulo", en: "form" }],
    { question: "Cosa dice per sporgere denuncia per smarrimento?", questionTranslation: "What do you say to report a loss?", options: [
      { text: "Ho perso tutti i miei documenti, compreso il passaporto.", translation: "I lost all my documents, including my passport.", correct: true },
      { text: "Ho trovato un portafoglio per terra.", translation: "I found a wallet on the ground.", correct: false },
      { text: "Voglio comprare un passaporto nuovo.", translation: "I want to buy a new passport.", correct: false }
    ] },
  );

  await addExperience(49, "Richiedere un Certificato di Denuncia", 3, "Emergency",
    [
      { it: "Mi serve un certificato di denuncia per l'assicurazione.", en: "I need a police report certificate for the insurance.", speaker: "person" },
      { it: "Ha con sé il numero di protocollo della denuncia?", en: "Do you have the protocol number of the report?", speaker: "police_officer" },
      { it: "Sì, ecco il foglio con il numero.", en: "Yes, here's the sheet with the number.", speaker: "person" },
      { it: "Bene, le stampo il certificato. Costa 16 euro di bollo.", en: "Good, I'll print the certificate. It costs 16 euros for the stamp duty.", speaker: "police_officer" },
      { it: "Va bene, pago subito.", en: "Alright, I'll pay right away.", speaker: "person" },
    ],
    [{ it: "il certificato", en: "certificate", article: "il" }, { it: "il numero di protocollo", en: "protocol number", article: "il" }, { it: "il bollo", en: "stamp duty", article: "il" }],
    [
      { it: "Perché serve il certificato?", en: "Why does he need the certificate?", options: [{ it: "Per l'assicurazione", en: "For the insurance", correct: true }, { it: "Per il lavoro", en: "For work", correct: false }, { it: "Per la scuola", en: "For school", correct: false }] },
      { it: "Quanto costa il certificato?", en: "How much does the certificate cost?", options: [{ it: "10 euro", en: "10 euros", correct: false }, { it: "16 euro di bollo", en: "16 euros stamp duty", correct: true }, { it: "25 euro", en: "25 euros", correct: false }] },
    ],
    [{ it: "l'assicurazione", en: "insurance" }, { it: "stampare", en: "to print" }],
    { question: "Cosa dice per richiedere un certificato di denuncia?", questionTranslation: "What do you say to request a police report certificate?", options: [
      { text: "Mi serve un certificato di denuncia per l'assicurazione.", translation: "I need a police report certificate for the insurance.", correct: true },
      { text: "Vorrei una copia della mia carta d'identità.", translation: "I'd like a copy of my ID card.", correct: false },
      { text: "Posso usare la fotocopiatrice?", translation: "Can I use the photocopier?", correct: false }
    ] },
  );

  await addExperience(49, "Denunciare una Truffa", 3, "Emergency",
    [
      { it: "Buongiorno, credo di essere stato vittima di una truffa.", en: "Good morning, I think I've been the victim of a scam.", speaker: "person" },
      { it: "Ci racconti cos'è successo.", en: "Tell us what happened.", speaker: "police_officer" },
      { it: "Ho pagato 500 euro per un appartamento online, ma non esiste.", en: "I paid 500 euros for an apartment online, but it doesn't exist.", speaker: "person" },
      { it: "Ha conservato le email o le ricevute di pagamento?", en: "Did you keep the emails or payment receipts?", speaker: "police_officer" },
      { it: "Sì, ho tutti i documenti sul telefono.", en: "Yes, I have all the documents on my phone.", speaker: "person" },
    ],
    [{ it: "la truffa", en: "scam/fraud", article: "la" }, { it: "la vittima", en: "victim", article: "la" }, { it: "la ricevuta", en: "receipt", article: "la" }],
    [
      { it: "Cosa è successo al cliente?", en: "What happened to the customer?", options: [{ it: "Ha comprato un telefono difettoso", en: "He bought a defective phone", correct: false }, { it: "È stato truffato online per un appartamento", en: "He was scammed online for an apartment", correct: true }, { it: "Ha perso il portafoglio", en: "He lost his wallet", correct: false }] },
      { it: "Cosa ha conservato?", en: "What did he keep?", options: [{ it: "I documenti sul telefono", en: "The documents on his phone", correct: true }, { it: "Niente", en: "Nothing", correct: false }, { it: "Solo il numero di telefono", en: "Only the phone number", correct: false }] },
    ],
    [{ it: "la truffa", en: "scam" }, { it: "il pagamento", en: "payment" }],
    { question: "Cosa dice per denunciare una truffa?", questionTranslation: "What do you say to report a scam?", options: [
      { text: "Credo di essere stato vittima di una truffa online.", translation: "I think I've been the victim of an online scam.", correct: true },
      { text: "Ho trovato un buon affare online.", translation: "I found a good deal online.", correct: false },
      { text: "Voglio comprare un biglietto aereo.", translation: "I want to buy a plane ticket.", correct: false }
    ] },
  );

  // === Module 50 (B2, level=3) - Lost & Found ===

  await addExperience(50, "Segnalare un Passaporto Smarrito", 3, "Emergency",
    [
      { it: "Buongiorno, ho smarrito il mio passaporto.", en: "Good morning, I've lost my passport.", speaker: "person" },
      { it: "Quando se n'è accorto?", en: "When did you realize it was missing?", speaker: "police_officer" },
      { it: "Poco fa, quando sono arrivato in albergo.", en: "Just now, when I arrived at the hotel.", speaker: "person" },
      { it: "Dovrà fare una denuncia di smarrimento e poi richiedere un passaporto provvisorio al consolato.", en: "You'll need to file a loss report and then request a temporary passport from the consulate.", speaker: "police_officer" },
      { it: "Dov'è il consolato più vicino?", en: "Where is the nearest consulate?", speaker: "person" },
    ],
    [{ it: "il passaporto", en: "passport", article: "il" }, { it: "il consolato", en: "consulate", article: "il" }, { it: "provvisorio", en: "temporary" }],
    [
      { it: "Cosa ha smarrito il cliente?", en: "What did the customer lose?", options: [{ it: "Il portafoglio", en: "The wallet", correct: false }, { it: "Il passaporto", en: "The passport", correct: true }, { it: "La valigia", en: "The suitcase", correct: false }] },
      { it: "Dove può richiedere un passaporto provvisorio?", en: "Where can he request a temporary passport?", options: [{ it: "Alla polizia", en: "At the police station", correct: false }, { it: "Al consolato", en: "At the consulate", correct: true }, { it: "In albergo", en: "At the hotel", correct: false }] },
    ],
    [{ it: "smarrire", en: "to lose" }, { it: "accorgersi", en: "to realize" }],
    { question: "Cosa dice quando ha smarrito il passaporto?", questionTranslation: "What do you say when you've lost your passport?", options: [
      { text: "Ho smarrito il mio passaporto. Cosa devo fare?", translation: "I've lost my passport. What should I do?", correct: true },
      { text: "Ho trovato un passaporto per terra.", translation: "I found a passport on the ground.", correct: false },
      { text: "Il mio passaporto è scaduto.", translation: "My passport is expired.", correct: false }
    ] },
  );

  await addExperience(50, "Chiedere Informazioni sugli Oggetti Smarriti", 3, "Emergency",
    [
      { it: "Buongiorno, è l'ufficio oggetti smarriti?", en: "Good morning, is this the lost and found office?", speaker: "person" },
      { it: "Sì, mi dica. Cosa ha perso?", en: "Yes, tell me. What did you lose?", speaker: "police_officer" },
      { it: "Ho perso la mia borsa nera ieri in aeroporto.", en: "I lost my black bag yesterday at the airport.", speaker: "person" },
      { it: "Può descrivere la borsa e il contenuto?", en: "Can you describe the bag and its contents?", speaker: "police_officer" },
      { it: "Era una borsa in pelle nera con un portafoglio e un tablet dentro.", en: "It was a black leather bag with a wallet and a tablet inside.", speaker: "person" },
    ],
    [{ it: "l'ufficio oggetti smarriti", en: "lost and found office", article: "l'" }, { it: "la borsa", en: "bag", article: "la" }, { it: "il contenuto", en: "contents", article: "il" }],
    [
      { it: "Dove ha perso la borsa?", en: "Where did she lose the bag?", options: [{ it: "In stazione", en: "At the station", correct: false }, { it: "In aeroporto", en: "At the airport", correct: true }, { it: "Al ristorante", en: "At the restaurant", correct: false }] },
      { it: "Cosa c'era dentro la borsa?", en: "What was inside the bag?", options: [{ it: "Un portafoglio e un tablet", en: "A wallet and a tablet", correct: true }, { it: "Solo un libro", en: "Only a book", correct: false }, { it: "Dei vestiti", en: "Some clothes", correct: false }] },
    ],
    [{ it: "la borsa", en: "bag" }, { it: "la pelle", en: "leather" }],
    { question: "Cosa dice all'ufficio oggetti smarriti?", questionTranslation: "What do you say at the lost and found office?", options: [
      { text: "Ho perso la mia borsa nera in aeroporto ieri.", translation: "I lost my black bag at the airport yesterday.", correct: true },
      { text: "Vorrei comprare una borsa nuova.", translation: "I'd like to buy a new bag.", correct: false },
      { text: "La mia borsa è troppo pesante.", translation: "My bag is too heavy.", correct: false }
    ] },
  );

  await addExperience(50, "Recuperare un Documento Ritrovato", 3, "Emergency",
    [
      { it: "Ho ricevuto una chiamata che avete trovato il mio portafoglio.", en: "I received a call that you found my wallet.", speaker: "person" },
      { it: "Esatto, è stato consegnato da un turista. Deve riconoscerlo.", en: "Correct, it was handed in by a tourist. You need to identify it.", speaker: "police_officer" },
      { it: "È un portafoglio marrone con dentro la carta d'identità e 50 euro.", en: "It's a brown wallet with an ID card and 50 euros inside.", speaker: "person" },
      { it: "Corrisponde. Deve firmare qui per la riconsegna.", en: "It matches. Please sign here for the return.", speaker: "police_officer" },
      { it: "Grazie mille, che sollievo!", en: "Thank you so much, what a relief!", speaker: "person" },
    ],
    [{ it: "ritrovare", en: "to find" }, { it: "riconoscere", en: "to identify" }, { it: "la riconsegna", en: "return/delivery back", article: "la" }],
    [
      { it: "Chi ha consegnato il portafoglio?", en: "Who handed in the wallet?", options: [{ it: "Un turista", en: "A tourist", correct: true }, { it: "Un poliziotto", en: "A police officer", correct: false }, { it: "Un tassista", en: "A taxi driver", correct: false }] },
      { it: "Cosa deve fare per riprendere il portafoglio?", en: "What must he do to retrieve the wallet?", options: [{ it: "Firmare per la riconsegna", en: "Sign for the return", correct: true }, { it: "Pagare una multa", en: "Pay a fine", correct: false }, { it: "Mostrare un documento", en: "Show a document", correct: false }] },
    ],
    [{ it: "consegnare", en: "to hand in" }, { it: "firmare", en: "to sign" }],
    { question: "Cosa dice quando recupera un documento ritrovato?", questionTranslation: "What do you say when retrieving a found document?", options: [
      { text: "Ho ricevuto una chiamata che avete trovato il mio portafoglio.", translation: "I received a call that you found my wallet.", correct: true },
      { text: "Vorrei comprare un portafoglio nuovo.", translation: "I'd like to buy a new wallet.", correct: false },
      { text: "Il mio portafoglio è rotto.", translation: "My wallet is broken.", correct: false }
    ] },
  );

  await addExperience(50, "Denunciare un Bagaglio Smarrito", 3, "Emergency",
    [
      { it: "Buongiorno, la mia valigia non è arrivata sul nastro trasportatore.", en: "Good morning, my suitcase didn't arrive on the carousel.", speaker: "person" },
      { it: "Ha il tagliando del bagaglio?", en: "Do you have the baggage tag?", speaker: "police_officer" },
      { it: "Sì, ecco il codice della prenotazione e il tagliando.", en: "Yes, here's the booking code and the tag.", speaker: "person" },
      { it: "Compili questo modulo per lo smarrimento bagaglio.", en: "Fill out this lost baggage form.", speaker: "police_officer" },
      { it: "Quando saprò qualcosa?", en: "When will I know something?", speaker: "person" },
    ],
    [{ it: "la valigia", en: "suitcase", article: "la" }, { it: "il nastro trasportatore", en: "baggage carousel", article: "il" }, { it: "il tagliando", en: "tag", article: "il" }],
    [
      { it: "Dov'era il passeggero quando la valigia non è arrivata?", en: "Where was the passenger when the suitcase didn't arrive?", options: [{ it: "Al check-in", en: "At check-in", correct: false }, { it: "Al nastro trasportatore", en: "At the carousel", correct: true }, { it: "All'uscita", en: "At the exit", correct: false }] },
      { it: "Cosa deve compilare?", en: "What does he need to fill out?", options: [{ it: "Un modulo per lo smarrimento bagaglio", en: "A lost baggage form", correct: true }, { it: "Un modulo doganale", en: "A customs form", correct: false }, { it: "Un modulo di ingresso", en: "An entry form", correct: false }] },
    ],
    [{ it: "il bagaglio", en: "baggage" }, { it: "la prenotazione", en: "booking" }],
    { question: "Cosa dice se la valigia non arriva?", questionTranslation: "What do you say if your suitcase doesn't arrive?", options: [
      { text: "La mia valigia non è arrivata sul nastro trasportatore.", translation: "My suitcase didn't arrive on the carousel.", correct: true },
      { text: "La mia valigia è troppo pesante.", translation: "My suitcase is too heavy.", correct: false },
      { text: "Vorrei comprare una valigia nuova.", translation: "I'd like to buy a new suitcase.", correct: false }
    ] },
  );

  await addExperience(50, "Richiedere un Documento Provvisorio", 3, "Emergency",
    [
      { it: "Buongiorno, ho denunciato lo smarrimento del passaporto ieri.", en: "Good morning, I reported my lost passport yesterday.", speaker: "person" },
      { it: "Ha con sé la denuncia e una foto tessera?", en: "Do you have the report and a passport photo?", speaker: "police_officer" },
      { it: "Sì, ecco la denuncia e due foto tessera.", en: "Yes, here's the report and two passport photos.", speaker: "person" },
      { it: "Il documento provvisorio costa 30 euro ed è valido solo per il rientro in patria.", en: "The temporary document costs 30 euros and is only valid for returning home.", speaker: "police_officer" },
      { it: "Va bene, quanto tempo ci vuole per rilasciarlo?", en: "Alright, how long does it take to issue it?", speaker: "person" },
    ],
    [{ it: "la foto tessera", en: "passport photo", article: "la" }, { it: "il rientro", en: "return", article: "il" }, { it: "rilasciare", en: "to issue" }],
    [
      { it: "Cosa deve avere con sé il cliente?", en: "What does the customer need to have with him?", options: [{ it: "La denuncia e una foto tessera", en: "The report and a passport photo", correct: true }, { it: "Solo il passaporto vecchio", en: "Only the old passport", correct: false }, { it: "Un biglietto aereo", en: "A plane ticket", correct: false }] },
      { it: "A cosa serve il documento provvisorio?", en: "What is the temporary document for?", options: [{ it: "Per viaggiare in Italia", en: "To travel within Italy", correct: false }, { it: "Per il rientro in patria", en: "For returning home", correct: true }, { it: "Per lavorare", en: "To work", correct: false }] },
    ],
    [{ it: "valido", en: "valid" }, { it: "la patria", en: "homeland" }],
    { question: "Cosa dice per richiedere un documento provvisorio?", questionTranslation: "What do you say to request a temporary document?", options: [
      { text: "Ho denunciato lo smarrimento del passaporto. Vorrei un documento provvisorio.", translation: "I reported my lost passport. I'd like a temporary document.", correct: true },
      { text: "Vorrei rinnovare il mio passaporto.", translation: "I'd like to renew my passport.", correct: false },
      { text: "Ho trovato un passaporto per strada.", translation: "I found a passport on the street.", correct: false }
    ] },
  );

  console.log("  ✓ Emergency seeded");
}
