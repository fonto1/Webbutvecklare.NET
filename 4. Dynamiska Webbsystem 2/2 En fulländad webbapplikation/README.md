NASA fick nys om att ni hade byggt några smått fantastiska klientgränsnitt till deras foto-API, och tänkte att eftersom ni hade koden klar kanske ni var intresserade av att hjälpa dem utveckla nästa API? På era vägnar tackade vi såklart ja!

Till våren kommer NASA testa 3 st nya rovers (rymdsonder), som de eventuellt ska skicka upp till Mars. De vill att ni bygger ett nytt REST API som kan skicka information om de nya sonderna och även att ni bygger ut ett klientgränsnitt för att visa detta.

## Översatt meddelande från NASA till dig som utvecklare:

Vi tycker det var fantastiska arbeten ni gjort med vårt REST-API. Vi planerar nu att skicka upp 3 nya rovers till Mars och behöver ett API för att hantera informationen kring dem. Då vi inte kan gå ut med informationen kring de nya maskinerna som skall skickas upp till riktigt ännu Mars får ni som utvecklare skapa 3 nya ”test” rovers.

De värden vi vill kunna hämta för en specifik rover ifrån ert nya API följer i listan nedan:

När en specifik rover skall skall skickas upp till Mars, hitta på något datum så länge Antal hjul Hastighet Vikt

Dessa värden skall hämtas genom olika endpoints med verbet GET. För att specificera vilken rover du vill hämta information om behöver dess namn skickas med i alla anrop (ni bestämmer själva namnet och alla värden en rover har).

Regards

NASA, Houston

## Tips på tillvägagångssätt:

Börja med att identifiera och skissa upp hur ditt nya API skall fungera. Med detta menas vilka åtkomstpunkter (endpoints) som skall finnas med samt hur logiken skall ungefär ska se ut. Vilka klasser behöver du skapa?

Både klientgränsnittet och REST API:et ska ligga i samma GIT Repo, använd med fördel följande läng för att skapa ett nytt repo från GitHub Classroom:

Ett fulländad webb-applikation på GH Classroom (Länkar till en externa sida.)

Kom ihåg: Ditt repo måste vara privat, publika repon kommer att underkännas. Om du inte använder Classroom länken så måste du bjuda in rättande lärare (Lyret och Pickadolly) till ditt repo manuellt.

## Krav på rapporten

Rapporten ska innehålla...

- [x] En länk till gitrepot med implementationen av REST APIet och ett tillhörande klientgränsnitt.
- [x] En kort dokumentation över åtkomstpunkterna i API:et och vad dom retunerar för information.
- [x] En kort reflektion över utformningen av API:et för att uppfylla kraven, och över användarbetheten hos klientgränsnittet; Svara förslagsvis på om åtkomstpunkterna väl valda för att lösa uppgiften, samt vilket syfte och målgrupp som kliengränsnittet är utvecklat för? Tänk på att motivera dina ställningstaganden för att uppnå högre betyg på uppgiften.

## Krav på ditt API:

- [x] Din API lösning ska vara byggt i ASP.NET Core, version 3.0 eller 3.1.
- [x] Din ASP.NET applikation ska tillhandahålla minst 4 st åtkomstpunkter (endpoints/actions) som går nå via klientanrop
- [x] Dessa åtkomspunkter skall endas använda verbet GET.
- [x] Namnet på den rymdsond (rover) du vill hämta information av skall skickas med i alla anrop som en parameter. Svaret skall då gälla för den specifika rovern.
- [x] Ni skall använda er av objektorienterade principer i uppbyggnad av ert API:et, varje ny rover skall instansieras via en ”Rover”-klass.

## Krav på klientgränsnittet:

- [x] Du kan utgå från ditt egna klientgränsnitt som du byggde på hackathonet, eller en annan grupps gränsnitt. Du kan också bygga ett nytt eget gränsnitt.
- [x] Gränsnittet ska vara utformat på ett användarvänligt sätt för att visa information från NASAS Mars Rover Photos API samt ditt egna, nyutvecklade, REST API i ASP.NET Core.
- [x] Samtliga endpoints (4) i ditt REST API skall anropas minst en gång ifrån klientgränsnittet ni byggde under workshopen,

Tips: Bygg ut ditt kliengränsnitt med en ny presentations-sida där ni visar upp information kring alla nya rovers i ditt egna REST API.

## Vad ska jag lämna in?

Du ska lämna in en skriftlig rapport i PDF format samt en teknisk implementation av din lösning via länk till ett privat github repo som innehåller både ett klientgränsnitt och ett REST API.
