import * as React from 'react';
import {mount} from 'cypress/react';
import App from '../../src/App';

describe('Mounting', () => {
  it('mounts the component correctly', () => {
    mount(<App /> )
    //cy.contains(/9-line/i).should('be.visible');
  })
})

// describe('Header', () => {
//   it('header contains 9-line', ()=>{
//     mount(<App />)
//     cy.contains('9-line')
//   })
// })

// describe('Responder Button', ()=> {
//   it('Responder button is there', ()=>{
//     cy.get('.mantine-1r3398a > .mantine-3xbgk5 > .mantine-qo1k2')
//           .should('exist')
//   })
// })

describe('Responder Button', ()=> {
   it('Responder button is there', ()=>{
         cy.visit('http://localhost:5174')
         cy.get('.mantine-15obvya')
             .should('exist')
     })
 })


// describe("Home page", () => {
//   beforeEach(() => {
//       cy.visit('/')
//   })
//   it("header contains 9'line", () => {
//     cy.findByRole('heading').should('contain', 'My Recipes')
//     cy.get('b')
//       .findByText('Requestor')
//       .should('exist')
//   })
// })



