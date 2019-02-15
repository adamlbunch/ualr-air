using web.ualrair.Models.ViewModels;

namespace web.ualrair.Sanitizers
{
  public interface ISanitizeStudentInfoViewModel
  {
    StudentInfoViewModel Sanitize(StudentInfoViewModel viewModel);
  }
}
