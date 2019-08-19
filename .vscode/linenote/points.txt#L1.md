Creating an event handler for the various events that can be listend.
Arrow functions should be used otherwise `this` will not point to the class properties.
We append handler to specify that this will be called on some event.
While calling/using the eventhandler, pass the refrence instead of calling the function otherwise it will be called as soon as react app is deployed.

Events that can be listned:- https://reactjs.org/docs/events.html#supported-events

Declaration

>```
switchNameHandler = () => {
    console.log('Button clicked!!')
}
```
  
Usage

>```<button onClick={this.switchNameHandler}>Click here!</```