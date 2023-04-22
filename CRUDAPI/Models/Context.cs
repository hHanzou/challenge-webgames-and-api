using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.Models
{

    public class Context : DbContext
    {

        public Context(DbContextOptions<Context> options) : base(options)
        {
            
        }

        public DbSet<Game> Games { get; set; }

   

        
    }

}