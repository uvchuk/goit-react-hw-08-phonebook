const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleSignUpFulfilled = ({ user }, { payload }) => {
  user.isLoggedIn = true;
  user.name = payload.user.name;
  user.email = payload.user.email;
  user.token = payload.token;
};

const handleLoginFulfilled = ({ user }, { payload }) => {
  user.isLoggedIn = true;
  user.name = payload.user.name;
  user.email = payload.user.email;
  user.token = payload.token;
};

const handleLogoutFulfilled = ({ user, contacts }) => {
  user.isLoggedIn = false;
  user.name = null;
  user.email = null;
  user.token = null;
  contacts.items = [];
};

const handleGetProfileFulfilled = ({ user }) => {
  user.isLoggedIn = true;
};

const handleFetchContactsFulfilled = ({ contacts }, { payload }) => {
  contacts.items.push(...payload);
};

const handleCreateFulfilled = ({ contacts }, { payload }) => {
  contacts.items.push(payload);
};

const handleDeleteFulfilled = ({ contacts }, { payload }) => {
  contacts.items = contacts.items.filter(el => el.id !== payload.id);
};

export {
  handlePending,
  handleFulfilled,
  handleRejected,
  handleSignUpFulfilled,
  handleLoginFulfilled,
  handleLogoutFulfilled,
  handleGetProfileFulfilled,
  handleFetchContactsFulfilled,
  handleCreateFulfilled,
  handleDeleteFulfilled,
};
