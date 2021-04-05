using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bakery.Models
{
    public class Cake : Product
    {
        public Cake(string name, int price, string description)
        {
            Name = name;
            Price = price;
            Description = description;
        }
    }
}
