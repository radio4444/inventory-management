# Inventory Management

This project is a simple Inventory Management system built using Next.js and Firebase Firestore. It allows users to view, add, and remove items from an inventory, while dynamically updating the item quantities in a Firestore database.

## Features

- **View Inventory Items**: Display a list of items in the inventory, including their names and quantities.
- **Add Items**: Use a modal to add new items to the inventory or update the quantity of existing items.
- **Remove Items**: Remove items from the inventory by decreasing the quantity, and delete items if the quantity reaches zero.
- **Firestore Integration**: The inventory is stored and managed using Firebase Firestore.

## Project Structure

- **Home Component**: Displays the inventory list and controls modal interactions.
- **Firestore Integration**: Firebase Firestore is used to store and retrieve inventory data.
- **Modal for Adding Items**: A modal interface is provided for adding new inventory items.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/inventory-management.git
   cd inventory-management
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Set up Firebase:

   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Copy your Firebase config values and add them to your environment variables:

     ```bash
     NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
     NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
     ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

- **Viewing Items**: The homepage lists all inventory items with their current quantities.
- **Adding Items**: Click the "Add New Item" button to open the modal, enter the item name, and click "Add." If the item already exists, its quantity will increase.
- **Removing Items**: Click the "Remove" button next to any item to decrease its quantity. If the quantity reaches zero, the item will be deleted from Firestore.

## Styling

The application uses **Material-UI** for the UI components and custom CSS for layout and modal styling.

The following code remains in `global.css` to reset basic styling:

```css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```

## Modifications

- **Removed Files**: Unnecessary files like `favicon.ico` and `page.module.css` were removed.
- **Title and Description**: The website title and description were updated in `layout.js`.
