export async function seedDoctor(addExperience: Function) {
  // ========================
  // MODULE 7 — Making an Appointment (A2, level=1)
  // ========================

  // --- OLD 1: Calling the Doctor's Office ---
  await addExperience(7, "Calling the Doctor's Office", 1, "Doctor",
    [
      { it: "Studio del dottor Rossi, buongiorno. Come posso aiutarla?", en: "Dr. Rossi's practice, good day. How can I help you?", speaker: "secretary" },
      { it: "Buongiorno, vorrei fissare un appuntamento.", en: "Good day, I'd like to make an appointment.", speaker: "patient" },
      { it: "Ha dolori o è una visita di controllo?", en: "Do you have pain or is it a check-up?", speaker: "secretary" },
      { it: "È una visita di controllo.", en: "It's a check-up.", speaker: "patient" },
      { it: "Allora lunedì prossimo alle 10:00. Le va bene?", en: "Then next Monday at 10:00 AM. Does that work?", speaker: "secretary" },
    ],
    [
      { it: "lo studio", en: "medical practice", article: "lo" },
      { it: "l'appuntamento", en: "appointment", article: "l'" },
      { it: "la visita di controllo", en: "check-up", article: "la" },
    ],
    [
      {
        it: "Cosa vuole il paziente?", en: "What does the patient want?",
        options: [
          { it: "Vuole un appuntamento", en: "He wants an appointment", correct: true },
          { it: "Ha un'emergenza", en: "He has an emergency", correct: false },
          { it: "Vuole la fattura", en: "He wants the invoice", correct: false },
        ],
      },
      {
        it: "Quando è il prossimo appuntamento disponibile?", en: "When is the next available appointment?",
        options: [
          { it: "Domani alle 10:00", en: "Tomorrow at 10:00", correct: false },
          { it: "Lunedì prossimo alle 10:00", en: "Next Monday at 10:00", correct: true },
          { it: "Oggi alle 14:00", en: "Today at 14:00", correct: false },
        ],
      },
    ],
    [
      { it: "fissare", en: "to arrange" },
      { it: "il dolore", en: "pain" },
    ],
    {
      question: "Il paziente vuole confermare l'appuntamento. Cosa dice?",
      questionTranslation: "The patient wants to confirm the appointment. What does he say?",
      options: [
        { text: "Sì, questo appuntamento mi va bene.", translation: "Yes, this appointment works for me.", correct: true },
        { text: "No, non ho tempo.", translation: "No, I don't have time.", correct: false },
        { text: "Chiami di nuovo domani.", translation: "Call again tomorrow.", correct: false },
      ],
    },
  );

  // --- OLD 2: Confirming the Appointment ---
  await addExperience(7, "Confirming the Appointment", 1, "Doctor",
    [
      { it: "Ho un appuntamento per oggi alle 15:30 con il dottor Rossi.", en: "I have an appointment today at 3:30 PM with Dr. Rossi.", speaker: "patient" },
      { it: "Un momento, prego. Sì, la vedo nella lista. È la prima volta qui?", en: "One moment please. Yes, I see you in the list. Is this your first time here?", speaker: "secretary" },
      { it: "Sì, è la prima volta.", en: "Yes, this is my first time here.", speaker: "patient" },
      { it: "Allora compili questo modulo, per favore.", en: "Then please fill out this form.", speaker: "secretary" },
      { it: "Devo consegnare la tessera sanitaria?", en: "Do I need to hand in my health insurance card?", speaker: "patient" },
    ],
    [
      { it: "la tessera sanitaria", en: "health insurance card", article: "la" },
      { it: "compilare", en: "to fill out" },
    ],
    [
      {
        it: "Cosa deve fare il paziente?", en: "What does the patient have to do?",
        options: [
          { it: "Compilare un modulo", en: "Fill out a form", correct: true },
          { it: "Pagare in contanti", en: "Pay in cash", correct: false },
          { it: "Fare un esame", en: "Do an exam", correct: false },
        ],
      },
      {
        it: "Cosa chiede il paziente alla fine?", en: "What does the patient ask at the end?",
        options: [
          { it: "Se deve consegnarla", en: "If she needs to hand it in", correct: true },
          { it: "Se è gratuita", en: "If it's free", correct: false },
          { it: "Se può rinnovarla", en: "If she can renew it", correct: false },
        ],
      },
    ],
    [
      { it: "il modulo", en: "form" },
    ],
    {
      question: "Il paziente ha un imprevisto. Cosa dice per spostare l'appuntamento?",
      questionTranslation: "The patient has an unexpected event. What does he say to reschedule?",
      options: [
        { text: "Possiamo spostare l'appuntamento alla prossima settimana?", translation: "Can we move the appointment to next week?", correct: true },
        { text: "Semplicemente non vengo.", translation: "I simply won't come.", correct: false },
        { text: "Mi dica solo un nuovo orario.", translation: "Just tell me a new time.", correct: false },
      ],
    },
  );

  // --- OLD 3: Rescheduling an Appointment ---
  await addExperience(7, "Rescheduling an Appointment", 1, "Doctor",
    [
      { it: "Purtroppo devo spostare il mio appuntamento.", en: "I unfortunately have to reschedule my appointment.", speaker: "patient" },
      { it: "Nessun problema. Che giorno le andrebbe bene?", en: "No problem. Which day would suit you?", speaker: "secretary" },
      { it: "È possibile giovedì alle 11:00?", en: "Is Thursday at 11:00 AM possible?", speaker: "patient" },
      { it: "Sì, ho un posto libero allora. La inserisco.", en: "Yes, I have a free slot then. I'll put you down.", speaker: "secretary" },
      { it: "Grazie mille e mi scusi per la cancellazione all'ultimo minuto.", en: "Thank you very much and sorry for the last-minute cancellation.", speaker: "patient" },
    ],
    [
      { it: "spostare", en: "to reschedule/postpone" },
      { it: "la cancellazione", en: "cancellation", article: "la" },
    ],
    [
      {
        it: "Perché il paziente chiama?", en: "Why does the patient call?",
        options: [
          { it: "Deve spostare l'appuntamento", en: "He needs to reschedule", correct: true },
          { it: "È malato", en: "He is sick", correct: false },
          { it: "Vuole pagare la fattura", en: "He wants to pay the bill", correct: false },
        ],
      },
      {
        it: "Quando è il nuovo appuntamento?", en: "When is the new appointment?",
        options: [
          { it: "Martedì alle 11:00", en: "Tuesday at 11:00", correct: false },
          { it: "Giovedì alle 11:00", en: "Thursday at 11:00", correct: true },
          { it: "Venerdì alle 10:00", en: "Friday at 10:00", correct: false },
        ],
      },
    ],
    [
      { it: "andare bene", en: "to suit" },
      { it: "inserire", en: "to enter/register" },
    ],
    {
      question: "Il paziente ha sintomi influenzali. Cosa dice al dottore?",
      questionTranslation: "The patient has flu symptoms. What does he say to the doctor?",
      options: [
        { text: "Ho un forte mal di testa e ho bisogno di qualcosa.", translation: "I have a bad headache and need something.", correct: true },
        { text: "Vorrei un caffè.", translation: "I would like a coffee.", correct: false },
        { text: "Può operarmi?", translation: "Can you operate on me?", correct: false },
      ],
    },
  );

  // --- NEW 4: Asking About Available Times ---
  await addExperience(7, "Asking About Available Times", 1, "Doctor",
    [
      { it: "Buongiorno, avete un appuntamento libero questa settimana?", en: "Good morning, do you have a free appointment this week?", speaker: "patient" },
      { it: "Lasci controllare... Sì, mercoledì alle 15:00 è libero.", en: "Let me check... Yes, Wednesday at 3:00 PM is free.", speaker: "secretary" },
      { it: "Purtroppo mercoledì lavoro. C'è giovedì mattina?", en: "Unfortunately I work on Wednesday. Is there Thursday morning?", speaker: "patient" },
      { it: "Giovedì alle 10:30 va bene?", en: "Thursday at 10:30 AM, does that work?", speaker: "secretary" },
      { it: "Perfetto, la ringrazio. A giovedì.", en: "Perfect, thank you. See you on Thursday.", speaker: "patient" },
    ],
    [
      { it: "libero", en: "free/available" },
      { it: "la mattina", en: "morning", article: "la" },
    ],
    [
      {
        it: "Perché il paziente non può mercoledì?", en: "Why can't the patient come on Wednesday?",
        options: [
          { it: "Lavora mercoledì", en: "He works on Wednesday", correct: true },
          { it: "È in vacanza", en: "He is on vacation", correct: false },
          { it: "Ha un altro appuntamento", en: "He has another appointment", correct: false },
        ],
      },
      {
        it: "Quando si vedono il paziente e la segretaria?", en: "When do the patient and secretary agree on?",
        options: [
          { it: "Mercoledì alle 15:00", en: "Wednesday at 3:00 PM", correct: false },
          { it: "Giovedì alle 10:30", en: "Thursday at 10:30 AM", correct: true },
          { it: "Venerdì alle 9:00", en: "Friday at 9:00 AM", correct: false },
        ],
      },
    ],
    [
      { it: "controllare", en: "to check" },
      { it: "perfetto", en: "perfect" },
    ],
    {
      question: "Il paziente vuole sapere se c'è un orario alternativo. Cosa dice?",
      questionTranslation: "The patient wants to know if there's an alternative time. What does he say?",
      options: [
        { text: "C'è giovedì mattina?", translation: "Is there Thursday morning?", correct: true },
        { text: "Non posso venire.", translation: "I can't come.", correct: false },
        { text: "Mi dia un appuntamento.", translation: "Give me an appointment.", correct: false },
      ],
    },
  );

  // --- NEW 5: Arriving for the Appointment ---
  await addExperience(7, "Arriving for the Appointment", 1, "Doctor",
    [
      { it: "Buongiorno, ho un appuntamento con il dottor Bianchi.", en: "Good morning, I have an appointment with Dr. Bianchi.", speaker: "patient" },
      { it: "Buongiorno, a che nome?", en: "Good morning, under which name?", speaker: "secretary" },
      { it: "Mario Rossi.", en: "Mario Rossi.", speaker: "patient" },
      { it: "Ah sì, la stavo aspettando. Prego, la sala d'attesa è a destra.", en: "Ah yes, I was waiting for you. Please, the waiting room is on the right.", speaker: "secretary" },
      { it: "Grazie. Quanto tempo devo aspettare?", en: "Thank you. How long do I need to wait?", speaker: "patient" },
    ],
    [
      { it: "la sala d'attesa", en: "waiting room", article: "la" },
      { it: "aspettare", en: "to wait" },
    ],
    [
      {
        it: "Dove si trova la sala d'attesa?", en: "Where is the waiting room?",
        options: [
          { it: "A sinistra", en: "On the left", correct: false },
          { it: "A destra", en: "On the right", correct: true },
          { it: "Di fronte", en: "In front", correct: false },
        ],
      },
      {
        it: "Cosa fa il paziente prima di entrare?", en: "What does the patient do before entering?",
        options: [
          { it: "Chiama il medico", en: "He calls the doctor", correct: false },
          { it: "Si presenta alla segretaria", en: "He introduces himself to the secretary", correct: true },
          { it: "Va direttamente in sala visita", en: "He goes directly to the exam room", correct: false },
        ],
      },
    ],
    [
      { it: "il nome", en: "name" },
      { it: "la destra", en: "right side" },
    ],
    {
      question: "Il paziente è arrivato. Cosa dice alla segretaria?",
      questionTranslation: "The patient has arrived. What does he say to the secretary?",
      options: [
        { text: "Ho un appuntamento con il dottor Bianchi.", translation: "I have an appointment with Dr. Bianchi.", correct: true },
        { text: "Dov'è il bagno?", translation: "Where is the bathroom?", correct: false },
        { text: "Quanto costa la visita?", translation: "How much does the visit cost?", correct: false },
      ],
    },
  );

  // ========================
  // MODULE 8 — Basic Symptoms (A2, level=1)
  // ========================

  // --- OLD 1: Describing a Headache ---
  await addExperience(8, "Describing a Headache", 1, "Doctor",
    [
      { it: "Buongiorno, dottore. Ho mal di testa.", en: "Good day, doctor. I have a headache.", speaker: "patient" },
      { it: "Da quando ha mal di testa?", en: "Since when have you had the headache?", speaker: "doctor" },
      { it: "Da ieri sera. Niente aiuta.", en: "Since yesterday evening. Nothing helps.", speaker: "patient" },
      { it: "Ha febbre o altri sintomi?", en: "Do you have a fever or other symptoms?", speaker: "doctor" },
      { it: "No, solo il mal di testa. Ma è molto forte.", en: "No, just the headache. But it's very strong.", speaker: "patient" },
    ],
    [
      { it: "il mal di testa", en: "headache", article: "il" },
      { it: "la febbre", en: "fever", article: "la" },
      { it: "il sintomo", en: "symptom", article: "il" },
    ],
    [
      {
        it: "Da quanto tempo il paziente ha mal di testa?", en: "How long has the patient had a headache?",
        options: [
          { it: "Da ieri sera", en: "Since yesterday evening", correct: true },
          { it: "Da stamattina", en: "Since this morning", correct: false },
          { it: "Da una settimana", en: "For a week", correct: false },
        ],
      },
      {
        it: "Il paziente ha anche la febbre?", en: "Does the patient also have a fever?",
        options: [
          { it: "No, solo mal di testa", en: "No, just a headache", correct: true },
          { it: "Sì, febbre", en: "Yes, fever", correct: false },
          { it: "Sì, tosse", en: "Yes, cough", correct: false },
        ],
      },
    ],
    [
      { it: "far male", en: "to hurt" },
      { it: "forte", en: "strong/severe" },
    ],
    {
      question: "Il paziente descrive i sintomi di un raffreddore. Cosa dice?",
      questionTranslation: "The patient describes cold symptoms. What does he say?",
      options: [
        { text: "Ho tosse, naso che cola e mal di gola.", translation: "I have a cough, runny nose and sore throat.", correct: true },
        { text: "Mi sono rotto il piede.", translation: "I broke my foot.", correct: false },
        { text: "Ho bisogno di occhiali nuovi.", translation: "I need new glasses.", correct: false },
      ],
    },
    undefined,
    [
      { text: "il mal di testa", translation: "headache", correctValue: "headache" },
      { text: "la febbre", translation: "fever", correctValue: "fever" },
      { text: "far male", translation: "to hurt", correctValue: "hurt" },
    ],
  );

  // --- OLD 2: Telling the Doctor About a Cold ---
  await addExperience(8, "Telling the Doctor About a Cold", 1, "Doctor",
    [
      { it: "Mi sono raffreddato. Tossisco e ho il naso che cola.", en: "I've caught a cold. I'm coughing and have a runny nose.", speaker: "patient" },
      { it: "Ha misurato la temperatura?", en: "Have you taken your temperature?", speaker: "doctor" },
      { it: "Sì, 38,5 gradi.", en: "Yes, 38.5 degrees.", speaker: "patient" },
      { it: "È una febbre leggera. Le prescrivo uno sciroppo per la tosse.", en: "That's a mild fever. I'll prescribe you a cough syrup.", speaker: "doctor" },
      { it: "Devo stare a letto?", en: "Should I stay in bed?", speaker: "patient" },
    ],
    [
      { it: "raffreddarsi", en: "to catch a cold" },
      { it: "lo sciroppo per la tosse", en: "cough syrup", article: "lo" },
      { it: "il naso che cola", en: "runny nose", article: "il" },
    ],
    [
      {
        it: "Che problema ha il paziente?", en: "What problem does the patient have?",
        options: [
          { it: "Un raffreddore", en: "A cold", correct: true },
          { it: "Un'allergia", en: "An allergy", correct: false },
          { it: "Una ferita", en: "A wound", correct: false },
        ],
      },
      {
        it: "Che temperatura ha il paziente?", en: "What temperature does the patient have?",
        options: [
          { it: "38,5 gradi", en: "38.5 degrees", correct: true },
          { it: "37,5 gradi", en: "37.5 degrees", correct: false },
          { it: "39,5 gradi", en: "39.5 degrees", correct: false },
        ],
      },
    ],
    [
      { it: "misurare", en: "to measure" },
      { it: "prescrivere", en: "to prescribe" },
    ],
    {
      question: "Il paziente ha un'allergia ai farmaci. Cosa dice?",
      questionTranslation: "The patient has a drug allergy. What does he say?",
      options: [
        { text: "Sono allergico alla penicillina.", translation: "I am allergic to penicillin.", correct: true },
        { text: "Non mi piacciono le iniezioni.", translation: "I don't like injections.", correct: false },
        { text: "Ho freddo.", translation: "I'm cold.", correct: false },
      ],
    },
  );

  // --- OLD 3: Explaining an Allergy ---
  await addExperience(8, "Explaining an Allergy", 1, "Doctor",
    [
      { it: "In primavera ho sempre gli occhi che lacrimano.", en: "I always get watery eyes in spring.", speaker: "patient" },
      { it: "Sembra un'allergia. Facciamo il test.", en: "That sounds like an allergy. Let's test it.", speaker: "doctor" },
      { it: "Devo preparare qualcosa?", en: "Do I need to prepare anything for that?", speaker: "patient" },
      { it: "No, basta un semplice esame del sangue.", en: "No, a simple blood test is enough.", speaker: "doctor" },
      { it: "E cosa posso fare per i sintomi?", en: "And what can I do about the symptoms?", speaker: "patient" },
    ],
    [
      { it: "l'allergia", en: "allergy", article: "l'" },
      { it: "gli occhi che lacrimano", en: "watery eyes" },
      { it: "l'esame del sangue", en: "blood test", article: "l'" },
    ],
    [
      {
        it: "Quando il paziente ha gli occhi che lacrimano?", en: "When does the patient get watery eyes?",
        options: [
          { it: "In primavera", en: "In spring", correct: true },
          { it: "In autunno", en: "In autumn", correct: false },
          { it: "In inverno", en: "In winter", correct: false },
        ],
      },
      {
        it: "Che tipo di test propone il dottore?", en: "What kind of test does the doctor propose?",
        options: [
          { it: "Un semplice esame del sangue", en: "A simple blood test", correct: true },
          { it: "Un test cutaneo", en: "A skin test", correct: false },
          { it: "Una radiografia", en: "An X-ray", correct: false },
        ],
      },
    ],
    [
      { it: "avere", en: "to get/have" },
      { it: "bastare", en: "to be enough" },
    ],
    {
      question: "I sintomi del paziente peggiorano. Cosa dice?",
      questionTranslation: "The patient's symptoms are getting worse. What does he say?",
      options: [
        { text: "Il dolore è più forte e ho nausea.", translation: "The pain is stronger and I feel nauseous.", correct: true },
        { text: "Vorrei spostare l'appuntamento.", translation: "I'd like to reschedule.", correct: false },
        { text: "Può accompagnarmi a casa?", translation: "Can you take me home?", correct: false },
      ],
    },
  );

  // --- NEW 4: Describing a Sore Throat ---
  await addExperience(8, "Describing a Sore Throat", 1, "Doctor",
    [
      { it: "Buongiorno, ho mal di gola da tre giorni.", en: "Good morning, I've had a sore throat for three days.", speaker: "patient" },
      { it: "Ha difficoltà a deglutire?", en: "Do you have difficulty swallowing?", speaker: "doctor" },
      { it: "Sì, fa molto male quando ingerisco.", en: "Yes, it hurts a lot when I swallow.", speaker: "patient" },
      { it: "Vediamo... La gola è arrossata. Ha la febbre?", en: "Let's see... Your throat is red. Do you have a fever?", speaker: "doctor" },
      { it: "Non lo so, non l'ho misurata.", en: "I don't know, I haven't measured it.", speaker: "patient" },
    ],
    [
      { it: "il mal di gola", en: "sore throat", article: "il" },
      { it: "deglutire", en: "to swallow" },
      { it: "arrossato", en: "red/inflamed" },
    ],
    [
      {
        it: "Da quanto tempo il paziente ha mal di gola?", en: "How long has the patient had a sore throat?",
        options: [
          { it: "Da un giorno", en: "For one day", correct: false },
          { it: "Da tre giorni", en: "For three days", correct: true },
          { it: "Da una settimana", en: "For a week", correct: false },
        ],
      },
      {
        it: "Cosa vede il dottore guardando la gola?", en: "What does the doctor see looking at the throat?",
        options: [
          { it: "È gonfia", en: "It's swollen", correct: false },
          { it: "È arrossata", en: "It's red", correct: true },
          { it: "È bianca", en: "It's white", correct: false },
        ],
      },
    ],
    [
      { it: "ingerire", en: "to swallow" },
      { it: "la gola", en: "throat" },
    ],
    {
      question: "Il paziente spiega che gli fa male deglutire. Cosa dice?",
      questionTranslation: "The patient explains that swallowing hurts. What does he say?",
      options: [
        { text: "Fa molto male quando ingerisco.", translation: "It hurts a lot when I swallow.", correct: true },
        { text: "Non ho fame.", translation: "I'm not hungry.", correct: false },
        { text: "La gola è secca.", translation: "My throat is dry.", correct: false },
      ],
    },
  );

  // --- NEW 5: Talking About a Stomach Ache ---
  await addExperience(8, "Talking About a Stomach Ache", 1, "Doctor",
    [
      { it: "Dottore, mi fa male la pancia.", en: "Doctor, my stomach hurts.", speaker: "patient" },
      { it: "Da quando ha questo dolore?", en: "Since when do you have this pain?", speaker: "doctor" },
      { it: "Dopo pranzo, ho mangiato qualcosa di pesante.", en: "After lunch, I ate something heavy.", speaker: "patient" },
      { it: "Ha vomitato o ha avuto la diarrea?", en: "Have you vomited or had diarrhea?", speaker: "doctor" },
      { it: "No, ma ho molto gas e mi sento gonfio.", en: "No, but I have a lot of gas and feel bloated.", speaker: "patient" },
    ],
    [
      { it: "la pancia", en: "stomach", article: "la" },
      { it: "pesante", en: "heavy" },
      { it: "gonfio", en: "bloated" },
    ],
    [
      {
        it: "Quando è iniziato il dolore?", en: "When did the pain start?",
        options: [
          { it: "Dopo pranzo", en: "After lunch", correct: true },
          { it: "Stamattina", en: "This morning", correct: false },
          { it: "Ieri sera", en: "Yesterday evening", correct: false },
        ],
      },
      {
        it: "Il paziente ha avuto vomito o diarrea?", en: "Has the patient had vomiting or diarrhea?",
        options: [
          { it: "Sì, entrambi", en: "Yes, both", correct: false },
          { it: "Solo vomito", en: "Only vomiting", correct: false },
          { it: "No", en: "No", correct: true },
        ],
      },
    ],
    [
      { it: "il pranzo", en: "lunch" },
      { it: "il gas", en: "gas" },
    ],
    {
      question: "Il paziente descrive cosa ha mangiato. Cosa dice?",
      questionTranslation: "The patient describes what he ate. What does he say?",
      options: [
        { text: "Ho mangiato qualcosa di pesante.", translation: "I ate something heavy.", correct: true },
        { text: "Non ho mangiato niente.", translation: "I didn't eat anything.", correct: false },
        { text: "Ho mangiato leggero.", translation: "I ate light food.", correct: false },
      ],
    },
  );

  // ========================
  // MODULE 9 — Describing Symptoms (B1, level=2)
  // ========================

  // --- OLD 1: Describing Severe Symptoms ---
  await addExperience(9, "Describing Severe Symptoms", 2, "Doctor",
    [
      { it: "Ho forti dolori alla pancia da tre giorni.", en: "I've had severe stomach pain for three days.", speaker: "patient" },
      { it: "Dove fa male esattamente? Può indicarmi?", en: "Where exactly does it hurt? Can you show me?", speaker: "doctor" },
      { it: "Qui, sul lato destro. È un dolore pungente.", en: "Here, on the right side. It feels stabbing.", speaker: "patient" },
      { it: "Ha nausea o diarrea?", en: "Do you have nausea or diarrhea?", speaker: "doctor" },
      { it: "Sì, ieri ho vomitato.", en: "Yes, I vomited yesterday.", speaker: "patient" },
    ],
    [
      { it: "il dolore alla pancia", en: "stomach pain", article: "il" },
      { it: "la nausea", en: "nausea", article: "la" },
      { it: "pungente", en: "stabbing" },
    ],
    [
      {
        it: "Da quanto tempo il paziente ha dolori alla pancia?", en: "How long has the patient had stomach pain?",
        options: [
          { it: "Da tre giorni", en: "For three days", correct: true },
          { it: "Da un giorno", en: "For one day", correct: false },
          { it: "Da una settimana", en: "For a week", correct: false },
        ],
      },
      {
        it: "Quali altri sintomi ha il paziente?", en: "What other symptoms does the patient have?",
        options: [
          { it: "Nausea e vomito", en: "Nausea and vomiting", correct: true },
          { it: "Tosse e febbre", en: "Cough and fever", correct: false },
          { it: "Mal di testa e vertigini", en: "Headache and dizziness", correct: false },
        ],
      },
    ],
    [
      { it: "il vomito", en: "vomiting" },
      { it: "il lato", en: "side" },
    ],
    {
      question: "Il paziente vuole vedere uno specialista. Cosa chiede?",
      questionTranslation: "The patient wants to see a specialist. What does he ask?",
      options: [
        { text: "Può darmi un'impegnativa per lo specialista?", translation: "Can you give me a referral to the specialist?", correct: true },
        { text: "Posso andare, per favore?", translation: "Can I go, please?", correct: false },
        { text: "Ha un farmaco migliore?", translation: "Do you have a better medication?", correct: false },
      ],
    },
    undefined,
    [
      { text: "la nausea", translation: "nausea", correctValue: "nausea" },
      { text: "pungente", translation: "stabbing", correctValue: "stabbing" },
      { text: "la diarrea", translation: "diarrhea", correctValue: "diarrhea" },
    ],
  );

  // --- OLD 2: Getting a Referral to a Specialist ---
  await addExperience(9, "Getting a Referral to a Specialist", 2, "Doctor",
    [
      { it: "Credo di aver bisogno di un'impegnativa per il dermatologo.", en: "I think I need a referral to a dermatologist.", speaker: "patient" },
      { it: "Che disturbi ha?", en: "What complaints do you have?", speaker: "doctor" },
      { it: "Ho un'eruzione sul braccio che non passa.", en: "I have a rash on my arm that won't go away.", speaker: "patient" },
      { it: "Dovrebbe visitarla uno specialista. Le preparo l'impegnativa.", en: "A specialist should examine that. I'll write you the referral.", speaker: "doctor" },
      { it: "Quanto tempo ci vuole per avere un appuntamento?", en: "How long does it take to get an appointment?", speaker: "patient" },
    ],
    [
      { it: "l'impegnativa", en: "referral", article: "l'" },
      { it: "il dermatologo", en: "dermatologist", article: "il" },
      { it: "l'eruzione", en: "rash", article: "l'" },
    ],
    [
      {
        it: "Che tipo di specialista serve al paziente?", en: "What type of specialist does the patient need?",
        options: [
          { it: "Un dermatologo", en: "A dermatologist", correct: true },
          { it: "Un oculista", en: "An eye doctor", correct: false },
          { it: "Un dentista", en: "A dentist", correct: false },
        ],
      },
      {
        it: "Che problema ha il paziente al braccio?", en: "What problem does the patient have on his arm?",
        options: [
          { it: "Un'eruzione", en: "A rash", correct: true },
          { it: "Un gonfiore", en: "A swelling", correct: false },
          { it: "Una ferita", en: "A wound", correct: false },
        ],
      },
    ],
    [
      { it: "visitare", en: "to examine" },
      { it: "lo specialista", en: "specialist" },
    ],
    {
      question: "Il paziente vuole capire la procedura dopo la diagnosi. Cosa dice?",
      questionTranslation: "The patient wants to understand the procedure after diagnosis. What does he say?",
      options: [
        { text: "Chieda quali sono i prossimi passi e la cura.", translation: "Ask what the next steps and treatment are.", correct: true },
        { text: "Dica che sa già tutto.", translation: "Say that he already knows everything.", correct: false },
        { text: "Vada semplicemente a casa.", translation: "Just go home.", correct: false },
      ],
    },
  );

  // --- OLD 3: Understanding a Diagnosis ---
  await addExperience(9, "Understanding a Diagnosis", 2, "Doctor",
    [
      { it: "Gli esami del sangue mostrano che ha un'infezione.", en: "The blood test results show you have an infection.", speaker: "doctor" },
      { it: "È qualcosa di grave?", en: "Is it something serious?", speaker: "patient" },
      { it: "No, è un'infezione batterica innocua.", en: "No, it's a harmless bacterial infection.", speaker: "doctor" },
      { it: "Le prescrivo antibiotici per sette giorni.", en: "I'll prescribe you antibiotics for seven days.", speaker: "doctor" },
      { it: "Prenda le compresse tre volte al giorno dopo i pasti.", en: "Take the tablets three times a day after meals.", speaker: "doctor" },
    ],
    [
      { it: "l'infezione", en: "infection", article: "l'" },
      { it: "l'antibiotico", en: "antibiotic", article: "l'" },
      { it: "la compressa", en: "tablet", article: "la" },
    ],
    [
      {
        it: "Cosa mostrano gli esami del sangue?", en: "What do the blood tests show?",
        options: [
          { it: "Un'infezione", en: "An infection", correct: true },
          { it: "Un'allergia", en: "An allergy", correct: false },
          { it: "Una carenza vitaminica", en: "A vitamin deficiency", correct: false },
        ],
      },
      {
        it: "Quante volte al giorno deve prendere le compresse?", en: "How many times a day should he take the tablets?",
        options: [
          { it: "Tre volte al giorno", en: "Three times a day", correct: true },
          { it: "Una volta al giorno", en: "Once a day", correct: false },
          { it: "Due volte al giorno", en: "Twice a day", correct: false },
        ],
      },
    ],
    [
      { it: "gli esami del sangue", en: "blood test results" },
      { it: "innocuo", en: "harmless" },
    ],
    {
      question: "Il paziente entra in farmacia e chiede aiuto. Cosa dice?",
      questionTranslation: "The patient enters the pharmacy and asks for help. What does he say?",
      options: [
        { text: "Avete qualcosa per la tosse?", translation: "Do you have something for a cough?", correct: true },
        { text: "Dov'è lo studio medico più vicino?", translation: "Where is the nearest doctor's office?", correct: false },
        { text: "Posso mangiare qui?", translation: "Can I eat here?", correct: false },
      ],
    },
  );

  // --- NEW 4: Describing Back Pain ---
  await addExperience(9, "Describing Back Pain", 2, "Doctor",
    [
      { it: "Da due settimane ho un forte dolore alla schiena.", en: "I've had severe back pain for two weeks.", speaker: "patient" },
      { it: "Ha fatto uno sforzo o ha sollevato qualcosa di pesante?", en: "Did you strain yourself or lift something heavy?", speaker: "doctor" },
      { it: "Sì, ho trasportato delle scatole e da lì è iniziato.", en: "Yes, I carried some boxes and that's when it started.", speaker: "patient" },
      { it: "Il dolore si irradia verso le gambe?", en: "Does the pain radiate down your legs?", speaker: "doctor" },
      { it: "No, rimane solo nella parte bassa della schiena.", en: "No, it stays only in my lower back.", speaker: "patient" },
    ],
    [
      { it: "la schiena", en: "back", article: "la" },
      { it: "lo sforzo", en: "strain/effort", article: "lo" },
      { it: "irradiarsi", en: "to radiate" },
    ],
    [
      {
        it: "Da quanto tempo il paziente ha mal di schiena?", en: "How long has the patient had back pain?",
        options: [
          { it: "Da due settimane", en: "For two weeks", correct: true },
          { it: "Da due giorni", en: "For two days", correct: false },
          { it: "Da due mesi", en: "For two months", correct: false },
        ],
      },
      {
        it: "Cosa ha causato il dolore?", en: "What caused the pain?",
        options: [
          { it: "Una caduta", en: "A fall", correct: false },
          { it: "Trasportare scatole", en: "Carrying boxes", correct: true },
          { it: "Un incidente d'auto", en: "A car accident", correct: false },
        ],
      },
    ],
    [
      { it: "sollevare", en: "to lift" },
      { it: "la gamba", en: "leg" },
    ],
    {
      question: "Il paziente spiega perché è iniziato il dolore. Cosa dice?",
      questionTranslation: "The patient explains why the pain started. What does he say?",
      options: [
        { text: "Ho trasportato delle scatole e da lì è iniziato.", translation: "I carried some boxes and that's when it started.", correct: true },
        { text: "Non ho fatto niente.", translation: "I didn't do anything.", correct: false },
        { text: "È colpa del materasso.", translation: "It's the mattress's fault.", correct: false },
      ],
    },
  );

  // --- NEW 5: Reporting Dizziness ---
  await addExperience(9, "Reporting Dizziness", 2, "Doctor",
    [
      { it: "Spesso mi gira la testa quando mi alzo velocemente.", en: "I often feel dizzy when I stand up quickly.", speaker: "patient" },
      { it: "Da quando ha questi episodi di vertigine?", en: "Since when have you had these dizzy spells?", speaker: "doctor" },
      { it: "Da circa un mese. A volte vedo anche macchie scure.", en: "For about a month. Sometimes I also see dark spots.", speaker: "patient" },
      { it: "Prende qualche farmaco regolarmente?", en: "Do you take any medication regularly?", speaker: "doctor" },
      { it: "Sì, prendo un farmaco per abbassare la pressione.", en: "Yes, I take medication for high blood pressure.", speaker: "patient" },
    ],
    [
      { it: "la vertigine", en: "dizziness", article: "la" },
      { it: "la macchia scura", en: "dark spot", article: "la" },
      { it: "abbassare la pressione", en: "to lower blood pressure" },
    ],
    [
      {
        it: "Quando il paziente ha le vertigini?", en: "When does the patient feel dizzy?",
        options: [
          { it: "Quando si alza velocemente", en: "When he stands up quickly", correct: true },
          { it: "Dopo i pasti", en: "After meals", correct: false },
          { it: "La sera", en: "In the evening", correct: false },
        ],
      },
      {
        it: "Da quanto tempo ha questo problema?", en: "How long has he had this problem?",
        options: [
          { it: "Da una settimana", en: "For a week", correct: false },
          { it: "Da circa un mese", en: "For about a month", correct: true },
          { it: "Da un anno", en: "For a year", correct: false },
        ],
      },
    ],
    [
      { it: "girare la testa", en: "to feel dizzy" },
      { it: "l'episodio", en: "episode" },
    ],
    {
      question: "Il paziente descrive cosa vede durante le vertigini. Cosa dice?",
      questionTranslation: "The patient describes what he sees during dizziness. What does he say?",
      options: [
        { text: "Vedo anche macchie scure.", translation: "I also see dark spots.", correct: true },
        { text: "Vedo tutto giallo.", translation: "I see everything yellow.", correct: false },
        { text: "Vedo dei lampi.", translation: "I see flashes.", correct: false },
      ],
    },
  );

  // ========================
  // MODULE 10 — At the Pharmacy (B1, level=2)
  // ========================

  // --- OLD 1: Asking the Pharmacist for Medicine ---
  await addExperience(10, "Asking the Pharmacist for Medicine", 2, "Doctor",
    [
      { it: "Buongiorno, ho una ricetta del medico.", en: "Good day, I have a prescription from the doctor.", speaker: "patient" },
      { it: "Certamente. Inserisca la tessera sanitaria, per favore.", en: "Certainly. Please put your health card with it.", speaker: "pharmacist" },
      { it: "Questo farmaco è disponibile anche senza ricetta?", en: "Is this medication also available over the counter?", speaker: "patient" },
      { it: "No, questo farmaco è soggetto a prescrizione medica.", en: "No, this medication is prescription-only.", speaker: "pharmacist" },
      { it: "D'accordo. Quanto devo pagare?", en: "Alright. How much do I need to pay?", speaker: "patient" },
    ],
    [
      { it: "la ricetta", en: "prescription", article: "la" },
      { it: "il farmaco", en: "medication", article: "il" },
      { it: "soggetto a prescrizione", en: "prescription-only" },
    ],
    [
      {
        it: "Cosa ha il paziente?", en: "What does the patient have?",
        options: [
          { it: "Una ricetta", en: "A prescription", correct: true },
          { it: "Un'impegnativa", en: "A referral", correct: false },
          { it: "Un vaccino", en: "A vaccine", correct: false },
        ],
      },
      {
        it: "Il farmaco è disponibile senza ricetta?", en: "Is the medication available without a prescription?",
        options: [
          { it: "No, è soggetto a prescrizione", en: "No, it is prescription-only", correct: true },
          { it: "Sì", en: "Yes", correct: false },
        ],
      },
    ],
    [
      { it: "senza ricetta", en: "over-the-counter" },
      { it: "la tessera sanitaria", en: "health card" },
    ],
    {
      question: "Il paziente cerca un farmaco per il mal di testa. Cosa dice?",
      questionTranslation: "The patient is looking for a headache remedy. What does he say?",
      options: [
        { text: "Vorrei un antidolorifico per il mal di testa.", translation: "I'd like a painkiller for a headache.", correct: true },
        { text: "Vorrei una birra.", translation: "I'd like a beer.", correct: false },
        { text: "Avete giornali?", translation: "Do you have newspapers?", correct: false },
      ],
    },
  );

  // --- OLD 2: Buying Painkillers ---
  await addExperience(10, "Buying Painkillers", 2, "Doctor",
    [
      { it: "Ho bisogno di qualcosa per il mal di testa. Ha un consiglio?", en: "I need something for headaches. Do you have a recommendation?", speaker: "patient" },
      { it: "Le consiglio l'Ibuprofene 400. Agisce rapidamente.", en: "I recommend Ibuprofen 400. It works quickly.", speaker: "pharmacist" },
      { it: "Ci sono effetti collaterali?", en: "Are there side effects?", speaker: "patient" },
      { it: "Non lo prenda a stomaco vuoto. E beva molta acqua.", en: "Don't take it on an empty stomach. And drink plenty of water.", speaker: "pharmacist" },
      { it: "Grazie per il buon consiglio!", en: "Thanks for the good advice!", speaker: "patient" },
    ],
    [
      { it: "il consiglio", en: "recommendation", article: "il" },
      { it: "l'effetto collaterale", en: "side effect", article: "l'" },
    ],
    [
      {
        it: "Che farmaco consiglia il farmacista?", en: "What medication does the pharmacist recommend?",
        options: [
          { it: "Ibuprofene 400", en: "Ibuprofen 400", correct: true },
          { it: "Aspirina 500", en: "Aspirin 500", correct: false },
          { it: "Paracetamolo 500", en: "Paracetamol 500", correct: false },
        ],
      },
      {
        it: "Cosa deve evitare il paziente?", en: "What should the patient avoid?",
        options: [
          { it: "Prenderlo a stomaco vuoto", en: "Taking it on an empty stomach", correct: true },
          { it: "Bere molta acqua", en: "Drinking plenty of water", correct: false },
          { it: "Prenderlo con il cibo", en: "Taking it with food", correct: false },
        ],
      },
    ],
    [
      { it: "il farmacista", en: "pharmacist" },
      { it: "il consiglio", en: "advice" },
    ],
    {
      question: "Il paziente vuole sapere come prendere il farmaco. Cosa chiede?",
      questionTranslation: "The patient wants to know how to take the medication. What does he ask?",
      options: [
        { text: "Quante volte devo prendere il farmaco?", translation: "How many times do I need to take the medication?", correct: true },
        { text: "È buono?", translation: "Is it good?", correct: false },
        { text: "Posso restituirlo?", translation: "Can I return it?", correct: false },
      ],
    },
  );

  // --- OLD 3: Understanding the Dosage ---
  await addExperience(10, "Understanding the Dosage", 2, "Doctor",
    [
      { it: "Quante volte devo prendere lo sciroppo per la tosse?", en: "How often should I take the cough syrup?", speaker: "patient" },
      { it: "Prenda 5 millilitri tre volte al giorno.", en: "Take 5 milliliters three times a day.", speaker: "pharmacist" },
      { it: "Prima o dopo i pasti?", en: "Before or after meals?", speaker: "patient" },
      { it: "Dopo i pasti. Agiti la bottiglia prima dell'uso.", en: "After meals. Shake the bottle before use.", speaker: "pharmacist" },
      { it: "Devo finire tutta la bottiglia?", en: "Do I need to finish the whole bottle?", speaker: "patient" },
    ],
    [
      { it: "lo sciroppo per la tosse", en: "cough syrup", article: "lo" },
      { it: "il millilitro", en: "milliliter" },
      { it: "l'uso", en: "use" },
    ],
    [
      {
        it: "Quanto sciroppo deve prendere il paziente?", en: "How much syrup should the patient take?",
        options: [
          { it: "5 millilitri", en: "5 milliliters", correct: true },
          { it: "10 millilitri", en: "10 milliliters", correct: false },
          { it: "15 millilitri", en: "15 milliliters", correct: false },
        ],
      },
      {
        it: "Cosa deve fare prima di prendere lo sciroppo?", en: "What should he do before taking the syrup?",
        options: [
          { it: "Agitare la bottiglia", en: "Shake the bottle", correct: true },
          { it: "Riscaldare la bottiglia", en: "Heat the bottle", correct: false },
          { it: "Aprire e annusare", en: "Open and smell it", correct: false },
        ],
      },
    ],
    [
      { it: "prendere", en: "to take (medication)" },
      { it: "agitare", en: "to shake" },
    ],
    {
      question: "Il paziente parla della storia medica familiare. Cosa dice?",
      questionTranslation: "The patient talks about the family medical history. What does he say?",
      options: [
        { text: "Mio padre aveva la pressione alta.", translation: "My father had high blood pressure.", correct: true },
        { text: "La mia famiglia vive a Roma.", translation: "My family lives in Rome.", correct: false },
        { text: "Non ho famiglia.", translation: "I have no family.", correct: false },
      ],
    },
    undefined,
    [
      { text: "lo sciroppo per la tosse", translation: "cough syrup", correctValue: "syrup" },
      { text: "prendere", translation: "to take", correctValue: "take" },
      { text: "agitare", translation: "to shake", correctValue: "shake" },
    ],
  );

  // --- NEW 4: Asking About Allergies in Medicine ---
  await addExperience(10, "Asking About Allergies in Medicine", 2, "Doctor",
    [
      { it: "Questo farmaco contiene lattosio? Sono intollerante.", en: "Does this medication contain lactose? I'm intolerant.", speaker: "patient" },
      { it: "Sì, contiene un po' di lattosio. Posso cercare un'alternativa.", en: "Yes, it contains some lactose. I can look for an alternative.", speaker: "pharmacist" },
      { it: "Sarebbe meglio. Cosa mi consiglia?", en: "That would be better. What do you recommend?", speaker: "patient" },
      { it: "Ho una versione senza lattosio. È leggermente più cara.", en: "I have a lactose-free version. It's slightly more expensive.", speaker: "pharmacist" },
      { it: "Non importa, la prendo. La salute viene prima.", en: "Never mind, I'll take it. Health comes first.", speaker: "patient" },
    ],
    [
      { it: "il lattosio", en: "lactose", article: "il" },
      { it: "l'alternativa", en: "alternative", article: "l'" },
      { it: "intollerante", en: "intolerant" },
    ],
    [
      {
        it: "Perché il paziente chiede informazioni sul lattosio?", en: "Why does the patient ask about lactose?",
        options: [
          { it: "È intollerante al lattosio", en: "He is lactose intolerant", correct: true },
          { it: "È allergico al farmaco", en: "He is allergic to the medication", correct: false },
          { it: "Non gli piace il sapore", en: "He doesn't like the taste", correct: false },
        ],
      },
      {
        it: "La versione senza lattosio è più costosa?", en: "Is the lactose-free version more expensive?",
        options: [
          { it: "Sì, leggermente più cara", en: "Yes, slightly more expensive", correct: true },
          { it: "No, costa uguale", en: "No, it costs the same", correct: false },
          { it: "È più economica", en: "It's cheaper", correct: false },
        ],
      },
    ],
    [
      { it: "contenere", en: "to contain" },
      { it: "caro", en: "expensive" },
    ],
    {
      question: "Il paziente vuole una versione diversa del farmaco. Cosa dice?",
      questionTranslation: "The patient wants a different version of the medication. What does he say?",
      options: [
        { text: "Sarebbe meglio. Cosa mi consiglia?", translation: "That would be better. What do you recommend?", correct: true },
        { text: "Va bene lo stesso.", translation: "It's fine as is.", correct: false },
        { text: "Non mi interessa.", translation: "I don't care.", correct: false },
      ],
    },
  );

  // --- NEW 5: Requesting a Natural Remedy ---
  await addExperience(10, "Requesting a Natural Remedy", 2, "Doctor",
    [
      { it: "Preferirei un rimedio naturale, se possibile.", en: "I would prefer a natural remedy if possible.", speaker: "patient" },
      { it: "Certamente. Abbiamo la camomilla in bustine e sciroppi alle erbe.", en: "Certainly. We have chamomile tea bags and herbal syrups.", speaker: "pharmacist" },
      { it: "Cosa mi consiglia per l'insonnia?", en: "What do you recommend for insomnia?", speaker: "patient" },
      { it: "Provi la valeriana. È molto efficace e non ha effetti collaterali.", en: "Try valerian. It's very effective and has no side effects.", speaker: "pharmacist" },
      { it: "Bene, la provo. Quante gocce devo prendere?", en: "Good, I'll try it. How many drops should I take?", speaker: "patient" },
    ],
    [
      { it: "il rimedio naturale", en: "natural remedy", article: "il" },
      { it: "la camomilla", en: "chamomile", article: "la" },
      { it: "la valeriana", en: "valerian", article: "la" },
    ],
    [
      {
        it: "Perché problema il paziente cerca un rimedio?", en: "For what problem is the patient looking for a remedy?",
        options: [
          { it: "L'insonnia", en: "Insomnia", correct: true },
          { it: "Il mal di testa", en: "Headache", correct: false },
          { it: "L'ansia", en: "Anxiety", correct: false },
        ],
      },
      {
        it: "Cosa dice il farmacista sulla valeriana?", en: "What does the pharmacist say about valerian?",
        options: [
          { it: "Ha effetti collaterali", en: "It has side effects", correct: false },
          { it: "È molto efficace", en: "It's very effective", correct: true },
          { it: "È molto costosa", en: "It's very expensive", correct: false },
        ],
      },
    ],
    [
      { it: "efficace", en: "effective" },
      { it: "la goccia", en: "drop" },
    ],
    {
      question: "Il paziente chiede informazioni sul dosaggio. Cosa dice?",
      questionTranslation: "The patient asks for dosage information. What does he say?",
      options: [
        { text: "Quante gocce devo prendere?", translation: "How many drops should I take?", correct: true },
        { text: "È buona questa medicina?", translation: "Is this medicine good?", correct: false },
        { text: "Posso pagare con carta?", translation: "Can I pay with a card?", correct: false },
      ],
    },
  );

  // ========================
  // MODULE 11 — Medical History (B2, level=3)
  // ========================

  // --- OLD 1: Discussing Family Medical History ---
  await addExperience(11, "Discussing Family Medical History", 3, "Doctor",
    [
      { it: "Ci sono malattie ereditarie nella sua famiglia?", en: "Are there hereditary diseases in your family?", speaker: "doctor" },
      { it: "Mio padre aveva il diabete e mia madre aveva la pressione alta.", en: "My father had diabetes and my mother had high blood pressure.", speaker: "patient" },
      { it: "Allora dovremmo controllare regolarmente i suoi valori del sangue.", en: "Then we should check your blood values regularly.", speaker: "doctor" },
      { it: "Con che frequenza consiglia una visita di controllo?", en: "How often do you recommend a check-up?", speaker: "patient" },
      { it: "Una volta all'anno è sufficiente se non ha disturbi.", en: "Once a year is sufficient if you are symptom-free.", speaker: "doctor" },
    ],
    [
      { it: "ereditario", en: "hereditary" },
      { it: "la pressione alta", en: "high blood pressure" },
      { it: "la visita di controllo", en: "preventive check-up" },
    ],
    [
      {
        it: "Quali malattie ci sono nella famiglia del paziente?", en: "What diseases are there in the patient's family?",
        options: [
          { it: "Diabete e pressione alta", en: "Diabetes and high blood pressure", correct: true },
          { it: "Cancro e asma", en: "Cancer and asthma", correct: false },
          { it: "Infarto e ictus", en: "Heart attack and stroke", correct: false },
        ],
      },
      {
        it: "Con che frequenza il dottore consiglia una visita?", en: "How often does the doctor recommend a check-up?",
        options: [
          { it: "Una volta all'anno", en: "Once a year", correct: true },
          { it: "Ogni sei mesi", en: "Every six months", correct: false },
          { it: "Ogni due anni", en: "Every two years", correct: false },
        ],
      },
    ],
    [
      { it: "controllare", en: "to check" },
      { it: "sufficiente", en: "sufficient" },
    ],
    {
      question: "Il paziente vuole parlare dei rischi di un'operazione. Cosa dice?",
      questionTranslation: "The patient wants to talk about the risks of surgery. What does he say?",
      options: [
        { text: "Vorrei parlare con il chirurgo dei rischi.", translation: "I would like to talk to the surgeon about the risks.", correct: true },
        { text: "Vorrei mangiare qualcosa.", translation: "I'd like to eat something.", correct: false },
        { text: "Quando posso andare a casa?", translation: "When can I go home?", correct: false },
      ],
    },
  );

  // --- OLD 2: Preparing for Surgery Consultation ---
  await addExperience(11, "Preparing for Surgery Consultation", 3, "Doctor",
    [
      { it: "Abbiamo ricevuto i risultati della risonanza magnetica.", en: "We have received the MRI results.", speaker: "doctor" },
      { it: "La lesione del menisco richiede un intervento artroscopico.", en: "The meniscus tear requires an arthroscopic procedure.", speaker: "doctor" },
      { it: "Quanto durano l'operazione e la guarigione?", en: "How long does the surgery and recovery process take?", speaker: "patient" },
      { it: "L'intervento dura circa 45 minuti. Può tornare a casa lo stesso giorno.", en: "The procedure takes about 45 minutes. You can go home the same day.", speaker: "doctor" },
      { it: "Tra sei settimane dovrebbe riuscire a camminare normalmente.", en: "In six weeks you should be able to walk normally again.", speaker: "doctor" },
    ],
    [
      { it: "l'intervento", en: "procedure/surgery", article: "l'" },
      { it: "la guarigione", en: "recovery", article: "la" },
    ],
    [
      {
        it: "Che tipo di esame è stato fatto?", en: "What type of exam was done?",
        options: [
          { it: "Risonanza magnetica", en: "MRI", correct: true },
          { it: "Radiografia", en: "X-ray", correct: false },
          { it: "Ecografia", en: "Ultrasound", correct: false },
        ],
      },
      {
        it: "Quanto dura l'intervento?", en: "How long does the surgery last?",
        options: [
          { it: "45 minuti", en: "45 minutes", correct: true },
          { it: "30 minuti", en: "30 minutes", correct: false },
          { it: "60 minuti", en: "60 minutes", correct: false },
        ],
      },
    ],
    [
      { it: "la lesione del menisco", en: "meniscus tear" },
      { it: "artroscopico", en: "arthroscopic" },
    ],
    {
      question: "Il paziente vuole un parere diverso. Cosa dice?",
      questionTranslation: "The patient wants a different opinion. What does he say?",
      options: [
        { text: "Vorrei un secondo parere.", translation: "I would like a second opinion.", correct: true },
        { text: "Non accetto la diagnosi.", translation: "I don't accept the diagnosis.", correct: false },
        { text: "Può operarmi?", translation: "Can you operate on me?", correct: false },
      ],
    },
  );

  // --- NEW 3: Talking About Previous Surgeries ---
  await addExperience(11, "Talking About Previous Surgeries", 3, "Doctor",
    [
      { it: "È già stato operato in passato?", en: "Have you had any surgery in the past?", speaker: "doctor" },
      { it: "Sì, mi sono operato al ginocchio destro cinque anni fa.", en: "Yes, I had surgery on my right knee five years ago.", speaker: "patient" },
      { it: "Ha avuto complicazioni durante o dopo l'intervento?", en: "Did you have any complications during or after the surgery?", speaker: "doctor" },
      { it: "No, tutto è andato bene. Il recupero è stato rapido.", en: "No, everything went well. The recovery was quick.", speaker: "patient" },
      { it: "Bene, lo annoto nella sua cartella clinica.", en: "Good, I'll note that in your medical record.", speaker: "doctor" },
    ],
    [
      { it: "l'operazione", en: "surgery", article: "l'" },
      { it: "la complicazione", en: "complication", article: "la" },
      { it: "la cartella clinica", en: "medical record", article: "la" },
    ],
    [
      {
        it: "Su quale parte del corpo è stato operato il paziente?", en: "On which body part was the patient operated?",
        options: [
          { it: "Ginocchio destro", en: "Right knee", correct: true },
          { it: "Ginocchio sinistro", en: "Left knee", correct: false },
          { it: "Spalla destra", en: "Right shoulder", correct: false },
        ],
      },
      {
        it: "Come è stato il recupero?", en: "How was the recovery?",
        options: [
          { it: "Lento e difficile", en: "Slow and difficult", correct: false },
          { it: "Rapido", en: "Quick", correct: true },
          { it: "Ancora in corso", en: "Still ongoing", correct: false },
        ],
      },
    ],
    [
      { it: "annotare", en: "to note down" },
      { it: "il ginocchio", en: "knee" },
    ],
    {
      question: "Il dottore chiede informazioni sul passato chirurgico. Cosa dice?",
      questionTranslation: "The doctor asks about surgical history. What does he say?",
      options: [
        { text: "È già stato operato in passato?", translation: "Have you had any surgery in the past?", correct: true },
        { text: "Dove abita?", translation: "Where do you live?", correct: false },
        { text: "Che lavoro fa?", translation: "What do you do for work?", correct: false },
      ],
    },
  );

  // --- NEW 4: Discussing Medication History ---
  await addExperience(11, "Discussing Medication History", 3, "Doctor",
    [
      { it: "Quali farmaci prende regolarmente?", en: "What medications do you take regularly?", speaker: "doctor" },
      { it: "Prendo un anticoagulante per la prevenzione di coaguli.", en: "I take a blood thinner to prevent clots.", speaker: "patient" },
      { it: "Da quanto tempo lo prende?", en: "How long have you been taking it?", speaker: "doctor" },
      { it: "Da quando ho avuto la trombosi due anni fa.", en: "Since I had thrombosis two years ago.", speaker: "patient" },
      { it: "Continui con la terapia e faccia i controlli periodici.", en: "Continue the therapy and get periodic check-ups.", speaker: "doctor" },
    ],
    [
      { it: "l'anticoagulante", en: "blood thinner", article: "l'" },
      { it: "la trombosi", en: "thrombosis", article: "la" },
      { it: "la terapia", en: "therapy", article: "la" },
    ],
    [
      {
        it: "Perché il paziente prende l'anticoagulante?", en: "Why does the patient take a blood thinner?",
        options: [
          { it: "Per prevenire coaguli", en: "To prevent clots", correct: true },
          { it: "Per il mal di testa", en: "For headaches", correct: false },
          { it: "Per abbassare la febbre", en: "To lower a fever", correct: false },
        ],
      },
      {
        it: "Da quanto tempo il paziente prende questo farmaco?", en: "How long has the patient been taking this medication?",
        options: [
          { it: "Da due anni", en: "For two years", correct: true },
          { it: "Da due mesi", en: "For two months", correct: false },
          { it: "Da due settimane", en: "For two weeks", correct: false },
        ],
      },
    ],
    [
      { it: "regolarmente", en: "regularly" },
      { it: "periodico", en: "periodic" },
    ],
    {
      question: "Il paziente spiega da quanto tempo prende il farmaco. Cosa dice?",
      questionTranslation: "The patient explains how long he has been taking the medication. What does he say?",
      options: [
        { text: "Da quando ho avuto la trombosi due anni fa.", translation: "Since I had thrombosis two years ago.", correct: true },
        { text: "Da quando sono nato.", translation: "Since I was born.", correct: false },
        { text: "Non me lo ricordo.", translation: "I don't remember.", correct: false },
      ],
    },
  );

  // --- NEW 5: Reviewing Lifestyle Habits ---
  await addExperience(11, "Reviewing Lifestyle Habits", 3, "Doctor",
    [
      { it: "Parliamo delle sue abitudini quotidiane. Fuma?", en: "Let's talk about your daily habits. Do you smoke?", speaker: "doctor" },
      { it: "Sì, fumo circa dieci sigarette al giorno.", en: "Yes, I smoke about ten cigarettes a day.", speaker: "patient" },
      { it: "Beve alcolici regolarmente?", en: "Do you drink alcohol regularly?", speaker: "doctor" },
      { it: "Solo un bicchiere di vino a cena.", en: "Just a glass of wine at dinner.", speaker: "patient" },
      { it: "Le consiglio di ridurre il fumo e fare attività fisica.", en: "I advise you to reduce smoking and do physical activity.", speaker: "doctor" },
    ],
    [
      { it: "l'abitudine", en: "habit", article: "l'" },
      { it: "fumare", en: "to smoke" },
      { it: "l'attività fisica", en: "physical activity", article: "l'" },
    ],
    [
      {
        it: "Quante sigarette fuma il paziente al giorno?", en: "How many cigarettes does the patient smoke per day?",
        options: [
          { it: "Circa dieci", en: "About ten", correct: true },
          { it: "Circa venti", en: "About twenty", correct: false },
          { it: "Nessuna", en: "None", correct: false },
        ],
      },
      {
        it: "Il paziente beve alcolici?", en: "Does the patient drink alcohol?",
        options: [
          { it: "Sì, birra tutti i giorni", en: "Yes, beer every day", correct: false },
          { it: "Solo un bicchiere di vino a cena", en: "Just a glass of wine at dinner", correct: true },
          { it: "No, mai", en: "No, never", correct: false },
        ],
      },
    ],
    [
      { it: "ridurre", en: "to reduce" },
      { it: "il fumo", en: "smoking" },
    ],
    {
      question: "Il medico dà un consiglio sullo stile di vita. Cosa dice?",
      questionTranslation: "The doctor gives lifestyle advice. What does he say?",
      options: [
        { text: "Le consiglio di ridurre il fumo e fare attività fisica.", translation: "I advise you to reduce smoking and do physical activity.", correct: true },
        { text: "Continui così, va bene.", translation: "Keep it up, that's fine.", correct: false },
        { text: "Prenda più medicine.", translation: "Take more medicine.", correct: false },
      ],
    },
  );

  // ========================
  // MODULE 12 — Specialist Visit (B2, level=3)
  // ========================

  // --- OLD 1: Requesting a Second Opinion ---
  await addExperience(12, "Requesting a Second Opinion", 3, "Doctor",
    [
      { it: "Vorrei chiedere un secondo parere.", en: "I would like to get a second opinion.", speaker: "patient" },
      { it: "È assolutamente comprensibile. Posso consigliarle una collega.", en: "That's completely understandable. I can recommend a colleague.", speaker: "doctor" },
      { it: "Può darmi i referti per l'appuntamento?", en: "Can you give me the findings for the appointment?", speaker: "patient" },
      { it: "Certamente. Le faccio copiare tutti i documenti.", en: "Of course. I'll have all the documents copied for you.", speaker: "doctor" },
      { it: "Grazie per la comprensione.", en: "Thank you for your understanding.", speaker: "patient" },
    ],
    [
      { it: "il secondo parere", en: "second opinion", article: "il" },
      { it: "il referto", en: "medical finding/report", article: "il" },
    ],
    [
      {
        it: "Cosa chiede il paziente?", en: "What does the patient ask for?",
        options: [
          { it: "Un secondo parere", en: "A second opinion", correct: true },
          { it: "Un'impegnativa", en: "A referral", correct: false },
          { it: "Una ricetta", en: "A prescription", correct: false },
        ],
      },
      {
        it: "Cosa offre di fare il dottore?", en: "What does the doctor offer to do?",
        options: [
          { it: "Copie dei referti", en: "Copies of the reports", correct: true },
          { it: "Un appuntamento la prossima settimana", en: "An appointment next week", correct: false },
          { it: "Una ricetta gratuita", en: "A free prescription", correct: false },
        ],
      },
    ],
    [
      { it: "chiedere", en: "to obtain/ask for" },
      { it: "dare", en: "to give" },
    ],
    {
      question: "Il paziente si presenta allo specialista. Cosa dice?",
      questionTranslation: "The patient introduces himself to the specialist. What does he say?",
      options: [
        { text: "Buongiorno, mi chiamo ... e sono contento di essere qui.", translation: "Good morning, my name is ... and I'm happy to be here.", correct: true },
        { text: "Buongiorno, vorrei comprare un biglietto.", translation: "Good morning, I'd like to buy a ticket.", correct: false },
        { text: "Dov'è il bagno?", translation: "Where is the bathroom?", correct: false },
      ],
    },
    undefined,
    [
      { text: "il secondo parere", translation: "second opinion", correctValue: "opinion" },
      { text: "il referto", translation: "medical report", correctValue: "report" },
      { text: "i documenti", translation: "documents", correctValue: "documents" },
    ],
  );

  // --- NEW 2: Consulting a Cardiologist ---
  await addExperience(12, "Consulting a Cardiologist", 3, "Doctor",
    [
      { it: "Il mio medico di base mi ha mandato per un controllo cardiologico.", en: "My GP sent me for a cardiology check-up.", speaker: "patient" },
      { it: "Ha avuto sintomi come dolore al petto o palpitazioni?", en: "Have you had symptoms like chest pain or palpitations?", speaker: "doctor" },
      { it: "A volte sento il cuore battere forte senza motivo.", en: "Sometimes I feel my heart beating hard for no reason.", speaker: "patient" },
      { it: "Faremo un elettrocardiogramma per valutare il ritmo.", en: "We'll do an electrocardiogram to evaluate the rhythm.", speaker: "doctor" },
      { it: "Devo prepararmi in qualche modo per l'esame?", en: "Do I need to prepare in any way for the test?", speaker: "patient" },
    ],
    [
      { it: "il cardiologo", en: "cardiologist", article: "il" },
      { it: "la palpitazione", en: "palpitation", article: "la" },
      { it: "l'elettrocardiogramma", en: "electrocardiogram", article: "l'" },
    ],
    [
      {
        it: "Perché il paziente è dal cardiologo?", en: "Why is the patient at the cardiologist?",
        options: [
          { it: "Il medico di base lo ha mandato", en: "His GP sent him", correct: true },
          { it: "Ha avuto un infarto", en: "He had a heart attack", correct: false },
          { it: "È un controllo di routine", en: "It's a routine check", correct: false },
        ],
      },
      {
        it: "Che esame propone lo specialista?", en: "What test does the specialist propose?",
        options: [
          { it: "Una radiografia al torace", en: "A chest X-ray", correct: false },
          { it: "Un elettrocardiogramma", en: "An electrocardiogram", correct: true },
          { it: "Un esame del sangue", en: "A blood test", correct: false },
        ],
      },
    ],
    [
      { it: "il petto", en: "chest" },
      { it: "il ritmo", en: "rhythm" },
    ],
    {
      question: "Il paziente descrive i sintomi al cardiologo. Cosa dice?",
      questionTranslation: "The patient describes the symptoms to the cardiologist. What does he say?",
      options: [
        { text: "A volte sento il cuore battere forte senza motivo.", translation: "Sometimes I feel my heart beating hard for no reason.", correct: true },
        { text: "Mi fa male il ginocchio.", translation: "My knee hurts.", correct: false },
        { text: "Ho mal di gola.", translation: "I have a sore throat.", correct: false },
      ],
    },
  );

  // --- NEW 3: Visiting an Orthopedic Specialist ---
  await addExperience(12, "Visiting an Orthopedic Specialist", 3, "Doctor",
    [
      { it: "Ho dolore alla spalla da mesi e il mio medico mi ha prescritto una risonanza.", en: "I've had shoulder pain for months and my doctor prescribed an MRI.", speaker: "patient" },
      { it: "Vediamo la risonanza... C'è una lesione della cuffia dei rotatori.", en: "Let's look at the MRI... There is a rotator cuff tear.", speaker: "doctor" },
      { it: "È grave? Dovrò operarmi?", en: "Is it serious? Will I need surgery?", speaker: "patient" },
      { it: "Possiamo provare prima con la fisioterapia per rinforzare i muscoli.", en: "We can try physiotherapy first to strengthen the muscles.", speaker: "doctor" },
      { it: "Se non migliora, potremmo valutare un intervento chirurgico.", en: "If it doesn't improve, we could consider surgery.", speaker: "doctor" },
    ],
    [
      { it: "la spalla", en: "shoulder", article: "la" },
      { it: "la cuffia dei rotatori", en: "rotator cuff", article: "la" },
      { it: "la fisioterapia", en: "physiotherapy", article: "la" },
    ],
    [
      {
        it: "Che problema ha il paziente alla spalla?", en: "What problem does the patient have with his shoulder?",
        options: [
          { it: "Una lesione della cuffia dei rotatori", en: "A rotator cuff tear", correct: true },
          { it: "Una frattura", en: "A fracture", correct: false },
          { it: "Un'infiammazione", en: "An inflammation", correct: false },
        ],
      },
      {
        it: "Cosa propone prima il medico?", en: "What does the doctor propose first?",
        options: [
          { it: "Un intervento chirurgico", en: "Surgery", correct: false },
          { it: "La fisioterapia", en: "Physiotherapy", correct: true },
          { it: "Un'altra risonanza", en: "Another MRI", correct: false },
        ],
      },
    ],
    [
      { it: "rinforzare", en: "to strengthen" },
      { it: "il muscolo", en: "muscle" },
    ],
    {
      question: "Il paziente chiede se dovrà operarsi. Cosa dice?",
      questionTranslation: "The patient asks if he will need surgery. What does he say?",
      options: [
        { text: "È grave? Dovrò operarmi?", translation: "Is it serious? Will I need surgery?", correct: true },
        { text: "Quando posso tornare a lavorare?", translation: "When can I return to work?", correct: false },
        { text: "Quanto costa la visita?", translation: "How much does the visit cost?", correct: false },
      ],
    },
  );

  // --- NEW 4: Gastroenterology Consultation ---
  await addExperience(12, "Gastroenterology Consultation", 3, "Doctor",
    [
      { it: "Da mesi ho bruciore di stomaco e reflusso acido.", en: "I've had heartburn and acid reflux for months.", speaker: "patient" },
      { it: "Ha fatto una gastroscopia per esaminare l'esofago?", en: "Have you had a gastroscopy to examine the esophagus?", speaker: "doctor" },
      { it: "Non ancora. Il mio medico mi ha detto di parlarne con lei.", en: "Not yet. My doctor told me to talk to you.", speaker: "patient" },
      { it: "Le prescrivo una gastroscopia per vedere lo stato della mucosa.", en: "I'll prescribe a gastroscopy to see the condition of the mucosa.", speaker: "doctor" },
      { it: "Nel frattempo eviti cibi grassi, caffè e alcol.", en: "In the meantime, avoid fatty foods, coffee, and alcohol.", speaker: "doctor" },
    ],
    [
      { it: "il bruciore di stomaco", en: "heartburn", article: "il" },
      { it: "il reflusso acido", en: "acid reflux", article: "il" },
      { it: "la gastroscopia", en: "gastroscopy", article: "la" },
    ],
    [
      {
        it: "Che sintomo ha il paziente da mesi?", en: "What symptom has the patient had for months?",
        options: [
          { it: "Bruciore di stomaco e reflusso", en: "Heartburn and reflux", correct: true },
          { it: "Dolore al petto", en: "Chest pain", correct: false },
          { it: "Mal di testa", en: "Headache", correct: false },
        ],
      },
      {
        it: "Cosa deve evitare il paziente?", en: "What should the patient avoid?",
        options: [
          { it: "Frutta e verdura", en: "Fruit and vegetables", correct: false },
          { it: "Cibi grassi, caffè e alcol", en: "Fatty foods, coffee and alcohol", correct: true },
          { it: "Acqua e tè", en: "Water and tea", correct: false },
        ],
      },
    ],
    [
      { it: "l'esofago", en: "esophagus", article: "l'" },
      { it: "la mucosa", en: "mucosa", article: "la" },
    ],
    {
      question: "Il medico spiega cosa fare prima dell'esame. Cosa dice?",
      questionTranslation: "The doctor explains what to do before the exam. What does he say?",
      options: [
        { text: "Eviti cibi grassi, caffè e alcol.", translation: "Avoid fatty foods, coffee and alcohol.", correct: true },
        { text: "Mangi molto prima dell'esame.", translation: "Eat a lot before the exam.", correct: false },
        { text: "Prenda le medicine come sempre.", translation: "Take the medicines as usual.", correct: false },
      ],
    },
  );

  // --- NEW 5: Neurologist Visit ---
  await addExperience(12, "Neurologist Visit", 3, "Doctor",
    [
      { it: "Ho frequenti mal di testa che mi impediscono di lavorare.", en: "I have frequent headaches that prevent me from working.", speaker: "patient" },
      { it: "Può descrivere la tipologia del dolore?", en: "Can you describe the type of pain?", speaker: "doctor" },
      { it: "È un dolore pulsante, spesso accompagnato da nausea.", en: "It's a throbbing pain, often accompanied by nausea.", speaker: "patient" },
      { it: "Potrebbe trattarsi di emicrania. Le prescrivo una TAC.", en: "It could be migraines. I'll prescribe a CT scan.", speaker: "doctor" },
      { it: "Ci sono farmaci specifici per prevenire gli attacchi?", en: "Are there specific drugs to prevent the attacks?", speaker: "patient" },
    ],
    [
      { it: "l'emicrania", en: "migraine", article: "l'" },
      { it: "pulsante", en: "throbbing" },
      { it: "la TAC", en: "CT scan", article: "la" },
    ],
    [
      {
        it: "Che tipo di mal di testa ha il paziente?", en: "What type of headache does the patient have?",
        options: [
          { it: "Un dolore pulsante", en: "A throbbing pain", correct: true },
          { it: "Un dolore sordo e costante", en: "A dull and constant pain", correct: false },
          { it: "Un dolore acuto e improvviso", en: "A sharp and sudden pain", correct: false },
        ],
      },
      {
        it: "Che esame prescrive il neurologo?", en: "What test does the neurologist prescribe?",
        options: [
          { it: "Una risonanza magnetica", en: "An MRI", correct: false },
          { it: "Una TAC", en: "A CT scan", correct: true },
          { it: "Un'elettromiografia", en: "An electromyography", correct: false },
        ],
      },
    ],
    [
      { it: "impedire", en: "to prevent" },
      { it: "l'attacco", en: "attack" },
    ],
    {
      question: "Il paziente chiede informazioni sui farmaci preventivi. Cosa dice?",
      questionTranslation: "The patient asks about preventive medications. What does he say?",
      options: [
        { text: "Ci sono farmaci specifici per prevenire gli attacchi?", translation: "Are there specific drugs to prevent the attacks?", correct: true },
        { text: "Dove posso comprare le medicine?", translation: "Where can I buy the medicines?", correct: false },
        { text: "Quanto costa la TAC?", translation: "How much does the CT scan cost?", correct: false },
      ],
    },
  );

  console.log("  ✓ Doctor seeded");
}
