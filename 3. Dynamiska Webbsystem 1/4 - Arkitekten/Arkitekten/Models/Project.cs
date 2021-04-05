using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Arkitekten.Models
{
    public class Project
    {
        public Project()
        {
            
        }

        public int ProjectId { get; set; }

        public string Name { get; set; }
        public string UserName { get; set; }
        public float Price { get; set; }
        public ICollection<Product> Products { get; } = new List<Product>();

    }
}
