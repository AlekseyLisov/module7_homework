class Powertool {
  constructor (type, power, company) {
    this.type = type
    this.power = power
    this.company = company
    this.enabled = false
    }
    
    getEnabled = function() {
      this.enabled = true;
    }
  
    getPower = function() {
      if (this.enabled) {
          return this.power;
      } else {
          return 0;
      }
    }
    
    getInfo = function() {
      if (this.power > 0) {
        console.log(`${this.type} ${this.company} enabled and consuming ${this.power} Watt`)
      }
      else {
        console.log(`${this.type} ${this.company} disabled, consuming 0 Watt`)
      }
    }
}
  
class elAppliances extends Powertool {
  constructor (type, country, company, power) {
    super(type, power, company)
    this.type = type
    this.power = power
    this.company = company
    this.country = country
  }
} 
const teapot = new elAppliances('Teapot', 'Fance', 'Tefal', 0)
const frige = new elAppliances('Frige', 'China', 'Leran', 900)
const washmashine = new elAppliances('Washmashine', 'China', 'Haier', 1100)
  
teapot.getInfo();
frige.getInfo();
washmashine.getInfo();
  
teapot.getEnabled()
frige.getEnabled()
washmashine.getEnabled()
  
const getPowerSum = () => {
    let sum = 0
    sum += teapot.getPower()
    sum += frige.getPower() 
    sum += washmashine.getPower()
      
    let result = sum !== 0 ? `Total power ${sum} Watt` : "Consuming not"
    console.log(result)
}
  
getPowerSum()