using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Wypozyczalnia.Web.Models
{
    public class Car
    {
        public int Id { get; set; }

        public string Brand { get; set; }

        public string Model { get; set; }

        [ForeignKey("Booking")]
        public int BookingId { get; set; }

        public virtual Booking Booking { get; set; }
    }
}