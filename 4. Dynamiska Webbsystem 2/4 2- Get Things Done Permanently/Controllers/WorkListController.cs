using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDo.Models;

namespace ToDo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WorkListController:ControllerBase
    {
        private readonly AppDbContext _appDbContext;
        private readonly IWorkListRepository _workListRepository;
        private readonly LinkGenerator _linkGenerator;

        public WorkListController(AppDbContext appDbContext, IWorkListRepository workListRepository, LinkGenerator linkGenerator) 
        {
            _appDbContext = appDbContext;
            _workListRepository = workListRepository;
            _linkGenerator = linkGenerator;
        }



        [HttpPost]
        public ActionResult<WorkList> Post(WorkList _worklist)
        {
            var url = _linkGenerator.GetPathByAction("Get", "Worklist");

            if (ModelState.IsValid)
            {

                _appDbContext.WorkLists.Add(_worklist);
                _appDbContext.SaveChanges();

                return Created(url, _worklist);
            }

            return BadRequest("something went wrong with worklist create");
        }

        [HttpGet]
        public ActionResult<WorkList[]> Get()
        {
            var works = _workListRepository.GetALLWorkLists();


            return works;
        }

        [HttpGet]
        [Route("{id}")]
        public ActionResult <WorkList> Get(int id)
        {
            var temp = _workListRepository.GetALLWorkLists().FirstOrDefault(p => p.WorkListId == id);

            if (temp !=null)
            {
              

                return temp;
            }

            return BadRequest("Worklist doesnt exist");
        }

        [HttpDelete]
        [Route("{id}")]
        public ActionResult Delete(int id)
        {
            var temp = _workListRepository.GetALLWorkLists().FirstOrDefault(p => p.WorkListId == id);

            if (temp!=null)

            {
               
                _appDbContext.Remove(temp);
                _appDbContext.SaveChanges();
                return Ok("Deleted");
            }

            return BadRequest("Worklist doesnt exist");
        }

        [HttpPut]
        [Route("{id}")]
        public ActionResult<WorkList> Put(int id, WorkList _worklist)
        {
            var temp = _workListRepository.GetALLWorkLists().FirstOrDefault(p => p.WorkListId == id);
            if (temp != null)
            {
                temp.Name = _worklist.Name;
                _appDbContext.SaveChanges();
                return temp;
            }

            return BadRequest("worklist doesnt exist");
        }
    }
}
