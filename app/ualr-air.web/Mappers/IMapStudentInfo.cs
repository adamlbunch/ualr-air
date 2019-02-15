using web.ualrair.core.Models;
using web.ualrair.Models.ViewModels;

namespace web.ualrair.Mappers
{
  public interface IMapStudentInfo
  {
    StudentInfo Map(StudentInfoViewModel viewModel);
  }
}
