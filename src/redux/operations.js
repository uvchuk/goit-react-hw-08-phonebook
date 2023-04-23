const handlePending = state => {
  state.contacts.isLoading = true;
};
const handleFulfilled = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items.push(...action.payload.data);
};
const handleRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export { handlePending, handleFulfilled, handleRejected };
