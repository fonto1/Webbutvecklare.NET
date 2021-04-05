using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bakery.Models
{
    public interface ICake
    {
       List<Product> AllProducts { get; }
    }
}
