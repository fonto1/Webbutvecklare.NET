Med flera lyckade webbutvecklingsuppdrag bakom dig har du bestämt dig för utveckla en egen applikation, tillsammans med en god vän med kunskap om distribution och försäljning har ni slagit er ihop och bildat en startup: Yes! Do it!

Yes! Do it! AB (YDIAB) ska utveckla en applikation till andra småföretagare som hjälper till att sammordna vad som behöver göras i diverse projekt, löst baserat på Getting Things Done (Länkar till en externa sida.) metoden. Er applikation ska vara anpassad för sammarbete över flera olika typer av gränsnitt och därför har ni bestämt er för att lösa detta via ett API som gör att ni dynamiskt kan skapa flera olika klientgränsnitt i takt med att bolaget växer fram. Viktigast att få på plats först är dock en databas och någon typ av användaridentifikation för att kunna avgöra vilka uppgifter som hör till vilken person.

Ni har bestämt er för att få dessa två viktiga punkter på plats först tillsammans med ett snyggt, användarvänligt (eller iallafall något fungerande) användargränssnitt för att visa möjliga kunder och investerare.

Det viktigaste för kunderna om de ska gå över från sina gamla Post-It lappar till ditt API är att uppgifterna lagras i molnet även när man stänger av sin personliga dator. Samt att de lagras säkert utan att någon obehörig kan komma åt dem. Detta är alltså de funktioner som måste finnas på plats först. I övrigt har du och din kompis bollat mängder av idéer om hur API:et ska se ut och fungera, några har ni spikat och skrivit ner i en kravlista, resten av detaljerna låter hen dig som blivande webbutvecklar-expert avgöra vad som är bäst.

## API

API:et ska vara tillgänglig publikt för alla, men all funktionalitet, undantaget att logga in eller registera sig, att ska begränsas till inloggade och auktoriererade användare!

## Krav:

- [x] Din API lösning ska vara byggt i ASP.NET Core, version 3.0 eller 3.1.
- [x] En användare ska kunna registerara sig, logga in & logga ut i API:et.
- [x] En användare ska med hänsyn till GDPR kunna ta bort sig själv ur systemet.
- [x] En uppgift ska alltid vara kopplad till en lista.
- [x] En lista tillhör alltid en användare.
- [x] Listor har ett givet namn samt en beskrivning.
- [x] Bara inloggade användare kan skapa nya listor och uppgifter.
- [x] En uppgift kan markeras som utförd eller inte utförd.
- [x] Man ska kunna ta bort både listor och uppgifter, samt uppdatera alla detaljer.
- [x] En uppgift har en titel som beskriver vad som ska göras samt en lista med taggar.
- [x] Man ska via en åtkomstpunkt kunna söka på uppgifter i alla sina listor efter vilka taggar den har.
- [x] En användare ska kan bjuda in andra användare till en lista.
- [x] En inbjuden användare kan se och markera uppgifter i listan som avklarade.
- [x] Bara användaren som skapade listan kan ta bort en uppgift eller listan.
- [x] Endast användaren som skapade listan ska ha möjlighet att skapa nya uppgifter.
- [x] Autentisering och tillståndshantering ska vara implementerat med ett lämplig säkerhetsramverk, exempelvis Core Identity.
- [x] Uppgifter och listor ska sparas permanent i en databas och finnas kvar mellan körningar av API:et.
- [x] Samtliga åtkomstpunkter förutom registrering och inloggning ska vara skyddade från åtkomst av icke-auktoriserade anrop.

## En uppgift:

Huvudresursen i API:et kommer att vara uppgifter som måste utföras, todos, en typiskt todo kan visualiseras så här:

Vad vi ser här är en Todo: Ta en cykeltur nästan gång det är soligtsom har flera taggar: utomhus, värnamo, hälsa, fintvänder. Den ligger i en lista: "Min Lista", som har beskrivningen "Detta är ett exempel på en lista".

## Tips:

En viktig aspekt av API:et är att man kan lägga till andra användare i sina listor som kan se och utföra uppgifter, men inte ändra något annat. Detta gör det möjligt att sammarbeta kring vad som behöver göras, och viktigt att du får en bra struktur på detta. GÅr det kanske att tänka på detta som olika användarnivåer?

En annan viktig aspekt är taggarna på varje uppgift. Listan som taggen ligger i avgör varför en uppgift behöver göras, men genom att exempelvis söka på taggen #fintväder kan en användare se alla uppgifter som hen kan få gjort på en dag då det är soligt ute. ☀️

## Klientgränsnittet

Det är viktigt för att din affärspartner ska kunna testa och använda systemet, och sälja in det till potentiella kunder att det finns någon typ av klientgränsnitt. I detta tidiga skede av utvecklingen så behöver det dock inte vara vackert!

## Krav:

- [x] Alla ovanstående krävda funktioner i API:et ska alla gå att använda från klientgränsnittet.
- [x] Man ska kunna logga in och ut ur systemet, och hämta sina listor och uppgifter från API:et.
- [x] Systemet måste vara användbart men inte användarvänligt.

## Tips:

Tänk på att din valda säkerhetsmetodik i ditt API ställer olika krav på en fungerande struktur på klientsidan. Exempelvis hur du ser till att din JWT eller säkerhetskoder följer med i efterföljande anrop efter att du loggat in. Gränsnittet behöver inte vara snyggt utan kan fungera endast för att visualisera att ditt API fungerar så som du designat det. Kom ihåg att i din rapport beskriva hur du tänkt kring din struktur på klientsidan och ev. val gällande användarbarhet.

## Rapporten

Du ska även denna gång lämna in en teknisk rapport som reflekterar och motiverar designvalen gjorda för att skapa din lösning.

## Krav:

Rapporten ska innehålla...

- [x] En länk till gitrepot med implementationen av REST APIet och ett tillhörande klientgränsnitt.
- [x] En mycket kort dokumentation över åtkomstpunkterna i API:et och vad dom retunerar för information.
- [x] En kort reflektion över utformningen av API:et för att uppfylla kraven, och över användarbetheten hos klientgränsnittet.

## Tips:

Tänk på att motivera dina ställningstaganden för att uppnå högre betyg på uppgiften! Svara förslagsvis på följande frågor i din rapport:

- [x] På vilket sätt sparas uppgifterna i databasen?
- [x] Vilken säkerhetslösning är implementerad i API:et
- [x] Hur garanteras det att inte information lämnas till obehöriga anrop?
- [x] Används några åtkomstpunkter som är funktionella, av vilken anledning?
- [x] Används någon form av versionering, varför/varför inte?

## Kom igång

Börja med att identifiera och skissa upp hur ditt nya API skall fungera. Använd med fördel ett entitetsdiagram för att visualisera relationer mellan de resurser/datamodeller du skapar. Fundera på om du behöver några funktionella delar av ditt API, och kom ihåg att motivera valet av dessa i din rapport. I denna uppgift är det ett krav att använda en databas, så förslagsvis så bygger du en fungerande datamodell först, implementerar entiteterna som behövs och testar detta innan du kommer för långt med ditt klientgränsnitt.

Tänk på att påbörja skrivandet av din rapport under tiden du implementerar din kod, för ett bättre resultat på både kod och rapport.

Både klientgränsnittet och REST API:et ska ligga i samma GIT Repo, använd med fördel följande länk för att skapa ett nytt repo från GitHub Classroom som är förberett för inlämning:

Yes Do It API på GH Classroom (Länkar till en externa sida.)

Kom ihåg: Ditt repo måste vara privat, publika repon kommer att underkännas. Om du inte använder Classroom länken så måste du bjuda in rättande lärare (Lyret och Pickadolly) till ditt repo manuellt.

Vad ska jag lämna in: Du ska lämna in en skriftlig rapport i PDF format samt en teknisk implementation av din lösning via länk till ett privat github repo som innehåller både ett klientgränsnitt och ett REST API.

Lycka till!
