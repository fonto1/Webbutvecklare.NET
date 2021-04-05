using Arkitekten.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Arkitekten.ViewModels
{
    public class ProjectDatabaseViewModel
    {
        
        public int ProductId { get; set; }
        public int ProjectId { get; set; }
        public Project showproject  { get; set; }
        public IEnumerable<Product> Allprod { get; set; }
        

    }
}
