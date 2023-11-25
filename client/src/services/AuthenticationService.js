import Api from '@/services/Api' //this is the axios object


export default {
    register (credentials) {
        return Api().post('register', credentials) 
    },
    login (credentials) {
        return Api().post('login', credentials) 
    }

}

// AuthenticationService.register({
//     email: 'testing@gmail.com',
//     password: '123456'
// })