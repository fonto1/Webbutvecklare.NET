using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Bakery.Models
{
    public class ProductRepository : IProductRepository
    {
        private readonly AppDbContext _appDbContext;



        public ProductRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;

        }

        public List<Product> AllProducts
        {
            get
            {
                return _appDbContext.Products.ToList();
            }
        }

        public Product GetProductById(int id)
        {
            return _appDbContext.Products.FirstOrDefault(p => p.ProductId == id);
        }


    }
}
