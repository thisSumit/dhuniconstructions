// Google Tag Manager utility functions

export const trackGTMEvent = (eventName: string, eventData: Record<string, any> = {}) => {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: eventName,
      ...eventData
    });
  }
};

// Predefined event tracking functions for common actions
export const trackContactNow = (location: string, projectName?: string) => {
  trackGTMEvent('contact_now', {
    button_location: location,
    project_name: projectName || 'general'
  });
};

export const trackDownloadBrochure = (location: string, projectName?: string) => {
  trackGTMEvent('download_brochure', {
    button_location: location,
    project_name: projectName || 'general'
  });
};

export const trackContactUs = (location: string) => {
  trackGTMEvent('contact_us', {
    button_location: location
  });
};

export const trackPhoneCall = (location: string) => {
  trackGTMEvent('phone_call', {
    button_location: location
  });
};
