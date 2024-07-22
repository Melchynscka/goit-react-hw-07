import { createSlice, createSelector } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './contactsOps';
import { selectNameFilter } from './filtersSlice';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, state => {
        state.error = null;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      }),
});

export const selectLoading = state => {
  return state.contacts.loading;
};
export const selectError = state => {
  return state.contacts.error;
};
export const selectContacts = state => {
  return state.contacts.items;
};

export const selectFilteredContacts = createSelector(
  [selectNameFilter, selectContacts],
  (filterValue, contacts) => {
    filterValue = filterValue.toLowerCase().trim();

    if (!filterValue) {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  }
);

export default slice.reducer;