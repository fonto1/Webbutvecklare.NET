using Arkitekten.Models;
using Arkitekten.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Arkitekten.Controllers
{
    public class ProjectController:Controller
    {
        private readonly IProductRepository _product;
        private readonly AppDbContext _appDbContext;
        private readonly IBindRepository _bind;
        private readonly IProjectRepository _project;




        public ProjectController(IProductRepository product, AppDbContext appDbContext, IBindRepository bind, IProjectRepository project)
        {
            _product = product;
            _appDbContext = appDbContext;
            _bind = bind;
            _project = project;
        }

        public IActionResult List(int id)             // Using Viewmodel To Display the page
        {


            ProjectDatabaseViewModel tmp = new ProjectDatabaseViewModel
            {
                ProjectId = _project.AllProject.FirstOrDefault(p => p.ProjectId == id).ProjectId,
                showproject = _project.AllProject.FirstOrDefault(p => p.ProjectId == id),
                Allprod = _appDbContext.AllProducts

            };
           

            foreach(var items in _bind.AllBind)
            {
                if(items.ProjectId == id)
                {
                    var num = items.ProductId;
                    tmp.showproject.Products.Add(_product.AllProduct.FirstOrDefault(p => p.ProductId == num));
                }
            }

            Project temp = new Project();
            temp = _project.AllProject.FirstOrDefault(p => p.ProjectId == id);
            
            return View(tmp);
        }

        
        [HttpPost]
        [Authorize]
        public IActionResult addProduct(int productId, int projectId)  // Add information when added product to right project by IDs
        {
            if (ModelState.IsValid)
            {

                Bind temp = new Bind
                {
                    ProjectId = projectId,
                    ProductId = productId       
                };

                _appDbContext.AllProjects.FirstOrDefault(p => p.ProjectId == projectId).Price += _appDbContext.AllProducts.FirstOrDefault(p=>p.ProductId==productId).Price;

                _appDbContext.AllBinds.Add(temp);
                _appDbContext.SaveChanges();
                return RedirectToAction("List",new{id = projectId });
            }

            return View();
        }


    }
}
