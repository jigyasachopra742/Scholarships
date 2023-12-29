import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://http://scholarship-env.eba-h5npp4q2.us-east-1.elasticbeanstalk.com/scholarship';

class EmployeeService{

 getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}