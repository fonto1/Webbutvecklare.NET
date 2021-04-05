using System;
using System.Collections.Generic;

namespace Multifabriken {
    public class Menu {
        List < Product > product = new List < Product > ();
        public void StartMenu() {        // starta programmet
            Console.WriteLine("");
            Console.ForegroundColor = ConsoleColor.Magenta;
            Console.WriteLine("Välkommen till Multifabriken");
            Console.ForegroundColor = ConsoleColor.White;
            Console.WriteLine("Vad vill du göra?");
            Console.WriteLine("[1] Beställa produkt");
            Console.WriteLine("[2] Lista beställda produkter");
            Console.WriteLine("[3] Avsluta");
            Console.Write("Ditt val: ");
            int choice = numCheck();

            switch (choice) {
                case 1:
                    ChoiceOne();
                    break;
                case 2:
                    ChoiceTwo();
                    break;
                case 3:
                    End();
                    break;
                default:
                    Console.ForegroundColor = ConsoleColor.Blue;
                    Console.WriteLine("Ange ett giltigt val!");
                    Console.ForegroundColor = ConsoleColor.White;
                    StartMenu();
                    break;
            }
        }

        private void ChoiceOne() {         // skriver ut val av beställningar
            Console.WriteLine("");
            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("<<<Vad vill du beställa?>>>");
            Console.ForegroundColor = ConsoleColor.White;
            Console.WriteLine("[1] Bil");
            Console.WriteLine("[2] Godis");
            Console.WriteLine("[3] Rör");
            Console.WriteLine("[4] HavreMjölk");
            Console.Write("Ditt val: ");
            int menuOneChoice = numCheck();
            switch (menuOneChoice) {
                case 1:
                    CreateCar();
                    break;
                case 2:
                    CreateCandy();
                    break;
                case 3:
                    CreatePipe();
                    break;
                case 4:
                    CreateMilk();
                    break;
                default:
                    Console.ForegroundColor = ConsoleColor.Blue;
                    Console.WriteLine("Ange ett giltigt val!");
                    Console.ForegroundColor = ConsoleColor.White;
                    ChoiceOne();
                    break;
            }
        }

        void ChoiceTwo() {              // läser ut innehållet i Listan product
            if (product.Count < 1) {
                Console.ForegroundColor = ConsoleColor.Green;
                Console.WriteLine("Du har inga beställda varor!");
                Console.ForegroundColor = ConsoleColor.White;
            } else {
                Console.WriteLine("Dina beställda varor: ");
                Console.WriteLine("");
                foreach(Product pro in product) {
                    pro.DisplayProduct();
                }
            }
            Console.WriteLine("");
            Console.WriteLine("[1] Till Startmenu");
            Console.WriteLine("[2] Stäng fabriken");
            Console.Write("Ditt val: ");
            int menuTwoChoice = numCheck();

            switch (menuTwoChoice) {
                case 1:
                    StartMenu();
                    break;
                case 2:
                    End();
                    break;
                default:
                    Console.ForegroundColor = ConsoleColor.Blue;
                    Console.WriteLine("Ange ett giltigt val!");
                    Console.ForegroundColor = ConsoleColor.White;
                    ChoiceTwo();
                    break;
            }
        }

        void End() {
            Console.ForegroundColor = ConsoleColor.Magenta;
            Console.WriteLine("Fabriken stängd!");
            Console.ForegroundColor = ConsoleColor.White;
            System.Environment.Exit(1);
        }

        void CreateCar() {
            Console.Clear();
            string carnumber;
            string color;
            string brand;

            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("<<<Beställa Bil>>>");
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("Ange regummer: ");
            carnumber = Console.ReadLine();
            Console.Write("Ange färg: ");
            color = Console.ReadLine();
            Console.Write("Ange märke: ");
            brand = Console.ReadLine();

            Car car = new Car(carnumber, color, brand);
            product.Add(car);
            Console.WriteLine("Lagt till Bil i beställnigen");
            StartMenu();

        }

        void CreateCandy() {
            Console.Clear();
            string taste;
            int quantity = 0;

            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("<<<Beställa Godis>>>");
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("Ange smak: ");
            taste = Console.ReadLine();
            Console.Write("Ange antal: ");
            quantity = quantityCheck();

            Candy candy = new Candy(taste, quantity);
            product.Add(candy);
            Console.WriteLine("Lagt till Godis i beställnigen");
            StartMenu();
        }

        void CreatePipe() {
            Console.Clear();
            int diameter;
            int length;

            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("<<<Beställa Rör>>>");
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("Ange diameter: ");
            diameter = quantityCheck();
            Console.Write("Ange längd: ");
            length = quantityCheck();

            Pipe pipe = new Pipe(diameter, length);
            product.Add(pipe);
            Console.WriteLine("Lagt till Rör i beställnigen");
            StartMenu();

        }

        void CreateMilk() {
            Console.Clear();
            int fatpercentage;
            int volume;

            Console.ForegroundColor = ConsoleColor.Cyan;
            Console.WriteLine("<<<Beställa HavreMjölk>>>");
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("Ange fettprocent: ");
            fatpercentage = quantityCheck();
            Console.Write("Ange volym: ");
            volume = quantityCheck();

            Milk milk = new Milk(fatpercentage, volume);
            product.Add(milk);
            Console.WriteLine("Lagt till HavreMjölk i beställnigen");
            StartMenu();

        }

        int quantityCheck() {  // kollar att vi skriver i siffra, vid beställningar
            int num = 0;
            Boolean loop = true;
            while (loop) {
                num = numCheck();
                if (num >= 1) {
                    loop = false;
                } else {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.Write("Ange giltig nummer: ");
                    Console.ForegroundColor = ConsoleColor.White;
                }
            }
            loop = true;
            return num;
        }

        int numCheck() {       // checkar om vi skriver in en siffra, för menyval
            int checkIfNumber = 0;
            try {
                checkIfNumber = Convert.ToInt32(Console.ReadLine());
            } catch (FormatException) {
            } catch (OverflowException) {
            }
            return checkIfNumber;
        }
    }
}