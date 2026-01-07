
    let countriesAndStatesData = null;

    document.addEventListener('DOMContentLoaded', function () {
      const registrationPage = document.getElementById('registrationPage');
      const loginSidebar = document.getElementById('loginSidebar');
      const existingSellerLogin = document.getElementById('existingSellerLogin');
      const forgotPasswordLink = document.getElementById('forgotPasswordLink');
      const merchantLoginLink = document.getElementById('merchantLoginLink');
      const sellerLoginForm = document.getElementById('sellerLoginForm');
      const forgotPasswordForm = document.getElementById('forgotPasswordForm');
      const resetPasswordForm = document.getElementById('resetPasswordForm');
      const backToLoginFromForgot = document.getElementById('backToLoginFromForgot');
      const backToForgotPassword = document.getElementById('backToForgotPassword');
      const sendOTPForm = document.getElementById('sendOTPForm');
      const resetPasswordWithOTPForm = document.getElementById('resetPasswordWithOTPForm');
      const merchantLoginSection = document.getElementById('merchantLoginSection');
      const countrySelect = document.getElementById('country');
      const stateSelect = document.getElementById('state');

      function setupPasswordToggle(passwordId, toggleId) {
        const toggleBtn = document.getElementById(toggleId);
        const passwordInput = document.getElementById(passwordId);

        if (toggleBtn && passwordInput) {
          toggleBtn.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');
          });
        }
      }

      setupPasswordToggle('password', 'togglePassword');
      setupPasswordToggle('confirmPassword', 'toggleConfirmPassword');
      setupPasswordToggle('loginPassword', 'toggleLoginPassword');
      setupPasswordToggle('newPassword', 'toggleNewPassword');
      setupPasswordToggle('confirmNewPassword', 'toggleConfirmNewPassword');

      async function loadCountriesAndStatesData() {
        try {
          const loadingOption = document.getElementById('loadingCountries');
          if (loadingOption) {
            loadingOption.textContent = 'Loading countries...';
          }


          const response = await fetch('js/states.js');

          if (response.ok) {
            const dataText = await response.text();
            const match = dataText.match(/const country_and_states = ({[\s\S]*});/);

            if (match) {
              try {
                const country_and_states = eval('(' + match[1] + ')');
                countriesAndStatesData = country_and_states;
                console.log('Loaded data from states.js:', countriesAndStatesData);
              } catch (e) {
                console.error('Error parsing data from states.js:', e);
                loadFallbackData();
              }
            } else {
              console.warn('Could not find country_and_states object in states.js');
              loadFallbackData();
            }
          } else {
            console.warn('states.js file not found, using fallback data');
            loadFallbackData();
          }


          populateCountryDropdown(countrySelect);
        } catch (error) {
          console.error('Error loading countries data:', error);
          loadFallbackData();
          populateCountryDropdown(countrySelect);
        }
      }


      function loadFallbackData() {
        countriesAndStatesData = {
          country: {
            "IN": "India",
            "US": "United States",
            "AE": "United Arab Emirates",
            "GB": "United Kingdom",
            "CA": "Canada",
            "AU": "Australia",
            "DE": "Germany"
          },
          states: {
            "IN": [
              { "code": "DL", "name": "Delhi" },
              { "code": "MH", "name": "Maharashtra" },
              { "code": "KA", "name": "Karnataka" },
              { "code": "TN", "name": "Tamil Nadu" },
              { "code": "GJ", "name": "Gujarat" }
            ],
            "US": [
              { "code": "CA", "name": "California" },
              { "code": "TX", "name": "Texas" },
              { "code": "FL", "name": "Florida" },
              { "code": "NY", "name": "New York" },
              { "code": "WA", "name": "Washington" }
            ],
            "AE": [
              { "code": "DU", "name": "Dubai" },
              { "code": "AB", "name": "Abu Dhabi" },
              { "code": "SH", "name": "Sharjah" },
              { "code": "AJ", "name": "Ajman" },
              { "code": "RA", "name": "Ras Al Khaimah" }
            ],
            "GB": [
              { "code": "ENG", "name": "England" },
              { "code": "SCT", "name": "Scotland" },
              { "code": "WLS", "name": "Wales" },
              { "code": "NIR", "name": "Northern Ireland" }
            ],
            "CA": [
              { "code": "ON", "name": "Ontario" },
              { "code": "BC", "name": "British Columbia" },
              { "code": "QC", "name": "Quebec" },
              { "code": "AB", "name": "Alberta" }
            ],
            "AU": [
              { "code": "NSW", "name": "New South Wales" },
              { "code": "VIC", "name": "Victoria" },
              { "code": "QLD", "name": "Queensland" },
              { "code": "WA", "name": "Western Australia" }
            ],
            "DE": [
              { "code": "BY", "name": "Bavaria" },
              { "code": "BE", "name": "Berlin" },
              { "code": "HH", "name": "Hamburg" },
              { "code": "NW", "name": "North Rhine-Westphalia" }
            ]
          }
        };
      }

      function populateCountryDropdown(selectElement) {
        if (!countriesAndStatesData || !countriesAndStatesData.country) {
          console.error('Countries data not loaded yet');
          return;
        }


        selectElement.innerHTML = '<option value="">Select Country</option>';


        for (const [code, name] of Object.entries(countriesAndStatesData.country)) {
          const option = document.createElement('option');
          option.value = code;
          option.textContent = name;
          selectElement.appendChild(option);
        }

        const loadingOption = document.getElementById('loadingCountries');
        if (loadingOption) {
          loadingOption.remove();
        }
      }

      function populateStateDropdown(countryCode, stateSelectElement) {
        stateSelectElement.innerHTML = '<option value="">Select State</option>';
        stateSelectElement.disabled = true;

        if (!countryCode || !countriesAndStatesData || !countriesAndStatesData.states) {
          return;
        }

        const states = countriesAndStatesData.states[countryCode];

        if (states && Array.isArray(states)) {
          stateSelectElement.disabled = false;

          const sortedStates = [...states].sort((a, b) => a.name.localeCompare(b.name));

          sortedStates.forEach(state => {
            const option = document.createElement('option');
            option.value = state.code;
            option.textContent = state.name;
            stateSelectElement.appendChild(option);
          });
        }

        const loadingOption = document.getElementById('loadingStates');
        if (loadingOption) {
          loadingOption.remove();
        }
      }

      loadCountriesAndStatesData();

      countrySelect.addEventListener('change', function () {
        const country = this.value;
        populateStateDropdown(country, stateSelect);
        document.getElementById('stateError').style.display = 'none';
      });

      existingSellerLogin.addEventListener('click', function (e) {
        e.preventDefault();
        loginSidebar.scrollIntoView({ behavior: 'smooth' });
      });

      forgotPasswordLink.addEventListener('click', function (e) {
        e.preventDefault();
        showForgotPasswordForm();
      });

      backToLoginFromForgot.addEventListener('click', function (e) {
        e.preventDefault();
        showLoginForm();
      });

      backToForgotPassword.addEventListener('click', function (e) {
        e.preventDefault();
        showForgotPasswordForm();
      });

      merchantLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        alert('Redirecting to merchant login page...');
      });


      function showLoginForm() {
        sellerLoginForm.style.display = 'block';
        forgotPasswordForm.style.display = 'none';
        resetPasswordForm.style.display = 'none';
        merchantLoginSection.style.display = 'block';
      }

      function showForgotPasswordForm() {
        sellerLoginForm.style.display = 'none';
        forgotPasswordForm.style.display = 'block';
        resetPasswordForm.style.display = 'none';
        merchantLoginSection.style.display = 'none';

        document.getElementById('forgotEmail').value = '';
        document.getElementById('otpSentMessage').style.display = 'none';
      }

      function showResetPasswordForm() {
        sellerLoginForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
        resetPasswordForm.style.display = 'block';
        merchantLoginSection.style.display = 'none';

        resetOTPInputs();
        startOTPTimer();
      }

      const vendorForm = document.getElementById('vendorRegistrationForm');
      const successMessage = document.getElementById('successMessage');
      const registerButtonText = document.getElementById('registerButtonText');
      const registerButtonLoading = document.getElementById('registerButtonLoading');

      vendorForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        registerButtonText.style.display = 'none';
        registerButtonLoading.style.display = 'inline-block';

        let isValid = validateVendorForm();

        if (isValid) {
          await new Promise(resolve => setTimeout(resolve, 1500));

          successMessage.style.display = 'block';
          vendorForm.reset();
          stateSelect.innerHTML = '<option value="">Select State</option>';
          stateSelect.disabled = true;
          window.scrollTo({ top: 0, behavior: 'smooth' });

          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        }

        registerButtonText.style.display = 'inline-block';
        registerButtonLoading.style.display = 'none';
      });

      function validateVendorForm() {
        let isValid = true;

        document.querySelectorAll('.message--error').forEach(msg => {
          msg.style.display = 'none';
        });

        const requiredFields = [
          'companyName', 'contactName', 'phone', 'email',
          'password', 'confirmPassword', 'address1',
          'country', 'state', 'city', 'zipCode'
        ];

        requiredFields.forEach(fieldId => {
          const field = document.getElementById(fieldId);
          if (field && !field.value.trim()) {
            isValid = false;
            const errorElement = document.getElementById(fieldId + 'Error');
            if (errorElement) {
              errorElement.style.display = 'block';
            }
          }
        });


        const emailField = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailField.value && !emailRegex.test(emailField.value)) {
          isValid = false;
          document.getElementById('emailError').textContent = 'Please enter a valid email address';
          document.getElementById('emailError').style.display = 'block';
        }


        const passwordField = document.getElementById('password');
        if (passwordField.value && passwordField.value.length < 8) {
          isValid = false;
          document.getElementById('passwordError').style.display = 'block';
        }

        const confirmPassword = document.getElementById('confirmPassword');
        if (passwordField.value !== confirmPassword.value) {
          isValid = false;
          document.getElementById('confirmPasswordError').style.display = 'block';
        }

        return isValid;
      }


      sellerLoginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;


        document.getElementById('loginEmailError').style.display = 'none';
        document.getElementById('loginPasswordError').style.display = 'none';


        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (!email) {
          isValid = false;
          document.getElementById('loginEmailError').style.display = 'block';
        }

        if (!password) {
          isValid = false;
          document.getElementById('loginPasswordError').style.display = 'block';
        }

        if (isValid) {
          alert('Seller login successful! Redirecting to dashboard...');

        }
      });

      sendOTPForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const emailField = document.getElementById('forgotEmail');
        const email = emailField.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Reset error
        document.getElementById('forgotEmailError').style.display = 'none';

        if (!email || !emailRegex.test(email)) {
          document.getElementById('forgotEmailError').textContent = 'Please enter a valid email address';
          document.getElementById('forgotEmailError').style.display = 'block';
          return;
        }


        document.getElementById('otpSentMessage').style.display = 'block';
        emailField.disabled = true;


        setTimeout(() => {
          showResetPasswordForm();
        }, 2000);
      });

      function setupOTPInputs() {
        const otpInputs = document.querySelectorAll('.otp-input');

        otpInputs.forEach(input => {
          input.addEventListener('input', function () {
            const nextIndex = parseInt(this.getAttribute('data-index')) + 1;
            const nextInput = document.getElementById('otp' + nextIndex);

            if (this.value.length === 1 && nextInput) {
              nextInput.focus();
            }

            updateFullOTP();
          });

          input.addEventListener('keydown', function (e) {
            if (e.key === 'Backspace' && this.value.length === 0) {
              const prevIndex = parseInt(this.getAttribute('data-index')) - 1;
              const prevInput = document.getElementById('otp' + prevIndex);

              if (prevInput) {
                prevInput.focus();
              }
            }
          });
        });
      }

      function updateFullOTP() {
        let fullOTP = '';
        const otpInputs = document.querySelectorAll('.otp-input');

        otpInputs.forEach(input => {
          fullOTP += input.value;
        });

        document.getElementById('fullOTP').value = fullOTP;
      }

      function resetOTPInputs() {
        const otpInputs = document.querySelectorAll('.otp-input');
        otpInputs.forEach(input => {
          input.value = '';
        });
        updateFullOTP();
      }

      setupOTPInputs();


      let otpTimer;
      let timeLeft = 120; // 2 minutes in seconds

      function startOTPTimer() {
        timeLeft = 120;
        const timerElement = document.getElementById('timer');
        const resendLink = document.getElementById('resendOTPLink');

        resendLink.classList.add('disabled');
        resendLink.textContent = 'Resend OTP (120s)';

        clearInterval(otpTimer);

        otpTimer = setInterval(() => {
          timeLeft--;

          const minutes = Math.floor(timeLeft / 60);
          const seconds = timeLeft % 60;
          timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

          if (timeLeft <= 60) {
            resendLink.textContent = `Resend OTP (${timeLeft}s)`;
          }

          if (timeLeft <= 0) {
            clearInterval(otpTimer);
            timerElement.textContent = '00:00';
            resendLink.textContent = 'Resend OTP';
            resendLink.classList.remove('disabled');
          }
        }, 1000);
      }

      document.getElementById('resendOTPLink').addEventListener('click', function (e) {
        e.preventDefault();

        if (this.classList.contains('disabled')) {
          return;
        }

        alert('New OTP has been sent to your email.');
        resetOTPInputs();
        startOTPTimer();
      });

      resetPasswordWithOTPForm.addEventListener('submit', function (e) {
        e.preventDefault();

        document.getElementById('otpError').style.display = 'none';
        document.getElementById('newPasswordError').style.display = 'none';
        document.getElementById('confirmNewPasswordError').style.display = 'none';

        const fullOTP = document.getElementById('fullOTP').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmNewPassword = document.getElementById('confirmNewPassword').value;

        let isValid = true;

        if (fullOTP.length !== 6) {
          isValid = false;
          document.getElementById('otpError').style.display = 'block';
        }

        if (newPassword.length < 8) {
          isValid = false;
          document.getElementById('newPasswordError').style.display = 'block';
        }

        if (newPassword !== confirmNewPassword) {
          isValid = false;
          document.getElementById('confirmNewPasswordError').style.display = 'block';
        }

        if (isValid) {
          document.getElementById('passwordResetSuccess').style.display = 'block';

          setTimeout(() => {
            document.getElementById('passwordResetSuccess').style.display = 'none';
            showLoginForm();
            alert('Password has been reset successfully. Please login with your new password.');
          }, 2000);
        }
      });

      setupRealTimeValidation('email', validateEmail);
      setupRealTimeValidation('password', validatePassword);
      setupRealTimeValidation('confirmPassword', validateConfirmPassword);

      function setupRealTimeValidation(fieldId, validationFn) {
        const field = document.getElementById(fieldId);
        if (field) {
          field.addEventListener('input', validationFn);
          field.addEventListener('blur', validationFn);
        }
      }

      function validateEmail() {
        const emailField = document.getElementById('email');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const errorElement = document.getElementById('emailError');

        if (emailField.value && !emailRegex.test(emailField.value)) {
          errorElement.textContent = 'Please enter a valid email address';
          errorElement.style.display = 'block';
        } else {
          errorElement.style.display = 'none';
        }
      }

      function validatePassword() {
        const passwordField = document.getElementById('password');
        const errorElement = document.getElementById('passwordError');

        if (passwordField.value && passwordField.value.length < 8) {
          errorElement.style.display = 'block';
        } else {
          errorElement.style.display = 'none';
        }

        // Also validate confirm password
        validateConfirmPassword();
      }

      function validateConfirmPassword() {
        const passwordField = document.getElementById('password');
        const confirmField = document.getElementById('confirmPassword');
        const errorElement = document.getElementById('confirmPasswordError');

        if (confirmField.value && passwordField.value !== confirmField.value) {
          errorElement.style.display = 'block';
        } else {
          errorElement.style.display = 'none';
        }
      }

      // Phone number validation
      const phoneField = document.getElementById('phone');
      phoneField.addEventListener('input', function () {
        const errorElement = document.getElementById('phoneError');
        const phoneValue = this.value.replace(/\D/g, '');

        if (phoneValue.length < 10) {
          errorElement.textContent = 'Phone number must be at least 10 digits';
          errorElement.style.display = 'block';
        } else {
          errorElement.style.display = 'none';
        }
      });
    });
