using FluentValidation;
using System;
using System.Collections.Generic;
using System.Text;
using web.ualrair.core.Models;
using web.ualrair.core.Models.ValidationModels;

namespace web.ualrair.core.Validators
{
  public class RegisterStudentValidator : AbstractValidator<RegisterStudentValidationModel>
  {
    public RegisterStudentValidator()
    {
      CascadeMode = CascadeMode.StopOnFirstFailure;

      RuleFor(v => v)
        .Must(HaveUniqueEmail)
        .WithMessage("This email is already in use.  Please enter a unique email.");
    }

    public bool HaveUniqueEmail(RegisterStudentValidationModel validator)
    {
      if (validator.ExistingInstance?.Email == validator.Model.Email)
      {
        return false;
      }
      return true;
    }
  }
}
