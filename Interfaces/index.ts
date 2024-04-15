interface user {
  name: string
  email: string
  // startTrail:()=>string
  startTrail?(): string
  getCoupon?(couponName: string, discount: number): number
}
let pratik: user = {
  name: "pratik",
  email: "pb@gmail.com",
  startTrail: () => "start",
  getCoupon: (name, off) => {
    return 100
  },
}
