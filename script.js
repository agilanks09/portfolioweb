document.addEventListener('DOMContentLoaded', () => {
    const rows = document.querySelectorAll('.main-row');
  
    rows.forEach(row => {
      row.addEventListener('click', function () {
        const detailsRow = this.nextElementSibling;
        const isActive = this.classList.contains('active');
  
        if (isActive) {
          detailsRow.style.display = 'none';
          this.classList.remove('active');
        } else {
          document.querySelectorAll('.details-row').forEach(row => row.style.display = 'none');
          document.querySelectorAll('.main-row').forEach(row => row.classList.remove('active'));
  
          detailsRow.style.display = 'table-row';
          this.classList.add('active');
        }
      });
    });
  });
  
