## Repository Pattern

- Controller Layer depends on an Repository Interface
- There are 2 concrete implementation of the repo interface
- The IOC will control which implementation should be injected


## Benefits
- Decouple the Controller Layer and the Repository Layer, we can easily inject a new repository implementation using the IOC injection. This also follows the Dependency Inversion Principle. That high-level component doesn't depend on low-level component, they depends on the abstraction (The Repository Interface).