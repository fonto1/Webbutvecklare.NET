Välkommen till inlämningsuppgift fyra. Kom ihåg att tolka och stäm av att du förstått följande kravlista i god tid innan du påbörjar arbetet med uppgiften, tänk på att också läsa igenom Inför uppgiften för tips och tankar, samt ytterligare förtydliganden av uppgiften.

## Kravlista

För betyget Godkänt på uppgiften måste krav på minst 50 poäng uppfyllas vid inlämning. I kravlistan listas även vilka andra krav som är kriterium som också ska vara uppfyllda för att kunna få poäng från kravet. Om de krav som listats som kriterium inte är uppfyllda går det inte att få poäng på det kravet.

För betyget Väl Godkänt på uppgiften måste minst 20 poäng som är VG meriterande vara uppfyllda, se underrubriken "Reflektion", dessutom måste hela inlämningen nå upp till 80 poäng.

Din inlämning på Canvas ska bestå av en PDF fil (rapport), rapporten ska innehålla namnet på uppgiften + ditt namn, samt en tydlig rubrik per specificerade listade krav nedan. Bifoga i din rapport en länk där källkoden är tillgänglig, det ska gå att se och granska koden enligt övriga nedanstående krav. Detta är förutsättningar för att uppgiften ska räknas som korrekt inlämnad.

Inlämning och källkodshantering
Du ska i din inlämning hänvisa till ett lämpligt valt och hanterat källkodshanteringssystem (läranderesultat 7). Dessa krav ska därför påvisas genom den valda källkodshänvisningen i rapporten som har lämnats in.

Nummer Poäng Kriterium Beskrivning

- [x] k1, 5 poäng Ditt inlämnade arbete ska fortsätta från samma källkodsprojekt (repo) som Inlämningsuppgifterna 1 och 3.
- [x] k2, 1 poäng k1 I din källkod ska filen readme.md vara uppdaterad med korrekt information för att applikationen ska gå att starta och test-använda.
- [x] k3, 3 poäng I din källkod ska en api.md fil återfinns med rubriken Paket där de paket/ramverk och bibliotek som är installerade är listade du kortfattat beskrivit deras användningsområde.
- [x] k4, 3 poäng k3, s1 eller s2 I api.md ska även rubriken Tjänster finnas där du listar och beskriver alla REST API:er som används i din källkod.
- [x] k5, 4 poäng En inställning finns i ditt källkodsprojekt för att utesluta de filer som genereras vid byggen och paket som kan installeras via npm.

## Applikation

Du ska i denna uppgift fortsätta med vidareutvecklingen av din prototyp, och påvisa att du har färdighet i att skapa en webbapplikation med dynamiskt användargränssnitt (läranderesultat 5). Följande krav ska påvisas genom implementation i din inlämnande källkod.

Nummer Poäng Kriterium Beskrivning

- [x] a1, 4 poäng Minst en eget skriven funktion/metod i applikationen ska vara asynkron och anropa ytterligare en funktion som är asynkron - antingen via nyckelorden Async/Await eller via användningen av ett/flera Promise-objekt.
- [x] a2, 3 poäng a1 Den asynkrona koden (a1) ska vara implementerad med lämplig och korrekt fungerande felhantering.
- [x] a3, 3 poäng k1 Applikationen ska bestå av ytterligare 5 st nya React komponenter som du skrivit själv med hjälp av JSX, och som inte varit en del av tidigare inlämningar.
- [x] a4, 2 poäng a3 En av de nya React komponenterna (a3) ska vara en "Error Boundry"-komponent.
- [x] a5, 3 poäng k1 Paketet Prop-Types ska vara installerat och användas i applikationen på minst 4 st eget skrivna komponenter.

## Server kommunikation

Din prototyp ska i denna inlämning vidareutvecklas med kommunikation och dataöverföring till ett externt eller inkluderat REST-API (läranderesultat 4). Följande krav ska påvisas genom implementation i in inlämnande källkod.

Nummer Poäng Kriterium Beskrivning

- [x] s1, 4 poäng a3 Din applikation ska hämta och visa information för användaren som hämtas via anrop till ett externt REST API.
- [x] s2, 4 poäng k1 Din applikation ska skicka information skapad från interaktion med användaren till ett externt REST API.
- [x] s3, 3 poäng k1 Välj, installera och använd i din applikation ett färdigt javascript paket för server-kommunikation eller tillståndsvalidering.
- [x] s4, 4 poäng s1 eller s2 Kommunikationen till externa Webb-API:er i applikationen ska vara väl avgränsat från applikationens UI med hjälp av lämplig kodstruktur.

## Dokumentation

Redogör för olika former av datalagring som finns tillgänglig på klientsidan (läranderesultat 3). Dessa krav ska uppfyllas genom att du besvarar dem i din inlämnande rapport, använd varje krav som som rubrik precis som i tidigare inlämningsuppgifter.

Nummer Poäng Kriterium Beskrivning

- [x] d1, 5 poäng Benämn och beskriv kort 3 st olika platser för datalagring som finns tillgänglig i en webbapplikation på klientsidan. Beskriv enbart de typer av platser där information kan sparas som är kvar mellan de tillfällen applikationen används av användaren. (ung. 1 kort paragraf per nämnd plats).
- [x] d2, 5 poäng d1 Vad är viktigt att tänka på vid val av datalagringsplats ur en utvecklares perspektiv? (ung. 2 paragrafer)
- [x] d3, 5 poäng När vi gör förändringar i vår applikation, vad är viktigt att tänka på om vi använt webbläsaradressen (URL) som en datalagringsplats för klienten? (max 1 paragraf).

## Reflektion

Analysera och reflektera kring hur du uppfyllt kraven i uppgiften, dessa krav är VG meriterande, så du behöver självständigt reflektera över din applikations funktion och kodstruktur - samt motivera dina ställningstaganden. Dessa krav ska uppfyllas genom att du besvarar dem i din inlämnande rapport, använd varje krav som som rubrik precis som i tidigare inlämningsuppgifter.

För betyget Väl Godkänt på uppgiften måste minst 20 poäng vara från följande krav.

Nummer Poäng Kriterium Beskrivning

- [x] r1, 10 poäng s4 Vilka designmönster/strukturer har du använt dig av i koden för att separera applikationens UI från kommunikationen med REST API:er i källkoden, varför är detta en lämplig struktur?
- [x] r2, 10 poäng a2 Vilken syntax och metod/tankesätt har du använd för att se till att den asykrona koden felhanteras på ett korrekt sätt. Beskriv vilka potentiella fel och problem du har identiferat och hur dessa hanteras i koden, varför är detta lämplig felhantering?
- [x] r3, 10 poäng Vilka platser använder du för lokal datalagring i din applikation, varför är dessa lämpliga val? Om du inte har implementerat någon lokal datalagring, vad ser du för potentiellt användningsområde i din applikation?
- [x] r4, 10 poäng k5 Med vilken metod har du uteslutit filer som kan genereras eller installeras i ditt källkodsprojekt, av vilken anledning har du valt att utesluta dessa filer? - Motivera ditt val!

Lycka till!
