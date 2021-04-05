using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SFF.Models
{
    public class Studios
    {
        public Studios()
        {
          MoviesInStudio = new List<string>();
            
        }
        public string Name { get; set; }
        public string City { get; set; }
    
        public List<string> MoviesInStudio { get; set; }
    }
}
