describe('lookupmichaelid', () => {
    it('should retrieve michael id', () => {
        cy.request('GET', 'https://restful-booker.herokuapp.com/booking/4')
          .should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('Michael');
          })
          })
})