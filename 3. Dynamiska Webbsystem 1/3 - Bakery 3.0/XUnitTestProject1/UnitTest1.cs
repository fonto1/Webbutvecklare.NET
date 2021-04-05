using Bakery.Controllers;
using Bakery.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using Xunit;
using Microsoft.EntityFrameworkCore;
using Moq;

namespace XUnitTestProject1
{
    public class UnitTest1

    {
   

        [Fact]
        public void CheckAddReviewByCount()
        {
            // arragnge: create productcontroller, reviewrepository
            var MockProduct = new Mock<IProductRepository>();
            var MockReview = new Mock<IReviewRepostitory>();
            var builder = new DbContextOptionsBuilder<AppDbContext>();
            var options = builder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=Bakery-1ED06986-5F07-4A1C-85B9-D9F3F477BFF5;Trusted_Connection=True;MultipleActiveResultSets=true");
            var Dbcontext = new AppDbContext(options.Options);
            var ProductC = new ProductController(MockProduct.Object, Dbcontext, MockReview.Object);
            var Review = new ReviewRepository(Dbcontext);


            //act: create new review and create count that contains current count
            
      
            ProductC.Save(2, "bra", 5);
            var count = Review.AllReviews.Count;


            //assert: expected count compare to new count

            Assert.Equal(5,count);

        }

        [Fact]
        public void CheckControllerIDa()
        {
            var builder = new DbContextOptionsBuilder<AppDbContext>();  
            var options = builder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=Bakery-1ED06986-5F07-4A1C-85B9-D9F3F477BFF5;Trusted_Connection=True;MultipleActiveResultSets=true");

            var Dbcontext = new AppDbContext(options.Options);//arrange

            var produ = new ProductRepository(Dbcontext);  //act

            Assert.Equal(10, produ.AllProducts.Count);  //assert
             
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
