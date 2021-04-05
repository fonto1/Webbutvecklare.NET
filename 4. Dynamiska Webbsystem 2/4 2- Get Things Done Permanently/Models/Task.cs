using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDo.Models
{
    public class Task
    {
        public int TaskId { get; set; }
        public string Name { get; set; }
        public Boolean Done { get; set; }
        public WorkList WorkList { get; set; }

    }
}
