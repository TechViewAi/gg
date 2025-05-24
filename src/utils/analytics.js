// Initialize Google Analytics
export const initGA = () => {
  try {
    // Check if gtag is already initialized
    if (window.gtag) {
      console.log('Google Analytics already initialized');
      return;
    }

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-KHZGEHS4XY', {
      send_page_view: false // We'll handle page views manually
    });

    // Make gtag available globally
    window.gtag = gtag;
    console.log('Google Analytics initialized successfully');
  } catch (error) {
    console.error('Error initializing Google Analytics:', error);
  }
};

// Track page views
export const trackPageView = (path) => {
  try {
    if (window.gtag) {
      window.gtag('config', 'G-KHZGEHS4XY', {
        page_path: path,
        page_title: document.title
      });
      console.log('Page view tracked:', path);
    } else {
      console.warn('Google Analytics not initialized');
    }
  } catch (error) {
    console.error('Error tracking page view:', error);
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  try {
    if (window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value
      });
      console.log('Event tracked:', { action, category, label, value });
    } else {
      console.warn('Google Analytics not initialized');
    }
  } catch (error) {
    console.error('Error tracking event:', error);
  }
}; 