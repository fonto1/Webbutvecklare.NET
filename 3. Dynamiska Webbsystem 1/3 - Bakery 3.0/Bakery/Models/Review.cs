using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bakery.Models
{
    public class Review
    {
        public Review()
        {
        }

        public int ReviewId { get; set; }
        public string Comment { get; set; }
        public DateTime Time { get; set; }
        public String User { get; set; }
        public float Rating { get; set; }
        public int ProductId { get; set; }
        public Product Product { get; set; }
    }
}
