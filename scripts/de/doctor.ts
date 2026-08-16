import { addExperience } from "../seed-helpers";

export async function seedDoctor() {
  // Module 107: Making an Appointment (A2)
  await addExperience(107, "Calling the Doctor's Office", 1, "Doctor",
    [
      { target: "Praxis Dr. Müller, guten Tag. Was kann ich für Sie tun?", en: "Dr. Müller's practice, good day. How can I help you?" },
      { target: "Guten Tag, ich möchte einen Termin vereinbaren.", en: "Good day, I'd like to make an appointment." },
      { target: "Haben Sie Schmerzen oder ist es eine Vorsorgeuntersuchung?", en: "Do you have pain or is it a check-up?" },
      { target: "Es ist eine Vorsorgeuntersuchung.", en: "It's a check-up." },
      { target: "Dann nächste Woche Montag um 10:00 Uhr. Passt das?", en: "Then next Monday at 10:00 AM. Does that work?" },
    ],
    [{ target: "die Praxis", en: "medical practice", article: "die" }, { target: "der Termin", en: "appointment", article: "der" }, { target: "die Vorsorgeuntersuchung", en: "check-up", article: "die" }],
    [
      { target: "Warum ruft der Patient an?", en: "Why is the patient calling?", options: [{ target: "Er möchte einen Termin", en: "He wants an appointment", correct: true }, { target: "Er hat einen Notfall", en: "He has an emergency", correct: false }, { target: "Er möchte die Rechnung", en: "He wants the bill", correct: false }] },
      { target: "Wann ist der Termin?", en: "When is the appointment?", options: [{ target: "Morgen um 10:00 Uhr", en: "Tomorrow at 10 AM", correct: false }, { target: "Nächste Woche Montag um 10:00 Uhr", en: "Next Monday at 10 AM", correct: true }, { target: "Heute um 14:00 Uhr", en: "Today at 2 PM", correct: false }] },
    ],
    [{ target: "vereinbaren", en: "to arrange" }, { target: "der Schmerz", en: "pain" }],
    { question: "Der Termin passt. Was sagen Sie?", questionTranslation: "The time suits you. What do you say?", options: [
      { text: "Ja, dieser Termin passt mir gut.", translation: "Yes, this appointment suits me.", correct: true },
      { text: "Nein, ich habe keine Zeit.", translation: "No, I don't have time.", correct: false },
      { text: "Rufen Sie morgen nochmal an.", translation: "Call again tomorrow.", correct: false }
    ] },
  );

  await addExperience(107, "Confirming the Appointment", 1, "Doctor",
    [
      { target: "Ich habe einen Termin für heute um 15:30 Uhr bei Dr. Weber.", en: "I have an appointment today at 3:30 PM with Dr. Weber." },
      { target: "Moment bitte. Ja, ich sehe Sie in der Liste. Sind Sie neu hier?", en: "One moment please. Yes, I see you in the list. Are you new here?" },
      { target: "Ja, ich bin das erste Mal hier.", en: "Yes, this is my first time here." },
      { target: "Dann füllen Sie bitte dieses Formular aus.", en: "Then please fill out this form." },
      { target: "Muss ich meine Versicherungskarte abgeben?", en: "Do I need to hand in my insurance card?" },
    ],
    [{ target: "die Versicherungskarte", en: "insurance card", article: "die" }, { target: "ausfüllen", en: "to fill out" }],
    [
      { target: "Was muss der Patient beim ersten Besuch machen?", en: "What does the patient need to do on the first visit?", options: [{ target: "Ein Formular ausfüllen", en: "Fill out a form", correct: true }, { target: "Bar bezahlen", en: "Pay cash", correct: false }, { target: "Einen Test machen", en: "Take a test", correct: false }] },
      { target: "Was fragt der Patient nach der Versicherungskarte?", en: "What does the patient ask about the insurance card?", options: [{ target: "Ob er sie abgeben muss", en: "Whether he needs to hand it in", correct: true }, { target: "Ob sie kostenlos ist", en: "Whether it's free", correct: false }, { target: "Ob er sie verlängern kann", en: "Whether he can extend it", correct: false }] },
    ],
    [{ target: "das Formular", en: "form" }],
    { question: "Sie müssen den Termin verschieben. Was sagen Sie?", questionTranslation: "You need to reschedule. What do you say?", options: [
      { text: "Können wir den Termin auf nächste Woche verschieben?", translation: "Can we move the appointment to next week?", correct: true },
      { text: "Ich komme einfach nicht.", translation: "I just won't come.", correct: false },
      { text: "Sagen Sie mir einfach eine neue Zeit.", translation: "Just tell me a new time.", correct: false }
    ] },
  );

  await addExperience(107, "Rescheduling an Appointment", 1, "Doctor",
    [
      { target: "Ich muss meinen Termin leider verschieben.", en: "I unfortunately have to reschedule my appointment." },
      { target: "Kein Problem. Welcher Tag würde Ihnen passen?", en: "No problem. Which day would suit you?" },
      { target: "Geht es am Donnerstag um 11:00 Uhr?", en: "Is Thursday at 11:00 AM possible?" },
      { target: "Ja, da habe ich einen Termin frei. Ich trage Sie ein.", en: "Yes, I have a free slot then. I'll put you down." },
      { target: "Vielen Dank und entschuldigen Sie die kurzfristige Absage.", en: "Thank you very much and sorry for the last-minute cancellation." },
    ],
    [{ target: "verschieben", en: "to reschedule/postpone" }, { target: "die Absage", en: "cancellation", article: "die" }],
    [
      { target: "Warum ruft der Patient an?", en: "Why is the patient calling?", options: [{ target: "Er ist krank", en: "He is sick", correct: false }, { target: "Er muss seinen Termin verschieben", en: "He needs to reschedule", correct: true }, { target: "Er möchte die Rechnung bezahlen", en: "He wants to pay the bill", correct: false }] },
      { target: "Wann ist der neue Termin?", en: "When is the new appointment?", options: [{ target: "Am Dienstag um 11:00 Uhr", en: "On Tuesday at 11 AM", correct: false }, { target: "Am Donnerstag um 11:00 Uhr", en: "On Thursday at 11 AM", correct: true }, { target: "Am Freitag um 10:00 Uhr", en: "On Friday at 10 AM", correct: false }] },
    ],
    [{ target: "passen", en: "to suit" }, { target: "eintragen", en: "to enter/register" }],
    { question: "Sie haben starke Kopfschmerzen. Was sagen Sie?", questionTranslation: "You have a bad headache. What do you say?", options: [
      { text: "Ich habe starke Kopfschmerzen und brauche etwas dagegen.", translation: "I have a bad headache and need something for it.", correct: true },
      { text: "Ich möchte einen Kaffee.", translation: "I'd like a coffee.", correct: false },
      { text: "Können Sie mich operieren?", translation: "Can you operate on me?", correct: false }
    ] },
  );

  // Module 108: Basic Symptoms (A2)
  await addExperience(108, "Describing a Headache", 1, "Doctor",
    [
      { target: "Guten Tag, Herr Doktor. Mir tut der Kopf weh.", en: "Good day, doctor. I have a headache." },
      { target: "Seit wann haben Sie die Kopfschmerzen?", en: "Since when have you had the headache?" },
      { target: "Seit gestern Abend. Es hilft nichts dagegen.", en: "Since yesterday evening. Nothing helps." },
      { target: "Haben Sie Fieber oder andere Symptome?", en: "Do you have a fever or other symptoms?" },
      { target: "Nein, nur die Kopfschmerzen. Aber sie sind sehr stark.", en: "No, just the headache. But it's very strong." },
    ],
    [{ target: "der Kopfschmerz", en: "headache", article: "der" }, { target: "das Fieber", en: "fever", article: "das" }, { target: "das Symptom", en: "symptom", article: "das" }],
    [
      { target: "Seit wann hat der Patient Kopfschmerzen?", en: "Since when does the patient have a headache?", options: [{ target: "Seit heute Morgen", en: "Since this morning", correct: false }, { target: "Seit gestern Abend", en: "Since yesterday evening", correct: true }, { target: "Seit einer Woche", en: "Since a week", correct: false }] },
      { target: "Hat der Patient noch andere Symptome?", en: "Does the patient have any other symptoms?", options: [{ target: "Ja, Fieber", en: "Yes, fever", correct: false }, { target: "Ja, Husten", en: "Yes, cough", correct: false }, { target: "Nein, nur Kopfschmerzen", en: "No, just headache", correct: true }] },
    ],
    [{ target: "weh tun", en: "to hurt" }, { target: "stark", en: "strong/severe" }],
    { question: "Sie haben eine Erkältung. Was sagen Sie?", questionTranslation: "You have a cold. What do you say?", options: [
      { text: "Ich habe Husten, Schnupfen und Halsschmerzen.", translation: "I have a cough, runny nose, and sore throat.", correct: true },
      { text: "Ich habe mir den Fuß gebrochen.", translation: "I broke my foot.", correct: false },
      { text: "Ich brauche eine neue Brille.", translation: "I need new glasses.", correct: false }
    ] },
    undefined,
    [
      { text: "der Kopfschmerz", translation: "headache", correctValue: "headache" },
      { text: "das Fieber", translation: "fever", correctValue: "fever" },
      { text: "weh tun", translation: "to hurt", correctValue: "hurt" }
    ],
  );

  await addExperience(108, "Telling the Doctor About a Cold", 1, "Doctor",
    [
      { target: "Ich habe mich erkältet. Ich huste und habe Schnupfen.", en: "I've caught a cold. I'm coughing and have a runny nose." },
      { target: "Haben Sie Ihre Temperatur gemessen?", en: "Have you taken your temperature?" },
      { target: "Ja, 38,5 Grad.", en: "Yes, 38.5 degrees." },
      { target: "Das ist leichtes Fieber. Ich verschreibe Ihnen einen Hustensaft.", en: "That's a mild fever. I'll prescribe you a cough syrup." },
      { target: "Soll ich im Bett bleiben?", en: "Should I stay in bed?" },
    ],
    [{ target: "sich erkälten", en: "to catch a cold" }, { target: "der Hustensaft", en: "cough syrup", article: "der" }, { target: "der Schnupfen", en: "runny nose", article: "der" }],
    [
      { target: "Was hat der Patient?", en: "What does the patient have?", options: [{ target: "Eine Erkältung", en: "A cold", correct: true }, { target: "Eine Allergie", en: "An allergy", correct: false }, { target: "Eine Verletzung", en: "An injury", correct: false }] },
      { target: "Welche Temperatur hat der Patient?", en: "What temperature does the patient have?", options: [{ target: "37,5 Grad", en: "37.5 degrees", correct: false }, { target: "38,5 Grad", en: "38.5 degrees", correct: true }, { target: "39,5 Grad", en: "39.5 degrees", correct: false }] },
    ],
    [{ target: "messen", en: "to measure" }, { target: "verschreiben", en: "to prescribe" }],
    { question: "Der Arzt fragt nach Allergien. Was sagen Sie?", questionTranslation: "The doctor asks about allergies. What do you say?", options: [
      { text: "Ich bin allergisch gegen Penicillin.", translation: "I'm allergic to penicillin.", correct: true },
      { text: "Ich mag keine Spritzen.", translation: "I don't like injections.", correct: false },
      { text: "Mir ist kalt.", translation: "I'm cold.", correct: false }
    ] },
  );

  await addExperience(108, "Explaining an Allergy", 1, "Doctor",
    [
      { target: "Ich bekomme im Frühling immer tränende Augen.", en: "I always get watery eyes in spring." },
      { target: "Das klingt nach einer Allergie. Testen wir das.", en: "That sounds like an allergy. Let's test it." },
      { target: "Muss ich dafür etwas vorbereiten?", en: "Do I need to prepare anything for that?" },
      { target: "Nein, ein einfacher Bluttest reicht aus.", en: "No, a simple blood test is enough." },
      { target: "Und was kann ich gegen die Symptome tun?", en: "And what can I do about the symptoms?" },
    ],
    [{ target: "die Allergie", en: "allergy", article: "die" }, { target: "tränende Augen", en: "watery eyes" }, { target: "der Bluttest", en: "blood test", article: "der" }],
    [
      { target: "Wann bekommt der Patient tränende Augen?", en: "When does the patient get watery eyes?", options: [{ target: "Im Herbst", en: "In autumn", correct: false }, { target: "Im Frühling", en: "In spring", correct: true }, { target: "Im Winter", en: "In winter", correct: false }] },
      { target: "Welcher Test wird gemacht?", en: "Which test is done?", options: [{ target: "Ein Allergietest auf der Haut", en: "A skin allergy test", correct: false }, { target: "Ein einfacher Bluttest", en: "A simple blood test", correct: true }, { target: "Ein Röntgen", en: "An X-ray", correct: false }] },
    ],
    [{ target: "bekommen", en: "to get" }, { target: "ausreichen", en: "to be enough" }],
    { question: "Die Symptome sind schlimmer. Was sagen Sie?", questionTranslation: "The symptoms got worse. What do you say?", options: [
      { text: "Die Schmerzen sind stärker geworden und ich habe Übelkeit.", translation: "The pain is worse and I feel nauseous.", correct: true },
      { text: "Ich möchte den Termin verschieben.", translation: "I'd like to reschedule.", correct: false },
      { text: "Können Sie mich nach Hause fahren?", translation: "Can you drive me home?", correct: false }
    ] },
  );

  // Module 109: Describing Symptoms (B1)
  await addExperience(109, "Describing Severe Symptoms", 2, "Doctor",
    [
      { target: "Ich habe seit drei Tagen starke Bauchschmerzen.", en: "I've had severe stomach pain for three days." },
      { target: "Wo genau tut es weh? Können Sie zeigen?", en: "Where exactly does it hurt? Can you show me?" },
      { target: "Hier, auf der rechten Seite. Es fühlt sich stechend an.", en: "Here, on the right side. It feels stabbing." },
      { target: "Haben Sie Übelkeit oder Durchfall?", en: "Do you have nausea or diarrhea?" },
      { target: "Ja, ich musste mich gestern übergeben.", en: "Yes, I vomited yesterday." },
    ],
    [{ target: "der Bauchschmerz", en: "stomach pain", article: "der" }, { target: "die Übelkeit", en: "nausea", article: "die" }, { target: "stechend", en: "stabbing" }],
    [
      { target: "Wie lange hat der Patient Schmerzen?", en: "How long has the patient had pain?", options: [{ target: "Seit einem Tag", en: "For one day", correct: false }, { target: "Seit drei Tagen", en: "For three days", correct: true }, { target: "Seit einer Woche", en: "For a week", correct: false }] },
      { target: "Welche zusätzlichen Symptome hat der Patient?", en: "What additional symptoms does the patient have?", options: [{ target: "Husten und Fieber", en: "Cough and fever", correct: false }, { target: "Übelkeit und Erbrechen", en: "Nausea and vomiting", correct: true }, { target: "Kopfschmerzen und Schwindel", en: "Headache and dizziness", correct: false }] },
    ],
    [{ target: "das Erbrechen", en: "vomiting" }, { target: "die Seite", en: "side" }],
    { question: "Der Hausarzt kann nicht helfen. Was bitten Sie?", questionTranslation: "The GP can't help. What do you ask?", options: [
      { text: "Können Sie mir eine Überweisung zum Facharzt geben?", translation: "Can you give me a referral to a specialist?", correct: true },
      { text: "Kann ich bitte gehen?", translation: "Can I please leave?", correct: false },
      { text: "Haben Sie ein besseres Medikament?", translation: "Do you have a better medication?", correct: false }
    ] },
    undefined,
    [
      { text: "die Übelkeit", translation: "nausea", correctValue: "nausea" },
      { text: "stechend", translation: "stabbing", correctValue: "stabbing" },
      { text: "der Durchfall", translation: "diarrhea", correctValue: "diarrhea" }
    ],
  );

  await addExperience(109, "Getting a Referral to a Specialist", 2, "Doctor",
    [
      { target: "Ich glaube, ich brauche eine Überweisung zum Hautarzt.", en: "I think I need a referral to a dermatologist." },
      { target: "Was haben Sie für Beschwerden?", en: "What complaints do you have?" },
      { target: "Ich habe einen Ausschlag am Arm, der nicht weggeht.", en: "I have a rash on my arm that won't go away." },
      { target: "Das sollte ein Facharzt untersuchen. Ich schreibe Ihnen die Überweisung.", en: "A specialist should examine that. I'll write you the referral." },
      { target: "Wie lange dauert es, bis ich einen Termin bekomme?", en: "How long does it take to get an appointment?" },
    ],
    [{ target: "die Überweisung", en: "referral", article: "die" }, { target: "der Hautarzt", en: "dermatologist", article: "der" }, { target: "der Ausschlag", en: "rash", article: "der" }],
    [
      { target: "Welche Art von Arzt braucht der Patient?", en: "What type of doctor does the patient need?", options: [{ target: "Einen Augenarzt", en: "An eye doctor", correct: false }, { target: "Einen Hautarzt", en: "A dermatologist", correct: true }, { target: "Einen Zahnarzt", en: "A dentist", correct: false }] },
      { target: "Was hat der Patient am Arm?", en: "What does the patient have on his arm?", options: [{ target: "Eine Schwellung", en: "A swelling", correct: false }, { target: "Einen Ausschlag", en: "A rash", correct: true }, { target: "Eine Verletzung", en: "An injury", correct: false }] },
    ],
    [{ target: "untersuchen", en: "to examine" }, { target: "der Facharzt", en: "specialist" }],
    { question: "Der Arzt stellt eine Diagnose. Was machen Sie?", questionTranslation: "The doctor gives a diagnosis. What do you do?", options: [
      { text: "Fragen Sie nach den nächsten Schritten und der Behandlung.", translation: "Ask about next steps and treatment.", correct: true },
      { text: "Sagen Sie, dass Sie alles schon wissen.", translation: "Say you already know everything.", correct: false },
      { text: "Gehen Sie einfach nach Hause.", translation: "Just go home.", correct: false }
    ] },
  );

  await addExperience(109, "Understanding a Diagnosis", 2, "Doctor",
    [
      { target: "Die Blutwerte zeigen, dass Sie eine Infektion haben.", en: "The blood test results show you have an infection." },
      { target: "Ist es etwas Ernstes?", en: "Is it something serious?" },
      { target: "Nein, es ist eine harmlose bakterielle Infektion.", en: "No, it's a harmless bacterial infection." },
      { target: "Ich verschreibe Ihnen Antibiotika für sieben Tage.", en: "I'll prescribe you antibiotics for seven days." },
      { target: "Nehmen Sie die Tabletten dreimal täglich nach dem Essen.", en: "Take the tablets three times a day after meals." },
    ],
    [{ target: "die Infektion", en: "infection", article: "die" }, { target: "das Antibiotikum", en: "antibiotic", article: "das" }, { target: "die Tablette", en: "tablet", article: "die" }],
    [
      { target: "Was zeigen die Blutwerte?", en: "What do the blood test results show?", options: [{ target: "Eine Allergie", en: "An allergy", correct: false }, { target: "Eine Infektion", en: "An infection", correct: true }, { target: "Einen Vitaminmangel", en: "A vitamin deficiency", correct: false }] },
      { target: "Wie oft soll der Patient die Tabletten nehmen?", en: "How often should the patient take the tablets?", options: [{ target: "Einmal täglich", en: "Once daily", correct: false }, { target: "Zweimal täglich", en: "Twice daily", correct: false }, { target: "Dreimal täglich", en: "Three times daily", correct: true }] },
    ],
    [{ target: "die Blutwerte", en: "blood test results" }, { target: "harmlos", en: "harmless" }],
    { question: "Sie sind in der Apotheke. Was fragen Sie?", questionTranslation: "You're at the pharmacy. What do you ask?", options: [
      { text: "Haben Sie etwas gegen Husten?", translation: "Do you have something for a cough?", correct: true },
      { text: "Wo ist die nächste Arztpraxis?", translation: "Where is the nearest doctor?", correct: false },
      { text: "Kann ich hier essen?", translation: "Can I eat here?", correct: false }
    ] },
  );

  // Module 110: At the Pharmacy (B1)
  await addExperience(110, "Asking the Pharmacist for Medicine", 2, "Doctor",
    [
      { target: "Guten Tag, ich habe ein Rezept vom Arzt.", en: "Good day, I have a prescription from the doctor." },
      { target: "Gerne. Bitte legen Sie Ihre Versicherungskarte dazu.", en: "Certainly. Please put your insurance card with it." },
      { target: "Gibt es das Medikament auch rezeptfrei?", en: "Is this medication also available over the counter?" },
      { target: "Nein, dieses Medikament ist verschreibungspflichtig.", en: "No, this medication is prescription-only." },
      { target: "Alles klar. Wie viel muss ich bezahlen?", en: "Alright. How much do I need to pay?" },
    ],
    [{ target: "das Rezept", en: "prescription", article: "das" }, { target: "das Medikament", en: "medication", article: "das" }, { target: "verschreibungspflichtig", en: "prescription-only" }],
    [
      { target: "Was hat der Patient vom Arzt bekommen?", en: "What did the patient get from the doctor?", options: [{ target: "Ein Rezept", en: "A prescription", correct: true }, { target: "Eine Überweisung", en: "A referral", correct: false }, { target: "Eine Impfung", en: "A vaccination", correct: false }] },
      { target: "Ist das Medikament rezeptfrei?", en: "Is the medication over-the-counter?", options: [{ target: "Ja", en: "Yes", correct: false }, { target: "Nein, es ist verschreibungspflichtig", en: "No, it's prescription-only", correct: true }] },
    ],
    [{ target: "rezeptfrei", en: "over-the-counter" }, { target: "die Versicherungskarte", en: "insurance card" }],
    { question: "Sie brauchen Schmerzmittel. Was sagen Sie?", questionTranslation: "You need painkillers. What do you say?", options: [
      { text: "Ich hätte gern ein Schmerzmittel gegen Kopfschmerzen.", translation: "I'd like a painkiller for headaches.", correct: true },
      { text: "Ich möchte ein Bier.", translation: "I'd like a beer.", correct: false },
      { text: "Haben Sie Zeitungen?", translation: "Do you have newspapers?", correct: false }
    ] },
  );

  await addExperience(110, "Buying Painkillers", 2, "Doctor",
    [
      { target: "Ich brauche etwas gegen Kopfschmerzen. Haben Sie eine Empfehlung?", en: "I need something for headaches. Do you have a recommendation?" },
      { target: "Ich empfehle Ibuprofen 400. Das hilft schnell.", en: "I recommend Ibuprofen 400. It works quickly." },
      { target: "Gibt es Nebenwirkungen?", en: "Are there side effects?" },
      { target: "Nehmen Sie es nicht auf leeren Magen. Und trinken Sie viel Wasser.", en: "Don't take it on an empty stomach. And drink plenty of water." },
      { target: "Danke für den guten Rat!", en: "Thanks for the good advice!" },
    ],
    [{ target: "die Empfehlung", en: "recommendation", article: "die" }, { target: "die Nebenwirkung", en: "side effect", article: "die" }],
    [
      { target: "Welches Medikament empfiehlt die Apothekerin?", en: "Which medication does the pharmacist recommend?", options: [{ target: "Aspirin 500", en: "Aspirin 500", correct: false }, { target: "Ibuprofen 400", en: "Ibuprofen 400", correct: true }, { target: "Paracetamol 500", en: "Paracetamol 500", correct: false }] },
      { target: "Was soll der Patient vermeiden?", en: "What should the patient avoid?", options: [{ target: "Viel Wasser trinken", en: "Drinking plenty of water", correct: false }, { target: "Das Medikament auf leeren Magen nehmen", en: "Taking it on an empty stomach", correct: true }, { target: "Das Medikament mit Essen nehmen", en: "Taking it with food", correct: false }] },
    ],
    [{ target: "die Apothekerin", en: "pharmacist (female)" }, { target: "der Rat", en: "advice" }],
    { question: "Der Apotheker gibt Ihnen Medizin. Was fragen Sie?", questionTranslation: "The pharmacist gives you medicine. What do you ask?", options: [
      { text: "Wie oft muss ich das Medikament einnehmen?", translation: "How often do I take the medication?", correct: true },
      { text: "Schmeckt das gut?", translation: "Does it taste good?", correct: false },
      { text: "Kann ich das zurückgeben?", translation: "Can I return it?", correct: false }
    ] },
  );

  await addExperience(110, "Understanding the Dosage", 2, "Doctor",
    [
      { target: "Wie oft soll ich den Hustensaft einnehmen?", en: "How often should I take the cough syrup?" },
      { target: "Nehmen Sie dreimal täglich 5 Milliliter.", en: "Take 5 milliliters three times a day." },
      { target: "Vor oder nach dem Essen?", en: "Before or after meals?" },
      { target: "Am besten nach dem Essen. Schütteln Sie die Flasche vor Gebrauch.", en: "Best after meals. Shake the bottle before use." },
      { target: "Muss ich die ganze Flasche leer machen?", en: "Do I need to finish the whole bottle?" },
    ],
    [{ target: "der Hustensaft", en: "cough syrup", article: "der" }, { target: "das Milliliter", en: "milliliter" }, { target: "der Gebrauch", en: "use" }],
    [
      { target: "Wie viel Hustensaft soll der Patient nehmen?", en: "How much cough syrup should the patient take?", options: [{ target: "10 Milliliter", en: "10 ml", correct: false }, { target: "5 Milliliter", en: "5 ml", correct: true }, { target: "15 Milliliter", en: "15 ml", correct: false }] },
      { target: "Was soll der Patient vor Gebrauch machen?", en: "What should the patient do before use?", options: [{ target: "Die Flasche erwärmen", en: "Warm the bottle", correct: false }, { target: "Die Flasche schütteln", en: "Shake the bottle", correct: true }, { target: "Die Flasche öffnen und riechen", en: "Open and smell the bottle", correct: false }] },
    ],
    [{ target: "einnehmen", en: "to take (medication)" }, { target: "schütteln", en: "to shake" }],
    { question: "Der Arzt fragt nach Ihrer Familie. Was sagen Sie?", questionTranslation: "The doctor asks about your family. What do you say?", options: [
      { text: "Mein Vater hatte Bluthochdruck.", translation: "My father had high blood pressure.", correct: true },
      { text: "Meine Familie wohnt in Berlin.", translation: "My family lives in Berlin.", correct: false },
      { text: "Ich habe keine Familie.", translation: "I don't have a family.", correct: false }
    ] },
    undefined,
    [
      { text: "der Hustensaft", translation: "cough syrup", correctValue: "syrup" },
      { text: "einnehmen", translation: "to take", correctValue: "take" },
      { text: "schütteln", translation: "to shake", correctValue: "shake" }
    ],
  );

  // Module 111: Medical History (B2)
  await addExperience(111, "Discussing Family Medical History", 3, "Doctor",
    [
      { target: "Gibt es in Ihrer Familie erbliche Krankheiten?", en: "Are there hereditary diseases in your family?" },
      { target: "Mein Vater hatte Diabetes und meine Mutter hatte Bluthochdruck.", en: "My father had diabetes and my mother had high blood pressure." },
      { target: "Dann sollten wir regelmäßig Ihre Blutwerte kontrollieren.", en: "Then we should check your blood values regularly." },
      { target: "Wie oft empfehlen Sie eine Vorsorgeuntersuchung?", en: "How often do you recommend a check-up?" },
      { target: "Einmal pro Jahr ist ausreichend, wenn Sie beschwerdefrei sind.", en: "Once a year is sufficient if you are symptom-free." },
    ],
    [{ target: "erblich", en: "hereditary" }, { target: "der Bluthochdruck", en: "high blood pressure" }, { target: "die Vorsorgeuntersuchung", en: "preventive check-up" }],
    [
      { target: "Welche Krankheiten hatten die Eltern des Patienten?", en: "What diseases did the patient's parents have?", options: [{ target: "Krebs und Asthma", en: "Cancer and asthma", correct: false }, { target: "Diabetes und Bluthochdruck", en: "Diabetes and high blood pressure", correct: true }, { target: "Herzinfarkt und Schlaganfall", en: "Heart attack and stroke", correct: false }] },
      { target: "Wie oft sollte der Patient zur Vorsorge?", en: "How often should the patient go for check-ups?", options: [{ target: "Alle sechs Monate", en: "Every six months", correct: false }, { target: "Einmal pro Jahr", en: "Once a year", correct: true }, { target: "Alle zwei Jahre", en: "Every two years", correct: false }] },
    ],
    [{ target: "kontrollieren", en: "to check" }, { target: "ausreichend", en: "sufficient" }],
    { question: "Sie bereiten sich auf eine Operation vor. Wen fragen Sie?", questionTranslation: "You're preparing for surgery. Who do you ask?", options: [
      { text: "Ich möchte mit dem Chirurgen über die Risiken sprechen.", translation: "I'd like to discuss the risks with the surgeon.", correct: true },
      { text: "Ich möchte etwas essen.", translation: "I'd like to eat something.", correct: false },
      { text: "Wann kann ich nach Hause?", translation: "When can I go home?", correct: false }
    ] },
  );

  await addExperience(111, "Preparing for Surgery Consultation", 3, "Doctor",
    [
      { target: "Wir haben die Ergebnisse der Magnetresonanztomographie erhalten.", en: "We have received the MRI results." },
      { target: "Das Meniskusriss erfordert einen arthroskopischen Eingriff.", en: "The meniscus tear requires an arthroscopic procedure." },
      { target: "Wie lange dauert die Operation und der Heilungsprozess?", en: "How long does the surgery and recovery process take?" },
      { target: "Der Eingriff dauert etwa 45 Minuten. Sie können am selben Tag nach Hause.", en: "The procedure takes about 45 minutes. You can go home the same day." },
      { target: "In sechs Wochen sollten Sie wieder normal gehen können.", en: "In six weeks you should be able to walk normally again." },
    ],
    [{ target: "der Eingriff", en: "procedure/surgery", article: "der" }, { target: "der Heilungsprozess", en: "recovery process", article: "der" }],
    [
      { target: "Welche Untersuchung wurde gemacht?", en: "Which examination was done?", options: [{ target: "Röntgen", en: "X-ray", correct: false }, { target: "Magnetresonanztomographie", en: "MRI", correct: true }, { target: "Ultraschall", en: "Ultrasound", correct: false }] },
      { target: "Wie lange dauert der Eingriff?", en: "How long does the procedure take?", options: [{ target: "30 Minuten", en: "30 minutes", correct: false }, { target: "45 Minuten", en: "45 minutes", correct: true }, { target: "60 Minuten", en: "60 minutes", correct: false }] },
    ],
    [{ target: "der Meniskusriss", en: "meniscus tear" }, { target: "arthroskopisch", en: "arthroscopic" }],
    { question: "Sie sind unsicher über die Diagnose. Was machen Sie?", questionTranslation: "You're unsure about the diagnosis. What do you do?", options: [
      { text: "Ich möchte eine Zweitmeinung einholen.", translation: "I'd like a second opinion.", correct: true },
      { text: "Ich akzeptiere die Diagnose nicht.", translation: "I don't accept the diagnosis.", correct: false },
      { text: "Können Sie mich operieren?", translation: "Can you operate on me?", correct: false }
    ] },
  );

  // Module 112: Specialist Visit (B2)
  await addExperience(112, "Requesting a Second Opinion", 3, "Doctor",
    [
      { target: "Ich würde gerne eine Zweitmeinung einholen.", en: "I would like to get a second opinion." },
      { target: "Das ist absolut verständlich. Ich kann Ihnen eine Kollegin empfehlen.", en: "That's completely understandable. I can recommend a colleague." },
      { target: "Können Sie mir die Befunde für den Termin mitgeben?", en: "Can you give me the findings for the appointment?" },
      { target: "Selbstverständlich. Ich lasse Ihnen alle Unterlagen kopieren.", en: "Of course. I'll have all the documents copied for you." },
      { target: "Vielen Dank für Ihr Verständnis.", en: "Thank you for your understanding." },
    ],
    [{ target: "die Zweitmeinung", en: "second opinion", article: "die" }, { target: "der Befund", en: "medical finding", article: "der" }],
    [
      { target: "Was möchte der Patient?", en: "What does the patient want?", options: [{ target: "Eine Überweisung", en: "A referral", correct: false }, { target: "Eine Zweitmeinung", en: "A second opinion", correct: true }, { target: "Ein Rezept", en: "A prescription", correct: false }] },
      { target: "Was bietet der Arzt dem Patienten an?", en: "What does the doctor offer the patient?", options: [{ target: "Die Befunde zu kopieren", en: "To copy the findings", correct: true }, { target: "Einen Termin nächste Woche", en: "An appointment next week", correct: false }, { target: "Ein kostenloses Rezept", en: "A free prescription", correct: false }] },
    ],
    [{ target: "einholen", en: "to obtain" }, { target: "mitgeben", en: "to give along" }],
    { question: "Das Vorstellungsgespräch beginnt. Was sagen Sie?", questionTranslation: "The interview starts. What do you say?", options: [
      { text: "Guten Tag, mein Name ist ... und ich freue mich auf das Gespräch.", translation: "Hello, my name is ... and I look forward to this.", correct: true },
      { text: "Guten Tag, ich möchte ein Ticket kaufen.", translation: "Hello, I'd like to buy a ticket.", correct: false },
      { text: "Wo ist die Toilette?", translation: "Where is the restroom?", correct: false }
    ] },
    undefined,
    [
      { text: "die Zweitmeinung", translation: "second opinion", correctValue: "opinion" },
      { text: "der Befund", translation: "medical finding", correctValue: "finding" },
      { text: "die Unterlagen", translation: "documents", correctValue: "documents" }
    ],
  );
}