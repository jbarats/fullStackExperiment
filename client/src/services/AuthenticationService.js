import Api from '@/services/Api' //this is the axios object

export default {
    register (credentials) {
        return Api().post('register', credentials) 
    }
}

// AuthenticationService.register({
//     email: 'testing@gmail.com',
//     password: '123456'
// })