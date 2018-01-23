import React from 'react';
import Enzyme, {simulate, mount, shallow} from 'enzyme';
import uuid from 'uuid/v1';
import {createCategory, updateCategory, deleteCategory} from '../components/categories/categoryState/category-actions';
import {createExpense, updateExpense, deleteExpense} from '../components/expenses/expenseState/expense-actions';



describe('test Category actions', () => {
  test('category add returns correct type and payload', ()=> {

    let category = {name: 'FOOD', budget: '100'};
    let action = createCategory(category);

    expect(action.type).toEqual('CATEGORY_ADD');
    expect(action.payload.name).toEqual('FOOD');
    expect(action.payload.budget).toEqual('100');
    expect(action.payload.id).not.toBe(undefined);
  });


  test('category update returns correct type and payload', ()=> {

    let category = {name: 'DRINK', budget: '200'};
    let action = updateCategory(category);

    expect(action.type).toEqual('CATEGORY_UPDATE');
    expect(action.payload.name).toEqual('DRINK');
    expect(action.payload.budget).toEqual('200');
  });


  test('category destroy returns correct type and categoryId', ()=> {

    let category = {name: 'ETC', id: uuid()};
    let action = deleteCategory(category.id);

    expect(action.type).toEqual('CATEGORY_DESTROY');
    expect(action.payload).toEqual(category.id);
  });
})



describe('test Expense actions', () => {
  test('expense add returns correct type and payload', ()=> {

    let expense = {expense: 'SPORT', cost: '100'};
    let action = createExpense(expense);

    expect(action.type).toEqual('EXPENSE_ADD');
    expect(action.payload.expense).toEqual('SPORT');
    expect(action.payload.cost).toEqual('100');
    expect(action.payload.id).not.toBe(undefined);
  });


  test('expense update returns correct type and payload', ()=> {

    let expense = {expense: 'BOOK', cost: '50'};
    let action = updateExpense(expense);

    expect(action.type).toEqual('EXPENSE_UPDATE');
    expect(action.payload.expense).toEqual('BOOK');
    expect(action.payload.cost).toEqual('50');
  });


  test('expense =estroy returns correct type and expense =', ()=> {

    let expense = {expense: 'STUFF', cost: '20'};
    let action = deleteExpense(expense);

    expect(action.type).toEqual('EXPENSE_DELETE');
    expect(action.payload.expense).toEqual('STUFF');
    expect(action.payload.cost).toEqual('20');
  });
})
