class 繁體中文{
    #language = 'zh-TW';
    #window = typeof window !== 'undefined' ? window : {};
    #math = Math || {};
    #console = typeof window !== 'undefined' ? window.console : console;
    #variables = {};
    #useStrict = false;
    constructor(){
        this.#console.warn('怎麼會有人想用英文以外的語言寫程式呢？');
        if(!this.#window.console){
            this.#window.console = {}
        }
        this.#window.數學 = this.#math;
        this.#window.控制台 = this.#console;
        this.#math.圓周率 = this.#math.PI || 3.141592653589793;
        function factorial(n){
            let last = 1;
            while(n > 0){
                last *= n;
                n -= 1;
            }
            return(last);
        }
        this.#math.階乘 = factorial;
        this.#math.正弦 = this.#math.sin || function sin(rad, d = 10){
            let last = 0
            let sign = 1;
            for(let i = 1 ; i <= 2*d + 1; i += 2){
                last += ((rad**i)*sign)/factorial(i);
                sign *= -1;
            }
            return(last);
        }
        this.#console.列印 = this.#console.log;
        this.#console.印出 = this.#console.log;
        this.#console.打印 = this.#console.log;
        this.#console.記錄 = this.#console.log;
        this.#console.紀錄 = () => {this.#console.error('紀錄是名詞，在此應寫動詞的「記錄」！');};
        this.#console.日誌 = () => {this.#console.error('日誌是名詞，在此應寫動詞的「記錄」！');};
        this.#console.資訊 = this.#console.info;
        this.#console.信息 = this.#console.info;
        this.#console.警告 = this.#console.warn;
        this.#console.提示 = this.#console.warn;
        this.#console.報錯 = this.#console.error;
        this.#console.錯誤 = () => {this.#console.error('錯誤是名詞，在此應寫動詞的「報錯」！');};
        this.#console.整理 = this.#console.table;
        this.#console.表格 = () => {this.#console.error('表格是名詞，在此應寫動詞的「整理」！');};
    }
    get 同層級(){return 'var';}
    get 同區塊(){return 'let';}
    get 同區塊唯讀(){return 'const';}
    get 使用嚴格模式(){
        this.#useStrict = true;
        return () => {};
    }
    get 宣告變數(){
        return (name, value = undefined, mode = 'var') => {
            if(this.#variables[name] && this.#variables[name][1] == 'const'){
                this.#console.error(`「${name}」已宣告為唯讀變數，故不可重複宣告！`);
                return undefined;
            }
            else if(this.#variables[name] && this.#variables[name][1] == 'let'){
                this.#console.error(`「${name}」已宣告為區塊變數，故不可重複宣告！`);
                return undefined;
            }
            else{
                this.#variables[name] = [value, mode];
                return value;
            }
        }
    }
    #setVariable = (name, value) => {
        if(this.#variables[name] && this.#variables[name][1] == 'const'){
            this.#console.error(`「${name}」已宣告為唯讀變數，故不可重新設定！`);
            return undefined;
        }
        else if(this.#useStrict && !(name in this.#variables)){
            this.#console.error(`已啟用嚴格模式，而「${name}」尚未宣告，故不可直接設定！`);
            return undefined;
        }
        else{
            this.#variables[name] = [value, this.#variables[name][1]];
            return value;
        }
    }
    get 設定變數(){return this.#setVariable;}
    get 變數賦值(){return this.#setVariable;}
    #getVariable = (name) => {
        if(this.#useStrict && !(name in this.#variables)){
            this.#console.error(`「${name}」尚未宣告，故不可直接讀取！`);
            return undefined;
        }
        else{
            return this.#variables[name][0];
        }
    }
    get 獲取變數(){return this.#getVariable;}
    get 取得變數(){return this.#getVariable;}
    get 讀取變數(){return this.#getVariable;}
    get 變數取值(){return this.#getVariable;}
	get 真(){return true;}
	get 假(){return false;}
	get 空(){return [,][0];}
	get 鈉鹽(){return NaN;}
	get 無限大(){return Infinity;}
	get 未定義(){return undefined;}
	get 字串(){return String;}
	get 數字(){return Number;}
	get 大整數(){return BigInt;}
	get 陣列(){return Array;}
	get 物件(){return Object;}
	get 集合(){return Set;}
	get 布林(){return Boolean;}
	get 控制台(){return this.#console;}
	get 數學(){return this.#math;}
	get 負(){return x => -x;}
	get 零(){return 0;}
	get 一(){return 1;}
	get 二(){return 2;}
	get 三(){return 3;}
	get 四(){return 4;}
	get 五(){return 5;}
	get 六(){return 6;}
	get 七(){return 7;}
	get 八(){return 8;}
	get 九(){return 9;}
	get 十(){return 10;}
	get 十有五(){return 15;}
	get 志學(){return 15;}
	get 破瓜(){return 16;}
	get 二八(){return 16;}
	get 加冠(){return 20;}
	get 及冠(){return 20;}
	get 弱冠(){return 20;}
	get 花信(){return 24;}
	get 而立(){return 30;}
	get 不惑(){return 40;}
	get 天命(){return 50;}
	get 耳順(){return 60;}
	get 甲子(){return 60;}
	get 杖鄉(){return 60;}
	get 從心(){return 70;}
	get 古稀(){return 70;}
	get 百(){return 1e2;}
	get 千(){return 1e3;}
	get 萬(){return 1e4;}
    get 新(){
        return (constructor, ...args) => {
            return args.length != 0 ? 
                new constructor(...args) : 
                (...args2) => {return new constructor(...args2);};
        };
    }
    get 如果(){
        return (bool, callback = undefined) => {
            if(callback !== undefined){
                if(bool){
                    callback();
                }
            }
            else{
                return bool ? 
                    callback2 => {callback2();} : 
                    () => {};
            }
        };
    }
    get 當(){
        return (value, condition, callback) => {
            while(condition(value)){
                value = callback(value);
            }
            return(value);
        }
    }
}

export default 繁體中文;