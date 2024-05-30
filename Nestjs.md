
# 1. Cài đặt công cụ
# 2. Tổng quan 

NestJS là một framework Node.JS cho phép xây dựng ứng dụng phía server. Nest mở rộng các framework Node.js như Express hay Fastify để bổ sung thêm nhiều module hay thư viện hỗ trợ việc xử lý tác vụ. Đây là một framework mã nguồn mở, sử dụng TypeScript và rất linh hoạt để xây dựng các hệ thống backend.
# 3. Kiến trúc cơ bản
Các file trong thư mục Src:
- main.ts: File để khởi tạo các đối tượng chạy ứng dụng, 
- app.module.ts: Là module gốc của ứng dụng, có trách nhiệm đóng gói mọi thứ có trong project.
- app.controller.ts: Chứa các router để xử lý các request và trả về response cho client.
- app.services.ts: Chứa các hàm xử lý logic cho service, chẳng hạn như ứng dụng có service kết nối đến DB hoặc xử lý file,…
- app.controller.spec.ts: File dùng để viết unit test cho các controller.

Về cơ bản khi mới bắt đầu ta quan tâm tới 3 thành phần chính trong Nestjs là module, controller và service
# Controller
Khi có request HTTP đến, cơ chế routing sẽ chuyển request này đến controller tương ứng để xử lý và trả về phản hồi thích hợp. Để tạo một controller thì ta dùng @Controller() để liên kết class Controller với request tương ứng.

```bash
    import { Controller, Get } from '@nestjs/common';

  @Controller('users')
  export class UsersController {
    @Get()
    findAll(): string {
      return 'This action returns all users';
    }
  }
```
 # Service (provider)
 Provider là thành phần cơ bản trong Nest, một provider có thể được đưa vào làm một dependency để tạo ra mối liên hệ giữa nhiều đối tượng khác nhau. Các lớp như services, repositories hay helpers có thể được xem như provider bằng cách thêm decorator @Injectable() vào.
# Module
Một module được thiết kế để đóng gói các logic liên quan của những chức năng cần triển khai đến client một cách độc lập. Một module trong Nest là class được định nghĩa với decorator @Module() của Nest, dùng để mô tả các thuộc tính như controller, provider hay dependency của module này.

```bash
    import { Module } from '@nestjs/common';
  import { UsersController } from './users.controller';
  import { UsersService } from './users.service';

  @Module({
    controllers: [UsersController],
    providers: [UsersService],
  })
  export class UsersModule {}
```
Lưu ý: Sau khi định nghĩa xong module users, ta cần phải import vào module gốc của project (app.module.ts):

```bash
  import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
})
export class AppModule {}
```
