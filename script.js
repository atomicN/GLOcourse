
class First{
    hello(){
        console.log('привет, я метод родителя');
    }
}

class Second extends First{
    hello(){
        super.hello();
        console.log('а я дочерний метод родителя');
    }

}

const obj = new Second();
obj.hello();