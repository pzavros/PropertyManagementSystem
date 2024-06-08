using Backend.Enums;
using Microsoft.EntityFrameworkCore;

namespace Backend.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Store RoleName as string
            modelBuilder.Entity<Role>()
                .Property(r => r.RoleName)
                .HasConversion(
                    v => v.ToString(),
                    v => (RoleEnum)Enum.Parse(typeof(RoleEnum), v)
                );

            modelBuilder.Entity<Role>().HasData(
                new Role { Id = 1, RoleName = RoleEnum.Admin },
                new Role { Id = 2, RoleName = RoleEnum.User }
            );
        }

        public DbSet<Item> Items { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
    }
}
