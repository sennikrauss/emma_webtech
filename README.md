# Funktionalitäten
  Login
> - Eingabe von Benutzernamen und Passwort
> - bei Nicheingabe kommt eine Fehlermeldung, dass keine Daten eingetragen wurden
> - bei falscher Eingabe der Daten kann man nicht submitten
> - Button "Registrieren"

  Registrieren
> - Eingabe von Benutzernamen (Fehlermeldung, wenn Mindestlänge unterschritten)
> - Eingabe von E-Mail (Fehlermeldung, wenn kein E-Mail-Format)
> - Eingabe von Passwort (Fehlermeldung, wenn Mindestlänge unterschritten)
> - Button Zurück zu Login

  Navbar
> - sieht man nur nach erfolgreicher Anmeldung
> - responsiv: bei schmaler View erscheint Button mit 3 Strichen, auf den man klicken kann und dann erscheinen die Navbarinhalte untereinander; bei breiter View erscheinen alle Inhalte sofort nebeneinander
> - sobald man auf einen Navbar-Link klickt, signalisiert ein weißer Überstrich, auf welcher Seite sich die Userin befindet

  Startseite
> - sich wechselnde Startseiten-Bilder (Carousel/Slider) alle paar Sekunden
> - Carousel bewegt sich, wenn die Maus außerhalb befindet

  Lagerort & Kategorie
> - Anreihung verschiedener Lagerorte/Kategorien in einem Raster (responsiv)
> - sind mit dem Backend verbunden: Formulare für Hinzufügen, Bearbeiten, Löschen der Lagerort-/Kategorienkarten
> - Icons für Löschen und Bearbeiten
> - bei Klick auf eine Karte wird die Sortimentstabelle nach dieser/m Kategorie/Lagerort gefiltert angezeigt
> - Sobald ein/e Kategorie/Lagerort gelöscht wird, ist der dazugehörige Artikel zwar aus der Sortimentstabelle "verschwunden", aber in der Datenbank noch zu sehen


  Sortiment
> - responsive Tabelle mit horizontalen Schiebe-Regler (Balken)
> - mit dem Backend verbunden: Formulare für Hinzufügen, Bearbeiten, Löschen von Artikeln
> - Formularüberprüfung beim Hinzufügen und Bearbeiten von Inhalten (Überprüfung zb. ob Zahlwerte eingegeben wurden)
> - Bei Eingabe eines Datums, erscheint ein kleiner Kalender zum Wählen des Datums (funktioniert nur in Google Chrome!)
> - beim Hinzufügen und Bearbeiten eines Artikels kann man eine/n Kategorie/Lagerort in einer Dropdown-Liste auswählen; diese Liste ist stets auf dem aktuellen Stand: sobald ein Lagerort/Kategorie verändert oder eingefügt wurde, erscheint dieses auch in der Liste.

  Logout
> - Icon (und Text) in der Navbar für Logout
> - sobald Klick auf Logout kommt die Frage, ob man wirklich ausgeloggt werden oder wieder zurück zur Seite möchte
> - bei Klick auf "yes, log out", gelangt man wieder zum Login
