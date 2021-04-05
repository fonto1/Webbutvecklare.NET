using System.Collections.Generic;
using System;
using Museum.Rooms;
using Museum.ArtWorks;

namespace Museum {
    public class Menu {
        Room black = new Room("Svarta-rummet");
        Room purple = new Room("Lila-rummet");
        Room white = new Room("Vita-rummet");
        Room blue = new Room("Blåa-rummet");
        Room red = new Room("Röda-rummet");
        Room green = new Room("Gröna-rummet");
        Room corridor = new Room("Korridoren");
        Room entrance = new Room("Entrén");
        Room wall = new Room("Wall");
        Room[] plan;
        int index;

        Art mona = new Art("Mona", "Skumma Mona", "Leronardo Da Vinci");
        Art natt = new Art("Stjärnenatt", "Fin Utsikt", "Vincent Van Gogh");
        Art nattvarden = new Art("Nattvarden", "Jesus Och Hans Lärljungar", "Leronardo Da Vinci");
        Art adam = new Art("Adams Skapelse", "Möte Med Gud", "Michelangelo");
        Art guernica = new Art("Guernica", "Militär Övergrepp", "Pablo Picasso");
        Art flicka = new Art("Flicka Med Pärlörhänge", "Mystisk Flicka", "Johannes Vermeer");
        Art skriet = new Art("Skriet", "Ångestladdad Målning", "Edvard Munch");
        Art nattvakten = new Art("Nattvakten", "Nattvakt I Full Utryckning", "Rembrandt Van Rijn");
        Art nackrosor = new Art("Näckrosor", "Näckrosor Från Heaven", "Claude Monet");
        Art venus = new Art("Venus Födelse", "Födelseloppet Av Lille Venus", "Sandro Boticelli");
        Art onepiece = new Art("Strawhat Pirates", "Luffy Och Hans Nakama", "Eiichiro Oda");

        public Menu() {
            plan = new Room[] {
                wall, black, wall,
                white, blue, purple,
                wall, green, red,
                wall, corridor, wall,
                wall, entrance, wall,
            };

            index = Array.IndexOf(plan, entrance); // start pos
            red.AddArt(mona);
            red.AddArt(venus);
            blue.AddArt(nattvakten);
            red.AddArt(flicka);
            white.AddArt(natt);
            purple.AddArt(onepiece);
            purple.AddArt(adam);
            purple.AddArt(nackrosor);
            purple.AddArt(guernica);
            green.AddArt(skriet);
            green.AddArt(nattvarden);
        }

        public void MoveOption() {
            Console.Clear();
            plan[index].Display();
            System.Console.WriteLine("Gå Till: ");
            if (index - 3 > 0 && plan[index - 3] != wall) {
                System.Console.WriteLine($"w {plan[index-3].Name}");
            }

            if (plan[index - 1] != wall && index - 1 > 0 && index % 3 != 0) {
                System.Console.WriteLine($"A {plan[index-1].Name}");
            }

            if (plan[index + 1] != wall && index + 1 < plan.Length && (index + 1) % 3 != 0) {
                System.Console.WriteLine($"D {plan[index+1].Name}");
            }

            if (index + 3 < plan.Length && plan[index + 3] != wall) {
                System.Console.WriteLine($"S {plan[index+3].Name}");
            }

            Move();
        }

        public void Move() {
            while (true) {
                int save = index;
                System.Console.WriteLine("");
                System.Console.Write("Ditt val: ");
                var input = Console.ReadLine();

                switch (input.ToLower()) {
                    case "w": {
                        index = index - 3;
                        break;
                    }
                    case "a": {
                        if ((index) % 3 != 0) {
                            index = index - 1;
                        }
                        break;
                    }
                    case "d": {
                        if ((index + 1) % 3 != 0) {
                            index = index + 1;
                        }
                        break;
                    }
                    case "s": {
                        index = index + 3;
                        break;
                    }
                }
                
                if (index != save && index > 0 && index < plan.Length && plan[index] != wall) {
                    MoveOption();
                } else {
                    System.Console.WriteLine("Ange ett giltigt val!");
                    index = save;
                }
            }
        }
    }
}