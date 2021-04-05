using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToDo.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

      
        public DbSet<Models.Task> Tasks { get; set; }
        public DbSet<WorkList> WorkLists { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
           
        }
    }
}
