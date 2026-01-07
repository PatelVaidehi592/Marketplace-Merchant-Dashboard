        const sampleReturns = [
            {
                returnId: "RET-1001",
                orderId: "ORD-1001",
                product: "Smartphone X",
                customer: "John Smith",
                returnDate: "2024-01-10",
                reason: "Damaged Product",
                quantity: 1,
                refundAmount: 899.99,
                refundMethod: "Credit Card",
                refundStatus: "pending",
                status: "requested",
                pickupAddress: "123 Main Street, Apt 4B, New York",
                pickupDate: null,
                pickupStatus: "pending",
                courier: null,
                comments: "The screen arrived cracked",
                timeline: [
                    {
                        date: "2024-01-10 14:30",
                        action: "Return Requested",
                        description: "Customer requested return for damaged product"
                    }
                ]
            },
            {
                returnId: "RET-1002",
                orderId: "ORD-1002",
                product: "Laptop Pro",
                customer: "Sarah Johnson",
                returnDate: "2024-01-09",
                reason: "Wrong Item Received",
                quantity: 1,
                refundAmount: 1250.00,
                refundMethod: "Bank Transfer",
                refundStatus: "approved",
                status: "approved",
                pickupAddress: "456 Oak Avenue, Suite 12, Chicago",
                pickupDate: "2024-01-12",
                pickupStatus: "scheduled",
                courier: "BlueDart",
                comments: "Received different model than ordered",
                timeline: [
                    {
                        date: "2024-01-09 10:15",
                        action: "Return Requested",
                        description: "Customer requested return for wrong item"
                    },
                    {
                        date: "2024-01-09 15:45",
                        action: "Return Approved",
                        description: "Return request approved by admin"
                    }
                ]
            },
            {
                returnId: "RET-1003",
                orderId: "ORD-1003",
                product: "Wireless Headphones",
                customer: "Mike Williams",
                returnDate: "2024-01-08",
                reason: "Product Not Working",
                quantity: 1,
                refundAmount: 199.99,
                refundMethod: "Original Payment",
                refundStatus: "processing",
                status: "pickedup",
                pickupAddress: "789 Pine Road, Floor 3, Los Angeles",
                pickupDate: "2024-01-10",
                pickupStatus: "completed",
                courier: "Delhivery",
                comments: "Headphones don't turn on",
                timeline: [
                    {
                        date: "2024-01-08 09:30",
                        action: "Return Requested",
                        description: "Customer reported defective product"
                    },
                    {
                        date: "2024-01-08 14:20",
                        action: "Return Approved",
                        description: "Technical team verified the issue"
                    },
                    {
                        date: "2024-01-10 11:00",
                        action: "Pickup Scheduled",
                        description: "Pickup scheduled with Delhivery"
                    },
                    {
                        date: "2024-01-10 16:45",
                        action: "Product Picked Up",
                        description: "Product collected from customer"
                    }
                ]
            },

            {
                returnId: "RET-1006",
                orderId: "ORD-1008",
                product: "Smart  Y",
                customer: "Smith",
                returnDate: "1024-05-20",
                reason: "old Product",
                quantity: 1,
                refundAmount: 1213.31,
                refundMethod: "Credit Card",
                refundStatus: "pending",
                status: "requested",
                pickupAddress: "123 Main Street, Apt 4B, New York",
                pickupDate: null,
                pickupStatus: "pending",
                courier: null,
                comments: "The screen arrived cracked",
                timeline: [
                    {
                        date: "2024-01-10 14:30",
                        action: "Return Requested",
                        description: "Customer requested return for damaged product"
                    }
                ]
            },
            {
                returnId: "RET-1004",
                orderId: "ORD-1004",
                product: "Gaming Console",
                customer: "Emily Davis",
                returnDate: "2024-01-07",
                reason: "Changed Mind",
                quantity: 1,
                refundAmount: 499.99,
                refundMethod: "Store Credit",
                refundStatus: "completed",
                status: "refunded",
                pickupAddress: "101 Maple Lane, Boston",
                pickupDate: "2024-01-09",
                pickupStatus: "completed",
                courier: "DTDC",
                comments: "No longer need the product",
                timeline: [
                    {
                        date: "2024-01-07 16:20",
                        action: "Return Requested",
                        description: "Customer changed mind"
                    },
                    {
                        date: "2024-01-08 10:15",
                        action: "Return Approved",
                        description: "Approved as per return policy"
                    },
                    {
                        date: "2024-01-09 14:30",
                        action: "Product Picked Up",
                        description: "Product collected by DTDC"
                    },
                    {
                        date: "2024-01-11 11:45",
                        action: "Product Received",
                        description: "Warehouse received returned product"
                    },
                    {
                        date: "2024-01-12 09:30",
                        action: "Refund Processed",
                        description: "$499.99 credited as store credit"
                    }
                ]
            },
            {
                returnId: "RET-1005",
                orderId: "ORD-1005",
                product: "Coffee Maker",
                customer: "David Brown",
                returnDate: "2024-01-06",
                reason: "Missing Parts",
                quantity: 1,
                refundAmount: 89.99,
                refundMethod: "Original Payment",
                refundStatus: "completed",
                status: "returned",
                pickupAddress: "202 Cedar Street, Unit 5, Seattle",
                pickupDate: "2024-01-08",
                pickupStatus: "completed",
                courier: "FedEx",
                comments: "Power cord was missing from package",
                timeline: [
                    {
                        date: "2024-01-06 11:45",
                        action: "Return Requested",
                        description: "Customer reported missing parts"
                    },
                    {
                        date: "2024-01-06 15:30",
                        action: "Return Approved",
                        description: "Approved for missing parts"
                    },
                    {
                        date: "2024-01-08 13:15",
                        action: "Product Picked Up",
                        description: "FedEx collected the product"
                    },
                    {
                        date: "2024-01-10 10:00",
                        action: "Product Received",
                        description: "Warehouse inspection completed"
                    }
                ]
            }
        ];

        let returns = [...sampleReturns];
        let filteredReturns = [...returns];
        let currentReturn = null;

        // DOM Elements
        const returnsTableBody = document.getElementById('returnsTableBody');
        const returnModal = document.getElementById('returnModal');
        const totalReturnsElement = document.getElementById('totalReturns');
        const pendingReturnsElement = document.getElementById('pendingReturns');
        const pickupReturnsElement = document.getElementById('pickupReturns');
        const completedReturnsElement = document.getElementById('completedReturns');

        // Initialize
        document.addEventListener('DOMContentLoaded', function () {
            initializeEventListeners();
            updateStats();
            renderReturnsTable();
        });

        function initializeEventListeners() {
            // Filter event listeners
            document.getElementById('applyFilter').addEventListener('click', filterReturns);
            document.getElementById('searchReturn').addEventListener('input', filterReturns);
            document.getElementById('statusFilter').addEventListener('change', filterReturns);
            document.getElementById('dateFilter').addEventListener('change', filterReturns);

            // Export button
            document.getElementById('exportReturns').addEventListener('click', exportReturns);

            // Modal event listeners
            document.getElementById('closeModal').addEventListener('click', closeModal);
            document.getElementById('closeDetail').addEventListener('click', closeModal);

            // Process buttons
            document.getElementById('processReturn').addEventListener('click', processReturn);
            document.getElementById('rejectReturn').addEventListener('click', rejectReturn);

            // Click outside modal to close
            returnModal.addEventListener('click', function (e) {
                if (e.target === returnModal) closeModal();
            });
        }

        function updateStats() {
            const total = returns.length;
            const pending = returns.filter(r => r.status === 'requested').length;
            const pickup = returns.filter(r => r.status === 'approved' || r.status === 'pickedup').length;
            const completed = returns.filter(r => r.status === 'refunded' || r.status === 'returned').length;

            totalReturnsElement.textContent = total;
            pendingReturnsElement.textContent = pending;
            pickupReturnsElement.textContent = pickup;
            completedReturnsElement.textContent = completed;
        }

        function renderReturnsTable() {
            returnsTableBody.innerHTML = '';

            filteredReturns.forEach(returnItem => {
                const row = document.createElement('tr');
                const statusClass = `status-${returnItem.status}`;

                row.innerHTML = `
          <td><strong>${returnItem.returnId}</strong></td>
          <td>${returnItem.orderId}</td>
          <td>${returnItem.product}</td>
          <td>${returnItem.customer}</td>
          <td>${formatDate(returnItem.returnDate)}</td>
          <td>${returnItem.reason}</td>
          <td><strong>$${returnItem.refundAmount.toFixed(2)}</strong></td>
          <td><span class="status-badge ${statusClass}">${getStatusText(returnItem.status)}</span></td>
          <td>
            <div class="action-buttons">
              <button class="action-btn btn-view" onclick="viewReturnDetails('${returnItem.returnId}')">
                <i class="fas fa-eye"></i> View
              </button>
              ${returnItem.status === 'requested' ? `
                <button class="action-btn btn-process" onclick="approveReturn('${returnItem.returnId}')">
                  <i class="fas fa-check"></i> Approve
                </button>
                <button class="action-btn btn-reject" onclick="rejectReturnModal('${returnItem.returnId}')">
                  <i class="fas fa-times"></i> Reject
                </button>
              ` : ''}
            </div>
          </td>
        `;

                returnsTableBody.appendChild(row);
            });
        }

        function filterReturns() {
            const statusFilter = document.getElementById('statusFilter').value;
            const dateFilter = document.getElementById('dateFilter').value;
            const searchQuery = document.getElementById('searchReturn').value.toLowerCase();

            filteredReturns = returns.filter(returnItem => {
                // Status filter
                if (statusFilter !== 'all' && returnItem.status !== statusFilter) return false;

                // Date filter
                if (dateFilter !== 'all') {
                    const returnDate = new Date(returnItem.returnDate);
                    const today = new Date();

                    if (dateFilter === 'today') {
                        if (returnDate.toDateString() !== today.toDateString()) return false;
                    } else if (dateFilter === 'week') {
                        const weekAgo = new Date();
                        weekAgo.setDate(today.getDate() - 7);
                        if (returnDate < weekAgo) return false;
                    } else if (dateFilter === 'month') {
                        const monthAgo = new Date();
                        monthAgo.setMonth(today.getMonth() - 1);
                        if (returnDate < monthAgo) return false;
                    }
                }

                // Search filter
                if (searchQuery) {
                    const searchableText = `${returnItem.returnId} ${returnItem.orderId} ${returnItem.product} ${returnItem.customer} ${returnItem.reason}`.toLowerCase();
                    if (!searchableText.includes(searchQuery)) return false;
                }

                return true;
            });

            renderReturnsTable();
        }

        function viewReturnDetails(returnId) {
            currentReturn = returns.find(r => r.returnId === returnId);
            if (!currentReturn) return;

            // Update modal title
            document.getElementById('modalReturnId').textContent = returnId;

            // Update basic info
            document.getElementById('detailReturnId').textContent = currentReturn.returnId;
            document.getElementById('detailOrderId').textContent = currentReturn.orderId;
            document.getElementById('detailProduct').textContent = currentReturn.product;
            document.getElementById('detailQuantity').textContent = currentReturn.quantity;
            document.getElementById('detailReturnDate').textContent = formatDate(currentReturn.returnDate);

            // Update return info
            document.getElementById('detailReason').textContent = currentReturn.reason;
            document.getElementById('detailStatus').textContent = getStatusText(currentReturn.status);
            document.getElementById('detailComments').textContent = currentReturn.comments || 'No comments';

            // Update refund info
            document.getElementById('detailRefundMethod').textContent = currentReturn.refundMethod || 'Not set';
            document.getElementById('detailRefundAmount').textContent = `$${currentReturn.refundAmount.toFixed(2)}`;
            document.getElementById('detailRefundStatus').textContent = getRefundStatusText(currentReturn.refundStatus);
            document.getElementById('detailRefundDate').textContent = currentReturn.refundDate ? formatDate(currentReturn.refundDate) : 'Not processed';

            // Update pickup info
            document.getElementById('detailPickupAddress').textContent = currentReturn.pickupAddress;
            document.getElementById('detailPickupDate').textContent = currentReturn.pickupDate ? formatDate(currentReturn.pickupDate) : 'Not scheduled';
            document.getElementById('detailPickupStatus').textContent = currentReturn.pickupStatus || 'Not scheduled';
            document.getElementById('detailCourier').textContent = currentReturn.courier || 'Not assigned';

            // Update progress bar
            updateProgressBar();

            // Update timeline
            updateTimeline();

            // Show/hide action buttons based on status
            const processBtn = document.getElementById('processReturn');
            const rejectBtn = document.getElementById('rejectReturn');

            if (currentReturn.status === 'requested') {
                processBtn.textContent = 'Approve Return';
                processBtn.style.display = 'inline-block';
                rejectBtn.style.display = 'inline-block';
            } else if (currentReturn.status === 'approved') {
                processBtn.textContent = 'Schedule Pickup';
                processBtn.style.display = 'inline-block';
                rejectBtn.style.display = 'none';
            } else if (currentReturn.status === 'pickedup') {
                processBtn.textContent = 'Mark as Returned';
                processBtn.style.display = 'inline-block';
                rejectBtn.style.display = 'none';
            } else if (currentReturn.status === 'returned') {
                processBtn.textContent = 'Process Refund';
                processBtn.style.display = 'inline-block';
                rejectBtn.style.display = 'none';
            } else {
                processBtn.style.display = 'none';
                rejectBtn.style.display = 'none';
            }

            // Show modal
            returnModal.classList.add('show');
        }

        function updateProgressBar() {
            const progressSteps = document.getElementById('progressSteps');
            const steps = [
                { id: 'requested', label: 'Requested', icon: 'fa-exchange-alt' },
                { id: 'approved', label: 'Approved', icon: 'fa-check' },
                { id: 'pickedup', label: 'Picked Up', icon: 'fa-truck' },
                { id: 'returned', label: 'Returned', icon: 'fa-box' },
                { id: 'refunded', label: 'Refunded', icon: 'fa-credit-card' }
            ];

            progressSteps.innerHTML = '';

            steps.forEach((step, index) => {
                const isActive = getStepStatus(currentReturn.status, step.id);

                const stepElement = document.createElement('div');
                stepElement.className = 'progress-step';

                stepElement.innerHTML = `
          <div class="step-circle ${isActive ? 'active' : ''}">
            <i class="fas ${step.icon}"></i>
          </div>
          <div class="step-label ${isActive ? 'active' : ''}">${step.label}</div>
        `;

                progressSteps.appendChild(stepElement);
            });
        }

        function getStepStatus(currentStatus, stepId) {
            const statusOrder = ['requested', 'approved', 'pickedup', 'returned', 'refunded'];
            const currentIndex = statusOrder.indexOf(currentStatus);
            const stepIndex = statusOrder.indexOf(stepId);

            return stepIndex <= currentIndex;
        }

        function updateTimeline() {
            const timelineContent = document.getElementById('timelineContent');
            timelineContent.innerHTML = '';

            currentReturn.timeline.forEach(event => {
                const timelineItem = document.createElement('div');
                timelineItem.className = 'timeline-item';

                timelineItem.innerHTML = `
          <div class="timeline-icon">
            <i class="fas fa-history"></i>
          </div>
          <div class="timeline-content">
            <h5>${event.action}</h5>
            <p>${event.description}</p>
            <small>${formatDateTime(event.date)}</small>
          </div>
        `;

                timelineContent.appendChild(timelineItem);
            });
        }

        function processReturn() {
            if (!currentReturn) return;

            let nextStatus = '';
            let actionText = '';
            let description = '';

            switch (currentReturn.status) {
                case 'requested':
                    nextStatus = 'approved';
                    actionText = 'Return Approved';
                    description = 'Return request approved by admin';
                    break;
                case 'approved':
                    nextStatus = 'pickedup';
                    actionText = 'Pickup Scheduled';
                    description = 'Pickup scheduled with courier';
                    currentReturn.pickupDate = new Date().toISOString().split('T')[0];
                    currentReturn.courier = ['BlueDart', 'DTDC', 'Delhivery', 'FedEx'][Math.floor(Math.random() * 4)];
                    currentReturn.pickupStatus = 'scheduled';
                    break;
                case 'pickedup':
                    nextStatus = 'returned';
                    actionText = 'Product Returned';
                    description = 'Product received at warehouse';
                    currentReturn.pickupStatus = 'completed';
                    break;
                case 'returned':
                    nextStatus = 'refunded';
                    actionText = 'Refund Processed';
                    description = `$${currentReturn.refundAmount.toFixed(2)} refund processed`;
                    currentReturn.refundStatus = 'completed';
                    currentReturn.refundDate = new Date().toISOString().split('T')[0];
                    break;
            }

            if (nextStatus) {
                // Update return status
                currentReturn.status = nextStatus;

                // Add to timeline
                currentReturn.timeline.push({
                    date: new Date().toISOString().replace('T', ' ').substring(0, 16),
                    action: actionText,
                    description: description
                });

                // Update returns array
                const index = returns.findIndex(r => r.returnId === currentReturn.returnId);
                if (index !== -1) {
                    returns[index] = currentReturn;
                }

                // Update UI
                updateStats();
                renderReturnsTable();
                viewReturnDetails(currentReturn.returnId);

                // Show success message
                alert(`Return ${actionText.toLowerCase()} successfully!`);
            }
        }

        function rejectReturnModal(returnId) {
            if (confirm('Are you sure you want to reject this return request?')) {
                rejectReturnRequest(returnId);
            }
        }

        function rejectReturnRequest(returnId) {
            const returnItem = returns.find(r => r.returnId === returnId);
            if (!returnItem) return;

            // Update return status
            returnItem.status = 'rejected';

            // Add to timeline
            returnItem.timeline.push({
                date: new Date().toISOString().replace('T', ' ').substring(0, 16),
                action: 'Return Rejected',
                description: 'Return request rejected by admin'
            });

            // Update UI
            updateStats();
            renderReturnsTable();

            if (currentReturn && currentReturn.returnId === returnId) {
                closeModal();
            }

            alert('Return request rejected successfully!');
        }

        function approveReturn(returnId) {
            const returnItem = returns.find(r => r.returnId === returnId);
            if (!returnItem) return;

            // Update return status
            returnItem.status = 'approved';

            // Add to timeline
            returnItem.timeline.push({
                date: new Date().toISOString().replace('T', ' ').substring(0, 16),
                action: 'Return Approved',
                description: 'Return request approved by admin'
            });

            // Update UI
            updateStats();
            renderReturnsTable();

            alert('Return approved successfully!');
        }

        function exportReturns() {
            // Simulate export process
            alert(`Exported ${filteredReturns.length} return records`);
        }

        function closeModal() {
            returnModal.classList.remove('show');
            currentReturn = null;
        }

        // Utility Functions
        function formatDate(dateString) {
            const options = { year: 'numeric', month: 'short', day: 'numeric' };
            return new Date(dateString).toLocaleDateString('en-US', options);
        }

        function formatDateTime(dateTimeString) {
            const options = {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            };
            return new Date(dateTimeString).toLocaleDateString('en-US', options);
        }

        function getStatusText(status) {
            const statusMap = {
                'requested': 'Return Requested',
                'approved': 'Approved',
                'pickedup': 'Picked Up',
                'returned': 'Returned',
                'refunded': 'Refunded',
                'rejected': 'Rejected'
            };
            return statusMap[status] || status;
        }

        function getRefundStatusText(status) {
            const statusMap = {
                'pending': 'Pending',
                'approved': 'Approved',
                'processing': 'Processing',
                'completed': 'Completed',
                'failed': 'Failed'
            };
            return statusMap[status] || status;
        }

        // Function to get data from order.html and order-detail.html
        function getDataFromOrders() {
            // This function would fetch data from your order management system
            // For now, we'll use the sample data
            console.log('Fetching return data from order system...');
            return sampleReturns;
        }
