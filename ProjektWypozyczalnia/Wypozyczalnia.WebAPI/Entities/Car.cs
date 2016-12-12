using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Wypozyczalnia.WebAPI.Entities
{
    public class Car
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Brand { get; set; }

        [Required]
        public string Model { get; set; }

        public virtual ICollection<Booking> Bookings { get; set; }
    }
}