using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bakery.Models
{
    public abstract class Product
    {
        public int Id { get; set; }
        public string Name { get; protected set; }
        public int Price { get; protected set; }
        public string Description { get; protected set; }
    }

  

}
