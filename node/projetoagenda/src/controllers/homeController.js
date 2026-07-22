const Contact = require('../models/ContactModel')

exports.index = async (req, res) => {
  try {
    const contacts = await Contact.searchContacts(); 
    
    // CORREÇÃO: Passando a variável 'contacts' para a view index.ejs
    res.render('index', { contacts });
  } catch(e) {
    console.log(e);
    res.render('404');
  }
};
