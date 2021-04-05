using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Arkitekten.Models
{
    public class AppDbContext : IdentityDbContext<IdentityUser>

    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {

        }

        public DbSet<Product> AllProducts { get; set; }
        public DbSet<Project> AllProjects { get; set; }
        public DbSet<Bind> AllBinds { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {

            base.OnModelCreating(builder);



            builder.Entity<Product>().HasData(new Product
            {
                ProductId = 1,
                Type = "Parquet",
                Color = "Black",
                Price = 100

            });

            builder.Entity<Product>().HasData(new Product
            {
                ProductId = 2,
                Type = "Parquet",
                Color = "White",
                Price = 110
            });

            builder.Entity<Product>().HasData(new Product
            {
                ProductId = 3,
                Type = "Parquet",
                Color = "Green",
                Price = 120
            });

            builder.Entity<Product>().HasData(new Product
            {
                ProductId = 4,
                Type = "Parquet",
                Color = "Grey",
                Price = 130
            });

            builder.Entity<Product>().HasData(new Product
            {
                ProductId = 5,
                Type = "Parquet",
                Color = "Yellow",
                Price = 200
            });

            builder.Entity<Product>().HasData(new Product
            {
                ProductId = 6,
                Type = "Marmon",
                Color = "White",
                Price = 1000
            });

            builder.Entity<Product>().HasData(new Product
            {
                ProductId = 7,
                Type = "Marmon",
                Color = "Green",
                Price = 1500
            });

            builder.Entity<Product>().HasData(new Product
            {
                ProductId = 8,
                Type = "Marmon",
                Color = "Grey",
                Price = 3000
            });

            builder.Entity<Product>().HasData(new Product
            {
                ProductId = 9,
                Type = "Marmon",
                Color = "Black",
                Price = 55555
            });

            builder.Entity<Product>().HasData(new Product
            {
                ProductId = 10,
                Type = "Marmon",
                Color = "Brown",
                Price = 10000
            });
        }
    }
}
