using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace ToDo.Models
{
    public class WorkList
    {
        public WorkList()
        {
            List = new List<Models.Task>();
        }

        public string Name { get; set; }
        public int WorkListId { get; set; }

        public ICollection<Models.Task> List { get; set; }
   
    }
}
