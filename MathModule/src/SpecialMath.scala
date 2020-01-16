object SpecialMath {
  def specialMath(n:Int, cache: Array[Long]) : Long = {
    if (n == 0) return 0L
    if (n == 1) return 1L
    else {
      val n1 = if (cache(n - 1) != 0) cache(n-1) else specialMath(n-1, cache)
      val n2 = if (cache(n - 2) != 0) cache(n-2) else specialMath(n-2, cache)

      cache(n-1) = n1
      cache(n-2) = n2
      return n + n1 + n2
    }
  }

  def main(args: Array[String]) {
    val cache = new Array[Long](91)
    (0 to 90).foreach(cache(_)=0L)
    println(specialMath(90,cache))
  }
}