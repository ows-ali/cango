import { addExperience } from "../seed-helpers";

export async function seedEmergency() {
  // Module 145: Calling for Help (A2)
  await addExperience(145, "Calling Emergency Services", 1, "Emergency",
    [
      { target: "Ich muss einen Notruf absetzen! Es ist ein Notfall!", en: "I need to make an emergency call! It's an emergency!", speaker: "Anrufer" },
      { target: "Welche Nummer wähle ich in Deutschland?", en: "Which number do I dial in Germany?", speaker: "Anrufer" },
      { target: "Wählen Sie die 112. Das ist die einheitliche Notrufnummer.", en: "Dial 112. That's the universal emergency number.", speaker: "Notrufzentrale" },
      { target: "Ich brauche einen Krankenwagen, schnell! Mein Freund hat sich verletzt.", en: "I need an ambulance, quickly! My friend got hurt.", speaker: "Anrufer" },
      { target: "Bleiben Sie ruhig, der Krankenwagen ist schon unterwegs. Geben Sie mir die Adresse.", en: "Stay calm, the ambulance is already on its way. Give me the address.", speaker: "Notrufzentrale" },
    ],
    [{ target: "der Notruf", en: "emergency call", article: "der" }, { target: "der Krankenwagen", en: "ambulance", article: "der", plural: "die Krankenwagen" }, { target: "wählen", en: "to dial" }],
    [
      { target: "Was muss der Anrufer machen?", en: "What does the caller need to do?", options: [{ target: "Einen Notruf absetzen", en: "Make an emergency call", correct: true }, { target: "Ein Taxi rufen", en: "Call a taxi", correct: false }, { target: "Die Polizei anrufen", en: "Call the police", correct: false }] },
      { target: "Welche Nummer soll der Anrufer wählen?", en: "Which number should the caller dial?", options: [{ target: "110", en: "110", correct: false }, { target: "112", en: "112", correct: true }, { target: "118", en: "118", correct: false }] },
    ],
    [{ target: "der Notfall", en: "emergency" }, { target: "unterwegs", en: "on the way" }],
    { question: "Was sagen Sie in einem Notfall?", questionTranslation: "What do you say in an emergency?", options: [
      { text: "Ich muss einen Notruf absetzen! Es ist ein Notfall!", translation: "I need to make an emergency call! It's an emergency!", correct: true },
      { text: "Können Sie mir ein Hotel empfehlen?", translation: "Can you recommend a hotel?", correct: false },
      { text: "Ich möchte ein Ticket kaufen.", translation: "I'd like to buy a ticket.", correct: false }
    ] },
  );

  await addExperience(145, "Reporting an Accident", 1, "Emergency",
    [
      { target: "Es gab einen Unfall auf der Kreuzung. Bitte kommen Sie schnell!", en: "There's been an accident at the intersection. Please come quickly!", speaker: "Anrufer" },
      { target: "Sind Sie verletzt?", en: "Are you injured?", speaker: "Notrufzentrale" },
      { target: "Nein, mir geht es gut, aber ein anderer Fahrer blutet stark.", en: "No, I'm fine, but another driver is bleeding heavily.", speaker: "Anrufer" },
      { target: "Bitte kommen Sie schnell! Ich glaube, er braucht sofort Hilfe.", en: "Please come quickly! I think he needs help right away.", speaker: "Anrufer" },
      { target: "Geben Sie mir bitte die genaue Adresse. Ich schicke sofort einen Rettungswagen.", en: "Please give me the exact address. I'll send an ambulance immediately.", speaker: "Notrufzentrale" },
    ],
    [{ target: "der Unfall", en: "accident", article: "der", plural: "die Unfälle" }, { target: "bluten", en: "to bleed" }, { target: "der Rettungswagen", en: "ambulance", article: "der", plural: "die Rettungswagen" }],
    [
      { target: "Was ist passiert?", en: "What happened?", options: [{ target: "Ein Unfall auf der Kreuzung", en: "An accident at the intersection", correct: true }, { target: "Ein Brand im Haus", en: "A fire in the building", correct: false }, { target: "Ein Diebstahl", en: "A theft", correct: false }] },
      { target: "Wie ist der andere Fahrer?", en: "How is the other driver?", options: [{ target: "Ihm geht es gut", en: "He is fine", correct: false }, { target: "Er blutet stark", en: "He is bleeding heavily", correct: true }, { target: "Er ist ohnmächtig", en: "He is unconscious", correct: false }] },
    ],
    [{ target: "schnell", en: "quickly" }, { target: "die Kreuzung", en: "intersection" }],
    { question: "Was sagen Sie bei einem Unfall?", questionTranslation: "What do you say in an accident?", options: [
      { text: "Es gab einen Unfall auf der Kreuzung. Bitte kommen Sie schnell!", translation: "There's been an accident at the intersection. Please come quickly!", correct: true },
      { text: "Ich möchte einen Termin beim Arzt.", translation: "I'd like an appointment with the doctor.", correct: false },
      { text: "Wo ist die nächste Tankstelle?", translation: "Where is the nearest gas station?", correct: false }
    ] },
  );

  await addExperience(145, "Describing What Happened", 1, "Emergency",
    [
      { target: "Ein Mann liegt auf dem Boden. Ich glaube, er ist ohnmächtig.", en: "A man is lying on the ground. I think he's unconscious.", speaker: "Anrufer" },
      { target: "Atmet er noch?", en: "Is he still breathing?", speaker: "Notrufzentrale" },
      { target: "Ja, er atmet noch, aber er reagiert nicht.", en: "Yes, he's still breathing, but he's not responding.", speaker: "Anrufer" },
      { target: "Drehen Sie ihn vorsichtig in die stabile Seitenlage. Ich bleibe in der Leitung.", en: "Carefully turn him into the recovery position. I'll stay on the line.", speaker: "Notrufzentrale" },
      { target: "Okay, ich habe ihn gedreht. Bitte kommen Sie schnell!", en: "Okay, I've turned him. Please come quickly!", speaker: "Anrufer" },
    ],
    [{ target: "ohnmächtig", en: "unconscious" }, { target: "atmen", en: "to breathe" }, { target: "die Seitenlage", en: "recovery position", article: "die" }],
    [
      { target: "Wo liegt der Mann?", en: "Where is the man?", options: [{ target: "Auf einem Stuhl", en: "On a chair", correct: false }, { target: "Auf dem Boden", en: "On the ground", correct: true }, { target: "Im Bett", en: "In bed", correct: false }] },
      { target: "Was soll der Anrufer machen?", en: "What should the caller do?", options: [{ target: "Den Mann hinsetzen", en: "Sit the man up", correct: false }, { target: "Den Mann in die stabile Seitenlage drehen", en: "Turn the man into the recovery position", correct: true }, { target: "Dem Mann Wasser geben", en: "Give the man water", correct: false }] },
    ],
    [{ target: "reagieren", en: "to respond" }, { target: "vorsichtig", en: "carefully" }],
    { question: "Was sagen Sie, wenn jemand ohnmächtig ist?", questionTranslation: "What do you say when someone is unconscious?", options: [
      { text: "Ein Mann liegt auf dem Boden. Er ist ohnmächtig, atmet aber noch.", translation: "A man is lying on the ground. He's unconscious but still breathing.", correct: true },
      { text: "Können Sie mir den Weg zeigen?", translation: "Can you show me the way?", correct: false },
      { text: "Ich möchte ein Glas Wasser.", translation: "I'd like a glass of water.", correct: false }
    ] },
  );

  // Module 146: At the Hospital (A2)
  await addExperience(146, "At the Emergency Room", 1, "Emergency",
    [
      { target: "Ich bin verletzt! Ich bin mit dem Fahrrad gestürzt.", en: "I'm injured! I fell off my bicycle.", speaker: "Patient" },
      { target: "Wo ist die Notaufnahme?", en: "Where is the emergency room?", speaker: "Patient" },
      { target: "Hier links, durch die Tür. Setzen Sie sich im Wartebereich hin.", en: "Here to the left, through the door. Have a seat in the waiting area.", speaker: "Krankenschwester" },
      { target: "Kann ich bitte sofort einen Arzt sehen? Es tut sehr weh.", en: "Can I please see a doctor immediately? It hurts a lot.", speaker: "Patient" },
      { target: "Der Arzt kommt gleich zu Ihnen. Haben Sie starke Schmerzen?", en: "The doctor will be with you shortly. Are you in severe pain?", speaker: "Krankenschwester" },
    ],
    [{ target: "die Notaufnahme", en: "emergency room", article: "die" }, { target: "stürzen", en: "to fall" }, { target: "der Wartebereich", en: "waiting area", article: "der" }],
    [
      { target: "Was ist mit dem Patienten passiert?", en: "What happened to the patient?", options: [{ target: "Er ist mit dem Fahrrad gestürzt", en: "He fell off his bicycle", correct: true }, { target: "Er wurde überfallen", en: "He was attacked", correct: false }, { target: "Er hat einen Unfall mit dem Auto", en: "He had a car accident", correct: false }] },
      { target: "Wo soll der Patient warten?", en: "Where should the patient wait?", options: [{ target: "Draußen vor dem Krankenhaus", en: "Outside the hospital", correct: false }, { target: "Im Wartebereich", en: "In the waiting area", correct: true }, { target: "Im Arztzimmer", en: "In the doctor's office", correct: false }] },
    ],
    [{ target: "verletzt", en: "injured" }, { target: "der Arzt", en: "doctor" }],
    { question: "Was sagen Sie in der Notaufnahme?", questionTranslation: "What do you say in the emergency room?", options: [
      { text: "Ich bin verletzt! Wo ist die Notaufnahme?", translation: "I'm injured! Where is the emergency room?", correct: true },
      { text: "Ich möchte ein Zimmer buchen.", translation: "I'd like to book a room.", correct: false },
      { text: "Können Sie mir ein Taxi rufen?", translation: "Can you call a taxi?", correct: false }
    ] },
  );

  await addExperience(146, "Describing Symptoms to the Nurse", 1, "Emergency",
    [
      { target: "Ich habe Schmerzen in der Brust, besonders wenn ich atme.", en: "I have pain in my chest, especially when I breathe.", speaker: "Patient" },
      { target: "Seit wann haben Sie die Schmerzen?", en: "Since when have you had the pain?", speaker: "Krankenschwester" },
      { target: "Seit dem Sturz heute Morgen. Es wird langsam schlimmer.", en: "Since the fall this morning. It's slowly getting worse.", speaker: "Patient" },
      { target: "Wir machen sofort ein Röntgen. Ziehen Sie sich bitte aus.", en: "We'll take an X-ray right away. Please undress.", speaker: "Krankenschwester" },
      { target: "Tut das weh, wenn ich hier drücke?", en: "Does it hurt when I press here?", speaker: "Krankenschwester" },
    ],
    [{ target: "die Brust", en: "chest", article: "die" }, { target: "das Röntgen", en: "X-ray", article: "das" }, { target: "drücken", en: "to press" }],
    [
      { target: "Wo hat der Patient Schmerzen?", en: "Where does the patient have pain?", options: [{ target: "Im Bein", en: "In the leg", correct: false }, { target: "In der Brust", en: "In the chest", correct: true }, { target: "Im Arm", en: "In the arm", correct: false }] },
      { target: "Was macht die Krankenschwester?", en: "What does the nurse do?", options: [{ target: "Sie ruft den Chef", en: "She calls the boss", correct: false }, { target: "Sie macht ein Röntgen", en: "She takes an X-ray", correct: true }, { target: "Sie gibt dem Patienten Essen", en: "She gives the patient food", correct: false }] },
    ],
    [{ target: "der Schmerz", en: "pain" }, { target: "schlimmer", en: "worse" }],
    { question: "Was sagen Sie der Krankenschwester?", questionTranslation: "What do you say to the nurse?", options: [
      { text: "Ich habe Schmerzen in der Brust, besonders wenn ich atme.", translation: "I have pain in my chest, especially when I breathe.", correct: true },
      { text: "Ich möchte bitte nach Hause.", translation: "I'd like to go home, please.", correct: false },
      { text: "Das Essen schmeckt nicht.", translation: "The food doesn't taste good.", correct: false }
    ] },
  );

  await addExperience(146, "Waiting for Treatment", 1, "Emergency",
    [
      { target: "Wie lange muss ich noch warten?", en: "How much longer do I have to wait?", speaker: "Patient" },
      { target: "Sie sind als Nächster dran. Der Arzt ist noch bei einem Notfall.", en: "You're next. The doctor is still with an emergency.", speaker: "Krankenschwester" },
      { target: "Könnte ich bitte etwas Wasser haben? Mir ist schwindlig.", en: "Could I please have some water? I feel dizzy.", speaker: "Patient" },
      { target: "Natürlich, ich bringe Ihnen ein Glas Wasser. Bleiben Sie sitzen.", en: "Of course, I'll bring you a glass of water. Stay seated.", speaker: "Krankenschwester" },
      { target: "Danke. Sagen Sie mir Bescheid, wenn ich dran bin?", en: "Thanks. Will you let me know when it's my turn?", speaker: "Patient" },
    ],
    [{ target: "warten", en: "to wait" }, { target: "der Notfall", en: "emergency", article: "der", plural: "die Notfälle" }, { target: "schwindlig", en: "dizzy" }],
    [
      { target: "Warum muss der Patient noch warten?", en: "Why does the patient still have to wait?", options: [{ target: "Der Arzt hat Pause", en: "The doctor is on break", correct: false }, { target: "Der Arzt ist bei einem Notfall", en: "The doctor is with an emergency", correct: true }, { target: "Der Patient ist nicht krank", en: "The patient is not sick", correct: false }] },
      { target: "Was möchte der Patient haben?", en: "What would the patient like?", options: [{ target: "Etwas zu essen", en: "Something to eat", correct: false }, { target: "Ein Glas Wasser", en: "A glass of water", correct: true }, { target: "Ein Kissen", en: "A pillow", correct: false }] },
    ],
    [{ target: "Bescheid sagen", en: "to let know" }, { target: "dran sein", en: "to be next" }],
    { question: "Was fragen Sie, wenn Sie lange warten?", questionTranslation: "What do you ask when you've been waiting a long time?", options: [
      { text: "Wie lange muss ich noch warten? Ich bin als Nächster dran, oder?", translation: "How much longer do I have to wait? I'm next, right?", correct: true },
      { text: "Kann ich gehen?", translation: "Can I leave?", correct: false },
      { text: "Haben Sie Kaffee?", translation: "Do you have coffee?", correct: false }
    ] },
  );

  // Module 147: Describing an Accident (B1)
  await addExperience(147, "Talking to the Police", 2, "Emergency",
    [
      { target: "Können Sie den Unfallhergang beschreiben?", en: "Can you describe how the accident happened?", speaker: "Polizist" },
      { target: "Ja, ich bin auf der Vorfahrtsstraße gefahren, weil ich Vorfahrt hatte.", en: "Yes, I was driving on the main road because I had right of way.", speaker: "Fahrer" },
      { target: "Der andere Fahrer hat das Stoppschild nicht beachtet, weil er abgelenkt war.", en: "The other driver didn't notice the stop sign because he was distracted.", speaker: "Fahrer" },
      { target: "Dann hat er mich geschnitten, sodass ich nicht mehr ausweichen konnte.", en: "Then he cut me off, so I couldn't swerve anymore.", speaker: "Fahrer" },
      { target: "Das ist eine klare Aussage. Wir werden den Unfallbericht aufnehmen.", en: "That's a clear statement. We'll take the accident report.", speaker: "Polizist" },
    ],
    [{ target: "der Unfallhergang", en: "course of the accident", article: "der" }, { target: "die Vorfahrt", en: "right of way", article: "die" }, { target: "der Unfallbericht", en: "accident report", article: "der" }],
    [
      { target: "Warum hat der andere Fahrer das Stoppschild nicht beachtet?", en: "Why didn't the other driver notice the stop sign?", options: [{ target: "Weil er zu schnell gefahren ist", en: "Because he was driving too fast", correct: false }, { target: "Weil er abgelenkt war", en: "Because he was distracted", correct: true }, { target: "Weil das Schild kaputt war", en: "Because the sign was broken", correct: false }] },
      { target: "Was macht die Polizei mit der Aussage?", en: "What does the police do with the statement?", options: [{ target: "Sie ignoriert sie", en: "They ignore it", correct: false }, { target: "Sie nimmt einen Unfallbericht auf", en: "They take an accident report", correct: true }, { target: "Sie gibt dem Fahrer eine Geldstrafe", en: "They fine the driver", correct: false }] },
    ],
    [{ target: "beschreiben", en: "to describe" }, { target: "ausweichen", en: "to swerve" }],
    { question: "Was sagen Sie zur Polizei?", questionTranslation: "What do you say to the police?", options: [
      { text: "Ich bin auf der Vorfahrtsstraße gefahren, weil ich Vorfahrt hatte.", translation: "I was driving on the main road because I had right of way.", correct: true },
      { text: "Ich möchte ein Ticket kaufen.", translation: "I'd like to buy a ticket.", correct: false },
      { text: "Wo ist das nächste Hotel?", translation: "Where is the nearest hotel?", correct: false }
    ] },
  );

  await addExperience(147, "Witness Statement", 2, "Emergency",
    [
      { target: "Ich habe alles gesehen. Das Auto kam von rechts mit viel zu hoher Geschwindigkeit.", en: "I saw everything. The car came from the right at way too high a speed.", speaker: "Zeuge" },
      { target: "Können Sie mir sagen, wie schnell das Auto ungefähr war?", en: "Can you tell me approximately how fast the car was going?", speaker: "Polizist" },
      { target: "Ich schätze, mindestens 70 Kilometer pro Stunde, obwohl nur 50 erlaubt waren.", en: "I estimate at least 70 kilometers per hour, although only 50 was allowed.", speaker: "Zeuge" },
      { target: "Haben Sie das Kennzeichen gesehen?", en: "Did you see the license plate?", speaker: "Polizist" },
      { target: "Ja, es begann mit B-MX, aber den Rest konnte ich mir nicht merken.", en: "Yes, it started with B-MX, but I couldn't remember the rest.", speaker: "Zeuge" },
    ],
    [{ target: "die Geschwindigkeit", en: "speed", article: "die" }, { target: "das Kennzeichen", en: "license plate", article: "das", plural: "die Kennzeichen" }, { target: "schätzen", en: "to estimate" }],
    [
      { target: "Woher kam das Auto?", en: "Where did the car come from?", options: [{ target: "Von links", en: "From the left", correct: false }, { target: "Von rechts", en: "From the right", correct: true }, { target: "Von hinten", en: "From behind", correct: false }] },
      { target: "Wie schnell war das Auto ungefähr?", en: "How fast was the car approximately?", options: [{ target: "50 km/h", en: "50 km/h", correct: false }, { target: "70 km/h", en: "70 km/h", correct: true }, { target: "90 km/h", en: "90 km/h", correct: false }] },
    ],
    [{ target: "erlauben", en: "to allow" }, { target: "sich merken", en: "to remember" }],
    { question: "Was sagen Sie als Zeuge?", questionTranslation: "What do you say as a witness?", options: [
      { text: "Ich habe alles gesehen. Das Auto kam von rechts mit viel zu hoher Geschwindigkeit.", translation: "I saw everything. The car came from the right at way too high a speed.", correct: true },
      { text: "Ich möchte eine Fahrkarte kaufen.", translation: "I'd like to buy a ticket.", correct: false },
      { text: "Können Sie mir die Uhrzeit sagen?", translation: "Can you tell me the time?", correct: false }
    ] },
  );

  // Module 148: At the Pharmacy (B1)
  await addExperience(148, "Describing Symptoms to the Pharmacist", 2, "Emergency",
    [
      { target: "Ich habe starke Kopfschmerzen und mir ist auch übel.", en: "I have a severe headache and I also feel nauseous.", speaker: "Kunde" },
      { target: "Was können Sie empfehlen?", en: "What can you recommend?", speaker: "Kunde" },
      { target: "Ich empfehle Ihnen Ibuprofen 600, weil es bei starken Schmerzen besser hilft.", en: "I recommend Ibuprofen 600 because it helps better with severe pain.", speaker: "Apotheker" },
      { target: "Gibt es Nebenwirkungen, die ich beachten muss?", en: "Are there side effects I need to be aware of?", speaker: "Kunde" },
      { target: "Nehmen Sie es nicht auf leeren Magen, da es sonst Magenschmerzen verursachen kann.", en: "Don't take it on an empty stomach, as it can otherwise cause stomach pain.", speaker: "Apotheker" },
    ],
    [{ target: "die Kopfschmerzen", en: "headache", article: "die" }, { target: "empfehlen", en: "to recommend" }, { target: "die Nebenwirkung", en: "side effect", article: "die", plural: "die Nebenwirkungen" }],
    [
      { target: "Welche Symptome hat der Kunde?", en: "What symptoms does the customer have?", options: [{ target: "Halsschmerzen und Fieber", en: "Sore throat and fever", correct: false }, { target: "Kopfschmerzen und Übelkeit", en: "Headache and nausea", correct: true }, { target: "Rückenschmerzen und Schwindel", en: "Back pain and dizziness", correct: false }] },
      { target: "Was empfiehlt der Apotheker?", en: "What does the pharmacist recommend?", options: [{ target: "Aspirin 500", en: "Aspirin 500", correct: false }, { target: "Ibuprofen 600", en: "Ibuprofen 600", correct: true }, { target: "Paracetamol", en: "Paracetamol", correct: false }] },
    ],
    [{ target: "die Übelkeit", en: "nausea" }, { target: "der Magenschmerz", en: "stomach pain" }],
    { question: "Was sagen Sie in der Apotheke?", questionTranslation: "What do you say at the pharmacy?", options: [
      { text: "Ich habe starke Kopfschmerzen. Was können Sie empfehlen?", translation: "I have a severe headache. What can you recommend?", correct: true },
      { text: "Ich möchte ein Bier.", translation: "I'd like a beer.", correct: false },
      { text: "Wo ist der Bahnhof?", translation: "Where is the train station?", correct: false }
    ] },
  );

  await addExperience(148, "Getting Prescription Medicine", 2, "Emergency",
    [
      { target: "Ich brauche ein Rezept, das mir der Arzt ausgestellt hat.", en: "I need a prescription that the doctor gave me.", speaker: "Kunde" },
      { target: "Haben Sie ein günstigeres Medikament? Das Original ist mir zu teuer.", en: "Do you have a cheaper medication? The original is too expensive for me.", speaker: "Kunde" },
      { target: "Ja, wir haben ein Generikum. Es ist genauso wirksam, kostet aber nur die Hälfte.", en: "Yes, we have a generic. It's just as effective but costs only half.", speaker: "Apotheker" },
      { target: "Muss ich etwas Bestimmtes bei der Einnahme beachten?", en: "Do I need to follow any specific instructions when taking it?", speaker: "Kunde" },
      { target: "Ja, Sie sollten das Medikament einmal täglich nach dem Abendessen einnehmen.", en: "Yes, you should take the medication once daily after dinner.", speaker: "Apotheker" },
    ],
    [{ target: "das Rezept", en: "prescription", article: "das", plural: "die Rezepte" }, { target: "das Medikament", en: "medication", article: "das", plural: "die Medikamente" }, { target: "das Generikum", en: "generic drug", article: "das", plural: "die Generika" }],
    [
      { target: "Was hat der Kunde vom Arzt bekommen?", en: "What did the customer get from the doctor?", options: [{ target: "Eine Überweisung", en: "A referral", correct: false }, { target: "Ein Rezept", en: "A prescription", correct: true }, { target: "Eine Impfung", en: "A vaccination", correct: false }] },
      { target: "Warum möchte der Kunde ein günstigeres Medikament?", en: "Why does the customer want a cheaper medication?", options: [{ target: "Weil das Original zu teuer ist", en: "Because the original is too expensive", correct: true }, { target: "Weil das Original nicht wirkt", en: "Because the original doesn't work", correct: false }, { target: "Weil das Original nicht vorrätig ist", en: "Because the original is not in stock", correct: false }] },
    ],
    [{ target: "wirksam", en: "effective" }, { target: "die Einnahme", en: "intake (medication)" }],
    { question: "Was fragen Sie nach dem Preis?", questionTranslation: "What do you ask about the price?", options: [
      { text: "Haben Sie ein günstigeres Medikament? Das Original ist mir zu teuer.", translation: "Do you have a cheaper medication? The original is too expensive for me.", correct: true },
      { text: "Kann ich das Medikament zurückgeben?", translation: "Can I return the medication?", correct: false },
      { text: "Schmeckt das Medikament gut?", translation: "Does the medication taste good?", correct: false }
    ] },
  );

  // Module 149: Police & Documents (B2)
  await addExperience(149, "Reporting a Theft", 3, "Emergency",
    [
      { target: "Mir wurde die Tasche gestohlen, während ich im Café saß.", en: "My bag was stolen while I was sitting in a café.", speaker: "Geschädigter" },
      { target: "Ich möchte Anzeige erstatten.", en: "I want to press charges.", speaker: "Geschädigter" },
      { target: "Können Sie mir eine genaue Beschreibung der Tasche geben?", en: "Can you give me an exact description of the bag?", speaker: "Polizist" },
      { target: "Es war eine schwarze Ledertasche mit meinem Portemonnaie und sämtlichen Dokumenten darin.", en: "It was a black leather bag with my wallet and all my documents inside.", speaker: "Geschädigter" },
      { target: "Wir nehmen Ihre Aussage auf und leiten die Ermittlungen ein. Sie erhalten eine Kopie des Protokolls.", en: "We'll take your statement and initiate the investigation. You'll receive a copy of the report.", speaker: "Polizist" },
    ],
    [{ target: "die Anzeige", en: "criminal complaint", article: "die", plural: "die Anzeigen" }, { target: "die Ermittlung", en: "investigation", article: "die", plural: "die Ermittlungen" }, { target: "der Diebstahl", en: "theft", article: "der", plural: "Diebstähle" }],
    [
      { target: "Was ist passiert?", en: "What happened?", options: [{ target: "Die Tasche wurde gestohlen", en: "The bag was stolen", correct: true }, { target: "Die Tasche wurde verloren", en: "The bag was lost", correct: false }, { target: "Die Tasche wurde beschädigt", en: "The bag was damaged", correct: false }] },
      { target: "Was macht die Polizei mit der Aussage?", en: "What does the police do with the statement?", options: [{ target: "Sie ignoriert den Fall", en: "They ignore the case", correct: false }, { target: "Sie leitet Ermittlungen ein", en: "They initiate an investigation", correct: true }, { target: "Sie gibt dem Geschädigten Geld", en: "They give money to the victim", correct: false }] },
    ],
    [{ target: "die Aussage", en: "statement" }, { target: "das Protokoll", en: "report" }],
    { question: "Was sagen Sie bei der Polizei?", questionTranslation: "What do you say at the police station?", options: [
      { text: "Mir wurde die Tasche gestohlen. Ich möchte Anzeige erstatten.", translation: "My bag was stolen. I want to press charges.", correct: true },
      { text: "Ich möchte einen Kaffee bestellen.", translation: "I'd like to order a coffee.", correct: false },
      { text: "Wo ist die nächste Bank?", translation: "Where is the nearest bank?", correct: false }
    ] },
  );

  await addExperience(149, "Lost Passport", 3, "Emergency",
    [
      { target: "Mein Pass ist weg. Ich glaube, er wurde mir gestohlen.", en: "My passport is gone. I think it was stolen from me.", speaker: "Geschädigter" },
      { target: "Ich brauche einen Ersatzpass, da ich in drei Tagen zurückfliege.", en: "I need a replacement passport because I'm flying back in three days.", speaker: "Geschädigter" },
      { target: "Sie benötigen eine Verlustanzeige und ein aktuelles Passfoto.", en: "You need a loss report and a current passport photo.", speaker: "Polizist" },
      { target: "Gehen Sie damit zum Bürgeramt. Dort können Sie einen vorläufigen Reiseausweis beantragen.", en: "Go to the citizen's office with that. You can apply for a provisional travel document there.", speaker: "Polizist" },
      { target: "Vielen Dank für Ihre Hilfe. Ich werde mich unverzüglich darum kümmern.", en: "Thank you very much for your help. I'll take care of it immediately.", speaker: "Geschädigter" },
    ],
    [{ target: "der Ersatzpass", en: "replacement passport", article: "der", plural: "die Ersatzpässe" }, { target: "die Verlustanzeige", en: "loss report", article: "die" }, { target: "der Reiseausweis", en: "travel document", article: "der", plural: "die Reiseausweise" }],
    [
      { target: "Was ist mit dem Pass passiert?", en: "What happened to the passport?", options: [{ target: "Er wurde verloren oder gestohlen", en: "It was lost or stolen", correct: true }, { target: "Er ist abgelaufen", en: "It expired", correct: false }, { target: "Er wurde beschädigt", en: "It was damaged", correct: false }] },
      { target: "Wohin muss der Geschädigte gehen?", en: "Where does the victim need to go?", options: [{ target: "Zur Botschaft", en: "To the embassy", correct: false }, { target: "Zum Bürgeramt", en: "To the citizen's office", correct: true }, { target: "Zum Krankenhaus", en: "To the hospital", correct: false }] },
    ],
    [{ target: "beantragen", en: "to apply for" }, { target: "unverzüglich", en: "immediately" }],
    { question: "Was sagen Sie, wenn Ihr Pass weg ist?", questionTranslation: "What do you say when your passport is gone?", options: [
      { text: "Mein Pass ist weg. Ich brauche einen Ersatzpass, da ich in drei Tagen zurückfliege.", translation: "My passport is gone. I need a replacement passport because I'm flying back in three days.", correct: true },
      { text: "Mein Pass ist abgelaufen. Kann ich ihn verlängern?", translation: "My passport has expired. Can I renew it?", correct: false },
      { text: "Können Sie mich zum Flughafen fahren?", translation: "Can you drive me to the airport?", correct: false }
    ] },
  );

  // Module 150: Lost & Found (B2)
  await addExperience(150, "Reporting Lost Luggage", 3, "Emergency",
    [
      { target: "Mein Koffer ist nicht am Flughafen angekommen. Ich bin soeben aus Mailand eingetroffen.", en: "My suitcase hasn't arrived at the airport. I've just arrived from Milan.", speaker: "Passagier" },
      { target: "Können Sie mir die Gepäckmarke zeigen?", en: "Can you show me the baggage tag?", speaker: "Mitarbeiter" },
      { target: "Hier ist sie. Der Koffer hatte ein silbernes Schloss und einen roten Anhänger.", en: "Here it is. The suitcase had a silver lock and a red tag.", speaker: "Passagier" },
      { target: "Wir haben Ihren Koffer in München registriert. Er wird mit dem nächsten Flug nachgeliefert.", en: "We have registered your suitcase in Munich. It will be delivered on the next flight.", speaker: "Mitarbeiter" },
      { target: "Wie lange wird das ungefähr dauern? Ich benötige meine Sachen dringend.", en: "How long will that approximately take? I urgently need my belongings.", speaker: "Passagier" },
    ],
    [{ target: "der Koffer", en: "suitcase", article: "der", plural: "die Koffer" }, { target: "die Gepäckmarke", en: "baggage tag", article: "die" }, { target: "nachliefern", en: "to deliver subsequently" }],
    [
      { target: "Was ist das Problem des Passagiers?", en: "What is the passenger's problem?", options: [{ target: "Sein Koffer ist beschädigt", en: "His suitcase is damaged", correct: false }, { target: "Sein Koffer ist nicht angekommen", en: "His suitcase hasn't arrived", correct: true }, { target: "Sein Koffer ist zu schwer", en: "His suitcase is too heavy", correct: false }] },
      { target: "Wo wurde der Koffer registriert?", en: "Where was the suitcase registered?", options: [{ target: "In Frankfurt", en: "In Frankfurt", correct: false }, { target: "In München", en: "In Munich", correct: true }, { target: "In Berlin", en: "In Berlin", correct: false }] },
    ],
    [{ target: "der Flughafen", en: "airport" }, { target: "dringend", en: "urgent" }],
    { question: "Was sagen Sie am Gepäckschalter?", questionTranslation: "What do you say at the baggage counter?", options: [
      { text: "Mein Koffer ist nicht angekommen. Ich komme gerade aus Mailand.", translation: "My suitcase hasn't arrived. I've just arrived from Milan.", correct: true },
      { text: "Ich möchte einen Fensterplatz.", translation: "I'd like a window seat.", correct: false },
      { text: "Wo ist die nächste Bushaltestelle?", translation: "Where is the nearest bus stop?", correct: false }
    ] },
  );

  await addExperience(150, "Insurance Claim", 3, "Emergency",
    [
      { target: "Ich muss einen Schadensfall melden. Mein Gepäck wurde während des Transports beschädigt.", en: "I need to report a claim. My luggage was damaged during transport.", speaker: "Passagier" },
      { target: "Ich habe eine Reisegepäckversicherung abgeschlossen.", en: "I took out a travel luggage insurance policy.", speaker: "Passagier" },
      { target: "Bitte füllen Sie das Schadensformular aus und legen Sie Fotos vom Schaden bei.", en: "Please fill out the claims form and attach photos of the damage.", speaker: "Sachbearbeiter" },
      { target: "Erhalte ich eine Entschädigung, wenn der Schaden während des Transports passiert ist?", en: "Will I receive compensation if the damage occurred during transport?", speaker: "Passagier" },
      { target: "Selbstverständlich. Die Versicherung prüft den Fall und erstattet Ihnen den Zeitwert.", en: "Of course. The insurance company will review the case and reimburse you the current value.", speaker: "Sachbearbeiter" },
    ],
    [{ target: "der Schadensfall", en: "claim/insurance case", article: "der", plural: "die Schadensfälle" }, { target: "die Versicherung", en: "insurance", article: "die", plural: "die Versicherungen" }, { target: "die Entschädigung", en: "compensation", article: "die", plural: "die Entschädigungen" }],
    [
      { target: "Was muss der Passagier melden?", en: "What does the passenger need to report?", options: [{ target: "Einen Schadensfall", en: "A claim", correct: true }, { target: "Eine Adressänderung", en: "An address change", correct: false }, { target: "Eine Reiserücktritt", en: "A trip cancellation", correct: false }] },
      { target: "Was soll der Passagier dem Schadensformular beifügen?", en: "What should the passenger attach to the claims form?", options: [{ target: "Den Reisepass", en: "The passport", correct: false }, { target: "Fotos vom Schaden", en: "Photos of the damage", correct: true }, { target: "Die Bordkarte", en: "The boarding pass", correct: false }] },
    ],
    [{ target: "prüfen", en: "to review" }, { target: "erstatten", en: "to reimburse" }],
    { question: "Was sagen Sie bei der Versicherung?", questionTranslation: "What do you say to the insurance company?", options: [
      { text: "Ich muss einen Schadensfall melden. Mein Gepäck wurde beim Transport beschädigt.", translation: "I need to report a claim. My luggage was damaged during transport.", correct: true },
      { text: "Ich möchte ein neues Gepäckstück kaufen.", translation: "I'd like to buy new luggage.", correct: false },
      { text: "Können Sie mir den Weg zur Gepäckausgabe zeigen?", translation: "Can you show me the way to baggage claim?", correct: false }
    ] },
  );
}
