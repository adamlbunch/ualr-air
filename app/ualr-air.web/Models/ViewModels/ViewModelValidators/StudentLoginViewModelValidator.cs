using FluentValidation;

namespace web.ualrair.Models.ViewModels.ViewModelValidators
{
  public class StudentLoginViewModelValidator : AbstractValidator<StudentInfoViewModel>
  {
    public StudentLoginViewModelValidator()
    {
      RuleFor(x => x.Email)
        .NotEmpty()
        .WithMessage("Please enter an email address.")
        .Matches(@"^.{1,50}$")
        .EmailAddress()
        .WithMessage("Please enter a valid email address.");

      RuleFor(x => x.Password)
        .NotEmpty()
        .WithMessage("Please enter a password.");
    }
  }
}
