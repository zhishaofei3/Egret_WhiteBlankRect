class Rect extends egret.Sprite {
	public constructor() {
		super();
		this.touchEnabled = true;
		this.draw();
	}

	private _colors:Array<number> = [0x000000, 0xffffff, 0xff0000, 0x0000ff];
	private _currentColor:number = 1;

	private draw() {
		this.graphics.lineStyle(1, 0x000000);
		this.graphics.beginFill(this._colors[this._currentColor]);
		this.graphics.drawRect(0, 0, Data.getRectWidth(), Data.getRectWidth());
		this.graphics.endFill();
	}

	private _type:string = RectType.NONCLICKABLE;

	public get type():string {
		return this._type;
	}

	public set type(value:string) {
		if (value != this._type) {
			this._currentColor = value == RectType.CLICKABLE ? 0 : 1;
			this.draw();
			this._type = value;
		}
	}

	public onRectClick() {
		if(this._type == RectType.CLICKABLE) {
			this._currentColor = 3;
		} else {
			this._currentColor = 2;
		}
		this.draw();
	}
}
