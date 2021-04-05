using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Bakery.Models;
using Microsoft.AspNetCore.Mvc;

namespace Bakery.Controllers
{
    public class CakeController: Controller
    {
        private readonly ICake _icake;


        public CakeController(ICake icake)
        {
            _icake = icake;
        }

        public ViewResult List()
        {
           return View(_icake.AllProducts);
        }
        
    }
}
