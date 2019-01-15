object Main {
  val cache = collection.mutable.Map.empty[Int, BigInt]
  def specialMath(n: Int) : BigInt = {
    cache.getOrElseUpdate(n,
      if (n == 0) 
        0
      else if (n == 1) 
        1
      else
        n + specialMath(n - 1) + specialMath(n - 2)
    )
  }

  def main(args: Array[String]): Unit = {
    println(specialMath(args(0).toInt))
  }
}