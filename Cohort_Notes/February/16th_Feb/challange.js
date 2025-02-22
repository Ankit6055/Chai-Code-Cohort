class A {
    functionInsideA () {
        console.log("HOLA");
    }
}

class B extends A{
    functionInsideB () {
        console.log("HEY");
    }
}

const p = new B();
p.functionInsideA();