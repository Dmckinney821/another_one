import React, { useReducer } from 'react';

import uuid from 'uuid';
import ContactContext from './contactContext';
import ContactReducer from './contactReducer';

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_FILTER
 } from '../types';


 const ContactState = props => {
     const initialState = {
         contacts: [
             {
                 id: 1,
                 name: 'Jill Jilly',
                 email: 'jilly@gmail.com',
                 type: 'personal',
                 phone: '111-111-1111'
             },
             {
                id: 2,
                name: 'Bill Billy',
                email: 'billy@gmail.com',
                type: 'personal',
                phone: '222-222-2222'
            },
            {
                id: 3,
                name: 'Harr Harry',
                email: 'harry@gmail.com',
                type: 'professional',
                phone: '333-333-3333'
            }
         ],
         current: null,
         filtered: null
     };
     const [state, dispatch] = useReducer(ContactReducer, initialState);

    //  Add contact
     const addContact = contact => {
         contact.id = uuid.v4();
         dispatch({ type: ADD_CONTACT, payload: contact });
     }
    // Delete contact
    const deleteContact = id => {
        
        dispatch({ type: DELETE_CONTACT, payload: id });
    }
    // Set Current contact
    const setCurrent = contact => {
        dispatch({ type: SET_CURRENT, payload: contact });
    }
    // Clear current contact
    const clearCurrent = () => {
        dispatch({ type: CLEAR_CURRENT });
    }
    // Update contact
    const updateContact = contact => {
        dispatch({ type: UPDATE_CONTACT, payload: contact });
    }
    // Filter contacts
    const filterContacts = text => {
        dispatch({ type: FILTER_CONTACTS, payload: text });
    }
    // Clear filters
    const clearFilter = () => {
        dispatch({ type: CLEAR_FILTER });
    }

    return (
        <ContactContext.Provider
        value={{
            contacts: state.contacts,
            addContact,
            deleteContact,
            current: state.current,
            SET_CURRENT,
            setCurrent,
            clearCurrent,
            updateContact,
            filterContacts,
            filtered: state.filtered,
            clearFilter
        }}>
            { props.children }
        </ContactContext.Provider>
    )
 };

 export default ContactState;