describe('healthcheck', () => {
    it('test healthcheck api', () =>{
        cy.request("GET", "https://restful-booker.herokuapp.com/ping").should((response) => {
     expect(response.status).to.eq(200);
   });
 });
});
