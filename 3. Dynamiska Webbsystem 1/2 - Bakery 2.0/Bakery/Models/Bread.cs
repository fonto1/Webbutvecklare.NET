using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bakery.Models
{
    public class Bread:Product
    {
        public string Size { get; protected set; }
        public int Quantity { get; protected set; }

        public Bread(int id, string name, int price, string description, string size, int quantity)
        {
            Id = id;
            Name = name;
            Price = price;
            Description = description;
            Size = size;
            Quantity = quantity;
        }

    }
}
