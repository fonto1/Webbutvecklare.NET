using Microsoft.AspNetCore.Mvc;
using SFF.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SFF.Controllers
{
    public class testController : Controller

    {
        private readonly IMockMoviesRepository _mockMovies;

        public testController(IMockMoviesRepository mockMovies)
        {
            _mockMovies = mockMovies;
        }


        public IActionResult Save()
        {

            return View();

        }

        public ViewResult abc()
        {
            

            return View(_mockMovies.AllMovies);
        }
    }
}
