class User {
    constructor(fullname, email, password) {
        this.fullname = fullname
        this.email = email
        this.password = password
        
    }
    login(email, password){
       if (this.email === email && this.password === password) {
        console.log('Login success!');
       } else{
        console.log('Login Failed!')
       }
    }
}

const user = new User('Márcio Gabriel', 'gabriel@gmail.com', 'abc123')
user.login('gabriel@gmail.com', 'abc123')