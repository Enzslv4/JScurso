import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';

export default class User extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Campo de nome deve ter entre 3 e 255 caracteres.'
          }
        }
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          isEmail: {
            msg: 'Email inválido.'
          }
        },
        unique: {
          msg: 'Email já existe'
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      password: {
        type: Sequelize.VIRTUAL,
        defaultValue: '',
        validate: {
          len: {
            args: [8, 144],
            msg: 'Campo de senha deve ter entre 8 e 144 caracteres.'
          }
        }
      },
    }, {
      sequelize,
      tableName: 'users',
      modelName: 'User',
    });

    this.addHook('beforeSave', async user => {
      if(user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 12)
      }
    })
    return this;
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash)
  }
}
