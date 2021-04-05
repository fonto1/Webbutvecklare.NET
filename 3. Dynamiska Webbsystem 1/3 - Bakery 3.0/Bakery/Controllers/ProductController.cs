using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bakery.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Bakery.Controllers
{
    public class ProductController : Controller
    {
        private readonly IProductRepository _product;
        private readonly AppDbContext _appDbContext;
        private readonly IReviewRepostitory _review;


        public ProductController(IProductRepository product, AppDbContext appDbContext, IReviewRepostitory review)
        {
            _product = product;
            _appDbContext = appDbContext;
            _review = review;
          
           
        }


        public ViewResult List()
        {
            ViewBag.Cake = "Tårtor";
            ViewBag.Bread = "Bröd";
            return View(_product.AllProducts.OrderBy(x => x.GetType().Name).ToList());
        }

        public IActionResult Details(int id)
        {
            var product = _product.GetProductById(id);
            var reviewtext = _review.AllReviews;
            

            if (product == null)
                return NotFound();


            return View(product);
        }

        public IActionResult Save()
        {

            return RedirectToAction("index", "home");
        }


        [HttpPost]
        [Authorize]
        public IActionResult Save(int productId, string review, float totalRating)
        {


            if (ModelState.IsValid)
            {
                int id = productId;

                Review ReviewTemplate = new Review();

                ReviewTemplate.Comment = review;
                try { ReviewTemplate.User = User.Identity.Name; } catch(Exception) { };
                ReviewTemplate.ProductId = productId;
                ReviewTemplate.Rating = totalRating;
                ReviewTemplate.Time = DateTime.Now;
                
                _appDbContext.Reviews.Add(ReviewTemplate);
                _appDbContext.Products.Find(productId).Count++;
                _appDbContext.Products.Find(productId).TotalRating += totalRating;
                _appDbContext.Products.Find(productId).Average = _appDbContext.Products.Find(productId).TotalRating / _appDbContext.Products.Find(productId).Count;


                _appDbContext.SaveChanges();
                return RedirectToAction("Details", new { id });
            }

            return RedirectToAction("List");
        }

    }
}
