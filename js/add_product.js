
    const form = document.getElementById("productForm");
    const successMessage = document.getElementById("successMessage");
    const multiImageUploadArea = document.getElementById("multiImageUploadArea");
    const imagePreviewsGrid = document.getElementById("imagePreviewsGrid");
    const productImagesInput = document.getElementById("productImagesInput");
    const productImagesData = document.getElementById("productImagesData");
    const successTitle = document.getElementById("successTitle");
    const successSubtitle = document.getElementById("successSubtitle");
    const pageTitle = document.getElementById("pageTitle");
    const submitButtonText = document.getElementById("submitButtonText");
    const browseFilesBtn = document.getElementById("browseFilesBtn");
    const uploadAreaTitle = document.getElementById("uploadAreaTitle");
    const uploadAreaMessage = document.getElementById("uploadAreaMessage");
    const imagePreviewsContainer = document.getElementById("imagePreviewsContainer");

    let isEditMode = false;
    let editProductId = null;
    let uploadedImages = [];

    document.addEventListener('DOMContentLoaded', function () {
      const urlParams = new URLSearchParams(window.location.search);
      const editId = urlParams.get('edit') || localStorage.getItem('editProductId');

      if (editId) {
        isEditMode = true;
        editProductId = parseInt(editId);
        loadProductForEditing(editProductId);
        localStorage.removeItem('editProductId');
      }

      initImageUpload();
    });

    function initImageUpload() {
      browseFilesBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        productImagesInput.click();
      });

      multiImageUploadArea.addEventListener('click', (e) => {
        if (e.target !== browseFilesBtn && !browseFilesBtn.contains(e.target)) {
          productImagesInput.click();
        }
      });

      productImagesInput.addEventListener('change', (e) => {
        const files = Array.from(e.target.files);
        handleImageFiles(files);
        productImagesInput.value = '';
      });

      multiImageUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        multiImageUploadArea.classList.add('dragover');
      });

      multiImageUploadArea.addEventListener('dragleave', () => {
        multiImageUploadArea.classList.remove('dragover');
      });

      multiImageUploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        multiImageUploadArea.classList.remove('dragover');

        const files = Array.from(e.dataTransfer.files).filter(file =>
          file.type.startsWith('image/')
        );

        if (files.length > 0) {
          handleImageFiles(files);
        } else {
          alert('Please drop image files (JPG, PNG, GIF)');
        }
      });
    }

    function handleImageFiles(files) {
      // Filter valid image files
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      const validFiles = files.filter(file => {
        if (file.size > 5 * 1024 * 1024) {
          alert(`File "${file.name}" is too large. Max size is 5MB.`);
          return false;
        }
        if (!validTypes.includes(file.type)) {
          alert(`File "${file.name}" is not a supported image type.`);
          return false;
        }
        return true;
      });

      if (validFiles.length === 0) return;

      // Process each file
      validFiles.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          uploadedImages.push({
            id: Date.now() + index,
            data: e.target.result,
            file: file,
            name: file.name,
            size: file.size
          });
          updateImagePreviews();
        };
        reader.readAsDataURL(file);
      });
    }

    function updateImagePreviews() {
      // Always keep the upload area visible
      multiImageUploadArea.style.display = 'block';

      if (uploadedImages.length === 0) {
        // No images uploaded
        uploadAreaTitle.textContent = 'Drag & Drop Images Here';
        uploadAreaMessage.textContent = 'Upload multiple product images to showcase different angles';
        imagePreviewsGrid.innerHTML = '';
        productImagesData.value = '';
        return;
      }

      // Update upload area text to show current count
      uploadAreaTitle.textContent = `Upload Images (${uploadedImages.length} selected)`;
      uploadAreaMessage.textContent = `Drag & drop to add more images or click "Browse Files"`;

      // Clear and rebuild image previews
      imagePreviewsGrid.innerHTML = '';

      uploadedImages.forEach((image, index) => {
        const previewItem = document.createElement('div');
        previewItem.className = 'image-preview-item';
        previewItem.dataset.index = index;

        previewItem.innerHTML = `
        <img src="${image.data}" alt="Preview ${index + 1}" title="${image.name}">
        <button type="button" class="remove-image-btn" onclick="removeImage(${index})">
          <i class="fas fa-times"></i>
        </button>
        <div class="image-count">${index + 1}</div>
        <div class="image-drag-handle" draggable="true">
          <i class="fas fa-grip-vertical"></i>
        </div>
      `;

        imagePreviewsGrid.appendChild(previewItem);
      });

      // Initialize drag and drop for reordering
      initImageDragAndDrop();

      // Update hidden field with image data
      productImagesData.value = JSON.stringify(uploadedImages.map(img => img.data));
    }

    function initImageDragAndDrop() {
      const items = imagePreviewsGrid.querySelectorAll('.image-preview-item');

      items.forEach(item => {
        const handle = item.querySelector('.image-drag-handle');

        handle.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('text/plain', item.dataset.index);
          setTimeout(() => {
            item.style.opacity = '0.4';
          }, 0);
        });

        handle.addEventListener('dragend', () => {
          item.style.opacity = '1';
        });
      });

      imagePreviewsGrid.addEventListener('dragover', (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(imagePreviewsGrid, e.clientY);
        const draggable = document.querySelector('.image-preview-item[style*="opacity: 0.4"]');

        if (afterElement == null) {
          imagePreviewsGrid.appendChild(draggable);
        } else {
          imagePreviewsGrid.insertBefore(draggable, afterElement);
        }
      });

      imagePreviewsGrid.addEventListener('drop', (e) => {
        e.preventDefault();
        const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
        const itemsArray = Array.from(imagePreviewsGrid.children);
        const toIndex = itemsArray.findIndex(item =>
          item === document.elementFromPoint(e.clientX, e.clientY)
        );

        if (fromIndex !== toIndex && toIndex !== -1) {
          // Reorder uploadedImages array
          const [movedImage] = uploadedImages.splice(fromIndex, 1);
          uploadedImages.splice(toIndex, 0, movedImage);

          // Update previews
          updateImagePreviews();
        }
      });
    }

    function getDragAfterElement(container, y) {
      const draggableElements = [...container.querySelectorAll('.image-preview-item:not(.dragging)')];

      return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      }, { offset: Number.NEGATIVE_INFINITY }).element;
    }

    function removeImage(index) {
      uploadedImages.splice(index, 1);
      updateImagePreviews();
    }

    function loadProductForEditing(productId) {
      try {
        const savedProducts = localStorage.getItem('products');
        let products = [];

        if (savedProducts) {
          products = JSON.parse(savedProducts);
          const product = products.find(p => p.id === productId);

          if (product) {
            // Update page title and button text
            pageTitle.textContent = 'Edit Product';
            submitButtonText.textContent = 'Update Product';

            // Fill form fields
            document.getElementById('productId').value = product.id;
            document.getElementById('productName').value = product.name;
            document.getElementById('productSKU').value = product.sku;
            document.getElementById('productVendor').value = product.vendor;
            document.getElementById('productCategory').value = product.category;
            document.getElementById('productPrice').value = product.price;
            document.getElementById('productOriginalPrice').value = product.originalPrice || '';
            document.getElementById('productStock').value = product.stock;
            document.getElementById('productStatus').value = product.status;
            document.getElementById('productDescription').value = product.description || '';

            // Load featured toggle state
            if (product.isFeatured !== undefined) {
              document.getElementById('productFeatured').checked = product.isFeatured;
            } else {
              document.getElementById('productFeatured').checked = false;
            }

            // Load images if exists
            if (product.images && Array.isArray(product.images) && product.images.length > 0) {
              product.images.forEach((img, index) => {
                uploadedImages.push({
                  id: Date.now() + index,
                  data: img,
                  file: null,
                  name: `Image ${index + 1}`,
                  size: null
                });
              });
              updateImagePreviews();
            } else if (product.image) {
              uploadedImages.push({
                id: Date.now(),
                data: product.image,
                file: null,
                name: 'Product Image',
                size: null
              });
              updateImagePreviews();
            }
          }
        }
      } catch (e) {
        console.error('Error loading product for editing:', e);
      }
    }

    function showSuccessMessage(title, subtitle) {
      successTitle.textContent = title;
      successSubtitle.textContent = subtitle;
      successMessage.style.display = "flex";

      window.scrollTo({ top: 0, behavior: 'smooth' });

      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000);
    }

    function saveAsDraft() {
      const data = gatherFormData();
      data.status = "draft";
      const saved = saveProductToLocalStorage(data);

      if (saved) {
        console.log("Product Saved as Draft:", data);
        showSuccessMessage("Draft saved successfully!", "The product draft has been saved.");
      } else {
        alert("Error saving draft. Please try again.");
      }
    }

    function gatherFormData() {
      const images = uploadedImages.map(img => img.data);

      return {
        id: document.getElementById("productId").value ? parseInt(document.getElementById("productId").value) : null,
        name: document.getElementById("productName").value.trim(),
        sku: document.getElementById("productSKU").value.trim(),
        vendor: document.getElementById("productVendor").value,
        category: document.getElementById("productCategory").value,
        price: parseFloat(document.getElementById("productPrice").value),
        originalPrice: document.getElementById("productOriginalPrice").value ? parseFloat(document.getElementById("productOriginalPrice").value) : null,
        stock: parseInt(document.getElementById("productStock").value),
        status: document.getElementById("productStatus").value,
        images: images.length > 0 ? images : [],
        description: document.getElementById("productDescription").value.trim(),
        isFeatured: document.getElementById("productFeatured").checked,
        dateAdded: isEditMode ? (() => {
          const savedProducts = localStorage.getItem('products');
          if (savedProducts && editProductId) {
            const products = JSON.parse(savedProducts);
            const existingProduct = products.find(p => p.id === editProductId);
            return existingProduct ? existingProduct.dateAdded : new Date().toISOString().split('T')[0];
          }
          return new Date().toISOString().split('T')[0];
        })() : new Date().toISOString().split('T')[0],
        tags: [],
        platforms: ["Web", "Android", "iOS"]
      };
    }

    function saveProductToLocalStorage(productData) {
      try {
        const savedProducts = localStorage.getItem('products');
        let products = savedProducts ? JSON.parse(savedProducts) : [];

        if (isEditMode && editProductId) {
          const index = products.findIndex(p => p.id === editProductId);
          if (index > -1) {
            productData.id = editProductId;
            if (productData.images.length === 0 && products[index].images && products[index].images.length > 0) {
              productData.images = products[index].images;
            }
            productData.tags = products[index].tags || [];
            productData.platforms = products[index].platforms || ["Web", "Android", "iOS"];
            productData.image = productData.images.length > 0 ? productData.images[0] : "";
            products[index] = productData;
          }
        } else {
          const maxId = products.length > 0 ? Math.max(...products.map(p => p.id)) : 0;
          productData.id = maxId + 1;
          productData.image = productData.images.length > 0 ? productData.images[0] : "";
          products.push(productData);
        }

        localStorage.setItem('products', JSON.stringify(products));
        return true;
      } catch (e) {
        console.error('Error saving product to localStorage:', e);
        return false;
      }
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      // Validation
      const name = document.getElementById('productName').value.trim();
      const sku = document.getElementById('productSKU').value.trim();
      const description = document.getElementById('productDescription').value.trim();
      const vendor = document.getElementById('productVendor').value;
      const category = document.getElementById('productCategory').value;
      const price = parseFloat(document.getElementById("productPrice").value);
      const originalPrice = document.getElementById("productOriginalPrice").value
        ? parseFloat(document.getElementById("productOriginalPrice").value)
        : null;
      const stock = parseInt(document.getElementById("productStock").value);

      if (!name) {
        alert('Product name is required');
        document.getElementById('productName').focus();
        return;
      }
      if (!sku) {
        alert('SKU is required');
        document.getElementById('productSKU').focus();
        return;
      }
      if (!description) {
        alert('Description is required');
        document.getElementById('productDescription').focus();
        return;
      }
      if (!vendor) {
        alert('Vendor is required');
        document.getElementById('productVendor').focus();
        return;
      }
      if (!category) {
        alert('Category is required');
        document.getElementById('productCategory').focus();
        return;
      }
      if (!price || price < 0) {
        alert("Valid price is required and cannot be negative.");
        document.getElementById('productPrice').focus();
        return;
      }
      if (originalPrice !== null && originalPrice < price) {
        alert("Original price should be higher than or equal to current price.");
        document.getElementById('productOriginalPrice').focus();
        return;
      }
      if (!stock || stock < 0) {
        alert("Valid stock quantity is required and cannot be negative.");
        document.getElementById('productStock').focus();
        return;
      }

      const data = gatherFormData();

      // Save to localStorage
      const saved = saveProductToLocalStorage(data);

      if (saved) {
        console.log("Product Saved:", data);
        showSuccessMessage(
          isEditMode ? "Product updated successfully!" : "Product saved successfully!",
          isEditMode ? "The product has been updated in your inventory." : "The product has been added to your inventory."
        );

        // Reset form after successful submission
        setTimeout(() => {
          if (!isEditMode) {
            form.reset();
            uploadedImages = [];
            updateImagePreviews();
            document.getElementById('productFeatured').checked = false;
            document.getElementById('productId').value = '';
          } else {
            setTimeout(() => {
              window.location.href = 'product-list.html';
            }, 2000);
          }
        }, 100);
      } else {
        alert("Error saving product. Please try again.");
      }
    });

    // Add input validation feedback
    const requiredInputs = document.querySelectorAll('input[required], select[required], textarea[required]');
    requiredInputs.forEach(input => {
      input.addEventListener('blur', function () {
        if (!this.value.trim()) {
          this.style.borderColor = '#ef4444';
        } else {
          this.style.borderColor = '#e5e7eb';
        }
      });
    });

    // Format price inputs to show 2 decimal places
    document.getElementById('productPrice').addEventListener('blur', function () {
      if (this.value) {
        this.value = parseFloat(this.value).toFixed(2);
      }
    });

    document.getElementById('productOriginalPrice').addEventListener('blur', function () {
      if (this.value) {
        this.value = parseFloat(this.value).toFixed(2);
      }
    });

    // Add toggle switch visual feedback
    document.getElementById('productFeatured').addEventListener('change', function () {
      const audio = new Audio('data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAZGF0YQQ=');
      audio.volume = 0.1;
      audio.play().catch(() => { });

      const toggleLabel = this.parentElement.nextElementSibling;
      if (this.checked) {
        toggleLabel.innerHTML = 'Marked as Featured Product <i class="fas fa-star" style="color: #f59e0b; margin-left: 5px;"></i>';
      } else {
        toggleLabel.innerHTML = 'Mark as Featured Product <i class="fas fa-star" style="color: #f59e0b; margin-left: 5px;"></i>';
      }
    });

    document.getElementById('productName').focus();
