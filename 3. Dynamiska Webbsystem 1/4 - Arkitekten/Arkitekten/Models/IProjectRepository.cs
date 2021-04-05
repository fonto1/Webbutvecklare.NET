using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Arkitekten.Models
{
    public interface IProjectRepository
    {
        IEnumerable<Project> AllProject { get; }

        void createProject(Project project);
    }
}
