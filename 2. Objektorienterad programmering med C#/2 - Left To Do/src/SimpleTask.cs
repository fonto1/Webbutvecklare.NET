using System;

namespace src {
    public class SimpleTask: Task {

        public SimpleTask(string name): base(name) {
            Name = name;
        }

        public override void Display() {
            Console.WriteLine($"{Name}");
        }
    }
}