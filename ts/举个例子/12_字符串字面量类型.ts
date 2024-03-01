// 字符串字面量类型用来约束取值只能时某几个字符串中的一个

type EventName = 'click' | 'scroll' | 'mouseover'

function handle(ele:EventName){
    console.log();
    
}
handle('click')