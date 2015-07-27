/// <reference path="../_ref.d.ts" />

/**
 * Created by Andrew on 7/26/15.
 */
class VirtualScrollBox {
  // Visible DOM Variables
  private _element:JQuery;
  private _contentContainer:JQuery;
  private _visibleItems:JQuery[];
  private _elementHeight:number;
  private _visibleCount:number;
  private _minHeight:number;

  // Virtual Data Variables
  private _items:JQuery[];
  private _pointer:number;

  /**
   * A Virtual ScrollBox is a container that can have a large variant of items. Only a very small subset of items are visible in the
   * 'viewport' and the remaining items are just sitting in memory. As the user scrolls, the items from memory will be transferred to one
   * of the visible squares, thus saving the vast time adding (and/or potentially removing) items to the DOM.
   *
   * @param targetSelector - The selector that directs to the div (ideally) that will be converted into a Virtual ScrollBox
   * @param smallestHeight - The smallest height of the elements... TODO: Maybe not needed?
   * @param containsData - Optional. True if the container already has data that you want converted to a Virtual ScrollBox (potentially
   *  useful if you wish to add multiple items later); Defaults to false TODO: Support...
   */
  constructor(targetSelector:string, smallestHeight:number, containsData:boolean = false) {
    this._element = $(targetSelector);
    if (this._element.length === 0) {
      throw new Error("VirtualScrollBox was unable to find the element (" + targetSelector + ") to attach to.");
    }
    this._contentContainer = null;
    this._visibleItems = [];
    this._elementHeight = 0;
    this._visibleCount = 0;
    this._minHeight = smallestHeight;
    this._items = null;
    this._pointer = 0;

    this._element.addClass('vsb_scroll_container');
    if (containsData) {
      this._parseExistingData();
    }
    else {
      this._setupForNewData();
    }
  }

  /**
   * Adds items.
   *
   * @param elements - Items to add to the Virtual ScrollBox
   */
  public addData(elements:JQuery[]):void {
    this._items = elements;

    this._determineSize();
    this._updateBuffers();
  }

  /**
   * TODO: Support...
   * Useful if you add items outside of the VirtualScrollBox API and wish to refresh the internal data to match up with what the content is
   * currently.
   */
  public refresh():void {
    console.warn("Incomplete - refresh()");
  }

  private _parseExistingData():void {
    var children:JQuery = this._element.children();

    console.warn("Incomplete - _parseExistingData()");
  }

  private _setupForNewData():void {
    this._elementHeight = this._element.height();

    // Setup the content container (all the content will appear here and we will fake 'padding', aka content, to adjust the scroll bar)
    this._contentContainer = $('<div></div>');

    this._element.append(this._contentContainer);

    this._element.on('scroll', (e:Event) => { this._handleScroll(e); });
  }

  private _determineSize():void {
    if (this._minHeight === 0) {
      var minSize:number = 0;
      if (this._items.length > 1) {
        var item:JQuery = this._items[0].clone();
        item.addClass('hide');
        $(document.body).append(item);
        minSize = item.height();
      }
      this._minHeight = minSize;
    }

    this._visibleCount = Math.ceil(this._elementHeight / this._minHeight) + 1;
    this._visibleItems = [];
    //this._contentContainer.empty(); // TODO: Determine the risk?
    for (var i:number = this._pointer; i < this._visibleCount + this._pointer; i++) {
      var visibleItem:JQuery = this._items[i].clone();
      this._visibleItems.push(visibleItem);
      this._contentContainer.append(visibleItem);
    }

    this._updateVisibleValues();
  }

  private _handleScroll(e:Event):void {
    this._pointer = Math.floor(this._element.scrollTop() / this._minHeight);
    if (this._pointer > this._items.length - this._visibleCount) {
      this._pointer = this._items.length - this._visibleCount;
    }
    this._updateBuffers();
    this._updateVisibleValues();
  }

  private _updateVisibleValues():void {
    for (var i:number = this._pointer, j:number = 0; i < this._visibleCount + this._pointer; i++, j++) {
      if (i >= this._items.length) {
        // Bottom
        this._contentContainer.css('padding-bottom', '0px');
        break;
      } else {
        this._visibleItems[j].text(this._items[i].text());
        this._visibleItems[j].attr('style', this._items[i].attr('style'));
      }
    }
  }

  private _updateBuffers():void {
    var remaining:number = this._items.length - this._pointer - this._visibleCount;
    this._contentContainer.css({
      'padding-top': (this._pointer * this._minHeight) + 'px',
      'padding-bottom': (remaining * this._minHeight) + 'px'
    });
  }
}