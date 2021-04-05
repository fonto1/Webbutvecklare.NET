using System.Collections.Generic;
using Museum.ArtWorks;

namespace Museum.Rooms {
    public class Room {
        public List < Art > ListArts {get; private set;}

        public string Name {
            get;
            private set;
        }

        public Room(string name) {
            Name = name;
            ListArts =  new List < Art > ();
        }

        public void Display() {
            if (ListArts.Count > 0) {
                System.Console.WriteLine($"Du befinner dig i {Name} och här finns: ");
                System.Console.WriteLine("");

                foreach(Art art in ListArts) {
                    art.Display();
                }
            } else {
                System.Console.WriteLine($"Du befinner dig i {Name}");
                System.Console.WriteLine("");
            }
        }

        public void AddArt(Art work) {
            ListArts.Add(work);
        }
    }
}