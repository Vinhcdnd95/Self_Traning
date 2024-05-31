import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateProductDto } from '../product/dto/update-product.dto';
import { ResponseData } from 'src/dto/response-data.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll(): ResponseData<object> {
    const users = this.userService.findAll;
    return new ResponseData(users, HttpStatus.OK, 'tra ve tat ca users');
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): ResponseData<object> {
    const user = this.userService.findOne(id);
    return new ResponseData(user, HttpStatus.OK, 'tra ve users co ID= ${id}');
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: {name: string}): ResponseData<object> {
    const updateUser = this.userService.update(id, UpdateUserDto);
    return new ResponseData(updateUser, HttpStatus.OK, 'Update user');
  }

  @Delete(':id')
  remove(@Param('id') id: number): ResponseData<object> {
    const removedUser = this.userService.remove(id);
    return new ResponseData(removedUser, HttpStatus.OK, 'remove user');
  }
}
