# Personal Information Collector

This project is a web application designed to collect personal information from users. It features a user-friendly interface for submitting details such as name, email, and phone number.

## Project Structure

```
personal-info-collector
├── src
│   ├── components
│   │   ├── PersonalInfoForm.tsx
│   │   └── FormField.tsx
│   ├── pages
│   │   └── HomePage.tsx
│   ├── services
│   │   └── api.ts
│   ├── styles
│   │   └── styles.css
│   ├── App.tsx
│   └── index.tsx
├── public
│   └── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Features

- **Personal Information Form**: A form to collect user details.
- **Validation**: Basic validation to ensure the correctness of the input data.
- **API Integration**: Functions to submit the collected data to a backend service.

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd personal-info-collector
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

## Usage

- Navigate to the home page to fill out the personal information form.
- Submit the form to send the data to the backend service.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.

Lessons learnt

React components build has to be run by Yarn before starting npm
Type script has to know the validation for error handling . So either define them manually or mention Type script to add it dynamically on the fly as string or what ever it is.