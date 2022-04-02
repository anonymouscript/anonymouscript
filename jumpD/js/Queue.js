class Queue2{
constructor(objs = []){
    this.start = 0;
    this.end = objs.length; // exclusive
    for(var i = 0; i < this.end; i++) this[i] = objs[i]; 
}
next(){
    console.assert(this.start < this.end);
    let nextElement = this[this.start];
    this.start += 1;
    return nextElement;
}
add(value){
    this.objs[this.end] = value;
    this.end += 1;
    return value;
}

}