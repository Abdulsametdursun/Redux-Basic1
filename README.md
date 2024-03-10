# State Management

- State: These are the information and features that our components in the application have.

- Prop Drilling: It is the transfer of data from top to bottom of components.

- Context API: It is a state management tool that we manage in the centers where we create the state in the application.

- Redux: It is a central management tool that manages the states that compounds have and must be kept centrally.

# Pros of Redux

- Prevents code duplication
- Increases performance
- Reduces clutter within components
- It is easier to find errors
- Facilitates state management in medium and large-scale applications

# Cons of Redux

- It may be a bit too complex for state management in small-scale applications. It causes more code crowding than its counterparts.

# Things to know about Redux

1. Store: It is a state store that can be accessed and managed by all components of the application.

2. Reducer: The structure that decides how the state we keep in the store will change according to the instructions it receives from the action.

3. Action: The order/news we send to reducer to update the store.
   -- Action is an object with two values.
   -- type (must): string defining the action's task ("ADD_TODO")
   -- payload (depends on the situation): Data of the action sent {id:1, title:"hello"}

4. Dispatch: Method that informs reduce as soon as the action is performed

5. Subscribe: Providing components access to data held in the store (useContext | useSelector)

6. Provider: Provides the data held in the Store to the application

# Redux installation steps

- download `redux` and `react-redux` from terminal
- installation of the reducer / reducers is done
- installation of store
- introduce the store to the project

# Gold Rule

- In projects where the data comes from the API and state management redux is used, we should make the store update process dependent on the API request, but the change should occur if the request is successful.
