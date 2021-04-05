using Bakery.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bakery.ViewModels
{
    public class ProductListViewModel
    {
        public List<Product> AllProducts { get; }
        public List<Review> AllReviews { get; }
    }
}
