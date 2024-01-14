describe('retrieve bookingids', () => {
    it('retrieves bookingids', () => {
      cy.request("GET", "https://restful-booker.herokuapp.com/booking").should((response) => {
        expect(response.status).to.eq(200);
      });
    });
   });