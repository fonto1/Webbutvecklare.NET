using System;
using Museum.Rooms;

namespace Museum {

    // Static method used for menu3 and menu4

    static class Navigation {

        // display where user can move
        public static void MoveOption(int index, Room[] plan) {
            Room wall = new Room("Wall");
            Array.Find(plan, s => s.Equals(wall));
            Console.Clear();
            plan[index].Display();
            System.Console.WriteLine("Gå Till: ");

            if (index - 3 > 0 && plan[index - 3].Name != "Wall") {
                System.Console.WriteLine($"W {plan[index-3].Name}");
            }

            if (plan[index - 1].Name != "Wall" && index - 1 > 0 && index%3 !=0) {
                System.Console.WriteLine($"A {plan[index-1].Name}");
            }

            if (plan[index + 1].Name != "Wall" && index + 1 < plan.Length  && (index+1)%3 !=0) {
                System.Console.WriteLine($"D {plan[index+1].Name}");
            }

            if (index + 3 < plan.Length && plan[index + 3].Name != "Wall") {
                System.Console.WriteLine($"S {plan[index+3].Name}");
            }
            Navigation.Move(index, plan);
        }

        // move user to new location
        public static void Move(int index, Room[] plan) {
            Room wall = new Room("wall");
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
                        if((index)%3 !=0)
                        {
                        index = index - 1;
                        }
                        break;
                    }
                    case "d": {
                        if((index+1)%3 !=0)
                        {
                        index = index + 1;
                        }
                        break;
                    }
                    case "s": {
                        index = index + 3;
                        break;
                    }
                }
                if (index != save && index > 0 && index < plan.Length && plan[index].Name != "Wall") {
                    Navigation.MoveOption(index, plan);
                } else {
                    System.Console.WriteLine("Ange ett giltigt val! ");
                    index = save;
                }
            }
        }
    }
}