# Google Tag Manager Integration Summary

## GTM Setup
- **GTM Container ID**: GTM-PZWSM6ZX
- **Implementation**: Added to `app/layout.tsx` with proper Next.js Script components
- **Tracking Events**: Custom events for user interactions

## Custom Events Configured

### 1. Contact Now Button
- **Event Name**: `contact_now`
- **Trigger**: When users click "Contact Now" buttons
- **Data Sent**:
  - `button_location`: Location of the button (e.g., 'project_details_page')
  - `project_name`: Name of the project (for project-specific buttons)

### 2. Download Brochure Button
- **Event Name**: `download_brochure`
- **Trigger**: When users click "Download Brochure" buttons
- **Data Sent**:
  - `button_location`: Location of the button (e.g., 'project_details_page')
  - `project_name`: Name of the project

### 3. Contact Us Button
- **Event Name**: `contact_us`
- **Trigger**: When users click general "Contact Us" buttons
- **Data Sent**:
  - `button_location`: Location of the button (e.g., 'hero_section', 'new_project_section')

### 4. Phone Call Link
- **Event Name**: `phone_call`
- **Trigger**: When users click phone number links
- **Data Sent**:
  - `button_location`: Location of the link (e.g., 'contact_section')

## Components Updated

### 1. ProjectDetails Component (`/components/ProjectDetails/index.tsx`)
- ✅ Download Brochure button with GTM tracking
- ✅ Contact Now button with GTM tracking
- ✅ Project-specific data included in events

### 2. Hero Component (`/components/Hero/index.tsx`)
- ✅ Contact Us button with GTM tracking

### 3. NewProject Component (`/components/NewProject/index.tsx`)
- ✅ Contact Us button with GTM tracking

### 4. Contact Component (`/components/Contact/index.tsx`)
- ✅ Phone number link with GTM tracking

## Utility Functions

Created `/lib/gtm.ts` with reusable tracking functions:
- `trackContactNow(location, projectName?)`
- `trackDownloadBrochure(location, projectName?)`
- `trackContactUs(location)`
- `trackPhoneCall(location)`

## GTM Container Setup Required

To complete the setup, configure these triggers and tags in your GTM container:

### Triggers to Create:
1. **Contact Now Event**
   - Trigger Type: Custom Event
   - Event Name: `contact_now`

2. **Download Brochure Event**
   - Trigger Type: Custom Event
   - Event Name: `download_brochure`

3. **Contact Us Event**
   - Trigger Type: Custom Event
   - Event Name: `contact_us`

4. **Phone Call Event**
   - Trigger Type: Custom Event
   - Event Name: `phone_call`

### Recommended Tags:
1. **Google Analytics 4 Events** (if using GA4)
2. **Facebook Pixel Events** (for conversion tracking)
3. **Google Ads Conversion Tracking**

## Testing
1. Use GTM Preview mode to test events
2. Check browser console for dataLayer events
3. Verify events in Google Analytics (if connected)

## Data Available for Each Event
- Event name
- Button/link location
- Project name (where applicable)
- Timestamp (automatic)
- User information (automatic)
