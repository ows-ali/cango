import { addExperience } from "../seed-helpers";

export async function seedJobInterview() {
  // Module 113: Self-Introduction (A2)
  await addExperience(113, "Introducing Yourself", 1, "Job Interview",
    [
      { target: "Guten Tag, mein Name ist Anna Schmidt.", en: "Good day, my name is Anna Schmidt." },
      { target: "Ich komme aus Spanien und lebe seit zwei Jahren in Berlin.", en: "I come from Spain and have been living in Berlin for two years." },
      { target: "Ich habe Wirtschaftswissenschaften studiert.", en: "I studied economics." },
      { target: "Zurzeit mache ich einen Deutschkurs, um mein B2 zu verbessern.", en: "Currently I'm taking a German course to improve my B2." },
      { target: "Ich bin sehr motiviert, in Deutschland zu arbeiten.", en: "I am very motivated to work in Germany." },
    ],
    [{ target: "der Name", en: "name" }, { target: "studieren", en: "to study" }, { target: "motiviert", en: "motivated" }],
    [
      { target: "Woher kommt Anna Schmidt?", en: "Where does Anna Schmidt come from?", options: [{ target: "Aus Italien", en: "From Italy", correct: false }, { target: "Aus Spanien", en: "From Spain", correct: true }, { target: "Aus Frankreich", en: "From France", correct: false }] },
      { target: "Was hat sie studiert?", en: "What did she study?", options: [{ target: "Informatik", en: "Computer science", correct: false }, { target: "Wirtschaftswissenschaften", en: "Economics", correct: true }, { target: "Medizin", en: "Medicine", correct: false }] },
    ],
    [{ target: "das Wirtschaftswissenschaften", en: "economics" }, { target: "der Deutschkurs", en: "German course" }],
    { question: "Der Interviewer fragt nach Ihrer Arbeit. Was sagen Sie?", questionTranslation: "The interviewer asks about your work. What do you say?", options: [
      { text: "Ich arbeite als Ingenieur bei einer deutschen Firma.", translation: "I work as an engineer at a German company.", correct: true },
      { text: "Ich arbeite gar nicht.", translation: "I don't work.", correct: false },
      { text: "Das ist ein Geheimnis.", translation: "That's a secret.", correct: false }
    ] },
  );

  await addExperience(113, "Talking About Your Current Job", 1, "Job Interview",
    [
      { target: "Was machen Sie beruflich?", en: "What do you do for a living?" },
      { target: "Ich arbeite als Verkäuferin in einem Bekleidungsgeschäft.", en: "I work as a sales assistant in a clothing store." },
      { target: "Seit wann arbeiten Sie dort?", en: "Since when have you worked there?" },
      { target: "Seit einem Jahr. Es ist ein Teilzeitjob.", en: "For a year. It's a part-time job." },
      { target: "Gefällt Ihnen die Arbeit?", en: "Do you like the work?" },
    ],
    [{ target: "beruflich", en: "professionally" }, { target: "der Verkäufer", en: "sales assistant" }, { target: "der Teilzeitjob", en: "part-time job" }],
    [
      { target: "Wo arbeitet Anna?", en: "Where does Anna work?", options: [{ target: "In einem Restaurant", en: "In a restaurant", correct: false }, { target: "In einem Bekleidungsgeschäft", en: "In a clothing store", correct: true }, { target: "In einem Büro", en: "In an office", correct: false }] },
      { target: "Wie lange arbeitet sie dort?", en: "How long has she worked there?", options: [{ target: "Seit drei Monaten", en: "For three months", correct: false }, { target: "Seit einem Jahr", en: "For a year", correct: true }, { target: "Seit zwei Jahren", en: "For two years", correct: false }] },
    ],
    [{ target: "die Verkäuferin", en: "sales assistant (female)" }],
    { question: "Was sind Ihre Stärken?", questionTranslation: "What are your strengths?", options: [
      { text: "Ich bin organisiert, teamfähig und lerne schnell.", translation: "I'm organized, a team player, and learn fast.", correct: true },
      { text: "Ich kann sehr gut schlafen.", translation: "I can sleep very well.", correct: false },
      { text: "Ich komme immer zu spät.", translation: "I'm always late.", correct: false }
    ] },
  );

  await addExperience(113, "Describing Your Strengths", 1, "Job Interview",
    [
      { target: "Was sind Ihre Stärken?", en: "What are your strengths?" },
      { target: "Ich bin freundlich und hilfsbereit.", en: "I am friendly and helpful." },
      { target: "Außerdem lerne ich sehr schnell.", en: "Besides, I learn very quickly." },
      { target: "Und ich arbeite gerne im Team.", en: "And I like working in a team." },
      { target: "Das sind gute Eigenschaften für unsere Firma.", en: "Those are good qualities for our company." },
    ],
    [{ target: "die Stärke", en: "strength" }, { target: "hilfsbereit", en: "helpful" }, { target: "die Eigenschaft", en: "quality" }],
    [
      { target: "Welche Stärke nennt Anna nicht?", en: "Which strength does Anna NOT mention?", options: [{ target: "Freundlich", en: "Friendly", correct: false }, { target: "Schnell lernen", en: "Fast learning", correct: false }, { target: "Perfekt Deutsch sprechen", en: "Speaking perfect German", correct: true }] },
      { target: "Wie arbeitet sie gerne?", en: "How does she like to work?", options: [{ target: "Alleine", en: "Alone", correct: false }, { target: "Im Team", en: "In a team", correct: true }, { target: "Von zu Hause", en: "From home", correct: false }] },
    ],
    [{ target: "freundlich", en: "friendly" }, { target: "das Team", en: "team" }],
    { question: "Der Interviewer stellt einfache Fragen. Was tun Sie?", questionTranslation: "The interviewer asks simple questions. What do you do?", options: [
      { text: "Antworten Sie ruhig und ehrlich auf jede Frage.", translation: "Answer calmly and honestly.", correct: true },
      { text: "Sagen Sie, dass Sie keine Fragen beantworten.", translation: "Say you won't answer questions.", correct: false },
      { text: "Rufen Sie Ihren Anwalt an.", translation: "Call your lawyer.", correct: false }
    ] },
    undefined,
    [
      { text: "die Stärke", translation: "strength", correctValue: "strength" },
      { text: "hilfsbereit", translation: "helpful", correctValue: "helpful" },
      { text: "freundlich", translation: "friendly", correctValue: "friendly" }
    ],
  );

  // Module 114: First Interview (A2)
  await addExperience(114, "Answering Simple Questions", 1, "Job Interview",
    [
      { target: "Warum möchten Sie bei uns arbeiten?", en: "Why do you want to work with us?" },
      { target: "Weil Ihre Firma einen sehr guten Ruf hat.", en: "Because your company has a very good reputation." },
      { target: "Und die Arbeit klingt sehr interessant.", en: "And the work sounds very interesting." },
      { target: "Haben Sie schon Erfahrung in dieser Branche?", en: "Do you already have experience in this industry?" },
      { target: "Ja, ich habe zwei Jahre in einem ähnlichen Job gearbeitet.", en: "Yes, I worked for two years in a similar job." },
    ],
    [{ target: "der Ruf", en: "reputation" }, { target: "die Branche", en: "industry" }, { target: "die Erfahrung", en: "experience" }],
    [
      { target: "Warum möchte Anna bei der Firma arbeiten?", en: "Why does Anna want to work at the company?", options: [{ target: "Wegen des hohen Gehalts", en: "Because of the high salary", correct: false }, { target: "Wegen des guten Rufs", en: "Because of the good reputation", correct: true }, { target: "Wegen der kurzen Arbeitszeit", en: "Because of the short working hours", correct: false }] },
      { target: "Wie viel Erfahrung hat Anna in der Branche?", en: "How much experience does Anna have in the industry?", options: [{ target: "Ein Jahr", en: "One year", correct: false }, { target: "Zwei Jahre", en: "Two years", correct: true }, { target: "Drei Jahre", en: "Three years", correct: false }] },
    ],
    [{ target: "der Ruf", en: "reputation" }, { target: "klingen", en: "to sound" }],
    { question: "Sie möchten mehr über die Stelle wissen. Was fragen Sie?", questionTranslation: "You want to know more about the job. What do you ask?", options: [
      { text: "Können Sie mir mehr über die täglichen Aufgaben erzählen?", translation: "Can you tell me about the daily tasks?", correct: true },
      { text: "Gibt es kostenloses Essen?", translation: "Is there free food?", correct: false },
      { text: "Muss ich am Wochenende arbeiten?", translation: "Do I have to work weekends?", correct: false }
    ] },
  );

  await addExperience(114, "Asking About the Job", 1, "Job Interview",
    [
      { target: "Können Sie mir mehr über die Stelle erzählen?", en: "Can you tell me more about the position?" },
      { target: "Sie arbeiten im Kundenservice und helfen unseren Kunden.", en: "You work in customer service and help our clients." },
      { target: "Wie sind die Arbeitszeiten?", en: "What are the working hours?" },
      { target: "Von Montag bis Freitag, 9 bis 17 Uhr.", en: "Monday to Friday, 9 AM to 5 PM." },
      { target: "Das klingt gut. Gibt es Homeoffice-Möglichkeiten?", en: "That sounds good. Are there home office options?" },
    ],
    [{ target: "die Stelle", en: "position/job" }, { target: "der Kundenservice", en: "customer service" }, { target: "die Arbeitszeit", en: "working hours" }],
    [
      { target: "In welcher Abteilung würde Anna arbeiten?", en: "In which department would Anna work?", options: [{ target: "Im Verkauf", en: "In sales", correct: false }, { target: "Im Kundenservice", en: "In customer service", correct: true }, { target: "In der Buchhaltung", en: "In accounting", correct: false }] },
      { target: "Welche Arbeitszeiten hat die Stelle?", en: "What are the working hours?", options: [{ target: "8 bis 16 Uhr", en: "8 AM to 4 PM", correct: false }, { target: "9 bis 17 Uhr", en: "9 AM to 5 PM", correct: true }, { target: "10 bis 18 Uhr", en: "10 AM to 6 PM", correct: false }] },
    ],
    [{ target: "erzählen", en: "to tell" }, { target: "die Möglichkeit", en: "possibility/option" }],
    { question: "Erzählen Sie von Ihrer Erfahrung.", questionTranslation: "Tell me about your experience.", options: [
      { text: "Ich habe fünf Jahre Erfahrung in der Kundenkommunikation.", translation: "I have 5 years in client communication.", correct: true },
      { text: "Ich habe noch nie gearbeitet.", translation: "I've never worked.", correct: false },
      { text: "Erfahrung ist nicht wichtig.", translation: "Experience isn't important.", correct: false }
    ] },
  );

  // Module 115: Experience & Skills (B1)
  await addExperience(115, "Presenting Your Work Experience", 2, "Job Interview",
    [
      { target: "Erzählen Sie mir von Ihrer bisherigen Berufserfahrung.", en: "Tell me about your previous work experience." },
      { target: "Ich habe drei Jahre als Projektassistentin gearbeitet.", en: "I worked for three years as a project assistant." },
      { target: "Meine Hauptaufgaben waren Terminplanung und Kundenkommunikation.", en: "My main tasks were scheduling and client communication." },
      { target: "Haben Sie Erfahrung mit Projektmanagement-Software?", en: "Do you have experience with project management software?" },
      { target: "Ja, ich habe mit Trello und Jira gearbeitet.", en: "Yes, I have worked with Trello and Jira." },
    ],
    [{ target: "die Berufserfahrung", en: "work experience", article: "die" }, { target: "die Hauptaufgabe", en: "main task", article: "die" }, { target: "die Terminplanung", en: "scheduling", article: "die" }],
    [
      { target: "Wie lange hat Anna als Projektassistentin gearbeitet?", en: "How long did Anna work as a project assistant?", options: [{ target: "Zwei Jahre", en: "Two years", correct: false }, { target: "Drei Jahre", en: "Three years", correct: true }, { target: "Vier Jahre", en: "Four years", correct: false }] },
      { target: "Mit welcher Software hat sie gearbeitet?", en: "Which software has she worked with?", options: [{ target: "Excel und Word", en: "Excel and Word", correct: false }, { target: "Trello und Jira", en: "Trello and Jira", correct: true }, { target: "Photoshop und Illustrator", en: "Photoshop and Illustrator", correct: false }] },
    ],
    [{ target: "bisherig", en: "previous" }, { target: "die Kundenkommunikation", en: "client communication" }],
    { question: "Der Interviewer stellt eine schwierige Frage. Was tun Sie?", questionTranslation: "The interviewer asks a tough question. What do you do?", options: [
      { text: "Nehmen Sie sich einen Moment Zeit und antworten Sie ruhig.", translation: "Take a moment and answer calmly.", correct: true },
      { text: "Sagen Sie einfach 'Ich weiß nicht'.", translation: "Just say 'I don't know'.", correct: false },
      { text: "Wechseln Sie das Thema.", translation: "Change the subject.", correct: false }
    ] },
  );

  await addExperience(115, "Handling Difficult Questions", 2, "Job Interview",
    [
      { target: "Warum haben Sie Ihren letzten Job gekündigt?", en: "Why did you quit your last job?" },
      { target: "Ich wollte mich beruflich weiterentwickeln.", en: "I wanted to develop professionally." },
      { target: "Gab es keine Aufstiegsmöglichkeiten?", en: "Were there no advancement opportunities?" },
      { target: "Leider nicht. Die Firma war sehr klein.", en: "Unfortunately not. The company was very small." },
      { target: "Das verstehe ich. Hier bieten wir gute Entwicklungschancen.", en: "I understand. Here we offer good development opportunities." },
    ],
    [{ target: "kündigen", en: "to quit/resign" }, { target: "die Aufstiegsmöglichkeit", en: "advancement opportunity" }, { target: "die Entwicklungschance", en: "development opportunity" }],
    [
      { target: "Warum hat Anna ihren letzten Job gekündigt?", en: "Why did Anna quit her last job?", options: [{ target: "Wegen des niedrigen Gehalts", en: "Because of the low salary", correct: false }, { target: "Wegen fehlender Aufstiegsmöglichkeiten", en: "Because of missing advancement opportunities", correct: true }, { target: "Wegen des langen Arbeitswegs", en: "Because of the long commute", correct: false }] },
      { target: "Was bietet die neue Firma?", en: "What does the new company offer?", options: [{ target: "Höheres Gehalt", en: "Higher salary", correct: false }, { target: "Entwicklungschancen", en: "Development opportunities", correct: true }, { target: "Dienstwagen", en: "Company car", correct: false }] },
    ],
    [{ target: "sich weiterentwickeln", en: "to develop further" }, { target: "bieten", en: "to offer" }],
    { question: "Was ist Ihr Gehaltswunsch?", questionTranslation: "What is your salary expectation?", options: [
      { text: "Basierend auf meiner Erfahrung halte ich 55.000 Euro für angemessen.", translation: "Based on my experience, 55k is appropriate.", correct: true },
      { text: "So viel wie möglich.", translation: "As much as possible.", correct: false },
      { text: "Das ist mir egal.", translation: "I don't care.", correct: false }
    ] },
  );

  // Module 116: Common Questions (B1)
  await addExperience(116, "Discussing Salary Expectations", 2, "Job Interview",
    [
      { target: "Welche Gehaltsvorstellungen haben Sie?", en: "What salary expectations do you have?" },
      { target: "Ich habe mich über die übliche Vergütung informiert.", en: "I informed myself about the usual compensation." },
      { target: "Basierend auf meiner Erfahrung finde ich 45.000 Euro angemessen.", en: "Based on my experience, I find 45,000 euros appropriate." },
      { target: "Das liegt in unserem Budget. Bietet Ihnen die Firma auch Zusatzleistungen?", en: "That's within our budget. Does the company also offer you additional benefits?" },
      { target: "Ja, wir zahlen einen Zuschuss zur Kinderbetreuung.", en: "Yes, we pay a subsidy for childcare." },
    ],
    [{ target: "die Gehaltsvorstellung", en: "salary expectation", article: "die" }, { target: "die Vergütung", en: "compensation", article: "die" }, { target: "die Zusatzleistung", en: "additional benefit" }],
    [
      { target: "Welches Gehalt findet Anna angemessen?", en: "What salary does Anna find appropriate?", options: [{ target: "40.000 Euro", en: "40,000 euros", correct: false }, { target: "45.000 Euro", en: "45,000 euros", correct: true }, { target: "50.000 Euro", en: "50,000 euros", correct: false }] },
      { target: "Welche Zusatzleistung bietet die Firma?", en: "What additional benefit does the company offer?", options: [{ target: "Dienstwagen", en: "Company car", correct: false }, { target: "Zuschuss zur Kinderbetreuung", en: "Childcare subsidy", correct: true }, { target: "Kostenloses Mittagessen", en: "Free lunch", correct: false }] },
    ],
    [{ target: "angemessen", en: "appropriate" }, { target: "der Zuschuss", en: "subsidy" }],
    { question: "Das Angebot ist zu niedrig. Was sagen Sie?", questionTranslation: "The offer is too low. What do you say?", options: [
      { text: "Können wir über das Gehalt verhandeln? Meine Qualifikationen rechtfertigen mehr.", translation: "Can we negotiate? My qualifications justify more.", correct: true },
      { text: "Das ist in Ordnung, ich nehme es.", translation: "That's fine, I'll take it.", correct: false },
      { text: "Dann suche ich mir etwas anderes.", translation: "Then I'll find something else.", correct: false }
    ] },
  );

  // Module 117: Salary Negotiation (B2)
  await addExperience(117, "Negotiating a Higher Salary", 3, "Job Interview",
    [
      { target: "Basierend auf meiner Qualifikation und Erfahrung hätte ich 55.000 Euro erwartet.", en: "Based on my qualifications and experience, I would have expected 55,000 euros." },
      { target: "Unser Budget für diese Stelle liegt bei 50.000 Euro.", en: "Our budget for this position is 50,000 euros." },
      { target: "Können wir über zusätzliche Leistungen wie Bonuszahlungen sprechen?", en: "Can we talk about additional benefits like bonus payments?" },
      { target: "Ja, wir bieten einen jährlichen Leistungsbonus von bis zu 10 Prozent.", en: "Yes, we offer an annual performance bonus of up to 10 percent." },
      { target: "Damit könnte ich leben. Dann nehmen wir den Vertrag an.", en: "I could live with that. Let's accept the contract then." },
    ],
    [{ target: "die Qualifikation", en: "qualification", article: "die" }, { target: "die Bonuszahlung", en: "bonus payment" }, { target: "der Leistungsbonus", en: "performance bonus" }],
    [
      { target: "Welches Gehalt hat Anna erwartet?", en: "What salary did Anna expect?", options: [{ target: "50.000 Euro", en: "50,000 euros", correct: false }, { target: "55.000 Euro", en: "55,000 euros", correct: true }, { target: "60.000 Euro", en: "60,000 euros", correct: false }] },
      { target: "Was bietet die Firma zusätzlich an?", en: "What does the company offer additionally?", options: [{ target: "Einen Dienstwagen", en: "A company car", correct: false }, { target: "Einen Leistungsbonus", en: "A performance bonus", correct: true }, { target: "Aktienoptionen", en: "Stock options", correct: false }] },
    ],
    [{ target: "erwarten", en: "to expect" }, { target: "jährlich", en: "annual" }],
    { question: "Sie bekommen den Vertrag. Was prüfen Sie?", questionTranslation: "You receive the contract. What do you check?", options: [
      { text: "Ich möchte die Kündigungsfrist und die Probezeit prüfen.", translation: "I'd like to check the notice period and probation.", correct: true },
      { text: "Unterschreiben Sie einfach.", translation: "Just sign it.", correct: false },
      { text: "Ist das Papier recycelt?", translation: "Is the paper recycled?", correct: false }
    ] },
  );

  await addExperience(117, "Discussing Contract Details", 3, "Job Interview",
    [
      { target: "Ich habe den Arbeitsvertrag erhalten und durchgelesen.", en: "I received the employment contract and read through it." },
      { target: "Haben Sie Fragen zu bestimmten Klauseln?", en: "Do you have questions about specific clauses?" },
      { target: "Die Probezeit beträgt sechs Monate. Ist das verlängerbar?", en: "The probation period is six months. Is it extendable?" },
      { target: "Normalerweise nicht. Aber in Ausnahmefällen können wir verlängern.", en: "Usually not. But in exceptional cases we can extend." },
      { target: "Und wie viele Urlaubstage habe ich pro Jahr?", en: "And how many vacation days do I have per year?" },
    ],
    [{ target: "der Arbeitsvertrag", en: "employment contract", article: "der" }, { target: "die Probezeit", en: "probation period", article: "die" }, { target: "der Urlaubstag", en: "vacation day", article: "der" }],
    [
      { target: "Wie lange ist die Probezeit?", en: "How long is the probation period?", options: [{ target: "Drei Monate", en: "Three months", correct: false }, { target: "Sechs Monate", en: "Six months", correct: true }, { target: "Neun Monate", en: "Nine months", correct: false }] },
      { target: "Ist die Probezeit verlängerbar?", en: "Is the probation period extendable?", options: [{ target: "Nein, nie", en: "No, never", correct: false }, { target: "In Ausnahmefällen ja", en: "In exceptional cases, yes", correct: true }, { target: "Ja, immer", en: "Yes, always", correct: false }] },
    ],
    [{ target: "durchlesen", en: "to read through" }, { target: "die Klausel", en: "clause" }],
    { question: "Sie werden nach Ihrer Technik gefragt. Was sagen Sie?", questionTranslation: "You're asked about your technical skills. What do you say?", options: [
      { text: "Ich beherrsche Python, JavaScript und Datenbanken.", translation: "I'm proficient in Python, JS, and databases.", correct: true },
      { text: "Ich kann sehr gut tippen.", translation: "I can type very fast.", correct: false },
      { text: "Technik ist nicht mein Bereich.", translation: "Tech is not my area.", correct: false }
    ] },
    undefined,
    [
      { text: "der Arbeitsvertrag", translation: "employment contract", correctValue: "contract" },
      { text: "die Probezeit", translation: "probation period", correctValue: "probation" },
      { text: "die Klausel", translation: "clause", correctValue: "clause" }
    ],
  );

  // Module 118: Technical Discussion (B2)
  await addExperience(118, "Technical Interview Questions", 3, "Job Interview",
    [
      { target: "Wie würden Sie ein Team durch eine schwierige Projektphase führen?", en: "How would you lead a team through a difficult project phase?" },
      { target: "Zuerst würde ich die Probleme identifizieren und priorisieren.", en: "First, I would identify and prioritize the problems." },
      { target: "Dann würde ich klare Ziele setzen und Aufgaben verteilen.", en: "Then I would set clear goals and distribute tasks." },
      { target: "Wie gehen Sie mit Konflikten im Team um?", en: "How do you handle conflicts in the team?" },
      { target: "Ich spreche offen mit allen Beteiligten und suche eine gemeinsame Lösung.", en: "I speak openly with all involved and look for a joint solution." },
    ],
    [{ target: "identifizieren", en: "to identify" }, { target: "priorisieren", en: "to prioritize" }, { target: "der Konflikt", en: "conflict" }],
    [
      { target: "Was würde Anna zuerst tun?", en: "What would Anna do first?", options: [{ target: "Aufgaben verteilen", en: "Distribute tasks", correct: false }, { target: "Probleme identifizieren", en: "Identify problems", correct: true }, { target: "Ziele setzen", en: "Set goals", correct: false }] },
      { target: "Wie geht Anna mit Konflikten um?", en: "How does Anna handle conflicts?", options: [{ target: "Sie ignoriert sie", en: "She ignores them", correct: false }, { target: "Sie spricht offen mit allen", en: "She speaks openly with everyone", correct: true }, { target: "Sie geht zum Vorgesetzten", en: "She goes to the supervisor", correct: false }] },
    ],
    [{ target: "führen", en: "to lead" }, { target: "die Lösung", en: "solution" }],
    { question: "Das Interview endet. Was sagen Sie?", questionTranslation: "The interview ends. What do you say?", options: [
      { text: "Vielen Dank für das Gespräch. Ich freue mich auf Ihre Rückmeldung.", translation: "Thank you. I look forward to your response.", correct: true },
      { text: "Endlich vorbei!", translation: "Finally over!", correct: false },
      { text: "Kann ich jetzt gehen?", translation: "Can I leave now?", correct: false }
    ] },
  );

  await addExperience(118, "Closing the Interview", 3, "Job Interview",
    [
      { target: "Haben Sie noch Fragen an uns?", en: "Do you have any more questions for us?" },
      { target: "Ja, wie sieht der Einarbeitungsplan für neue Mitarbeiter aus?", en: "Yes, what does the onboarding plan for new employees look like?" },
      { target: "In der ersten Woche bekommen Sie eine umfassende Einführung.", en: "In the first week, you'll get a comprehensive introduction." },
      { target: "Danach arbeiten Sie mit einem Mentor zusammen.", en: "After that, you'll work with a mentor." },
      { target: "Das klingt sehr strukturiert. Ich freue mich auf die Zusammenarbeit!", en: "That sounds very structured. I look forward to working together!" },
    ],
    [{ target: "der Einarbeitungsplan", en: "onboarding plan", article: "der" }, { target: "der Mentor", en: "mentor" }, { target: "die Zusammenarbeit", en: "collaboration" }],
    [
      { target: "Was passiert in der ersten Woche?", en: "What happens in the first week?", options: [{ target: "Man bekommt eine Einführung", en: "You get an introduction", correct: true }, { target: "Man beginnt sofort mit der Arbeit", en: "You start working immediately", correct: false }, { target: "Man unterschreibt den Vertrag", en: "You sign the contract", correct: false }] },
      { target: "Mit wem arbeitet der neue Mitarbeiter nach der Einführung?", en: "Who does the new employee work with after the introduction?", options: [{ target: "Mit dem Chef", en: "With the boss", correct: false }, { target: "Mit einem Mentor", en: "With a mentor", correct: true }, { target: "Alleine", en: "Alone", correct: false }] },
    ],
    [{ target: "umfassend", en: "comprehensive" }, { target: "strukturiert", en: "structured" }],
    { question: "Was machen Sie zuerst am Automaten?", questionTranslation: "What do you do first at the machine?", options: [
      { text: "Drücken Sie auf 'Fahrkarte kaufen'.", translation: "Press 'Buy ticket'.", correct: true },
      { text: "Rufen Sie den Techniker an.", translation: "Call the technician.", correct: false },
      { text: "Gehen Sie zum nächsten Automaten.", translation: "Go to the next machine.", correct: false }
    ] },
  );
}