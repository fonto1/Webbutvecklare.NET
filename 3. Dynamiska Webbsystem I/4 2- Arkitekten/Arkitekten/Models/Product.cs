using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Arkitekten.Models
{
    public class Product
    {
        public Product()
        {
          
        }

      
        public int ProductId { get; set; }
        public string Type { get; set; }
        public string Color { get; set; }
        public float Price { get; set; }
        public ICollection<Project> Projects { get; } = new List<Project>();

    }
}
