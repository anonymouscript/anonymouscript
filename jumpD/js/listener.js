class Listener2{
    constructor(){
        this.listens = {};
    }
    //bind your own function, please
    on(event, func, args){
        func.args = args ? args : [];
        if(this.listens[event]){
            this.listens[event].push(func);
        } else {
            this.listens[event] = [func];
        }
    }
    raise(event, args){
        if (!this.listens[event]){return;}
        let funcs = this.listens[event]
        for(var i = 0; i < funcs.length; i ++){
            let newArgs = (funcs[i].args.concat(args ? args : []))
            if(!this.listens[event][i](...newArgs)){
                this.listens[event].splice(i,1);
                i--;
            }
        }
    }
}