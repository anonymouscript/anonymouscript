class Queue2{
constructor(objs = []){
    this.start = 0;
    this.end = 1; // exclusive
    this.objs = objs
}
next(){
    console.assert(this.start + 1 < this.end);
    let value = this.objs[this.start];
    this.start += 1;
    return value;
}
add(value){
    this.objs[this.end] = value;
    this.end += 1;
    return value;
}

}