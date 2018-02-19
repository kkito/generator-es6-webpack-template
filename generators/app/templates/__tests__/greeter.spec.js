import {Greeter} from '../src/js/greeter';
test('#greet valid' , () => {
    const gt = new Greeter("hello");
    const msg = gt.greet();
    expect(msg).toBe("konijiwa hello")
})