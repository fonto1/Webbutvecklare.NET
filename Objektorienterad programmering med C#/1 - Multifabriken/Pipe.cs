using System;

namespace Multifabriken {
  public class Pipe: Product {
    int Diameter;
    int Length;

    public Pipe(int diameter, int length) {
      Diameter = diameter;
      Length = length;
    }

    public override void DisplayProduct() {
      Console.ForegroundColor = ConsoleColor.Green;
      Console.WriteLine("Rör med diameter " + Diameter + " och längden " + Length + ".");
      Console.ForegroundColor = ConsoleColor.White;
    }
  }
}