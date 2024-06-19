# Property Manager App

Property Manager App is a mobile application built with React Native to manage property data and sync it with a backend service when online. It allows users to input and save property-related information offline, syncing with the server when an internet connection is available.

## Features

- **Offline Data Storage:** Store property data locally on the device using AsyncStorage.
- **Categories List** Utilizes the MasonryFlashList component to display categories in a Masonry layout.
- **Sync Functionality:** Automatically sync data with the server when the app detects an internet connection.
- **UI Components:** Utilizes React Native UI components for a responsive and user-friendly interface.
- **Custom Input Fields:** Customizable input fields for various types of property data.
- **Collapsible Sections:** Utilizes Collapsible components for organizing and displaying property data sections.
- **Save Button:** Enable/disable save button based on the completion of required fields.
- **Custom TabBar:** The BuildingsTab component allows users to dynamically add tabs (representing buildings) and switch between them using a top tab navigation interface.

## Screenshots

<img src="https://github.com/Riser17/PropertyManager/assets/91198103/0754c084-47f3-4585-9c79-6bdc67c55e3c" width="300" height="500">
<img src="https://github.com/Riser17/PropertyManager/assets/91198103/afc6c311-a9c1-464f-bbd6-fce22a2b5ef9" width="300" height="500">
<img src="https://github.com/Riser17/PropertyManager/assets/91198103/8ab6318e-7a85-45a7-89dd-ead59e3bb607" width="300" height="500">

## Recorded Preview

1. **Check drive link:**
https://drive.google.com/file/d/1V9h-ZIYTBuhX3d3MW6QTXSJg0T7bmXEQ/view?usp=sharing


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Riser17/PropertyManager.git
   cd property-manager-app
   ```
2. **Install dependencies:

   ```bash
   npm install
   ```

3. **Run the application:

   ```bash
   npx react-native run-android
   # or
   npx react-native run-ios
   ```
