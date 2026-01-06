
        const appData = {
            languages: [
                { code: "en", name: "English" },
                { code: "hi", name: "Hindi" },
                { code: "es", name: "Spanish" },
                { code: "fr", name: "French" },
                { code: "de", name: "German" },
                { code: "zh", name: "Chinese" },
                { code: "ar", name: "Arabic" },
                { code: "ru", name: "Russian" },
                { code: "pt", name: "Portuguese" },
                { code: "ja", name: "Japanese" },
                { code: "bn", name: "Bengali" },
                { code: "pa", name: "Punjabi" },
                { code: "mr", name: "Marathi" },
                { code: "ta", name: "Tamil" },
                { code: "te", name: "Telugu" },
                { code: "gu", name: "Gujarati" },
                { code: "kn", name: "Kannada" },
                { code: "ml", name: "Malayalam" },
                { code: "or", name: "Odia" },
                { code: "ur", name: "Urdu" },
                { code: "ko", name: "Korean" },
                { code: "it", name: "Italian" },
                { code: "nl", name: "Dutch" },
                { code: "pl", name: "Polish" },
                { code: "tr", name: "Turkish" },
                { code: "vi", name: "Vietnamese" },
                { code: "th", name: "Thai" },
                { code: "fa", name: "Persian" },
                { code: "he", name: "Hebrew" },
                { code: "el", name: "Greek" }
            ],
            
            timezones: [
                { id: "Asia/Kolkata", name: "Asia/Kolkata (India Standard Time)" },
                { id: "Asia/Dubai", name: "Asia/Dubai (Gulf Standard Time)" },
                { id: "Asia/Tokyo", name: "Asia/Tokyo (Japan Standard Time)" },
                { id: "Asia/Shanghai", name: "Asia/Shanghai (China Standard Time)" },
                { id: "Asia/Singapore", name: "Asia/Singapore (Singapore Time)" },
                { id: "Asia/Hong_Kong", name: "Asia/Hong Kong (Hong Kong Time)" },
                { id: "Asia/Bangkok", name: "Asia/Bangkok (Indochina Time)" },
                { id: "Asia/Seoul", name: "Asia/Seoul (Korea Standard Time)" },
                { id: "Asia/Jakarta", name: "Asia/Jakarta (Western Indonesia Time)" },
                { id: "Asia/Manila", name: "Asia/Manila (Philippine Time)" },
                { id: "Asia/Karachi", name: "Asia/Karachi (Pakistan Standard Time)" },
                { id: "Asia/Dhaka", name: "Asia/Dhaka (Bangladesh Standard Time)" },
                { id: "Asia/Kathmandu", name: "Asia/Kathmandu (Nepal Time)" },
                { id: "Asia/Colombo", name: "Asia/Colombo (Sri Lanka Time)" },
                { id: "Asia/Yangon", name: "Asia/Yangon (Myanmar Time)" },
                { id: "Asia/Tehran", name: "Asia/Tehran (Iran Standard Time)" },
                { id: "Asia/Riyadh", name: "Asia/Riyadh (Arabian Standard Time)" },
                { id: "Asia/Baghdad", name: "Asia/Baghdad (Arabian Standard Time)" },
                { id: "Asia/Qatar", name: "Asia/Qatar (Arabian Standard Time)" },
                { id: "Asia/Muscat", name: "Asia/Muscat (Gulf Standard Time)" },
                { id: "America/New_York", name: "America/New_York (Eastern Time)" },
                { id: "America/Chicago", name: "America/Chicago (Central Time)" },
                { id: "America/Denver", name: "America/Denver (Mountain Time)" },
                { id: "America/Los_Angeles", name: "America/Los_Angeles (Pacific Time)" },
                { id: "America/Toronto", name: "America/Toronto (Eastern Time)" },
                { id: "America/Mexico_City", name: "America/Mexico_City (Central Time)" },
                { id: "America/Sao_Paulo", name: "America/Sao_Paulo (Brasilia Time)" },
                { id: "America/Argentina/Buenos_Aires", name: "America/Buenos_Aires (Argentina Time)" },
                { id: "America/Lima", name: "America/Lima (Peru Time)" },
                { id: "America/Bogota", name: "America/Bogota (Colombia Time)" },
                { id: "America/Caracas", name: "America/Caracas (Venezuela Time)" },
                { id: "America/Santiago", name: "America/Santiago (Chile Time)" },
                { id: "Europe/London", name: "Europe/London (Greenwich Mean Time)" },
                { id: "Europe/Paris", name: "Europe/Paris (Central European Time)" },
                { id: "Europe/Berlin", name: "Europe/Berlin (Central European Time)" },
                { id: "Europe/Moscow", name: "Europe/Moscow (Moscow Standard Time)" },
                { id: "Europe/Istanbul", name: "Europe/Istanbul (Turkey Time)" },
                { id: "Europe/Rome", name: "Europe/Rome (Central European Time)" },
                { id: "Europe/Madrid", name: "Europe/Madrid (Central European Time)" },
                { id: "Europe/Athens", name: "Europe/Athens (Eastern European Time)" },
                { id: "Europe/Prague", name: "Europe/Prague (Central European Time)" },
                { id: "Europe/Warsaw", name: "Europe/Warsaw (Central European Time)" },
                { id: "Europe/Vienna", name: "Europe/Vienna (Central European Time)" },
                { id: "Europe/Amsterdam", name: "Europe/Amsterdam (Central European Time)" },
                { id: "Europe/Brussels", name: "Europe/Brussels (Central European Time)" },
                { id: "Europe/Zurich", name: "Europe/Zurich (Central European Time)" },
                { id: "Europe/Stockholm", name: "Europe/Stockholm (Central European Time)" },
                { id: "Europe/Oslo", name: "Europe/Oslo (Central European Time)" },
                { id: "Europe/Copenhagen", name: "Europe/Copenhagen (Central European Time)" },
                { id: "Europe/Helsinki", name: "Europe/Helsinki (Eastern European Time)" },
                { id: "Australia/Sydney", name: "Australia/Sydney (Australian Eastern Time)" },
                { id: "Australia/Melbourne", name: "Australia/Melbourne (Australian Eastern Time)" },
                { id: "Australia/Brisbane", name: "Australia/Brisbane (Australian Eastern Time)" },
                { id: "Australia/Perth", name: "Australia/Perth (Australian Western Time)" },
                { id: "Australia/Adelaide", name: "Australia/Adelaide (Australian Central Time)" },
                { id: "Pacific/Auckland", name: "Pacific/Auckland (New Zealand Time)" },
                { id: "Pacific/Fiji", name: "Pacific/Fiji (Fiji Time)" },
                { id: "Pacific/Honolulu", name: "Pacific/Honolulu (Hawaii-Aleutian Time)" },
                { id: "Africa/Cairo", name: "Africa/Cairo (Eastern European Time)" },
                { id: "Africa/Johannesburg", name: "Africa/Johannesburg (South Africa Standard Time)" },
                { id: "Africa/Lagos", name: "Africa/Lagos (West Africa Time)" },
                { id: "Africa/Nairobi", name: "Africa/Nairobi (East Africa Time)" },
                { id: "Africa/Casablanca", name: "Africa/Casablanca (Western European Time)" },
                { id: "Africa/Tunis", name: "Africa/Tunis (Central European Time)" },
                { id: "Africa/Accra", name: "Africa/Accra (Greenwich Mean Time)" },
                { id: "Africa/Dar_es_Salaam", name: "Africa/Dar_es_Salaam (East Africa Time)" },
                { id: "Africa/Addis_Ababa", name: "Africa/Addis_Ababa (East Africa Time)" },
                { id: "Africa/Khartoum", name: "Africa/Khartoum (Central Africa Time)" },
                { id: "Atlantic/Reykjavik", name: "Atlantic/Reykjavik (Greenwich Mean Time)" },
                { id: "Atlantic/Azores", name: "Atlantic/Azores (Azores Time)" },
                { id: "Atlantic/Cape_Verde", name: "Atlantic/Cape_Verde (Cape Verde Time)" },
                { id: "Indian/Mumbai", name: "Indian/Mumbai (India Standard Time)" },
                { id: "Indian/Colombo", name: "Indian/Colombo (India Standard Time)" },
                { id: "Indian/Maldives", name: "Indian/Maldives (Maldives Time)" },
                { id: "Indian/Mauritius", name: "Indian/Mauritius (Mauritius Time)" },
                { id: "Antarctica/McMurdo", name: "Antarctica/McMurdo (New Zealand Time)" },
                { id: "Antarctica/Davis", name: "Antarctica/Davis (Davis Time)" },
                { id: "Antarctica/Casey", name: "Antarctica/Casey (Western Australia Time)" }
            ],
            
            countries: [
                { code: "IN", name: "India" },
                { code: "US", name: "United States" },
                { code: "GB", name: "United Kingdom" },
                { code: "CA", name: "Canada" },
                { code: "AU", name: "Australia" },
                { code: "DE", name: "Germany" },
                { code: "FR", name: "France" },
                { code: "IT", name: "Italy" },
                { code: "ES", name: "Spain" },
                { code: "JP", name: "Japan" },
                { code: "CN", name: "China" },
                { code: "BR", name: "Brazil" },
                { code: "MX", name: "Mexico" },
                { code: "RU", name: "Russia" },
                { code: "ZA", name: "South Africa" },
                { code: "AE", name: "United Arab Emirates" },
                { code: "SA", name: "Saudi Arabia" },
                { code: "SG", name: "Singapore" },
                { code: "MY", name: "Malysia" },
                { code: "ID", name: "Indonesia" },
                { code: "TH", name: "Thailand" },
                { code: "KR", name: "South Korea" },
                { code: "TR", name: "Turkey" },
                { code: "EG", name: "Egypt" },
                { code: "NG", name: "Nigeria" },
                { code: "KE", name: "Kenya" },
                { code: "AR", name: "Argentina" },
                { code: "CL", name: "Chile" },
                { code: "CO", name: "Colombia" },
                { code: "PE", name: "Peru" },
                { code: "NZ", name: "New Zealand" }
            ]
        };

        const countryStates = {
            'IN': [
                {code: 'AS', name: 'Assam'},
                {code: 'MH', name: 'Maharashtra'},
                {code: 'DL', name: 'Delhi'},
                {code: 'KA', name: 'Karnataka'},
                {code: 'TN', name: 'Tamil Nadu'},
                {code: 'UP', name: 'Uttar Pradesh'},
                {code: 'GJ', name: 'Gujarat'},
                {code: 'RJ', name: 'Rajasthan'},
                {code: 'AP', name: 'Andhra Pradesh'},
                {code: 'TG', name: 'Telangana'},
                {code: 'KL', name: 'Kerala'},
                {code: 'MP', name: 'Madhya Pradesh'},
                {code: 'PB', name: 'Punjab'},
                {code: 'HR', name: 'Haryana'},
                {code: 'WB', name: 'West Bengal'}
            ],
            'US': [
                {code: 'CA', name: 'California'},
                {code: 'TX', name: 'Texas'},
                {code: 'FL', name: 'Florida'},
                {code: 'NY', name: 'New York'},
                {code: 'IL', name: 'Illinois'},
                {code: 'PA', name: 'Pennsylvania'},
                {code: 'OH', name: 'Ohio'},
                {code: 'GA', name: 'Georgia'},
                {code: 'NC', name: 'North Carolina'},
                {code: 'MI', name: 'Michigan'}
            ],
            'GB': [
                {code: 'ENG', name: 'England'},
                {code: 'SCT', name: 'Scotland'},
                {code: 'WLS', name: 'Wales'},
                {code: 'NIR', name: 'Northern Ireland'}
            ],
            'CA': [
                {code: 'ON', name: 'Ontario'},
                {code: 'QC', name: 'Quebec'},
                {code: 'BC', name: 'British Columbia'},
                {code: 'AB', name: 'Alberta'},
                {code: 'MB', name: 'Manitoba'},
                {code: 'SK', name: 'Saskatchewan'}
            ],
            'AU': [
                {code: 'NSW', name: 'New South Wales'},
                {code: 'VIC', name: 'Victoria'},
                {code: 'QLD', name: 'Queensland'},
                {code: 'WA', name: 'Western Australia'},
                {code: 'SA', name: 'South Australia'},
                {code: 'TAS', name: 'Tasmania'}
            ]
        };

        document.addEventListener('DOMContentLoaded', function() {
            const vendorForm = document.getElementById('vendor-form');
            const mainMessage = document.getElementById('main-message');
            const resetBtn = document.getElementById('reset-btn');
            const profileResetBtn = document.getElementById('profile-reset-btn');
            const backBtn = document.getElementById('back-btn');
            
            const profileImage = document.getElementById('profile-image');
            const uploadedImage = document.getElementById('uploaded-image');
            const imagePlaceholder = document.getElementById('image-placeholder');
            const fileInput = document.getElementById('file-input');
            const uploadTrigger = document.getElementById('upload-trigger');
            const fileFormatBadge = document.getElementById('file-format-badge');
            const fileSizeInfo = document.getElementById('file-size-info');
            
            const countrySelect = document.getElementById('country');
            const stateSelect = document.getElementById('state');
            const languageSelect = document.getElementById('language');
            const timezoneSelect = document.getElementById('timezone');
            
            const togglePassword = document.getElementById('toggle-password');
            const toggleConfirmPassword = document.getElementById('toggle-confirm-password');
            const passwordField = document.getElementById('password');
            const confirmPasswordField = document.getElementById('confirm-password');
            
            initApp();
            
            function initApp() {
                populateSelectFields();
                setupEventListeners();
                showMessage('Please fill all required fields', 'info');
                
                countrySelect.value = 'IN';
                updateStatesForCountry('IN');
                
                languageSelect.value = 'en';
                timezoneSelect.value = 'Asia/Kolkata';
            }
            
            function populateSelectFields() {
                appData.languages.forEach(lang => {
                    const option = document.createElement('option');
                    option.value = lang.code;
                    option.textContent = lang.name;
                    languageSelect.appendChild(option);
                });
                
                appData.timezones.forEach(tz => {
                    const option = document.createElement('option');
                    option.value = tz.id;
                    option.textContent = tz.name;
                    timezoneSelect.appendChild(option);
                });
                
                appData.countries.forEach(country => {
                    const option = document.createElement('option');
                    option.value = country.code;
                    option.textContent = country.name;
                    countrySelect.appendChild(option);
                });
            }
            
            function setupEventListeners() {
                profileImage.addEventListener('click', () => fileInput.click());
                uploadTrigger.addEventListener('click', (e) => {
                    e.stopPropagation();
                    fileInput.click();
                });
                
                fileInput.addEventListener('change', handleImageUpload);
                
                togglePassword.addEventListener('click', () => {
                    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
                    passwordField.setAttribute('type', type);
                    togglePassword.classList.toggle('fa-eye');
                    togglePassword.classList.toggle('fa-eye-slash');
                });
                
                toggleConfirmPassword.addEventListener('click', () => {
                    const type = confirmPasswordField.getAttribute('type') === 'password' ? 'text' : 'password';
                    confirmPasswordField.setAttribute('type', type);
                    toggleConfirmPassword.classList.toggle('fa-eye');
                    toggleConfirmPassword.classList.toggle('fa-eye-slash');
                });
                
                passwordField.addEventListener('input', validatePasswordMatch);
                confirmPasswordField.addEventListener('input', validatePasswordMatch);
                
                countrySelect.addEventListener('change', function() {
                    updateStatesForCountry(this.value);
                });
                
                document.getElementById('contact-name').addEventListener('blur', function() {
                    const profileName = document.getElementById('profile-name');
                    if (!profileName.value && this.value) {
                        profileName.value = this.value;
                    }
                });
                
                vendorForm.addEventListener('submit', handleFormSubmit);
                
                resetBtn.addEventListener('click', handleReset);
                profileResetBtn.addEventListener('click', handleProfileReset);
                
                backBtn.addEventListener('click', handleBackButton);
            }
            
            function handleBackButton() {
                if (confirm('Are you sure you want to go back? Any unsaved changes will be lost.')) {
                    showMessage('Going back to previous page...', 'info');
                    setTimeout(() => {
                        alert('Navigating back to previous page...');
                        
                    }, 500);
                }
            }

            document.getElementById('back-btn').addEventListener('click', function() {
    window.location.href = 'Dashboard.html';
});
            
            function validatePasswordMatch() {
                const password = passwordField.value;
                const confirmPassword = confirmPasswordField.value;
                const passwordMatch1 = document.getElementById('password-match-1');
                const passwordMatch2 = document.getElementById('password-match-2');
                
                passwordMatch1.style.display = 'none';
                passwordMatch2.style.display = 'none';
                
                if (password && confirmPassword) {
                    if (password === confirmPassword) {
                        passwordMatch1.innerHTML = '<i class="fas fa-check-circle"></i> <span>Passwords match</span>';
                        passwordMatch1.className = 'password-match valid';
                        passwordMatch1.style.display = 'flex';
                        
                        passwordMatch2.innerHTML = '<i class="fas fa-check-circle"></i> <span>Passwords match</span>';
                        passwordMatch2.className = 'password-match valid';
                        passwordMatch2.style.display = 'flex';
                        
                        passwordField.style.borderColor = '#27ae60';
                        confirmPasswordField.style.borderColor = '#27ae60';
                    } else {
                       
                        passwordMatch1.innerHTML = '<i class="fas fa-exclamation-circle"></i> <span>Passwords do not match</span>';
                        passwordMatch1.className = 'password-match invalid';
                        passwordMatch1.style.display = 'flex';
                        
                        passwordMatch2.innerHTML = '<i class="fas fa-exclamation-circle"></i> <span>Passwords do not match</span>';
                        passwordMatch2.className = 'password-match invalid';
                        passwordMatch2.style.display = 'flex';
                        
                        passwordField.style.borderColor = '#e74c3c';
                        confirmPasswordField.style.borderColor = '#e74c3c';
                    }
                } else {
                    passwordField.style.borderColor = '#ddd';
                    confirmPasswordField.style.borderColor = '#ddd';
                }
            }
            
            function updateStatesForCountry(countryCode) {
                stateSelect.innerHTML = '<option value="">Select State</option>';
                
                if (countryCode && countryStates[countryCode]) {
                    countryStates[countryCode].forEach(state => {
                        const option = document.createElement('option');
                        option.value = state.code;
                        option.textContent = state.name;
                        stateSelect.appendChild(option);
                    });
                } else {
                    const option = document.createElement('option');
                    option.value = "OTHER";
                    option.textContent = "Other (Enter manually)";
                    stateSelect.appendChild(option);
                }
            }
            
            function handleImageUpload() {
                if (this.files && this.files[0]) {
                    const file = this.files[0];
                    
                    if (file.size > 5 * 1024 * 1024) {
                        showMessage('File size must be less than 5MB', 'error');
                        return;
                    }
                    
                    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
                    if (!validTypes.includes(file.type)) {
                        showMessage('Please upload a valid image (JPG, PNG, GIF, WebP)', 'error');
                        return;
                    }
                    
                    const fileExtension = file.name.split('.').pop().toUpperCase();
                    const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
                    
                    fileFormatBadge.textContent = fileExtension;
                    fileFormatBadge.style.display = 'inline-block';
                    fileSizeInfo.textContent = `Size: ${fileSizeMB} MB`;
                    
                    const reader = new FileReader();
                    
                    reader.onload = function(e) {
                        uploadedImage.src = e.target.result;
                        uploadedImage.style.display = 'block';
                        imagePlaceholder.style.display = 'none';
                        
                        showMessage('Profile image uploaded successfully!', 'success');
                    };
                    
                    reader.onerror = function() {
                        showMessage('Error reading the image file. Please try again.', 'error');
                    };
                    
                    reader.readAsDataURL(file);
                }
            }
            
            function handleProfileReset() {
                document.getElementById('profile-name').value = '';
                document.getElementById('language').value = 'en';
                document.getElementById('timezone').value = 'Asia/Kolkata';
                document.getElementById('store-category').value = '';
                
                uploadedImage.src = '';
                uploadedImage.style.display = 'none';
                imagePlaceholder.style.display = 'block';
                
                fileFormatBadge.style.display = 'none';
                fileFormatBadge.textContent = '';
                fileSizeInfo.textContent = '';
                
                const profileInputs = document.querySelectorAll('.profile-section input, .profile-section select');
                profileInputs.forEach(input => {
                    input.style.borderColor = '#ddd';
                });
                
                showMessage('Profile settings have been reset', 'info');
            }
            
            function handleFormSubmit(e) {
                e.preventDefault();
                
                if (!validateForm()) {
                    showMessage('Please complete important fields for better registration experience', 'error');
                    return;
                }
                
                const email = document.getElementById('email').value;
                if (email) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(email)) {
                        showMessage('Please enter a valid email address', 'error');
                        document.getElementById('email').style.borderColor = '#e74c3c';
                        return;
                    }
                }
                
                const password = passwordField.value;
                if (password && password.length < 6) {
                    showMessage('Password must be at least 6 characters long', 'error');
                    passwordField.style.borderColor = '#e74c3c';
                    return;
                }
                
                const confirmPassword = confirmPasswordField.value;
                if (password && confirmPassword && password !== confirmPassword) {
                    showMessage('Passwords do not match', 'error');
                    passwordField.style.borderColor = '#e74c3c';
                    confirmPasswordField.style.borderColor = '#e74c3c';
                    return;
                }
                
                const countryValue = document.getElementById('country').value;
                const stateValue = document.getElementById('state').value;
                if (countryValue && stateValue === "OTHER") {
                    showMessage('Please enter your state/province manually', 'error');
                    return;
                }
                
                const hasImage = uploadedImage.src && uploadedImage.style.display === 'block';
                
                showMessage('Registration successful! Processing your vendor account...', 'success');
                
                setTimeout(() => {
                    const message = hasImage 
                        ? 'Vendor registration completed successfully with profile image!' 
                        : 'Vendor registration completed successfully! You can add a profile image later.';
                    
                    alert(`Registration Complete!\n\n${message}\n\nYou will receive a confirmation email shortly.`);
                }, 1000);
            }
            
            function validateForm() {
                const mainFields = [
                    'company-name', 'brand-name', 'contact-name', 'phone', 'email'
                ];
                
                let hasSomeData = false;
                
                mainFields.forEach(fieldId => {
                    const field = document.getElementById(fieldId);
                    if (field && field.value.trim()) {
                        hasSomeData = true;
                        field.style.borderColor = '#ddd';
                    } else {
                        field.style.borderColor = '#ddd';
                    }
                });
                
                if (!hasSomeData) {
                    return false;
                }
                
                return true;
            }
            
            function handleReset() {
                vendorForm.reset();
                
                uploadedImage.src = '';
                uploadedImage.style.display = 'none';
                imagePlaceholder.style.display = 'block';
                
                fileFormatBadge.style.display = 'none';
                fileFormatBadge.textContent = '';
                fileSizeInfo.textContent = '';
                
                languageSelect.value = 'en';
                timezoneSelect.value = 'Asia/Kolkata';
                document.getElementById('store-category').value = '';
                countrySelect.value = 'IN';
                updateStatesForCountry('IN');
                
                
                const passwordMatches = document.querySelectorAll('.password-match');
                passwordMatches.forEach(match => {
                    match.style.display = 'none';
                    match.className = 'password-match';
                });
                
                const allInputs = document.querySelectorAll('input, select');
                allInputs.forEach(input => {
                    input.style.borderColor = '#ddd';
                });
                
                passwordField.type = 'password';
                confirmPasswordField.type = 'password';
                togglePassword.className = 'far fa-eye';
                toggleConfirmPassword.className = 'far fa-eye';
                
                showMessage('Entire form has been reset. You can start fresh.', 'info');
            }
            
            function showMessage(text, type = 'info') {
                const icon = mainMessage.querySelector('i');
                const span = mainMessage.querySelector('span');
            
                span.textContent = text;
                
              
                mainMessage.className = 'message';
                if (type === 'success') {
                    mainMessage.classList.add('success-message');
                    icon.className = 'fas fa-check-circle';
                } else if (type === 'error') {
                    mainMessage.classList.add('error-message');
                    icon.className = 'fas fa-exclamation-circle';
                } else {
                    icon.className = 'fas fa-info-circle';
                }
                
                  mainMessage.style.display = 'flex';
                
                if (type !== 'error') {
                    setTimeout(() => {
                        mainMessage.style.display = 'none';
                    }, 5000);
                }
            }
        });

