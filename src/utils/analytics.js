// Initialize Google Analytics
export const initGA = () => {
  // Load the Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-KHZGEHS4XY';
  document.head.appendChild(script1);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', 'G-KHZGEHS4XY');

  // Make gtag available globally
  window.gtag = gtag;
};

// Track page views
export const trackPageView = (path) => {
  if (window.gtag) {
    window.gtag('config', 'G-KHZGEHS4XY', {
      page_path: path,
    });
  }
}; 