using web.ualrair.Models.ViewModels;

namespace web.ualrair.Sanitizers
{
  public interface ISanitizeStudentLoginViewModel
  {
    StudentInfoViewModel Sanitize(StudentInfoViewModel viewModel);
  }
}
