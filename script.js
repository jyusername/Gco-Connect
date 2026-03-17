document.addEventListener('DOMContentLoaded', function() {
    
    const navBookBtn = document.getElementById('navBookBtn');
    const footerBookBtn = document.getElementById('footerBookBtn');
    const heroBtn = document.getElementById('heroBtn');
    
    if (navBookBtn) {
        navBookBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Book an Appointment (navigation)');
        });
    }
    
    if (footerBookBtn) {
        footerBookBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Book an Appointment (footer)');
        });
    }
    
    if (heroBtn) {
        heroBtn.addEventListener('click', function() {
            alert('GCO Connect!');
        });
    }
});