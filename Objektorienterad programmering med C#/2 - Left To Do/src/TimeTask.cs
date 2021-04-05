using System;

namespace src {
    class TimeTask: Task {
        double Init = 0;
        double End = 0;
        int Time;

        public TimeTask(string name, int time): base(name) {
            Name = name;
            Time = time * 60000;
            Init = Environment.TickCount;
            End = Time + Init;
        }

        public override void Display() {
            var timeLeft = TimeSpan.FromMilliseconds(End - Environment.TickCount);
            string str = timeLeft.ToString(@"mm\:ss");
            Console.WriteLine($"{Name}, {str} min left");
        }
    }
}