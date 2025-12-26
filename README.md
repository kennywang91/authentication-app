# Features Implemented
1. Authentication with React Context API

    * Global authentication state using AuthContext

    * Exposed actions:

        * login(email, password)

        * signup(name, email, password)

        * logout()

    * Global user state available across the app

2. Pages

Login Page  

    * Email & Password input fields

    * Validation & error handling:

    * Invalid email format

    * Password length < 6

    * Incorrect credentials

    * Navigation to Signup page

Signup Page

    * Name, Email & Password input fields

    * Validation & error handling:

    * Missing fields

    * Invalid email format

    * Password must be at least 6 characters

    * Navigation back to Login screen

Home Screen

    * Displays logged in user's name and email

    * Logout button that clears authentication state

3. Persistent Authentication

    * Uses AsyncStorage to persist user data

    * User remains logged in after app restart

4. Navigation

    * Implemented using React Navigation

    * Conditional navigation based on authentication state



# Setup Instruction
1. Open the project in visual studio code. Navigate to the project root & install dependencies by running below command:
`npm install`


    For iOS:
    * Run below command to install iOS native dependecies:

    `cd ios && pod install && cd ..`

    * Run the App by running below command: 
    
    `npx react-native run-ios`

Notes: For more information on how to setup & run the project, please refer to the link below:

https://reactnative.dev/docs/getting-started-without-a-framework

