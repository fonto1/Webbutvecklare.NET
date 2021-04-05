using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Arkitekten.Models
{
    public class Bind
    {
        public Bind()
        {
           
        }


        public int BindId { get; set; }
        public int ProjectId { get; set; }
        public Project Project { get; set; }

        public int ProductId { get; set; }
        public Product Product { get; set; }




    }
}
