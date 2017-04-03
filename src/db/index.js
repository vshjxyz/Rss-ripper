import DB_CONSTANTS from '../constants/db';
import levelup from 'level';

export default levelup(`./${DB_CONSTANTS.DB_NAME}`, {
  valueEncoding : 'json'
});
