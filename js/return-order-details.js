
    const urlParams = new URLSearchParams(window.location.search);
    const returnId = urlParams.get('id') || 'RET-1001';
    document.addEventListener('DOMContentLoaded', function () {
      const urlParams = new URLSearchParams(window.location.search);
      const returnId = urlParams.get('id') || 'RET-1001';

      console.log('Loading return details for:', returnId);

      let returnItem = null;

      const currentReturn = localStorage.getItem('currentReturn');
      if (currentReturn) {
        try {
          returnItem = JSON.parse(currentReturn);
          console.log('Found in currentReturn:', returnItem);
        } catch (e) {
          console.error('Error parsing currentReturn:', e);
        }
      }

      if (!returnItem) {
        const allReturnsStr = localStorage.getItem('allReturns');
        if (allReturnsStr) {
          try {
            const allReturns = JSON.parse(allReturnsStr);
            returnItem = allReturns.find(r => r.returnId === returnId);
            console.log('Found in allReturns:', returnItem);
          } catch (e) {
            console.error('Error parsing allReturns:', e);
          }
        }
      }

      if (!returnItem) {
        const sampleReturnsStr = localStorage.getItem('sampleReturns');
        if (sampleReturnsStr) {
          try {
            const sampleReturns = JSON.parse(sampleReturnsStr);
            returnItem = sampleReturns.find(r => r.returnId === returnId);
            console.log('Found in sampleReturns:', returnItem);
          } catch (e) {
            console.error('Error parsing sampleReturns:', e);
          }
        }
      }

      if (!returnItem) {
        const returnsDataStr = localStorage.getItem('returnsData');
        if (returnsDataStr) {
          try {
            const returnsData = JSON.parse(returnsDataStr);
            returnItem = returnsData.find(r => r.returnId === returnId) || returnsData[returnId];
            console.log('Found in returnsData:', returnItem);
          } catch (e) {
            console.error('Error parsing returnsData:', e);
          }
        }
      }

      if (!returnItem) {
        console.log('Creating default return item');
        returnItem = {
          returnId: returnId,
          orderId: "ORD-" + returnId.split('-')[1],
          product: "Smartphone X",
          customer: "John Smith",
          returnDate: new Date().toISOString().split('T')[0],
          reason: "Damaged Product",
          quantity: 1,
          refundAmount: 899.99,
          refundMethod: "Credit Card",
          refundStatus: "pending",
          status: "requested",
          customerEmail: "john.smith@email.com",
          customerPhone: "+1 (555) 123-4567",
          comments: "The screen arrived cracked",
          resolutionType: "Refund",
          pickupAddress: "123 Main Street, Apt 4B, New York",
          pickupDate: null,
          pickupStatus: "pending",
          courier: null,
          productSKU: "SPX-2024-BLK",
          originalPrice: 899.99,
          returnCondition: "Damaged",
          restockingFee: 0,
          refundDate: null,
          timeline: [
            {
              date: new Date().toISOString().replace('T', ' ').substring(0, 16),
              action: "Return Requested",
              description: "Customer requested return for damaged product"
            }
          ]
        };
      }

      loadReturnDetails(returnItem);
    });

    function loadReturnDetails(returnItem) {
      if (!returnItem) {
        console.error('No return item found');
        return;
      }

      console.log('Loading details for:', returnItem);

      // Update page header
      document.getElementById('pageReturnId').textContent = returnItem.returnId || 'N/A';
      document.getElementById('detailReturnId').textContent = returnItem.returnId || 'N/A';
      document.getElementById('detailOrderId').textContent = returnItem.orderId || 'N/A';
      document.getElementById('detailProduct').textContent = returnItem.product || 'N/A';
      document.getElementById('detailQuantity').textContent = returnItem.quantity || 1;
      document.getElementById('detailReturnDate').textContent = returnItem.returnDate ? formatDate(returnItem.returnDate) : 'N/A';

      // Customer Info
      document.getElementById('detailCustomerName').textContent = returnItem.customer || returnItem.customerName || 'N/A';
      document.getElementById('detailCustomerEmail').textContent = returnItem.customerEmail || returnItem.email || 'N/A';
      document.getElementById('detailCustomerPhone').textContent = returnItem.customerPhone || returnItem.phone || 'N/A';

      // Return Info
      document.getElementById('detailReason').textContent = returnItem.reason || 'N/A';
      document.getElementById('detailComments').textContent = returnItem.comments || 'No comments';
      document.getElementById('detailResolutionType').textContent = returnItem.resolutionType || 'Refund';

      // Refund Info
      document.getElementById('detailRefundMethod').textContent = returnItem.refundMethod || 'N/A';
      document.getElementById('detailRefundAmount').textContent = returnItem.refundAmount ? `$${parseFloat(returnItem.refundAmount).toFixed(2)}` : '$0.00';
      document.getElementById('detailRefundStatus').textContent = getRefundStatusText(returnItem.refundStatus) || 'Pending';
      document.getElementById('detailRefundDate').textContent = returnItem.refundDate ? formatDate(returnItem.refundDate) : 'Not processed';

      // Pickup Info
      document.getElementById('detailPickupAddress').textContent = returnItem.pickupAddress || returnItem.shippingAddress || 'N/A';
      document.getElementById('detailPickupDate').textContent = returnItem.pickupDate ? formatDate(returnItem.pickupDate) : 'Not scheduled';
      document.getElementById('detailPickupStatus').textContent = returnItem.pickupStatus || 'Pending';
      document.getElementById('detailCourier').textContent = returnItem.courier || 'Not assigned';

      document.getElementById('detailProductSKU').textContent = returnItem.productSKU || returnItem.sku || 'N/A';
      document.getElementById('detailOriginalPrice').textContent = returnItem.originalPrice ? `$${parseFloat(returnItem.originalPrice).toFixed(2)}` :
        (returnItem.refundAmount ? `$${parseFloat(returnItem.refundAmount).toFixed(2)}` : '$0.00');
      document.getElementById('detailReturnCondition').textContent = returnItem.returnCondition || returnItem.condition || 'N/A';
      document.getElementById('detailRestockingFee').textContent = returnItem.restockingFee ? `$${parseFloat(returnItem.restockingFee).toFixed(2)}` : '$0.00';

      updateStatusBadge(returnItem.status || 'requested');
      updateProgressBar(returnItem.status || 'requested');
      updateTimeline(returnItem.timeline || []);
      updateActionButtons(returnItem.status || 'requested');

      document.title = `Return ${returnItem.returnId} - Order Management`;

      localStorage.setItem('currentReturn', JSON.stringify(returnItem));
    }

    function saveReturnChanges(updatedReturn) {
      localStorage.setItem('currentReturn', JSON.stringify(updatedReturn));

      const allReturnsStr = localStorage.getItem('allReturns');
      if (allReturnsStr) {
        const allReturns = JSON.parse(allReturnsStr);
        const index = allReturns.findIndex(r => r.returnId === updatedReturn.returnId);
        if (index !== -1) {
          allReturns[index] = updatedReturn;
          localStorage.setItem('allReturns', JSON.stringify(allReturns));
        }
      }

      // Show success message
      alert('Return updated successfully!');
      return true;
    }

    // Update all action functions to save changes
    function approveReturn() {
      if (confirm('Are you sure you want to approve this return?')) {
        // Get current return
        const currentReturnStr = localStorage.getItem('currentReturn');
        if (!currentReturnStr) return;

        const currentReturn = JSON.parse(currentReturnStr);

        // Update the return
        currentReturn.status = 'approved';
        currentReturn.refundStatus = 'approved';
        currentReturn.timeline.push({
          date: new Date().toISOString().replace('T', ' ').substring(0, 16),
          action: 'Return Approved',
          description: 'Return request approved by admin'
        });

        saveReturnChanges(currentReturn);

        loadReturnDetails(currentReturn);

        alert('Return approved successfully!');
      }
    }

    function updateStatusBadge(status) {
      const badge = document.getElementById('detailStatusBadge');
      const statusText = getStatusText(status);

      badge.textContent = statusText;
      badge.className = 'status-badge';
      badge.classList.add(`status-${status}`);
    }

    function updateProgressBar(status) {
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
        const isActive = getStepStatus(status, step.id);

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

    function updateTimeline(timeline) {
      const timelineContent = document.getElementById('timelineContent');
      timelineContent.innerHTML = '';

      if (!timeline || timeline.length === 0) {
        timelineContent.innerHTML = '<p>No timeline events found.</p>';
        return;
      }

      // Sort timeline by date (newest first)
      timeline.sort((a, b) => new Date(b.date) - new Date(a.date)).forEach(event => {
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

    function updateActionButtons(status) {
      const actionButtons = document.getElementById('actionButtons');
      actionButtons.innerHTML = '';

      switch (status) {
        case 'requested':
          actionButtons.innerHTML = `
                        <button class="btn btn-process" onclick="approveReturn()">
                            <i class="fas fa-check"></i> Approve Return
                        </button>
                        <button class="btn btn-reject" onclick="rejectReturn()">
                            <i class="fas fa-times"></i> Reject Return
                        </button>
                        <button class="btn btn-cancel" onclick="requestMoreInfo()">
                            <i class="fas fa-info-circle"></i> Request More Info
                        </button>
                    `;
          break;
        case 'approved':
          actionButtons.innerHTML = `
                        <button class="btn btn-process" onclick="schedulePickup()">
                            <i class="fas fa-truck"></i> Schedule Pickup
                        </button>
                        <button class="btn btn-cancel" onclick="cancelReturn()">
                            <i class="fas fa-ban"></i> Cancel Return
                        </button>
                    `;
          break;
        case 'pickedup':
          actionButtons.innerHTML = `
                        <button class="btn btn-process" onclick="markAsReturned()">
                            <i class="fas fa-box"></i> Mark as Returned
                        </button>
                    `;
          break;
        case 'returned':
          actionButtons.innerHTML = `
                        <button class="btn btn-process" onclick="processRefund()">
                            <i class="fas fa-credit-card"></i> Process Refund
                        </button>
                    `;
          break;
        default:
          actionButtons.innerHTML = `
                        <button class="btn btn-light" onclick="printPage()">
                            <i class="fas fa-print"></i> Print Details
                        </button>
                    `;
      }
    }

    // Action functions
    function approveReturn() {
      if (confirm('Are you sure you want to approve this return?')) {
        alert('Return approved successfully!');
        window.location.href = 'Return Orders.html';
      }
    }

    function rejectReturn() {
      if (confirm('Are you sure you want to reject this return?')) {
        alert('Return rejected successfully!');
        window.location.href = 'Return Orders.html';
      }
    }

    function schedulePickup() {
      const pickupDate = prompt('Enter pickup date (YYYY-MM-DD):', '2024-01-15');
      const courier = prompt('Enter courier service:', 'BlueDart');

      if (pickupDate && courier) {
        alert(`Pickup scheduled with ${courier} on ${pickupDate}`);
        window.location.href = 'Return Orders.html';
      }
    }

    function markAsReturned() {
      if (confirm('Mark this return as received at warehouse?')) {
        alert('Return marked as received!');
        window.location.href = 'Return Orders.html';
      }
    }

    function processRefund() {
      if (confirm('Process refund to customer?')) {
        alert('Refund processed successfully!');
        window.location.href = 'Return Orders.html';
      }
    }

    function requestMoreInfo() {
      const info = prompt('What information do you need from the customer?');
      if (info) {
        alert('Information request sent to customer.');
      }
    }

    function cancelReturn() {
      if (confirm('Are you sure you want to cancel this return?')) {
        alert('Return cancelled successfully!');
        window.location.href = 'Return Orders.html';
      }
    }

    function printPage() {
      window.print();
    }

    // Utility functions
    function formatDate(dateString) {
      if (!dateString) return 'Not set';
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
