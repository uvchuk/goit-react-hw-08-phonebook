const handlePending = ({ contacts }) => {
  contacts.isLoading = true;
};

const handleRejected = ({ contacts }, { payload }) => {
  contacts.isLoading = false;
  contacts.error = payload;
};

const handleFulfilled = ({ contacts }) => {
  contacts.isLoading = false;
  contacts.error = null;
};

const handleGetFulfilled = ({ contacts }, { payload: { data } }) => {
  contacts.items.push(...data);
};

const handleCreateFulfilled = ({ contacts }, { payload: { data } }) => {
  contacts.items.push(data);
};

const handleDeleteFulfilled = ({ contacts }, { payload: { data } }) => {
  contacts.items = contacts.items.filter(el => el.id !== data.id);
};

export {
  handlePending,
  handleFulfilled,
  handleRejected,
  handleGetFulfilled,
  handleCreateFulfilled,
  handleDeleteFulfilled,
};
