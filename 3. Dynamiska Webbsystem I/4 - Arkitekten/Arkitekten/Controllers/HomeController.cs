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
    public class HomeController : Controller
    {
        private readonly AppDbContext _appDbContext;
        private readonly IProjectRepository _iproj;

        public HomeController(AppDbContext appDbContext, IProjectRepository iproject)
        {
            _appDbContext = appDbContext;
            _iproj = iproject;
        }

        public ViewResult Index()  // Startpage, populate site with project from Database
        {
            
            ProjectProductViewModel view = new ProjectProductViewModel
            {
                AllProjects = _iproj.AllProject.Where(p => p.UserName == User.Identity.Name),
                Name = User.Identity.Name
            };
           
            return View(view);

        }

        [Authorize]
        public IActionResult add(string name)  // Add new project to Database
        {
            if (ModelState.IsValid)
            {
                Project ProjectTemplate = new Project();
                ProjectTemplate.Name = name;
                try { ProjectTemplate.UserName = User.Identity.Name; } catch (Exception) { };
                _appDbContext.AllProjects.Add(ProjectTemplate);
                _appDbContext.SaveChanges();
                return RedirectToAction("Index");
            }

            return RedirectToAction("index");
        }
    }
}
