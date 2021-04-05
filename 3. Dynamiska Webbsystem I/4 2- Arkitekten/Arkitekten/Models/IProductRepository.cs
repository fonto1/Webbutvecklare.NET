using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Arkitekten.Models
{
    public interface IProductRepository
    {

        public IEnumerable<Product> AllProduct{ get; }
    }
}
