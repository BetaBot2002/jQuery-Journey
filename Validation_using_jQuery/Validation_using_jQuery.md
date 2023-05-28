# Validation using jQuery
## What is validation?
Validation using jQuery refers to the process of verifying and ensuring that user input in HTML forms meets certain predefined criteria or rules. It involves using jQuery, a JavaScript library, to perform client-side validation checks on form fields before the form is submitted to the server.

With jQuery, you can apply various validation techniques to enforce rules such as mandatory fields, minimum and maximum input length, specific data formats (e.g., email addresses, URLs), numeric or date values, and more. By validating user input on the client-side, you can provide instant feedback to users, improve the user experience, and reduce unnecessary server requests and processing.

jQuery provides several methods, functions, and plugins that facilitate form validation. These include built-in validation methods like `required`, `minlength`, `maxlength`, `email`, `url`, `number`, and `date`. Additionally, jQuery allows for custom validation logic implementation using JavaScript/jQuery code.

The validation process typically involves attaching event handlers to form elements or form submission events, capturing user input, applying validation rules, and displaying error messages or taking appropriate actions based on the validation results. jQuery simplifies this process by providing concise syntax, DOM traversal, and manipulation capabilities, and easy integration with HTML form elements.

Overall, validation using jQuery enhances the reliability and integrity of user-submitted data by ensuring that it meets the specified criteria before being processed or submitted to the server.

## Different in-built validation methods
### Methods and Description
A tabular representation of common form validation methods in jQuery along with their use cases and descriptions:

| Validation Method | Use Case                                      | Description                                                                                                                                                                                                                                       |
|-------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| required          | Mandatory fields                              | Ensures that a field must be filled in before submitting the form.                                                                                                                                                                                 |
| minlength         | Minimum input length                          | Specifies the minimum number of characters required for an input field.                                                                                                                                                                            |
| maxlength         | Maximum input length                          | Specifies the maximum number of characters allowed for an input field.                                                                                                                                                                             |
| pattern           | Pattern matching                              | Matches the input value against a regular expression pattern. Useful for validating specific formats like phone numbers, email addresses, etc.                                                                                                    |
| email             | Email address validation                      | Validates that the input value is in a valid email address format.                                                                                                                                                                                 |
| number            | Numeric value validation                      | Validates that the input value is a numeric value.                                                                                                                                                                                               |
| url               | URL validation                                | Validates that the input value is a valid URL format.                                                                                                                                                                                            |
| date              | Date validation                               | Validates that the input value is a valid date format.                                                                                                                                                                                           |
| min               | Minimum value                                 | Specifies the minimum numeric or date value allowed for an input field.                                                                                                                                                                           |
| max               | Maximum value                                 | Specifies the maximum numeric or date value allowed for an input field.                                                                                                                                                                           |
| equalTo           | Confirming field equality                     | Validates that the input value matches the value of another field, useful for confirming passwords or email addresses.                                                                                                                            |
| remote            | Remote data validation                        | Performs an AJAX request to validate the input value against server-side data or an API.                                                                                                                                                          |
| custom            | Custom validation                             | Allows the implementation of custom validation logic by writing custom JavaScript/jQuery code.                                                                                                                                                    |

These validation methods provide a range of options to validate form inputs based on specific requirements. By utilizing them appropriately, you can ensure data integrity and enhance the user experience by providing real-time feedback on the validity of form input.

### Methods and Usage Examples
A tabular representation of usage examples for common form validation methods in jQuery:

| Validation Method | Example                                             |
|-------------------|-----------------------------------------------------|
| required          | `<input type="text" name="name" required>`          |
| minlength         | `<input type="text" name="username" minlength="5">` |
| maxlength         | `<input type="text" name="comment" maxlength="100">`|
| pattern           | `<input type="text" name="phone" pattern="\d{3}-\d{3}-\d{4}">` |
| email             | `<input type="email" name="email">`                 |
| number            | `<input type="number" name="age">`                  |
| url               | `<input type="url" name="website">`                 |
| date              | `<input type="date" name="dob">`                    |
| min               | `<input type="number" name="quantity" min="1">`     |
| max               | `<input type="number" name="age" max="100">`        |
| equalTo           | `<input type="password" name="password">`           |
|                   | `<input type="password" name="confirm_password" equalTo="password">` |
| remote            | `<input type="text" name="username" remote="/check-username">` |
| custom            | ```javascript $("#myForm").submit(function() { if (customValidation()) { // validation passed, submit form } else { // validation failed, display error } }); ``` |

These examples demonstrate the usage of each validation method within an HTML form. You can apply these examples to your specific form fields and validation requirements.

## What is Custom Validation?
Custom validation in jQuery refers to the ability to define and implement your own validation rules and logic for form fields beyond the built-in validation methods provided by jQuery. It allows you to create unique validation scenarios tailored to your specific requirements.

With custom validation, you have full control over the validation process and can define your own rules based on complex conditions, external data sources, or business logic. This enables you to validate form inputs in a way that aligns with your application's specific needs.

To implement custom validation in jQuery, you typically define a validation function that performs the custom validation logic. This function is invoked when the validation is triggered, such as on form submission or when a form field loses focus. Inside the validation function, you can access the field value, perform any necessary checks, and return a validation result.

Custom validation functions can use JavaScript/jQuery code to perform tasks such as:

- Checking the input against specific conditions or patterns
- Validating the input based on calculations or comparisons
- Interacting with other form fields or elements
- Making AJAX requests to validate against server-side data or APIs
- Implementing complex validation rules or business logic

By utilizing custom validation in jQuery, you can extend the capabilities of form validation and ensure that your form inputs meet the specific criteria or requirements of your application. It allows you to enforce unique rules and provide tailored feedback to users, enhancing the overall user experience and data integrity.
### Example of custom validation:
Here's an example of a custom validation function in jQuery that demonstrates the usage of different validation methods:

```javascript
$(document).ready(function() {
  // Custom validation function
  function customValidation(value, element) {
    // Perform your custom validation logic
    if (value === "") {
      return false; // Validation failed: Required field is empty
    } else if (value.length < 5) {
      return false; // Validation failed: Input length is too short
    } else if (value.length > 10) {
      return false; // Validation failed: Input length is too long
    } else if (!/^[a-zA-Z]+$/.test(value)) {
      return false; // Validation failed: Input contains non-alphabetic characters
    } else if (!value.includes("example")) {
      return false; // Validation failed: Input does not include the word "example"
    }
    
    return true; // Validation passed: Input meets all criteria
  }

  // Attach custom validation to the form field
  $("input[name='customField']").on("blur", function() {
    var value = $(this).val();
    if (!customValidation(value, this)) {
      // Validation failed: Display an error message, add CSS class, or take other actions
      $(this).addClass("error");
      $(this).next(".error-message").text("Invalid input");
    } else {
      // Validation passed: Clear error message, remove CSS class, or proceed with other actions
      $(this).removeClass("error");
      $(this).next(".error-message").text("");
    }
  });

  // Submit event handler for the form
  $("#myForm").submit(function(event) {
    var value = $("input[name='customField']").val();
    if (!customValidation(value, $("input[name='customField']")[0])) {
      // Custom validation failed: Prevent form submission
      event.preventDefault();
      // Display a general error message or take other actions
      $("#error-message").text("Form submission failed. Please check your inputs.");
    }
  });
});
```

In this example, we define a custom validation function called `customValidation` that checks the input value against various criteria:

1. Required Field: The function checks if the value is empty.
2. Minimum Length: It verifies that the input length is at least 5 characters.
3. Maximum Length: It ensures that the input length is no more than 10 characters.
4. Alphabetic Characters: It checks if the input contains only alphabetic characters.
5. Word Inclusion: It confirms that the input includes the word "example".

The custom validation function returns `false` if any of the validation checks fail, indicating that the input is invalid. Otherwise, it returns `true` to signify that the input meets all the validation criteria.

We then attach the custom validation function to the `blur` event of the form field with the name "customField". When the field loses focus, the validation function is triggered, and based on the validation result, an error message is displayed or the field is marked with an "error" CSS class.

Additionally, we handle the form's submit event to perform custom validation before submission. If the custom validation fails, the form submission is prevented, and a general error message is displayed.

Note: In this example, the error messages are assumed to be displayed in elements with the class "error-message" and the general error message is shown in an element with the id "error-message". Adjust the code according to your specific HTML structure and error message handling requirements.

By incorporating various validation checks within the custom validation function, you can create flexible and comprehensive form validation that combines different validation methods.