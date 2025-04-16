describe('TC001 - User Login using Registered Username and Password', () => {
  it('PASSED', () => {
    cy.visit('https://e1-vhp.com/');
    cy.get('[data-cy="username-input-login"]').type('qctest@qcbali03');
    cy.get('[data-cy="password-input-login"]').type('test123');
    cy.get('[data-cy="captcha-input-login"]').type('A3b9Z1');
    cy.contains('span','Log in').click();
  })
})

describe('TC002 - User succesfully create guest profile', () => {
  it('PASSED', () => {
    cy.visit('https://e1-vhp.com/');
    cy.get('[data-cy="username-input-login"]').type('qctest@qcbali03');
    cy.get('[data-cy="password-input-login"]').type('test123');
    cy.get('[data-cy="captcha-input-login"]').type('A3b9Z1');
    cy.contains('span','Log in').click();
    cy.contains('span','Close').click();
    // Click FO Reception Module
    cy.contains('span', 'Front Office Reception').click();
    // Click Menu Button
    cy.get('[data-cy="menu-apps-button"]').click();
    // Click Guest Profile
    cy.contains('a', 'Guest Profile').click();
    // Click Add Button
    cy.get('[data-cy="btn-add-individual"]').click();
    // Input Lastname & Firstname
    cy.get('[data-cy="lastname-input-individual"]').type('tester');
    cy.get('[data-cy="firstname-input-individual"]').type('user');
    // Choose Title
    cy.get('input[data-cy="title-input-individual"]').click({ force: true });
    cy.get('input[data-cy="title-input-individual"]').type('MRS', { force: true });
    cy.contains('[role="option"]', 'MRS').click();
    // Choose Gender
    cy.get('input[data-cy="gender-input-individual"]').click({ force: true });
    cy.get('input[data-cy="gender-input-individual"]').type('Female', { force: true });
    cy.contains('[role="option"]', 'Female').click();
    cy.contains('span', 'Save').click();
    cy.contains('button', 'Yes').click();
  })
})

describe('TC003 - User attempt to create a guest profile without filling required fields (e.g. Last Name)', () => {
  it('PASSED', () => {
    cy.visit('https://e1-vhp.com/');
    cy.get('[data-cy="username-input-login"]').type('qctest@qcbali03');
    cy.get('[data-cy="password-input-login"]').type('test123');
    cy.get('[data-cy="captcha-input-login"]').type('A3b9Z1');
    cy.contains('span','Log in').click();
    cy.contains('span','Close').click();
    // Click FO Reception Module
    cy.contains('span', 'Front Office Reception').click();
    // Click Menu Button
    cy.get('[data-cy="menu-apps-button"]').click();
    // Click Guest Profile
    cy.contains('a', 'Guest Profile').click();
    // Click Add Button
    cy.get('[data-cy="btn-add-individual"]').click();
    // Input Firstname
    cy.get('[data-cy="firstname-input-individual"]').type('user');
    // Choose Title
    cy.get('input[data-cy="title-input-individual"]').click({ force: true });
    cy.get('input[data-cy="title-input-individual"]').type('MRS', { force: true });
    cy.contains('[role="option"]', 'MRS').click();
    // Choose Gender
    cy.get('input[data-cy="gender-input-individual"]').click({ force: true });
    cy.get('input[data-cy="gender-input-individual"]').type('Female', { force: true });
    cy.contains('[role="option"]', 'Female').click();
    cy.contains('span', 'Save').click();
    cy.get('div[role="alert"]').should('be.visible');
  })
})

describe('TC004 - User attempt to create a guest profile using numeric last name', () => {
  it('PASSED', () => {
    cy.visit('https://e1-vhp.com/');
    cy.get('[data-cy="username-input-login"]').type('qctest@qcbali03');
    cy.get('[data-cy="password-input-login"]').type('test123');
    cy.get('[data-cy="captcha-input-login"]').type('A3b9Z1');
    cy.contains('span','Log in').click();
    cy.contains('span','Close').click();
    // Click FO Reception Module
    cy.contains('span', 'Front Office Reception').click();
    // Click Menu Button
    cy.get('[data-cy="menu-apps-button"]').click();
    // Click Guest Profile
    cy.contains('a', 'Guest Profile').click();
    // Click Add Button
    cy.get('[data-cy="btn-add-individual"]').click();
    // Input Lastname & Firstname
    cy.get('[data-cy="lastname-input-individual"]').type('7357109');
    cy.get('[data-cy="firstname-input-individual"]').type('user');
    // Choose Title
    cy.get('input[data-cy="title-input-individual"]').click({ force: true });
    cy.get('input[data-cy="title-input-individual"]').type('MRS', { force: true });
    cy.contains('[role="option"]', 'MRS').click();
    // Choose Gender
    cy.get('input[data-cy="gender-input-individual"]').click({ force: true });
    cy.get('input[data-cy="gender-input-individual"]').type('Female', { force: true });
    cy.contains('[role="option"]', 'Female').click();
    cy.contains('span', 'Save').click();
    cy.contains('button', 'Yes').click();
  })
})

describe('TC005 - User enter an invalid last name format (using special character except letters, numbers, spaces, /, [, ], (, ), and &)', () => {
  it('PASSED', () => {
    cy.visit('https://e1-vhp.com/');
    cy.get('[data-cy="username-input-login"]').type('qctest@qcbali03');
    cy.get('[data-cy="password-input-login"]').type('test123');
    cy.get('[data-cy="captcha-input-login"]').type('A3b9Z1');
    cy.contains('span','Log in').click();
    cy.contains('span','Close').click();
    // Click FO Reception Module
    cy.contains('span', 'Front Office Reception').click();
    // Click Menu Button
    cy.get('[data-cy="menu-apps-button"]').click();
    // Click Guest Profile
    cy.contains('a', 'Guest Profile').click();
    // Click Add Button
    cy.get('[data-cy="btn-add-individual"]').click();
    // Input Lastname only using special characters
    cy.get('[data-cy="lastname-input-individual"]').type('testing;"');
    cy.get('div[role="alert"]').should('be.visible');
  })
})

describe('TC006 - User enter over-limit characters in Last Name field (e.g. > 35 characters)', () => {
  it('PASSED', () => {
    cy.visit('https://e1-vhp.com/');
    cy.get('[data-cy="username-input-login"]').type('qctest@qcbali03');
    cy.get('[data-cy="password-input-login"]').type('test123');
    cy.get('[data-cy="captcha-input-login"]').type('A3b9Z1');
    cy.contains('span','Log in').click();
    cy.contains('span','Close').click();
    // Click FO Reception Module
    cy.contains('span', 'Front Office Reception').click();
    // Click Menu Button
    cy.get('[data-cy="menu-apps-button"]').click();
    // Click Guest Profile
    cy.contains('a', 'Guest Profile').click();
    // Click Add Button
    cy.get('[data-cy="btn-add-individual"]').click();
    // Input Lastname with > 35 characters
    cy.get('[data-cy="lastname-input-individual"]').type('Nasi goreng is my all time favorite comfort food');
    cy.get('[data-cy="lastname-input-individual"]').should('have.value', 'Nasi goreng is my all time favorite');
  })
})

describe('TC007 - User leave optional field empty and attempt to create guest profile', () => {
  it('PASSED', () => {
    cy.visit('https://e1-vhp.com/');
    cy.get('[data-cy="username-input-login"]').type('qctest@qcbali03');
    cy.get('[data-cy="password-input-login"]').type('test123');
    cy.get('[data-cy="captcha-input-login"]').type('A3b9Z1');
    cy.contains('span','Log in').click();
    cy.contains('span','Close').click();
    // Click FO Reception Module
    cy.contains('span', 'Front Office Reception').click();
    // Click Menu Button
    cy.get('[data-cy="menu-apps-button"]').click();
    // Click Guest Profile
    cy.contains('a', 'Guest Profile').click();
    // Click Add Button
    cy.get('[data-cy="btn-add-individual"]').click();
    // Input Lastname. Firstname field will be empty
    cy.get('[data-cy="lastname-input-individual"]').type('Userss');
    // Choose Title
    cy.get('input[data-cy="title-input-individual"]').click({ force: true });
    cy.get('input[data-cy="title-input-individual"]').type('MR', { force: true });
    cy.contains('[role="option"]', 'MR').click();
    // Choose Gender
    cy.get('input[data-cy="gender-input-individual"]').click({ force: true });
    cy.get('input[data-cy="gender-input-individual"]').type('Male', { force: true });
    cy.contains('[role="option"]', 'Male').click();
    cy.contains('span', 'Save').click();
    cy.contains('button', 'Yes').click();
  })
})

describe('TC008 - User can cancel guest profile creation', () => {
  it('PASSED', () => {
    cy.visit('https://e1-vhp.com/');
    cy.get('[data-cy="username-input-login"]').type('qctest@qcbali03');
    cy.get('[data-cy="password-input-login"]').type('test123');
    cy.get('[data-cy="captcha-input-login"]').type('A3b9Z1');
    cy.contains('span','Log in').click();
    cy.contains('span','Close').click();
    // Click FO Reception Module
    cy.contains('span', 'Front Office Reception').click();
    // Click Menu Button
    cy.get('[data-cy="menu-apps-button"]').click();
    // Click Guest Profile
    cy.contains('a', 'Guest Profile').click();
    // Click Add Button
    cy.get('[data-cy="btn-add-individual"]').click();
    // Input Lastname & Firstname
    cy.get('[data-cy="lastname-input-individual"]').type('testing');
    cy.get('[data-cy="firstname-input-individual"]').type('user');
    // Choose Title
    cy.get('input[data-cy="title-input-individual"]').click({ force: true });
    cy.get('input[data-cy="title-input-individual"]').type('MRS', { force: true });
    cy.contains('[role="option"]', 'MRS').click();
    // Choose Gender
    cy.get('input[data-cy="gender-input-individual"]').click({ force: true });
    cy.get('input[data-cy="gender-input-individual"]').type('Female', { force: true });
    cy.contains('[role="option"]', 'Female').click();
    cy.contains('span', 'Cancel').click();
  })
})

describe('TC009 - User check if profile data persists after page refresh', () => {
  it('PASSED', () => {
    cy.visit('https://e1-vhp.com/');
    cy.get('[data-cy="username-input-login"]').type('qctest@qcbali03');
    cy.get('[data-cy="password-input-login"]').type('test123');
    cy.get('[data-cy="captcha-input-login"]').type('A3b9Z1');
    cy.contains('span','Log in').click();
    cy.contains('span','Close').click();
    // Click FO Reception Module
    cy.contains('span', 'Front Office Reception').click();
    // Click Menu Button
    cy.get('[data-cy="menu-apps-button"]').click();
    // Click Guest Profile
    cy.contains('a', 'Guest Profile').click();
    // Click Refresh Button
    cy.get('[data-cy="btn-refresh-table"]').click();
  })
})