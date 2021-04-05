using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bakery.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Bakery.Controllers
{
    public class ProductController : Controller
    {
        private readonly IProductRepository _product;

        public ProductController(IProductRepository product)
        {
            _product = product;
        }

        public ViewResult Product()
        {
            return View(_product.AllProducts.OrderBy(x=>x.GetType().Name).ToList());
        }

    }
}
