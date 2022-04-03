using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;

namespace api.TODO
{
    public class TodoContext : DbContext
    {
        public DbSet<Task> Task { get; set; } = null!;

        public TodoContext(DbContextOptions options) : base(options)
        {
            this.Database.EnsureCreated();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            var seed = new List<Task>();
            for (int i = 1; i < 101; i++)
            {
      
                string listName = i < 30 ? "A fazer" :i <70 ? "Fazendo" : "Pronto";
                Task task = new() { Id = i, ListName = listName, Name = $"Task {i}", Done = listName == "Pronto" };
                seed.Add(task);
            }
            modelBuilder.Entity<Task>().HasData(seed);
        }

    }
}