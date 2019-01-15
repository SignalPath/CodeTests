class MainTest extends org.scalatest.FunSuite {
  test("Main.specialMath") {
    assert(Main.specialMath(0) === 0)
    assert(Main.specialMath(1) === 1)
    assert(Main.specialMath(2) === 3)
    assert(Main.specialMath(3) === 7)
    assert(Main.specialMath(4) === 14)
    assert(Main.specialMath(7) === 79)
    assert(Main.specialMath(17) === 10926)
    // The following expected values come from https://oeis.org/A001924/b001924.txt
    assert(Main.specialMath(37) === 165580101)
    assert(Main.specialMath(90) === BigInt("19740274219868223074"))
    assert(Main.specialMath(500) === BigInt("955620997609204752896986850849030784038174487916669186294134525152075026461787231598163278910835948083625"))
  }
}
