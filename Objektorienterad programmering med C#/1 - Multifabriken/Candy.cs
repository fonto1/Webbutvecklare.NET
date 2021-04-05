using System;

namespace Multifabriken {
    public class Candy: Product {
        string Taste;
        int Quantity;

        public Candy(string taste, int quantity) {
            Taste = taste;
            Quantity = quantity;
        }

        public override void DisplayProduct() {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("Godis av " + Taste + " smak, " + Quantity + "st.");
            Console.ForegroundColor = ConsoleColor.White;
        }
    }
}