using FluentValidation;

namespace web.ualrair.Models.ViewModels.ViewModelValidators
{
	public class StudentInfoViewModelValidator : AbstractValidator<StudentInfoViewModel>
	{
		public StudentInfoViewModelValidator()
		{
      ValidatorOptions.CascadeMode = CascadeMode.StopOnFirstFailure;
      RuleFor(x => x.Email)
        .NotEmpty()
        .WithMessage("Please enter an email address.")
        .Matches(@"^.{1,50}$")
        .EmailAddress()
        .WithMessage("Please enter a valid email address.");

      RuleFor(x => x.Password)
        .NotEmpty()
        .WithMessage("Please enter a password.")
        .Matches(@"^.{5,50}$")
        .WithMessage("Please enter a longer password.");

      RuleFor(x => x.Interest)
        .NotEqual("notvalid")
        .WithMessage("Please select a primary interest.");

      RuleFor(x => x.StudentType)
        .NotEmpty()
        .WithMessage("Please select your student type.");
    }
	}
}
