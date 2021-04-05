namespace Museum.ArtWorks {
    public class Art {
        public Art(string title, string desc, string author) {
            Title = title;
            Desc = desc;
            Author = author;
        }

        public void Display() {
            System.Console.WriteLine("Titel: " + Title);
            System.Console.WriteLine(Desc);
            System.Console.WriteLine("Av: " + Author);
            System.Console.WriteLine("");
        }

        public string Title {
            get;
            private set;
        }

        public string Desc

        {
            get;
            private set;
        }

        public string Author

        {
            get;
            private set;
        }
    }
}