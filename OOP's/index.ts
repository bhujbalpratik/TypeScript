class player {
  constructor(
    public height: number,
    private weight: number,
    protected injured: boolean
  ) {}

  get getHeight() {
    return this.height
  }

  set setHeight(n: number) {
    this.height = n
  }
}

class playerStatus extends player {
  constructor(
    height: number,
    weight: number,
    injured: boolean,
    gender: string
  ) {
    super(height, weight, injured)
  }
}

// const obj = new player(153, 64, true)

// console.log(`Default Height : ${obj.getHeight}`)
// obj.setHeight = 167
// console.log(`New Height : ${obj.getHeight}`)

const obj1 = new playerStatus(153, 67, false, "male")
