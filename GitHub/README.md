# 1. Tạo repo trên giao diện GitHub 
 Nhập tên repositoory Self_Train
# 2. Các lệnh cơ bản
Clone 1 repository về máy
```bash
  Git clone <Url repository>
```
```bash
Git add GitHub.md
Git commit -m "Them file GitHub.md"
Git push origin GitHub
```
# Commit
 - Thêm một tệp tin
 ```bash
 git add <file_name>
```
 - Thêm tất cả tệp tin thay đổi/tạo mới/xóa
 ```bash
 git add .
```


 - Tạo commit với mesage truyền vào
 ```bash
 git commit -m "<message>"
```

 - Thêm option -a: tự động đưa các thay đổi/xóa vào vùng stage và tạo commit
 ```bash
 git commit -am "<message>"
```

- Lấy về các thay đổi từ remote repository và thực hiện cập nhật trực tiếp vào local repository (merge hoặc rebase)
```bash
  Git pull origin <tên branch>
```
- Lấy về các thay đổi từ remote repository mà không thực hiện bất kỳ thay đổi nào trong local repository.
```bash
  Git fetch -a
```
- Push commit tới Remote repository

```bash
  Git push origin <Tên branch>
```
# Các lệnh liên quan tới branch
- Tạo brach mới
```bash
  Git branch <Tên branch>
```
- Kiểm tra các branch trên local, remote, cả local và remote
```bash
  Git branch
  Git branch -r
  Git branch -a
```
- Chuyển nhánh làm việc
```bash
  Git checkout <tên branch chuyển tới>
```
- Tạo nhánh mới và chuyển sang đó
```bash
  Git branch -b <Tên nhánh mới>
```
- Xóa nhánh
```bash
  Git branch -d <Tên branch>
```
