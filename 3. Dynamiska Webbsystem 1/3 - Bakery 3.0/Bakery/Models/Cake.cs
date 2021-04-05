using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bakery.Models
{
    public class Cake : Product
    {
        public Cake(int productId, string name, int price, string description)
        {
            ProductId = productId;
            Name = name;
            Price = price;
            Description = description;
        }
    }
}
