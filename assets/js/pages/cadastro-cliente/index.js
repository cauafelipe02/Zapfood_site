  document.querySelectorAll('input[type="checkbox"]').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            document.querySelectorAll('input[type="checkbox"]').forEach(function(cb) {
                if (cb !== checkbox) {
                    cb.checked = false;
                }
            });
        }
    });
});