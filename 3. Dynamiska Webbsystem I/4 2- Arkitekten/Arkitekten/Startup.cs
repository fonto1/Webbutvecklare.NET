using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Arkitekten.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

namespace Arkitekten
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddDbContext<AppDbContext>(options =>     // database
                options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));


            services.AddDefaultIdentity<IdentityUser>().AddEntityFrameworkStores<AppDbContext>();
            services.AddScoped<IProductRepository, ProductRepository>();
            services.AddScoped<IProjectRepository, ProjectRepository>();
            services.AddScoped<IBindRepository, BindRepository>();

            services.AddControllersWithViews(); // MVC
            services.AddRazorPages();
           
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseHttpsRedirection();  // ber programmet att k�ra https
            app.UseStaticFiles(); // g�r s� att programmet kan k�ra statisk filer, bilder, javafiles etc




            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                      name: "default",
                      pattern: "{controller=Home}/{Action=Index}/{id?}"); // �ndra default sida
                endpoints.MapRazorPages();
        });
        }
    }
}
