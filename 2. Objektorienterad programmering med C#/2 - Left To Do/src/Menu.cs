using System;
using System.Collections.Generic;
using System.Linq;

namespace src {
    public class Menu {

        // Create two list for storing Task
        List < Task > TaskList = new List < Task > ();
        List < Task > Archive = new List < Task > ();

        // Run the menu
        public void ShowMenu() {
            System.Console.WriteLine("");
            Console.ForegroundColor = ConsoleColor.Gray;
            Console.WriteLine($"<<<Välkommen till Left To Do>>>");
            Console.WriteLine("[1] Lägg till uppgift.");
            Console.WriteLine("[2] Visa/Ändra status uppgifter.");
            Console.WriteLine("[3] Arkivera utförda uppgifter.");
            Console.WriteLine("[4] Visa arkiverade uppgifter.");
            Console.ForegroundColor = ConsoleColor.White;
            Console.Write("Ditt val: ");
            MenuSelect();
        }

        // Take user input and do operations
        void MenuSelect() {
            Boolean loop = true;
            while (loop) {
                int choice = checkIfNum();
                if (choice > 0 && choice < 5) {
                    switch (choice) {
                        case 1:
                            CreateTask();
                            break;
                        case 2:
                            DisplayAllTask();
                            ShowMenu();
                            break;
                        case 3:
                            CheckForTaskToArchive();
                            break;
                        case 4:
                            ShowArchive();
                            break;
                    }
                } else if (choice <= 0 | choice > 4) {
                    Console.ForegroundColor = ConsoleColor.Red;
                    Console.Write("Vänligen ange ett giltigt nummer(1-4): ");
                    Console.ForegroundColor = ConsoleColor.White;
                }
            }
        }

        // Create New Task
        void CreateTask() {
            System.Console.WriteLine("");
            Console.ForegroundColor = ConsoleColor.Gray;
            Console.WriteLine("[1]Uppgift.");
            Console.WriteLine("[2]Tidsberoende uppgift.");
            Console.ForegroundColor = ConsoleColor.White;
            System.Console.Write("Ditt val: ");
            string taskName;
            int choice = checkIfNum();
            int timer = 0;
            Boolean loop = true;
            Boolean numloop = true;
            while (loop) {
                if (choice == 1) {
                    Console.Write("Namn på uppgift: ");
                    taskName = Console.ReadLine();
                    AddTask(taskName);
                    Notification(taskName);
                } else if (choice == 2) {
                    Console.Write("Namn på uppgift: ");
                    taskName = Console.ReadLine();
                    Console.Write("Tid på deadline(min): ");
                    while (numloop) {
                        timer = checkIfNum();
                        if (timer > 0) {
                            numloop = false;
                        } else {
                            Console.ForegroundColor = ConsoleColor.Red;
                            Console.Write("Vänligen ange ett giltigt nummer: ");
                            Console.ForegroundColor = ConsoleColor.White;
                        }
                    }
                    AddTask(taskName, timer);
                    Notification(taskName);
                } else {
                    System.Console.WriteLine("");
                    Console.ForegroundColor = ConsoleColor.Red;
                    System.Console.WriteLine("Ange ett val(1-2): ");
                    Console.ForegroundColor = ConsoleColor.White;
                    CreateTask();
                }
            }
        }

        // Display all Task in TaskList
        void DisplayAllTask() {
            if (TaskList.Count > 0) {
                System.Console.WriteLine("");
                for (int i = 0; i < TaskList.Count; i++) {
                    if (TaskList[i].Done == true) {
                        Console.ForegroundColor = ConsoleColor.Green;
                        Console.Write("[" + (i + 1) + "]");
                        TaskList[i].Display();
                        Console.ForegroundColor = ConsoleColor.White;
                    } else if (TaskList[i].Done == false) {
                        Console.Write("[" + (i + 1) + "]");
                        TaskList[i].Display();
                    }
                }
                ChangeStatus();
            } else {
                System.Console.WriteLine("");
                Console.ForegroundColor = ConsoleColor.Red;
                System.Console.WriteLine("Du har inga uppgifter att visa!");
                Console.ForegroundColor = ConsoleColor.White;
                ShowMenu();
            }
        }

        // Menu for user to change status of task
        void ChangeStatus() {
            System.Console.WriteLine("");
            Console.ForegroundColor = ConsoleColor.Gray;
            System.Console.WriteLine("[Index] för att ändra status.");
            System.Console.WriteLine("Tryck valfri tangent för att fortsätta.");
            Console.ForegroundColor = ConsoleColor.White;
            System.Console.Write("Ditt val: ");
            int value = checkIfNum();
            if (value >= 1 && TaskList.Count >= value) {
                TaskList[value - 1].changeDone();
                DisplayAllTask();
            } else {
                ShowMenu();
            }
        }

        // check if there is any completeed task to archive
        void CheckForTaskToArchive() {
            foreach(Task temp in TaskList) {
                if (temp.Done == true) {
                    ArchiveItems();
                    ShowMenu();
                    break;
                }
            }
            System.Console.WriteLine("");
            Console.ForegroundColor = ConsoleColor.Red;
            System.Console.WriteLine("Du har inget att Arkivera!");
            Console.ForegroundColor = ConsoleColor.White;
            ShowMenu();
        }

        // archive all done items and store in Archive
        void ArchiveItems() {
            for (int i = TaskList.Count - 1; i >= 0; i--) {
                if (TaskList[i].Done == true) {
                    Archive.Add(TaskList[i]);
                    TaskList.RemoveAt(i);
                }
            }
            System.Console.WriteLine("");
            Console.ForegroundColor = ConsoleColor.DarkYellow;
            System.Console.WriteLine("Arkiverat utförda uppgifter!");
            Console.ForegroundColor = ConsoleColor.White;
        }
        // show archived task
        void ShowArchive() {
            if (Archive.Count > 0) {
                System.Console.WriteLine("");
                System.Console.WriteLine("Följande uppgifter är Arkiverat: ");
                foreach(Task show in Archive) {
                    Console.ForegroundColor = ConsoleColor.Green;
                    show.Display();
                    Console.ForegroundColor = ConsoleColor.White;
                }
                ShowMenu();
            } else {
                System.Console.WriteLine("");
                Console.ForegroundColor = ConsoleColor.Red;
                System.Console.WriteLine("Du har inget Arkiverat!");
                Console.ForegroundColor = ConsoleColor.White;
                ShowMenu();
            }
        }

        // check if input is integer, avoid program from crash
        int checkIfNum() {
            int value = 0;
            try {
                value = Convert.ToInt32(Console.ReadLine());
            } catch (FormatException) {

            } catch (OverflowException) {

            }
            return value;
        }

        // show notification for added task
        void Notification(string name) {
            Console.WriteLine("");
            Console.ForegroundColor = ConsoleColor.DarkYellow;
            Console.WriteLine($"Lagt till <{name}> i listan.");
            Console.ForegroundColor = ConsoleColor.White;
            ShowMenu();
        }

        // create a SimpleTask
        void AddTask(string name) {
            SimpleTask newTask = new SimpleTask(name);
            TaskList.Add(newTask);
        }

        // create a Task with Timer
        void AddTask(string name, int time) {
            TimeTask newTask = new TimeTask(name, time);
            TaskList.Add(newTask);
        }
    }
}