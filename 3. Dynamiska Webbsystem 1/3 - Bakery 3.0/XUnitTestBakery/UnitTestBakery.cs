using Bakery.Controllers;
using Bakery.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.Linq;
using Xunit;


namespace XUnitTestBakery
{
    [TestClass]
    public class AppDbContextTest
    {
        [TestClass]
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
            Assert.Equals
        }
    }
}