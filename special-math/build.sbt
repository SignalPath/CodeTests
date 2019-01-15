lazy val root = (project in file(".")).
  settings(
    inThisBuild(List(
      organization := "com.example",
      scalaVersion := "2.12.7"
    )),
    name := "special-math"
  )

libraryDependencies += "org.scalatest" %% "scalatest" % "3.0.5" % Test
