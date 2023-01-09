import Asus from "./Asus";
import Macbook from "./Macbook";

let asusZenbook = new Asus("Zenbook", true, true);
console.log(asusZenbook);
asusZenbook.b();

let macbookPro2020 = new Macbook(2020, false, false);
console.log(macbookPro2020);
macbookPro2020.a();
