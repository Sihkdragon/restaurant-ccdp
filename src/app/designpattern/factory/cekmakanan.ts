import makanan from "../singleton/makanan";
import minuman from "../singleton/minuman";

interface MenuFactory {
  SaveToDB: void;
}

class MenuTypeFactory {
  private FoodsType: string;
  private FoodsName: string;
  constructor(FoodsType: string, FoodsName: string) {
    this.FoodsType = FoodsType;
    this.FoodsName = FoodsName;
  }
  getFoods() {
    let Foods;
    if (this.FoodsType === "Makanan") {
      Foods = new makanan(this.FoodsName);
    } else if (this.FoodsType === "Minuman") {
      Foods = new minuman(this.FoodsName);
    }
    return Foods;
  }
}
export default MenuFactory;
