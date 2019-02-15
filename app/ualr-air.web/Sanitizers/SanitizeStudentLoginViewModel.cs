using web.ualrair.Models.ViewModels;

namespace web.ualrair.Sanitizers
{
  public class SanitizeStudentLoginViewModel : ISanitizeStudentLoginViewModel
  {
    public StudentInfoViewModel Sanitize(StudentInfoViewModel viewModel)
    {
      return new StudentInfoViewModel
      {
        Email = viewModel.Email.ToUpper().Trim(),
        Password = viewModel.Password
      };
    }
  }
}
