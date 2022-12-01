describe('My first test', () => {
  it('Visits 9-line', () =>{
    cy.visit('http://localhost:5173')
    cy.contains('9-Line')
    cy.contains('Requester')
    cy.contains('Responder')
    cy.contains('Dispatcher')
  })
})

describe("Clicking some shit", () => {
  it('Clicks on Requester', () =>{
    cy.visit('http://localhost:5173')
    cy.contains('Requester').click()
    assert.isOk('everything', 'everything is ok')
    //cy.get(':nth-child(4) > .mantine-InputWrapper-root > .mantine-Text-root').should('have.value', 'Must Select One Option')
  })
})

describe("Submits incomplete MEDEVAC", () => {
  it('Does not submit an incomplete MEDEVAC', () =>{
    cy.visit('http://localhost:5173')
    cy.contains('Requester').click()
    cy.get(':nth-child(2) > b').should('exist')
  })
})

describe("Submit a legit MEDEVAC", () => {
  it("Submits a proper MEDEVAC request", () => {
    cy.visit('http://localhost:5173')
    cy.contains('Requester').click()
    cy.get('#Location1').type('15R')
    cy.get('#Location2').type('VQ')
    cy.get('#Location3').type('8800')
    cy.get('#Location4').type('2211')
    cy.get('#Call-Frequency').type('11.0000')
    cy.get('#Call-Sign').type('Slaughterhouse6')
    cy.get('#mantine-r3').type('2')
    cy.get('#mantine-rf').click()
    cy.get('#mantine-rh').type('2')
    cy.get(':nth-child(10) > .mantine-UnstyledButton-root > .mantine-3xbgk5 > .mantine-qo1k2').click()
    assert.isOk('everything', 'everything is ok')
  })
})

describe("Responder view", () => {
  it('Views from Responder', ()=> {
    cy.visit('http://localhost:5173')
    cy.contains('Responder').click()
    cy.get(':nth-child(2)>:nth-child(8)>.mantine-UnstyledButton-root').click()
    cy.contains('ID')
    cy.contains('Role 2')
    cy.contains("US MIL")
  })
})
