// 类实现接口

interface Alarm1 {
    alert():void
}

class Door{

}

class SecurityDoor extends Door implements Alarm1{
    alert(){
        console.log('Security alert');
    }
}

class Car implements Alarm1{
    alert(){
        console.log('Car alert');
    }
}

