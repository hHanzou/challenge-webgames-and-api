using Microsoft.EntityFrameworkCore;

namespace CRUDAPI.Models
{

    public class Context : DbContext
    {
        public DbSet<Game> Games { get; set; }

        public Context(DbContextOptions<Context> options) : base(options)
        {
            
        }

        
    }

}