using web.ualrair.Models.ViewModels;

namespace web.ualrair.Sanitizers
{
  public class SanitizeStudentInfoViewModel : ISanitizeStudentInfoViewModel
  {
    public StudentInfoViewModel Sanitize(StudentInfoViewModel viewModel)
    {
      return new StudentInfoViewModel
      {
        Email = viewModel.Email.ToUpper().Trim(),
        Interest = viewModel.Interest.ToUpper().Trim(),
        Password = viewModel.Password,
        StudentType = viewModel.StudentType == 'T' ? 'T' : 'N'
      };
    }
  }
}
