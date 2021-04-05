using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nasa3.Controllers
{
    public class ApiController:Controller
    {

        public ViewResult ApiInfo()
        {

            return View();
        }
    }
}
