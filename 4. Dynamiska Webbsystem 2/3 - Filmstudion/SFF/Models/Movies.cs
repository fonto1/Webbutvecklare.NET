using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SFF.Models
{
    public class Movies
    {
        public Movies()
        {
            RentToStudio = new List<string>();
        }
        public string Name { get; set; }
        public int RentCount { get; set; }
        public int LeftToRent { get; set; }
        public List<string> RentToStudio { get; set; }
    }
}
