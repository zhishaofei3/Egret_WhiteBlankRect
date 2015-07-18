class Game {
	private _root:egret.DisplayObjectContainer;

	public constructor(root:egret.DisplayObjectContainer) {
		this._root = root;
		this.createGroupRect();
		this.createTimer();
		this.startGame();
	}

	private _row:number;
	private _rectRoot:egret.Sprite;
	private _rectGroups:Array<GroupRect>;

	private createGroupRect() {
		this._rectRoot = new egret.Sprite();
		this._root.addChild(this._rectRoot);
		this._rectGroups = [];
		this._row = Data.getRectRow();

		var groupRect:GroupRect;
		for (var i = 0; i < this._row; i++) {
			groupRect = new GroupRect();
			groupRect.addEventListener("gameOver", this.gameOver, this);
			groupRect.addEventListener("clickRight", this.nextRow, this);
			this._rectGroups.push(groupRect);
			groupRect.y = Data.getRectWidth() * i;
			this._rectRoot.addChild(groupRect);
		}
		this._rectRoot.y = Data.getStageHeight() - this._rectRoot.height;
	}

	private nextRow() {
		for (var i = 0; i < this._row; i++) {
			this._rectGroups[i].move();
		}
		Data.score++;
	}

	private gameOver() {

	}

	private _timerPanel:TimerPanel;

	private createTimer() {
		this._timerPanel = new TimerPanel();
		this._timerPanel.addEventListener("gameOver", this.gameOver, this);
		this._root.addChild(this._timerPanel);
	}

	private startGame() {

	}
}