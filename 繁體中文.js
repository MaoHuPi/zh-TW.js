class 繁體中文{
    #language = 'zh-TW';
    #math = Math || {};
    #console = typeof window !== 'undefined' ? window.console : console;
    constructor(){
        console.warn('怎麼會有人想用英文以外的語言寫程式呢？');
        if(!this.#window.console){
            this.#window.console = {}
        }
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
    }
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
	get 布林(){return Boolean;}
	get 控制台(){return this.#console;}
	get 數學(){return this.#math;}
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
            if(bool){
                return callback !== undefined ? 
                    callback() : 
                    (callback2) => {return callback2();};
            }
        };
    }
}
