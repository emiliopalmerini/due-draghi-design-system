// Due Draghi Design System - HTMX Configuration
// Standard HTMX setup for loading states and animations

document.addEventListener('DOMContentLoaded', function() {
  // Show loading overlay when HTMX request starts
  document.body.addEventListener('htmx:xhr:loadstart', function() {
    const pageLoading = document.getElementById('page-loading');
    if (pageLoading) {
      pageLoading.style.display = 'flex';
    }
  });

  // Hide loading overlay when HTMX request ends
  document.body.addEventListener('htmx:xhr:loadend', function() {
    const pageLoading = document.getElementById('page-loading');
    if (pageLoading) {
      pageLoading.style.display = 'none';
    }
  });

  // Handle errors
  document.body.addEventListener('htmx:responseError', function(evt) {
    console.error('HTMX request failed:', evt.detail);
    const pageLoading = document.getElementById('page-loading');
    if (pageLoading) {
      pageLoading.style.display = 'none';
    }
  });

  // Scroll to top on page swap
  document.body.addEventListener('htmx:afterSwap', function(evt) {
    if (evt.detail.target.id === 'page-root') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});
