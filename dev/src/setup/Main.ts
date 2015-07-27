/**
 * Created by Andrew on 7/23/15.
 */
class Main {
  private static instance:Main = null;
  public static start():void {
    if (Main.instance === null) {
      Main.instance = new Main();
    }
  }

  private _vsb:VirtualScrollBox;

  constructor() {
    console.log("Application started");

    var fakeCount:number = 1000;
    var minHeight:number = 20;
    var data:JQuery[] = [];
    for (var i:number = 0; i < fakeCount; i++) {
      var item:JQuery = $('<div></div>');
      item.addClass('item');
      item.text('Something Something ' + i);
      var height:number = Math.floor(Math.random() * 180) + minHeight;
      item.css('height', height + 'px');

      data.push(item);
    }

    this._vsb = new VirtualScrollBox('#scrollBox', minHeight * 2, false);
    this._vsb.addData(data);
  }
}