class Main extends egret.DisplayObjectContainer {
	public constructor() {
		super();

		var group:GroupRect = new GroupRect();
		this.addChild(group);
		group.createBlackRect();
		group.addEventListener("gameOver", this.gameOver, this);
		group.addEventListener("clickRight", this.clickRight, this);
	}

	private gameOver() {
		console.log("gameOver");
	}

	private clickRight() {
		console.log("clickRight");
	}
}


