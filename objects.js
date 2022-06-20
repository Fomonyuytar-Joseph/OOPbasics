class User{
    constructor(name ,email){
        this.name=name;
        this.email=email;
        this.score=0;
    }
    login(){
        console.log(this.email ,'just logged in')
    }
    logout(){
        console.log(this.email ,'just logged out')
    }
    updateScore(){
        this.score++;
        console.log(this.email , 'has a score of ', this.score)
    }
}

class Admin extends User{
    deleteUser(user){
        users =users.filter(u=>{

            return u.email != user.email
        })

    }



}
var userOne = new User('Joseph','joseph@mail.com');
var userTwo = new User('Nazy','Nazy@mail.com');
var admin = new Admin('Jared','jared@gmail.com')

var users=[userOne ,userTwo]
console.log(Admin)

admin.login()
admin.deleteUser(userTwo)
console.log(users)


