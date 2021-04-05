using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Arkitekten.Models
{
    public class BindRepository:IBindRepository
    {

        private readonly AppDbContext _appDbContext;

        public BindRepository(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public IEnumerable<Bind> AllBind
        {
            get
            {
                return _appDbContext.AllBinds;
            }
        }


    }
}
