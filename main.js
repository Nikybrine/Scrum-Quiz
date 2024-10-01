document.addEventListener('DOMContentLoaded', function() {
  const questionData = `
Was ist Scrum?;Scrum ist ein Vorgehensmodell für agile Softwareentwicklung und Projektmanagement, das in den 1990er Jahren von Jeff Sutherland und Ken Schwaber entwickelt wurde.;Scrum ist eine Sportart, bei der zwei Teams gegeneinander antreten.;Scrum ist ein Tool zur Automatisierung von Softwaretests.
Worauf basiert Scrum?;Scrum basiert auf Empirie und Lean Thinking.;Scrum basiert auf traditionellen Wasserfallmodellen.;Scrum basiert ausschließlich auf mathematischen Algorithmen.
Was sind die drei Säulen von Scrum?;Die drei Säulen von Scrum sind Transparenz, Überprüfung und Anpassung.;Die drei Säulen von Scrum sind Planung, Entwicklung und Test.;Die drei Säulen von Scrum sind Hierarchie, Kontrolle und Dokumentation.
Welche fünf Werte sind zentral für Scrum?;Die fünf zentralen Werte von Scrum sind Commitment, Fokus, Offenheit, Respekt und Mut.;Die fünf zentralen Werte von Scrum sind Perfektion, Effizienz, Konkurrenz, Autorität und Stabilität.;Die fünf zentralen Werte von Scrum sind Individualität, Geheimhaltung, Spezialisierung, Formalität und Vorhersagbarkeit.
Aus welchen Rollen besteht ein Scrum Team?;Ein Scrum Team besteht aus einem Scrum Master, einem Product Owner und Entwicklern (Developers).;Ein Scrum Team besteht aus einem Projektmanager, einem Architekten und Programmierern.;Ein Scrum Team besteht aus einem CEO, einem CTO und Abteilungsleitern.
Was ist die Aufgabe des Product Owners?;Der Product Owner ist verantwortlich für die Maximierung des Produktwerts und das Management des Product Backlogs.;Der Product Owner ist verantwortlich für die technische Implementierung des Produkts.;Der Product Owner ist verantwortlich für die Personalverwaltung des Teams.
Welche Rolle hat der Scrum Master?;Der Scrum Master ist verantwortlich für die Etablierung von Scrum, die Verbesserung der Effektivität des Scrum Teams und die Beseitigung von Hindernissen.;Der Scrum Master ist der technische Leiter des Entwicklungsteams.;Der Scrum Master ist der direkte Vorgesetzte aller Teammitglieder.
Was ist ein Sprint?;Ein Sprint ist ein zeitlich begrenzter Arbeitsabschnitt von 1-4 Wochen, in dem ein fertiges Inkrement erstellt wird.;Ein Sprint ist eine tägliche Teambesprechung.;Ein Sprint ist die finale Testphase vor der Produktveröffentlichung.
Welche Ereignisse gibt es in Scrum?;Die Scrum-Ereignisse sind Sprint Planning, Daily Scrum, Sprint Review und Sprint Retrospective.;Die Scrum-Ereignisse sind Kickoff-Meeting, Wochenbericht, Abnahmetest und Projektabschluss.;Die Scrum-Ereignisse sind Brainstorming, Codefreeze, Debugging und Release.
Was ist das Ziel des Sprint Planning?;Das Ziel des Sprint Planning ist es, die Arbeit für den kommenden Sprint zu planen.;Das Ziel des Sprint Planning ist es, das gesamte Projekt von Anfang bis Ende zu planen.;Das Ziel des Sprint Planning ist es, die Arbeit des letzten Sprints zu bewerten.
Wie lange dauert ein Daily Scrum?;Ein Daily Scrum dauert maximal 15 Minuten.;Ein Daily Scrum dauert mindestens eine Stunde.;Ein Daily Scrum dauert genau 45 Minuten.
Was ist der Zweck des Sprint Review?;Der Zweck des Sprint Review ist es, das Ergebnis des Sprints zu überprüfen und zukünftige Anpassungen festzulegen.;Der Zweck des Sprint Review ist es, individuelle Leistungsbeurteilungen durchzuführen.;Der Zweck des Sprint Review ist es, detaillierte Planungen für den nächsten Sprint vorzunehmen.
Was wird in der Sprint Retrospective besprochen?;In der Sprint Retrospective wird besprochen, wie der letzte Sprint in Bezug auf Personen, Beziehungen, Prozesse und Werkzeuge verlaufen ist.;In der Sprint Retrospective werden ausschließlich technische Probleme diskutiert.;In der Sprint Retrospective wird die Marketingstrategie für das Produkt festgelegt.
Was sind die Scrum-Artefakte?;Die Scrum-Artefakte sind das Product Backlog, das Sprint Backlog und das Inkrement.;Die Scrum-Artefakte sind der Projektplan, das Gantt-Diagramm und der Abschlussbericht.;Die Scrum-Artefakte sind das Lastenheft, das Pflichtenheft und die Technische Dokumentation.
Was ist das Product Backlog?;Das Product Backlog ist eine geordnete Liste aller Dinge, die für das Produkt benötigt werden.;Das Product Backlog ist eine Liste aller Fehler im Produkt.;Das Product Backlog ist ein detaillierter Zeitplan für die Produktentwicklung.
Was enthält das Sprint Backlog?;Das Sprint Backlog enthält das Sprint-Ziel, die für den Sprint ausgewählten Product Backlog-Einträge und einen Plan zur Lieferung des Inkrements.;Das Sprint Backlog enthält eine vollständige Liste aller Produktfunktionen.;Das Sprint Backlog enthält die Urlaubsplanung des Teams.
Was ist ein Inkrement?;Ein Inkrement ist ein konkreter Schritt in Richtung des Produkt-Ziels und muss verwendbar sein.;Ein Inkrement ist eine vollständige Neuimplementierung des gesamten Produkts.;Ein Inkrement ist ein Dokument, das alle Änderungen am Produkt beschreibt.
Was ist die Definition of Done?;Die Definition of Done ist eine formale Beschreibung des Zustands des Inkrements, wenn es die erforderlichen Qualitätsmaßnahmen erfüllt.;Die Definition of Done ist eine Liste aller Funktionen, die das Produkt haben soll.;Die Definition of Done ist ein Vertrag zwischen dem Entwicklungsteam und dem Kunden.
Was ist eine User Story?;Eine User Story ist eine kurze, einfache Beschreibung einer Produktfunktion aus der Perspektive des Endnutzers.;Eine User Story ist ein detaillierter technischer Spezifikationsbericht.;Eine User Story ist eine Sammlung von Testfällen für eine bestimmte Funktion.
Wie ist eine User Story strukturiert?;Eine User Story ist strukturiert als: "Als [Nutzer] möchte ich [Funktion], damit/um/weil [Wert].";Eine User Story ist strukturiert als: "Das System soll [Funktion] implementieren.";Eine User Story ist strukturiert als: "Der Entwickler muss [technische Details] umsetzen."
Was sind Akzeptanzkriterien in Bezug auf User Stories?;Akzeptanzkriterien sind die fachlichen Anforderungen, die eine User Story zum Zeitpunkt der Abnahme erfüllen muss.;Akzeptanzkriterien sind die persönlichen Vorlieben des Product Owners.;Akzeptanzkriterien sind die technischen Spezifikationen der Entwicklungsumgebung.
Wie können User Stories zur Anforderungsformulierung genutzt werden?;User Stories können als Standard für die Formulierung von Anforderungen in Scrum-Teams und zur Pflege des Backlogs genutzt werden.;User Stories können nur zur internen Kommunikation im Entwicklungsteam genutzt werden.;User Stories können ausschließlich zur Erstellung von Marketingmaterial verwendet werden.
Was ist der Unterschied zwischen Epics, Features und Stories in der Backlog-Organisation?;Epics sind weit gefasste Funktionsbereiche, Features sind konkrete Leistungsmerkmale innerhalb eines Epics, und Stories sind User Stories innerhalb eines Features.;Epics, Features und Stories sind verschiedene Namen für dasselbe Konzept und können beliebig ausgetauscht werden.;Epics sind kleine Aufgaben, Features sind mittlere Aufgaben und Stories sind große Aufgaben.
Wie lang ist ein Sprint typischerweise?;Ein Sprint dauert typischerweise zwischen 1 und 4 Wochen.;Ein Sprint dauert typischerweise zwischen 3 und 6 Monaten.;Ein Sprint hat keine feste Länge und kann beliebig lang sein.
Was ist das Ziel des Daily Scrums?;Das Ziel des Daily Scrums ist es, den Fortschritt in Richtung des Sprint-Ziels zu überprüfen und das Sprint Backlog bei Bedarf anzupassen.;Das Ziel des Daily Scrums ist es, dem Management einen detaillierten Statusbericht zu geben.;Das Ziel des Daily Scrums ist es, technische Probleme im Detail zu lösen.
Wer ist für die Größenbestimmung der Product Backlog-Einträge verantwortlich?;Die Entwickler (Developers) sind für die Größenbestimmung der Product Backlog-Einträge verantwortlich.;Der Product Owner ist allein für die Größenbestimmung der Product Backlog-Einträge verantwortlich.;Der Scrum Master ist allein für die Größenbestimmung der Product Backlog-Einträge verantwortlich.
Was ist das Produkt-Ziel?;Das Produkt-Ziel beschreibt einen zukünftigen Zustand des Produkts, der dem Scrum Team als Planungsziel dienen kann.;Das Produkt-Ziel ist eine detaillierte technische Spezifikation des Endprodukts.;Das Produkt-Ziel ist die Summe aller User Stories im Product Backlog.
Wie oft sollte das Product Backlog verfeinert werden?;Das Product Backlog sollte kontinuierlich verfeinert werden.;Das Product Backlog sollte nur einmal zu Beginn des Projekts erstellt und dann nicht mehr verändert werden.;Das Product Backlog sollte nur am Ende jedes Sprints aktualisiert werden.
Was ist der Zweck der Sprint Retrospective?;Der Zweck der Sprint Retrospective ist es, Wege zur Steigerung von Qualität und Effektivität zu planen.;Der Zweck der Sprint Retrospective ist es, individuelle Leistungsbeurteilungen durchzuführen.;Der Zweck der Sprint Retrospective ist es, das nächste Produktrelease zu planen.
Wie viele Personen sollte ein Scrum Team idealerweise haben?;Ein Scrum Team sollte idealerweise 10 oder weniger Personen haben.;Ein Scrum Team sollte idealerweise mindestens 20 Personen haben.;Die Größe eines Scrum Teams spielt keine Rolle und kann beliebig sein.
Was passiert, wenn ein Product Backlog-Eintrag nicht der Definition of Done entspricht?;Wenn ein Product Backlog-Eintrag nicht der Definition of Done entspricht, kann er nicht released oder beim Sprint Review präsentiert werden und wandert zurück ins Product Backlog.;Wenn ein Product Backlog-Eintrag nicht der Definition of Done entspricht, wird er automatisch aus dem Projekt entfernt.;Wenn ein Product Backlog-Eintrag nicht der Definition of Done entspricht, wird er trotzdem veröffentlicht und später korrigiert.
Wer erstellt das Sprint-Ziel?;Das Sprint-Ziel wird während des Sprint Planning-Events vom gesamten Scrum Team erstellt.;Das Sprint-Ziel wird ausschließlich vom Product Owner festgelegt.;Das Sprint-Ziel wird vom Management vorgegeben und kann nicht vom Team beeinflusst werden.
Was ist der Unterschied zwischen dem Product Backlog und dem Sprint Backlog?;Das Product Backlog enthält alle Anforderungen für das Produkt, während das Sprint Backlog die für den aktuellen Sprint ausgewählten Einträge und einen Plan zu deren Umsetzung enthält.;Das Product Backlog und das Sprint Backlog sind identisch und können synonym verwendet werden.;Das Product Backlog enthält technische Details, während das Sprint Backlog Kundenanforderungen enthält.
`
;
  const questions = parseCSV(questionData);
  displayRandomQuestion(questions);
});

function parseCSV(csv) {
  const lines = csv.trim().split('\n');
  const questions = lines.map(line => {
    const [question, correctAnswer, ...wrongAnswers] = line.split(';');
    return { question, correctAnswer, answers: [correctAnswer, ...wrongAnswers] };
  });
  return questions;
}

let currentStreak = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayRandomQuestion(questions) {
  const questionContainer = document.getElementById('questionContainer');
  questionContainer.innerHTML = '';

  const randomIndex = Math.floor(Math.random() * questions.length);
  const questionObj = questions[randomIndex];

  const questionElement = document.createElement('div');
  questionElement.textContent = questionObj.question;
  questionContainer.appendChild(questionElement);

  const answersToDisplay = [...questionObj.answers];
  shuffleArray(answersToDisplay);

  const answerButtons = [];
  let correctButton = null;

  answersToDisplay.forEach(answer => {
    const answerButton = document.createElement('button');
    answerButton.textContent = answer;
    answerButton.style.cursor = 'pointer';
    answerButton.style.padding = '10px';
    answerButton.style.borderRadius = '8px';

    if (answer === questionObj.correctAnswer) {
      correctButton = answerButton;
    }
    
    answerButton.addEventListener('click', function() {
      disableButtons(answerButtons);

      if (answer === questionObj.correctAnswer) {
        answerButton.style.backgroundColor = 'green';
        currentStreak += 1;
        document.getElementById('streak').textContent = currentStreak;

        setTimeout(() => displayRandomQuestion(questions), 1000);
      } else {
        answerButton.style.backgroundColor = 'red';
        correctButton.style.backgroundColor = 'green';
        currentStreak = 0;
        document.getElementById('streak').textContent = currentStreak;

        setTimeout(() => displayRandomQuestion(questions), 5000);
      }
    });

    questionContainer.appendChild(answerButton);
    answerButtons.push(answerButton);
  });
}

function disableButtons(buttons) {
  buttons.forEach(button => button.disabled = true);
}
