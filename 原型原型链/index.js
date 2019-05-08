function Word(opt){
    this.text = opt
}
Word.prototype = {
    WordAleat(){
        console.log(this.text)
    }
}

var wode = new Word("我是Wode构造函数")

wode.print = function(){
    console.log(this.text)
    console.log(this)
}
wode.print() // 我是Wode构造函数  this指向的是 Word() 构造函数
wode.WordAleat() // 我是Wode构造函数

console.log(wode.__proto__ === Word.prototype)