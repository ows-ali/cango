import { addExperience } from "../seed-helpers";

export async function seedSocial() {
  // Module 151: Making Plans (A2)
  await addExperience(151, "Inviting a Friend", 1, "Social & Friends",
    [
      { target: "Hast du am Wochenende Zeit?", en: "Do you have time this weekend?" },
      { target: "Ja, ich habe Zeit. Was möchtest du machen?", en: "Yes, I have time. What would you like to do?" },
      { target: "Lass uns ins Kino gehen. Ein neuer Film läuft.", en: "Let's go to the cinema. A new movie is showing." },
      { target: "Gute Idee! Welchen Film möchtest du sehen?", en: "Good idea! Which movie do you want to see?" },
      { target: "Ich möchte den neuen Actionfilm sehen. Er soll sehr gut sein.", en: "I want to see the new action movie. It's supposed to be very good." },
    ],
    [{ target: "das Wochenende", en: "weekend", article: "das" }, { target: "das Kino", en: "cinema", article: "das" }, { target: "der Film", en: "movie", article: "der", plural: "die Filme" }],
    [
      { target: "Was möchte die Person am Wochenende machen?", en: "What does the person want to do on the weekend?", options: [{ target: "Ins Kino gehen", en: "Go to the cinema", correct: true }, { target: "Zu Hause bleiben", en: "Stay at home", correct: false }, { target: "Einkaufen gehen", en: "Go shopping", correct: false }] },
      { target: "Welche Art von Film möchten sie sehen?", en: "What kind of movie do they want to see?", options: [{ target: "Einen Liebesfilm", en: "A romance", correct: false }, { target: "Einen Actionfilm", en: "An action movie", correct: true }, { target: "Eine Komödie", en: "A comedy", correct: false }] },
    ],
    [{ target: "ins Kino gehen", en: "to go to the cinema" }, { target: "das Wochenende", en: "weekend" }],
    { question: "Sie möchten einen Freund einladen. Was sagen Sie?", questionTranslation: "You want to invite a friend. What do you say?", options: [
      { text: "Hast du am Wochenende Zeit? Lass uns ins Kino gehen.", translation: "Do you have time this weekend? Let's go to the cinema.", correct: true },
      { text: "Kannst du mir dein Auto leihen?", translation: "Can you lend me your car?", correct: false },
      { text: "Ich habe keine Lust auf ein Treffen.", translation: "I don't feel like meeting up.", correct: false }
    ] },
  );

  await addExperience(151, "Agreeing on a Time", 1, "Social & Friends",
    [
      { target: "Passt dir Samstag um 19 Uhr?", en: "Does Saturday at 7 PM work for you?" },
      { target: "Samstag um 19 Uhr passt mir gut.", en: "Saturday at 7 PM works well for me." },
      { target: "Wo treffen wir uns?", en: "Where shall we meet?" },
      { target: "Treffen wir uns vor dem Kino am Alexanderplatz.", en: "Let's meet in front of the cinema at Alexanderplatz." },
      { target: "Perfekt, bis Samstag um 19 Uhr!", en: "Perfect, see you Saturday at 7 PM!" },
    ],
    [{ target: "der Samstag", en: "Saturday", article: "der" }, { target: "sich treffen", en: "to meet" }, { target: "der Alexanderplatz", en: "Alexanderplatz" }],
    [
      { target: "Wann treffen sich die Freunde?", en: "When are the friends meeting?", options: [{ target: "Samstag um 19 Uhr", en: "Saturday at 7 PM", correct: true }, { target: "Sonntag um 20 Uhr", en: "Sunday at 8 PM", correct: false }, { target: "Freitag um 18 Uhr", en: "Friday at 6 PM", correct: false }] },
      { target: "Wo treffen sie sich?", en: "Where are they meeting?", options: [{ target: "Am Bahnhof", en: "At the station", correct: false }, { target: "Vor dem Kino", en: "In front of the cinema", correct: true }, { target: "Im Restaurant", en: "At the restaurant", correct: false }] },
    ],
    [{ target: "vor dem Kino", en: "in front of the cinema" }, { target: "sich treffen", en: "to meet" }],
    { question: "Sie wollen einen Treffpunkt vorschlagen. Was sagen Sie?", questionTranslation: "You want to suggest a meeting point. What do you say?", options: [
      { text: "Treffen wir uns vor dem Kino?", translation: "Shall we meet in front of the cinema?", correct: true },
      { text: "Was kostet eine Fahrkarte?", translation: "How much is a ticket?", correct: false },
      { text: "Können Sie mir den Weg zeigen?", translation: "Can you show me the way?", correct: false }
    ] },
  );

  await addExperience(151, "Cancelling Plans", 1, "Social & Friends",
    [
      { target: "Es tut mir leid, ich kann leider nicht kommen.", en: "I'm sorry, I unfortunately can't come." },
      { target: "Oh, das ist schade. Was ist passiert?", en: "Oh, that's a pity. What happened?" },
      { target: "Ich bin krank geworden und muss im Bett bleiben.", en: "I got sick and have to stay in bed." },
      { target: "Kein Problem, wir verschieben es auf nächste Woche.", en: "No problem, we'll postpone it to next week." },
      { target: "Das wäre schön. Ich melde mich, wenn es mir besser geht!", en: "That would be nice. I'll let you know when I feel better!" },
    ],
    [{ target: "leider", en: "unfortunately" }, { target: "krank", en: "sick" }, { target: "verschieben", en: "to postpone" }],
    [
      { target: "Warum kann die Person nicht kommen?", en: "Why can't the person come?", options: [{ target: "Sie hat keine Lust", en: "She doesn't feel like it", correct: false }, { target: "Sie ist krank geworden", en: "She got sick", correct: true }, { target: "Sie muss arbeiten", en: "She has to work", correct: false }] },
      { target: "Wann wird das Treffen verschoben?", en: "When is the meeting postponed to?", options: [{ target: "Auf morgen", en: "To tomorrow", correct: false }, { target: "Auf nächste Woche", en: "To next week", correct: true }, { target: "Auf übermorgen", en: "To the day after tomorrow", correct: false }] },
    ],
    [{ target: "Es tut mir leid", en: "I'm sorry" }, { target: "verschieben", en: "to postpone" }],
    { question: "Sie müssen eine Verabredung absagen. Was sagen Sie?", questionTranslation: "You have to cancel plans. What do you say?", options: [
      { text: "Es tut mir leid, ich kann leider nicht kommen.", translation: "I'm sorry, I unfortunately can't come.", correct: true },
      { text: "Ich freue mich auf das Treffen!", translation: "I'm looking forward to the meeting!", correct: false },
      { text: "Kannst du mich abholen?", translation: "Can you pick me up?", correct: false }
    ] },
  );

  // Module 152: At a Social Event (A2)
  await addExperience(152, "At a Party", 1, "Social & Friends",
    [
      { target: "Die Musik ist toll, oder?", en: "The music is great, isn't it?" },
      { target: "Ja, ich liebe diesen Song. Tanzt du auch?", en: "Yes, I love this song. Are you dancing too?" },
      { target: "Möchtest du etwas trinken? Ich gehe zur Bar.", en: "Would you like something to drink? I'm going to the bar." },
      { target: "Ja, gerne. Einen Orangensaft für mich, bitte.", en: "Yes, please. An orange juice for me, please." },
      { target: "Komm, lass uns tanzen! Die Party ist fantastisch!", en: "Come on, let's dance! The party is fantastic!" },
    ],
    [{ target: "die Party", en: "party", article: "die", plural: "die Partys" }, { target: "die Musik", en: "music", article: "die" }, { target: "tanzen", en: "to dance" }],
    [
      { target: "Was sagt die Person über die Musik?", en: "What does the person say about the music?", options: [{ target: "Die Musik ist schlecht", en: "The music is bad", correct: false }, { target: "Die Musik ist toll", en: "The music is great", correct: true }, { target: "Die Musik ist zu laut", en: "The music is too loud", correct: false }] },
      { target: "Was möchte die Person an der Bar bestellen?", en: "What does the person want to order at the bar?", options: [{ target: "Ein Bier", en: "A beer", correct: false }, { target: "Ein Wasser", en: "A water", correct: false }, { target: "Einen Orangensaft", en: "An orange juice", correct: true }] },
    ],
    [{ target: "die Party", en: "party" }, { target: "tanzen", en: "to dance" }],
    { question: "Sie sind auf einer Party. Was sagen Sie zur Musik?", questionTranslation: "You're at a party. What do you say about the music?", options: [
      { text: "Die Musik ist toll, oder? Lass uns tanzen!", translation: "The music is great, isn't it? Let's dance!", correct: true },
      { text: "Die Musik ist zu langsam.", translation: "The music is too slow.", correct: false },
      { text: "Ich mag keine Partys.", translation: "I don't like parties.", correct: false }
    ] },
  );

  await addExperience(152, "Meeting New People", 1, "Social & Friends",
    [
      { target: "Das ist mein Freund Tom. Tom, das ist Maria.", en: "This is my friend Tom. Tom, this is Maria." },
      { target: "Freut mich, dich kennenzulernen, Maria.", en: "Nice to meet you, Maria." },
      { target: "Angenehm. Woher kennst du den Gastgeber?", en: "Pleasure. How do you know the host?" },
      { target: "Wir arbeiten zusammen im Büro. Und du?", en: "We work together at the office. And you?" },
      { target: "Tom und ich sind alte Schulfreunde.", en: "Tom and I are old school friends." },
    ],
    [{ target: "der Freund", en: "friend", article: "der" }, { target: "der Gastgeber", en: "host", article: "der" }, { target: "kennenlernen", en: "to get to know" }],
    [
      { target: "Wie lernt Maria Tom kennen?", en: "How does Maria meet Tom?", options: [{ target: "Durch eine Vorstellung", en: "Through an introduction", correct: true }, { target: "Durch einen Anruf", en: "Through a phone call", correct: false }, { target: "Durch eine E-Mail", en: "Through an email", correct: false }] },
      { target: "Woher kennen sich Tom und der Gastgeber?", en: "How do Tom and the host know each other?", options: [{ target: "Sie sind Nachbarn", en: "They are neighbors", correct: false }, { target: "Sie arbeiten zusammen im Büro", en: "They work together at the office", correct: true }, { target: "Sie sind Verwandte", en: "They are relatives", correct: false }] },
    ],
    [{ target: "der Gastgeber", en: "host" }, { target: "kennenlernen", en: "to get to know" }],
    { question: "Sie werden jemandem neu vorgestellt. Was sagen Sie?", questionTranslation: "You're being introduced to someone new. What do you say?", options: [
      { text: "Freut mich, dich kennenzulernen!", translation: "Nice to meet you!", correct: true },
      { text: "Kann ich bitte die Rechnung haben?", translation: "Can I have the bill please?", correct: false },
      { text: "Wo ist die nächste U-Bahn-Station?", translation: "Where is the nearest subway station?", correct: false }
    ] },
  );

  await addExperience(152, "Saying Goodbye", 1, "Social & Friends",
    [
      { target: "Wir müssen langsam gehen. Es wird schon spät.", en: "We have to go now. It's getting late." },
      { target: "Oh, schon? Die Zeit ist wie im Flug vergangen.", en: "Oh, already? Time has flown by." },
      { target: "Vielen Dank für die Einladung. Es war eine tolle Party!", en: "Thank you very much for the invitation. It was a great party!" },
      { target: "Gerne, es hat mich sehr gefreut, euch zu sehen.", en: "You're welcome, it was great to see you." },
      { target: "Bis zum nächsten Mal! Gute Nacht!", en: "Until next time! Good night!" },
    ],
    [{ target: "die Einladung", en: "invitation", article: "die" }, { target: "gehen", en: "to go" }, { target: "die Zeit", en: "time", article: "die" }],
    [
      { target: "Warum gehen die Gäste?", en: "Why are the guests leaving?", options: [{ target: "Es wird schon spät", en: "It's getting late", correct: true }, { target: "Sie sind müde", en: "They are tired", correct: false }, { target: "Das Essen ist alle", en: "The food is gone", correct: false }] },
      { target: "Was sagen die Gäste zum Gastgeber?", en: "What do the guests say to the host?", options: [{ target: "Die Wohnung ist zu klein", en: "The apartment is too small", correct: false }, { target: "Danke für die Einladung", en: "Thanks for the invitation", correct: true }, { target: "Das Essen schmeckt nicht", en: "The food doesn't taste good", correct: false }] },
    ],
    [{ target: "die Einladung", en: "invitation" }, { target: "Gute Nacht", en: "Good night" }],
    { question: "Sie verabschieden sich von Ihrem Gastgeber. Was sagen Sie?", questionTranslation: "You're saying goodbye to your host. What do you say?", options: [
      { text: "Vielen Dank für die Einladung. Es war sehr schön!", translation: "Thank you very much for the invitation. It was very nice!", correct: true },
      { text: "Die Party war langweilig.", translation: "The party was boring.", correct: false },
      { text: "Kann ich noch etwas essen mitnehmen?", translation: "Can I take some food with me?", correct: false }
    ] },
  );

  // Module 153: Small Talk (B1)
  await addExperience(153, "Talking About the Weather", 2, "Social & Friends",
    [
      { target: "Heute ist schönes Wetter, nicht wahr?", en: "The weather is nice today, isn't it?" },
      { target: "Ja, endlich scheint die Sonne wieder!", en: "Yes, the sun is finally shining again!" },
      { target: "Letzte Woche hat es den ganzen Tag geregnet.", en: "Last week it rained all day." },
      { target: "Stimmt, aber für morgen ist wieder Regen angesagt.", en: "True, but rain is forecast for tomorrow again." },
      { target: "Echt? Dann sollte ich besser einen Regenschirm mitnehmen.", en: "Really? Then I'd better take an umbrella." },
    ],
    [{ target: "das Wetter", en: "weather", article: "das" }, { target: "die Sonne", en: "sun", article: "die" }, { target: "der Regen", en: "rain", article: "der" }],
    [
      { target: "Wie ist das Wetter heute?", en: "How is the weather today?", options: [{ target: "Es regnet den ganzen Tag", en: "It's raining all day", correct: false }, { target: "Es ist schönes Wetter, die Sonne scheint", en: "The weather is nice, the sun is shining", correct: true }, { target: "Es schneit", en: "It's snowing", correct: false }] },
      { target: "Was ist für morgen angesagt?", en: "What is forecast for tomorrow?", options: [{ target: "Sonnenschein", en: "Sunshine", correct: false }, { target: "Wieder Regen", en: "Rain again", correct: true }, { target: "Schnee", en: "Snow", correct: false }] },
    ],
    [{ target: "die Sonne", en: "sun" }, { target: "der Regenschirm", en: "umbrella" }],
    { question: "Sie wollen ein Gespräch über das Wetter beginnen. Was sagen Sie?", questionTranslation: "You want to start a conversation about the weather. What do you say?", options: [
      { text: "Heute ist schönes Wetter, nicht wahr?", translation: "The weather is nice today, isn't it?", correct: true },
      { text: "Wie spät ist es?", translation: "What time is it?", correct: false },
      { text: "Was kostet dieser Schirm?", translation: "How much is this umbrella?", correct: false }
    ] },
  );

  await addExperience(153, "Weekend Chat", 2, "Social & Friends",
    [
      { target: "Was hast du am Wochenende gemacht?", en: "What did you do on the weekend?" },
      { target: "Ich war wandern im Schwarzwald. Es war wunderschön!", en: "I went hiking in the Black Forest. It was beautiful!" },
      { target: "Das klingt toll! Warst du alleine unterwegs?", en: "That sounds great! Were you traveling alone?" },
      { target: "Nein, ich bin mit einer Gruppe gewandert. Wir waren acht Leute.", en: "No, I hiked with a group. There were eight of us." },
      { target: "Ich war zu Hause und habe ein Buch gelesen. Auch entspannend!", en: "I stayed home and read a book. Relaxing too!" },
    ],
    [{ target: "wandern", en: "to hike" }, { target: "wunderschön", en: "beautiful" }, { target: "die Gruppe", en: "group", article: "die" }],
    [
      { target: "Was hat die Person am Wochenende gemacht?", en: "What did the person do on the weekend?", options: [{ target: "Sie ist gewandert", en: "She went hiking", correct: true }, { target: "Sie hat gearbeitet", en: "She worked", correct: false }, { target: "Sie ist ins Kino gegangen", en: "She went to the cinema", correct: false }] },
      { target: "War die Person alleine unterwegs?", en: "Was the person traveling alone?", options: [{ target: "Ja, sie war alleine", en: "Yes, she was alone", correct: false }, { target: "Nein, sie war mit einer Gruppe", en: "No, she was with a group", correct: true }, { target: "Sie war mit der Familie", en: "She was with family", correct: false }] },
    ],
    [{ target: "wandern", en: "to hike" }, { target: "das Wochenende", en: "weekend" }],
    { question: "Sie fragen einen Freund nach seinem Wochenende. Was sagen Sie?", questionTranslation: "You ask a friend about their weekend. What do you say?", options: [
      { text: "Was hast du am Wochenende gemacht?", translation: "What did you do on the weekend?", correct: true },
      { text: "Magst du Pizza?", translation: "Do you like pizza?", correct: false },
      { text: "Kannst du mir fünf Euro leihen?", translation: "Can you lend me five euros?", correct: false }
    ] },
  );

  // Module 154: Talking About Hobbies (B1)
  await addExperience(154, "Shared Interests", 2, "Social & Friends",
    [
      { target: "Was machst du in deiner Freizeit?", en: "What do you do in your free time?" },
      { target: "Ich spiele Fußball im Verein. Und du?", en: "I play soccer in a club. And you?" },
      { target: "Ich spiele Gitarre und lese gerne Bücher.", en: "I play guitar and like reading books." },
      { target: "Fußball und Gitarre — das ist ein interessanter Mix!", en: "Soccer and guitar — that's an interesting mix!" },
      { target: "Vielleicht können wir mal zusammen Musik machen.", en: "Maybe we can make music together sometime." },
    ],
    [{ target: "die Freizeit", en: "free time", article: "die" }, { target: "der Fußball", en: "soccer", article: "der" }, { target: "die Gitarre", en: "guitar", article: "die" }],
    [
      { target: "Welchen Sport macht die Person?", en: "Which sport does the person play?", options: [{ target: "Tennis", en: "Tennis", correct: false }, { target: "Fußball", en: "Soccer", correct: true }, { target: "Schwimmen", en: "Swimming", correct: false }] },
      { target: "Was schlägt die Person am Ende vor?", en: "What does the person suggest at the end?", options: [{ target: "Zusammen essen gehen", en: "Going out to eat together", correct: false }, { target: "Zusammen Musik machen", en: "Making music together", correct: true }, { target: "Zusammen einkaufen gehen", en: "Going shopping together", correct: false }] },
    ],
    [{ target: "die Freizeit", en: "free time" }, { target: "der Verein", en: "club" }],
    { question: "Sie wollen einen neuen Freund nach seinen Hobbys fragen. Was sagen Sie?", questionTranslation: "You want to ask a new friend about their hobbies. What do you say?", options: [
      { text: "Was machst du in deiner Freizeit?", translation: "What do you do in your free time?", correct: true },
      { text: "Wie viel verdienst du?", translation: "How much do you earn?", correct: false },
      { text: "Wo wohnst du?", translation: "Where do you live?", correct: false }
    ] },
  );

  await addExperience(154, "Learning German", 2, "Social & Friends",
    [
      { target: "Warum lernst du Deutsch?", en: "Why are you learning German?" },
      { target: "Ich möchte in Berlin studieren. Dafür brauche ich Deutsch.", en: "I want to study in Berlin. I need German for that." },
      { target: "Das ist ein gutes Ziel. Deutsch ist nicht einfach, aber es lohnt sich.", en: "That's a good goal. German isn't easy, but it's worth it." },
      { target: "Ja, die Grammatik ist schwer, aber ich gebe nicht auf.", en: "Yes, the grammar is hard, but I don't give up." },
      { target: "Sprichst du schon gut Deutsch? Dein Deutsch klingt schon sehr gut!", en: "Do you already speak German well? Your German already sounds very good!" },
    ],
    [{ target: "Deutsch", en: "German (language)" }, { target: "studieren", en: "to study" }, { target: "die Grammatik", en: "grammar", article: "die" }],
    [
      { target: "Warum lernt die Person Deutsch?", en: "Why is the person learning German?", options: [{ target: "Sie hat einen deutschen Freund", en: "They have a German friend", correct: false }, { target: "Sie möchte in Berlin studieren", en: "They want to study in Berlin", correct: true }, { target: "Sie zieht nach Deutschland", en: "They are moving to Germany", correct: false }] },
      { target: "Wie findet die Person die deutsche Sprache?", en: "How does the person find the German language?", options: [{ target: "Die Grammatik ist schwer", en: "The grammar is hard", correct: true }, { target: "Es ist sehr einfach", en: "It's very easy", correct: false }, { target: "Es ist langweilig", en: "It's boring", correct: false }] },
    ],
    [{ target: "studieren", en: "to study" }, { target: "aufgeben", en: "to give up" }],
    { question: "Jemand fragt Sie, warum Sie Deutsch lernen. Was antworten Sie?", questionTranslation: "Someone asks why you're learning German. What do you answer?", options: [
      { text: "Ich möchte in Berlin studieren.", translation: "I want to study in Berlin.", correct: true },
      { text: "Ich hasse Deutsch.", translation: "I hate German.", correct: false },
      { text: "Ich kann schon perfekt Deutsch.", translation: "I already speak German perfectly.", correct: false }
    ] },
  );

  // Module 155: Deep Conversations (B2)
  await addExperience(155, "Discussing Current Events", 3, "Social & Friends",
    [
      { target: "Was denkst du über die aktuelle Situation in der Politik?", en: "What do you think about the current political situation?" },
      { target: "Ehrlich gesagt, ich mache mir große Sorgen um die Zukunft.", en: "Honestly, I'm very worried about the future." },
      { target: "Ja, ich verstehe, was du meinst. Es gibt viele Herausforderungen.", en: "Yes, I understand what you mean. There are many challenges." },
      { target: "Aber ich bin optimistisch, dass wir Lösungen finden werden.", en: "But I'm optimistic that we will find solutions." },
      { target: "Da hast du recht. Man darf die Hoffnung nicht verlieren.", en: "You're right about that. You mustn't lose hope." },
    ],
    [{ target: "die Politik", en: "politics", article: "die" }, { target: "die Sorge", en: "worry", article: "die" }, { target: "die Herausforderung", en: "challenge", article: "die" }],
    [
      { target: "Wie fühlt sich die Person in Bezug auf die Zukunft?", en: "How does the person feel about the future?", options: [{ target: "Sie ist sehr pessimistisch", en: "She is very pessimistic", correct: false }, { target: "Sie macht sich Sorgen, ist aber optimistisch", en: "She is worried but optimistic", correct: true }, { target: "Sie ist gleichgültig", en: "She is indifferent", correct: false }] },
      { target: "Was sagt die andere Person über die Hoffnung?", en: "What does the other person say about hope?", options: [{ target: "Man darf die Hoffnung nicht verlieren", en: "You mustn't lose hope", correct: true }, { target: "Hoffnung ist sinnlos", en: "Hope is pointless", correct: false }, { target: "Sie hat keine Hoffnung mehr", en: "She has no hope left", correct: false }] },
    ],
    [{ target: "die Herausforderung", en: "challenge" }, { target: "die Hoffnung", en: "hope" }],
    { question: "Ein Freund fragt nach Ihrer Meinung zur aktuellen Situation. Was antworten Sie?", questionTranslation: "A friend asks for your opinion on the current situation. What do you answer?", options: [
      { text: "Ehrlich gesagt, ich mache mir Sorgen, aber ich bin optimistisch.", translation: "Honestly, I'm worried, but I'm optimistic.", correct: true },
      { text: "Das interessiert mich nicht.", translation: "I'm not interested in that.", correct: false },
      { text: "Politik ist langweilig.", translation: "Politics is boring.", correct: false }
    ] },
  );

  await addExperience(155, "Sharing Opinions", 3, "Social & Friends",
    [
      { target: "Ich bin der Meinung, dass wir mehr für die Umwelt tun müssen.", en: "I am of the opinion that we have to do more for the environment." },
      { target: "Das sehe ich anders. Ich finde, Deutschland macht schon sehr viel.", en: "I see it differently. I think Germany already does a lot." },
      { target: "Aber reicht das wirklich? Die Klimakrise wird immer schlimmer.", en: "But is that really enough? The climate crisis is getting worse." },
      { target: "Da ist etwas dran. Vielleicht könnten wir im Alltag mehr machen.", en: "There's something to that. Maybe we could do more in everyday life." },
      { target: "Genau. Jeder Einzelne kann einen Beitrag leisten.", en: "Exactly. Every individual can make a contribution." },
    ],
    [{ target: "die Meinung", en: "opinion", article: "die" }, { target: "die Umwelt", en: "environment", article: "die" }, { target: "der Beitrag", en: "contribution", article: "der" }],
    [
      { target: "Was ist die erste Meinung in dem Gespräch?", en: "What is the first opinion in the conversation?", options: [{ target: "Deutschland macht schon genug", en: "Germany already does enough", correct: false }, { target: "Wir müssen mehr für die Umwelt tun", en: "We have to do more for the environment", correct: true }, { target: "Die Politik ist schuld", en: "Politics is to blame", correct: false }] },
      { target: "Stimmt die zweite Person am Ende zu?", en: "Does the second person eventually agree?", options: [{ target: "Sie sieht es zunächst anders, gibt dann aber teilweise recht", en: "She sees it differently at first but then partially agrees", correct: true }, { target: "Sie stimmt sofort zu", en: "She agrees immediately", correct: false }, { target: "Sie lehnt alles ab", en: "She rejects everything", correct: false }] },
    ],
    [{ target: "die Meinung", en: "opinion" }, { target: "der Beitrag", en: "contribution" }],
    { question: "Sie diskutieren über die Umwelt. Was sagen Sie, um Ihre Meinung zu äußern?", questionTranslation: "You're discussing the environment. What do you say to express your opinion?", options: [
      { text: "Ich bin der Meinung, dass wir mehr tun müssen.", translation: "I am of the opinion that we have to do more.", correct: true },
      { text: "Das Wetter ist heute schön.", translation: "The weather is nice today.", correct: false },
      { text: "Was kostet das?", translation: "How much does that cost?", correct: false }
    ] },
  );

  // Module 156: Making Arrangements (B2)
  await addExperience(156, "Planning a Trip Together", 3, "Social & Friends",
    [
      { target: "Sollen wir zusammen eine Reise planen? Ich habe im Sommer frei.", en: "Shall we plan a trip together? I have time off in the summer." },
      { target: "Gerne! Welches Ziel schwebt dir vor?", en: "Sure! What destination do you have in mind?" },
      { target: "Ich würde gerne nach Italien fahren. Die Küste ist wunderschön.", en: "I'd like to go to Italy. The coast is beautiful." },
      { target: "Italien ist eine gute Wahl! Wir könnten eine Woche ans Meer fahren.", en: "Italy is a good choice! We could go to the sea for a week." },
      { target: "Perfekt! Ich kümmere mich um die Unterkunft, wenn du die Anreise planst.", en: "Perfect! I'll take care of accommodation if you plan the travel." },
    ],
    [{ target: "die Reise", en: "trip", article: "die" }, { target: "die Unterkunft", en: "accommodation", article: "die" }, { target: "die Anreise", en: "outward journey", article: "die" }],
    [
      { target: "Wohin möchte die Person reisen?", en: "Where does the person want to travel?", options: [{ target: "Nach Spanien", en: "To Spain", correct: false }, { target: "Nach Italien", en: "To Italy", correct: true }, { target: "Nach Frankreich", en: "To France", correct: false }] },
      { target: "Wer kümmert sich um die Unterkunft?", en: "Who is taking care of the accommodation?", options: [{ target: "Die zweite Person", en: "The second person", correct: false }, { target: "Die erste Person", en: "The first person", correct: true }, { target: "Beide gemeinsam", en: "Both together", correct: false }] },
    ],
    [{ target: "die Reise", en: "trip" }, { target: "die Unterkunft", en: "accommodation" }],
    { question: "Sie wollen mit einem Freund eine Reise planen. Was sagen Sie?", questionTranslation: "You want to plan a trip with a friend. What do you say?", options: [
      { text: "Sollen wir zusammen eine Reise planen?", translation: "Shall we plan a trip together?", correct: true },
      { text: "Ich hasse Reisen.", translation: "I hate traveling.", correct: false },
      { text: "Kannst du mich zum Flughafen fahren?", translation: "Can you drive me to the airport?", correct: false }
    ] },
  );

  await addExperience(156, "Resolving Scheduling Conflicts", 3, "Social & Friends",
    [
      { target: "Wir müssen einen Termin finden, der allen passt.", en: "We have to find a date that works for everyone." },
      { target: "Am Montag habe ich schon eine andere Verabredung.", en: "On Monday I already have another appointment." },
      { target: "Wie sieht es mit Dienstag aus? Da habe ich frei.", en: "What about Tuesday? I'm free that day." },
      { target: "Dienstag ist gut für mich. Aber erst ab 17 Uhr.", en: "Tuesday is good for me. But only from 5 PM." },
      { target: "Ab 17 Uhr passt mir auch. Dann machen wir Dienstag um 17 Uhr!", en: "From 5 PM works for me too. Then let's do Tuesday at 5 PM!" },
    ],
    [{ target: "der Termin", en: "appointment", article: "der" }, { target: "die Verabredung", en: "arrangement", article: "die" }, { target: "frei haben", en: "to have time off" }],
    [
      { target: "Warum geht Montag nicht?", en: "Why doesn't Monday work?", options: [{ target: "Die Person muss arbeiten", en: "The person has to work", correct: false }, { target: "Die Person hat schon eine andere Verabredung", en: "The person already has another appointment", correct: true }, { target: "Das Restaurant ist geschlossen", en: "The restaurant is closed", correct: false }] },
      { target: "Wann wird der Termin schließlich festgelegt?", en: "When is the appointment finally set?", options: [{ target: "Montag um 17 Uhr", en: "Monday at 5 PM", correct: false }, { target: "Dienstag um 18 Uhr", en: "Tuesday at 6 PM", correct: false }, { target: "Dienstag um 17 Uhr", en: "Tuesday at 5 PM", correct: true }] },
    ],
    [{ target: "der Termin", en: "appointment" }, { target: "die Verabredung", en: "arrangement" }],
    { question: "Sie müssen einen Gruppentermin koordinieren. Was sagen Sie?", questionTranslation: "You have to coordinate a group appointment. What do you say?", options: [
      { text: "Wir müssen einen Termin finden, der allen passt.", translation: "We have to find a date that works for everyone.", correct: true },
      { text: "Ich habe keine Zeit für euch.", translation: "I don't have time for you.", correct: false },
      { text: "Treffen wir uns einfach zufällig.", translation: "Let's just meet by chance.", correct: false }
    ] },
  );
}
