        // Country data mapping
        const countries = {
            us: { name: "United States", flag: "🇺🇸" },
            uk: { name: "United Kingdom", flag: "🇬🇧" },
            ca: { name: "Canada", flag: "🇨🇦" },
            au: { name: "Australia", flag: "🇦🇺" },
            de: { name: "Germany", flag: "🇩🇪" },
            fr: { name: "France", flag: "🇫🇷" },
        };

        const platformNames = {
            shopify: "Shopify",
            woo: "WooCommerce",
            wix: "Wix",
        };

        const statusNames = {
            approved: "Approved",
            pending: "Pending Review",
            suspended: "Suspended",
        };

        const statusColors = {
            approved: "#28a745",
            pending: "#ffc107",
            suspended: "#dc3545",
        };

        // Sample product data for demo
        const sampleProducts = {
            1: [
                { name: "Wireless Earbuds Pro", category: "Audio", sales: 1200, price: 129 },
                { name: "Smart Watch X3", category: "Wearables", sales: 850, price: 299 },
                { name: "Portable Charger 10K", category: "Accessories", sales: 2100, price: 49 }
            ],
            2: [
                { name: "Modern Sofa", category: "Furniture", sales: 450, price: 899 },
                { name: "Coffee Table", category: "Furniture", sales: 320, price: 199 },
                { name: "Floor Lamp", category: "Lighting", sales: 780, price: 89 }
            ],
            3: [
                { name: "Summer Dress", category: "Clothing", sales: 150, price: 59 },
                { name: "Leather Handbag", category: "Accessories", sales: 210, price: 129 },
                { name: "Designer Sunglasses", category: "Accessories", sales: 180, price: 89 }
            ],
            4: [
                { name: "Running Shoes", category: "Footwear", sales: 890, price: 129 },
                { name: "Yoga Mat", category: "Fitness", sales: 650, price: 39 },
                { name: "Dumbbell Set", category: "Fitness", sales: 320, price: 149 }
            ],
            5: [
                { name: "Organic Coffee", category: "Food", sales: 1200, price: 19 },
                { name: "Protein Bars", category: "Food", sales: 950, price: 29 },
                { name: "Green Tea", category: "Beverages", sales: 780, price: 15 }
            ],
            6: [
                { name: "Classic Novel", category: "Books", sales: 320, price: 15 },
                { name: "Science Fiction", category: "Books", sales: 210, price: 12 },
                { name: "Cookbook", category: "Books", sales: 180, price: 25 }
            ]
        };

        // Sample sync history data
        const sampleSyncHistory = {
            1: [
                { time: "Today, 09:30 AM", items: "24 products synced", status: "success" },
                { time: "Yesterday, 18:45 PM", items: "8 products updated", status: "success" },
                { time: "Nov 8, 14:20 PM", items: "Failed to sync", status: "error" }
            ],
            2: [
                { time: "Today, 11:15 AM", items: "15 products synced", status: "success" },
                { time: "Nov 9, 09:30 AM", items: "12 products updated", status: "success" }
            ],
            3: [
                { time: "Nov 7, 16:45 PM", items: "5 products synced", status: "success" },
                { time: "Nov 5, 14:20 PM", items: "Failed to sync", status: "error" }
            ]
        };

        // Format date for display
        function formatDate(dateString) {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        }

        // Get URL parameter
        function getUrlParameter(name) {
            name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
            const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
            const results = regex.exec(location.search);
            return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
        }

        // Get vendor data from localStorage
        function getVendorData(vendorId) {
            const vendors = localStorage.getItem('vendorsData');
            if (!vendors) return null;
            
            const vendorsData = JSON.parse(vendors);
            return vendorsData.find(vendor => vendor.id == vendorId);
        }

        // Show toast notification
        function showToast(message, type = 'success') {
            const toast = document.getElementById('toastNotification');
            const toastMessage = document.getElementById('toastMessage');
            
            toastMessage.textContent = message;
            toast.className = `toast ${type}`;
            toast.style.display = 'flex';
            
            setTimeout(() => {
                toast.style.display = 'none';
            }, 3000);
        }

        // Update vendor status
        function updateVendorStatus(vendorId, newStatus) {
            const vendors = localStorage.getItem('vendorsData');
            if (!vendors) return false;
            
            const vendorsData = JSON.parse(vendors);
            const vendorIndex = vendorsData.findIndex(v => v.id == vendorId);
            
            if (vendorIndex !== -1) {
                vendorsData[vendorIndex].status = newStatus;
                localStorage.setItem('vendorsData', JSON.stringify(vendorsData));
                return true;
            }
            
            return false;
        }

        // Delete vendor
        function deleteVendor(vendorId) {
            const vendors = localStorage.getItem('vendorsData');
            if (!vendors) return false;
            
            const vendorsData = JSON.parse(vendors);
            const filteredVendors = vendorsData.filter(v => v.id != vendorId);
            localStorage.setItem('vendorsData', JSON.stringify(filteredVendors));
            return true;
        }

        // Render vendor details
        function renderVendorDetails(vendor) {
            if (!vendor) {
                document.getElementById('loadingState').style.display = 'none';
                document.getElementById('errorState').style.display = 'block';
                return;
            }

            // Update page title
            document.title = `Vendor Details - ${vendor.name}`;
            document.getElementById('pageTitle').textContent = `Vendor: ${vendor.name}`;
            document.getElementById('pageSubtitle').textContent = `Viewing detailed information for ${vendor.name}`;

            // Vendor header
            document.getElementById('vendorAvatar').textContent = vendor.name.charAt(0);
            document.getElementById('vendorAvatar').style.backgroundColor = vendor.avatarColor || '#4361ee';
            document.getElementById('vendorName').textContent = vendor.name;
            document.getElementById('vendorEmail').textContent = vendor.email;
            document.getElementById('joinedDate').textContent = formatDate(vendor.joinedDate);
            document.getElementById('vendorPlatform').textContent = platformNames[vendor.platform] || vendor.platform;
            document.getElementById('vendorCountry').textContent = `${countries[vendor.country]?.name || vendor.country} ${countries[vendor.country]?.flag || '🌐'}`;

            // Status badge
            const statusBadge = document.getElementById('statusBadge');
            statusBadge.textContent = statusNames[vendor.status] || vendor.status;
            statusBadge.style.backgroundColor = `${statusColors[vendor.status] || '#6c757d'}0.1`;
            statusBadge.style.color = statusColors[vendor.status] || '#6c757d';

            // Store Information
            document.getElementById('storeWebsite').textContent = vendor.website || 'Not provided';
            document.getElementById('storeWebsite').href = vendor.website || '#';
            document.getElementById('storePlatform').textContent = platformNames[vendor.platform] || vendor.platform;
            document.getElementById('apiStatus').textContent = vendor.storeInfo?.apiStatus || 'Not connected';
            document.getElementById('apiStatus').style.color = vendor.storeInfo?.apiStatus === 'Connected' ? '#28a745' : '#dc3545';
            document.getElementById('subscriptionPlan').textContent = vendor.storeInfo?.plan || 'Not specified';
            document.getElementById('renewalDate').textContent = formatDate(vendor.storeInfo?.renewalDate || vendor.joinedDate);

            // Company Information
            document.getElementById('companyPhone').textContent = vendor.phone || 'Not provided';
            document.getElementById('companyAddress').textContent = vendor.address || 'Not provided';
            document.getElementById('companyDescription').textContent = vendor.description || 'No description available';

            // Business Metrics
            document.getElementById('totalProducts').textContent = vendor.products || 0;
            document.getElementById('totalRevenue').textContent = vendor.revenue || '$0';
            document.getElementById('totalOrders').textContent = vendor.orders || 0;

            // Top Products
            const productList = document.getElementById('productList');
            const products = sampleProducts[vendor.id] || sampleProducts[1];
            
            productList.innerHTML = products.map(product => `
                <div class="product-item">
                    <div>
                        <div class="product-name">${product.name}</div>
                        <div class="product-category">${product.category} • ${product.sales} sales</div>
                    </div>
                    <div class="product-price">$${product.price}</div>
                </div>
            `).join('');

            // Sync History
            const syncHistory = document.getElementById('syncHistory');
            const syncLogs = sampleSyncHistory[vendor.id] || sampleSyncHistory[1] || [];
            
            if (syncLogs.length === 0) {
                syncHistory.innerHTML = '<p style="color: var(--gray); text-align: center; padding: 20px;">No sync history available</p>';
            } else {
                syncHistory.innerHTML = syncLogs.map(log => `
                    <div class="sync-log">
                        <div>
                            <div class="sync-time">${log.time}</div>
                            <div class="sync-items">${log.items}</div>
                        </div>
                        <div class="sync-status ${log.status}">${log.status === 'success' ? 'Success' : 'Failed'}</div>
                    </div>
                `).join('');
            }

            // Visit store button
            document.getElementById('visitStoreBtn').href = vendor.website || '#';

            // Sync products button
            document.getElementById('syncProductsBtn').href = `sync-vendor-product.html?id=${vendor.id}`;

            // Hide loading, show content
            document.getElementById('loadingState').style.display = 'none';
            document.getElementById('vendorDetailsContainer').style.display = 'block';

            // Setup event listeners
            setupEventListeners(vendor);
        }

        // Setup event listeners
        function setupEventListeners(vendor) {
            const vendorId = vendor.id;

            // Approve button
            document.getElementById('approveBtn').addEventListener('click', () => {
                if (updateVendorStatus(vendorId, 'approved')) {
                    showToast(`Vendor "${vendor.name}" approved successfully!`, 'success');
                    
                    // Update UI
                    const statusBadge = document.getElementById('statusBadge');
                    statusBadge.textContent = 'Approved';
                    statusBadge.style.backgroundColor = '#28a7450.1';
                    statusBadge.style.color = '#28a745';
                    
                    vendor.status = 'approved';
                } else {
                    showToast('Failed to update vendor status.', 'error');
                }
            });

            // Suspend button
            document.getElementById('suspendBtn').addEventListener('click', () => {
                if (updateVendorStatus(vendorId, 'suspended')) {
                    showToast(`Vendor "${vendor.name}" suspended successfully!`, 'warning');
                    
                    // Update UI
                    const statusBadge = document.getElementById('statusBadge');
                    statusBadge.textContent = 'Suspended';
                    statusBadge.style.backgroundColor = '#dc35450.1';
                    statusBadge.style.color = '#dc3545';
                    
                    vendor.status = 'suspended';
                } else {
                    showToast('Failed to update vendor status.', 'error');
                }
            });

            // Email button - Open email modal
            document.getElementById('emailBtn').addEventListener('click', () => {
                // Set email recipient info
                document.getElementById('emailTo').textContent = `${vendor.name} <${vendor.email}>`;
                
                // Set default subject
                document.getElementById('emailSubject').value = `Regarding your ${platformNames[vendor.platform] || vendor.platform} store`;
                
                // Set default message
                document.getElementById('emailMessage').value = `Dear ${vendor.name},\n\nI hope this message finds you well.\n\n`;
                
                // Show modal
                document.getElementById('emailModal').classList.add('show');
            });

            // Send email button
            document.getElementById('sendEmailBtn').addEventListener('click', () => {
                const subject = document.getElementById('emailSubject').value;
                const message = document.getElementById('emailMessage').value;
                
                if (!subject.trim() || !message.trim()) {
                    showToast('Please fill in both subject and message fields.', 'warning');
                    return;
                }
                
                // Encode subject and message for mailto URL
                const encodedSubject = encodeURIComponent(subject);
                const encodedMessage = encodeURIComponent(message);
                
                // Create mailto URL
                const mailtoUrl = `mailto:${vendor.email}?subject=${encodedSubject}&body=${encodedMessage}`;
                
                // Open default email client
                window.open(mailtoUrl, '_blank');
                
                // Show success message
                showToast(`Email opened for ${vendor.name}`, 'success');
                
                // Close modal
                document.getElementById('emailModal').classList.remove('show');
            });

            // Close email modal button
            document.getElementById('closeEmailModal').addEventListener('click', () => {
                document.getElementById('emailModal').classList.remove('show');
            });

            // Cancel email button
            document.getElementById('cancelEmailModal').addEventListener('click', () => {
                document.getElementById('emailModal').classList.remove('show');
            });

            // Close email modal when clicking outside
            document.getElementById('emailModal').addEventListener('click', (e) => {
                if (e.target === document.getElementById('emailModal')) {
                    document.getElementById('emailModal').classList.remove('show');
                }
            });

            // Delete vendor button
            document.getElementById('deleteVendorBtn').addEventListener('click', () => {
                document.getElementById('deleteConfirmText').textContent = 
                    `Are you sure you want to delete "${vendor.name}"? This action cannot be undone.`;
                document.getElementById('deleteConfirmModal').classList.add('show');
            });

            // Confirm delete button
            document.getElementById('confirmDeleteVendor').addEventListener('click', () => {
                if (deleteVendor(vendorId)) {
                    showToast(`Vendor "${vendor.name}" deleted successfully!`, 'success');
                    
                    // Redirect to vendor management page after a delay
                    setTimeout(() => {
                        window.location.href = 'vendor-management.html';
                    }, 1500);
                } else {
                    showToast('Failed to delete vendor.', 'error');
                }
                document.getElementById('deleteConfirmModal').classList.remove('show');
            });

            // Cancel delete button
            document.getElementById('cancelDeleteModal').addEventListener('click', () => {
                document.getElementById('deleteConfirmModal').classList.remove('show');
            });

            // Close delete modal button
            document.getElementById('closeDeleteModal').addEventListener('click', () => {
                document.getElementById('deleteConfirmModal').classList.remove('show');
            });

            // Close modal when clicking outside
            document.getElementById('deleteConfirmModal').addEventListener('click', (e) => {
                if (e.target === document.getElementById('deleteConfirmModal')) {
                    document.getElementById('deleteConfirmModal').classList.remove('show');
                }
            });

            // View all products button
            document.getElementById('viewAllProductsBtn').addEventListener('click', () => {
                showToast(`Redirecting to all products for ${vendor.name}...`, 'info');
                // In a real app, this would redirect to a products page
                setTimeout(() => {
                    alert('This would show all products in a separate page.');
                }, 500);
            });

            // Print details button
            document.getElementById('printDetailsBtn').addEventListener('click', () => {
                window.print();
            });

            // Export data button
            document.getElementById('exportDataBtn').addEventListener('click', () => {
                showToast('Exporting vendor data...', 'info');
                // In a real app, this would trigger a data export
                setTimeout(() => {
                    alert(`Export functionality for ${vendor.name} would be implemented here.`);
                }, 500);
            });

            // FX Override functionality
            const overrideBase = document.getElementById('overrideBase');
            const overrideTarget = document.getElementById('overrideTarget');
            const overrideRate = document.getElementById('overrideRate');
            const ratePrefix = document.getElementById('ratePrefix');
            const rateSuffix = document.getElementById('rateSuffix');
            const applyFxBtn = document.getElementById('applyFxBtn');
            const resetFxBtn = document.getElementById('resetFxBtn');

            function updateCurrencyDisplay() {
                ratePrefix.textContent = `1 ${overrideBase.value} =`;
                rateSuffix.textContent = overrideTarget.value;
            }

            overrideBase.addEventListener('change', updateCurrencyDisplay);
            overrideTarget.addEventListener('change', updateCurrencyDisplay);

            // Apply custom rate
            applyFxBtn.addEventListener('click', function() {
                const baseCurrency = overrideBase.value;
                const targetCurrency = overrideTarget.value;
                const customRate = parseFloat(overrideRate.value);
                
                if (isNaN(customRate) || customRate <= 0) {
                    showToast('Please enter a valid exchange rate.', 'warning');
                    return;
                }
                
                if (baseCurrency === targetCurrency) {
                    showToast('Base and target currencies cannot be the same.', 'warning');
                    return;
                }
                
                // Save to localStorage for this vendor
                const vendorId = vendor.id;
                const fxOverrides = JSON.parse(localStorage.getItem('fxOverrides') || '{}');
                fxOverrides[vendorId] = {
                    base: baseCurrency,
                    target: targetCurrency,
                    rate: customRate,
                    updatedAt: new Date().toISOString()
                };
                localStorage.setItem('fxOverrides', JSON.stringify(fxOverrides));
                
                showToast(`Custom FX rate applied for ${vendor.name}`, 'success');
            });

            // Reset FX rate
            resetFxBtn.addEventListener('click', function() {
                overrideRate.value = '0.9215';
                showToast('FX rate reset to market value.', 'info');
            });

            // Check for saved FX override for this vendor
            const fxOverrides = JSON.parse(localStorage.getItem('fxOverrides') || '{}');
            if (fxOverrides[vendorId]) {
                const savedFx = fxOverrides[vendorId];
                overrideBase.value = savedFx.base;
                overrideTarget.value = savedFx.target;
                overrideRate.value = savedFx.rate;
                updateCurrencyDisplay();
                document.getElementById('fxOverrideStatus').textContent = 'Active';
            }

            // Rounding rules - load saved preferences
            const roundingRules = JSON.parse(localStorage.getItem('roundingRules') || '{}');
            if (roundingRules[vendorId]) {
                const savedRules = roundingRules[vendorId];
                document.querySelector(`input[name="roundingMethod"][value="${savedRules.method}"]`).checked = true;
                document.getElementById('roundingIncrement').value = savedRules.increment;
            }

            // Save rounding rules when changed
            document.querySelectorAll('input[name="roundingMethod"]').forEach(radio => {
                radio.addEventListener('change', function() {
                    const rules = JSON.parse(localStorage.getItem('roundingRules') || '{}');
                    rules[vendorId] = {
                        method: this.value,
                        increment: document.getElementById('roundingIncrement').value
                    };
                    localStorage.setItem('roundingRules', JSON.stringify(rules));
                    showToast('Rounding rules saved.', 'success');
                });
            });

            document.getElementById('roundingIncrement').addEventListener('change', function() {
                const method = document.querySelector('input[name="roundingMethod"]:checked').value;
                const rules = JSON.parse(localStorage.getItem('roundingRules') || '{}');
                rules[vendorId] = {
                    method: method,
                    increment: this.value
                };
                localStorage.setItem('roundingRules', JSON.stringify(rules));
                showToast('Rounding rules saved.', 'success');
            });
        }

        // Initialize page
        document.addEventListener('DOMContentLoaded', () => {
            const vendorId = getUrlParameter('id');
            
            if (!vendorId) {
                // No vendor ID provided
                document.getElementById('loadingState').style.display = 'none';
                document.getElementById('errorState').style.display = 'block';
                return;
            }
            
            // Load vendor data
            setTimeout(() => {
                const vendor = getVendorData(vendorId);
                renderVendorDetails(vendor);
            }, 800); // Simulate loading delay
        });
