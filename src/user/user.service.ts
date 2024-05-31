import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ];
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find(user => user.id === id);
    if(!user){
      throw new NotFoundException("User with ID ${id} not found");
    }
    return user;
  }

  update(id: number, updateUserDto: { name: string}) {
    const userIndex = this.users.findIndex(user => user.id ===id);
    if (userIndex === -1){
      throw new NotFoundException("User with ID ${id} not found");
    }
    this.users[userIndex].name = updateUserDto.name;
    return this.users[userIndex];
  }

  remove(id: number) {
    const userIndex = this.users.findIndex(user => user.id ===id);
    if (userIndex === -1){
      throw new NotFoundException("User with ID ${id} not found");
    }
    const removedUser = this.users.splice(userIndex, 1)[0];
    // splice tra ve 1 mang duoc cat ra tu mang ban dau
    return removedUser;
  }
}
