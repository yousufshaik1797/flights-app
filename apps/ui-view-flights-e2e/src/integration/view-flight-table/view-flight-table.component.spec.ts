describe('ui-view-flights', () => {
  beforeEach(() => cy.visit('/iframe.html?id=viewflighttablecomponent--primary'));
  it('should render the component', () => {
    cy.get('flights-data-view-flight-table').should('exist');
  });
});