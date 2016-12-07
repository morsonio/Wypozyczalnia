using Microsoft.AspNet.Identity.EntityFramework;
using System.Data.Entity;
using Wypozyczalnia.Web.Entities;
using Wypozyczalnia.Web.Models;

namespace Wypozyczalnia.Web.DataAccessLayer
{

    public class ApplicationDbContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Car> Cars { get; set; }
        public DbSet<Booking> Bookings { get; set; }

        public ApplicationDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public static ApplicationDbContext Create()
        {
            return new ApplicationDbContext();
        }
    }
}