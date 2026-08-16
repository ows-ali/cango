export async function seedA1(addExperience: Function) {
  // ========================
  // SC4: Greetings & Introductions — scenario="Greetings"
  // Module 19: Hello & Goodbye
  // ========================

  // --- M19-1: Saying Hello ---
  await addExperience(19, "Saying Hello", 4, "Greetings",
    [
      { it: "Ciao! Come stai?", en: "Hi! How are you?", speaker: "person_a" },
      { it: "Ciao! Sto bene, grazie. E tu?", en: "Hi! I'm fine, thanks. And you?", speaker: "person_b" },
      { it: "Anche io bene! Che piacere vederti!", en: "I'm good too! What a pleasure to see you!", speaker: "person_a" },
      { it: "Buongiorno, signor Rossi. Come sta?", en: "Good morning, Mr. Rossi. How are you?", speaker: "person_a" },
      { it: "Buongiorno, tutto bene, grazie.", en: "Good morning, everything's fine, thanks.", speaker: "person_b" },
    ],
    [
      { it: "ciao", en: "hi/bye", article: "il" },
      { it: "buongiorno", en: "good morning", article: "il" },
      { it: "grazie", en: "thank you" },
    ],
    [
      {
        it: "Cosa dice Persona A per salutare in modo informale?", en: "What does Person A say to greet informally?",
        options: [
          { it: "Ciao! Come stai?", en: "Hi! How are you?", correct: true },
          { it: "Arrivederci!", en: "Goodbye!", correct: false },
          { it: "Scusi, dov'è il bagno?", en: "Excuse me, where is the bathroom?", correct: false },
        ],
      },
      {
        it: "Come risponde Persona B a 'Come stai?'", en: "How does Person B respond to 'Come stai?'",
        options: [
          { it: "Sto bene, grazie", en: "I'm fine, thanks", correct: true },
          { it: "Non lo so", en: "I don't know", correct: false },
          { it: "Arrivederci", en: "Goodbye", correct: false },
        ],
      },
    ],
    [
      { it: "salutare", en: "to greet" },
      { it: "il piacere", en: "pleasure" },
    ],
    {
      question: "Vuoi salutare un amico. Cosa dici?",
      questionTranslation: "You want to greet a friend. What do you say?",
      options: [
        { text: "Ciao! Come stai?", translation: "Hi! How are you?", correct: true },
        { text: "Arrivederci e buona giornata.", translation: "Goodbye and have a nice day.", correct: false },
        { text: "Mi dispiace, non posso.", translation: "I'm sorry, I can't.", correct: false },
      ],
    },
  );

  // --- M19-2: Saying Goodbye ---
  await addExperience(19, "Saying Goodbye", 4, "Greetings",
    [
      { it: "Arrivederci, signora! È stato un piacere.", en: "Goodbye, madam! It was a pleasure.", speaker: "person_a" },
      { it: "Arrivederci! Torni presto a trovarci.", en: "Goodbye! Come visit us again soon.", speaker: "person_b" },
      { it: "Ci vediamo domani, allora!", en: "See you tomorrow, then!", speaker: "person_a" },
      { it: "Sì, ci vediamo! A domani!", en: "Yes, see you! See you tomorrow!", speaker: "person_b" },
      { it: "A presto! Buona giornata!", en: "See you soon! Have a nice day!", speaker: "person_a" },
    ],
    [
      { it: "arrivederci", en: "goodbye (formal)" },
      { it: "ci vediamo", en: "see you" },
      { it: "a presto", en: "see you soon" },
    ],
    [
      {
        it: "Cosa si dice per salutare in modo formale?", en: "What do you say to say goodbye formally?",
        options: [
          { it: "Arrivederci", en: "Goodbye", correct: true },
          { it: "Ciao", en: "Hi/Bye", correct: false },
          { it: "Grazie", en: "Thank you", correct: false },
        ],
      },
      {
        it: "Cosa significa 'A presto'?", en: "What does 'A presto' mean?",
        options: [
          { it: "See you soon", en: "See you soon", correct: true },
          { it: "See you tomorrow", en: "See you tomorrow", correct: false },
          { it: "Goodbye forever", en: "Goodbye forever", correct: false },
        ],
      },
    ],
    [
      { it: "la giornata", en: "day" },
      { it: "tornare", en: "to return" },
    ],
    {
      question: "Stai lasciando un negozio. Cosa dici al commesso?",
      questionTranslation: "You're leaving a shop. What do you say to the clerk?",
      options: [
        { text: "Arrivederci, buona giornata!", translation: "Goodbye, have a nice day!", correct: true },
        { text: "Ciao, ci vediamo stasera.", translation: "Hi, see you tonight.", correct: false },
        { text: "Buongiorno, quanto costa?", translation: "Good morning, how much does it cost?", correct: false },
      ],
    },
  );

  // --- M19-3: Polite Expressions ---
  await addExperience(19, "Polite Expressions", 4, "Greetings",
    [
      { it: "Un caffè, per favore.", en: "A coffee, please.", speaker: "person_a" },
      { it: "Subito! Ecco il caffè.", en: "Right away! Here's the coffee.", speaker: "person_b" },
      { it: "Grazie mille!", en: "Thanks a lot!", speaker: "person_a" },
      { it: "Prego! Buona giornata.", en: "You're welcome! Have a nice day.", speaker: "person_b" },
      { it: "Permesso? Grazie, scusa.", en: "May I? Thanks, sorry.", speaker: "person_a" },
    ],
    [
      { it: "per favore", en: "please" },
      { it: "prego", en: "you're welcome" },
      { it: "scusa", en: "sorry (informal)" },
    ],
    [
      {
        it: "Cosa dici quando chiedi qualcosa?", en: "What do you say when you ask for something?",
        options: [
          { it: "Per favore", en: "Please", correct: true },
          { it: "Arrivederci", en: "Goodbye", correct: false },
          { it: "Buonasera", en: "Good evening", correct: false },
        ],
      },
      {
        it: "Cosa rispondi quando qualcuno ti ringrazia?", en: "What do you answer when someone thanks you?",
        options: [
          { it: "Prego", en: "You're welcome", correct: true },
          { it: "Grazie", en: "Thank you", correct: false },
          { it: "Scusa", en: "Sorry", correct: false },
        ],
      },
    ],
    [
      { it: "mille", en: "a thousand / a lot" },
      { it: "permesso", en: "excuse me (passing through)" },
    ],
    {
      question: "Hai urtato qualcuno per sbaglio. Cosa dici?",
      questionTranslation: "You accidentally bumped into someone. What do you say?",
      options: [
        { text: "Scusa, mi dispiace!", translation: "Sorry, I'm sorry!", correct: true },
        { text: "Prego!", translation: "You're welcome!", correct: false },
        { text: "Buongiorno!", translation: "Good morning!", correct: false },
      ],
    },
  );

  // --- M19-4: Introducing a Friend ---
  await addExperience(19, "Introducing a Friend", 4, "Greetings",
    [
      { it: "Ciao Maria, ti presento il mio amico Marco.", en: "Hi Maria, I'd like to introduce my friend Marco.", speaker: "person_a" },
      { it: "Ciao Marco, piacere di conoscerti!", en: "Hi Marco, nice to meet you!", speaker: "person_b" },
      { it: "Piacere mio! Marco viene da Roma.", en: "The pleasure is mine! Marco comes from Rome.", speaker: "person_a" },
      { it: "Ah, sei romano? Che bello!", en: "Oh, you're from Rome? How nice!", speaker: "person_b" },
      { it: "Sì, sono romano. Tu di dove sei?", en: "Yes, I'm from Rome. Where are you from?", speaker: "person_a" },
    ],
    [
      { it: "ti presento", en: "I introduce to you" },
      { it: "il piacere", en: "pleasure", article: "il" },
      { it: "l'amico", en: "friend (male)", article: "l'" },
    ],
    [
      {
        it: "Cosa dice Persona A per presentare Marco?", en: "What does Person A say to introduce Marco?",
        options: [
          { it: "Ti presento il mio amico Marco", en: "I introduce my friend Marco", correct: true },
          { it: "Marco va via", en: "Marco is leaving", correct: false },
          { it: "Marco è bravo", en: "Marco is good", correct: false },
        ],
      },
      {
        it: "Come risponde Persona B quando conosce Marco?", en: "How does Person B respond when meeting Marco?",
        options: [
          { it: "Piacere di conoscerti", en: "Nice to meet you", correct: true },
          { it: "Arrivederci Marco", en: "Goodbye Marco", correct: false },
          { it: "Marco, vai via", en: "Marco, go away", correct: false },
        ],
      },
    ],
    [
      { it: "conoscere", en: "to meet / know" },
      { it: "romano", en: "Roman (from Rome)" },
    ],
    {
      question: "Vuoi presentare un amico a un'altra persona. Cosa dici?",
      questionTranslation: "You want to introduce a friend to someone else. What do you say?",
      options: [
        { text: "Ti presento il mio amico Luca.", translation: "I introduce my friend Luca.", correct: true },
        { text: "Luca, vai via per favore.", translation: "Luca, go away please.", correct: false },
        { text: "Luca è cattivo.", translation: "Luca is bad.", correct: false },
      ],
    },
  );

  // --- M19-5: Formal vs Informal Greetings ---
  await addExperience(19, "Formal vs Informal Greetings", 4, "Greetings",
    [
      { it: "Buongiorno, dottore. Come sta?", en: "Good morning, doctor. How are you?", speaker: "person_a" },
      { it: "Buongiorno, molto bene, grazie. E Lei?", en: "Good morning, very well, thanks. And you?", speaker: "person_b" },
      { it: "Ciao Luca! Come stai?", en: "Hi Luca! How are you?", speaker: "person_a" },
      { it: "Ciao! Tutto bene, grazie!", en: "Hi! Everything's good, thanks!", speaker: "person_b" },
      { it: "Con gli amici uso 'tu', con il capo uso 'Lei'.", en: "With friends I use 'tu', with the boss I use 'Lei'.", speaker: "person_a" },
    ],
    [
      { it: "Lei", en: "you (formal)" },
      { it: "tu", en: "you (informal)" },
      { it: "il capo", en: "boss", article: "il" },
    ],
    [
      {
        it: "Come saluti il tuo capo al mattino?", en: "How do you greet your boss in the morning?",
        options: [
          { it: "Buongiorno, come sta?", en: "Good morning, how are you?", correct: true },
          { it: "Ciao, come stai?", en: "Hi, how are you?", correct: false },
          { it: "Ehi, tutto bene?", en: "Hey, everything good?", correct: false },
        ],
      },
      {
        it: "Quando usi 'tu' invece di 'Lei'?", en: "When do you use 'tu' instead of 'Lei'?",
        options: [
          { it: "Con gli amici", en: "With friends", correct: true },
          { it: "Con il dottore", en: "With the doctor", correct: false },
          { it: "Con il poliziotto", en: "With the police officer", correct: false },
        ],
      },
    ],
    [
      { it: "formale", en: "formal" },
      { it: "informale", en: "informal" },
    ],
    {
      question: "Parli con una persona importante che non conosci. Cosa dici?",
      questionTranslation: "You're speaking to an important person you don't know. What do you say?",
      options: [
        { text: "Buongiorno, piacere di conoscerLa.", translation: "Good morning, pleased to meet you (formal).", correct: true },
        { text: "Ciao, come stai?", translation: "Hi, how are you?", correct: false },
        { text: "Ehi, tutto a posto?", translation: "Hey, everything alright?", correct: false },
      ],
    },
  );

  // ========================
  // Module 20: Introducing Yourself
  // ========================

  // --- M20-1: Telling Your Name ---
  await addExperience(20, "Telling Your Name", 4, "Greetings",
    [
      { it: "Ciao! Io sono Marco. Tu come ti chiami?", en: "Hi! I'm Marco. What's your name?", speaker: "person_a" },
      { it: "Ciao Marco! Io mi chiamo Sara.", en: "Hi Marco! My name is Sara.", speaker: "person_b" },
      { it: "Piacere, Sara! Io sono Luca.", en: "Nice to meet you, Sara! I'm Luca.", speaker: "person_a" },
      { it: "Piacere mio! Di dove sei?", en: "The pleasure is mine! Where are you from?", speaker: "person_b" },
      { it: "Sono di Milano. E tu?", en: "I'm from Milan. And you?", speaker: "person_a" },
    ],
    [
      { it: "mi chiamo", en: "my name is" },
      { it: "io sono", en: "I am" },
      { it: "il nome", en: "name", article: "il" },
    ],
    [
      {
        it: "Come ti presenti in italiano?", en: "How do you introduce yourself in Italian?",
        options: [
          { it: "Mi chiamo Marco", en: "My name is Marco", correct: true },
          { it: "Come stai?", en: "How are you?", correct: false },
          { it: "Arrivederci", en: "Goodbye", correct: false },
        ],
      },
      {
        it: "Cosa rispondi a 'Come ti chiami?'", en: "What do you answer to 'Come ti chiami?'",
        options: [
          { it: "Mi chiamo Sara", en: "My name is Sara", correct: true },
          { it: "Sto bene", en: "I'm fine", correct: false },
          { it: "Ho 25 anni", en: "I'm 25 years old", correct: false },
        ],
      },
    ],
    [
      { it: "chiamarsi", en: "to be called" },
      { it: "di dove", en: "from where" },
    ],
    {
      question: "Qualcuno ti chiede il nome. Cosa rispondi?",
      questionTranslation: "Someone asks your name. What do you answer?",
      options: [
        { text: "Mi chiamo Giovanni.", translation: "My name is Giovanni.", correct: true },
        { text: "Ho 30 anni.", translation: "I'm 30 years old.", correct: false },
        { text: "Vengo da Roma.", translation: "I come from Rome.", correct: false },
      ],
    },
  );

  // --- M20-2: Saying Where You're From ---
  await addExperience(20, "Saying Where You're From", 4, "Greetings",
    [
      { it: "Tu di dove sei?", en: "Where are you from?", speaker: "person_a" },
      { it: "Io sono di Napoli. Vengo da Napoli.", en: "I'm from Naples. I come from Naples.", speaker: "person_b" },
      { it: "Che bello! Napoli è una città bellissima.", en: "How nice! Naples is a beautiful city.", speaker: "person_a" },
      { it: "Sì, è vero! Tu di dove sei?", en: "Yes, it's true! Where are you from?", speaker: "person_b" },
      { it: "Io vengo dalla Germania. Sono tedesco.", en: "I come from Germany. I'm German.", speaker: "person_a" },
    ],
    [
      { it: "vengo da", en: "I come from" },
      { it: "sono di", en: "I am from" },
      { it: "la città", en: "city", article: "la" },
    ],
    [
      {
        it: "Come chiedi a qualcuno da dove viene?", en: "How do you ask someone where they're from?",
        options: [
          { it: "Di dove sei?", en: "Where are you from?", correct: true },
          { it: "Come ti chiami?", en: "What's your name?", correct: false },
          { it: "Quanti anni hai?", en: "How old are you?", correct: false },
        ],
      },
      {
        it: "Cosa significa 'Vengo da Napoli'?", en: "What does 'Vengo da Napoli' mean?",
        options: [
          { it: "I come from Naples", en: "I come from Naples", correct: true },
          { it: "I live in Naples", en: "I live in Naples", correct: false },
          { it: "I go to Naples", en: "I go to Naples", correct: false },
        ],
      },
    ],
    [
      { it: "tedesco", en: "German" },
      { it: "bellissimo", en: "very beautiful" },
    ],
    {
      question: "Una persona ti chiede da dove vieni. Cosa rispondi?",
      questionTranslation: "Someone asks where you're from. What do you answer?",
      options: [
        { text: "Vengo dalla Spagna.", translation: "I come from Spain.", correct: true },
        { text: "Mi chiamo Anna.", translation: "My name is Anna.", correct: false },
        { text: "Ho 28 anni.", translation: "I'm 28 years old.", correct: false },
      ],
    },
  );

  // --- M20-3: Talking About Your Age ---
  await addExperience(20, "Talking About Your Age", 4, "Greetings",
    [
      { it: "Quanti anni hai?", en: "How old are you?", speaker: "person_a" },
      { it: "Ho 25 anni. E tu?", en: "I'm 25 years old. And you?", speaker: "person_b" },
      { it: "Io ho 30 anni.", en: "I'm 30 years old.", speaker: "person_a" },
      { it: "Ah, sei più grande di me!", en: "Oh, you're older than me!", speaker: "person_b" },
      { it: "Sì, ma non sembra!", en: "Yes, but it doesn't show!", speaker: "person_a" },
    ],
    [
      { it: "l'anno", en: "year", article: "l'" },
      { it: "avere", en: "to have" },
      { it: "grande", en: "big / old" },
    ],
    [
      {
        it: "Come chiedi l'età a qualcuno?", en: "How do you ask someone's age?",
        options: [
          { it: "Quanti anni hai?", en: "How old are you?", correct: true },
          { it: "Come stai?", en: "How are you?", correct: false },
          { it: "Di dove sei?", en: "Where are you from?", correct: false },
        ],
      },
      {
        it: "Cosa rispondi se hai 30 anni?", en: "What do you answer if you're 30?",
        options: [
          { it: "Ho 30 anni", en: "I'm 30", correct: true },
          { it: "Sono 30 anni", en: "I am 30 years", correct: false },
          { it: "30 anni ho", en: "30 years I have", correct: false },
        ],
      },
    ],
    [
      { it: "quanto", en: "how much / how many" },
      { it: "sembrare", en: "to seem" },
    ],
    {
      question: "Un nuovo amico ti chiede quanti anni hai. Cosa rispondi?",
      questionTranslation: "A new friend asks how old you are. What do you answer?",
      options: [
        { text: "Ho 27 anni.", translation: "I'm 27 years old.", correct: true },
        { text: "Mi chiamo Paolo.", translation: "My name is Paolo.", correct: false },
        { text: "Vengo da Roma.", translation: "I come from Rome.", correct: false },
      ],
    },
  );

  // --- M20-4: Asking Someone's Name ---
  await addExperience(20, "Asking Someone's Name", 4, "Greetings",
    [
      { it: "Buongiorno, come si chiama?", en: "Good morning, what is your name?", speaker: "person_a" },
      { it: "Mi chiamo Laura Bianchi. E Lei?", en: "My name is Laura Bianchi. And you?", speaker: "person_b" },
      { it: "Piacere, Laura. Io sono il signor Verdi.", en: "Nice to meet you, Laura. I'm Mr. Verdi.", speaker: "person_a" },
      { it: "Piacere mia, signor Verdi.", en: "My pleasure, Mr. Verdi.", speaker: "person_b" },
      { it: "Come ti chiami, piccolo?", en: "What's your name, little one?", speaker: "person_a" },
    ],
    [
      { it: "come si chiama", en: "what is your name (formal)" },
      { it: "come ti chiami", en: "what is your name (informal)" },
      { it: "il signor", en: "Mr.", article: "il" },
    ],
    [
      {
        it: "Come chiedi il nome in modo formale?", en: "How do you ask a name formally?",
        options: [
          { it: "Come si chiama?", en: "What is your name?", correct: true },
          { it: "Come ti chiami?", en: "What's your name?", correct: false },
          { it: "Come stai?", en: "How are you?", correct: false },
        ],
      },
      {
        it: "Come chiedi il nome a un bambino?", en: "How do you ask a child's name?",
        options: [
          { it: "Come ti chiami?", en: "What's your name?", correct: true },
          { it: "Come si chiama?", en: "What is your name?", correct: false },
          { it: "Di dove sei?", en: "Where are you from?", correct: false },
        ],
      },
    ],
    [
      { it: "chiedere", en: "to ask" },
      { it: "rispondere", en: "to answer" },
    ],
    {
      question: "Sei a un colloquio. Il direttore ti chiede il nome. Cosa rispondi?",
      questionTranslation: "You're at an interview. The director asks your name. What do you answer?",
      options: [
        { text: "Mi chiamo Marco Rossi.", translation: "My name is Marco Rossi.", correct: true },
        { text: "Ho 35 anni.", translation: "I'm 35 years old.", correct: false },
        { text: "Vengo da Torino.", translation: "I come from Turin.", correct: false },
      ],
    },
  );

  // --- M20-5: Introducing Family Members ---
  await addExperience(20, "Introducing Family Members", 4, "Greetings",
    [
      { it: "Questo è mio padre, Carlo.", en: "This is my father, Carlo.", speaker: "person_a" },
      { it: "Piacere, Carlo. Io sono Anna.", en: "Nice to meet you, Carlo. I'm Anna.", speaker: "person_b" },
      { it: "E questa è mia madre, Lucia.", en: "And this is my mother, Lucia.", speaker: "person_a" },
      { it: "Piacere, Lucia! Che bella famiglia!", en: "Nice to meet you, Lucia! What a nice family!", speaker: "person_b" },
      { it: "Grazie! E questi sono i miei fratelli.", en: "Thanks! And these are my brothers.", speaker: "person_a" },
    ],
    [
      { it: "il padre", en: "father", article: "il" },
      { it: "la madre", en: "mother", article: "la" },
      { it: "il fratello", en: "brother", article: "il" },
    ],
    [
      {
        it: "Come presenti tuo padre?", en: "How do you introduce your father?",
        options: [
          { it: "Questo è mio padre", en: "This is my father", correct: true },
          { it: "Questo è mio fratello", en: "This is my brother", correct: false },
          { it: "Questa è mia madre", en: "This is my mother", correct: false },
        ],
      },
      {
        it: "Cosa rispondono gli amici quando presenti la famiglia?", en: "What do friends say when you introduce your family?",
        options: [
          { it: "Piacere!", en: "Nice to meet you!", correct: true },
          { it: "Arrivederci!", en: "Goodbye!", correct: false },
          { it: "Buon appetito!", en: "Enjoy your meal!", correct: false },
        ],
      },
    ],
    [
      { it: "la famiglia", en: "family", article: "la" },
      { it: "la sorella", en: "sister", article: "la" },
    ],
    {
      question: "Vuoi presentare tua sorella a un amico. Cosa dici?",
      questionTranslation: "You want to introduce your sister to a friend. What do you say?",
      options: [
        { text: "Questa è mia sorella, Giulia.", translation: "This is my sister, Giulia.", correct: true },
        { text: "Mia sorella è a casa.", translation: "My sister is at home.", correct: false },
        { text: "Mia sorella ha 20 anni.", translation: "My sister is 20 years old.", correct: false },
      ],
    },
  );

  // ========================
  // SC5: Numbers, Time & Money — scenario="Numbers"
  // Module 21: Counting & Prices
  // ========================

  // --- M21-1: Numbers 1-20 ---
  await addExperience(21, "Numbers 1-20", 4, "Numbers",
    [
      { it: "Uno, due, tre, quattro, cinque!", en: "One, two, three, four, five!", speaker: "person_a" },
      { it: "Sei, sette, otto, nove, dieci!", en: "Six, seven, eight, nine, ten!", speaker: "person_b" },
      { it: "Undici, dodici, tredici, quattordici, quindici.", en: "Eleven, twelve, thirteen, fourteen, fifteen.", speaker: "person_a" },
      { it: "Sedici, diciassette, diciotto, diciannove, venti!", en: "Sixteen, seventeen, eighteen, nineteen, twenty!", speaker: "person_b" },
      { it: "Bravo! Hai contato fino a venti!", en: "Great! You counted to twenty!", speaker: "person_a" },
    ],
    [
      { it: "uno", en: "one" },
      { it: "dieci", en: "ten" },
      { it: "venti", en: "twenty" },
    ],
    [
      {
        it: "Qual è il numero 5 in italiano?", en: "What is the number 5 in Italian?",
        options: [
          { it: "Cinque", en: "Five", correct: true },
          { it: "Sei", en: "Six", correct: false },
          { it: "Dieci", en: "Ten", correct: false },
        ],
      },
      {
        it: "Come si dice 12 in italiano?", en: "How do you say 12 in Italian?",
        options: [
          { it: "Dodici", en: "Twelve", correct: true },
          { it: "Venti", en: "Twenty", correct: false },
          { it: "Undici", en: "Eleven", correct: false },
        ],
      },
    ],
    [
      { it: "contare", en: "to count" },
      { it: "fino a", en: "up to" },
    ],
    {
      question: "Un bambino conta da 1 a 10. Cosa dice dopo 'cinque'?",
      questionTranslation: "A child counts from 1 to 10. What does he say after 'five'?",
      options: [
        { text: "Sei!", translation: "Six!", correct: true },
        { text: "Venti!", translation: "Twenty!", correct: false },
        { text: "Tredici!", translation: "Thirteen!", correct: false },
      ],
    },
  );

  // --- M21-2: Numbers 20-100 ---
  await addExperience(21, "Numbers 20-100", 4, "Numbers",
    [
      { it: "Quanto costa questa maglietta?", en: "How much does this t-shirt cost?", speaker: "person_a" },
      { it: "Costa 25 euro.", en: "It costs 25 euros.", speaker: "person_b" },
      { it: "E questo cappello?", en: "And this hat?", speaker: "person_a" },
      { it: "Quello costa 35 euro. Abbiamo anche uno sconto!", en: "That one costs 35 euros. We also have a discount!", speaker: "person_b" },
      { it: "Allora prendo il cappello. Ecco 40 euro.", en: "Then I'll take the hat. Here's 40 euros.", speaker: "person_a" },
    ],
    [
      { it: "trenta", en: "thirty" },
      { it: "quaranta", en: "forty" },
      { it: "cinquanta", en: "fifty" },
    ],
    [
      {
        it: "Quanto costa la maglietta?", en: "How much does the t-shirt cost?",
        options: [
          { it: "25 euro", en: "25 euros", correct: true },
          { it: "35 euro", en: "35 euros", correct: false },
          { it: "40 euro", en: "40 euros", correct: false },
        ],
      },
      {
        it: "Quanto costa il cappello?", en: "How much does the hat cost?",
        options: [
          { it: "35 euro", en: "35 euros", correct: true },
          { it: "25 euro", en: "25 euros", correct: false },
          { it: "50 euro", en: "50 euros", correct: false },
        ],
      },
    ],
    [
      { it: "la maglietta", en: "t-shirt", article: "la" },
      { it: "il cappello", en: "hat", article: "il" },
    ],
    {
      question: "Vuoi comprare una maglietta che costa 30 euro. Cosa dici?",
      questionTranslation: "You want to buy a t-shirt that costs 30 euros. What do you say?",
      options: [
        { text: "Quanto costa questa maglietta?", translation: "How much does this t-shirt cost?", correct: true },
        { text: "Questa maglietta è brutta.", translation: "This t-shirt is ugly.", correct: false },
        { text: "Non mi piace.", translation: "I don't like it.", correct: false },
      ],
    },
  );

  // --- M21-3: Asking How Much ---
  await addExperience(21, "Asking How Much", 4, "Numbers",
    [
      { it: "Quanto costa questa borsa?", en: "How much does this bag cost?", speaker: "person_a" },
      { it: "Costa 50 euro.", en: "It costs 50 euros.", speaker: "person_b" },
      { it: "Quant'è in totale con lo sconto?", en: "How much is it in total with the discount?", speaker: "person_a" },
      { it: "Con il 10% di sconto sono 45 euro.", en: "With the 10% discount it's 45 euros.", speaker: "person_b" },
      { it: "Va bene, la prendo!", en: "Alright, I'll take it!", speaker: "person_a" },
    ],
    [
      { it: "quanto costa", en: "how much does it cost" },
      { it: "quant'è", en: "how much is it" },
      { it: "lo sconto", en: "discount", article: "lo" },
    ],
    [
      {
        it: "Come chiedi il prezzo di un oggetto?", en: "How do you ask the price of an item?",
        options: [
          { it: "Quanto costa?", en: "How much does it cost?", correct: true },
          { it: "Come stai?", en: "How are you?", correct: false },
          { it: "Di dove sei?", en: "Where are you from?", correct: false },
        ],
      },
      {
        it: "Quanto costa la borsa con lo sconto?", en: "How much does the bag cost with the discount?",
        options: [
          { it: "45 euro", en: "45 euros", correct: true },
          { it: "50 euro", en: "50 euros", correct: false },
          { it: "55 euro", en: "55 euros", correct: false },
        ],
      },
    ],
    [
      { it: "la borsa", en: "bag", article: "la" },
      { it: "prendere", en: "to take" },
    ],
    {
      question: "Vedi un oggetto che ti piace e vuoi sapere il prezzo. Cosa dici?",
      questionTranslation: "You see an item you like and want to know the price. What do you say?",
      options: [
        { text: "Quanto costa?", translation: "How much does it cost?", correct: true },
        { text: "È molto bello!", translation: "It's very nice!", correct: false },
        { text: "Dov'è il bagno?", translation: "Where is the bathroom?", correct: false },
      ],
    },
  );

  // --- M21-4: Buying a Coffee ---
  await addExperience(21, "Buying a Coffee", 4, "Numbers",
    [
      { it: "Buongiorno! Vorrei un caffè, per favore.", en: "Good morning! I'd like a coffee, please.", speaker: "person_a" },
      { it: "Subito! Un caffè.. Nient'altro?", en: "Right away! A coffee. Anything else?", speaker: "person_b" },
      { it: "Sì, anche un cornetto vuoto, per favore.", en: "Yes, also a plain croissant, please.", speaker: "person_a" },
      { it: "Ecco! Sono 3 euro in totale.", en: "Here! That's 3 euros total.", speaker: "person_b" },
      { it: "Ecco 5 euro. Tenga il resto.", en: "Here's 5 euros. Keep the change.", speaker: "person_a" },
    ],
    [
      { it: "il caffè", en: "coffee", article: "il" },
      { it: "il cornetto", en: "croissant", article: "il" },
      { it: "il resto", en: "change", article: "il" },
    ],
    [
      {
        it: "Cosa ordina Persona A?", en: "What does Person A order?",
        options: [
          { it: "Un caffè e un cornetto", en: "A coffee and a croissant", correct: true },
          { it: "Una birra", en: "A beer", correct: false },
          { it: "Un tè", en: "A tea", correct: false },
        ],
      },
      {
        it: "Quanto costa in totale?", en: "How much does it cost in total?",
        options: [
          { it: "3 euro", en: "3 euros", correct: true },
          { it: "5 euro", en: "5 euros", correct: false },
          { it: "2 euro", en: "2 euros", correct: false },
        ],
      },
    ],
    [
      { it: "nient'altro", en: "nothing else" },
      { it: "il totale", en: "total", article: "il" },
    ],
    {
      question: "Sei al bar e vuoi ordinare un caffè. Cosa dici?",
      questionTranslation: "You're at a bar and want to order a coffee. What do you say?",
      options: [
        { text: "Vorrei un caffè, per favore.", translation: "I'd like a coffee, please.", correct: true },
        { text: "Dov'è il bagno?", translation: "Where is the bathroom?", correct: false },
        { text: "Quanto costa la maglietta?", translation: "How much does the t-shirt cost?", correct: false },
      ],
    },
  );

  // --- M21-5: Large Numbers (100+) ---
  await addExperience(21, "Large Numbers (100+)", 4, "Numbers",
    [
      { it: "Quanto costa questa macchina?", en: "How much does this car cost?", speaker: "person_a" },
      { it: "Questa macchina costa 15.000 euro.", en: "This car costs 15,000 euros.", speaker: "person_b" },
      { it: "E quella più grande?", en: "And that bigger one?", speaker: "person_a" },
      { it: "Quella costa 22.500 euro.", en: "That one costs 22,500 euros.", speaker: "person_b" },
      { it: "Duemila euro di differenza... sono tanti!", en: "Two thousand euros difference... that's a lot!", speaker: "person_a" },
    ],
    [
      { it: "cento", en: "hundred" },
      { it: "mille", en: "thousand" },
      { it: "la macchina", en: "car", article: "la" },
    ],
    [
      {
        it: "Quanto costa la macchina più grande?", en: "How much does the bigger car cost?",
        options: [
          { it: "22.500 euro", en: "22,500 euros", correct: true },
          { it: "15.000 euro", en: "15,000 euros", correct: false },
          { it: "2.000 euro", en: "2,000 euros", correct: false },
        ],
      },
      {
        it: "Come si dice 100 in italiano?", en: "How do you say 100 in Italian?",
        options: [
          { it: "Cento", en: "Hundred", correct: true },
          { it: "Mille", en: "Thousand", correct: false },
          { it: "Dieci", en: "Ten", correct: false },
        ],
      },
    ],
    [
      { it: "la differenza", en: "difference", article: "la" },
      { it: "il prezzo", en: "price", article: "il" },
    ],
    {
      question: "Vedi un annuncio per un appartamento che costa 120.000 euro. Cosa dici?",
      questionTranslation: "You see an ad for an apartment that costs 120,000 euros. What do you say?",
      options: [
        { text: "Centoventimila euro è tanto!", translation: "One hundred twenty thousand euros is a lot!", correct: true },
        { text: "Ventimila euro è poco.", translation: "Twenty thousand euros is little.", correct: false },
        { text: "Mille euro è giusto.", translation: "One thousand euros is fair.", correct: false },
      ],
    },
  );

  // ========================
  // Module 22: Telling Time
  // ========================

  // --- M22-1: What Time Is It? ---
  await addExperience(22, "What Time Is It?", 4, "Numbers",
    [
      { it: "Che ora è?", en: "What time is it?", speaker: "person_a" },
      { it: "Sono le tre.", en: "It's three o'clock.", speaker: "person_b" },
      { it: "È l'una?", en: "Is it one o'clock?", speaker: "person_a" },
      { it: "No, è l'una e mezza. Sono le 13:30.", en: "No, it's half past one. It's 1:30 PM.", speaker: "person_b" },
      { it: "Ah, allora devo andare a pranzo!", en: "Ah, then I have to go to lunch!", speaker: "person_a" },
    ],
    [
      { it: "che ora è", en: "what time is it" },
      { it: "è l'una", en: "it's one o'clock" },
      { it: "sono le", en: "it is (hours)" },
    ],
    [
      {
        it: "Come chiedi l'ora in italiano?", en: "How do you ask the time in Italian?",
        options: [
          { it: "Che ora è?", en: "What time is it?", correct: true },
          { it: "Quanto costa?", en: "How much does it cost?", correct: false },
          { it: "Come ti chiami?", en: "What's your name?", correct: false },
        ],
      },
      {
        it: "Come si dice 'It's one o'clock' in italiano?", en: "How do you say 'It's one o'clock' in Italian?",
        options: [
          { it: "È l'una", en: "It's one", correct: true },
          { it: "Sono le una", en: "It's one", correct: false },
          { it: "È le una", en: "It's one", correct: false },
        ],
      },
    ],
    [
      { it: "l'ora", en: "hour/time", article: "l'" },
      { it: "il minuto", en: "minute", article: "il" },
    ],
    {
      question: "Vuoi sapere che ora è. Cosa chiedi?",
      questionTranslation: "You want to know what time it is. What do you ask?",
      options: [
        { text: "Che ora è?", translation: "What time is it?", correct: true },
        { text: "Quanti anni hai?", translation: "How old are you?", correct: false },
        { text: "Come stai?", translation: "How are you?", correct: false },
      ],
    },
  );

  // --- M22-2: Hours and Minutes ---
  await addExperience(22, "Hours and Minutes", 4, "Numbers",
    [
      { it: "Il treno parte alle 9:15. Sono le nove e un quarto.", en: "The train leaves at 9:15. It's quarter past nine.", speaker: "person_a" },
      { it: "E arriva alle 10:30. Sono le dieci e mezzo.", en: "And it arrives at 10:30. It's half past ten.", speaker: "person_b" },
      { it: "Il prossimo treno è alle 11:45.", en: "The next train is at 11:45.", speaker: "person_a" },
      { it: "Meno un quarto? Alle dodici meno un quarto?", en: "Quarter to? At quarter to twelve?", speaker: "person_b" },
      { it: "Sì, esatto! Alle 11:45.", en: "Yes, exactly! At 11:45.", speaker: "person_a" },
    ],
    [
      { it: "e mezzo", en: "half past" },
      { it: "e un quarto", en: "quarter past" },
      { it: "meno un quarto", en: "quarter to" },
    ],
    [
      {
        it: "Come si dice 9:15 in italiano?", en: "How do you say 9:15 in Italian?",
        options: [
          { it: "Le nove e un quarto", en: "Quarter past nine", correct: true },
          { it: "Le nove e mezzo", en: "Half past nine", correct: false },
          { it: "Le dieci meno un quarto", en: "Quarter to ten", correct: false },
        ],
      },
      {
        it: "Come si dice 11:45 in italiano?", en: "How do you say 11:45 in Italian?",
        options: [
          { it: "Le dodici meno un quarto", en: "Quarter to twelve", correct: true },
          { it: "Le undici e un quarto", en: "Quarter past eleven", correct: false },
          { it: "Le undici e mezzo", en: "Half past eleven", correct: false },
        ],
      },
    ],
    [
      { it: "il treno", en: "train", article: "il" },
      { it: "partire", en: "to leave" },
    ],
    {
      question: "Il tuo treno parte alle 14:45. Come lo spieghi?",
      questionTranslation: "Your train leaves at 2:45 PM. How do you explain it?",
      options: [
        { text: "Il treno parte alle tre meno un quarto.", translation: "The train leaves at quarter to three.", correct: true },
        { text: "Il treno parte alle due e un quarto.", translation: "The train leaves at quarter past two.", correct: false },
        { text: "Il treno parte alle tre.", translation: "The train leaves at three.", correct: false },
      ],
    },
  );

  // --- M22-3: Days of the Week ---
  await addExperience(22, "Days of the Week", 4, "Numbers",
    [
      { it: "Che giorno è oggi?", en: "What day is today?", speaker: "person_a" },
      { it: "Oggi è lunedì.", en: "Today is Monday.", speaker: "person_b" },
      { it: "E domani è martedì, giusto?", en: "And tomorrow is Tuesday, right?", speaker: "person_a" },
      { it: "Sì, martedì. Mercoledì ho una riunione.", en: "Yes, Tuesday. On Wednesday I have a meeting.", speaker: "person_b" },
      { it: "Io preferisco venerdì... è quasi weekend!", en: "I prefer Friday... it's almost weekend!", speaker: "person_a" },
    ],
    [
      { it: "lunedì", en: "Monday" },
      { it: "venerdì", en: "Friday" },
      { it: "il weekend", en: "weekend", article: "il" },
    ],
    [
      {
        it: "Che giorno viene dopo lunedì?", en: "What day comes after Monday?",
        options: [
          { it: "Martedì", en: "Tuesday", correct: true },
          { it: "Mercoledì", en: "Wednesday", correct: false },
          { it: "Domenica", en: "Sunday", correct: false },
        ],
      },
      {
        it: "Quale giorno è prima del weekend?", en: "Which day is before the weekend?",
        options: [
          { it: "Venerdì", en: "Friday", correct: true },
          { it: "Giovedì", en: "Thursday", correct: false },
          { it: "Sabato", en: "Saturday", correct: false },
        ],
      },
    ],
    [
      { it: "oggi", en: "today" },
      { it: "domani", en: "tomorrow" },
    ],
    {
      question: "Oggi è mercoledì. Che giorno è domani?",
      questionTranslation: "Today is Wednesday. What day is tomorrow?",
      options: [
        { text: "Giovedì", translation: "Thursday", correct: true },
        { text: "Martedì", translation: "Tuesday", correct: false },
        { text: "Venerdì", translation: "Friday", correct: false },
      ],
    },
  );

  // --- M22-4: Months and Dates ---
  await addExperience(22, "Months and Dates", 4, "Numbers",
    [
      { it: "Che mese è?", en: "What month is it?", speaker: "person_a" },
      { it: "È gennaio. Il primo mese dell'anno.", en: "It's January. The first month of the year.", speaker: "person_b" },
      { it: "Il mio compleanno è in aprile.", en: "My birthday is in April.", speaker: "person_a" },
      { it: "Il mio è a dicembre. Il 25 dicembre.", en: "Mine is in December. December 25th.", speaker: "person_b" },
      { it: "Natale! Che bello!", en: "Christmas! How nice!", speaker: "person_a" },
    ],
    [
      { it: "gennaio", en: "January" },
      { it: "aprile", en: "April" },
      { it: "dicembre", en: "December" },
    ],
    [
      {
        it: "Qual è il primo mese dell'anno?", en: "What is the first month of the year?",
        options: [
          { it: "Gennaio", en: "January", correct: true },
          { it: "Febbraio", en: "February", correct: false },
          { it: "Marzo", en: "March", correct: false },
        ],
      },
      {
        it: "Quando è il compleanno di Persona B?", en: "When is Person B's birthday?",
        options: [
          { it: "Il 25 dicembre", en: "December 25th", correct: true },
          { it: "In aprile", en: "In April", correct: false },
          { it: "In gennaio", en: "In January", correct: false },
        ],
      },
    ],
    [
      { it: "il mese", en: "month", article: "il" },
      { it: "il compleanno", en: "birthday", article: "il" },
    ],
    {
      question: "Qualcuno ti chiede quando è il tuo compleanno. Cosa rispondi?",
      questionTranslation: "Someone asks when your birthday is. What do you answer?",
      options: [
        { text: "Il mio compleanno è a giugno.", translation: "My birthday is in June.", correct: true },
        { text: "Ho 30 anni.", translation: "I'm 30 years old.", correct: false },
        { text: "Vengo da Roma.", translation: "I come from Rome.", correct: false },
      ],
    },
  );

  // --- M22-5: Making a Date ---
  await addExperience(22, "Making a Date", 4, "Numbers",
    [
      { it: "Ci vediamo lunedì alle tre?", en: "Shall we meet on Monday at three?", speaker: "person_a" },
      { it: "Lunedì alle tre non posso. Ho una riunione.", en: "Monday at three I can't. I have a meeting.", speaker: "person_b" },
      { it: "Allora martedì alle dieci?", en: "Then Tuesday at ten?", speaker: "person_a" },
      { it: "Sì, martedì alle dieci va bene. Ci vediamo al bar?", en: "Yes, Tuesday at ten works. Shall we meet at the bar?", speaker: "person_b" },
      { it: "Perfetto! Al bar Centrale. A martedì!", en: "Perfect! At Bar Centrale. See you on Tuesday!", speaker: "person_a" },
    ],
    [
      { it: "ci vediamo", en: "see you / let's meet" },
      { it: "la riunione", en: "meeting", article: "la" },
      { it: "lunedì", en: "Monday" },
    ],
    [
      {
        it: "Perché Persona A non può lunedì alle tre?", en: "Why can't Person A meet on Monday at three?",
        options: [
          { it: "Ha una riunione", en: "He has a meeting", correct: true },
          { it: "È malato", en: "He's sick", correct: false },
          { it: "Va in palestra", en: "He goes to the gym", correct: false },
        ],
      },
      {
        it: "Quando si incontrano?", en: "When do they meet?",
        options: [
          { it: "Martedì alle dieci", en: "Tuesday at ten", correct: true },
          { it: "Lunedì alle tre", en: "Monday at three", correct: false },
          { it: "Mercoledì alle due", en: "Wednesday at two", correct: false },
        ],
      },
    ],
    [
      { it: "incontrarsi", en: "to meet each other" },
      { it: "fissare", en: "to set / arrange" },
    ],
    {
      question: "Vuoi incontrare un amico venerdì alle 18:00. Cosa proponi?",
      questionTranslation: "You want to meet a friend on Friday at 6:00 PM. What do you suggest?",
      options: [
        { text: "Ci vediamo venerdì alle sei?", translation: "Shall we meet on Friday at six?", correct: true },
        { text: "Venerdì non voglio uscire.", translation: "On Friday I don't want to go out.", correct: false },
        { text: "Che ora è?", translation: "What time is it?", correct: false },
      ],
    },
  );

  // ========================
  // SC6: Colors & Descriptions — scenario="Colors"
  // Module 23: Basic Adjectives
  // ========================

  // --- M23-1: Common Colors ---
  await addExperience(23, "Common Colors", 4, "Colors",
    [
      { it: "Di che colore è la tua macchina?", en: "What color is your car?", speaker: "person_a" },
      { it: "La mia macchina è rossa.", en: "My car is red.", speaker: "person_b" },
      { it: "Bella! Io preferisco il blu.", en: "Nice! I prefer blue.", speaker: "person_a" },
      { it: "Il verde è il mio colore preferito.", en: "Green is my favorite color.", speaker: "person_b" },
      { it: "Anche il giallo è bello, come il sole!", en: "Also yellow is beautiful, like the sun!", speaker: "person_a" },
    ],
    [
      { it: "rosso", en: "red" },
      { it: "blu", en: "blue" },
      { it: "verde", en: "green" },
    ],
    [
      {
        it: "Di che colore è la macchina di Persona A?", en: "What color is Person A's car?",
        options: [
          { it: "Rossi", en: "Red", correct: false },
          { it: "Verde", en: "Green", correct: false },
          { it: "Non lo dice", en: "He doesn't say", correct: true },
        ],
      },
      {
        it: "Qual è il colore preferito di Persona B?", en: "What is Person B's favorite color?",
        options: [
          { it: "Il verde", en: "Green", correct: true },
          { it: "Il rosso", en: "Red", correct: false },
          { it: "Il blu", en: "Blue", correct: false },
        ],
      },
    ],
    [
      { it: "il colore", en: "color", article: "il" },
      { it: "preferito", en: "favorite" },
    ],
    {
      question: "Qualcuno ti chiede il tuo colore preferito. Cosa rispondi?",
      questionTranslation: "Someone asks your favorite color. What do you answer?",
      options: [
        { text: "Il mio colore preferito è il blu.", translation: "My favorite color is blue.", correct: true },
        { text: "Ho 25 anni.", translation: "I'm 25 years old.", correct: false },
        { text: "Vengo da Milano.", translation: "I come from Milan.", correct: false },
      ],
    },
  );

  // --- M23-2: Describing Size ---
  await addExperience(23, "Describing Size", 4, "Colors",
    [
      { it: "La mia casa è grande.", en: "My house is big.", speaker: "person_a" },
      { it: "La mia è piccola ma accogliente.", en: "Mine is small but cozy.", speaker: "person_b" },
      { it: "Quanto è lunga la strada?", en: "How long is the road?", speaker: "person_a" },
      { it: "È molto lunga. Forse 2 chilometri.", en: "It's very long. Maybe 2 kilometers.", speaker: "person_b" },
      { it: "Preferisco un percorso più corto.", en: "I prefer a shorter route.", speaker: "person_a" },
    ],
    [
      { it: "grande", en: "big" },
      { it: "piccolo", en: "small" },
      { it: "lungo", en: "long" },
    ],
    [
      {
        it: "Come descrivi la casa di Persona A?", en: "How do you describe Person A's house?",
        options: [
          { it: "È grande", en: "It's big", correct: true },
          { it: "È piccola", en: "It's small", correct: false },
          { it: "È lunga", en: "It's long", correct: false },
        ],
      },
      {
        it: "Cosa significa 'corto'?", en: "What does 'corto' mean?",
        options: [
          { it: "Short", en: "Short", correct: true },
          { it: "Long", en: "Long", correct: false },
          { it: "Big", en: "Big", correct: false },
        ],
      },
    ],
    [
      { it: "accogliente", en: "cozy" },
      { it: "il percorso", en: "route", article: "il" },
    ],
    {
      question: "Un amico ti chiede com'è la tua casa. Cosa dici?",
      questionTranslation: "A friend asks what your house is like. What do you say?",
      options: [
        { text: "La mia casa è piccola ma bella.", translation: "My house is small but nice.", correct: true },
        { text: "La mia casa costa 200 euro.", translation: "My house costs 200 euros.", correct: false },
        { text: "La mia casa ha 10 anni.", translation: "My house is 10 years old.", correct: false },
      ],
    },
  );

  // --- M23-3: Describing Temperature ---
  await addExperience(23, "Describing Temperature", 4, "Colors",
    [
      { it: "Oggi fa molto caldo!", en: "Today is very hot!", speaker: "person_a" },
      { it: "Sì, ci sono 35 gradi. È caldissimo!", en: "Yes, it's 35 degrees. It's very hot!", speaker: "person_b" },
      { it: "Ieri faceva freddo, invece.", en: "Yesterday it was cold, though.", speaker: "person_a" },
      { it: "La sera è fresco, per fortuna.", en: "In the evening it's cool, luckily.", speaker: "person_b" },
      { it: "Sì, l'aria fresca è piacevole.", en: "Yes, the fresh air is pleasant.", speaker: "person_a" },
    ],
    [
      { it: "caldo", en: "hot" },
      { it: "freddo", en: "cold" },
      { it: "fresco", en: "cool" },
    ],
    [
      {
        it: "Che tempo fa oggi secondo il dialogo?", en: "What's the weather like today according to the dialogue?",
        options: [
          { it: "Fa molto caldo", en: "It's very hot", correct: true },
          { it: "Fa freddo", en: "It's cold", correct: false },
          { it: "È fresco", en: "It's cool", correct: false },
        ],
      },
      {
        it: "Com'era il tempo ieri?", en: "How was the weather yesterday?",
        options: [
          { it: "Faceva freddo", en: "It was cold", correct: true },
          { it: "Faceva caldo", en: "It was hot", correct: false },
          { it: "Pioveva", en: "It was raining", correct: false },
        ],
      },
    ],
    [
      { it: "la temperatura", en: "temperature", article: "la" },
      { it: "piacevole", en: "pleasant" },
    ],
    {
      question: "Oggi fa molto freddo. Come lo descrivi?",
      questionTranslation: "Today is very cold. How do you describe it?",
      options: [
        { text: "Oggi fa molto freddo!", translation: "Today is very cold!", correct: true },
        { text: "Oggi fa caldo!", translation: "Today is hot!", correct: false },
        { text: "Oggi piove.", translation: "Today it's raining.", correct: false },
      ],
    },
  );

  // --- M23-4: Describing Taste ---
  await addExperience(23, "Describing Taste", 4, "Colors",
    [
      { it: "Questa torta è buonissima!", en: "This cake is very good!", speaker: "person_a" },
      { it: "Sì, è dolce e morbida.", en: "Yes, it's sweet and soft.", speaker: "person_b" },
      { it: "Il caffè invece è cattivo oggi.", en: "The coffee on the other hand is bad today.", speaker: "person_a" },
      { it: "Troppo amaro. Metti un po' di zucchero.", en: "Too bitter. Add some sugar.", speaker: "person_b" },
      { it: "Il sale fa bene, ma non troppo salato!", en: "Salt is good, but not too salty!", speaker: "person_a" },
    ],
    [
      { it: "buono", en: "good (taste)" },
      { it: "cattivo", en: "bad (taste)" },
      { it: "dolce", en: "sweet" },
    ],
    [
      {
        it: "Com'è la torta?", en: "How is the cake?",
        options: [
          { it: "Buonissima e dolce", en: "Very good and sweet", correct: true },
          { it: "Salata", en: "Salty", correct: false },
          { it: "Amaro", en: "Bitter", correct: false },
        ],
      },
      {
        it: "Com'è il caffè?", en: "How is the coffee?",
        options: [
          { it: "Cattivo e amaro", en: "Bad and bitter", correct: true },
          { it: "Dolce", en: "Sweet", correct: false },
          { it: "Salato", en: "Salty", correct: false },
        ],
      },
    ],
    [
      { it: "la torta", en: "cake", article: "la" },
      { it: "lo zucchero", en: "sugar", article: "lo" },
    ],
    {
      question: "Assaggi un piatto che non ti piace. Cosa dici?",
      questionTranslation: "You taste a dish you don't like. What do you say?",
      options: [
        { text: "Questo piatto non è buono.", translation: "This dish is not good.", correct: true },
        { text: "Questo piatto è dolcissimo.", translation: "This dish is very sweet.", correct: false },
        { text: "Questo piatto è caldo.", translation: "This dish is hot.", correct: false },
      ],
    },
  );

  // --- M23-5: Opposite Adjectives ---
  await addExperience(23, "Opposite Adjectives", 4, "Colors",
    [
      { it: "Marco è bello, ma suo fratello è brutto?", en: "Marco is handsome, but his brother is ugly?", speaker: "person_a" },
      { it: "No, anche lui è bello! Sono tutti belli.", en: "No, he is handsome too! They are all handsome.", speaker: "person_b" },
      { it: "La mia macchina è nuova, la tua è vecchia.", en: "My car is new, yours is old.", speaker: "person_a" },
      { it: "Vero. Ma la mia è più comoda!", en: "True. But mine is more comfortable!", speaker: "person_b" },
      { it: "Bello e brutto, nuovo e vecchio... opposti!", en: "Beautiful and ugly, new and old... opposites!", speaker: "person_a" },
    ],
    [
      { it: "bello", en: "beautiful" },
      { it: "brutto", en: "ugly" },
      { it: "nuovo", en: "new" },
    ],
    [
      {
        it: "Qual è il contrario di 'bello'?", en: "What is the opposite of 'bello'?",
        options: [
          { it: "Brutto", en: "Ugly", correct: true },
          { it: "Grande", en: "Big", correct: false },
          { it: "Nuovo", en: "New", correct: false },
        ],
      },
      {
        it: "Qual è il contrario di 'nuovo'?", en: "What is the opposite of 'nuovo'?",
        options: [
          { it: "Vecchio", en: "Old", correct: true },
          { it: "Bello", en: "Beautiful", correct: false },
          { it: "Piccolo", en: "Small", correct: false },
        ],
      },
    ],
    [
      { it: "vecchio", en: "old" },
      { it: "comodo", en: "comfortable" },
    ],
    {
      question: "Qualcuno ti chiede il contrario di 'grande'. Cosa rispondi?",
      questionTranslation: "Someone asks you the opposite of 'big'. What do you answer?",
      options: [
        { text: "Il contrario di grande è piccolo.", translation: "The opposite of big is small.", correct: true },
        { text: "Il contrario di grande è bello.", translation: "The opposite of big is beautiful.", correct: false },
        { text: "Il contrario di grande è nuovo.", translation: "The opposite of big is new.", correct: false },
      ],
    },
  );

  // ========================
  // Module 24: Describing Objects
  // ========================

  // --- M24-1: This and That ---
  await addExperience(24, "This and That", 4, "Colors",
    [
      { it: "Questo libro è interessante.", en: "This book is interesting.", speaker: "person_a" },
      { it: "Quello laggiù è noioso.", en: "That one over there is boring.", speaker: "person_b" },
      { it: "Questa penna è blu, quella è rossa.", en: "This pen is blue, that one is red.", speaker: "person_a" },
      { it: "Questi occhiali sono nuovi.", en: "These glasses are new.", speaker: "person_b" },
      { it: "Quelle scarpe sono vecchie ma belle.", en: "Those shoes are old but nice.", speaker: "person_a" },
    ],
    [
      { it: "questo", en: "this" },
      { it: "quello", en: "that" },
      { it: "questo libro", en: "this book" },
    ],
    [
      {
        it: "Com'è questo libro?", en: "How is this book?",
        options: [
          { it: "Interessante", en: "Interesting", correct: true },
          { it: "Noioso", en: "Boring", correct: false },
          { it: "Nuovo", en: "New", correct: false },
        ],
      },
      {
        it: "Com'è quella penna?", en: "How is that pen?",
        options: [
          { it: "Rossi", en: "Red", correct: true },
          { it: "Blu", en: "Blue", correct: false },
          { it: "Verde", en: "Green", correct: false },
        ],
      },
    ],
    [
      { it: "la penna", en: "pen", article: "la" },
      { it: "gli occhiali", en: "glasses" },
    ],
    {
      question: "Indichi un oggetto vicino a te. Cosa dici?",
      questionTranslation: "You point to an object near you. What do you say?",
      options: [
        { text: "Questo è il mio telefono.", translation: "This is my phone.", correct: true },
        { text: "Quello è il tuo telefono.", translation: "That is your phone.", correct: false },
        { text: "Il telefono è vecchio.", translation: "The phone is old.", correct: false },
      ],
    },
  );

  // --- M24-2: What Is This? ---
  await addExperience(24, "What Is This?", 4, "Colors",
    [
      { it: "Cos'è questo?", en: "What is this?", speaker: "person_a" },
      { it: "È un portafoglio.", en: "It's a wallet.", speaker: "person_b" },
      { it: "Che cos'è quello?", en: "What is that?", speaker: "person_a" },
      { it: "Quello è un ombrello.", en: "That is an umbrella.", speaker: "person_b" },
      { it: "Ah, sembra un bastone!", en: "Ah, it looks like a stick!", speaker: "person_a" },
    ],
    [
      { it: "cos'è", en: "what is" },
      { it: "che cos'è", en: "what is" },
      { it: "il portafoglio", en: "wallet", article: "il" },
    ],
    [
      {
        it: "Come chiedi 'What is this?' in italiano?", en: "How do you ask 'What is this?' in Italian?",
        options: [
          { it: "Cos'è questo?", en: "What is this?", correct: true },
          { it: "Dov'è questo?", en: "Where is this?", correct: false },
          { it: "Chi è questo?", en: "Who is this?", correct: false },
        ],
      },
      {
        it: "Cosa è quello?", en: "What is that?",
        options: [
          { it: "Un ombrello", en: "An umbrella", correct: true },
          { it: "Un portafoglio", en: "A wallet", correct: false },
          { it: "Un bastone", en: "A stick", correct: false },
        ],
      },
    ],
    [
      { it: "l'ombrello", en: "umbrella", article: "l'" },
      { it: "sembrare", en: "to seem / look like" },
    ],
    {
      question: "Vedi un oggetto che non conosci. Come chiedi cosa è?",
      questionTranslation: "You see an object you don't know. How do you ask what it is?",
      options: [
        { text: "Che cos'è questo?", translation: "What is this?", correct: true },
        { text: "Quanto costa?", translation: "How much does it cost?", correct: false },
        { text: "Dov'è?", translation: "Where is it?", correct: false },
      ],
    },
  );

  // --- M24-3: Describing a Room ---
  await addExperience(24, "Describing a Room", 4, "Colors",
    [
      { it: "Nella mia stanza c'è un letto grande.", en: "In my room there is a big bed.", speaker: "person_a" },
      { it: "C'è anche un tavolo?", en: "Is there also a table?", speaker: "person_b" },
      { it: "Sì, c'è un tavolo e ci sono due sedie.", en: "Yes, there is a table and there are two chairs.", speaker: "person_a" },
      { it: "Ci sono finestre?", en: "Are there windows?", speaker: "person_b" },
      { it: "Sì, c'è una finestra grande con vista sul mare.", en: "Yes, there is a big window with a sea view.", speaker: "person_a" },
    ],
    [
      { it: "c'è", en: "there is" },
      { it: "ci sono", en: "there are" },
      { it: "il letto", en: "bed", article: "il" },
    ],
    [
      {
        it: "Cosa c'è nella stanza?", en: "What is in the room?",
        options: [
          { it: "Un letto, un tavolo e due sedie", en: "A bed, a table and two chairs", correct: true },
          { it: "Solo un letto", en: "Only a bed", correct: false },
          { it: "Un tavolo e una sedia", en: "A table and a chair", correct: false },
        ],
      },
      {
        it: "Quante finestre ci sono?", en: "How many windows are there?",
        options: [
          { it: "Una", en: "One", correct: true },
          { it: "Due", en: "Two", correct: false },
          { it: "Nessuna", en: "None", correct: false },
        ],
      },
    ],
    [
      { it: "la finestra", en: "window", article: "la" },
      { it: "la sedia", en: "chair", article: "la" },
    ],
    {
      question: "Descrivi la tua stanza a un amico. Cosa dici?",
      questionTranslation: "You describe your room to a friend. What do you say?",
      options: [
        { text: "Nella mia stanza c'è un letto e un armadio.", translation: "In my room there is a bed and a wardrobe.", correct: true },
        { text: "La mia stanza è a Roma.", translation: "My room is in Rome.", correct: false },
        { text: "La mia stanza costa 500 euro.", translation: "My room costs 500 euros.", correct: false },
      ],
    },
  );

  // --- M24-4: Describing People ---
  await addExperience(24, "Describing People", 4, "Colors",
    [
      { it: "Com'è Marco?", en: "What is Marco like?", speaker: "person_a" },
      { it: "Marco è alto e magro. Ha gli occhi azzurri.", en: "Marco is tall and thin. He has blue eyes.", speaker: "person_b" },
      { it: "E sua sorella Luisa?", en: "And his sister Luisa?", speaker: "person_a" },
      { it: "Lei è bassa e un po' grassa, ma molto simpatica.", en: "She is short and a bit fat, but very nice.", speaker: "person_b" },
      { it: "Sono molto diversi!", en: "They are very different!", speaker: "person_a" },
    ],
    [
      { it: "alto", en: "tall" },
      { it: "basso", en: "short" },
      { it: "magro", en: "thin" },
    ],
    [
      {
        it: "Com'è Marco?", en: "What is Marco like?",
        options: [
          { it: "Alto e magro", en: "Tall and thin", correct: true },
          { it: "Basso e grasso", en: "Short and fat", correct: false },
          { it: "Alto e grasso", en: "Tall and fat", correct: false },
        ],
      },
      {
        it: "Com'è Luisa?", en: "What is Luisa like?",
        options: [
          { it: "Bassa e simpatica", en: "Short and nice", correct: true },
          { it: "Alta e magra", en: "Tall and thin", correct: false },
          { it: "Alta e simpatica", en: "Tall and nice", correct: false },
        ],
      },
    ],
    [
      { it: "gli occhi", en: "eyes" },
      { it: "simpatico", en: "nice / friendly" },
    ],
    {
      question: "Un amico ti chiede com'è una persona. Cosa dici?",
      questionTranslation: "A friend asks what a person is like. What do you say?",
      options: [
        { text: "È una persona alta e gentile.", translation: "He is a tall and kind person.", correct: true },
        { text: "Ha 30 anni.", translation: "He is 30 years old.", correct: false },
        { text: "Viene da Roma.", translation: "He comes from Rome.", correct: false },
      ],
    },
  );

  // --- M24-5: Describing Weather ---
  await addExperience(24, "Describing Weather", 4, "Colors",
    [
      { it: "Oggi c'è il sole! Che bella giornata!", en: "Today it's sunny! What a nice day!", speaker: "person_a" },
      { it: "Sì, non piove. Il cielo è azzurro.", en: "Yes, it's not raining. The sky is blue.", speaker: "person_b" },
      { it: "Ieri era nuvoloso e faceva freddo.", en: "Yesterday it was cloudy and cold.", speaker: "person_a" },
      { it: "Domani piove secondo le previsioni.", en: "Tomorrow it will rain according to the forecast.", speaker: "person_b" },
      { it: "Allora portiamo l'ombrello!", en: "Then let's bring an umbrella!", speaker: "person_a" },
    ],
    [
      { it: "c'è il sole", en: "it's sunny" },
      { it: "piove", en: "it's raining" },
      { it: "nuvoloso", en: "cloudy" },
    ],
    [
      {
        it: "Che tempo fa oggi?", en: "What's the weather like today?",
        options: [
          { it: "C'è il sole", en: "It's sunny", correct: true },
          { it: "Piove", en: "It's raining", correct: false },
          { it: "È nuvoloso", en: "It's cloudy", correct: false },
        ],
      },
      {
        it: "Che tempo farà domani?", en: "What will the weather be like tomorrow?",
        options: [
          { it: "Pioverà", en: "It will rain", correct: true },
          { it: "Ci sarà il sole", en: "It will be sunny", correct: false },
          { it: "Nevicherà", en: "It will snow", correct: false },
        ],
      },
    ],
    [
      { it: "il cielo", en: "sky", article: "il" },
      { it: "la previsione", en: "forecast", article: "la" },
    ],
    {
      question: "Guardi fuori e vedi che piove. Cosa dici?",
      questionTranslation: "You look outside and see it's raining. What do you say?",
      options: [
        { text: "Oggi piove. Prendo l'ombrello.", translation: "Today it's raining. I'll take the umbrella.", correct: true },
        { text: "Oggi c'è il sole.", translation: "Today it's sunny.", correct: false },
        { text: "Oggi fa molto caldo.", translation: "Today it's very hot.", correct: false },
      ],
    },
  );

  // ========================
  // SC7: Basic Needs — scenario="Basic Needs"
  // Module 25: Asking for Help
  // ========================

  // --- M25-1: Asking for Directions ---
  await addExperience(25, "Asking for Directions", 4, "Basic Needs",
    [
      { it: "Scusi, dov'è la stazione?", en: "Excuse me, where is the station?", speaker: "person_a" },
      { it: "La stazione? È dritto, poi a sinistra.", en: "The station? Straight ahead, then left.", speaker: "person_b" },
      { it: "A sinistra, ok. È lontano?", en: "To the left, ok. Is it far?", speaker: "person_a" },
      { it: "No, sono 5 minuti a piedi.", en: "No, it's 5 minutes on foot.", speaker: "person_b" },
      { it: "Grazie mille, buona giornata!", en: "Thanks very much, have a nice day!", speaker: "person_a" },
    ],
    [
      { it: "dov'è", en: "where is" },
      { it: "dritto", en: "straight ahead" },
      { it: "a sinistra", en: "to the left" },
    ],
    [
      {
        it: "Cosa cerca Persona A?", en: "What is Person A looking for?",
        options: [
          { it: "La stazione", en: "The station", correct: true },
          { it: "Il bagno", en: "The bathroom", correct: false },
          { it: "Il ristorante", en: "The restaurant", correct: false },
        ],
      },
      {
        it: "Quanto è lontana la stazione?", en: "How far is the station?",
        options: [
          { it: "5 minuti a piedi", en: "5 minutes on foot", correct: true },
          { it: "10 minuti in macchina", en: "10 minutes by car", correct: false },
          { it: "15 minuti", en: "15 minutes", correct: false },
        ],
      },
    ],
    [
      { it: "la stazione", en: "station", article: "la" },
      { it: "lontano", en: "far" },
    ],
    {
      question: "Sei in una città nuova e cerchi un museo. Cosa chiedi?",
      questionTranslation: "You're in a new city and looking for a museum. What do you ask?",
      options: [
        { text: "Scusi, dov'è il museo?", translation: "Excuse me, where is the museum?", correct: true },
        { text: "Scusi, quanto costa?", translation: "Excuse me, how much does it cost?", correct: false },
        { text: "Scusi, come stai?", translation: "Excuse me, how are you?", correct: false },
      ],
    },
  );

  // --- M25-2: Asking for Help ---
  await addExperience(25, "Asking for Help", 4, "Basic Needs",
    [
      { it: "Scusi, mi può aiutare?", en: "Excuse me, can you help me?", speaker: "person_a" },
      { it: "Certo, mi dica. In cosa posso aiutarla?", en: "Of course, tell me. How can I help you?", speaker: "person_b" },
      { it: "Non trovo l'uscita. È bloccata.", en: "I can't find the exit. It's blocked.", speaker: "person_a" },
      { it: "Venga con me. Le mostro la strada.", en: "Come with me. I'll show you the way.", speaker: "person_b" },
      { it: "Grazie, è molto gentile.", en: "Thank you, you're very kind.", speaker: "person_a" },
    ],
    [
      { it: "può aiutarmi", en: "can you help me (formal)" },
      { it: "mi può aiutare", en: "can you help me (formal)" },
      { it: "l'uscita", en: "exit", article: "l'" },
    ],
    [
      {
        it: "Cosa chiede Persona A?", en: "What does Person A ask?",
        options: [
          { it: "Aiuto per trovare l'uscita", en: "Help finding the exit", correct: true },
          { it: "Dov'è il bagno", en: "Where is the bathroom", correct: false },
          { it: "Quanto costa", en: "How much it costs", correct: false },
        ],
      },
      {
        it: "Come risponde Persona B?", en: "How does Person B respond?",
        options: [
          { it: "Offre di mostrare la strada", en: "Offers to show the way", correct: true },
          { it: "Dice di no", en: "Says no", correct: false },
          { it: "Dice che non lo sa", en: "Says he doesn't know", correct: false },
        ],
      },
    ],
    [
      { it: "gentile", en: "kind" },
      { it: "la strada", en: "way / street", article: "la" },
    ],
    {
      question: "Hai bisogno di aiuto per portare una borsa pesante. Cosa dici?",
      questionTranslation: "You need help carrying a heavy bag. What do you say?",
      options: [
        { text: "Scusi, mi può aiutare con questa borsa?", translation: "Excuse me, can you help me with this bag?", correct: true },
        { text: "Questa borsa è bella.", translation: "This bag is nice.", correct: false },
        { text: "Quanto costa questa borsa?", translation: "How much does this bag cost?", correct: false },
      ],
    },
  );

  // --- M25-3: Asking for Information ---
  await addExperience(25, "Asking for Information", 4, "Basic Needs",
    [
      { it: "Buongiorno, sa dirmi a che ora apre il museo?", en: "Good morning, can you tell me what time the museum opens?", speaker: "person_a" },
      { it: "Il museo apre alle 9:00 e chiude alle 18:00.", en: "The museum opens at 9:00 AM and closes at 6:00 PM.", speaker: "person_b" },
      { it: "Il biglietto quanto costa?", en: "How much does the ticket cost?", speaker: "person_a" },
      { it: "10 euro per gli adulti, 5 euro per i bambini.", en: "10 euros for adults, 5 euros for children.", speaker: "person_b" },
      { it: "Grazie delle informazioni!", en: "Thanks for the information!", speaker: "person_a" },
    ],
    [
      { it: "sa dirmi", en: "can you tell me (formal)" },
      { it: "apre", en: "it opens" },
      { it: "il biglietto", en: "ticket", article: "il" },
    ],
    [
      {
        it: "Cosa chiede Persona A?", en: "What does Person A ask?",
        options: [
          { it: "L'orario del museo e il costo", en: "The museum hours and cost", correct: true },
          { it: "Dov'è il museo", en: "Where the museum is", correct: false },
          { it: "Il nome del museo", en: "The name of the museum", correct: false },
        ],
      },
      {
        it: "Quanto costa il biglietto per un adulto?", en: "How much is the ticket for an adult?",
        options: [
          { it: "10 euro", en: "10 euros", correct: true },
          { it: "5 euro", en: "5 euros", correct: false },
          { it: "Gratis", en: "Free", correct: false },
        ],
      },
    ],
    [
      { it: "l'adulto", en: "adult", article: "l'" },
      { it: "il bambino", en: "child", article: "il" },
    ],
    {
      question: "Vuoi sapere quando chiude la farmacia. Cosa chiedi?",
      questionTranslation: "You want to know when the pharmacy closes. What do you ask?",
      options: [
        { text: "Sa dirmi a che ora chiude la farmacia?", translation: "Can you tell me what time the pharmacy closes?", correct: true },
        { text: "Dov'è la farmacia?", translation: "Where is the pharmacy?", correct: false },
        { text: "La farmacia è grande?", translation: "Is the pharmacy big?", correct: false },
      ],
    },
  );

  // --- M25-4: Using the Phone ---
  await addExperience(25, "Using the Phone", 4, "Basic Needs",
    [
      { it: "Scusi, posso usare il telefono? Il mio è scarico.", en: "Excuse me, can I use the phone? Mine is dead.", speaker: "person_a" },
      { it: "Certo, ecco il telefono. Prego.", en: "Of course, here's the phone. Go ahead.", speaker: "person_b" },
      { it: "Grazie. Devo fare una chiamata urgente.", en: "Thanks. I need to make an urgent call.", speaker: "person_a" },
      { it: "Faccia pure con calma.", en: "Take your time.", speaker: "person_b" },
      { it: "Sei gentilissimo, grazie ancora!", en: "You're very kind, thanks again!", speaker: "person_a" },
    ],
    [
      { it: "posso usare", en: "can I use" },
      { it: "il telefono", en: "telephone", article: "il" },
      { it: "la chiamata", en: "call", article: "la" },
    ],
    [
      {
        it: "Perché Persona A chiede il telefono?", en: "Why does Person A ask for the phone?",
        options: [
          { it: "Il suo telefono è scarico", en: "His phone is dead", correct: true },
          { it: "Ha perso il telefono", en: "He lost his phone", correct: false },
          { it: "Non ha un telefono", en: "He doesn't have a phone", correct: false },
        ],
      },
      {
        it: "Cosa deve fare Persona A?", en: "What does Person A need to do?",
        options: [
          { it: "Una chiamata urgente", en: "An urgent call", correct: true },
          { it: "Un messaggio", en: "A message", correct: false },
          { it: "Una foto", en: "A photo", correct: false },
        ],
      },
    ],
    [
      { it: "urgente", en: "urgent" },
      { it: "scaricare", en: "to run out of battery" },
    ],
    {
      question: "Il tuo telefono non funziona e devi chiamare. Cosa dici?",
      questionTranslation: "Your phone doesn't work and you need to call. What do you say?",
      options: [
        { text: "Posso usare il tuo telefono? Il mio non funziona.", translation: "Can I use your phone? Mine doesn't work.", correct: true },
        { text: "Il mio telefono è nuovo.", translation: "My phone is new.", correct: false },
        { text: "Che telefono hai?", translation: "What phone do you have?", correct: false },
      ],
    },
  );

  // --- M25-5: Asking for the Bathroom ---
  await addExperience(25, "Asking for the Bathroom", 4, "Basic Needs",
    [
      { it: "Scusi, dov'è il bagno?", en: "Excuse me, where is the bathroom?", speaker: "person_a" },
      { it: "Il bagno è in fondo al corridoio a destra.", en: "The bathroom is at the end of the hall on the right.", speaker: "person_b" },
      { it: "Grazie. È libero?", en: "Thanks. Is it free?", speaker: "person_a" },
      { it: "Sì, non c'è nessuno.", en: "Yes, there's no one.", speaker: "person_b" },
      { it: "Perfetto, grazie mille!", en: "Perfect, thanks very much!", speaker: "person_a" },
    ],
    [
      { it: "il bagno", en: "bathroom", article: "il" },
      { it: "il corridoio", en: "hallway", article: "il" },
      { it: "libero", en: "free / available" },
    ],
    [
      {
        it: "Dov'è il bagno?", en: "Where is the bathroom?",
        options: [
          { it: "In fondo al corridoio a destra", en: "At the end of the hall on the right", correct: true },
          { it: "A sinistra", en: "On the left", correct: false },
          { it: "Di fronte", en: "In front", correct: false },
        ],
      },
      {
        it: "Il bagno è libero?", en: "Is the bathroom free?",
        options: [
          { it: "Sì, non c'è nessuno", en: "Yes, there's no one", correct: true },
          { it: "No, è occupato", en: "No, it's occupied", correct: false },
          { it: "Non lo so", en: "I don't know", correct: false },
        ],
      },
    ],
    [
      { it: "chiedere", en: "to ask" },
      { it: "il permesso", en: "permission", article: "il" },
    ],
    {
      question: "Sei in un ristorante e hai bisogno del bagno. Cosa chiedi?",
      questionTranslation: "You're at a restaurant and need the bathroom. What do you ask?",
      options: [
        { text: "Scusi, dov'è il bagno?", translation: "Excuse me, where is the bathroom?", correct: true },
        { text: "Scusi, quanto costa?", translation: "Excuse me, how much does it cost?", correct: false },
        { text: "Scusi, che ora è?", translation: "Excuse me, what time is it?", correct: false },
      ],
    },
  );

  // ========================
  // Module 26: Emergencies
  // ========================

  // --- M26-1: Calling for Help ---
  await addExperience(26, "Calling for Help", 4, "Basic Needs",
    [
      { it: "Aiuto! Aiuto! Qualcuno mi aiuti!", en: "Help! Help! Someone help me!", speaker: "person_a" },
      { it: "Cosa succede? Sta bene?", en: "What's happening? Are you okay?", speaker: "person_b" },
      { it: "Mio marito è svenuto! Chiamate un medico!", en: "My husband fainted! Call a doctor!", speaker: "person_a" },
      { it: "Subito, chiamo il 118! Non si preoccupi.", en: "Right away, I'll call 118! Don't worry.", speaker: "person_b" },
      { it: "Grazie, grazie mille! Presto, per favore!", en: "Thank you, thank you so much! Quickly, please!", speaker: "person_a" },
    ],
    [
      { it: "aiuto", en: "help" },
      { it: "svenuto", en: "fainted" },
      { it: "il medico", en: "doctor", article: "il" },
    ],
    [
      {
        it: "Cosa grida Persona A?", en: "What does Person A shout?",
        options: [
          { it: "Aiuto! Chiamate un medico!", en: "Help! Call a doctor!", correct: true },
          { it: "Dov'è il bagno?", en: "Where is the bathroom?", correct: false },
          { it: "Quanto costa?", en: "How much does it cost?", correct: false },
        ],
      },
      {
        it: "Quale numero chiama Persona B?", en: "What number does Person B call?",
        options: [
          { it: "Il 118", en: "118 (emergency)", correct: true },
          { it: "Il 112", en: "112", correct: false },
          { it: "Il 113", en: "113", correct: false },
        ],
      },
    ],
    [
      { it: "l'emergenza", en: "emergency", article: "l'" },
      { it: "preoccuparsi", en: "to worry" },
    ],
    {
      question: "Vedi una persona che sta male per strada. Cosa fai?",
      questionTranslation: "You see a person who is unwell on the street. What do you do?",
      options: [
        { text: "Chiamo un'ambulanza! Aiuto!", translation: "I'll call an ambulance! Help!", correct: true },
        { text: "Faccio una foto.", translation: "I'll take a photo.", correct: false },
        { text: "Vado via.", translation: "I'll walk away.", correct: false },
      ],
    },
  );

  // --- M26-2: I'm Lost ---
  await addExperience(26, "I'm Lost", 4, "Basic Needs",
    [
      { it: "Mi scusi, mi sono perso. Dove sono?", en: "Excuse me, I'm lost. Where am I?", speaker: "person_a" },
      { it: "Lei è in via Roma, vicino al duomo.", en: "You are on Via Roma, near the cathedral.", speaker: "person_b" },
      { it: "Cerco l'hotel Milano. È qui vicino?", en: "I'm looking for Hotel Milano. Is it near here?", speaker: "person_a" },
      { it: "Sì, è a due isolati da qui, a destra.", en: "Yes, it's two blocks away from here, on the right.", speaker: "person_b" },
      { it: "Grazie! Ho camminato per un'ora senza trovare la strada!", en: "Thanks! I walked for an hour without finding the way!", speaker: "person_a" },
    ],
    [
      { it: "mi sono perso", en: "I'm lost (male)" },
      { it: "vicino", en: "near" },
      { it: "l'isolato", en: "block", article: "l'" },
    ],
    [
      {
        it: "Qual è il problema di Persona A?", en: "What is Person A's problem?",
        options: [
          { it: "Si è perso", en: "He's lost", correct: true },
          { it: "Ha fame", en: "He's hungry", correct: false },
          { it: "Ha sete", en: "He's thirsty", correct: false },
        ],
      },
      {
        it: "Dove si trova adesso?", en: "Where is he now?",
        options: [
          { it: "In via Roma, vicino al duomo", en: "On Via Roma, near the cathedral", correct: true },
          { it: "All'hotel Milano", en: "At Hotel Milano", correct: false },
          { it: "In stazione", en: "At the station", correct: false },
        ],
      },
    ],
    [
      { it: "l'hotel", en: "hotel", article: "l'" },
      { it: "camminare", en: "to walk" },
    ],
    {
      question: "Non trovi la strada per tornare a casa. Cosa dici?",
      questionTranslation: "You can't find the way back home. What do you say?",
      options: [
        { text: "Mi sono perso. Può aiutarmi?", translation: "I'm lost. Can you help me?", correct: true },
        { text: "Che ore sono?", translation: "What time is it?", correct: false },
        { text: "Quanto costa un taxi?", translation: "How much does a taxi cost?", correct: false },
      ],
    },
  );

  // --- M26-3: I Don't Feel Well ---
  await addExperience(26, "I Don't Feel Well", 4, "Basic Needs",
    [
      { it: "Non mi sento bene. Ho la nausea.", en: "I don't feel well. I feel nauseous.", speaker: "person_a" },
      { it: "Si sieda. Vuole dell'acqua?", en: "Sit down. Would you like some water?", speaker: "person_b" },
      { it: "Sì, grazie. Mi gira la testa.", en: "Yes, thanks. I feel dizzy.", speaker: "person_a" },
      { it: "Forse è il caldo. Si riposi un momento.", en: "Maybe it's the heat. Rest for a moment.", speaker: "person_b" },
      { it: "Sì, forse è meglio. Grazie dell'aiuto.", en: "Yes, that might be better. Thanks for your help.", speaker: "person_a" },
    ],
    [
      { it: "non mi sento bene", en: "I don't feel well" },
      { it: "la nausea", en: "nausea", article: "la" },
      { it: "riposarsi", en: "to rest" },
    ],
    [
      {
        it: "Qual è il problema di Persona A?", en: "What is Person A's problem?",
        options: [
          { it: "Ha nausea e giramento di testa", en: "He feels nauseous and dizzy", correct: true },
          { it: "Ha mal di denti", en: "He has a toothache", correct: false },
          { it: "Ha fame", en: "He's hungry", correct: false },
        ],
      },
      {
        it: "Cosa offre Persona B?", en: "What does Person B offer?",
        options: [
          { it: "Un bicchiere d'acqua", en: "A glass of water", correct: true },
          { it: "Una medicina", en: "Medicine", correct: false },
          { it: "Un tassì", en: "A taxi", correct: false },
        ],
      },
    ],
    [
      { it: "l'acqua", en: "water", article: "l'" },
      { it: "la testa", en: "head", article: "la" },
    ],
    {
      question: "Ti senti male durante una gita. Cosa dici ai tuoi amici?",
      questionTranslation: "You feel unwell during a trip. What do you say to your friends?",
      options: [
        { text: "Non mi sento bene. Ho bisogno di riposare.", translation: "I don't feel well. I need to rest.", correct: true },
        { text: "Voglio mangiare.", translation: "I want to eat.", correct: false },
        { text: "Andiamo a ballare.", translation: "Let's go dancing.", correct: false },
      ],
    },
  );

  // --- M26-4: I Need a Doctor ---
  await addExperience(26, "I Need a Doctor", 4, "Basic Needs",
    [
      { it: "Ho bisogno di un medico. Mio figlio ha la febbre alta.", en: "I need a doctor. My son has a high fever.", speaker: "person_a" },
      { it: "Dov'è suo figlio? Quanti anni ha?", en: "Where is your son? How old is he?", speaker: "person_b" },
      { it: "Ha 4 anni. È in macchina con mia moglie.", en: "He's 4 years old. He's in the car with my wife.", speaker: "person_a" },
      { it: "Chiamo subito un pediatra. Dov'è la macchina?", en: "I'll call a pediatrician right away. Where is the car?", speaker: "person_b" },
      { it: "Davanti alla farmacia. Presto, per favore!", en: "In front of the pharmacy. Quickly, please!", speaker: "person_a" },
    ],
    [
      { it: "ho bisogno di", en: "I need" },
      { it: "il pediatra", en: "pediatrician", article: "il" },
      { it: "la febbre alta", en: "high fever", article: "la" },
    ],
    [
      {
        it: "Perché Persona A ha bisogno di un medico?", en: "Why does Person A need a doctor?",
        options: [
          { it: "Suo figlio ha la febbre alta", en: "His son has a high fever", correct: true },
          { it: "Lui ha mal di testa", en: "He has a headache", correct: false },
          { it: "Sua moglie sta male", en: "His wife is sick", correct: false },
        ],
      },
      {
        it: "Quanti anni ha il bambino?", en: "How old is the child?",
        options: [
          { it: "4 anni", en: "4 years old", correct: true },
          { it: "2 anni", en: "2 years old", correct: false },
          { it: "6 anni", en: "6 years old", correct: false },
        ],
      },
    ],
    [
      { it: "il figlio", en: "son", article: "il" },
      { it: "la moglie", en: "wife", article: "la" },
    ],
    {
      question: "Hai un forte mal di pancia e hai bisogno di un dottore. Cosa dici?",
      questionTranslation: "You have a strong stomach ache and need a doctor. What do you say?",
      options: [
        { text: "Ho bisogno di un medico. Ho un forte mal di pancia.", translation: "I need a doctor. I have a strong stomach ache.", correct: true },
        { text: "Vado a mangiare.", translation: "I'll go eat.", correct: false },
        { text: "Prendo un caffè.", translation: "I'll have a coffee.", correct: false },
      ],
    },
  );

  // --- M26-5: Calling the Police ---
  await addExperience(26, "Calling the Police", 4, "Basic Needs",
    [
      { it: "Chiami la polizia! Hanno rubato la mia borsa!", en: "Call the police! They stole my bag!", speaker: "person_a" },
      { it: "Dov'è successo? Ha visto chi è stato?", en: "Where did it happen? Did you see who did it?", speaker: "person_b" },
      { it: "Al parco, cinque minuti fa. Un uomo con una giacca nera.", en: "At the park, five minutes ago. A man with a black jacket.", speaker: "person_a" },
      { it: "Chiamo subito il 112. Non si muova, arriva la polizia.", en: "I'll call 112 right away. Don't move, the police are coming.", speaker: "person_b" },
      { it: "Grazie. C'era il mio portafoglio dentro!", en: "Thanks. My wallet was inside!", speaker: "person_a" },
    ],
    [
      { it: "la polizia", en: "police", article: "la" },
      { it: "rubare", en: "to steal" },
      { it: "la giacca", en: "jacket", article: "la" },
    ],
    [
      {
        it: "Cosa è successo a Persona A?", en: "What happened to Person A?",
        options: [
          { it: "Hanno rubato la sua borsa", en: "They stole her bag", correct: true },
          { it: "Ha perso la borsa", en: "She lost her bag", correct: false },
          { it: "Ha comprato una borsa", en: "She bought a bag", correct: false },
        ],
      },
      {
        it: "Dov'è successo il furto?", en: "Where did the theft happen?",
        options: [
          { it: "Al parco", en: "At the park", correct: true },
          { it: "In stazione", en: "At the station", correct: false },
          { it: "Al supermercato", en: "At the supermarket", correct: false },
        ],
      },
    ],
    [
      { it: "il furto", en: "theft", article: "il" },
      { it: "il ladro", en: "thief", article: "il" },
    ],
    {
      question: "Vedi una persona che ruba in un negozio. Cosa fai?",
      questionTranslation: "You see someone stealing in a shop. What do you do?",
      options: [
        { text: "Chiamo la polizia! Un ladro!", translation: "I'll call the police! A thief!", correct: true },
        { text: "Fingo di non vedere.", translation: "I'll pretend not to see.", correct: false },
        { text: "Faccio una foto.", translation: "I'll take a photo.", correct: false },
      ],
    },
  );
}
