using StructureMap;
using web.ualrair.core.Controls.RegisterStudent;
using web.ualrair.core.Repositories;
using web.ualrair.core.Controls.LoginStudent;
using web.ualrair.Mappers;
using web.ualrair.Sanitizers;

namespace web.ualrair
{
	public class DependencyRegistry : Registry
	{
		public DependencyRegistry()
		{
      Scan(x =>
      {
        x.TheCallingAssembly();
        x.WithDefaultConventions();
      });

      For<IRegisterStudent>().Add<RegisterStudent>();
      For<IMapStudentInfo>().Add<MapStudentInfo>();
      For<IRepositoryAccess>().Add<RepositoryAccess>();
      For<IUalrairRepository>().Add<UalrairRepository>();
      For<ISanitizeStudentInfoViewModel>().Add<SanitizeStudentInfoViewModel>();
      For<ISanitizeStudentLoginViewModel>().Add<SanitizeStudentLoginViewModel>();
      For<ILoginStudent>().Add<LoginStudent>();
		}
	}
}
