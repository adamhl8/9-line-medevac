// describe("Home page", () => {
//     beforeEach(() => {
//         cy.visit('/')
//     })
//     it("header contains 9'line", () => {
//       cy.findByRole('heading').should('contain', 'My Recipes')
//       cy.get('p')
//         .findByText('There are no recipes to list.')
//         .should('exist')
//     })
//   })
it('9-line test', () =>{
    cy.visit('http://localhost:5174')
})
