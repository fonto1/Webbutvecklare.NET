using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDo.Models
{
    public class WorkListRepository:IWorkListRepository
    {
        private readonly AppDbContext _appDbContext;

        public WorkListRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

   

        public WorkList[] GetALLWorkLists()
        {
            IQueryable<WorkList> query = _appDbContext.WorkLists.Include(x => x.List);

             return query.ToArray();
                 
        }
    }
}
