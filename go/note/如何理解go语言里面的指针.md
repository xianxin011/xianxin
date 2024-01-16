# 如何立即go语言里面的指针？
## 理解
& ：返回变量的存储地址
* ：取指针变量对应的数值
```go
package main
import "fmt"
func main(){
        //定义一个变量：
        var age int = 18
        fmt.Println("age对应的存储空间的地址为：",&age)//age对应的存储空间的地
        var ptr *int = &age
        fmt.Println(ptr)
        fmt.Println("ptr这个指针指向的具体数值为：",*ptr)
}
```