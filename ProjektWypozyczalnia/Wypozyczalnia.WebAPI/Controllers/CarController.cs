using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using Wypozyczalnia.WebAPI.DAL.Repositories;
using Wypozyczalnia.WebAPI.Models;

namespace Wypozyczalnia.WebAPI.Controllers
{
    [EnableCors("http://localhost:1901", "*", "*")]
    public class CarController : ApiController
    {
        CarRepository _carRepo;

        public CarController()
        {
            this._carRepo = new CarRepository();
        }
        public List<CarModel> GetAll()
        {
            return _carRepo.GetAll();
        }
    }
}
