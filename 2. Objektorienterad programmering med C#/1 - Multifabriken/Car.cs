using System;

namespace Multifabriken {
    public class Car: Product {
        string Carnumber;
        string Color;
        string Brand;

        public Car(string carnumber, string color, string brand) {
            Carnumber = carnumber;
            Color = color;
            Brand = brand;
        }

        public override void DisplayProduct() {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("Bil med regnummer " + Carnumber + " i färgen " + Color + " av märket " + Brand + ".");
            Console.ForegroundColor = ConsoleColor.White;
        }
    }
}