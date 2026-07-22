const mongoose = require('mongoose');
const validator = require('validator')

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: false, default: '' },
  email: { type: String, required: false, default: '' },
  cttNumber: { type: Number, required: false },
  createdAt: { type: Date, default: Date.now }
});

const ContactModel = mongoose.model('Contact', ContactSchema);

class Contact {
    constructor(body) {
        this.body = body
        this.errors = []
        this.contact = null
    }

    validate() {
        this.cleanUp()

        if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('Email inválido.')
        if(!this.body.name) this.errors.push('Nome é um campo obrigatório.')
        if(!this.body.cttNumber && !this.body.email) this.errors.push('É necessário pelo menos um número ou email para prosseguir.')
    }

    cleanUp() {
        for(const key in this.body) {
            if (typeof this.body[key] !== 'string'){
                this.body[key] = ''
            }
        }

        this.body = {
            name: this.body.contact_name,
            surname: this.body.contact_surname,
            email: this.body.contact_email,
            cttNumber: (this.body.contact_number && this.body.contact_number.trim() !== '') ? Number(this.body.contact_number) : null,
        }
    }

    async register() {
        this.validate()

        if(this.errors.length > 0) return

        this.contact = await ContactModel.create(this.body)
    }

    static async searchForId(id){
        if(typeof id !== 'string') return
        const contact = await ContactModel.findById(id)
        return contact
    }

    static async searchContacts() {
        try {
            const contacts = await ContactModel.find().sort({ createdAt: -1 });
            return contacts;
        } catch(e) {
            console.log(e);
            return [];
        }
    }

    async edit(id) {
        if(typeof id !== 'string') return
        this.validate()
        if(this.errors.length > 0) return
        this.contact = await ContactModel.findByIdAndUpdate(id, this.body, { returnDocument: 'after' })
    }

    static async delete(id) {
        if(typeof id !== 'string') return
        // , this.body, { returnDocument: 'after' }
        const contact = await ContactModel.findByIdAndDelete(id)
        return contact
    }
}

module.exports = Contact;
