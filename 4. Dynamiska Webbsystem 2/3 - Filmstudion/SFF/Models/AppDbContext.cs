using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SFF.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Movies> AllMovies { get; set; }
        public DbSet<Studios> AllStudios { get; set; }
       


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

/*

            builder.Entity<Studios>()
                .HasData(new Studios 
                { 
                    Name = "SuperStudion", 
                    City = "Malmö", 
                    StudioId = 1 
                });
            builder.Entity<Movies>()
                .HasData(new Movies 
                { 
                    Name = "Superman", 
                    RentCount = 0, 
                    MovieId = 1 });

    */
        }
        
    }
}
