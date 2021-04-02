import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const userEmailExits = this.usersRepository.findByEmail(email);

    if(userEmailExits) {
      throw new Error("Email already exits");
    }

    const user = this.usersRepository.create({name, email});

    return user;

  }
}

export { CreateUserUseCase };
