using System;

namespace Multifabriken {
    public class Milk: Product {
        int FatPercentage;
        int Volume;

        public Milk(int fatPercentage, int volume) {
            FatPercentage = fatPercentage;
            Volume = volume;
        }

        public override void DisplayProduct() {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.WriteLine("HavreMjölk på " + FatPercentage + "% fett, " + Volume + " liter.");
            Console.ForegroundColor = ConsoleColor.White;
        }
    }
}