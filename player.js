export default class Player {
    name(name){
        this.name = name?name:'lhc'
    }
    yearsOld(yearsOld){
        this.yearsOld = '我的年龄'+yearsOld?yearsOld:20
    }
    operate(operate){
        this.operate = '我的操作'+operate?operate:'无操作'
        this.info = this.name + this.yearsOld + this.operate
    }

}