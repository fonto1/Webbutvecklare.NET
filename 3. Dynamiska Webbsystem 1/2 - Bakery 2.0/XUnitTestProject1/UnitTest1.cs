using Bakery.Controllers;
using Bakery.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using Xunit;
using Microsoft.EntityFrameworkCore;

namespace XUnitTestProject1
{
    public class UnitTest1

    {

        [Fact]
        public void CheckControllerIDa()
        {
            var builder = new DbContextOptionsBuilder<AppDbContext>();  
            var options = builder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=Bakery-1ED06986-5F07-4A1C-85B9-D9F3F477BFF5;Trusted_Connection=True;MultipleActiveResultSets=true");

            var Dbcontext = new AppDbContext(options.Options);//arrange

            var produ = new ProductRepository(Dbcontext);  //act

            Assert.Equal(9, produ.AllProducts.Count);  //assert
             
        }


        [Fact]
        public void CheckControllerRoutingForContactPage()
        {
            var controller = new ContactsController();         //arrange
            var result = controller.Info() as ViewResult;      //act
            Assert.Equal("us", result.ViewName);               //assert
           
        }
    }
}
