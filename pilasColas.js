class Stack {
    //constructor valor de entrada inicializado
    constructor(stack = []) {
        this.stack = stack
    }

    getStack() {
        return this.stack;
    }

    isEmpty() {
        return !this.stack.length;
    }

    addToStack(value) {
        this.stack.push(value);
        return this;
    }

    removeFromStack() {
        this.stack.pull()
    }

    searchInStack(value) {
        return this.stack.find(element => element > value);        
    }

    sortStack() {
        return this.stack.sort();
    }

    removeByPosition(value) {           
        if(value > this.stack.length || value < 0){
            return "Fuera de rango";
        }else{ 
            this.stack.splice(value, 1);          
        }
        return stack;
    }

    checkIfExist(value) {             
		if(this.stack.indexOf(value) == -1){
			return "False";
		}else{
			return "True"
		}            
    }
}

let stack = new Stack([1,5,6,0,4,9]);

console.log("-- Pilas --");
console.log("1- Función de búsqueda");
console.log('Su busqueda se encuentra en la posicion', stack.searchInStack(4));

console.log("2- Función de Ordenamiento");
console.log('Pila ordenada: ',stack.sortStack());

console.log("3- Función de para remover un elemento en una posición especifica");
console.log('Pila despues de eliminar un elemento : ',stack.removeByPosition(0));

console.log("4- Función para validar si un elemento existe dentro de un arreglo");
console.log(stack.checkIfExist(9));

class Queue {
    constructor(queue = []) {
        this.queue = queue;
    }

    getQueue() {
        return this.queue;
    }

    //agrega un elemento a la cola
    addToQueue(value) {
        this.queue.push(value);
        return this;
    }

    //remueve el primer elemento de la cola
    removeFromQueue() {
        this.queue.shift();
        return this;
    }

    //valida si esta vacio
    isEmpty() {
        return !this.queue.length;
    }

    searchBy(option, value) {        
        if(option.toLowerCase()  == "nombre"){
            return this.queue.find(obj => obj.name === value) ?? "No existe";            
        }else 
            if(option.toLowerCase() == "edad"){
                return this.queue.find(obj => obj.age === value) ?? "No existe";                
            }else 
                return "Opcion invalida";
    }

    sortBy(option) {
        if(option.toLowerCase()  == "nombre"){
            return this.queue.sort((x, y) => x.name.localeCompare(y.name));            
        }else 
            if(option.toLowerCase() == "edad"){
                return this.queue.sort((a, b) => a.age - b.age);
            }else 
                return "Opcion invalida";
    }

    removeByAge(value) {
        this.queue = this.queue.filter(obj => obj.age !== value);
        return queue;
    }
}

let queue = new Queue([
    {name: "Luis", age: 52},
    {name: "Carlos", age: 22}, 
    {name: "Malena", age: 21}, 
    {name: "Alberto", age: 34},
    {name: "Maria", age: 21},
    {name: "Francisco", age: 52}
]);

console.log("-- Colas --");

console.log("1- Busqueda por edad o nombre");
console.log(queue.searchBy("nombre","Alberto"));
console.log(queue.searchBy("edad",21));

console.log("2- Ordenar por edad o nombre");
console.log(queue.sortBy("Nombre"));
console.log(queue.sortBy("Edad"));

console.log("3- Remover elementos que concuerden con una edad especifica");
console.log(queue.removeByAge(21));
