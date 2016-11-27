using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Wypozyczalnia.Web.Startup))]
namespace Wypozyczalnia.Web
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
