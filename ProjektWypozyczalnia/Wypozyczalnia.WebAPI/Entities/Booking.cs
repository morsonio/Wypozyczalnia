using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;
using Wypozyczalnia.WebAPI.Models;

namespace Wypozyczalnia.WebAPI.Entities
{
    public class Booking
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public DateTime BookingStartDate { get; set; }

        [Required]
        public DateTime BookingEndDate { get; set; }

        public int CarRefId { get; set; }

        [ForeignKey("CarRefId")]
        public virtual Car Car { get; set; }

        public string UserRefId { get; set; }

        [ForeignKey("UserRefId")]
        public virtual ApplicationUser User { get; set; }
    }
}