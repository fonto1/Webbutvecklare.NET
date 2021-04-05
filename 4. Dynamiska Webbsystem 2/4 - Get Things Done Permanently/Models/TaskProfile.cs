using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDo.Models
{
    public class TaskProfile : Profile
    {
        public TaskProfile()
        {
            this.CreateMap<Task, TaskModel>().ReverseMap();
        }
    }
}
