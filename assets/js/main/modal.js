document.addEventListener('DOMContentLoaded', function() {
    var selects = document.querySelectorAll('.page_Select');
    selects.forEach(function(select) {
        select.addEventListener('change', function() {
            var selectedValue = this.value;
            window.location.href = selectedValue;
        });
    });
});