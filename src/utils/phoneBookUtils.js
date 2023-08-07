export const contactsFilter = (contacts, searchTerm) => {
  const term = searchTerm.trim().toLowerCase();

  if (!contacts.length || !term.length) return contacts;

  const filtered = contacts.filter(contact =>
    contact.name.toLowerCase().includes(term)
  );

  return filtered.length ? filtered : [];
};

export const checkIfContactExists = (contacts, contactFilterByName) => {
  if (!contacts.length) return false;
  const isContactExist = contacts.some(
    ({ name }) => name.toLowerCase() === contactFilterByName.toLowerCase()
  );
  return isContactExist;
};
