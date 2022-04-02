using Microsoft.EntityFrameworkCore;

namespace api.TODO
{
    public class TodoContext : DbContext
    {
        public DbSet<Task> Task { get; set; } = null!;
        public TodoContext(DbContextOptions options) : base(options)
        {
        }
    }
}