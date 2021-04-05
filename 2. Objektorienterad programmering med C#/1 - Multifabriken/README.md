Multifabriken AB vill skapa en konsolapplikation för sina kunder där man kan välja att beställa nya produkter från deras fabrik. Fabriken kan producera bilar, godis, rör eller havremjölk. Via inmatning av beställning ska nya produkter skapas av den valda typen och samtliga produkter man beställt ska kunna listas av användaren.

## Kravspecifikation:

- [x] Lösningen ska bestå av en körbar konsolapplikation skriven i C# (netcoreapp2.2 eller netcoreapp3.0)
- [x] När man startar programmet ska man mötas av en meny där alla typer av produkter man kan beställa listas.
- [x] Man ska kunna göra ett val i menyn med vilken typ av produkt man vill beställa, om man vill lista alla produkter man beställt, eller om man vill avsluta programmet.
4. - [x] Produkterna man kan välja mellan är "Bilar", "Godis", "Rör" samt "Havremjölk".
      - När man väljer att skapa en bil ska man ombes att mata in ett registreringsnummer, färg, och ett bilmärke.
      - När man väljer att skapa en godis ombes man att mata in "Smak" samt "Antal".
      - När man väljer att skapa ett rör ombes man att mata in "Diameter" samt "Längd"
      - När man väljer att skapa havremjök ombes man att mata in "Fetthalt" och "Litermängd".
- [x] Om man väljer att lista alla produkter ska alla produkter man beställt hittills skrivas ut med den informationen man angett.
- [x] Om man väljer att avsluta programmet ska programmet helt enkelt sluta köras.
- [x] Programmet ska bestå av en "Program.cs" fil, en ".csproj" fil samt en fil för varje extra klass du skapar.
- [x] Ingen information behöver sparas mellan körningar av programmet.
- [x] Inlämningen ska innehålla en beskrivning av kodens funktioner, och en reflektion kring hur du strukturerat din kod genom användandet av metoder och klasser.

När du är färdig med din uppgift så skall du bifoga ett textdokument som innehåller en länk till ett gitrepo med uppgiften och den reflekterande texten.

Tips:
Efter att information har matas in ska ett objekt så borde ett objekt av den korrekta klassen för den produkten skapas och läggas i en lista. Det kan alltså finnas 4 st listor, en för varje typ av produkt.

I din reflektion, motivera vilka klasser du skapat och hur det hjälper programmet att bli överskådligt för andra programmerare än dig själv, om dom skulle jobba i samma projekt
