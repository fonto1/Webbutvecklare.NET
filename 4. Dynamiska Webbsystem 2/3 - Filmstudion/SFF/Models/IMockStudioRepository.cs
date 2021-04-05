using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SFF.Models
{
    public interface IMockStudioRepository
    {


        List<Studios> AllStudios { get; set; }
        void AddStudio(Studios studio);
        void RemoveStudio(Studios studio);
        void ChangeStudioProperties(string name, Studios studios);

    }
}
