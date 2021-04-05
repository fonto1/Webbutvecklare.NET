using System;

namespace Museum {
    class Program {
        static void Main(string[] args) {
            while (true) {
                System.Console.WriteLine("[1] Inlämningsuppgift");
                System.Console.WriteLine("[2] Museum(annan planlösning), random tavlor");
                System.Console.WriteLine("[3] Inlämningsuppgift, random tavlor (Navigation.cs, statisk!)");
                System.Console.WriteLine("[4] Museum(annan planlösning), random tavlor (Navigation.cs, statisk!)");
                System.Console.Write("Ditt val: ");
                int i = numCheck();

                switch (i) {
                    case 1: {
                        Menu menu = new Menu();
                        menu.MoveOption();
                        break;
                    }
                    case 2: {
                        Menu2 menu = new Menu2();
                        menu.MoveOption();
                        break;
                    }
                    case 3: {
                        Menu3 Menu = new Menu3();
                        break;
                    }
                    case 4: {
                        Menu4 Menu = new Menu4();
                        break;
                    }
                    default: {
                        System.Console.WriteLine("");
                        System.Console.WriteLine("Ange ett giltigt val(1-4)");
                        break;
                    }
                }
            }
        }

        static int numCheck() { // checkar om vi skriver in en siffra, för menyval
            int checkIfNumber = 0;
            try {
                checkIfNumber = Convert.ToInt32(Console.ReadLine());
            } catch (FormatException) {} catch (OverflowException) {}
            return checkIfNumber;
        }
    }
}