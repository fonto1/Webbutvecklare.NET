Välkommen till hackathonet! Vi skall i varje grupp bygga ett klientgränsnitt till NASA:s API! Gränssnittets syfte är att på ett snyggt och användarvänligt sätt kunna visa upp bilder ifrån de tre olika ”Rovers” i.e. rymdsonder som finns på Mars. Vi skall endast använda oss av av front-end kod som körs på klientsidan.

## Förarbete

Ett idealiskt utvecklingsprojekt börjar med en bra planering - detta kallas i många arbetslag för att genomföra ett förarbete. I ett förarbete ingår bland annat tidsplanering, fastställa kodstrukturer, skapa ev. diagram och dokumentation\*, och ofta att göra en design-mockup.

Det vi kommer fokusera på gällande förarbete under detta hackathon är tidsplanering och design mockup.

## Tidsplanering

Ni skall tillsammans i gruppen, innan ni börjar koda, planera hur mycket tid ni skall lägga på olika delmoment i projektet - detta ska ni skriftligt lämna över till mig innan ni börjar koda.

- [x] Den behöver inte vara lång, men ett par olika tidsdeadlines är lämpliga.
- [x] I.o.m. tidsplaneringen behöver ni planera vad ni har för moment och hur mycket tid ni som grupp är beredda att lägga. Kom ihåg att lägga undan tid till er presentation.
- [x] Det kan vara svårt att planera upp dagen i detalj, men fundera lite på hur ni delar upp arbetet - kommer ni använda VS Live Share, och/eller Git? Vem gör vad och hur länge idag vill ni arbeta?

## Mockup

En mockup är en grafisk representation av hur ert program/sida skall se ut då den är klar - men utan någon funktionalitet.

- [x] Läs igenom och se till att ni förstår er uppgift, kom sen igång och designa och skapa något ni kan visa upp för mig.
- [x] Ni väljer själva vad ni ska göra för typ av klientgränsnitt! Ni bestämmer också hur ni vill designa den, det finns avancerade verktyg så som figma.com (Länkar till en externa sida.). Men penna och papper räcker för den här uppgiften.
- [x] Passa på här att fylla i er personliga reflektion! …samt tänk på er tidsplanering.
- [x] Ni ska visa mig er design och få OK innan ni fortsätter till att implementera gränsnittet, inget behöver lämnas över, men er mockup ska visas upp i er presentation.

## Klientgränsnittet

När er tidsplanering och mockup är klara kan ni börja implementera ert klientgränsnitt. Ni ska bara använda front-end tekniker som HTML, CSS och Javascript och göra anrop direkt till NASA:s API, via exempelvis Fetch.

- [x] Det viktigaste är inte att ni får API:et att fungera perfekt, utan att ni tänker till kring användbarheten och designen av er sida.
- [x] Ert klientgränsnitt behöver inte lämnas in, men ni ska visa hur det gick och hur lånt ni kom i er presentation. Det är även viktigt att ni alla har tillgång till varsin version av ert resultat, för om ni vill kan det användas i nästa inlämningsuppgift

## Presentation

I er presentation ska ni redovisa…

- [x] ert resultat. d.v.s. en sammanfattning av er slutgiltiga kod, hur har ni strukturerat er kod?
- [x] Visa ett demo på hur ert program ser ut och fungerar
- [x] Jämför resultatet med er mockup
- [x] Om ni vill kan ni göra en powerpoint, men det är inget krav.
- [x] Er presentation ska vara mellan 15 och 20 minuter.
- [x] Efter er presentation ska ni vara beredda på att ta emot ett par väl valda frågor från dom andra grupperna.

## NASAS API

NASA har ett gratis API med flertalet olika åtkomstspunkter för att hämta data. Den åtkomstpunkt vi kommer fokusera på under hackathonet är Mars Rover Photos.

- [x] Mars Rover Photos gör att vi kan hämta bilder som olika rymdsonder har tagit från ytan på planeten Mars.
- [x] För att komma igång och kommunicera med API:et måste ett konto skapas, ni behöver göra detta en gång per grupp.
- [x] Då ett konto skapats skickas en API-nyckel ut via mail, denna behöver ni inkludera med varje förfrågan till API:et.
- [x] Alla anrop som görs till denna åtkomstpunkt är via GET.
- [x] Från NASA:s API kan man hämta bilder ifrån tre olika rovers. Dessa är Opportunity, Spirit & Curiosity.
- [x] Varje rover har även olika uppsättningar av kameror.
- [x] Vilka rovers samt kameror vi vill hämta bilder ifrån kan vi specificera i förfrågan.
- [x] På Mars går dagarna fortare än vad de gör på Jorden. En dag på mars kallas för en SOL.
- [x] Våra anrop vi gör till API:et kan antingen filtreras med hjälp av SOL (dagen ifrån att rovern landade på Mars) eller via Jordens datum.
- [x] Bara för att en rover har en viss kamera betyder inte det att en bild har tagits just den dagen.
- [x] För att veta att det finns bilder tagna på specifika dagar måste ett ”Mission manifest” hämtas för en given rover.
- [x] Manifestet som hämtats skall användas för att konfigurera era vidare anrop.
- [x] När ni hämtar en bild för en given SOL och rover så får ni slutgiltligen en img_src.

Se dokumentationssidan länkad längre ner för mer information om hur ni ska göra!
