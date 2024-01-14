describe('createtoken', () => {
    it('itcreatestoken', () => {
      const token = {
        username : 'admin',
        password : 'password123',
        
      
      };
  cy.request('POST', 'https://restful-booker.herokuapp.com/auth', token)
  
       .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('token');
       });
      });
    });
      
    