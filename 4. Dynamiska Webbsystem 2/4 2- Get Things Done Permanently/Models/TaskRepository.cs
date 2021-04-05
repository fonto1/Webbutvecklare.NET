using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDo.Models
{
    public class TaskRepository:ITaskRepository
    {
        private readonly AppDbContext _appDbContext;

        public TaskRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

       

        public Models.Task[] GetAllTask(int id)

        {
            IQueryable<Models.Task> query = _appDbContext.Tasks.Where(p=>p.WorkList.WorkListId == id);

            return query.ToArray();
        }
    }
}
