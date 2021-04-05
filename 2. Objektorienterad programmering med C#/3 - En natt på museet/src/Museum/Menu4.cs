using System.Collections.Generic;
using System;
using Museum.Rooms;
using Museum.ArtWorks;

namespace Museum {
    public class Menu4 {
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

        public Menu4() {
             plan = new Room[] {
                wall,white,wall,
                red,green,blue,
                corridor,wall,corridor,
                purple,corridor,black,
                wall,entrance,wall
            };
            List < Art > AllArts = new List < Art > () {
                mona,
                natt,
                nattvarden,
                adam,
                guernica,
                flicka,
                skriet,
                nattvakten,
                nackrosor,
                venus,
                onepiece
            };
            List < Room > RoomsWithArts = new List < Room > () {
                black,
                purple,
                white,
                blue,
                red,
                green
            };
            index = Array.IndexOf(plan, entrance); // start pos
            Random rnd = new Random();

            foreach(Art tavla in AllArts) {
                int i = rnd.Next(0, RoomsWithArts.Count);
                RoomsWithArts[i].AddArt(tavla);
            }
            Navigation.MoveOption(index, plan);
        }
    }
}