using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDo.Models;

namespace ToDo.Controllers
{
    [Route("api/worklist/{id}/task")]
    [ApiController]

    public class TaskController : ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        private readonly IWorkListRepository _workListRepository;
        private readonly LinkGenerator _linkGenerator;
        private readonly ITaskRepository _taskRepository;
        private readonly IMapper _mapper;

        public TaskController(AppDbContext appDbContext, IWorkListRepository workListRepository, LinkGenerator linkGenerator, ITaskRepository taskRepository, IMapper mapper)
        {
            _appDbContext = appDbContext;
            _workListRepository = workListRepository;
            _linkGenerator = linkGenerator;
            _taskRepository = taskRepository;
            _mapper = mapper;
        }


        [HttpPost]
        public ActionResult<TaskModel> Post(int id, Models.Task temptask)
        {
            var url = _linkGenerator.GetPathByAction("Get", "task");

            if (ModelState.IsValid)
            {
                var workList = _appDbContext.WorkLists.FirstOrDefault(p => p.WorkListId == id);

                workList.List.Add(temptask);
                _appDbContext.SaveChanges();

                var returnTask = _mapper.Map<TaskModel>(temptask);

                return Created(url, returnTask);
            }


            return BadRequest("could not create task");
        }




        [HttpGet]
        public ActionResult<Models.Task[]> Get(int id)
        {
           var tasks = _taskRepository.GetAllTask(id);

            if(tasks != null)
            {
                return tasks;
            }

            return BadRequest("nothing here");
        }

        [HttpDelete]
        [Route("{taskid}")]
        public ActionResult<Models.Task> Delete(int id, int taskid)
        {
            var tasks = _taskRepository.GetAllTask(id);

            if (tasks.Any(p => p.TaskId == taskid))
            {
                var deletetask = tasks.FirstOrDefault(p => p.TaskId == taskid);
                _appDbContext.Remove(deletetask);
                _appDbContext.SaveChanges();
                return Ok("deleted");
            }

            return BadRequest("nothing here");
        }

        [HttpPut]
        [Route("{taskid}")]
        public ActionResult<Models.Task> Put(int id, int taskid,Models.Task _task)
        {
            var tasks = _taskRepository.GetAllTask(id);

            if (tasks.Any(p => p.TaskId == taskid))
            {
                
                var editask = tasks.FirstOrDefault(p => p.TaskId == taskid);
                if(_task.Name == null)
                {
                   editask.Done = _task.Done;
                }
                else
                {
                    editask.Name = _task.Name;
                }
                _appDbContext.SaveChanges();
                return Ok("edited");
            }

            return BadRequest("nothing here");
        }
    }
}
