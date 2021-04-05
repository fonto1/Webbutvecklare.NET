using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bakery.Models
{
    public abstract class Product
    {
      
        public int ProductId { get; set; }
        public string Name { get; protected set; }
        public int Price { get; protected set; }
        public string Description { get; protected set; }
        public float TotalRating { get; set; }
        public float Count { get; set; }
        public float Average { get; set; }
        public List<Review> Review { get; set; }

        public Product()
        {
            Review = new List<Review>();
        }


    }
}
