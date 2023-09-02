import axios from 'axios';

const EMPLOYEE_API_BASE_URL = 'http://localhost:9090/scholarship';

class EmployeeService{

 getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}
// export default EmployeeService;