The property `state` is only available in  class based React components that extends `Component`.
`state` is a property of Component class and hence changing the name will not work correctly.
Any change in `state` triggers a re-rendering in the DOM
We should take greate care while changing `state` as it is a global property
You can then access it via `this.state` in your class JSX code (which you return in the required render()  method)

*Example*
>```<Person name={this.state.name} age={this.state.age}>My Hobbies: Reading</Person>```