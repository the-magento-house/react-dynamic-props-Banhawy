import React from 'react';
import {shallow, mount} from 'enzyme';
import App from '../components/App/App';
import Child from '../components/child/Child'

test('Full Name is passed to Child component in the fullname prop', () => {
    const app = shallow(<App />);
    
    const fNameInput = app.find('input#fname')
    const lNameInput = app.find('input#lname')
    const submitForm = app.find('input#submit')

    fNameInput.simulate('change', { target: { value: 'FirstName' } })
    lNameInput.simulate('change', { target: { value: 'LastName' } })
    submitForm.simulate('click')

    expect(app.contains(<Child fullname="FirstName LastName" />)).toBe(true)
});