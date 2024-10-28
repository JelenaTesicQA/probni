describe('primeri testa', () => {

    it('primer1', () => {
      cy.visit('https://katalon-demo-cura.herokuapp.com/');
      cy.get('a#btn-make-appointment', { timeout: 60000 }).should('contain','Make Appointment').click();
      });

});