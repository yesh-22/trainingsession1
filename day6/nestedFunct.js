function parent(){
    function child(){
        console.log("i am child function");
    }
    child()
}
parent()


var a=10;
let b=20;
function parent1(){
    var a="hello";
    let b="hi";
    console.log(a);// o/p:10
    console.log(b);// o/p:20
    console.log(this.a);
    
}
parent1();

//lexical scope or scope chaine
function main(){
    let a=10;
    function child(){
        console.log(a);
    }
    child();
}
main();


//closure
function parent2(){
    let a=10;
    function child(){
        console.log(a);
    }
     return child;
}
parent2()();

function parent3(){
    function child1(){
        console.log("bhavani");
        function child1_1(){
            console.log("i am child 3");

        }
        return child1_1;
    }
    function child2(){
        console.log("i am yeshashvi");
    }
    return [child1,child2];
    
}
parent3()[0]()()
parent3()[1]()