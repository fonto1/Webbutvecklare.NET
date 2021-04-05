using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Arkitekten.Models
{
    public interface IBindRepository
    {

        public IEnumerable<Bind> AllBind { get; }
    }
}
