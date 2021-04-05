using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Arkitekten.Models
{
    public class ProjectRepository:IProjectRepository
    {
        private readonly AppDbContext _appDbContext;

        public ProjectRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public IEnumerable<Project> AllProject
        {
            get
            {
                return _appDbContext.AllProjects;
            }
        }

 

        public void createProject(Project project)
        {
            _appDbContext.AllProjects.Add(project);
            _appDbContext.SaveChanges();
        }
    }
}
