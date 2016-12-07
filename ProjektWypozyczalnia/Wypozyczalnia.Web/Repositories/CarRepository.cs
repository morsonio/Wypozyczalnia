using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Wypozyczalnia.Web.DataAccessLayer;
using Wypozyczalnia.Web.Models;

namespace Wypozyczalnia.Web.Repositories
{
    public class CarRepository
    {
        protected ApplicationDbContext _context;

        public CarRepository()
        {
            this._context = new ApplicationDbContext();
        }

        public List<CarModel> GetAll()
        {
            var carList = _context.Cars.ToList();
            List<CarModel> carModelList = new List<CarModel>();
            foreach (var car in carList)
            {
                carModelList.Add(new CarModel { Id = car.Id, Brand = car.Brand, Model = car.Model });
            }
            return carModelList;
        }
    }
}