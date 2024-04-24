import { program } from 'commander';
import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} from './contacts.js';
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'Id')
  .option('-n, --name <type>', 'Name')
  .option('-e, --email <type>', 'Email')
  .option('-p, --phone <type>', 'Phone');

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  let result;
  switch (action) {
    case 'list':
      result = await listContacts();
      console.log(result);
      break;

    case 'get':
      result = await getContactById(id);
      console.log(result);
      break;

    case 'remove':
      result = await removeContact(id);
      console.log(result);
      break;

    case 'add':
      result = await addContact(name, email, phone);
      console.log(result);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(options);
