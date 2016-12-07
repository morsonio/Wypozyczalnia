using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Wypozyczalnia.Web.Models;

namespace Wypozyczalnia.Web.Entities
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