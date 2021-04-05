using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Arkitekten.Models
{
    public class ProductRepository:IProductRepository
    {
        private readonly AppDbContext _appDbContext;

        public ProductRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;

        }


        public IEnumerable<Product> AllProduct
        {
            get
            {
                return _appDbContext.AllProducts;
            }
        }



    }
}
