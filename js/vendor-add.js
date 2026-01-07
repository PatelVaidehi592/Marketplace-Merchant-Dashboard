
        function getRandomAvatarColor() {
            const colors = ['#4361ee', '#4cc9f0', '#f72585', '#06d6a0', '#7209b7', '#f8961e', '#43aa8b', '#277da1'];
            return colors[Math.floor(Math.random() * colors.length)];
        }

        function generateVendorId() {
            return Date.now() + Math.floor(Math.random() * 1000);
        }

        function saveVendorsToStorage(vendors) {
            localStorage.setItem('vendorsData', JSON.stringify(vendors));
        }

        function getVendorsFromStorage() {
            const vendors = localStorage.getItem('vendorsData');
            return vendors ? JSON.parse(vendors) : [];
        }

        function getUrlParameter(name) {
            name = name.replace(/[\[\]]/g, '\\$&');
            const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
            const results = regex.exec(window.location.href);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        }

        const vendorId = getUrlParameter('id');
        let isEditMode = false;
        let currentVendor = null;


        function loadVendorForEdit(vendorId) {
            const vendors = getVendorsFromStorage();
            currentVendor = vendors.find(v => v.id == vendorId);
            
            if (currentVendor) {
                isEditMode = true;
                
                document.getElementById('pageTitle').textContent = 'Edit Vendor';
                document.getElementById('submitBtnText').textContent = 'Update Vendor';
                document.getElementById('submitBtn').querySelector('i').className = 'fas fa-save';
                
                document.getElementById('vendorName').value = currentVendor.name || '';
                document.getElementById('vendorEmail').value = currentVendor.email || '';
                document.getElementById('vendorPhone').value = currentVendor.phone || '';
                document.getElementById('vendorCountry').value = currentVendor.country || '';
                document.getElementById('vendorStatus').value = currentVendor.status || 'pending';
                document.getElementById('vendorAddress').value = currentVendor.address || '';
                document.getElementById('vendorStoreName').value = currentVendor.storeInfo?.storeName || '';
                document.getElementById('vendorCompanyName').value = currentVendor.storeInfo?.companyName || '';
                document.getElementById('vendorBrandName').value = currentVendor.storeInfo?.brandName || '';
                document.getElementById('vendorWebsite').value = currentVendor.website || '';
                document.getElementById('vendorPlatform').value = currentVendor.platform || '';
                document.getElementById('vendorProducts').value = currentVendor.products || 0;
                document.getElementById('vendorSubscriptionPlan').value = currentVendor.storeInfo?.plan || '';
                document.getElementById('vendorRenewalDate').value = currentVendor.storeInfo?.renewalDate || '';
                document.getElementById('vendorDescription').value = currentVendor.description || '';
            }
        }

        document.getElementById('addVendorForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const vendorName = document.getElementById('vendorName').value.trim();
            const vendorEmail = document.getElementById('vendorEmail').value.trim();
            const vendorPlatform = document.getElementById('vendorPlatform').value;
            const vendorCountry = document.getElementById('vendorCountry').value;
            const vendorStatus = document.getElementById('vendorStatus').value;
            
            if (!vendorName || !vendorEmail || !vendorPlatform || !vendorCountry) {
                alert('Please fill in all required fields (*)');
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(vendorEmail)) {
                alert('Please enter a valid email address');
                return;
            }
            
            const vendorStoreName = document.getElementById('vendorStoreName').value.trim();
            const vendorCompanyName = document.getElementById('vendorCompanyName').value.trim();
            const vendorBrandName = document.getElementById('vendorBrandName').value.trim();
            const vendorPhone = document.getElementById('vendorPhone').value.trim();
            const vendorAddress = document.getElementById('vendorAddress').value.trim();
            const vendorWebsite = document.getElementById('vendorWebsite').value.trim();
            const vendorDescription = document.getElementById('vendorDescription').value.trim();
            const vendorPlan = document.getElementById('vendorSubscriptionPlan').value;
            const vendorRenewalDate = document.getElementById('vendorRenewalDate').value;
            const vendorProducts = parseInt(document.getElementById('vendorProducts').value) || 0;
            
            // Get vendors from localStorage
            let vendorsData = getVendorsFromStorage();
            
            if (isEditMode && currentVendor) {
                // Update existing vendor
                const vendorIndex = vendorsData.findIndex(v => v.id == currentVendor.id);
                if (vendorIndex !== -1) {
                    vendorsData[vendorIndex] = {
                        ...vendorsData[vendorIndex],
                        name: vendorName,
                        email: vendorEmail,
                        platform: vendorPlatform,
                        status: vendorStatus,
                        country: vendorCountry,
                        products: vendorProducts,
                        phone: vendorPhone || vendorsData[vendorIndex].phone,
                        website: vendorWebsite || vendorsData[vendorIndex].website,
                        address: vendorAddress || vendorsData[vendorIndex].address,
                        description: vendorDescription || vendorsData[vendorIndex].description,
                        storeInfo: {
                            ...vendorsData[vendorIndex].storeInfo,
                            storeName: vendorStoreName || vendorsData[vendorIndex].storeInfo?.storeName,
                            companyName: vendorCompanyName || vendorsData[vendorIndex].storeInfo?.companyName,
                            brandName: vendorBrandName || vendorsData[vendorIndex].storeInfo?.brandName,
                            plan: vendorPlan || vendorsData[vendorIndex].storeInfo?.plan,
                            renewalDate: vendorRenewalDate || vendorsData[vendorIndex].storeInfo?.renewalDate
                        }
                    };
                }
            } else {
                // Create new vendor object
                const newVendor = {
                    id: generateVendorId(),
                    name: vendorName,
                    email: vendorEmail,
                    platform: vendorPlatform,
                    status: vendorStatus,
                    country: vendorCountry,
                    products: vendorProducts,
                    revenue: "$0",
                    orders: 0,
                    joinedDate: new Date().toISOString().split('T')[0],
                    lastSync: new Date().toISOString().replace('T', ' ').substring(0, 19),
                    phone: vendorPhone || "Not provided",
                    website: vendorWebsite || "Not provided",
                    avatarColor: getRandomAvatarColor(),
                    address: vendorAddress || "Not provided",
                    description: vendorDescription || "No description provided",
                    storeInfo: {
                        storeName: vendorStoreName || vendorName,
                        companyName: vendorCompanyName || vendorName,
                        brandName: vendorBrandName || vendorName,
                        apiStatus: "Not Connected",
                        plan: vendorPlan || "Not selected",
                        subscription: vendorStatus === 'approved' ? "Active" : "Pending",
                        renewalDate: vendorRenewalDate || new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0]
                    }
                };
                
                // Add new vendor to the array
                vendorsData.push(newVendor);
            }
            
            // Save to localStorage
            saveVendorsToStorage(vendorsData);
            
            // Show success message
            const successMessage = document.getElementById('successMessage');
            const successMessageText = document.getElementById('successMessageText');
            
            if (isEditMode) {
                successMessageText.textContent = 'Vendor updated successfully! Redirecting to vendors list...';
            } else {
                successMessageText.textContent = 'Vendor added successfully! Redirecting to vendors list...';
            }
            
            successMessage.classList.add('show');
            
            // Reset form
            this.reset();
            
            // Redirect to vendor management page after 2 seconds
            setTimeout(() => {
                window.location.href = 'vendor-management.html';
            }, 2000);
        });
        
        // Set default date for renewal (one year from now)
        document.addEventListener('DOMContentLoaded', function() {
            // Check if we're in edit mode
            if (vendorId) {
                loadVendorForEdit(vendorId);
            } else {
                // Set default renewal date only for new vendors
                const today = new Date();
                const oneYearLater = new Date(today.setFullYear(today.getFullYear() + 1));
                const formattedDate = oneYearLater.toISOString().split('T')[0];
                document.getElementById('vendorRenewalDate').value = formattedDate;
            }
        });
