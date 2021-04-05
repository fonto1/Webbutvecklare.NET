using System;
using System.Collections.Generic;

namespace src {
    public abstract class Task {
        public Task(string name) {
            this.Name = name;
            this.Done = false;
        }

        public string Name {
            get;
            protected set;
        }

        public Boolean Done {
            get;
            protected set;
        }

        public virtual void Display() {
            Console.WriteLine("superklass");
        }

        public void changeDone() {
            if (Done == true) {
                Done = false;
            } else if (Done == false) {
                Done = true;
            } else {
                System.Console.WriteLine("Invalid value");
            }

        }
    }
}