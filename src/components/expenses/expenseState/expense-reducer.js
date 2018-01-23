const initialState = {};



let validateData = (expense) => {

    if(expense.expense.length < 1) { throw new Error('missing expense')};
    if(expense.cost.length < 1) {throw new Error('missing cost')};
    if(expense.categoryId.length < 1) {throw new Error('missing categoryId')};
  }



export default (state=initialState, action) => {

  let {type, payload={}} = action;
  let {id, categoryId} = payload;
  let categoryExpenses = state[categoryId];

  switch(type) {

      case "CATEGORY_ADD":
        return {...state, [payload.id]:[]};

      case "CATEGORY_DESTROY":
        let {[payload]:x, ...newState} = state;
        return newState;

      case "EXPENSE_ADD":
        validateData(payload);
        return {...state, [categoryId]: [...categoryExpenses, payload]};

      case "EXPENSE_DELETE":
        validateData(payload);
        let deleteExpenseList = categoryExpenses.filter(exp => exp.id !== id );
        return {...state, [categoryId]: deleteExpenseList};

      case "EXPENSE_UPDATE":
        validateData(payload);
        let updateExpenseList = categoryExpenses.map(exp => exp.id === id ? payload : exp );
        return {...state, [categoryId]: updateExpenseList};

      default:
          return state;
  }
};
