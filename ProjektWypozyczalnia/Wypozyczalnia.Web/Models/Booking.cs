using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Wypozyczalnia.Web.Models
{
    public class Booking
    {
        public int Id { get; set; }

        [ForeignKey("Car")]
        public int CarId { get; set; }

        public virtual Car Car { get; set; }

        public int ApplicationUserRefId { get; set; }

        [ForeignKey("ApplicationUserRefId")]
        public virtual ApplicationUser User { get; set; }

        public DateTime BookingStartDate { get; set; }

        public DateTime BookingEndDate { get; set; }
    }
}