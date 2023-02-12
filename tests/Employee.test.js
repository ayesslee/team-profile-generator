// dependencies
const Employee = require('../lib/Employee');

describe('Employee', () => {
    it('Created New Employee', () => {
        const newHire = new Employee();
        expect(typeof(newHire)).toBe('object');
    });

    it('New Employee name set', () => {
        const name = 'NewHire';
        const newName = new Employee(name);
        expect(newName.name).toBe(name);
    });

    it('New Employee id set', () => {
        const id = 1;
        const newId = new Employee('NewHire', id);
        expect(newId.id).toBe(id);
    });

    it('New Employee email set', () => {
        const email = 'newhire@gmail.com';
        const newEmail = new Employee('NewHire', 2, email);
        expect(newEmail.email).toBe(email);
    });

    it('getName works', () => {
        const nametest = 'NewHire';
        const newGetname = new Employee(nametest);
        expect(newGetname.getName()).toBe(nametest);
    });

    it('getID success', () => {
        const idtest = 1;
        const newGetid = new Employee('NewHire', idtest);
        expect(newGetid.getId()).toBe(idtest);
    });

    it('getEmail success', () => {
        const emailtest = 'newhire@gmail.com';
        const newGetemail = new Employee('NewGuy', 1, emailtest);
        expect(newGetemail.getEmail()).toBe(emailtest);
    });

    it('getRole success', () => {
        const returnv = 'Employee';
        const newGetrole = new Employee('NewHire', 1, 'newhire@gmail.com');
        expect(newGetrole.getRole()).toBe(returnv);
    });
})