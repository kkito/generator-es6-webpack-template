import { Greeter } from "./greeter";
(function(){
    const gt = new Greeter("myname")
    gt.greet();
    // no-console
    // console.log(gt.greet());
}())