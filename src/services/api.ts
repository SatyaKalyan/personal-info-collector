import axios from 'axios';

// Define the type for personalInfo
interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
}

const API_URL = 'https://your-backend-api.com/api/personal-info';

// Typing the personalInfo parameter and the return type of the function
export const submitPersonalInfo = async (personalInfo: PersonalInfo): Promise<any> => {
    try {
        const response = await axios.post(API_URL, personalInfo);
        return response.data;
    } catch (error) {
        // Cast error as an instance of Error to access the message
        throw new Error('Error submitting personal information: ' + (error as Error).message);
    }
};
