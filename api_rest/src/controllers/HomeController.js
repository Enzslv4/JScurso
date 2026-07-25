import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const newStudent = await Aluno.create({
      name: 'Enzo',
      surname: 'Silva',
      email: 'a@a.co',
      age: 24,
      weight: 68,
      height: 1.78
    });
    res.json(newStudent);
  }
}

export default new HomeController();
