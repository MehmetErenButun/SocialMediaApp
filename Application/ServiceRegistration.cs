using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistence;

namespace Application
{
    public static class ServiceRegistration
    {
        public static IServiceCollection AddApplicationRegistration(this IServiceCollection services,IConfiguration _configuration)
        {
          

              services.AddDbContext<DataContext>(o => {
                o.UseSqlite(_configuration.GetConnectionString("SqliteConnection"));
            });

              var asm = Assembly.GetExecutingAssembly();
            services.AddAutoMapper(asm);
            services.AddMediatR(asm);

            return services;
        }
    }
}