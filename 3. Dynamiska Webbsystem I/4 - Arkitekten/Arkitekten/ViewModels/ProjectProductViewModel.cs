using Arkitekten.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Arkitekten.ViewModels
{
    public class ProjectProductViewModel
    {
        public float Price { get; set; }
        public string Name { get; set; }
        public IEnumerable<Project> AllProjects { get; set; }
    }
}
