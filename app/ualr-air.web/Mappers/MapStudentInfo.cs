using web.ualrair.Models.ViewModels;
using web.ualrair.core.Models;

namespace web.ualrair.Mappers
{
  public class MapStudentInfo : IMapStudentInfo
  {
    public StudentInfo Map(StudentInfoViewModel viewModel)
    {
      return new StudentInfo
      {
        Email = viewModel.Email,
        Password = viewModel.Password,
        Interest = viewModel.Interest,
        StudentType = viewModel.StudentType
      };
    }
  }
}
