export async function seedJobInterview(addExperience: Function) {
  // ========================================
  // SCENARIO 3: JOB INTERVIEW
  // ========================================

  // ── Module 13 (A2) Self-Introduction ──
  await addExperience(13, "Introducing Yourself", 1, "Job Interview",
    [
      { it: "Buongiorno, mi chiamo Anna Rossi.", en: "Good day, my name is Anna Rossi.", speaker: "candidate" },
      { it: "Vengo dalla Spagna e vivo a Milano da due anni.", en: "I come from Spain and have been living in Milan for two years.", speaker: "candidate" },
      { it: "Ho studiato economia e commercio.", en: "I studied economics and business.", speaker: "candidate" },
      { it: "Attualmente seguo un corso di italiano per migliorare il mio B2.", en: "Currently I'm taking an Italian course to improve my B2.", speaker: "candidate" },
      { it: "Sono molto motivata a lavorare in Italia.", en: "I am very motivated to work in Italy.", speaker: "candidate" },
    ],
    [{ it: "il nome", en: "name" }, { it: "studiare", en: "to study" }, { it: "motivato", en: "motivated" }],
    [
      { it: "Da dove viene Anna Rossi?", en: "Where does Anna Rossi come from?", options: [{ it: "Dall'Italia", en: "From Italy", correct: false }, { it: "Dalla Spagna", en: "From Spain", correct: true }, { it: "Dalla Francia", en: "From France", correct: false }] },
      { it: "Cosa ha studiato?", en: "What did she study?", options: [{ it: "Informatica", en: "Computer science", correct: false }, { it: "Economia e commercio", en: "Economics and business", correct: true }, { it: "Medicina", en: "Medicine", correct: false }] },
    ],
    [{ it: "l'economia", en: "economics" }, { it: "il corso di italiano", en: "Italian course" }],
    { question: "Il colloquiatore chiede del suo lavoro. Cosa dice?", questionTranslation: "The interviewer asks about your work. What do you say?", options: [
      { text: "Lavoro come ingegnere in un'azienda italiana.", translation: "I work as an engineer at an Italian company.", correct: true },
      { text: "Non lavoro.", translation: "I don't work.", correct: false },
      { text: "È un segreto.", translation: "That's a secret.", correct: false }
    ] },
  );

  await addExperience(13, "Talking About Your Current Job", 1, "Job Interview",
    [
      { it: "Di cosa si occupa?", en: "What do you do for a living?", speaker: "interviewer" },
      { it: "Lavoro come commessa in un negozio di abbigliamento.", en: "I work as a sales assistant in a clothing store.", speaker: "candidate" },
      { it: "Da quanto tempo lavora lì?", en: "Since when have you worked there?", speaker: "interviewer" },
      { it: "Da un anno. È un lavoro part-time.", en: "For a year. It's a part-time job.", speaker: "candidate" },
      { it: "Le piace il lavoro?", en: "Do you like the work?", speaker: "interviewer" },
    ],
    [{ it: "occuparsi", en: "to do (professionally)" }, { it: "il commesso", en: "sales assistant" }, { it: "il part-time", en: "part-time job" }],
    [
      { it: "Dove lavora Anna?", en: "Where does Anna work?", options: [{ it: "In un ristorante", en: "In a restaurant", correct: false }, { it: "In un negozio di abbigliamento", en: "In a clothing store", correct: true }, { it: "In un ufficio", en: "In an office", correct: false }] },
      { it: "Da quanto tempo lavora lì?", en: "How long has she worked there?", options: [{ it: "Da tre mesi", en: "For three months", correct: false }, { it: "Da un anno", en: "For a year", correct: true }, { it: "Da due anni", en: "For two years", correct: false }] },
    ],
    [{ it: "la commessa", en: "sales assistant (female)" }],
    { question: "Quali sono i suoi punti di forza?", questionTranslation: "What are your strengths?", options: [
      { text: "Sono organizzata, lavoro in squadra e imparo in fretta.", translation: "I'm organized, a team player, and learn fast.", correct: true },
      { text: "Dormo molto bene.", translation: "I can sleep very well.", correct: false },
      { text: "Arrivo sempre in ritardo.", translation: "I'm always late.", correct: false }
    ] },
  );

  await addExperience(13, "Describing Your Strengths", 1, "Job Interview",
    [
      { it: "Quali sono i suoi punti di forza?", en: "What are your strengths?", speaker: "interviewer" },
      { it: "Sono gentile e disponibile.", en: "I am friendly and helpful.", speaker: "candidate" },
      { it: "Inoltre imparo molto velocemente.", en: "Besides, I learn very quickly.", speaker: "candidate" },
      { it: "E mi piace lavorare in squadra.", en: "And I like working in a team.", speaker: "candidate" },
      { it: "Sono ottime qualità per la nostra azienda.", en: "Those are good qualities for our company.", speaker: "interviewer" },
    ],
    [{ it: "il punto di forza", en: "strength" }, { it: "disponibile", en: "helpful" }, { it: "la qualità", en: "quality" }],
    [
      { it: "Quale punto di forza Anna NON menziona?", en: "Which strength does Anna NOT mention?", options: [{ it: "Gentile", en: "Friendly", correct: false }, { it: "Imparare in fretta", en: "Fast learning", correct: false }, { it: "Parlare italiano perfetto", en: "Speaking perfect Italian", correct: true }] },
      { it: "Come le piace lavorare?", en: "How does she like to work?", options: [{ it: "Da sola", en: "Alone", correct: false }, { it: "In squadra", en: "In a team", correct: true }, { it: "Da casa", en: "From home", correct: false }] },
    ],
    [{ it: "gentile", en: "friendly" }, { it: "la squadra", en: "team" }],
    { question: "Il colloquiatore fa domande semplici. Cosa fa?", questionTranslation: "The interviewer asks simple questions. What do you do?", options: [
      { text: "Risponda con calma e onestà a ogni domanda.", translation: "Answer calmly and honestly.", correct: true },
      { text: "Dica che non risponde alle domande.", translation: "Say you won't answer questions.", correct: false },
      { text: "Chiami l'avvocato.", translation: "Call your lawyer.", correct: false }
    ] },
    undefined,
    [
      { text: "il punto di forza", translation: "strength", correctValue: "strength" },
      { text: "disponibile", translation: "helpful", correctValue: "helpful" },
      { text: "gentile", translation: "friendly", correctValue: "friendly" }
    ],
  );

  // NEW for Module 13
  await addExperience(13, "Talking About Your Education", 1, "Job Interview",
    [
      { it: "Può parlarmi del suo percorso di studi?", en: "Can you tell me about your educational background?", speaker: "interviewer" },
      { it: "Ho frequentato l'università di Bologna e mi sono laureata in lingue.", en: "I attended the University of Bologna and graduated in languages.", speaker: "candidate" },
      { it: "Oltre all'italiano, quali lingue parla?", en: "Besides Italian, what languages do you speak?", speaker: "interviewer" },
      { it: "Parlo spagnolo, inglese e un po' di francese.", en: "I speak Spanish, English, and a little French.", speaker: "candidate" },
      { it: "Ottimo, le nostre competenze linguistiche sono molto utili.", en: "Excellent, language skills are very useful to us.", speaker: "interviewer" },
    ],
    [{ it: "il percorso di studi", en: "educational background", article: "il" }, { it: "la laurea", en: "degree", article: "la" }, { it: "la competenza linguistica", en: "language skill", article: "la" }],
    [
      { it: "Dove ha studiato Anna?", en: "Where did Anna study?", options: [{ it: "All'università di Roma", en: "At the University of Rome", correct: false }, { it: "All'università di Bologna", en: "At the University of Bologna", correct: true }, { it: "All'università di Milano", en: "At the University of Milan", correct: false }] },
      { it: "Quante lingue parla Anna?", en: "How many languages does Anna speak?", options: [{ it: "Due lingue", en: "Two languages", correct: false }, { it: "Tre lingue", en: "Three languages", correct: true }, { it: "Quattro lingue", en: "Four languages", correct: false }] },
    ],
    [{ it: "laurearsi", en: "to graduate" }, { it: "la lingua", en: "language" }],
    { question: "Il colloquiatore chiede il suo livello di inglese. Cosa dice?", questionTranslation: "The interviewer asks about your English level. What do you say?", options: [
      { text: "Ho un livello B2 certificato e lo uso regolarmente.", translation: "I have a certified B2 level and use it regularly.", correct: true },
      { text: "Non parlo inglese.", translation: "I don't speak English.", correct: false },
      { text: "L'inglese è la mia lingua madre.", translation: "English is my mother tongue.", correct: false }
    ] },
  );

  await addExperience(13, "Discussing Career Goals", 1, "Job Interview",
    [
      { it: "Quali sono i suoi obiettivi professionali?", en: "What are your professional goals?", speaker: "interviewer" },
      { it: "Vorrei crescere in un'azienda dinamica e imparare dai migliori.", en: "I'd like to grow in a dynamic company and learn from the best.", speaker: "candidate" },
      { it: "Dove si vede tra cinque anni?", en: "Where do you see yourself in five years?", speaker: "interviewer" },
      { it: "Mi piacerebbe diventare responsabile di un piccolo team.", en: "I'd like to become a team leader.", speaker: "candidate" },
      { it: "È un'ambizione lodevole. Siamo sulla stessa linea.", en: "That's a commendable ambition. We're on the same page.", speaker: "interviewer" },
    ],
    [{ it: "l'obiettivo professionale", en: "career goal", article: "l'obiettivo" }, { it: "dinamico", en: "dynamic" }, { it: "l'ambizione", en: "ambition", article: "l'" }],
    [
      { it: "Dove si vede Anna tra cinque anni?", en: "Where does Anna see herself in five years?", options: [{ it: "Dirigente d'azienda", en: "Company director", correct: false }, { it: "Responsabile di un team", en: "Team leader", correct: true }, { it: "Lavoratrice freelance", en: "Freelancer", correct: false }] },
      { it: "Come descrive l'azienda che cerca?", en: "How does Anna describe the company she's looking for?", options: [{ it: "Tradizionale e stabile", en: "Traditional and stable", correct: false }, { it: "Dinamica", en: "Dynamic", correct: true }, { it: "Multinazionale", en: "Multinational", correct: false }] },
    ],
    [{ it: "crescere", en: "to grow" }, { it: "la linea", en: "line/page" }],
    { question: "Il colloquiatore chiede il suo hobby preferito. Cosa dice?", questionTranslation: "The interviewer asks about your favorite hobby. What do you say?", options: [
      { text: "Nel tempo libero faccio volontariato e leggo molto.", translation: "In my free time I volunteer and read a lot.", correct: true },
      { text: "Non ho hobby.", translation: "I don't have hobbies.", correct: false },
      { text: "È personale.", translation: "That's personal.", correct: false }
    ] },
  );

  // ── Module 14 (A2) First Interview ──
  await addExperience(14, "Answering Simple Questions", 1, "Job Interview",
    [
      { it: "Perché vuole lavorare per noi?", en: "Why do you want to work with us?", speaker: "interviewer" },
      { it: "Perché la vostra azienda ha un'ottima reputazione.", en: "Because your company has a very good reputation.", speaker: "candidate" },
      { it: "E il lavoro mi sembra molto interessante.", en: "And the work sounds very interesting.", speaker: "candidate" },
      { it: "Ha già esperienza in questo settore?", en: "Do you already have experience in this industry?", speaker: "interviewer" },
      { it: "Sì, ho lavorato per due anni in un lavoro simile.", en: "Yes, I worked for two years in a similar job.", speaker: "candidate" },
    ],
    [{ it: "la reputazione", en: "reputation" }, { it: "il settore", en: "industry" }, { it: "l'esperienza", en: "experience" }],
    [
      { it: "Perché Anna vuole lavorare per questa azienda?", en: "Why does Anna want to work for this company?", options: [{ it: "Per lo stipendio alto", en: "Because of the high salary", correct: false }, { it: "Per la buona reputazione", en: "Because of the good reputation", correct: true }, { it: "Per l'orario breve", en: "Because of the short hours", correct: false }] },
      { it: "Quanta esperienza ha Anna nel settore?", en: "How much experience does Anna have in the industry?", options: [{ it: "Un anno", en: "One year", correct: false }, { it: "Due anni", en: "Two years", correct: true }, { it: "Tre anni", en: "Three years", correct: false }] },
    ],
    [{ it: "la reputazione", en: "reputation" }, { it: "sembrare", en: "to sound" }],
    { question: "Vuole sapere di più sul posto. Cosa chiede?", questionTranslation: "You want to know more about the job. What do you ask?", options: [
      { text: "Può parlarmi dei compiti quotidiani?", translation: "Can you tell me about the daily tasks?", correct: true },
      { text: "Il cibo è gratuito?", translation: "Is there free food?", correct: false },
      { text: "Devo lavorare nei weekend?", translation: "Do I have to work weekends?", correct: false }
    ] },
  );

  await addExperience(14, "Asking About the Job", 1, "Job Interview",
    [
      { it: "Può dirmi di più sulla posizione?", en: "Can you tell me more about the position?", speaker: "candidate" },
      { it: "Lavorerà nel servizio clienti e aiuterà i nostri clienti.", en: "You work in customer service and help our clients.", speaker: "interviewer" },
      { it: "Qual è l'orario di lavoro?", en: "What are the working hours?", speaker: "candidate" },
      { it: "Dal lunedì al venerdì, dalle 9 alle 17.", en: "Monday to Friday, 9 AM to 5 PM.", speaker: "interviewer" },
      { it: "Mi sembra buono. Sono previste opzioni di smart working?", en: "That sounds good. Are there remote work options?", speaker: "candidate" },
    ],
    [{ it: "la posizione", en: "position/job" }, { it: "il servizio clienti", en: "customer service" }, { it: "l'orario di lavoro", en: "working hours" }],
    [
      { it: "In quale reparto lavorerebbe Anna?", en: "In which department would Anna work?", options: [{ it: "Vendite", en: "Sales", correct: false }, { it: "Servizio clienti", en: "Customer service", correct: true }, { it: "Contabilità", en: "Accounting", correct: false }] },
      { it: "Qual è l'orario di lavoro?", en: "What are the working hours?", options: [{ it: "8-16", en: "8 AM to 4 PM", correct: false }, { it: "9-17", en: "9 AM to 5 PM", correct: true }, { it: "10-18", en: "10 AM to 6 PM", correct: false }] },
    ],
    [{ it: "raccontare", en: "to tell" }, { it: "la possibilità", en: "possibility/option" }],
    { question: "Parlami della sua esperienza.", questionTranslation: "Tell me about your experience.", options: [
      { text: "Ho cinque anni di esperienza nella comunicazione con i clienti.", translation: "I have 5 years in client communication.", correct: true },
      { text: "Non ho mai lavorato.", translation: "I've never worked.", correct: false },
      { text: "L'esperienza non è importante.", translation: "Experience isn't important.", correct: false }
    ] },
  );

  // NEW for Module 14
  await addExperience(14, "Inquiring About Training Opportunities", 1, "Job Interview",
    [
      { it: "Offrite programmi di formazione per i nuovi assunti?", en: "Do you offer training programs for new hires?", speaker: "candidate" },
      { it: "Sì, abbiamo un corso di onboarding di due settimane.", en: "Yes, we have a two-week onboarding course.", speaker: "interviewer" },
      { it: "E ci sono possibilità di formazione continua?", en: "And are there opportunities for ongoing training?", speaker: "candidate" },
      { it: "Certamente, ogni anno organizziamo workshop e corsi di aggiornamento.", en: "Certainly, we organize workshops and refresher courses every year.", speaker: "interviewer" },
      { it: "Mi fa molto piacere. Tengo molto alla formazione.", en: "I'm very glad to hear that. I value training a lot.", speaker: "candidate" },
    ],
    [{ it: "la formazione", en: "training", article: "la" }, { it: "l'onboarding", en: "onboarding", article: "l'" }, { it: "il corso di aggiornamento", en: "refresher course", article: "il" }],
    [
      { it: "Quanto dura il corso di onboarding?", en: "How long is the onboarding course?", options: [{ it: "Una settimana", en: "One week", correct: false }, { it: "Due settimane", en: "Two weeks", correct: true }, { it: "Un mese", en: "One month", correct: false }] },
      { it: "Cosa offre l'azienda annualmente?", en: "What does the company offer annually?", options: [{ it: "Bonus e premi", en: "Bonuses and awards", correct: false }, { it: "Workshop e corsi di aggiornamento", en: "Workshops and refresher courses", correct: true }, { it: "Gite aziendali", en: "Company trips", correct: false }] },
    ],
    [{ it: "il programma", en: "program" }, { it: "la formazione continua", en: "ongoing training" }],
    { question: "Il colloquiatore parla della cultura aziendale. Cosa chiede?", questionTranslation: "The interviewer talks about company culture. What do you ask?", options: [
      { text: "Come descriverebbe l'atmosfera di lavoro?", translation: "How would you describe the work atmosphere?", correct: true },
      { text: "Quanto costa il caffè?", translation: "How much is the coffee?", correct: false },
      { text: "Quando è la pausa pranzo?", translation: "When is lunch break?", correct: false }
    ] },
  );

  await addExperience(14, "Asking About Company Culture", 1, "Job Interview",
    [
      { it: "Come descriverebbe l'atmosfera di lavoro?", en: "How would you describe the work atmosphere?", speaker: "candidate" },
      { it: "Siamo un team affiatato e collaborativo.", en: "We are a close-knit and collaborative team.", speaker: "interviewer" },
      { it: "Ci sono eventi sociali per i dipendenti?", en: "Are there social events for employees?", speaker: "candidate" },
      { it: "Sì, organizziamo cene di team ogni mese e una festa estiva.", en: "Yes, we organize team dinners every month and a summer party.", speaker: "interviewer" },
      { it: "Mi sembra un ambiente piacevole. Sono molto interessata.", en: "It sounds like a pleasant environment. I'm very interested.", speaker: "candidate" },
    ],
    [{ it: "l'atmosfera", en: "atmosphere", article: "l'" }, { it: "affiatato", en: "close-knit" }, { it: "l'evento sociale", en: "social event", article: "l'" }],
    [
      { it: "Come descrive l'azienda il colloquiatore?", en: "How does the interviewer describe the company?", options: [{ it: "Competitiva e seria", en: "Competitive and serious", correct: false }, { it: "Affiatata e collaborativa", en: "Close-knit and collaborative", correct: true }, { it: "Formale e gerarchica", en: "Formal and hierarchical", correct: false }] },
      { it: "Che eventi sociali organizzano?", en: "What social events do they organize?", options: [{ it: "Cene di team mensili e festa estiva", en: "Monthly team dinners and summer party", correct: true }, { it: "Feste solo a Natale", en: "Parties only at Christmas", correct: false }, { it: "Gite in montagna", en: "Mountain trips", correct: false }] },
    ],
    [{ it: "il team", en: "team" }, { it: "il dipendente", en: "employee" }],
    { question: "Il colloquio è finito. Cosa dice per congedarsi?", questionTranslation: "The interview is over. What do you say to say goodbye?", options: [
      { text: "Grazie per il suo tempo. Attendo con piacere un suo riscontro.", translation: "Thank you for your time. I look forward to your response.", correct: true },
      { text: "Finalmente è finito.", translation: "Finally it's over.", correct: false },
      { text: "Arrivederci e buona fortuna.", translation: "Goodbye and good luck.", correct: false }
    ] },
  );

  await addExperience(14, "Discussing Availability", 1, "Job Interview",
    [
      { it: "Quando potrebbe iniziare a lavorare con noi?", en: "When could you start working with us?", speaker: "interviewer" },
      { it: "Devo dare un preavviso di due settimane al mio attuale datore.", en: "I need to give two weeks' notice to my current employer.", speaker: "candidate" },
      { it: "Quindi potrebbe iniziare dal primo del mese prossimo?", en: "So you could start on the first of next month?", speaker: "interviewer" },
      { it: "Sì, sarebbe perfetto. Il preavviso scade proprio alla fine del mese.", en: "Yes, that would be perfect. The notice period ends at the end of the month.", speaker: "candidate" },
      { it: "Perfetto, segnerò questa data.", en: "Perfect, I'll note this date.", speaker: "interviewer" },
    ],
    [{ it: "iniziare", en: "to start" }, { it: "il preavviso", en: "notice period", article: "il" }, { it: "il datore di lavoro", en: "employer", article: "il" }],
    [
      { it: "Quanto preavviso deve dare Anna?", en: "How much notice does Anna need to give?", options: [{ it: "Una settimana", en: "One week", correct: false }, { it: "Due settimane", en: "Two weeks", correct: true }, { it: "Un mese", en: "One month", correct: false }] },
      { it: "Quando potrebbe iniziare Anna?", en: "When could Anna start?", options: [{ it: "Immediatamente", en: "Immediately", correct: false }, { it: "Il primo del mese prossimo", en: "On the first of next month", correct: true }, { it: "Tra tre mesi", en: "In three months", correct: false }] },
    ],
    [{ it: "la disponibilità", en: "availability" }],
    { question: "Il colloquiatore chiede se può fare straordinari. Cosa dice?", questionTranslation: "The interviewer asks if you can work overtime. What do you say?", options: [
      { text: "Sì, quando necessario sono disponibile a fare straordinari.", translation: "Yes, when necessary I'm available to work overtime.", correct: true },
      { text: "No, mai.", translation: "No, never.", correct: false },
      { text: "Solo se pagato triplo.", translation: "Only if paid triple.", correct: false }
    ] },
  );

  // ── Module 15 (B1) Experience & Skills ──
  await addExperience(15, "Presenting Your Work Experience", 2, "Job Interview",
    [
      { it: "Mi parli della sua precedente esperienza lavorativa.", en: "Tell me about your previous work experience.", speaker: "interviewer" },
      { it: "Ho lavorato per tre anni come assistente di progetto.", en: "I worked for three years as a project assistant.", speaker: "candidate" },
      { it: "I miei compiti principali erano la pianificazione e la comunicazione con i clienti.", en: "My main tasks were scheduling and client communication.", speaker: "candidate" },
      { it: "Ha esperienza con software di project management?", en: "Do you have experience with project management software?", speaker: "interviewer" },
      { it: "Sì, ho lavorato con Trello e Jira.", en: "Yes, I have worked with Trello and Jira.", speaker: "candidate" },
    ],
    [{ it: "l'esperienza lavorativa", en: "work experience", article: "l'" }, { it: "il compito principale", en: "main task", article: "il" }, { it: "la pianificazione", en: "scheduling", article: "la" }],
    [
      { it: "Per quanto tempo Anna ha lavorato come assistente di progetto?", en: "How long did Anna work as a project assistant?", options: [{ it: "Due anni", en: "Two years", correct: false }, { it: "Tre anni", en: "Three years", correct: true }, { it: "Quattro anni", en: "Four years", correct: false }] },
      { it: "Con quale software ha lavorato?", en: "Which software has she worked with?", options: [{ it: "Excel e Word", en: "Excel and Word", correct: false }, { it: "Trello e Jira", en: "Trello and Jira", correct: true }, { it: "Photoshop e Illustrator", en: "Photoshop and Illustrator", correct: false }] },
    ],
    [{ it: "precedente", en: "previous" }, { it: "la comunicazione con i clienti", en: "client communication" }],
    { question: "Il colloquiatore fa una domanda difficile. Cosa fa?", questionTranslation: "The interviewer asks a tough question. What do you do?", options: [
      { text: "Si prenda un momento e risponda con calma.", translation: "Take a moment and answer calmly.", correct: true },
      { text: "Dica semplicemente 'Non lo so'.", translation: "Just say 'I don't know'.", correct: false },
      { text: "Cambi argomento.", translation: "Change the subject.", correct: false }
    ] },
  );

  await addExperience(15, "Handling Difficult Questions", 2, "Job Interview",
    [
      { it: "Perché ha lasciato il suo ultimo lavoro?", en: "Why did you quit your last job?", speaker: "interviewer" },
      { it: "Volevo crescere professionalmente.", en: "I wanted to develop professionally.", speaker: "candidate" },
      { it: "Non c'erano possibilità di avanzamento?", en: "Were there no advancement opportunities?", speaker: "interviewer" },
      { it: "Purtroppo no. L'azienda era molto piccola.", en: "Unfortunately not. The company was very small.", speaker: "candidate" },
      { it: "Capisco. Qui offriamo buone opportunità di crescita.", en: "I understand. Here we offer good growth opportunities.", speaker: "interviewer" },
    ],
    [{ it: "lasciare", en: "to quit/resign" }, { it: "la possibilità di avanzamento", en: "advancement opportunity" }, { it: "l'opportunità di crescita", en: "growth opportunity" }],
    [
      { it: "Perché Anna ha lasciato il suo ultimo lavoro?", en: "Why did Anna quit her last job?", options: [{ it: "Per lo stipendio basso", en: "Because of the low salary", correct: false }, { it: "Per mancanza di possibilità di avanzamento", en: "Because of missing advancement opportunities", correct: true }, { it: "Per il lungo tragitto", en: "Because of the long commute", correct: false }] },
      { it: "Cosa offre la nuova azienda?", en: "What does the new company offer?", options: [{ it: "Stipendio più alto", en: "Higher salary", correct: false }, { it: "Opportunità di crescita", en: "Growth opportunities", correct: true }, { it: "Auto aziendale", en: "Company car", correct: false }] },
    ],
    [{ it: "crescere", en: "to develop/grow" }, { it: "offrire", en: "to offer" }],
    { question: "Qual è la sua aspettativa di stipendio?", questionTranslation: "What is your salary expectation?", options: [
      { text: "In base alla mia esperienza, ritengo adeguati 55.000 euro.", translation: "Based on my experience, 55k is appropriate.", correct: true },
      { text: "Il più possibile.", translation: "As much as possible.", correct: false },
      { text: "Non mi interessa.", translation: "I don't care.", correct: false }
    ] },
  );

  // NEW for Module 15
  await addExperience(15, "Demonstrating Teamwork Skills", 2, "Job Interview",
    [
      { it: "Può farmi un esempio di lavoro in squadra?", en: "Can you give me an example of teamwork?", speaker: "interviewer" },
      { it: "Nel mio ultimo progetto abbiamo collaborato in quattro per rispettare la scadenza.", en: "In my last project, four of us collaborated to meet the deadline.", speaker: "candidate" },
      { it: "Che ruolo aveva nel team?", en: "What role did you have in the team?", speaker: "interviewer" },
      { it: "Ero la coordinatrice, mi occupavo di dividere i compiti.", en: "I was the coordinator, I took care of dividing the tasks.", speaker: "candidate" },
      { it: "Come avete gestito i disaccordi?", en: "How did you handle disagreements?", speaker: "interviewer" },
    ],
    [{ it: "il lavoro in squadra", en: "teamwork", article: "il" }, { it: "la scadenza", en: "deadline", article: "la" }, { it: "il ruolo", en: "role", article: "il" }],
    [
      { it: "Quante persone collaboravano al progetto?", en: "How many people collaborated on the project?", options: [{ it: "Tre", en: "Three", correct: false }, { it: "Quattro", en: "Four", correct: true }, { it: "Cinque", en: "Five", correct: false }] },
      { it: "Qual era il ruolo di Anna nel team?", en: "What was Anna's role in the team?", options: [{ it: "La specialista tecnica", en: "The technical specialist", correct: false }, { it: "La coordinatrice", en: "The coordinator", correct: true }, { it: "La stagista", en: "The intern", correct: false }] },
    ],
    [{ it: "il disaccordo", en: "disagreement" }, { it: "la collaborazione", en: "collaboration" }],
    { question: "Parla dei suoi punti deboli. Cosa dice?", questionTranslation: "Talk about your weaknesses. What do you say?", options: [
      { text: "A volte sono troppo perfezionista e impiego più tempo del necessario.", translation: "Sometimes I'm too much of a perfectionist.", correct: true },
      { text: "Non ho punti deboli.", translation: "I have no weaknesses.", correct: false },
      { text: "Non mi piace parlare dei miei difetti.", translation: "I don't like talking about my flaws.", correct: false }
    ] },
  );

  await addExperience(15, "Talking About Leadership Experience", 2, "Job Interview",
    [
      { it: "Ha mai gestito un team o guidato un progetto?", en: "Have you ever managed a team or led a project?", speaker: "interviewer" },
      { it: "Sì, ho guidato un piccolo team di tre persone per un progetto di sei mesi.", en: "Yes, I led a small team of three people on a six-month project.", speaker: "candidate" },
      { it: "Qual è stato il risultato?", en: "What was the outcome?", speaker: "interviewer" },
      { it: "Abbiamo completato il progetto in tempo e sotto il budget previsto.", en: "We completed the project on time and under budget.", speaker: "candidate" },
      { it: "Bene, la leadership è una qualità che cerchiamo.", en: "Good, leadership is a quality we look for.", speaker: "interviewer" },
    ],
    [{ it: "la leadership", en: "leadership" }, { it: "il progetto", en: "project", article: "il" }, { it: "il budget", en: "budget", article: "il" }],
    [
      { it: "Quanto è durato il progetto guidato da Anna?", en: "How long did Anna's project last?", options: [{ it: "Tre mesi", en: "Three months", correct: false }, { it: "Sei mesi", en: "Six months", correct: true }, { it: "Un anno", en: "One year", correct: false }] },
      { it: "Qual è stato il risultato del progetto?", en: "What was the project outcome?", options: [{ it: "In ritardo e fuori budget", en: "Late and over budget", correct: false }, { it: "In tempo e sotto budget", en: "On time and under budget", correct: true }, { it: "Cancellato", en: "Cancelled", correct: false }] },
    ],
    [{ it: "guidare", en: "to lead" }, { it: "il risultato", en: "result/outcome" }],
    { question: "Il colloquiatore chiede di un fallimento. Cosa dice?", questionTranslation: "The interviewer asks about a failure. What do you say?", options: [
      { text: "Ho sbagliato una stima e ho imparato a essere più attenta.", translation: "I made a wrong estimate and learned to be more careful.", correct: true },
      { text: "Non ho mai fallito.", translation: "I have never failed.", correct: false },
      { text: "Preferisco non parlarne.", translation: "I'd rather not talk about it.", correct: false }
    ] },
  );

  await addExperience(15, "Showing Problem-Solving Skills", 2, "Job Interview",
    [
      { it: "Descriva una situazione problematica che ha risolto.", en: "Describe a problematic situation you resolved.", speaker: "interviewer" },
      { it: "Un cliente importante era insoddisfatto e voleva annullare il contratto.", en: "An important client was dissatisfied and wanted to cancel the contract.", speaker: "candidate" },
      { it: "Cosa ha fatto per risolvere?", en: "What did you do to resolve it?", speaker: "interviewer" },
      { it: "Ho organizzato un incontro, ho ascoltato le sue lamentele e ho proposto soluzioni.", en: "I arranged a meeting, listened to his complaints, and proposed solutions.", speaker: "candidate" },
      { it: "Alla fine ha rinnovato il contratto per altri due anni.", en: "In the end, he renewed the contract for another two years.", speaker: "candidate" },
    ],
    [{ it: "la situazione problematica", en: "problematic situation" }, { it: "il contratto", en: "contract", article: "il" }, { it: "la lamentela", en: "complaint" }],
    [
      { it: "Cosa voleva fare il cliente?", en: "What did the client want to do?", options: [{ it: "Parlare con il capo", en: "Talk to the boss", correct: false }, { it: "Annullare il contratto", en: "Cancel the contract", correct: true }, { it: "Aumentare l'ordine", en: "Increase the order", correct: false }] },
      { it: "Qual è stato il risultato finale?", en: "What was the final result?", options: [{ it: "Il contratto è stato annullato", en: "The contract was cancelled", correct: false }, { it: "Il cliente ha rinnovato per due anni", en: "The client renewed for two years", correct: true }, { it: "Il cliente ha cambiato fornitore", en: "The client changed supplier", correct: false }] },
    ],
    [{ it: "risolvere", en: "to resolve" }, { it: "proporre", en: "to propose" }],
    { question: "Il colloquiatore chiede come gestisce lo stress. Cosa dice?", questionTranslation: "The interviewer asks how you handle stress. What do you say?", options: [
      { text: "Prioritizzo i compiti e prendo brevi pause quando necessario.", translation: "I prioritize tasks and take short breaks when needed.", correct: true },
      { text: "Mi agito e basta.", translation: "I just get agitated.", correct: false },
      { text: "Chiedo aiuto subito.", translation: "I ask for help immediately.", correct: false }
    ] },
  );

  // ── Module 16 (B1) Common Questions ──
  await addExperience(16, "Discussing Salary Expectations", 2, "Job Interview",
    [
      { it: "Che aspettative di stipendio ha?", en: "What salary expectations do you have?", speaker: "interviewer" },
      { it: "Mi sono informata sulla retribuzione media del settore.", en: "I informed myself about the usual compensation.", speaker: "candidate" },
      { it: "In base alla mia esperienza, ritengo adeguati 45.000 euro.", en: "Based on my experience, I find 45,000 euros appropriate.", speaker: "candidate" },
      { it: "Rientra nel nostro budget. L'azienda offre anche benefit aggiuntivi?", en: "That's within our budget. Does the company also offer additional benefits?", speaker: "interviewer" },
      { it: "Sì, paghiamo un contributo per l'asilo nido.", en: "Yes, we pay a subsidy for childcare.", speaker: "interviewer" },
    ],
    [{ it: "l'aspettativa di stipendio", en: "salary expectation", article: "l'" }, { it: "la retribuzione", en: "compensation", article: "la" }, { it: "il benefit aggiuntivo", en: "additional benefit" }],
    [
      { it: "Quale stipendio Anna ritiene adeguato?", en: "What salary does Anna find appropriate?", options: [{ it: "40.000 euro", en: "40,000 euros", correct: false }, { it: "45.000 euro", en: "45,000 euros", correct: true }, { it: "50.000 euro", en: "50,000 euros", correct: false }] },
      { it: "Quale benefit aggiuntivo offre l'azienda?", en: "What additional benefit does the company offer?", options: [{ it: "Auto aziendale", en: "Company car", correct: false }, { it: "Contributo per l'asilo nido", en: "Childcare subsidy", correct: true }, { it: "Pranzo gratuito", en: "Free lunch", correct: false }] },
    ],
    [{ it: "adeguato", en: "appropriate" }, { it: "il contributo", en: "subsidy" }],
    { question: "L'offerta è troppo bassa. Cosa dice?", questionTranslation: "The offer is too low. What do you say?", options: [
      { text: "Possiamo trattare lo stipendio? Le mie qualifiche giustificano di più.", translation: "Can we negotiate? My qualifications justify more.", correct: true },
      { text: "Va bene, accetto.", translation: "That's fine, I'll take it.", correct: false },
      { text: "Allora cerco altro.", translation: "Then I'll find something else.", correct: false }
    ] },
  );

  // NEW for Module 16
  await addExperience(16, "Answering About Motivation", 2, "Job Interview",
    [
      { it: "Cosa la motiva nel lavoro?", en: "What motivates you at work?", speaker: "interviewer" },
      { it: "Mi motiva raggiungere obiettivi concreti e vedere i risultati.", en: "I'm motivated by achieving concrete goals and seeing results.", speaker: "candidate" },
      { it: "Preferisce lavorare su progetti a breve o lungo termine?", en: "Do you prefer short-term or long-term projects?", speaker: "interviewer" },
      { it: "Mi piacciono entrambi. I progetti brevi danno soddisfazione rapida.", en: "I like both. Short projects give quick satisfaction.", speaker: "candidate" },
      { it: "E quelli lunghi permettono di approfondire.", en: "And long ones allow you to go deeper.", speaker: "candidate" },
    ],
    [{ it: "motivarsi", en: "to be motivated" }, { it: "l'obiettivo concreto", en: "concrete goal" }, { it: "approfondire", en: "to go deeper" }],
    [
      { it: "Cosa motiva Anna nel lavoro?", en: "What motivates Anna at work?", options: [{ it: "Lo stipendio alto", en: "High salary", correct: false }, { it: "Raggiungere obiettivi e vedere risultati", en: "Achieving goals and seeing results", correct: true }, { it: "La competizione con i colleghi", en: "Competition with colleagues", correct: false }] },
      { it: "Quale tipo di progetto preferisce Anna?", en: "Which type of project does Anna prefer?", options: [{ it: "Solo progetti brevi", en: "Only short projects", correct: false }, { it: "Solo progetti lunghi", en: "Only long projects", correct: false }, { it: "Entrambi", en: "Both", correct: true }] },
    ],
    [{ it: "la motivazione", en: "motivation" }],
    { question: "Il colloquiatore chiede cosa farebbe nei primi 30 giorni. Cosa dice?", questionTranslation: "The interviewer asks what you'd do in the first 30 days. What do you say?", options: [
      { text: "Studierei i processi e conoscerei i colleghi e i clienti.", translation: "I'd study processes and get to know colleagues and clients.", correct: true },
      { text: "Prenderei ferie.", translation: "I'd take vacation.", correct: false },
      { text: "Inizierei a cambiare tutto.", translation: "I'd start changing everything.", correct: false }
    ] },
  );

  await addExperience(16, "Discussing Availability to Travel", 2, "Job Interview",
    [
      { it: "Il nostro lavoro richiede viaggi frequenti. Le dispiace?", en: "Our work requires frequent travel. Do you mind?", speaker: "interviewer" },
      { it: "No, anzi mi piace viaggiare per lavoro.", en: "No, I actually like traveling for work.", speaker: "candidate" },
      { it: "Sarebbe disponibile a trasferirsi in futuro?", en: "Would you be willing to relocate in the future?", speaker: "interviewer" },
      { it: "Al momento preferirei restare qui, ma non escludo un trasferimento in futuro.", en: "For now I'd prefer to stay here, but I don't rule out relocating in the future.", speaker: "candidate" },
      { it: "Va bene, trasparenza è importante.", en: "That's fine, transparency is important.", speaker: "interviewer" },
    ],
    [{ it: "il viaggio", en: "trip", article: "il" }, { it: "trasferirsi", en: "to relocate" }, { it: "la trasparenza", en: "transparency", article: "la" }],
    [
      { it: "Come si sente Anna riguardo ai viaggi di lavoro?", en: "How does Anna feel about business travel?", options: [{ it: "Non le piace", en: "She doesn't like it", correct: false }, { it: "Le piace viaggiare", en: "She likes traveling", correct: true }, { it: "È indifferente", en: "She's indifferent", correct: false }] },
      { it: "Anna si trasferirebbe in futuro?", en: "Would Anna relocate in the future?", options: [{ it: "Sì, subito", en: "Yes, immediately", correct: false }, { it: "No, mai", en: "No, never", correct: false }, { it: "Non lo esclude", en: "She doesn't rule it out", correct: true }] },
    ],
    [{ it: "disponibile", en: "available" }],
    { question: "Il colloquiatore chiede se ha patente di guida. Cosa risponde?", questionTranslation: "The interviewer asks if you have a driver's license. What do you answer?", options: [
      { text: "Sì, ho la patente B e la uso regolarmente.", translation: "Yes, I have a driver's license and use it regularly.", correct: true },
      { text: "No, non mi serve.", translation: "No, I don't need one.", correct: false },
      { text: "Preferisco i mezzi pubblici.", translation: "I prefer public transport.", correct: false }
    ] },
  );

  await addExperience(16, "Asking About Performance Reviews", 2, "Job Interview",
    [
      { it: "Come vengono valutati i dipendenti?", en: "How are employees evaluated?", speaker: "candidate" },
      { it: "Facciamo revisioni trimestrali e un colloquio annuale di valutazione.", en: "We do quarterly reviews and an annual evaluation interview.", speaker: "interviewer" },
      { it: "Cosa valutate principalmente?", en: "What do you mainly evaluate?", speaker: "candidate" },
      { it: "Valutiamo il raggiungimento degli obiettivi, la collaborazione e le competenze.", en: "We evaluate goal achievement, collaboration, and skills.", speaker: "interviewer" },
      { it: "Mi sembra un sistema chiaro e trasparente.", en: "That sounds like a clear and transparent system.", speaker: "candidate" },
    ],
    [{ it: "la valutazione", en: "evaluation", article: "la" }, { it: "trimestrale", en: "quarterly" }, { it: "il raggiungimento", en: "achievement", article: "il" }],
    [
      { it: "Ogni quanto ci sono le revisioni?", en: "How often are the reviews?", options: [{ it: "Mensili", en: "Monthly", correct: false }, { it: "Trimestrali", en: "Quarterly", correct: true }, { it: "Semestrali", en: "Semi-annual", correct: false }] },
      { it: "Cosa NON viene valutato secondo il colloquiatore?", en: "What is NOT evaluated according to the interviewer?", options: [{ it: "Raggiungimento obiettivi", en: "Goal achievement", correct: false }, { it: "Collaborazione", en: "Collaboration", correct: false }, { it: "Abbigliamento", en: "Clothing", correct: true }] },
    ],
    [{ it: "la revisione", en: "review" }, { it: "trasparente", en: "transparent" }],
    { question: "Il colloquiatore parla della flessibilità oraria. Cosa chiede?", questionTranslation: "The interviewer talks about flexible hours. What do you ask?", options: [
      { text: "C'è la possibilità di lavorare part-time o con orario flessibile?", translation: "Is it possible to work part-time or with flexible hours?", correct: true },
      { text: "Il pranzo è flessibile?", translation: "Is lunch flexible?", correct: false },
      { text: "Si può uscire prima?", translation: "Can you leave earlier?", correct: false }
    ] },
  );

  await addExperience(16, "Dealing with the 'Weakness' Question", 2, "Job Interview",
    [
      { it: "Qual è il suo più grande punto debole?", en: "What is your biggest weakness?", speaker: "interviewer" },
      { it: "A volte tendo a voler fare tutto da sola invece di delegare.", en: "Sometimes I tend to want to do everything myself instead of delegating.", speaker: "candidate" },
      { it: "Come sta lavorando per migliorare?", en: "How are you working on improving it?", speaker: "interviewer" },
      { it: "Sto imparando a fidarmi di più dei colleghi e a distribuire i compiti.", en: "I'm learning to trust my colleagues more and distribute tasks.", speaker: "candidate" },
      { it: "È un buon approccio. La consapevolezza è il primo passo.", en: "That's a good approach. Awareness is the first step.", speaker: "interviewer" },
    ],
    [{ it: "il punto debole", en: "weakness", article: "il" }, { it: "delegare", en: "to delegate" }, { it: "la consapevolezza", en: "awareness", article: "la" }],
    [
      { it: "Qual è il punto debole di Anna?", en: "What is Anna's weakness?", options: [{ it: "Arriva in ritardo", en: "She arrives late", correct: false }, { it: "Tende a non delegare", en: "She tends not to delegate", correct: true }, { it: "Parla troppo", en: "She talks too much", correct: false }] },
      { it: "Come sta migliorando Anna?", en: "How is Anna improving?", options: [{ it: "Facendo corsi di formazione", en: "By taking training courses", correct: false }, { it: "Imparando a fidarsi e a distribuire compiti", en: "By learning to trust and distribute tasks", correct: true }, { it: "Lavorando di più", en: "By working more", correct: false }] },
    ],
    [{ it: "migliorare", en: "to improve" }],
    { question: "Il colloquiatore chiede se ha domande. Cosa chiede?", questionTranslation: "The interviewer asks if you have questions. What do you ask?", options: [
      { text: "Quali sono i prossimi passi del processo di selezione?", translation: "What are the next steps in the selection process?", correct: true },
      { text: "Posso andare a casa?", translation: "Can I go home?", correct: false },
      { text: "Quanto dura la pausa caffè?", translation: "How long is the coffee break?", correct: false }
    ] },
  );

  // ── Module 17 (B2) Salary Negotiation ──
  await addExperience(17, "Negotiating a Higher Salary", 3, "Job Interview",
    [
      { it: "In base alle mie qualifiche ed esperienza, avrei aspettato 55.000 euro.", en: "Based on my qualifications and experience, I would have expected 55,000 euros.", speaker: "candidate" },
      { it: "Il nostro budget per questa posizione è di 50.000 euro.", en: "Our budget for this position is 50,000 euros.", speaker: "interviewer" },
      { it: "Possiamo parlare di benefit aggiuntivi come i bonus?", en: "Can we talk about additional benefits like bonus payments?", speaker: "candidate" },
      { it: "Sì, offriamo un bonus annuale di performance fino al 10%.", en: "Yes, we offer an annual performance bonus of up to 10 percent.", speaker: "interviewer" },
      { it: "Potrei accettare. Allora firmiamo il contratto.", en: "I could live with that. Let's accept the contract then.", speaker: "candidate" },
    ],
    [{ it: "la qualifica", en: "qualification", article: "la" }, { it: "il bonus", en: "bonus payment" }, { it: "il bonus di performance", en: "performance bonus" }],
    [
      { it: "Quale stipendio si aspettava Anna?", en: "What salary did Anna expect?", options: [{ it: "50.000 euro", en: "50,000 euros", correct: false }, { it: "55.000 euro", en: "55,000 euros", correct: true }, { it: "60.000 euro", en: "60,000 euros", correct: false }] },
      { it: "Cosa offre l'azienda in più?", en: "What does the company offer additionally?", options: [{ it: "Un'auto aziendale", en: "A company car", correct: false }, { it: "Un bonus di performance", en: "A performance bonus", correct: true }, { it: "Opzioni su azioni", en: "Stock options", correct: false }] },
    ],
    [{ it: "aspettarsi", en: "to expect" }, { it: "annuale", en: "annual" }],
    { question: "Riceve il contratto. Cosa controlla?", questionTranslation: "You receive the contract. What do you check?", options: [
      { text: "Voglio controllare il preavviso e il periodo di prova.", translation: "I'd like to check the notice period and probation.", correct: true },
      { text: "Lo firmi e basta.", translation: "Just sign it.", correct: false },
      { text: "La carta è riciclata?", translation: "Is the paper recycled?", correct: false }
    ] },
  );

  await addExperience(17, "Discussing Contract Details", 3, "Job Interview",
    [
      { it: "Ho ricevuto e letto il contratto di lavoro.", en: "I received the employment contract and read through it.", speaker: "candidate" },
      { it: "Ha domande su clausole specifiche?", en: "Do you have questions about specific clauses?", speaker: "interviewer" },
      { it: "Il periodo di prova è di sei mesi. È prorogabile?", en: "The probation period is six months. Is it extendable?", speaker: "candidate" },
      { it: "Di solito no. Ma in casi eccezionali possiamo prorogarlo.", en: "Usually not. But in exceptional cases we can extend.", speaker: "interviewer" },
      { it: "E quanti giorni di ferie ho all'anno?", en: "And how many vacation days do I have per year?", speaker: "candidate" },
    ],
    [{ it: "il contratto di lavoro", en: "employment contract", article: "il" }, { it: "il periodo di prova", en: "probation period", article: "il" }, { it: "il giorno di ferie", en: "vacation day", article: "il" }],
    [
      { it: "Quanto dura il periodo di prova?", en: "How long is the probation period?", options: [{ it: "Tre mesi", en: "Three months", correct: false }, { it: "Sei mesi", en: "Six months", correct: true }, { it: "Nove mesi", en: "Nine months", correct: false }] },
      { it: "Il periodo di prova è prorogabile?", en: "Is the probation period extendable?", options: [{ it: "No, mai", en: "No, never", correct: false }, { it: "In casi eccezionali sì", en: "In exceptional cases, yes", correct: true }, { it: "Sì, sempre", en: "Yes, always", correct: false }] },
    ],
    [{ it: "leggere", en: "to read through" }, { it: "la clausola", en: "clause" }],
    { question: "Le chiedono delle competenze tecniche. Cosa dice?", questionTranslation: "You're asked about your technical skills. What do you say?", options: [
      { text: "Conosco Python, JavaScript e database.", translation: "I'm proficient in Python, JS, and databases.", correct: true },
      { text: "Digito molto velocemente.", translation: "I can type very fast.", correct: false },
      { text: "La tecnica non è il mio campo.", translation: "Tech is not my area.", correct: false }
    ] },
    undefined,
    [
      { text: "il contratto di lavoro", translation: "employment contract", correctValue: "contract" },
      { text: "il periodo di prova", translation: "probation period", correctValue: "probation" },
      { text: "la clausola", translation: "clause", correctValue: "clause" }
    ],
  );

  // NEW for Module 17
  await addExperience(17, "Negotiating Additional Benefits", 3, "Job Interview",
    [
      { it: "Oltre allo stipendio, quali benefit offrite?", en: "Besides the salary, what benefits do you offer?", speaker: "candidate" },
      { it: "Abbiamo assicurazione sanitaria privata, buoni pasto e contributo palestra.", en: "We have private health insurance, meal vouchers, and a gym contribution.", speaker: "interviewer" },
      { it: "L'assicurazione copre anche i familiari?", en: "Does the insurance also cover family members?", speaker: "candidate" },
      { it: "Sì, può estendere la copertura al coniuge e ai figli.", en: "Yes, you can extend coverage to your spouse and children.", speaker: "interviewer" },
      { it: "Ottimo. Allora l'offerta complessiva mi sembra competitiva.", en: "Great. Then the overall offer seems competitive to me.", speaker: "candidate" },
    ],
    [{ it: "l'assicurazione sanitaria", en: "health insurance", article: "l'" }, { it: "il buono pasto", en: "meal voucher", article: "il" }, { it: "la copertura", en: "coverage", article: "la" }],
    [
      { it: "Quali benefit offre l'azienda?", en: "What benefits does the company offer?", options: [{ it: "Auto aziendale e telefono", en: "Company car and phone", correct: false }, { it: "Assicurazione sanitaria, buoni pasto, contributo palestra", en: "Health insurance, meal vouchers, gym contribution", correct: true }, { it: "Vitto e alloggio", en: "Room and board", correct: false }] },
      { it: "L'assicurazione copre i familiari?", en: "Does the insurance cover family members?", options: [{ it: "No, solo il dipendente", en: "No, only the employee", correct: false }, { it: "Sì, coniuge e figli", en: "Yes, spouse and children", correct: true }, { it: "Sì, ma a pagamento", en: "Yes, but for a fee", correct: false }] },
    ],
    [{ it: "competitivo", en: "competitive" }],
    { question: "Il colloquiatore parla di azioni aziendali. Cosa chiede?", questionTranslation: "The interviewer talks about stock options. What do you ask?", options: [
      { text: "C'è un piano di azionariato per i dipendenti?", translation: "Is there an employee stock ownership plan?", correct: true },
      { text: "Posso comprare azioni?", translation: "Can I buy shares?", correct: false },
      { text: "Le azioni sono in borsa?", translation: "Are the shares listed?", correct: false }
    ] },
  );

  await addExperience(17, "Discussing the Notice Period", 3, "Job Interview",
    [
      { it: "Il contratto prevede un preavviso di tre mesi.", en: "The contract provides for a three-month notice period.", speaker: "interviewer" },
      { it: "Tre mesi mi sembrano tanti. È negoziabile?", en: "Three months seems a lot. Is that negotiable?", speaker: "candidate" },
      { it: "È standard per questa posizione. Durante il periodo di prova è di una settimana.", en: "It's standard for this position. During the probation period it's one week.", speaker: "interviewer" },
      { it: "Capisco. E in caso di licenziamento?", en: "I understand. And in case of dismissal?", speaker: "candidate" },
      { it: "L'azienda deve rispettare lo stesso preavviso. È reciproco.", en: "The company must respect the same notice. It's reciprocal.", speaker: "interviewer" },
    ],
    [{ it: "il preavviso", en: "notice period", article: "il" }, { it: "negoziabile", en: "negotiable" }, { it: "il licenziamento", en: "dismissal", article: "il" }],
    [
      { it: "Quanto è il preavviso standard?", en: "How long is the standard notice period?", options: [{ it: "Un mese", en: "One month", correct: false }, { it: "Tre mesi", en: "Three months", correct: true }, { it: "Sei mesi", en: "Six months", correct: false }] },
      { it: "Il periodo di prova ha un preavviso diverso?", en: "Does the probation period have a different notice?", options: [{ it: "Sì, una settimana", en: "Yes, one week", correct: true }, { it: "No, lo stesso", en: "No, the same", correct: false }, { it: "Nessun preavviso", en: "No notice", correct: false }] },
    ],
    [{ it: "reciproco", en: "reciprocal" }],
    { question: "Non è d'accordo con una clausola. Cosa dice?", questionTranslation: "You disagree with a clause. What do you say?", options: [
      { text: "Vorrei discutere questa clausola perché non mi sembra equa.", translation: "I'd like to discuss this clause because it doesn't seem fair.", correct: true },
      { text: "Non firmo.", translation: "I won't sign.", correct: false },
      { text: "Firmo e basta.", translation: "I'll just sign it.", correct: false }
    ] },
  );

  await addExperience(17, "Discussing Career Progression", 3, "Job Interview",
    [
      { it: "Quali sono le possibilità di avanzamento in questa posizione?", en: "What are the advancement possibilities in this position?", speaker: "candidate" },
      { it: "Dopo due anni, può candidarsi per posizioni di senior.", en: "After two years, you can apply for senior positions.", speaker: "interviewer" },
      { it: "Esiste un piano di carriera definito?", en: "Is there a defined career path?", speaker: "candidate" },
      { it: "Sì, abbiamo un sistema di livelli con promozioni basate sui risultati.", en: "Yes, we have a system of levels with promotions based on results.", speaker: "interviewer" },
      { it: "È importante per me sapere che posso crescere qui.", en: "It's important for me to know I can grow here.", speaker: "candidate" },
    ],
    [{ it: "l'avanzamento", en: "advancement", article: "l'" }, { it: "la promozione", en: "promotion", article: "la" }, { it: "il piano di carriera", en: "career path", article: "il" }],
    [
      { it: "Dopo quanto tempo si può diventare senior?", en: "After how long can one become senior?", options: [{ it: "Un anno", en: "One year", correct: false }, { it: "Due anni", en: "Two years", correct: true }, { it: "Cinque anni", en: "Five years", correct: false }] },
      { it: "Come sono le promozioni in azienda?", en: "How are promotions in the company?", options: [{ it: "Basate sull'anzianità", en: "Based on seniority", correct: false }, { it: "Basate sui risultati", en: "Based on results", correct: true }, { it: "Non ci sono promozioni", en: "There are no promotions", correct: false }] },
    ],
    [{ it: "candidarsi", en: "to apply" }, { it: "definito", en: "defined" }],
    { question: "Il colloquiatore chiede se accetta la clausola di non concorrenza. Cosa dice?", questionTranslation: "The interviewer asks if you accept the non-compete clause. What do you say?", options: [
      { text: "Posso accettarla se la durata è limitata a sei mesi.", translation: "I can accept it if the duration is limited to six months.", correct: true },
      { text: "No, non l'accetto.", translation: "No, I don't accept it.", correct: false },
      { text: "Non so cosa sia.", translation: "I don't know what it is.", correct: false }
    ] },
  );

  // ── Module 18 (B2) Technical Discussion ──
  await addExperience(18, "Technical Interview Questions", 3, "Job Interview",
    [
      { it: "Come guiderebbe un team attraverso una fase di progetto difficile?", en: "How would you lead a team through a difficult project phase?", speaker: "interviewer" },
      { it: "Prima identificherei e prioritizzerei i problemi.", en: "First, I would identify and prioritize the problems.", speaker: "candidate" },
      { it: "Poi stabilirei obiettivi chiari e distribuirei i compiti.", en: "Then I would set clear goals and distribute tasks.", speaker: "candidate" },
      { it: "Come gestisce i conflitti all'interno del team?", en: "How do you handle conflicts in the team?", speaker: "interviewer" },
      { it: "Parlo apertamente con tutti i coinvolti e cerco una soluzione comune.", en: "I speak openly with all involved and look for a joint solution.", speaker: "candidate" },
    ],
    [{ it: "identificare", en: "to identify" }, { it: "prioritizzare", en: "to prioritize" }, { it: "il conflitto", en: "conflict" }],
    [
      { it: "Cosa farebbe Anna per prima cosa?", en: "What would Anna do first?", options: [{ it: "Distribuire i compiti", en: "Distribute tasks", correct: false }, { it: "Identificare i problemi", en: "Identify problems", correct: true }, { it: "Stabilire obiettivi", en: "Set goals", correct: false }] },
      { it: "Come gestisce Anna i conflitti?", en: "How does Anna handle conflicts?", options: [{ it: "Li ignora", en: "She ignores them", correct: false }, { it: "Parla apertamente con tutti", en: "She speaks openly with everyone", correct: true }, { it: "Va dal superiore", en: "She goes to the supervisor", correct: false }] },
    ],
    [{ it: "guidare", en: "to lead" }, { it: "la soluzione", en: "solution" }],
    { question: "Il colloquio finisce. Cosa dice?", questionTranslation: "The interview ends. What do you say?", options: [
      { text: "Grazie per il colloquio. Attendo con interesse il vostro riscontro.", translation: "Thank you. I look forward to your response.", correct: true },
      { text: "Finalmente è finito!", translation: "Finally over!", correct: false },
      { text: "Posso andare?", translation: "Can I leave now?", correct: false }
    ] },
  );

  await addExperience(18, "Closing the Interview", 3, "Job Interview",
    [
      { it: "Avete altre domande per noi?", en: "Do you have any more questions for us?", speaker: "interviewer" },
      { it: "Sì, com'è il piano di inserimento per i nuovi dipendenti?", en: "Yes, what does the onboarding plan for new employees look like?", speaker: "candidate" },
      { it: "Nella prima settimana riceverà un'introduzione completa.", en: "In the first week, you'll get a comprehensive introduction.", speaker: "interviewer" },
      { it: "Dopodiché lavorerà con un mentor.", en: "After that, you'll work with a mentor.", speaker: "interviewer" },
      { it: "Mi sembra molto strutturato. Non vedo l'ora di collaborare!", en: "That sounds very structured. I look forward to working together!", speaker: "candidate" },
    ],
    [{ it: "il piano di inserimento", en: "onboarding plan", article: "il" }, { it: "il mentor", en: "mentor" }, { it: "la collaborazione", en: "collaboration" }],
    [
      { it: "Cosa succede nella prima settimana?", en: "What happens in the first week?", options: [{ it: "Si riceve un'introduzione", en: "You get an introduction", correct: true }, { it: "Si inizia subito a lavorare", en: "You start working immediately", correct: false }, { it: "Si firma il contratto", en: "You sign the contract", correct: false }] },
      { it: "Con chi lavora il nuovo dipendente dopo l'introduzione?", en: "Who does the new employee work with after the introduction?", options: [{ it: "Con il capo", en: "With the boss", correct: false }, { it: "Con un mentor", en: "With a mentor", correct: true }, { it: "Da solo", en: "Alone", correct: false }] },
    ],
    [{ it: "completo", en: "comprehensive" }, { it: "strutturato", en: "structured" }],
    { question: "Cosa fa prima alla biglietteria automatica?", questionTranslation: "What do you do first at the ticket machine?", options: [
      { text: "Preme 'Acquista biglietto'.", translation: "Press 'Buy ticket'.", correct: true },
      { text: "Chiama il tecnico.", translation: "Call the technician.", correct: false },
      { text: "Va alla macchinetta successiva.", translation: "Go to the next machine.", correct: false }
    ] },
  );

  // NEW for Module 18
  await addExperience(18, "Presenting a Case Study", 3, "Job Interview",
    [
      { it: "Le diamo un caso: ridurre i costi logistici. Come procedere?", en: "We give you a case: reduce logistics costs. How would you proceed?", speaker: "interviewer" },
      { it: "Prima analizzerei i dati delle spedizioni degli ultimi 12 mesi.", en: "First, I'd analyze shipping data from the last 12 months.", speaker: "candidate" },
      { it: "Identificherei le inefficienze e proporrei soluzioni mirate.", en: "I'd identify inefficiencies and propose targeted solutions.", speaker: "candidate" },
      { it: "Potrebbe coinvolgere un cambio di fornitore logistico?", en: "Could that involve changing the logistics provider?", speaker: "interviewer" },
      { it: "Sì, se l'analisi mostra che un altro operatore offre tariffe migliori.", en: "Yes, if the analysis shows another operator offers better rates.", speaker: "candidate" },
    ],
    [{ it: "il caso", en: "case study", article: "il" }, { it: "la logistica", en: "logistics", article: "la" }, { it: "l'inefficienza", en: "inefficiency", article: "l'" }],
    [
      { it: "Qual è il primo passo di Anna?", en: "What is Anna's first step?", options: [{ it: "Cambiare fornitore", en: "Change provider", correct: false }, { it: "Analizzare i dati delle spedizioni", en: "Analyze shipping data", correct: true }, { it: "Parlare con il team", en: "Talk to the team", correct: false }] },
      { it: "Cosa potrebbe proporre Anna dopo l'analisi?", en: "What might Anna propose after the analysis?", options: [{ it: "Assumere più personale", en: "Hire more staff", correct: false }, { it: "Cambiare fornitore logistico", en: "Change logistics provider", correct: true }, { it: "Aumentare i prezzi", en: "Raise prices", correct: false }] },
    ],
    [{ it: "la riduzione", en: "reduction" }, { it: "mirato", en: "targeted" }],
    { question: "Il caso è molto complesso. Cosa dice?", questionTranslation: "The case is very complex. What do you say?", options: [
      { text: "È un problema interessante. Posso fare alcune domande per chiarire?", translation: "It's an interesting problem. May I ask some clarifying questions?", correct: true },
      { text: "Non lo so fare.", translation: "I can't do it.", correct: false },
      { text: "Scelgo una soluzione a caso.", translation: "I'll pick a random solution.", correct: false }
    ] },
  );

  await addExperience(18, "Discussing Methodology", 3, "Job Interview",
    [
      { it: "Che metodologia di project management preferisce?", en: "Which project management methodology do you prefer?", speaker: "interviewer" },
      { it: "Lavoro bene con metodologie agili come Scrum.", en: "I work well with agile methodologies like Scrum.", speaker: "candidate" },
      { it: "Può spiegarmi come gestisce gli sprint?", en: "Can you explain how you manage sprints?", speaker: "interviewer" },
      { it: "Organizzo sprint di due settimane con daily stand-up e retrospettive.", en: "I organize two-week sprints with daily stand-ups and retrospectives.", speaker: "candidate" },
      { it: "E come gestite i cambiamenti in corso d'opera?", en: "And how do you handle changes mid-project?", speaker: "interviewer" },
    ],
    [{ it: "la metodologia", en: "methodology", article: "la" }, { it: "agile", en: "agile" }, { it: "lo sprint", en: "sprint", article: "lo" }],
    [
      { it: "Quale metodologia preferisce Anna?", en: "Which methodology does Anna prefer?", options: [{ it: "Metodologia a cascata", en: "Waterfall methodology", correct: false }, { it: "Metodologie agili come Scrum", en: "Agile methodologies like Scrum", correct: true }, { it: "Nessuna in particolare", en: "None in particular", correct: false }] },
      { it: "Ogni quanto sono gli sprint di Anna?", en: "How often are Anna's sprints?", options: [{ it: "Una settimana", en: "One week", correct: false }, { it: "Due settimane", en: "Two weeks", correct: true }, { it: "Un mese", en: "One month", correct: false }] },
    ],
    [{ it: "la retrospettiva", en: "retrospective" }, { it: "il cambiamento", en: "change" }],
    { question: "Il colloquiatore chiede il suo workflow ideale. Cosa descrive?", questionTranslation: "The interviewer asks about your ideal workflow. What do you describe?", options: [
      { text: "Pianificazione, esecuzione iterativa, revisione e miglioramento continuo.", translation: "Planning, iterative execution, review, and continuous improvement.", correct: true },
      { text: "Faccio tutto all'ultimo minuto.", translation: "I do everything at the last minute.", correct: false },
      { text: "Non ho un workflow, lavoro e basta.", translation: "I don't have a workflow, I just work.", correct: false }
    ] },
  );

  await addExperience(18, "Answering Technical Questions", 3, "Job Interview",
    [
      { it: "Che esperienza ha con l'analisi dei dati?", en: "What experience do you have with data analysis?", speaker: "interviewer" },
      { it: "Conosco SQL per interrogare i database e Tableau per le visualizzazioni.", en: "I know SQL for querying databases and Tableau for visualizations.", speaker: "candidate" },
      { it: "Ha gestito volumi di dati elevati?", en: "Have you handled large data volumes?", speaker: "interviewer" },
      { it: "Sì, nel mio ultimo lavoro analizzavo oltre 100.000 transazioni al mese.", en: "Yes, in my last job I analyzed over 100,000 transactions per month.", speaker: "candidate" },
      { it: "Bene, cerchiamo proprio queste competenze.", en: "Good, we're looking for these exact skills.", speaker: "interviewer" },
    ],
    [{ it: "l'analisi dei dati", en: "data analysis", article: "l'" }, { it: "la transazione", en: "transaction", article: "la" }, { it: "la competenza", en: "skill", article: "la" }],
    [
      { it: "Quali strumenti conosce Anna?", en: "Which tools does Anna know?", options: [{ it: "Python e R", en: "Python and R", correct: false }, { it: "SQL e Tableau", en: "SQL and Tableau", correct: true }, { it: "Excel e Word", en: "Excel and Word", correct: false }] },
      { it: "Quante transazioni analizzava Anna al mese?", en: "How many transactions did Anna analyze per month?", options: [{ it: "10.000", en: "10,000", correct: false }, { it: "50.000", en: "50,000", correct: false }, { it: "100.000", en: "100,000", correct: true }] },
    ],
    [{ it: "la visualizzazione", en: "visualization" }],
    { question: "Il colloquiatore chiede se conosce un software specifico. Cosa dice se non lo conosce?", questionTranslation: "The interviewer asks about specific software you don't know. What do you say?", options: [
      { text: "Non l'ho usato direttamente, ma imparo velocemente nuovi strumenti.", translation: "I haven't used it directly, but I learn new tools quickly.", correct: true },
      { text: "Non lo so usare.", translation: "I don't know how to use it.", correct: false },
      { text: "Non mi interessa impararlo.", translation: "I'm not interested in learning it.", correct: false }
    ] },
  );

  console.log("  ✓ Job Interview seeded");
}
